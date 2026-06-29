import { defaultLang, langPath, type Lang } from "./lang";

/**
 * Site events — card display rules
 * --------------------------------
 * Card 1 (active): dark gradient, links to the detail page. Shown on the host
 * locale's /events/ hub when the fair takes place in that market (e.g. a German
 * fair on /de/events/).
 *
 * Card 2 (news): light informational card. Shown on all other locale hubs to
 * announce that we are exhibiting abroad — no detail-page link, points visitors
 * to the host locale via the language menu.
 *
 * When adding an event, set `hostLocale` to the market where the fair runs and
 * `detailLocales` to locales that have a dedicated landing page.
 */

/** A trade fair or event listed on the events hub. */
export interface SiteEvent {
  slug: string;
  /** Market locale — shows the active card on this locale's events hub. */
  hostLocale: Lang;
  /** Locales with a dedicated detail landing page (usually the host locale). */
  detailLocales: readonly Lang[];
  startDate: string;
  endDate: string;
}

export const eventAssets: Readonly<
  Record<string, { logo: string; logoAlt: string }>
> = {
  archivistica: {
    logo: "/images/events/archivistica/archivistica-logo.jpg",
    logoAlt: "ARCHIVISTICA Logo",
  },
};

/** Routes that only exist in specific locales (locale-stripped keys). */
export const LOCALE_SCOPED_ROUTES: Readonly<Record<string, readonly Lang[]>> = {
  "events/archivistica": ["de"],
  "contact/archivistica": ["de"],
};

export const siteEvents: readonly SiteEvent[] = [
  {
    slug: "archivistica",
    hostLocale: "de",
    detailLocales: ["de"],
    startDate: "2026-09-29",
    endDate: "2026-10-01",
  },
];

/** Active (Card 1) events on this locale's hub — fair runs in this market. */
export function getActiveEventsForLocale(lang: Lang): SiteEvent[] {
  return siteEvents.filter((event) => event.hostLocale === lang);
}

/** News (Card 2) events on this locale's hub — we exhibit abroad. */
export function getNewsEventsForLocale(lang: Lang): SiteEvent[] {
  return siteEvents.filter((event) => event.hostLocale !== lang);
}

export function hasEventDetailPage(event: SiteEvent, lang: Lang): boolean {
  return event.detailLocales.includes(lang);
}

/** Whether a locale-stripped route exists in the target locale. */
export function isRouteAvailableInLocale(routeKey: string, lang: Lang): boolean {
  const scoped = LOCALE_SCOPED_ROUTES[routeKey];
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
