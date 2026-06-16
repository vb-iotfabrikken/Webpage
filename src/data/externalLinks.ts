import type { Lang } from "./lang";

/**
 * Off-site destinations used throughout the site — login portal, support
 * centre, status page and social profiles. Keep them in one place so
 * rebrands, domain moves or path changes are a single edit.
 */

/**
 * RoomAlyzer app login URL per marketing-site locale.
 * When new locales ship (e.g. `/de/`, `/se/`), add their mapping here —
 * each language version of the site should link to the matching portal locale.
 */
export const roomAlyzerLoginUrls = {
  en: "https://app.roomalyzer.com/index.php?language=united_kingdom",
  se: "https://app.roomalyzer.com/index.php?language=united_kingdom",
  de: "https://app.roomalyzer.com/index.php?language=germany",
  da: "https://app.roomalyzer.com/",
} as const;

export type RoomAlyzerLoginLocale = keyof typeof roomAlyzerLoginUrls;

/** Resolve the RoomAlyzer login URL for the active site locale. */
export function getRoomAlyzerLoginUrl(locale: Lang | RoomAlyzerLoginLocale): string {
  return roomAlyzerLoginUrls[locale as RoomAlyzerLoginLocale] ?? roomAlyzerLoginUrls.en;
}

export const externalLinks = {
  support: "https://support.iot-fabrikken.com/portal/da/home",
  status: "https://status.iot-fabrikken.com/",
  linkedin: "https://www.linkedin.com/company/iot-fabrikken/",
  github: "https://github.com/iot-fabrikken",
  youtube: "https://www.youtube.com/@iot-fabrikken",
} as const;

export type ExternalLinkKey = keyof typeof externalLinks;
