import type { Lang } from "../lang";
import { defaultLang } from "../lang";

export interface WorktechStrings {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbEvents: string;
  breadcrumbCurrent: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  heroMetaFields: {
    labels: { termin: string; ort: string; detail: string };
    ort: string;
    detail: string;
    terminTime?: string;
  };
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  featuresEyebrow: string;
  featuresHeading: string;
  featuresLead: string;
  features: { title: string; body: string; icon: "people" | "place" | "technology" }[];
  topicsEyebrow: string;
  topicsHeading: string;
  topicsLead: string;
  topics: { title: string; body: string }[];
  ctaTitle: string;
  ctaLead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  officialEventLabel: string;
}

const sv: WorktechStrings = {
  metaTitle: "IoT Fabrikken på WORKTECH26 Stockholm",
  metaDescription:
    "Träffa IoT Fabrikken den 10 november 2026 på WORKTECH26 Stockholm i Epicenter. Se hur RoomAlyzer ger arbetsplats- och fastighetsteam data om utrymme, närvaro och inomhusklimat.",
  breadcrumbHome: "Hem",
  breadcrumbEvents: "Event",
  breadcrumbCurrent: "WORKTECH26 Stockholm",
  heroEyebrow: "Vi är där · WORKTECH26 Stockholm",
  heroTitle: "Framtidens arbetsplats.",
  heroTitleAccent: "Med data som grund.",
  heroLead:
    "Träffa IoT Fabrikken på WORKTECH26 i Stockholm och se hur RoomAlyzer hjälper workplace-, fastighets- och facility-team att fatta beslut om utrymme, närvaro och inomhusklimat, med trådlösa sensorer och en plattform byggd för nordiska organisationer.",
  heroMetaFields: {
    labels: { termin: "Datum", ort: "Plats", detail: "Event" },
    ort: "Stockholm",
    detail: "WORKTECH26 Stockholm",
    terminTime: "09:00–17:00",
  },
  heroPrimaryCta: "Boka möte på plats",
  heroSecondaryCta: "Boka online-demo",
  featuresEyebrow: "Vad du kan se hos oss",
  featuresHeading: "People, place and technology, i praktiken.",
  featuresLead:
    "WORKTECH samlar ledare inom workplace strategy, fastigheter, HR och teknik. Vi visar hur kontinuerlig sensordata stödjer hybridarbete, energieffektivitet och bättre beslut om kontoret.",
  features: [
    {
      title: "People, komfort och trivsel",
      icon: "people",
      body: "Mät CO₂, temperatur och luftfuktighet i realtid så att du kan svara på klagomål med fakta, inte känslor, och dokumentera inomhusklimat enligt krav.",
    },
    {
      title: "Place, utnyttjande av ytor",
      icon: "place",
      body: "Se faktisk närvaro i mötesrum, öppna kontorslandskap och gemensamma ytor. Identifiera underutnyttjade zoner och optimera yta utan gissningar.",
    },
    {
      title: "Technology, en plattform",
      icon: "technology",
      body: "RoomAlyzer samlar sensorer, larm och rapporter i en vy. Ingen kabeldragning, inget WiFi-krångel, trådlöst, skalbart och redo för nordiska fastighetsportföljer.",
    },
  ],
  topicsEyebrow: "Konferensens fokus",
  topicsHeading: "Tre teman som möter vår expertis.",
  topicsLead:
    "WORKTECH26 Stockholm utforskar hur människor, fysiska miljöer och teknik samverkar. Här är områden där vi gärna delar erfarenheter och visar live-exempel.",
  topics: [
    {
      title: "Workplace intelligence",
      body: "Från fragmenterad data till beslut som går att fatta, hur sensorer ger facility- och workplace-team en gemensam bild av vad som faktiskt händer i byggnaden.",
    },
    {
      title: "Hybridarbete och samarbete",
      body: "När kontoret ska locka tillbaka medarbetare behövs mätbar insikt om beläggning, mötesrum och zoner, inte bara antaganden om hur ytorna används.",
    },
    {
      title: "Energi och hållbarhet",
      body: "Koppla närvaro och inomhusklimat till ventilation och värme. Minska slöseri i tomma zoner utan att kompromissa med komfort.",
    },
  ],
  ctaTitle: "Vill du boka tid med oss på WORKTECH26?",
  ctaLead:
    "Reservera ett möte på plats i Stockholm eller boka en online-demo i förväg, vi ser fram emot att träffa dig.",
  ctaPrimary: "Boka möte på plats",
  ctaSecondary: "Boka online-demo",
  officialEventLabel: "Officiell WORKTECH26 Stockholm-sida",
};

const dictionaries: Partial<Record<Lang, WorktechStrings>> = { sv };

export function getWorktech(lang: Lang = defaultLang): WorktechStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang] ?? sv;
}
