import type { Lang } from "../lang";
import { defaultLang } from "../lang";

export interface DhbvStrings {
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
  features: { title: string; body: string; icon: "wood" | "building" | "climate" }[];
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

const de: DhbvStrings = {
  metaTitle: "IoT Fabrikken auf dem 76. DHBV-Verbandstag in Papenburg",
  metaDescription:
    "Treffen Sie IoT Fabrikken vom 24. bis 26. September 2026 auf dem DHBV-Verbandstag in Papenburg. Sehen Sie, wie RoomAlyzer Holzschutz und Gebäudeüberwachung unterstützt.",
  breadcrumbHome: "Startseite",
  breadcrumbEvents: "Veranstaltungen",
  breadcrumbCurrent: "DHBV-Verbandstag 2026",
  heroEyebrow: "Wir sind dabei · 76. DHBV-Verbandstag",
  heroTitle: "Holz- und Gebäudeschutz.",
  heroTitleAccent: "Mit Daten im Blick.",
  heroLead:
    "Treffen Sie IoT Fabrikken auf dem DHBV-Verbandstag in Papenburg und erfahren Sie, wie RoomAlyzer Feuchte, Temperatur und Leckagen in Gebäuden und Schutzkonstruktionen überwacht, kabellos, skalierbar und ohne aufwendige Verkabelung.",
  heroMetaFields: {
    labels: { termin: "Termin", ort: "Ort", detail: "Veranstaltung" },
    ort: "Papenburg",
    detail: "76. DHBV-Verbandstag",
  },
  heroPrimaryCta: "Termin vor Ort buchen",
  heroSecondaryCta: "Online-Demo buchen",
  featuresEyebrow: "Was Sie bei uns sehen können",
  featuresHeading: "Monitoring für Holz- und Gebäudeschutz.",
  featuresLead:
    "Der Verbandstag des Deutschen Holzschutzbundes bringt Fachleute aus Holzschutz, Bausanierung und Gebäudediagnostik zusammen. Wir zeigen, wie kontinuierliche Sensordaten Frühwarnung und Dokumentation erleichtern.",
  features: [
    {
      title: "Holzfeuchte und Schimmelrisiko",
      icon: "wood",
      body: "Überwachen Sie relative Luftfeuchtigkeit und Temperatur in Holzkonstruktionen und Schutzbereichen, mit Alarmen, bevor Schäden entstehen.",
    },
    {
      title: "Gebäude und Konstruktionen",
      icon: "building",
      body: "Erfassen Sie Feuchte an kritischen Stellen in Gebäuden, Dächern und Fassaden. Dokumentieren Sie Zustände für Gutachten und Sanierungsplanung.",
    },
    {
      title: "Leckage und Wasserschäden",
      icon: "climate",
      body: "Wasserdetektoren und Sensorketten melden Leckagen frühzeitig, in Technikräumen, unter Böden oder entlang von Rohrleitungen.",
    },
  ],
  topicsEyebrow: "Im Fokus des Verbandstags",
  topicsHeading: "Drei Themen, die zu unserer Expertise passen.",
  topicsLead:
    "Vom präventiven Holzschutz bis zur digitalen Gebäudeüberwachung, hier sind Bereiche, in denen wir gern Erfahrungen teilen und Live-Beispiele zeigen.",
  topics: [
    {
      title: "Präventiver Holzschutz",
      body: "Wie kontinuierliches Monitoring Feuchte und Temperatur in Holzbauteilen sichtbar macht und Entscheidungen für Sanierung oder Austausch fundiert unterstützt.",
    },
    {
      title: "Gebäudediagnostik",
      body: "Von punktuellen Messungen zu dauerhafter Überwachung: Sensordaten als Grundlage für Gutachten, Wartung und Energieeffizienz.",
    },
    {
      title: "Digitale Alarmierung",
      body: "Automatische Benachrichtigungen bei Grenzwertüberschreitungen, per E-Mail, SMS oder Integration in bestehende Facility-Systeme.",
    },
  ],
  ctaTitle: "Möchten Sie uns in Papenburg treffen?",
  ctaLead:
    "Reservieren Sie einen Termin vor Ort auf dem DHBV-Verbandstag oder buchen Sie vorab eine Online-Demo.",
  ctaPrimary: "Termin vor Ort buchen",
  ctaSecondary: "Online-Demo buchen",
  officialEventLabel: "Offizielle DHBV-Verbandstag-Seite öffnen",
};

const dictionaries: Partial<Record<Lang, DhbvStrings>> = { de };

export function getDhbv(lang: Lang = defaultLang): DhbvStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang] ?? de;
}
