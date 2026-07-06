/**
 * Soft-launch allowlist — the single source of truth for what is "online" vs.
 * "hidden" during the phased Railway launch.
 *
 * Full inventory (nav, pages, hidden sections): `launch/README.md`.
 *
 * Only allowlisted pages are considered online. Everything else still builds,
 * but is treated as hidden so it can be pruned from dist and kept out of
 * search engines until ready.
 *
 * Approved live set (summary):
 *   • Homepage
 *   • Products      → Four modules + modules hub; Sensors (incl. product sheets);
 *                     compare matrix + head-to-head at /compare/ (LIVE_EXACT)
 *   • Resources     → Case studies
 *   • Company       → About (story, team, careers, press, trust center, partners)
 *   • Contact       → Hub, book-demo, sales, become-partner, support-info; event
 *                     contact forms in each live event's detailLocales
 *   • Events        → Hub + landing pages in detailLocales (see events.ts)
 *   • Get an offer  → Quote request form
 *   • Legal         → Privacy, Impressum only
 *   • Helpcenter + Log in are external (no internal page to gate)
 *
 * Module pages are matched via LIVE_MODULE_SLUGS (not the whole /modules/ tree).
 *
 * Hidden for now: Platform, Industries, Integrations, Pricing, competitive
 * compare articles (vs-manual-logging, etc. — data in hubs/compare.ts), ROI,
 * FAQ, Whitepapers, Shop, Glossary, Articles, Solutions/landing pages, most
 * Legal pages, and module pages push-buttons, lockers-doors, usage-cleaning.
 *
 * Matching is locale-agnostic: strip `/en|da|de|sv/` before comparing.
 *
 * Branch workflow: see `launch/README.md`.
 */

import { locales, canonicalizePath, defaultLang, type Lang } from "./lang";

/**
 * Master switch. When `true`, only pages on the allowlist are considered live;
 * everything else is hidden. Flip to `false` to treat the whole site as live
 * (e.g. for the full public launch).
 */
export const LAUNCH_LIVE_ONLY = false;

/**
 * Whole sections that are live. A path matches when it equals the prefix or
 * starts with `${prefix}/`. Values are locale-stripped (no leading slash).
 */
export const LIVE_PREFIXES: readonly string[] = [
  "sensors",
  "case-studies",
  "about",
  "contact",
  "events",
];

/**
 * Module landing pages that are live during soft launch. The modules hub index
 * (`modules`) is also live so breadcrumbs resolve. Other module slugs stay hidden.
 */
export const LIVE_MODULE_SLUGS: readonly string[] = [
  "indoor-climate",
  "space-management",
  "water-detection",
  "preservation",
];

/**
 * Individual pages that are live even though their wider section is hidden.
 * Values are locale-stripped; `""` is the locale homepage (e.g. `/en/`).
 */
export const LIVE_EXACT: readonly string[] = [
  "",
  "cases", // legacy redirect → case-studies; keep reachable
  "compare", // sensor compare matrix + head-to-head
  "get-an-offer",
  "legal/privacy",
  "legal/impressum",
];

/**
 * Utility routes that must always stay reachable regardless of the allowlist
 * (error pages, form receipts, etc.).
 */
export const ALWAYS_ALLOWED: readonly string[] = [
  "404",
  "thank-you",
  "thanks",
];

const localePrefix = new RegExp(`^/(?:${locales.map((l) => l.code).join("|")})(?:/|$)`);
const localePrefixCapture = new RegExp(
  `^/(${locales.map((l) => l.code).join("|")})(?:/|$)`,
);

/**
 * Strip the locale prefix and normalise to a bare, canonical (English) route
 * key.
 *
 * Handles both request paths (`/da/about/team/`) and emitted output files
 * (`da/about/team/index.html`, `404.html`) by removing a trailing
 * `index.html` / `.html` and surrounding slashes. Localized segments (e.g.
 * `/de/module/raumklima/`) are mapped back to their English key so the
 * allowlist can stay authored in canonical English.
 */
export function stripLocale(pathname: string): string {
  let path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const lang = (path.match(localePrefixCapture)?.[1] as Lang) ?? defaultLang;
  path = path.replace(localePrefix, "/");
  path = path.replace(/index\.html$/, "").replace(/\.html$/, "");
  const key = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return canonicalizePath(key, lang);
}

/**
 * Is the given path part of the live (online) set?
 *
 * Accepts a full pathname (e.g. `/da/about/team/`) or an already-stripped
 * path. When `LAUNCH_LIVE_ONLY` is `false`, every path is live.
 */
export function isLivePath(pathname: string): boolean {
  if (!LAUNCH_LIVE_ONLY) return true;

  const path = stripLocale(pathname);

  if (ALWAYS_ALLOWED.includes(path)) return true;
  if (LIVE_EXACT.includes(path)) return true;
  if (path === "modules") return true;
  if (
    LIVE_MODULE_SLUGS.some(
      (slug) => path === `modules/${slug}` || path.startsWith(`modules/${slug}/`),
    )
  ) {
    return true;
  }

  return LIVE_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

/** Convenience inverse of {@link isLivePath}. */
export function isHiddenPath(pathname: string): boolean {
  return !isLivePath(pathname);
}
