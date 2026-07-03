import { defaultLang, langPath, locales, type Lang } from "./lang";
import type { EventCardTheme } from "./eventCardThemes";

/**
 * Site events — live vs archive
 * -----------------------------
 * Events are temporary: hub cards and landing pages hide after `endDate` plus
 * `EVENT_ARCHIVE_GRACE_DAYS`. Set `status: "archived"` for early takedown.
 *
 * Card 1 (active): `EventCardActive` on the host locale hub.
 * Card 2 (news): `EventCardNews` on other locale hubs.
 *
 * Hub layout: Card 1 grid → stone divider → Card 2 stack; sorted by `startDate`.
 *
 * See `src/data/events/README.md` and `.cursor/rules/project-rules.mdc`.
 */

/** Days after `endDate` before an event disappears from the hub (UTC dates). */
export const EVENT_ARCHIVE_GRACE_DAYS = 0;

/** A trade fair or event listed on the events hub. */
export interface SiteEvent {
  slug: string;
  /** Market locale — shows the active card on this locale's events hub. */
  hostLocale: Lang;
  /** Locales with a dedicated detail landing page (usually the host locale). */
  detailLocales: readonly Lang[];
  startDate: string;
  endDate: string;
  /** Force-hide before endDate or after grace when cleaning up. */
  status?: "live" | "archived";
  /** Locale-stripped module routes that may show a fair teaser while live. */
  moduleTeasers?: readonly string[];
}

/** Retired events — used for host-locale 301 redirects after pages stop building. */
export const archivedEvents: readonly { slug: string; hostLocale: Lang }[] = [];

export const eventAssets: Readonly<
  Record<
    string,
    {
      logo: string;
      logoAlt: string;
      cardTheme: EventCardTheme;
      officialUrl: string;
    }
  >
> = {
  "dhbv-verbandstag-2026": {
    logo: "/images/events/dhbv/dhbv-logo.png",
    logoAlt: "DHBV Verbandstag",
    cardTheme: "dhbv",
    officialUrl: "https://www.dhbv.de/76-verbandstag-papenburg/",
  },
  archivistica: {
    logo: "/images/events/archivistica/archivistica-logo.jpg",
    logoAlt: "ARCHIVISTICA Logo",
    cardTheme: "navy",
    officialUrl: "https://www.vda.archiv.net/archivistica.html",
  },
  "mutec-2026": {
    logo: "/images/events/mutec/mutec-logo.png",
    logoAlt: "MUTEC",
    cardTheme: "mutec",
    officialUrl: "https://www.mutec.de/en/",
  },
  "worktech26-stockholm": {
    logo: "/images/events/worktech/worktech26-stockholm-logo.svg",
    logoAlt: "WORKTECH26 Stockholm",
    cardTheme: "worktech",
    officialUrl: "https://worktechevents.com/events/worktech26-stockholm/",
  },
};

export const siteEvents: readonly SiteEvent[] = [
  {
    slug: "dhbv-verbandstag-2026",
    hostLocale: "de",
    detailLocales: ["de"],
    startDate: "2026-09-24",
    endDate: "2026-09-26",
  },
  {
    slug: "archivistica",
    hostLocale: "de",
    detailLocales: ["de"],
    startDate: "2026-09-29",
    endDate: "2026-10-01",
    moduleTeasers: ["modules/indoor-climate"],
  },
  {
    slug: "mutec-2026",
    hostLocale: "de",
    detailLocales: ["de"],
    startDate: "2026-11-05",
    endDate: "2026-11-06",
  },
  {
    slug: "worktech26-stockholm",
    hostLocale: "sv",
    detailLocales: ["sv"],
    startDate: "2026-11-10",
    endDate: "2026-11-10",
  },
];

function toUtcDateString(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addUtcDays(isoDate: string, days: number): string {
  const next = new Date(`${isoDate}T00:00:00Z`);
  next.setUTCDate(next.getUTCDate() + days);
  return toUtcDateString(next);
}

/** Whether the event should appear on the hub and build detail pages. */
export function isEventLive(event: SiteEvent, asOf: Date = new Date()): boolean {
  if (event.status === "archived") return false;
  const visibleThrough = addUtcDays(event.endDate, EVENT_ARCHIVE_GRACE_DAYS);
  return toUtcDateString(asOf) <= visibleThrough;
}

export function getLiveEvents(asOf: Date = new Date()): SiteEvent[] {
  return siteEvents.filter((event) => isEventLive(event, asOf));
}

function buildLocaleScopedRoutes(asOf: Date = new Date()): Record<string, readonly Lang[]> {
  const routes: Record<string, readonly Lang[]> = {};
  for (const event of getLiveEvents(asOf)) {
    if (event.detailLocales.length === 0) continue;
    routes[`events/${event.slug}`] = event.detailLocales;
    routes[`contact/${event.slug}`] = event.detailLocales;
  }
  return routes;
}

/** Active (Card 1) events on this locale's hub — fair runs in this market. */
export function getActiveEventsForLocale(lang: Lang, asOf: Date = new Date()): SiteEvent[] {
  return getLiveEvents(asOf)
    .filter((event) => event.hostLocale === lang)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

/** News (Card 2) events on this locale's hub — we exhibit abroad. */
export function getNewsEventsForLocale(lang: Lang, asOf: Date = new Date()): SiteEvent[] {
  return getLiveEvents(asOf)
    .filter((event) => event.hostLocale !== lang)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function hasEventDetailPage(event: SiteEvent, lang: Lang): boolean {
  return event.detailLocales.includes(lang);
}

/** Astro `getStaticPaths` for event landing and contact pages. */
export function getEventStaticPaths(slug: string, asOf: Date = new Date()) {
  const event = siteEvents.find((entry) => entry.slug === slug);
  if (!event || !isEventLive(event, asOf)) return [];
  return event.detailLocales.map((lang) => ({ params: { lang } }));
}

/** Whether a locale-stripped route exists in the target locale. */
export function isRouteAvailableInLocale(routeKey: string, lang: Lang): boolean {
  const scoped = buildLocaleScopedRoutes()[routeKey];
  if (!scoped) return true;
  return scoped.includes(lang);
}

/** Parent hub to land on when switching away from a locale-scoped route. */
export function getRouteFallback(routeKey: string, targetLang: Lang): string {
  if (routeKey.startsWith("events/")) return langPath("events", targetLang);
  if (routeKey.startsWith("contact/")) return langPath("contact", targetLang);
  return langPath("", targetLang);
}

export function eventDetailPath(slug: string, lang: Lang = defaultLang): string {
  return langPath(`events/${slug}`, lang);
}

/** Hub Card 1 link — always our landing page in the host locale. */
export function eventCardHref(event: SiteEvent, lang: Lang): string {
  return eventDetailPath(event.slug, lang);
}

/** Module-page fair teaser — only while the event is live. */
export function getModuleEventTeaser(
  eventSlug: string,
  moduleRouteKey: string,
  lang: Lang,
  asOf: Date = new Date(),
): { href: string } | null {
  const event = siteEvents.find((entry) => entry.slug === eventSlug);
  if (!event || !isEventLive(event, asOf)) return null;
  if (!event.moduleTeasers?.includes(moduleRouteKey)) return null;
  if (lang !== event.hostLocale) return null;
  return { href: eventCardHref(event, lang) };
}

/**
 * Redirect foreign locales away from detail pages that are not built.
 * Host-locale archived URLs are covered by `getArchivedEventRedirectMap`.
 */
export function getForeignLocaleEventRedirectMap(asOf: Date = new Date()): Record<string, string> {
  const map: Record<string, string> = {};
  for (const event of getLiveEvents(asOf)) {
    if (event.detailLocales.length === 0) continue;
    for (const { code } of locales) {
      if (event.detailLocales.includes(code)) continue;
      map[`/${code}/events/${event.slug}/`] = `/${code}/events/`;
    }
  }
  return map;
}

/** 301 map for retired events — landing → events hub, contact → contact index. */
export function getArchivedEventRedirectMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const { slug, hostLocale } of archivedEvents) {
    map[`/${hostLocale}/events/${slug}/`] = `/${hostLocale}/events/`;
    map[`/${hostLocale}/contact/${slug}/`] = `/${hostLocale}/contact/`;
  }
  return map;
}

/** Combined event redirects for `astro.config.mjs`. */
export function getEventRedirectMap(asOf: Date = new Date()): Record<string, string> {
  return {
    ...getForeignLocaleEventRedirectMap(asOf),
    ...getArchivedEventRedirectMap(),
  };
}
