import type { Lang } from "../lang";
import { defaultLang } from "../lang";

export interface MutecStrings {
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
  };
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  featuresEyebrow: string;
  featuresHeading: string;
  featuresLead: string;
  features: { title: string; body: string; icon: "museum" | "climate" | "security" }[];
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

const de: MutecStrings = {
  metaTitle: "IoT Fabrikken auf der MUTEC 2026 in Leipzig",
  metaDescription:
    "Treffen Sie IoT Fabrikken vom 5. bis 6. November 2026 auf der MUTEC in Leipzig. Sehen Sie, wie RoomAlyzer Museen und Ausstellungen beim Klimamonitoring unterstützt.",
  breadcrumbHome: "Startseite",
  breadcrumbEvents: "Veranstaltungen",
  breadcrumbCurrent: "MUTEC 2026",
  heroEyebrow: "Wir sind dabei · MUTEC 2026",
  heroTitle: "Museumstechnik trifft",
  heroTitleAccent: "Raumklima-Monitoring.",
  heroLead:
    "Treffen Sie IoT Fabrikken auf der MUTEC in Leipzig und erfahren Sie, wie RoomAlyzer Temperatur, Luftfeuchtigkeit und CO₂ in Museen, Depots und Ausstellungsräumen überwacht — diskret, kabellos und dokumentationsfähig.",
  heroMetaFields: {
    labels: { termin: "Termin", ort: "Ort", detail: "Messe" },
    ort: "Leipzig",
    detail: "MUTEC",
  },
  heroPrimaryCta: "Termin am Stand buchen",
  heroSecondaryCta: "Online-Demo buchen",
  featuresEyebrow: "Was Sie bei uns sehen können",
  featuresHeading: "Klimaschutz für Kulturgut.",
  featuresLead:
    "MUTEC ist die internationale Fachmesse für Museumstechnik und Ausstellungsbau. Wir zeigen, wie kontinuierliche Sensordaten konservatorische Anforderungen unterstützen und Energie sparen.",
  features: [
    {
      title: "Depot- und Schauraumklima",
      icon: "museum",
      body: "Überwachen Sie Temperatur und relative Luftfeuchtigkeit in Depots, Vitrinen und Ausstellungsräumen — mit Alarmen bei Abweichungen von Sollwerten.",
    },
    {
      title: "CO₂ und Besucherströme",
      icon: "climate",
      body: "Messen Sie CO₂ und Belegung in öffentlichen Bereichen. Steuern Sie Lüftung bedarfsgerecht und dokumentieren Sie Raumklima für Audits.",
    },
    {
      title: "Leckage und Gebäudehülle",
      icon: "security",
      body: "Frühwarnung bei Wassereintritt in Technikräumen oder an der Gebäudehülle — mit Wasserdetektoren und Feuchtesensoren entlang kritischer Stellen.",
    },
  ],
  topicsEyebrow: "Im Fokus der MUTEC",
  topicsHeading: "Drei Themen, die zu unserer Expertise passen.",
  topicsLead:
    "Von der konservatorischen Klimaführung bis zur digitalen Gebäudeüberwachung — hier sind Bereiche, in denen wir gern Erfahrungen teilen.",
  topics: [
    {
      title: "Konservatorisches Monitoring",
      body: "Wie dauerhafte Messung Temperatur und Feuchte in Depots und Schauräumen sichtbar macht — als Grundlage für Gutachten und Präventivmaßnahmen.",
    },
    {
      title: "Energie und Lüftung",
      body: "Bedarfsgerechte Lüftung auf Basis von CO₂- und Belegungsdaten — Komfort für Besucher bei gleichzeitigem Schutz des Kulturguts.",
    },
    {
      title: "Skalierbare Sensorik",
      body: "Kabellos, ohne invasive Installation: RoomAlyzer-Sensoren für historische Gebäude, temporäre Ausstellungen und ganze Museumskomplexe.",
    },
  ],
  ctaTitle: "Möchten Sie uns auf der MUTEC treffen?",
  ctaLead:
    "Reservieren Sie einen Termin am Stand in Leipzig oder buchen Sie vorab eine Online-Demo.",
  ctaPrimary: "Termin am Stand buchen",
  ctaSecondary: "Online-Demo buchen",
  officialEventLabel: "Offizielle MUTEC-Website öffnen",
};

const dictionaries: Partial<Record<Lang, MutecStrings>> = { de };

export function getMutec(lang: Lang = defaultLang): MutecStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang] ?? de;
}
