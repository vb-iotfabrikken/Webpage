export const defaultLang = "en" as const;

export type Lang = typeof defaultLang;

/**
 * Build a fully-prefixed URL for the current language.
 * Always leaves a trailing slash so Astro does not 301 the link.
 */
export function langPath(path: string, lang: Lang = defaultLang): string {
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!clean) return `/${lang}/`;
  return `/${lang}/${clean}/`;
}
