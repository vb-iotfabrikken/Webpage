import type { Lang } from "../lang";
import { defaultLang } from "../lang";

/** UI chrome strings for the case-studies hub and detail pages. */
export interface CaseStrings {
  breadcrumbHome: string;
  breadcrumbCases: string;
  metaTitle: string;
  metaDescription: string;
  bookDemo: string;
  contactSales: string;
  allCases: string;
  readMore: string;
  readArticle: string;
  readFullCase: string;
  loadMore: string;
  categories: { spaceManagement: string; indoorClimate: string };
  contactTitle: string;
  contactSubtitle: string;
  detailCtaTitle: string;
  detailCtaSubtitle: string;
}

const en: CaseStrings = {
  breadcrumbHome: "Home",
  breadcrumbCases: "Cases",
  metaTitle: "Customer cases | IoT Fabrikken",
  metaDescription:
    "See how municipalities, consultancies and property managers use RoomAlyzer for indoor climate and space management — real buildings, real results.",
  bookDemo: "Book a free demo",
  contactSales: "Contact sales",
  allCases: "All customer cases",
  readMore: "Read more",
  readArticle: "Read article",
  readFullCase: "Read the full case",
  loadMore: "Load more",
  categories: { spaceManagement: "Space management", indoorClimate: "Indoor climate" },
  contactTitle: "Book a meeting with us",
  contactSubtitle:
    "Do you have any questions? Want to know more about indoor climate and/or space management? Then please reach out. We're always happy to talk about your options — either online or in person.",
  detailCtaTitle: "Want to know more?",
  detailCtaSubtitle:
    "Get in touch — we are always happy to talk about indoor climate and space management for your buildings.",
};

const da: CaseStrings = {
  breadcrumbHome: "Hjem",
  breadcrumbCases: "Cases",
  metaTitle: "Kundecases | IoT Fabrikken",
  metaDescription:
    "Se hvordan kommuner, rådgivere og ejendomsadministratorer bruger RoomAlyzer til indeklima og space management — rigtige bygninger, rigtige resultater.",
  bookDemo: "Book en gratis demo",
  contactSales: "Kontakt salg",
  allCases: "Alle kundecases",
  readMore: "Læs mere",
  readArticle: "Læs artikel",
  readFullCase: "Læs hele casen",
  loadMore: "Indlæs flere",
  categories: { spaceManagement: "Arealforvaltning", indoorClimate: "Indeklima" },
  contactTitle: "Book et møde med os",
  contactSubtitle:
    "Har du spørgsmål? Vil du vide mere om indeklima og/eller space management? Så tag endelig fat i os. Vi taler altid gerne om dine muligheder — online eller fysisk.",
  detailCtaTitle: "Vil du vide mere?",
  detailCtaSubtitle:
    "Tag fat i os — vi taler altid gerne om indeklima og space management for jeres bygninger.",
};

const de: CaseStrings = {
  breadcrumbHome: "Startseite",
  breadcrumbCases: "Referenzen",
  metaTitle: "Kundenreferenzen | IoT Fabrikken",
  metaDescription:
    "Sehen Sie, wie Kommunen, Beratungsbüros und Immobilienverwalter RoomAlyzer für Raumklima und Space-Management nutzen — echte Gebäude, echte Ergebnisse.",
  bookDemo: "Kostenlose Demo buchen",
  contactSales: "Vertrieb kontaktieren",
  allCases: "Alle Kundenreferenzen",
  readMore: "Mehr erfahren",
  readArticle: "Artikel lesen",
  readFullCase: "Den ganzen Fall lesen",
  loadMore: "Mehr laden",
  categories: { spaceManagement: "Space-Management", indoorClimate: "Raumklima" },
  contactTitle: "Vereinbaren Sie ein Treffen mit uns",
  contactSubtitle:
    "Haben Sie Fragen? Möchten Sie mehr über Raumklima und/oder Space-Management erfahren? Dann melden Sie sich gern. Wir sprechen jederzeit gern über Ihre Möglichkeiten — online oder persönlich.",
  detailCtaTitle: "Möchten Sie mehr erfahren?",
  detailCtaSubtitle:
    "Melden Sie sich — wir sprechen jederzeit gern über Raumklima und Space-Management für Ihre Gebäude.",
};

const sv: CaseStrings = {
  breadcrumbHome: "Hem",
  breadcrumbCases: "Kundcase",
  metaTitle: "Kundcase | IoT Fabrikken",
  metaDescription:
    "Se hur kommuner, konsulter och fastighetsförvaltare använder RoomAlyzer för inomhusklimat och space management — riktiga byggnader, riktiga resultat.",
  bookDemo: "Boka en gratis demo",
  contactSales: "Kontakta försäljning",
  allCases: "Alla kundcase",
  readMore: "Läs mer",
  readArticle: "Läs artikel",
  readFullCase: "Läs hela caset",
  loadMore: "Ladda fler",
  categories: { spaceManagement: "Lokalhantering", indoorClimate: "Inomhusklimat" },
  contactTitle: "Boka ett möte med oss",
  contactSubtitle:
    "Har du frågor? Vill du veta mer om inomhusklimat och/eller space management? Hör gärna av dig. Vi pratar alltid gärna om dina möjligheter — online eller på plats.",
  detailCtaTitle: "Vill du veta mer?",
  detailCtaSubtitle:
    "Hör av dig — vi pratar alltid gärna om inomhusklimat och space management för era byggnader.",
};

const dictionaries: Record<Lang, CaseStrings> = { en, da, de, sv };

export function getCases(lang: Lang): CaseStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}
