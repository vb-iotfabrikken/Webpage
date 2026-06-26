import { defaultLang, type Lang } from "../lang";

/**
 * Homepage copy for every supported locale. English is the canonical source;
 * da/de/sv are translations. Product and brand names are never translated.
 * Mirrors the `ui.ts` dictionary pattern used for shared chrome.
 */

export type FeaturedIndustrySlug =
  | "offices"
  | "churches"
  | "museums-galleries"
  | "municipalities";

export interface HomeUspItem {
  title: string;
  body: string;
}

export interface HomeCard {
  title: string;
  description: string;
}

export interface HomeStrings {
  meta: { title: string; description: string };
  hero: {
    title: string;
    titleAccent: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  logoMarquee: {
    caption: string;
  };
  usp: {
    heading: string;
    intro: string;
    figcaption: string;
    items: HomeUspItem[];
  };
  sensorFinder: {
    heading: string;
    subtitle: string;
    ctaLabel: string;
    cards: Record<FeaturedIndustrySlug, HomeCard>;
  };
  stats: {
    title: string;
    subtitle: string;
    millionSuffix: string;
    labels: [string, string, string];
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
}

const en: HomeStrings = {
  meta: {
    title: "IoT Fabrikken — Sensors and platform for facility and space management",
    description:
      "Market-leading Danish platform for indoor climate, space management and water-leak detection. Plug and play sensors, long battery life and no installation.",
  },
  hero: {
    title: "Data-driven decisions for facility and",
    titleAccent: "space management.",
    lead: "Wireless sensors and a single platform that turns data about indoor climate, space utilisation and water leaks into something you can actually use — no cables, no hassle.",
    ctaPrimary: "Book a free demo",
    ctaSecondary: "Contact sales",
  },
  logoMarquee: {
    caption:
      "Trusted by municipalities, enterprises and cultural institutions across Europe",
  },
  usp: {
    heading: "Why IoT Fabrikken?",
    intro: "Hardware that just works. Software that actually thinks.",
    figcaption:
      "Built and quality-checked in-house — every sensor shipped from our team in Denmark.",
    items: [
      {
        title: "Up to 10-Year Battery",
        body: "Mount in two minutes with no cables or Wi-Fi. Runs seamlessly for up to 10 years.",
      },
      {
        title: "Advice, Not Just Data",
        body: "Skip the complex graphs. Our AI gives you simple advice you act on instantly.",
      },
      {
        title: "End the Debates",
        body: "Replace gut feelings with hard data to confidently optimize your indoor climate.",
      },
      {
        title: "Smart Deployment",
        body: "End alarm fatigue. The system alerts your team exactly when and where they are actually needed.",
      },
    ],
  },
  sensorFinder: {
    heading: "Find the right setup for your space.",
    subtitle: "Start with your industry — we will point you to the sensors and modules that fit.",
    ctaLabel: "See recommended sensors",
    cards: {
      offices: {
        title: "Offices & Workplaces",
        description:
          "Balance space utilisation in hybrid workplaces with employee productivity and comfort.",
      },
      churches: {
        title: "Churches & Heritage",
        description:
          "Protect historic interiors with precise humidity and temperature control in large, unevenly heated buildings.",
      },
      "museums-galleries": {
        title: "Museums & Culture",
        description:
          "Mitigate risk and preserve sensitive collections with continuous climate monitoring aligned to preservation standards.",
      },
      municipalities: {
        title: "Schools & Municipalities",
        description:
          "Prioritise student health, concentration, and energy setbacks across schools, administration, and cultural buildings.",
      },
    },
  },
  stats: {
    title: "Numbers that matter.",
    subtitle:
      "More than fifteen million readings per day from sensors that run without hassle at our customers.",
    millionSuffix: " mio.",
    labels: [
      "sensors in operation at our customers",
      "readings sent to the platform every day",
      "different countries where our solutions are in use",
    ],
  },
  cta: {
    title: "Ready to try it?",
    subtitle:
      "Book a demo and see how data from our sensors can optimise your operations.",
    primary: "Book a free demo",
    secondary: "Contact sales",
  },
};

const da: HomeStrings = {
  meta: {
    title: "IoT Fabrikken — Sensorer og platform til facility- og space management",
    description:
      "Markedsledende dansk platform til indeklima, space management og detektion af vandlækager. Plug and play-sensorer, lang batterilevetid og ingen installation.",
  },
  hero: {
    title: "Datadrevne beslutninger til facility- og",
    titleAccent: "space management.",
    lead: "Trådløse sensorer og én samlet platform, der gør data om indeklima, arealudnyttelse og vandlækager til noget, du faktisk kan bruge — ingen kabler, intet besvær.",
    ctaPrimary: "Book en gratis demo",
    ctaSecondary: "Kontakt salg",
  },
  logoMarquee: {
    caption:
      "Betroet af kommuner, virksomheder og kulturinstitutioner i hele Europa",
  },
  usp: {
    heading: "Hvorfor IoT Fabrikken?",
    intro: "Hardware, der bare virker. Software, der faktisk tænker.",
    figcaption:
      "Bygget og kvalitetstjekket in-house — hver sensor sendes fra vores team i Danmark.",
    items: [
      {
        title: "Op til 10 års batteri",
        body: "Montér på to minutter uden kabler eller Wi-Fi. Kører problemfrit i op til 10 år.",
      },
      {
        title: "Rådgivning, ikke kun data",
        body: "Drop de komplekse grafer. Vores AI giver dig enkle råd, du kan handle på med det samme.",
      },
      {
        title: "Slut med diskussionerne",
        body: "Erstat mavefornemmelser med håndfaste data, og optimér dit indeklima med sikkerhed.",
      },
      {
        title: "Smart udrulning",
        body: "Slut med alarmtræthed. Systemet adviserer dit team præcis når og hvor der reelt er brug for det.",
      },
    ],
  },
  sensorFinder: {
    heading: "Find den rette opsætning til dine lokaler.",
    subtitle: "Start med din branche — så peger vi på de sensorer og moduler, der passer.",
    ctaLabel: "Se anbefalede sensorer",
    cards: {
      offices: {
        title: "Kontorer & arbejdspladser",
        description:
          "Balancér arealudnyttelse på hybride arbejdspladser med medarbejdernes produktivitet og komfort.",
      },
      churches: {
        title: "Kirker & kulturarv",
        description:
          "Beskyt historiske interiører med præcis fugt- og temperaturstyring i store, ujævnt opvarmede bygninger.",
      },
      "museums-galleries": {
        title: "Museer & kultur",
        description:
          "Reducér risiko og bevar følsomme samlinger med kontinuerlig klimaovervågning efter bevaringsstandarder.",
      },
      municipalities: {
        title: "Skoler & kommuner",
        description:
          "Prioritér elevernes sundhed, koncentration og energibesparelser på tværs af skoler, administration og kulturbygninger.",
      },
    },
  },
  stats: {
    title: "Tal, der betyder noget.",
    subtitle:
      "Mere end 15 millioner aflæsninger om dagen fra sensorer, der kører uden besvær hos vores kunder.",
    millionSuffix: " mio.",
    labels: [
      "sensorer i drift hos vores kunder",
      "aflæsninger sendt til platformen hver dag",
      "forskellige lande hvor vores løsninger er i brug",
    ],
  },
  cta: {
    title: "Klar til at prøve det?",
    subtitle:
      "Book en demo og se, hvordan data fra vores sensorer kan optimere jeres drift.",
    primary: "Book en gratis demo",
    secondary: "Kontakt salg",
  },
};

const de: HomeStrings = {
  meta: {
    title: "IoT Fabrikken — Sensoren und Plattform für Facility- und Space-Management",
    description:
      "Marktführende dänische Plattform für Raumklima, Space-Management und Wasserleckerkennung. Plug-and-Play-Sensoren, lange Batterielaufzeit und keine Installation.",
  },
  hero: {
    title: "Datenbasierte Entscheidungen für Facility- und",
    titleAccent: "Space-Management.",
    lead: "Drahtlose Sensoren und eine einzige Plattform, die Daten zu Raumklima, Flächennutzung und Wasserlecks in echten Mehrwert verwandelt — ohne Kabel, ohne Aufwand.",
    ctaPrimary: "Kostenlose Demo buchen",
    ctaSecondary: "Vertrieb kontaktieren",
  },
  logoMarquee: {
    caption:
      "Vertraut von Kommunen, Unternehmen und Kultureinrichtungen in ganz Europa",
  },
  usp: {
    heading: "Warum IoT Fabrikken?",
    intro: "Hardware, die einfach funktioniert. Software, die wirklich mitdenkt.",
    figcaption:
      "Im eigenen Haus gebaut und qualitätsgeprüft — jeder Sensor wird von unserem Team in Dänemark versandt.",
    items: [
      {
        title: "Bis zu 10 Jahre Batterie",
        body: "In zwei Minuten montiert, ohne Kabel oder WLAN. Läuft bis zu 10 Jahre zuverlässig.",
      },
      {
        title: "Beratung, nicht nur Daten",
        body: "Verzichten Sie auf komplexe Diagramme. Unsere KI gibt Ihnen einfache Empfehlungen, die Sie sofort umsetzen.",
      },
      {
        title: "Schluss mit Diskussionen",
        body: "Ersetzen Sie das Bauchgefühl durch belastbare Daten und optimieren Sie Ihr Raumklima mit Sicherheit.",
      },
      {
        title: "Intelligenter Einsatz",
        body: "Schluss mit Alarmmüdigkeit. Das System benachrichtigt Ihr Team genau dann und dort, wo es wirklich gebraucht wird.",
      },
    ],
  },
  sensorFinder: {
    heading: "Finden Sie die richtige Lösung für Ihre Räume.",
    subtitle: "Starten Sie mit Ihrer Branche — wir zeigen Ihnen die passenden Sensoren und Module.",
    ctaLabel: "Empfohlene Sensoren ansehen",
    cards: {
      offices: {
        title: "Büros & Arbeitsplätze",
        description:
          "Bringen Sie Flächennutzung in hybriden Arbeitswelten mit Produktivität und Komfort der Mitarbeitenden in Einklang.",
      },
      churches: {
        title: "Kirchen & Kulturerbe",
        description:
          "Schützen Sie historische Innenräume mit präziser Feuchte- und Temperaturregelung in großen, ungleichmäßig beheizten Gebäuden.",
      },
      "museums-galleries": {
        title: "Museen & Kultur",
        description:
          "Minimieren Sie Risiken und bewahren Sie empfindliche Sammlungen mit kontinuierlicher Klimaüberwachung nach Konservierungsstandards.",
      },
      municipalities: {
        title: "Schulen & Kommunen",
        description:
          "Priorisieren Sie Gesundheit, Konzentration und Energieeinsparungen in Schulen, Verwaltung und Kulturgebäuden.",
      },
    },
  },
  stats: {
    title: "Zahlen, die zählen.",
    subtitle:
      "Mehr als 15 Millionen Messwerte pro Tag von Sensoren, die bei unseren Kunden ohne Aufwand laufen.",
    millionSuffix: " Mio.",
    labels: [
      "Sensoren im Einsatz bei unseren Kunden",
      "Messwerte täglich an die Plattform gesendet",
      "verschiedene Länder, in denen unsere Lösungen im Einsatz sind",
    ],
  },
  cta: {
    title: "Bereit, es auszuprobieren?",
    subtitle:
      "Buchen Sie eine Demo und sehen Sie, wie Daten aus unseren Sensoren Ihren Betrieb optimieren.",
    primary: "Kostenlose Demo buchen",
    secondary: "Vertrieb kontaktieren",
  },
};

const sv: HomeStrings = {
  meta: {
    title: "IoT Fabrikken — Sensorer och plattform för facility- och space management",
    description:
      "Marknadsledande dansk plattform för inomhusklimat, space management och detektering av vattenläckor. Plug and play-sensorer, lång batteritid och ingen installation.",
  },
  hero: {
    title: "Datadrivna beslut för facility- och",
    titleAccent: "space management.",
    lead: "Trådlösa sensorer och en enda plattform som förvandlar data om inomhusklimat, ytutnyttjande och vattenläckor till något du faktiskt kan använda — inga kablar, inget krångel.",
    ctaPrimary: "Boka en gratis demo",
    ctaSecondary: "Kontakta försäljning",
  },
  logoMarquee: {
    caption:
      "Betrodd av kommuner, företag och kulturinstitutioner i hela Europa",
  },
  usp: {
    heading: "Varför IoT Fabrikken?",
    intro: "Hårdvara som bara fungerar. Mjukvara som faktiskt tänker.",
    figcaption:
      "Byggd och kvalitetskontrollerad in-house — varje sensor skickas från vårt team i Danmark.",
    items: [
      {
        title: "Upp till 10 års batteri",
        body: "Montera på två minuter utan kablar eller Wi-Fi. Fungerar sömlöst i upp till 10 år.",
      },
      {
        title: "Rådgivning, inte bara data",
        body: "Strunta i de komplexa graferna. Vår AI ger dig enkla råd som du kan agera på direkt.",
      },
      {
        title: "Slut på diskussionerna",
        body: "Byt magkänsla mot hårda data och optimera ditt inomhusklimat med säkerhet.",
      },
      {
        title: "Smart utrullning",
        body: "Slut på larmtrötthet. Systemet larmar ditt team exakt när och var det verkligen behövs.",
      },
    ],
  },
  sensorFinder: {
    heading: "Hitta rätt lösning för dina lokaler.",
    subtitle: "Börja med din bransch — så visar vi vilka sensorer och moduler som passar.",
    ctaLabel: "Se rekommenderade sensorer",
    cards: {
      offices: {
        title: "Kontor & arbetsplatser",
        description:
          "Balansera ytutnyttjande på hybrida arbetsplatser med medarbetarnas produktivitet och komfort.",
      },
      churches: {
        title: "Kyrkor & kulturarv",
        description:
          "Skydda historiska interiörer med exakt fukt- och temperaturkontroll i stora, ojämnt uppvärmda byggnader.",
      },
      "museums-galleries": {
        title: "Museer & kultur",
        description:
          "Minska risker och bevara känsliga samlingar med kontinuerlig klimatövervakning enligt bevarandestandarder.",
      },
      municipalities: {
        title: "Skolor & kommuner",
        description:
          "Prioritera elevers hälsa, koncentration och energibesparingar i skolor, förvaltning och kulturbyggnader.",
      },
    },
  },
  stats: {
    title: "Siffror som betyder något.",
    subtitle:
      "Mer än 15 miljoner avläsningar om dagen från sensorer som rullar utan krångel hos våra kunder.",
    millionSuffix: " mio.",
    labels: [
      "sensorer i drift hos våra kunder",
      "avläsningar skickade till plattformen varje dag",
      "olika länder där våra lösningar används",
    ],
  },
  cta: {
    title: "Redo att testa?",
    subtitle:
      "Boka en demo och se hur data från våra sensorer kan optimera er verksamhet.",
    primary: "Boka en gratis demo",
    secondary: "Kontakta försäljning",
  },
};

const dictionaries: Record<Lang, HomeStrings> = { en, da, de, sv };

export function getHome(lang: Lang): HomeStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}
