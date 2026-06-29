import { getRouteFallback, isRouteAvailableInLocale } from "./events";

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
 * Locales that have real, human-ready translations and may therefore be
 * indexed / advertised via hreflang and the sitemap. English-first for now:
 * the /da/, /de/, /sv/ trees still fall back to English content, so they are
 * kept out of search engines until their translations ship. Add a code here
 * once that locale is genuinely translated.
 */
export const INDEXED_LOCALES = new Set<Lang>(["en"]);

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

/** Strip the locale prefix and return the bare route key (no leading/trailing slashes). */
export function stripLocaleRoute(pathname: string): string {
  return pathname
    .replace(/^\/(en|da|de|sv)(\/|$)/, "/")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");
}

/** Whether this pathname is a fully translated route indexed in all locales. */
export function isMultilingualIndexedRoute(pathname: string): boolean {
  return MULTILINGUAL_INDEXED_ROUTES.has(stripLocaleRoute(pathname));
}

/** Whether this page should be indexed and advertised via hreflang alternates. */
export function isPageIndexed(pathname: string, lang: Lang): boolean {
  return isIndexedLocale(lang) || isMultilingualIndexedRoute(pathname);
}

/**
 * EN ↔ DA slug pairs where the two locales use different path segments.
 * Mirrors the legacy redirects in astro.config.mjs.
 */
const slugPairs: ReadonlyArray<readonly [enSlug: string, daSlug: string]> = [
  ["norddjurs-municipality", "norddjurs-kommune"],
  ["varde-municipality", "varde-kommune"],
  ["gribskov-municipality", "gribskov-kommune"],
];

/**
 * Build a fully-prefixed URL for the given language.
 * Always leaves a trailing slash so Astro does not 301 the link.
 */
export function langPath(path: string, lang: Lang = defaultLang): string {
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!clean) return `/${lang}/`;
  return `/${lang}/${clean}/`;
}

/** URL of the articles index (the single canonical content catalogue). */
export function articlesIndexPath(lang: Lang = defaultLang): string {
  return langPath("articles", lang);
}

/** URL of a single article by slug. */
export function articlePath(slug: string, lang: Lang = defaultLang): string {
  return langPath(`articles/${slug}`, lang);
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

/** Swap the locale prefix on an internal path (keeps query + hash). */
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
  const localeMatch = url.pathname.match(/^\/(en|da|de|sv)(\/.*)?$/);

  let pathname: string;
  if (localeMatch) {
    const rest = (localeMatch[2] ?? "/").replace(/^\/+/, "").replace(/\/+$/, "");
    pathname = langPath(rest, lang);
  } else if (url.pathname.startsWith("/")) {
    const rest = url.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
    pathname = langPath(rest, lang);
  } else {
    return href;
  }

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

function translateSlug(slug: string, targetLang: Lang): string {
  for (const [enSlug, daSlug] of slugPairs) {
    if (targetLang === "da" && slug === enSlug) return daSlug;
    if (targetLang === "en" && slug === daSlug) return enSlug;
  }
  return slug;
}

/**
 * Build the equivalent URL in another locale by swapping the prefix and
 * translating any paired slugs in the final path segment.
 */
export function switchLocalePath(pathname: string, targetLang: Lang): string {
  const prefixMatch = pathname.match(/^\/(en|da|de|sv)(\/.*)?$/);
  const rest = prefixMatch?.[2] ?? pathname;

  const segments = rest.split("/").filter(Boolean);
  if (segments.length > 0) {
    const last = segments.length - 1;
    segments[last] = translateSlug(segments[last], targetLang);
  }

  return langPath(segments.join("/"), targetLang);
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
