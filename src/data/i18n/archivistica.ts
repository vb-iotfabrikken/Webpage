import type { Lang } from "../lang";
import { defaultLang } from "../lang";

export interface ArchivisticaStrings {
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
  usps: { value: string; label: string }[];
  featuresEyebrow: string;
  featuresHeading: string;
  featuresLead: string;
  features: { title: string; body: string; icon: "shield" | "bolt" | "chart" }[];
  quoteEyebrow: string;
  quoteHeading: string;
  quoteBody: string[];
  quoteName: string;
  quoteRole: string;
  testimonialsEyebrow: string;
  testimonialsHeading: string;
  testimonialsLead: string;
  testimonials: { quote: string; name: string; org: string; logoAlt: string; logoSrc: string }[];
  references: string[];
  logoMarqueeCaption: string;
  ctaTitle: string;
  ctaLead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  officialEventLabel: string;
  /** Optional stand/booth line on the landing-page venue card. */
  venueBooth?: { label: string; detail: string };
}

const de: ArchivisticaStrings = {
  metaTitle: "IoT Fabrikken auf der ARCHIVISTICA 2026 in Hof (Saale)",
  metaDescription:
    "Treffen Sie IoT Fabrikken vom 29. September bis 1. Oktober 2026 auf der ARCHIVISTICA in Hof. Sehen Sie, wie RoomAlyzer Kulturgut bewahrt und Energie spart.",
  breadcrumbHome: "Startseite",
  breadcrumbEvents: "Veranstaltungen",
  breadcrumbCurrent: "ARCHIVISTICA 2026",
  heroEyebrow: "Wir sind dabei · ARCHIVISTICA 2026",
  heroTitle: "Kulturgut schützen.",
  heroTitleAccent: "Energie sparen.",
  heroLead:
    "Treffen Sie IoT Fabrikken auf der ARCHIVISTICA in Hof und erleben Sie, wie RoomAlyzer Kulturgut zuverlässig schützt und gleichzeitig Heizkosten messbar reduziert. Live am Stand, oder vorab in einer kostenlosen Online-Demo.",
  heroMetaFields: {
    labels: { termin: "Termin", ort: "Ort", detail: "Fachmesse" },
    ort: "Hof (Saale)",
    detail: "ARCHIVISTICA & Deutscher Archivtag",
  },
  heroPrimaryCta: "Termin am Messestand reservieren",
  heroSecondaryCta: "Online-Demo buchen",
  venueBooth: {
    label: "Besuchen Sie uns",
    detail: "Stand 1 - Oberes Festsaalfoyer E + 1",
  },
  usps: [
    { value: "Bis zu 10 Jahre", label: "Batterielaufzeit" },
    { value: "Ohne WLAN & Kabel", label: "NB-IoT-Mobilfunk" },
    { value: "Warnung", label: "per SMS oder E-Mail" },
    { value: "DGNB-fähig", label: "automatische Berichte" },
  ],
  featuresEyebrow: "Was Sie an unserem Stand erwartet",
  featuresHeading: "Bewahrung und Energieoptimierung — in einer Lösung.",
  featuresLead:
    "Auf der ARCHIVISTICA zeigen wir Ihnen, wie unsere drahtlosen Sensoren und die RoomAlyzer-Plattform historisches Kulturgut schützen und gleichzeitig dabei helfen, Heizenergie systematisch zu reduzieren.",
  features: [
    {
      title: "Bewahrung von Kulturgut",
      icon: "shield",
      body: "Präzise Messung von Temperatur, Luftfeuchtigkeit, CO₂ und TVOC (Ausgasungen). Bereits eine Schwankung der relativen Luftfeuchtigkeit um 5 % kann Papier verziehen und Pergament reißen lassen — RoomAlyzer warnt Sie rechtzeitig, bevor Schäden entstehen.",
    },
    {
      title: "Energie sparen mit Daten",
      icon: "bolt",
      body: "Ein Grad weniger spart bis zu 5 % Heizkosten. Mit datenbasierten Berichten und DGNB-Auswertungen passen Sie Heizkurven und CTS-Anlagen so an, dass die Bewahrung gesichert ist — ohne Energie zu verschwenden.",
    },
    {
      title: "Live-Demo RoomAlyzer",
      icon: "chart",
      body: "Erleben Sie die Plattform zum Anfassen: Dashboard, Karte, Schimmelmodul und mobile Ansicht. Keine WLAN-, Kabel- oder IT-Eingriffe nötig — die Sensoren übertragen sicher und unabhängig über das Mobilfunknetz.",
    },
  ],
  quoteEyebrow: "Stimme aus der Praxis",
  quoteHeading:
    "„Das ist für uns essenziell — eine zuverlässige und präzise Überwachung, auf die wir zählen können.“",
  quoteBody: [
    "In einem historischen Archiv wie dem unseren ist das Raumklima von entscheidender Bedeutung für die langfristige Bewahrung unwiederbringlicher Kulturschätze. Alte Papierdokumente und empfindliche Pergamente reagieren sensibel auf Schwankungen der Luftfeuchtigkeit. Eine Veränderung der relativen Luftfeuchtigkeit um 5 % kann dazu führen, dass sich Papier verzieht und Pergament reißt.",
    "Was für uns im Alltag den entscheidenden Unterschied macht, ist die hohe Messgenauigkeit und die Langzeitstabilität der Sensoren. Das gesamte System ist zudem unglaublich einfach und zeitsparend in der Handhabung. Die Echtzeit-Alarmierung des Systems fungiert dabei als unser digitaler Wächter — kombiniert mit einer langen Batterielaufzeit und Sensoren, die sich problemlos in Ausstellungen und Archivboxen platzieren lassen.",
  ],
  quoteName: "Martin Eckert",
  quoteRole: "Leitung Archivstelle Sigmaringen · Erzdiözese Freiburg",
  testimonialsEyebrow: "Was unsere Kunden sagen",
  testimonialsHeading: "Vertrauen aus Kirchen, Museen und Kommunen.",
  testimonialsLead:
    "Kirchen, Diözesen und Museen in ganz Deutschland setzen auf RoomAlyzer — vom kleinen Pfarrarchiv bis zum überregionalen Diözesanarchiv.",
  testimonials: [
    {
      quote:
        "Die Sensoren von IoT Fabrikken sind für uns eine hilfreiche Lösung: schnell einsetzbar, unabhängig von WLAN oder Strom, und die Datenübertragung läuft sicher über das Mobilfunknetz.",
      name: "Tim Brendle-Behnisch",
      org: "Evangelische Kirche in Hessen und Nassau",
      logoAlt: "Evangelische Kirche in Hessen und Nassau",
      logoSrc: "/images/events/archivistica/partner-ek-nassau.jpg",
    },
    {
      quote:
        "Wir haben uns für die Lösung von IoT Fabrikken entschieden, weil sie eine sehr übersichtliche Plattform bieten und als Unternehmen flexibel auf unsere Bedürfnisse eingehen.",
      name: "Claudia Dambacher",
      org: "Erzdiözese Freiburg",
      logoAlt: "Erzdiözese Freiburg",
      logoSrc: "/images/events/archivistica/partner-erz-freiburg.png",
    },
    {
      quote:
        "IoT Fabrikkens System ist flexibel einsetzbar und funktioniert unabhängig von WLAN oder Strom. Durch die Fernauslesbarkeit sparen wir enorme Zeit.",
      name: "Johanna Schumacher",
      org: "Katholische Kirche Bistum Limburg",
      logoAlt: "Katholische Kirche Bistum Limburg",
      logoSrc: "/images/events/archivistica/partner-bistum-limburg.svg",
    },
  ],
  references: [
    "Erzdiözese Freiburg",
    "Evangelische Kirche in Hessen und Nassau",
    "Katholische Kirche Bistum Limburg",
    "Johann-Albrecht-Kapelle",
    "Stadtarchiv Hof",
    "Museen & Kommunen",
  ],
  logoMarqueeCaption: "Vertraut von Kommunen, Unternehmen und Kulturinstitutionen",
  ctaTitle: "Bereit für ein Gespräch auf der ARCHIVISTICA?",
  ctaLead:
    "Reservieren Sie einen Termin am Messestand oder buchen Sie vorab eine Online-Demo — wir freuen uns auf Sie in Hof.",
  ctaPrimary: "Termin am Messestand reservieren",
  ctaSecondary: "Online-Demo buchen",
  officialEventLabel: "Offizielle ARCHIVISTICA-Website öffnen",
};

const dictionaries: Partial<Record<Lang, ArchivisticaStrings>> = { de };

export function getArchivistica(lang: Lang = defaultLang): ArchivisticaStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang] ?? de;
}
