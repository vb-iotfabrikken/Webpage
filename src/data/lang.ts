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
 * EN ↔ DA slug pairs where the two locales use different path segments.
 * Mirrors the legacy redirects in astro.config.mjs.
 */
const slugPairs: ReadonlyArray<readonly [enSlug: string, daSlug: string]> = [
  ["norddjurs-municipality", "norddjurs-kommune"],
  ["varde-municipality", "varde-kommune"],
  ["gribskov-municipality", "gribskov-kommune"],
  ["d-label", "d-maerket"],
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

/** Read the locale prefix from a pathname, or fall back to the default. */
export function getLangFromPath(pathname: string): Lang {
  const match = pathname.match(/^\/(en|da|de|sv)(\/|$)/);
  if (match && localeCodes.has(match[1] as Lang)) {
    return match[1] as Lang;
  }
  return defaultLang;
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
