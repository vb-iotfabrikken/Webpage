import { defaultLang, type Lang } from "../lang";

export interface GlossaryChromeStrings {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: {
    title: string;
    titleAccent: string;
    lead: string;
    jumpToLetter: string;
    browseArticles: string;
    suggestTerm: string;
  };
  termCount: { one: string; other: string };
  seeAlso: string;
  permalinkAria: (term: string) => string;
  jsonLdName: string;
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
}

const en: GlossaryChromeStrings = {
  meta: {
    title: "Glossary | IoT Fabrikken",
    description:
      "A glossary of the terms, standards and acronyms used across IoT Fabrikken's sensors and platform.",
  },
  breadcrumb: "Glossary",
  hero: {
    title: "Glossary.",
    titleAccent: "Every acronym, explained.",
    lead: "A short, plain-language reference for the terms, standards and acronyms you will come across in the product and the documentation.",
    jumpToLetter: "Jump to letter",
    browseArticles: "Browse articles",
    suggestTerm: "Suggest a term",
  },
  termCount: { one: "term", other: "terms" },
  seeAlso: "See also:",
  permalinkAria: (term) => `Permalink to ${term}`,
  jsonLdName: "IoT Fabrikken glossary",
  cta: {
    title: "Term missing?",
    subtitle: "If we're using a piece of jargon we haven't defined here, tell us — we'll add it.",
    primary: "Contact sales",
    secondary: "Book a free demo",
  },
};

const da: GlossaryChromeStrings = {
  meta: {
    title: "Ordliste | IoT Fabrikken",
    description:
      "En ordliste over begreber, standarder og forkortelser brugt i IoT Fabrikkens sensorer og platform.",
  },
  breadcrumb: "Ordliste",
  hero: {
    title: "Ordliste.",
    titleAccent: "Hver forkortelse, forklaret.",
    lead: "En kort, letforståelig reference til begreber, standarder og forkortelser, du møder i produktet og dokumentationen.",
    jumpToLetter: "Spring til bogstav",
    browseArticles: "Gennemse artikler",
    suggestTerm: "Foreslå et begreb",
  },
  termCount: { one: "begreb", other: "begreber" },
  seeAlso: "Se også:",
  permalinkAria: (term) => `Permalink til ${term}`,
  jsonLdName: "IoT Fabrikken ordliste",
  cta: {
    title: "Mangler et begreb?",
    subtitle: "Bruger vi jargon, vi ikke har defineret her, så sig til — vi tilføjer det.",
    primary: "Kontakt salg",
    secondary: "Book en gratis demo",
  },
};

const de: GlossaryChromeStrings = {
  meta: {
    title: "Glossar | IoT Fabrikken",
    description:
      "Ein Glossar der Begriffe, Normen und Abkürzungen in IoT Fabrikkens Sensoren und Plattform.",
  },
  breadcrumb: "Glossar",
  hero: {
    title: "Glossar.",
    titleAccent: "Jede Abkürzung, erklärt.",
    lead: "Eine kurze, verständliche Referenz für Begriffe, Normen und Abkürzungen im Produkt und in der Dokumentation.",
    jumpToLetter: "Zum Buchstaben springen",
    browseArticles: "Artikel durchsuchen",
    suggestTerm: "Begriff vorschlagen",
  },
  termCount: { one: "Begriff", other: "Begriffe" },
  seeAlso: "Siehe auch:",
  permalinkAria: (term) => `Permalink zu ${term}`,
  jsonLdName: "IoT Fabrikken Glossar",
  cta: {
    title: "Begriff fehlt?",
    subtitle: "Wenn wir Fachjargon verwenden, der hier fehlt, sagen Sie Bescheid — wir ergänzen ihn.",
    primary: "Vertrieb kontaktieren",
    secondary: "Kostenlose Demo buchen",
  },
};

const sv: GlossaryChromeStrings = {
  meta: {
    title: "Ordlista | IoT Fabrikken",
    description:
      "En ordlista över begrepp, standarder och förkortningar som används i IoT Fabrikkens sensorer och plattform.",
  },
  breadcrumb: "Ordlista",
  hero: {
    title: "Ordlista.",
    titleAccent: "Varje förkortning, förklarad.",
    lead: "En kort, lättförståelig referens för begrepp, standarder och förkortningar du möter i produkten och dokumentationen.",
    jumpToLetter: "Hoppa till bokstav",
    browseArticles: "Bläddra bland artiklar",
    suggestTerm: "Föreslå ett begrepp",
  },
  termCount: { one: "begrepp", other: "begrepp" },
  seeAlso: "Se även:",
  permalinkAria: (term) => `Permalink till ${term}`,
  jsonLdName: "IoT Fabrikken ordlista",
  cta: {
    title: "Saknas ett begrepp?",
    subtitle: "Om vi använder jargong som inte finns här, hör av er — vi lägger till det.",
    primary: "Kontakta försäljning",
    secondary: "Boka en gratis demo",
  },
};

const byLang: Record<Lang, GlossaryChromeStrings> = { en, da, de, sv };

export function getGlossaryChrome(lang: Lang = defaultLang): GlossaryChromeStrings {
  return byLang[lang] ?? en;
}
