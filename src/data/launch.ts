/**
 * Soft-launch allowlist — the single source of truth for what is "online" vs.
 * "hidden" during the phased Railway launch.
 *
 * Only the pages in the approved live set are considered online. Everything
 * else still builds, but is treated as hidden so it can be gated/excluded and
 * kept out of search engines until it is ready.
 *
 * Approved live set (per the deployment brief):
 *   • Homepage
 *   • Products      → Modules, Sensors (incl. compare + product sheets)
 *   • Resources     → Cases (case studies)
 *   • Company       → About (incl. Story, Team, Press, Trust center), Careers, Partners
 *   • Contact       → Book a demo, Sales, Become a partner, Support info
 *   • Get an offer  → Quote request form (CTA target from sensors + modules)
 *   • Events        → ARCHIVISTICA 2026 landing (/events/archivistica/)
 *   • Support/Legal → Privacy policy, Impressum
 *   • Helpcenter + Log in are external links (no internal page to gate)
 *
 * Also live via LIVE_EXACT: sensor compare matrix at /compare/, quote form at
 * /get-an-offer/, and the ARCHIVISTICA fair landing at /events/archivistica/.
 * Contact/archivistica/ is live via the contact/* prefix.
 *
 * Hidden for now: Platform, Industries (sector hubs + per-sector article
 * lists), Integrations, Pricing, competitive compare articles
 * (vs-manual-logging, etc. — data kept in hubs/compare.ts), ROI, FAQ,
 * Whitepapers, Shop, Glossary, Articles (the renamed library catalogue),
 * Solutions/landing pages, and the remaining Legal pages (Cookies, Terms,
 * Security, Accessibility, SLA) plus the Legal hub index.
 *
 * Matching is locale-agnostic: the leading `/en|da|de|sv/` prefix is stripped
 * before a path is compared, so a rule covers every locale at once.
 */

import { locales } from "./lang";

/**
 * Master switch. When `true`, only pages on the allowlist are considered live;
 * everything else is hidden. Flip to `false` to treat the whole site as live
 * (e.g. for the full public launch).
 */
export const LAUNCH_LIVE_ONLY = true;

/**
 * Whole sections that are live. A path matches when it equals the prefix or
 * starts with `${prefix}/`. Values are locale-stripped (no leading slash).
 */
export const LIVE_PREFIXES: readonly string[] = [
  "modules",
  "sensors",
  "case-studies",
  "about",
  "contact",
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
  "events/archivistica", // ARCHIVISTICA 2026 fair landing (DE indoor-climate teaser)
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

/**
 * Strip the locale prefix and normalise to a bare route key.
 *
 * Handles both request paths (`/da/about/team/`) and emitted output files
 * (`da/about/team/index.html`, `404.html`) by removing a trailing
 * `index.html` / `.html` and surrounding slashes.
 */
export function stripLocale(pathname: string): string {
  let path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  path = path.replace(localePrefix, "/");
  path = path.replace(/index\.html$/, "").replace(/\.html$/, "");
  return path.replace(/^\/+/, "").replace(/\/+$/, "");
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

  return LIVE_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

/** Convenience inverse of {@link isLivePath}. */
export function isHiddenPath(pathname: string): boolean {
  return !isLivePath(pathname);
}
