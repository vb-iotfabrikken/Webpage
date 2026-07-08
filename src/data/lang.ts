import { getRouteFallback, isRouteAvailableInLocale } from "./events";
import { canonicalizePath, routePath, isArticleTranslated } from "./routes";

export {
  localizeSegment,
  canonicalizeSegment,
  routePath,
  canonicalizePath,
} from "./routes";

export const defaultLang = "en" as const;

/** Locales with a matching page tree under /{code}/. */
export const locales = [
  { code: "en", label: "EN", name: "English" },
  { code: "da", label: "DA", name: "Danish" },
  { code: "de", label: "DE", name: "German" },
  { code: "sv", label: "SV", name: "Swedish" },
] as const;

export type Lang = (typeof locales)[number]["code"];

const localeCodes = new Set<Lang>(locales.map((l) => l.code));

/**
 * Locales that may be indexed / advertised via hreflang and the sitemap. All
 * four locales serve native-language URLs and localized structural, hub and
 * product copy. Per-article indexing is gated separately by the
 * content-readiness gate (see `isPageIndexed`), so English-fallback article
 * bodies never get indexed under a localized slug.
 */
export const INDEXED_LOCALES = new Set<Lang>(["en", "da", "de", "sv"]);

/** Should pages in this locale be indexed (and advertised via hreflang)? */
export function isIndexedLocale(lang: Lang): boolean {
  return INDEXED_LOCALES.has(lang);
}

/**
 * Locale-stripped routes that are fully translated in every locale and should
 * be indexed (and included in hreflang) even when the locale is not yet in
 * INDEXED_LOCALES site-wide.
 */
export const MULTILINGUAL_INDEXED_ROUTES = new Set<string>(["compare"]);

/**
 * Strip the locale prefix and return the canonical (English) route key.
 *
 * Segments are canonicalized so callers that key off English route keys
 * (indexing, hreflang, the soft-launch allowlist) keep working even when the
 * incoming path uses localized segments (e.g. `/de/module/raumklima/`).
 */
export function stripLocaleRoute(pathname: string): string {
  const lang = getLangFromPath(pathname);
  const rest = pathname
    .replace(/^\/(en|da|de|sv)(\/|$)/, "/")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");
  return canonicalizePath(rest, lang);
}

/** Whether this pathname is a fully translated route indexed in all locales. */
export function isMultilingualIndexedRoute(pathname: string): boolean {
  return MULTILINGUAL_INDEXED_ROUTES.has(stripLocaleRoute(pathname));
}

/** Whether this page should be indexed and advertised via hreflang alternates. */
export function isPageIndexed(pathname: string, lang: Lang): boolean {
  if (!isIndexedLocale(lang) && !isMultilingualIndexedRoute(pathname)) {
    return false;
  }

  // Content-readiness gate: an article detail page in a non-English locale is
  // only indexable once that post is genuinely translated. Until then it serves
  // the English fallback and must stay out of the index. The articles index and
  // tag listings (navigational, localized chrome) are unaffected.
  if (lang !== defaultLang) {
    const routeKey = stripLocaleRoute(pathname);
    const articleDetail = routeKey.match(/^articles\/([^/]+)$/);
    if (articleDetail && articleDetail[1] !== "tags") {
      return isArticleTranslated(articleDetail[1], lang);
    }
  }

  return true;
}

/**
 * Build a fully-prefixed URL for the given language from a canonical English
 * path, translating every segment into the target locale via the route
 * registry. Always leaves a trailing slash so Astro does not 301 the link.
 */
export function langPath(path: string, lang: Lang = defaultLang): string {
  return routePath(path, lang);
}

/** URL of the articles index (the single canonical content catalogue). */
export function articlesIndexPath(lang: Lang = defaultLang): string {
  return langPath("articles", lang);
}

/** URL of a single article by slug. */
export function articlePath(slug: string, lang: Lang = defaultLang): string {
  return langPath(`articles/${slug}`, lang);
}

/** URL of a single case study by slug. */
export function caseStudyPath(slug: string, lang: Lang = defaultLang): string {
  return langPath(`case-studies/${slug}`, lang);
}

/** URL of the per-sector article list under an industry hub. */
export function industryArticlesPath(
  industrySlug: string,
  lang: Lang = defaultLang,
): string {
  return langPath(`industries/${industrySlug}/articles`, lang);
}

/** Read the locale prefix from a pathname, or fall back to the default. */
export function getLangFromPath(pathname: string): Lang {
  const match = pathname.match(/^\/(en|da|de|sv)(\/|$)/);
  if (match && localeCodes.has(match[1] as Lang)) {
    return match[1] as Lang;
  }
  return defaultLang;
}

type ResolveLangInput = {
  pathname: string;
  paramLang?: string;
  currentLocale?: string;
  originPathname?: string;
};

function safeDecodePath(path: string): string {
  try {
    return decodeURIComponent(path);
  } catch {
    return path;
  }
}

/**
 * Pathname the visitor requested. On i18n fallback rewrites Astro.url.pathname
 * points at the English source while originPathname keeps /de/... (etc.).
 */
export function pagePathname(pathname: string, originPathname?: string): string {
  if (originPathname) {
    const decoded = safeDecodePath(originPathname);
    if (/^\/(en|da|de|sv)(\/|$)/.test(decoded)) return decoded;
  }
  return pathname;
}

/**
 * Active locale for the current request. Prefer Astro i18n metadata and route
 * params over Astro.url.pathname, which rewrites to English on fallbacks.
 */
export function resolveLang(input: ResolveLangInput): Lang {
  const { pathname, paramLang, currentLocale, originPathname } = input;

  if (paramLang && localeCodes.has(paramLang as Lang)) {
    return paramLang as Lang;
  }

  if (currentLocale && localeCodes.has(currentLocale as Lang)) {
    return currentLocale as Lang;
  }

  return getLangFromPath(pagePathname(pathname, originPathname));
}

/** Minimal Astro context needed to resolve the visitor's locale. */
export type AstroLangContext = {
  url: URL;
  params: Record<string, string | undefined>;
  currentLocale?: string;
  originPathname?: string;
};

/** Resolve locale from an Astro component's global context. */
export function astroLang(astro: AstroLangContext): Lang {
  return resolveLang({
    pathname: astro.url.pathname,
    paramLang: astro.params.lang,
    currentLocale: astro.currentLocale,
    originPathname: astro.originPathname,
  });
}

type LocalLink = { label: string; href?: string };

/**
 * Rewrite an internal link so its locale prefix and every path segment match
 * the active locale (keeps query + hash). The incoming href may already be
 * localized in another locale (e.g. `/de/module/raumklima/`) or canonical
 * English (`/en/modules/indoor-climate/` or `/modules/indoor-climate`); it is
 * first mapped back to canonical English, then localized into `lang`.
 */
export function localizeHref(href: string, lang: Lang): string {
  if (
    !href ||
    /^https?:\/\//i.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  const url = new URL(href, "https://placeholder.local");

  // Static assets (files with an extension: `.pdf`, `.png`, `sitemap.xml`, …)
  // are not locale-routed pages. Never prefix or localize them, otherwise a
  // download link like `/downloads/product-sheets/co2.pdf` would be rewritten
  // to a non-existent `/de/downloads/produktdatenblaetter/co2.pdf/`.
  const lastSegment = url.pathname.replace(/\/+$/, "").split("/").pop() ?? "";
  if (lastSegment.includes(".")) return href;

  const localeMatch = url.pathname.match(/^\/(en|da|de|sv)(\/.*)?$/);

  let canonicalRest: string;
  if (localeMatch) {
    const sourceLang = localeMatch[1] as Lang;
    const rest = (localeMatch[2] ?? "/").replace(/^\/+/, "").replace(/\/+$/, "");
    canonicalRest = canonicalizePath(rest, sourceLang);
  } else if (url.pathname.startsWith("/")) {
    const rest = url.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
    canonicalRest = canonicalizePath(rest, defaultLang);
  } else {
    return href;
  }

  const pathname = langPath(canonicalRest, lang);
  return `${pathname}${url.search}${url.hash}`;
}

/** Localize a CTA pair's hrefs while keeping labels intact. */
export function localizeCta<T extends { label: string; href: string }>(
  cta: T,
  lang: Lang,
): T {
  return { ...cta, href: localizeHref(cta.href, lang) };
}

/** Localize breadcrumb hrefs for the active locale. */
export function localizeCrumbs<T extends LocalLink>(crumbs: T[], lang: Lang): T[] {
  return crumbs.map((crumb) =>
    crumb.href ? { ...crumb, href: localizeHref(crumb.href, lang) } : crumb,
  );
}

/**
 * Build the equivalent URL in another locale. The source path may use
 * localized segments in its own locale; it is mapped back to canonical English
 * (all segments, not just the last) and then localized into `targetLang`.
 */
export function switchLocalePath(pathname: string, targetLang: Lang): string {
  const sourceLang = getLangFromPath(pathname);
  const rest = pathname
    .replace(/^\/(en|da|de|sv)(\/|$)/, "/")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");
  const canonical = canonicalizePath(rest, sourceLang);
  return langPath(canonical, targetLang);
}

/**
 * Resolve the URL to use when switching languages. Falls back to a parent hub
 * when the equivalent page does not exist in the target locale.
 */
export function localeSwitchTarget(pathname: string, targetLang: Lang): string {
  const routeKey = stripLocaleRoute(pathname);
  if (isRouteAvailableInLocale(routeKey, targetLang)) {
    return switchLocalePath(pathname, targetLang);
  }
  return getRouteFallback(routeKey, targetLang);
}
