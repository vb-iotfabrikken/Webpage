import { archivisticaImages } from "../archivisticaImages";
import { defaultLang, type Lang } from "../lang";

/** Past fair shown in the recap photo block on event landing pages. Update dates here only. */
export const pastFairRecap = {
  eventName: "Deutscher Museumsbund",
  city: "Münster",
  startDate: "2026-05-01",
  endDate: "2026-05-03",
} as const;

export interface FairCollagePhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface EventFairRecapStrings {
  fairEyebrow: string;
  fairHeading: string;
  fairLead: string;
  fairPhotos: [{ caption: string }, { caption: string }, { caption: string }];
}

const localeByLang: Record<Lang, string> = {
  en: "en-GB",
  da: "da-DK",
  de: "de-DE",
  sv: "sv-SE",
};

/** Month and year from an ISO date, localized (e.g. de → "Mai 2026"). */
export function formatFairRecapMonthYear(isoDate: string, lang: Lang = defaultLang): string {
  const [year, month] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat(localeByLang[lang], {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

/** Factual eyebrow: event · city · month year — no relative wording. */
export function buildFairRecapEyebrow(lang: Lang = defaultLang): string {
  const { eventName, city, startDate } = pastFairRecap;
  return `${eventName} · ${city} · ${formatFairRecapMonthYear(startDate, lang)}`;
}

const deLeadTail =
  "Drei Tage lang haben wir mit Restauratorinnen, Konservatoren und Museumsleitungen über Bewahrung und Energieeffizienz gesprochen. Auf der ARCHIVISTICA in Hof setzen wir das Gespräch fort, gerne auch mit Ihnen.";

function buildFairLead(): string {
  const { city, startDate } = pastFairRecap;
  const monthYear = formatFairRecapMonthYear(startDate, "de");
  return `Im ${monthYear} waren wir Gast auf der Tagung des Deutschen Museumsbundes in ${city}. ${deLeadTail}`;
}

const de = {
  fairHeading: "Wir sind unterwegs und freuen uns auf Hof.",
  closingCaption: "Bis bald in Hof",
} as const;

const dictionaries: Partial<Record<Lang, typeof de>> = { de };

function resolveFairRecap(lang: Lang): EventFairRecapStrings {
  const base = dictionaries[lang] ?? dictionaries[defaultLang] ?? de;
  const monthYear = formatFairRecapMonthYear(pastFairRecap.startDate, lang);

  return {
    fairEyebrow: buildFairRecapEyebrow(lang),
    fairHeading: base.fairHeading,
    fairLead: buildFairLead(),
    fairPhotos: [
      { caption: `Unser Stand in ${pastFairRecap.city}` },
      { caption: `${pastFairRecap.eventName} · ${monthYear}` },
      { caption: base.closingCaption },
    ],
  };
}

/** Münster recap copy — German canonical; shown on all event landing pages. */
export function getEventFairRecap(lang: Lang = defaultLang): EventFairRecapStrings {
  return resolveFairRecap(lang);
}

export function buildFairCollagePhotos(
  t: EventFairRecapStrings,
): readonly [FairCollagePhoto, FairCollagePhoto, FairCollagePhoto] {
  return [
    {
      src: archivisticaImages.fairPhotos[0],
      alt: t.fairPhotos[0].caption,
      caption: t.fairPhotos[0].caption,
    },
    {
      src: archivisticaImages.fairPhotos[1],
      alt: t.fairPhotos[1].caption,
      caption: t.fairPhotos[1].caption,
    },
    {
      src: archivisticaImages.fairPhotos[2],
      alt: t.fairPhotos[2].caption,
      caption: t.fairPhotos[2].caption,
    },
  ];
}
