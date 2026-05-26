export const defaultLang = "en" as const;

/** Locales with a matching page tree under /{code}/. */
export const locales = [
  { code: "en", label: "EN", name: "English" },
  { code: "da", label: "DA", name: "Danish" },
] as const;

export type Lang = (typeof locales)[number]["code"];

const localeCodes = new Set<Lang>(locales.map((l) => l.code));

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
  const match = pathname.match(/^\/(en|da)(\/|$)/);
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
  const prefixMatch = pathname.match(/^\/(en|da)(\/.*)?$/);
  const rest = prefixMatch?.[2] ?? pathname;

  const segments = rest.split("/").filter(Boolean);
  if (segments.length > 0) {
    const last = segments.length - 1;
    segments[last] = translateSlug(segments[last], targetLang);
  }

  return langPath(segments.join("/"), targetLang);
}
