import type { Lang } from "../lang";
import { defaultLang } from "../lang";

/** Copy for one event — active card on the host locale, news card elsewhere. */
export interface EventCardCopy {
  title: string;
  date: string;
  location: string;
  active: {
    eyebrow: string;
    cta: string;
  };
  news: {
    eyebrow: string;
    note: string;
  };
}

export interface EventsHubStrings {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  emptyTitle: string;
  emptyLead: string;
  events: Record<string, EventCardCopy>;
}

const en: EventsHubStrings = {
  metaTitle: "Events | IoT Fabrikken",
  metaDescription:
    "Meet IoT Fabrikken at trade fairs and industry events. See where we exhibit and how to book time with our team.",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Events",
  heroTitle: "Meet us in person.",
  heroTitleAccent: "Trade fairs and industry events.",
  heroLead:
    "We exhibit at selected trade fairs in our key markets. See where we will be next.",
  emptyTitle: "No upcoming events right now.",
  emptyLead: "Check back later or book a demo to speak with our team.",
  events: {
    "dhbv-verbandstag-2026": {
      title: "76. DHBV Verbandstag",
      date: "24–26 September 2026",
      location: "Papenburg",
      active: { eyebrow: "Upcoming", cta: "Learn more" },
      news: {
        eyebrow: "Exhibiting in Germany",
        note: "The DHBV association conference brings together wood and building protection professionals. Switch to Deutsch (DE) in the menu for dates and on-site meetings.",
      },
    },
    archivistica: {
      title: "ARCHIVISTICA 2026",
      date: "29 September – 1 October 2026",
      location: "Hof (Saale)",
      active: { eyebrow: "Upcoming", cta: "Learn more" },
      news: {
        eyebrow: "Exhibiting in Germany",
        note: "ARCHIVISTICA is a trade fair for archives, libraries and cultural heritage. Switch to Deutsch (DE) in the menu for fair details and on-site appointments.",
      },
    },
    "mutec-2026": {
      title: "MUTEC 2026",
      date: "5–6 November 2026",
      location: "Leipzig",
      active: { eyebrow: "Upcoming", cta: "Learn more" },
      news: {
        eyebrow: "Exhibiting in Germany",
        note: "MUTEC is the international trade fair for museum and exhibition technology. Switch to Deutsch (DE) in the menu for fair details and on-site appointments.",
      },
    },
    "worktech26-stockholm": {
      title: "WORKTECH26 Stockholm",
      date: "10 November 2026",
      location: "Epicenter, Stockholm",
      active: { eyebrow: "Upcoming", cta: "Learn more" },
      news: {
        eyebrow: "Exhibiting in Sweden",
        note: "WORKTECH26 is a senior-level conference on the future of work and the workplace. Switch to Svenska (SV) in the menu for event details and on-site meetings.",
      },
    },
  },
};

const da: EventsHubStrings = {
  metaTitle: "Arrangementer | IoT Fabrikken",
  metaDescription:
    "Mød IoT Fabrikken på messer og brancheevents. Se hvor vi udstiller, og book tid med vores team.",
  breadcrumbHome: "Hjem",
  breadcrumbCurrent: "Arrangementer",
  heroTitle: "Mød os fysisk.",
  heroTitleAccent: "Messer og brancheevents.",
  heroLead:
    "Vi deltager på udvalgte messer i vores kernemarkeder. Se hvor vi er næste gang.",
  emptyTitle: "Ingen kommende arrangementer lige nu.",
  emptyLead: "Kom tilbage senere, eller book en demo og tal med vores team.",
  events: {
    "dhbv-verbandstag-2026": {
      title: "76. DHBV Verbandstag",
      date: "24.–26. september 2026",
      location: "Papenburg",
      active: { eyebrow: "Kommende", cta: "Læs mere" },
      news: {
        eyebrow: "Udstilling i Tyskland",
        note: "DHBV Verbandstag samler fagfolk inden for træ- og bygningsbeskyttelse. Skift til Deutsch (DE) i menuen for datoer og møder på stedet.",
      },
    },
    archivistica: {
      title: "ARCHIVISTICA 2026",
      date: "29. september – 1. oktober 2026",
      location: "Hof (Saale)",
      active: { eyebrow: "Kommende", cta: "Læs mere" },
      news: {
        eyebrow: "Udstilling i Tyskland",
        note: "ARCHIVISTICA er en fagmesse for arkiver, biblioteker og kulturarv. Skift til Deutsch (DE) i menuen for messedetaljer og tider på standen.",
      },
    },
    "mutec-2026": {
      title: "MUTEC 2026",
      date: "5.–6. november 2026",
      location: "Leipzig",
      active: { eyebrow: "Kommende", cta: "Læs mere" },
      news: {
        eyebrow: "Udstilling i Tyskland",
        note: "MUTEC er den internationale fagmesse for museums- og udstillingsteknologi. Skift til Deutsch (DE) i menuen for messedetaljer og tider på standen.",
      },
    },
    "worktech26-stockholm": {
      title: "WORKTECH26 Stockholm",
      date: "10. november 2026",
      location: "Epicenter, Stockholm",
      active: { eyebrow: "Kommende", cta: "Læs mere" },
      news: {
        eyebrow: "Udstilling i Sverige",
        note: "WORKTECH26 er en konference om fremtidens arbejde og arbejdsplads. Skift til Svenska (SV) i menuen for eventdetaljer og møder på stedet.",
      },
    },
  },
};

const de: EventsHubStrings = {
  metaTitle: "Veranstaltungen | IoT Fabrikken",
  metaDescription:
    "Treffen Sie IoT Fabrikken auf Fachmessen und Branchenevents. Sehen Sie, wo wir ausstellen und buchen Sie Zeit mit unserem Team.",
  breadcrumbHome: "Startseite",
  breadcrumbCurrent: "Veranstaltungen",
  heroTitle: "Persönlich treffen.",
  heroTitleAccent: "Fachmessen und Branchenevents.",
  heroLead:
    "Wir sind auf ausgewählten Fachmessen in unseren Kernmärkten vertreten. Sehen Sie kommende Termine oder buchen Sie ein Gespräch mit unserem Team.",
  emptyTitle: "Derzeit keine kommenden Veranstaltungen.",
  emptyLead: "Schauen Sie später wieder vorbei oder buchen Sie eine Demo mit unserem Team.",
  events: {
    "dhbv-verbandstag-2026": {
      title: "76. DHBV-Verbandstag",
      date: "24.–26. September 2026",
      location: "Papenburg",
      active: { eyebrow: "Demnächst", cta: "Mehr erfahren" },
      news: {
        eyebrow: "Messe in Deutschland",
        note: "",
      },
    },
    archivistica: {
      title: "ARCHIVISTICA 2026",
      date: "29. September – 1. Oktober 2026",
      location: "Hof (Saale)",
      active: { eyebrow: "Demnächst", cta: "Mehr erfahren" },
      news: {
        eyebrow: "Messe in Deutschland",
        note: "",
      },
    },
    "mutec-2026": {
      title: "MUTEC 2026",
      date: "5.–6. November 2026",
      location: "Leipzig",
      active: { eyebrow: "Demnächst", cta: "Mehr erfahren" },
      news: {
        eyebrow: "Messe in Deutschland",
        note: "",
      },
    },
    "worktech26-stockholm": {
      title: "WORKTECH26 Stockholm",
      date: "10. November 2026",
      location: "Epicenter, Stockholm",
      active: { eyebrow: "Demnächst", cta: "Mehr erfahren" },
      news: {
        eyebrow: "Messe in Schweden",
        note: "WORKTECH26 ist eine Konferenz über die Zukunft der Arbeit und des Arbeitsplatzes. Wechseln Sie im Menü zu Svenska (SV) für Messedetails und Termine vor Ort.",
      },
    },
  },
};

const sv: EventsHubStrings = {
  metaTitle: "Event | IoT Fabrikken",
  metaDescription:
    "Träffa IoT Fabrikken på mässor och branschevent. Se var vi ställer ut och boka tid med vårt team.",
  breadcrumbHome: "Hem",
  breadcrumbCurrent: "Event",
  heroTitle: "Träffa oss på plats.",
  heroTitleAccent: "Mässor och branschevent.",
  heroLead:
    "Vi deltar på utvalda mässor i våra kärnmarknader. Se var vi finns härnäst.",
  emptyTitle: "Inga kommande event just nu.",
  emptyLead: "Kom tillbaka senare eller boka en demo för att prata med vårt team.",
  events: {
    "dhbv-verbandstag-2026": {
      title: "76. DHBV Verbandstag",
      date: "24–26 september 2026",
      location: "Papenburg",
      active: { eyebrow: "Kommande", cta: "Besök eventwebbplatsen" },
      news: {
        eyebrow: "Utställning i Tyskland",
        note: "DHBV Verbandstag samlar yrkesverksamma inom trä- och byggnadsskydd. Byt till Deutsch (DE) i menyn för datum och möten på plats.",
      },
    },
    archivistica: {
      title: "ARCHIVISTICA 2026",
      date: "29 september – 1 oktober 2026",
      location: "Hof (Saale)",
      active: { eyebrow: "Kommande", cta: "Läs mer" },
      news: {
        eyebrow: "Utställning i Tyskland",
        note: "ARCHIVISTICA är en fackmässa för arkiv, bibliotek och kulturarv. Byt till Deutsch (DE) i menyn för mässinformation och tider vid vår monter.",
      },
    },
    "mutec-2026": {
      title: "MUTEC 2026",
      date: "5–6 november 2026",
      location: "Leipzig",
      active: { eyebrow: "Kommande", cta: "Besök mässans webbplats" },
      news: {
        eyebrow: "Utställning i Tyskland",
        note: "MUTEC är den internationella fackmässan för musei- och utställningsteknik. Byt till Deutsch (DE) i menyn för mässinformation och tider på plats.",
      },
    },
    "worktech26-stockholm": {
      title: "WORKTECH26 Stockholm",
      date: "10 november 2026",
      location: "Epicenter, Stockholm",
      active: { eyebrow: "Kommande", cta: "Läs mer" },
      news: {
        eyebrow: "Konferens i Sverige",
        note: "",
      },
    },
  },
};

const dictionaries: Partial<Record<Lang, EventsHubStrings>> = { en, da, de, sv };

export function getEventsHub(lang: Lang = defaultLang): EventsHubStrings {
  return dictionaries[lang] ?? en;
}

export function getEventCardCopy(
  slug: string,
  lang: Lang = defaultLang,
): EventCardCopy | undefined {
  return getEventsHub(lang).events[slug];
}
