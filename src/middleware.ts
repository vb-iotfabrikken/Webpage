import { defineMiddleware } from "astro:middleware";
import { canonicalizePath, type Lang } from "./data/lang";

/**
 * Localized URLs (e.g. `/da/moduler/indeklima/`) only physically exist after
 * the build-time relocation hook (`localizeFixedPages` in `astro.config.mjs`)
 * moves each page from its English-segment path to its localized path. That
 * hook never runs in `astro dev`, so localized links would 404 (and Astro's
 * `fallback` rewrite mangles the prefix, e.g. `/en/moduler/indeklima/`).
 *
 * This middleware is the request-time mirror of that relocation: it maps the
 * localized segments back to the English-segment route Astro actually
 * generates and rewrites to it, so the dev server serves the correct page
 * while the browser keeps the localized URL. During the static build every
 * prerendered route is already an English-segment path, so this is the
 * identity and does nothing.
 */
function canonicalizeUrlPath(pathname: string): string {
  const match = pathname.match(/^\/(en|da|de|sv)(\/.*)?$/);
  if (!match) return pathname;
  const lang = match[1] as Lang;
  const rest = (match[2] ?? "/").replace(/^\/+/, "").replace(/\/+$/, "");
  const canonical = canonicalizePath(rest, lang);
  return `/${lang}${canonical ? `/${canonical}` : ""}/`.replace(/\/{2,}/g, "/");
}

export const onRequest = defineMiddleware((context, next) => {
  const canonical = canonicalizeUrlPath(context.url.pathname);
  if (canonical !== context.url.pathname) {
    return context.rewrite(canonical + context.url.search);
  }
  return next();
});
