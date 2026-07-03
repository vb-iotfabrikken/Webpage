import type { EventCardCopy } from "./i18n/events";
import { siteEvents } from "./events";

/** Meta chip on landing heroes — date (Termin), city (Ort), then event name. */
export interface EventHeroMetaItem {
  label: string;
  value: string;
}

/** Landing hero meta labels + Ort/detail copy; Termin value is derived from `siteEvents`. */
export interface EventLandingHeroMetaFields {
  labels: { termin: string; ort: string; detail: string };
  ort: string;
  detail: string;
  /** Appended as ` · {time}` when the event has fixed hours (e.g. `09:00–17:00`). */
  terminTime?: string;
}

/** `DD.MM.` from an ISO date (`YYYY-MM-DD`). */
export function formatDdMm(isoDate: string): string {
  const [, month, day] = isoDate.split("-");
  return `${day}.${month}.`;
}

/** `DD.MM.YYYY` from an ISO date (`YYYY-MM-DD`). */
export function formatDdMmYyyy(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${day}.${month}.${year}`;
}

/**
 * Termin display for venue cards and hero meta chips.
 * Single day: `DD.MM.YYYY`; range: `DD.MM. – DD.MM.YYYY`; optional ` · {time}` suffix.
 */
export function formatEventTermin(
  startDate: string,
  endDate: string,
  time?: string,
): string {
  const datePart =
    startDate === endDate
      ? formatDdMmYyyy(startDate)
      : `${formatDdMm(startDate)} – ${formatDdMmYyyy(endDate)}`;
  return time ? `${datePart} · ${time}` : datePart;
}

export function buildLandingHeroMeta(
  slug: string,
  fields: EventLandingHeroMetaFields,
): EventHeroMetaItem[] {
  const event = siteEvents.find((entry) => entry.slug === slug);
  if (!event) {
    throw new Error(`Unknown event slug: ${slug}`);
  }

  const termin = formatEventTermin(event.startDate, event.endDate, fields.terminTime);
  return [
    { label: fields.labels.termin, value: termin },
    { label: fields.labels.ort, value: fields.ort },
    { label: fields.labels.detail, value: fields.detail },
  ];
}

/**
 * Landing-page venue card copy — hub title/eyebrow with date and city from `heroMeta`
 * (row 1: Termin + Ort), not hub card strings.
 */
export function venueCardCopyFromHeroMeta(
  hubCopy: EventCardCopy,
  heroMeta: readonly EventHeroMetaItem[],
): EventCardCopy {
  const [termin, ort] = heroMeta;
  return {
    ...hubCopy,
    date: termin?.value ?? hubCopy.date,
    location: ort?.value ?? hubCopy.location,
  };
}
