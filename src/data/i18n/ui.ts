import type { Lang } from "../lang";
import { defaultLang } from "../lang";

/**
 * Centralized UI-string dictionary for site chrome (header, footer, shared
 * buttons). English is the canonical source; da/de/sv are translated from it.
 *
 * Product and brand names (the RoomAlyzer lines and product names) are never
 * translated and are not stored here — only generic UI labels live in this file.
 *
 * Add new keys to the `en` block first, then provide the other locales. Missing
 * keys fall back to English via `t()`.
 */

export interface FooterStrings {
  brandBlurb: string;
  headOffice: string;
  hubOffice: string;
  openingHours: string;
  hoursWeekday: string;
  hoursFriday: string;
  contact: string;
  followUs: string;
  rightsReserved: string; // "{year}" is replaced at render time
  headings: {
    product: string;
    evaluate: string;
    resources: string;
    company: string;
    supportLegal: string;
  };
  links: {
    platform: string;
    modules: string;
    sensors: string;
    integrations: string;
    pricing: string;
    industries: string;
    compare: string;
    roi: string;
    library: string;
    cases: string;
    productSheets: string;
    whitepapers: string;
    about: string;
    careers: string;
    partners: string;
    press: string;
    events: string;
    contact: string;
    login: string;
    support: string;
    faq: string;
    securitySla: string;
    impressum: string;
    privacy: string;
    cookies: string;
    terms: string;
  };
}

export interface NavStrings {
  utility: {
    builtInDenmark: string;
    talkToUs: string;
  };
  top: {
    products: string;
    industries: string;
    pricing: string;
    resources: string;
    company: string;
    helpcenter: string;
    login: string;
    bookDemo: string;
  };
  columns: {
    platform: string;
    modules: string;
    sensors: string;
    library: string;
  };
  cta: {
    allSensors: string;
    compareSensors: string;
    allIndustries: string;
  };
  industryColumns: {
    publicHealth: string;
    commercial: string;
    culture: string;
    property: string;
  };
  pricing: {
    modelsLabel: string;
    modelsDesc: string;
    roiLabel: string;
    roiDesc: string;
  };
  resources: {
    libraryLabel: string;
    libraryDesc: string;
    casesLabel: string;
    casesDesc: string;
    whitepapersLabel: string;
    whitepapersDesc: string;
  };
  company: {
    aboutLabel: string;
    aboutDesc: string;
    careersLabel: string;
    careersDesc: string;
    contactLabel: string;
    contactDesc: string;
  };
}

export interface SensorStrings {
  breadcrumb: { home: string; sensors: string; compare: string; productSheets: string };
  common: {
    readMore: string;
    bookDemo: string;
    bookLiveDemo: string;
    downloadProductSheet: string;
    getAnOffer: string;
    productSheets: string;
    contactSales: string;
    allSensors: string;
    demoDisclaimer: string;
  };
  index: { ctaTitle: string; ctaSubtitle: string };
  detail: {
    exampleUseCases: string;
    productViews: string;
    whyChoose: string;
    ctaBandTitle: string;
    ctaBandSubtitle: string;
    specs: {
      title: string;
      downloadFullSheet: string;
      rows: {
        productLine: string;
        measurements: string;
        dimensions: string;
        measuringRange: string;
        operatingRange: string;
        operatingConditions: string;
        fieldOfView: string;
        precision: string;
        longTermDrift: string;
        battery: string;
        connectivity: string;
        simCard: string;
        wirelessRange: string;
        voltage: string;
        ipRating: string;
        probe: string;
        maintenance: string;
        activation: string;
        controlSoftware: string;
        mounting: string;
        material: string;
        application: string;
        certification: string;
      };
    };
  };
  compare: {
    heroAccent: string;
    all: string;
    clear: string;
    filterByLine: string;
    highlightByUseCase: string;
    headToHead: string;
    headToHeadHeading: string;
    sensorA: string;
    sensorB: string;
    selectSensor: string;
    pickTwoDifferent: string;
    sameProfile: string;
    capability: string;
    yes: string;
    battery: string;
    connectivity: string;
    ctaTitle: string;
    ctaSubtitle: string;
    browseAllSensors: string;
    swapSensors: string;
    showDifferencesOnly: string;
    showAllCapabilities: string;
    viewProduct: string;
    differencesFound: string;
    allCapabilitiesMatch: string;
    downloadProductSheetPdf: string;
    exampleUseCases: string;
  };
  sheets: {
    heroTitle: string;
    heroAccent: string;
    lead: string;
    metaDescription: string;
    pdf: string;
  };
  gallery: {
    tablistLabel: string;
    product: string;
    dimensions: string;
    dimensionsHeading: string;
    zoomDimensions: string;
    closeZoom: string;
    inUse: string;
    compact: string;
    pro: string;
    smallUnit: string;
    largeUnit: string;
    rangeExtender: string;
    bracket: string;
  };
}

export interface ModuleStrings {
  breadcrumb: { home: string; modules: string };
  common: {
    readMore: string;
    bookDemo: string;
    contactSales: string;
    productSheets: string;
    getAnOffer: string;
  };
  index: {
    sectionEyebrow: string;
    sectionHeading: string;
    sectionIntro: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  content: {
    challengesEyebrow: string;
    solutionEyebrow: string;
    smarterTogether: string;
  };
  detail: { ctaBandTitle: string; ctaBandSubtitle: string };
}

export interface IndustryStrings {
  breadcrumb: { home: string; industries: string };
  content: {
    focusEyebrow: string;
    challengesEyebrow: string;
    solutionEyebrow: string;
    smarterTogether: string;
    sensorsEyebrow: string;
    modulesEyebrow: string;
    modulesLinkLabel: string;
  };
  cases: {
    eyebrow: string;
    heading: string;
    readMore: string;
  };
  detail: { ctaBandTitle: string; ctaBandSubtitle: string };
  articles: {
    eyebrow: string;
    heading: string;
    viewAll: string;
  };
}

export interface FaqSectionStrings {
  title: string;
  contextAlt: string;
}

export interface UiStrings {
  footer: FooterStrings;
  nav: NavStrings;
  sensors: SensorStrings;
  modules: ModuleStrings;
  industries: IndustryStrings;
  faqSection: FaqSectionStrings;
}

const en: UiStrings = {
  footer: {
    brandBlurb:
      "100% Danish-owned SaaS and IoT company. We deliver wireless sensors and a platform that turns data into something useful for facility and space management.",
    headOffice: "Head office",
    hubOffice: "Hub office",
    openingHours: "Opening hours",
    hoursWeekday: "Mon – Thu: 8:00 – 15:30",
    hoursFriday: "Friday: Closed (Email support only)",
    contact: "Contact",
    followUs: "Follow us",
    rightsReserved: "© {year} IoT Fabrikken ApS. All rights reserved.",
    headings: {
      product: "Product",
      evaluate: "Evaluate",
      resources: "Resources",
      company: "Company",
      supportLegal: "Support & legal",
    },
    links: {
      platform: "Platform",
      modules: "Modules",
      sensors: "Sensors",
      integrations: "Integrations",
      pricing: "Pricing",
      industries: "Industries",
      compare: "Compare",
      roi: "ROI",
      library: "Articles",
      cases: "Cases",
      productSheets: "Product sheets",
      whitepapers: "White papers",
      about: "About",
      careers: "Careers",
      partners: "Partners",
      press: "Press",
      events: "Events",
      contact: "Contact",
      login: "Log in",
      support: "Support",
      faq: "FAQ",
      securitySla: "Security & SLA",
      impressum: "Impressum",
      privacy: "Privacy",
      cookies: "Cookies",
      terms: "Terms",
    },
  },
  nav: {
    utility: {
      builtInDenmark: "Built in Denmark, real humans at the other end.",
      talkToUs: "Talk to us",
    },
    top: {
      products: "Products",
      industries: "Industries",
      pricing: "Pricing",
      resources: "Resources",
      company: "Company",
      helpcenter: "Help centre",
      login: "Log in",
      bookDemo: "Book a free demo",
    },
    columns: {
      platform: "Platform",
      modules: "Modules",
      sensors: "Sensors",
      library: "Articles",
    },
    cta: {
      allSensors: "All sensors",
      compareSensors: "Compare sensors",
      allIndustries: "All industries",
    },
    industryColumns: {
      publicHealth: "Public sector & healthcare",
      commercial: "Commercial & enterprise",
      culture: "Culture & heritage",
      property: "Property & facility services",
    },
    pricing: {
      modelsLabel: "Pricing models",
      modelsDesc: "Simple plans that scale with your building.",
      roiLabel: "ROI calculator",
      roiDesc: "Estimate payback with your own numbers.",
    },
    resources: {
      libraryLabel: "Articles",
      libraryDesc: "Guides, use cases and news, searchable by topic or industry.",
      casesLabel: "Cases",
      casesDesc: "What customers say about working with us.",
      whitepapersLabel: "White papers",
      whitepapersDesc: "In-depth reports for decision makers.",
    },
    company: {
      aboutLabel: "About us",
      aboutDesc: "Our story, team and Danish roots.",
      careersLabel: "Careers",
      careersDesc: "Open roles and life at IoT Fabrikken.",
      contactLabel: "Contact",
      contactDesc: "Sales, support and demo requests.",
    },
  },
  sensors: {
    breadcrumb: { home: "Home", sensors: "Sensors", compare: "Compare", productSheets: "Product sheets" },
    common: {
      readMore: "Read more",
      bookDemo: "Book a free demo",
      bookLiveDemo: "Book a live demo",
      downloadProductSheet: "Download product sheet",
      getAnOffer: "Get an offer",
      productSheets: "Product sheets",
      contactSales: "Contact sales",
      allSensors: "Browse all sensors",
      demoDisclaimer: "The live demo is always free of charge and completely non-binding.",
    },
    index: {
      ctaTitle: "Want a guided walk-through?",
      ctaSubtitle: "Book a demo and we'll tailor it to your building.",
    },
    detail: {
      exampleUseCases: "Example use cases",
      productViews: "Product views",
      whyChoose: "Why choose this sensor?",
      ctaBandTitle: "Want to see it for yourself?",
      ctaBandSubtitle: "Book a live demo, always free of charge and completely non-binding.",
      specs: {
        title: "Technical specifications",
        downloadFullSheet: "Download full product sheet (PDF)",
        rows: {
          productLine: "Product line",
          measurements: "Measurements",
          dimensions: "Dimensions",
          measuringRange: "Measuring range",
          operatingRange: "Operating range",
          operatingConditions: "Operating conditions",
          fieldOfView: "Field of view",
          precision: "Precision",
          longTermDrift: "Long-term drift",
          battery: "Battery",
          connectivity: "Connectivity",
          simCard: "SIM card",
          wirelessRange: "Wireless range",
          voltage: "Voltage",
          ipRating: "IP rating",
          probe: "Probe",
          maintenance: "Maintenance",
          activation: "Activation",
          controlSoftware: "Control software",
          mounting: "Mounting",
          material: "Material",
          application: "Application",
          certification: "Certification",
        },
      },
    },
    compare: {
      heroAccent: "Every parameter, one view.",
      all: "All",
      clear: "Clear",
      filterByLine: "Filter by product line",
      highlightByUseCase: "Highlight by use case",
      headToHead: "Head to head",
      headToHeadHeading: "Pick any two sensors and see how they differ.",
      sensorA: "Sensor A",
      sensorB: "Sensor B",
      selectSensor: "Select a sensor",
      pickTwoDifferent: "Pick two different sensors to compare.",
      sameProfile:
        "These sensors share the same capability profile in our matrix. Check product pages for finer details.",
      capability: "Capability",
      yes: "Yes",
      battery: "Battery",
      connectivity: "Connectivity",
      ctaTitle: "Still deciding?",
      ctaSubtitle: "Book a demo and we will map the right sensors to your rooms, no guesswork.",
      browseAllSensors: "Browse all sensors",
      swapSensors: "Swap sensors",
      showDifferencesOnly: "Show differences only",
      showAllCapabilities: "Show all capabilities",
      viewProduct: "View product page",
      differencesFound: "{n} capability differences",
      allCapabilitiesMatch: "All capabilities match in this view",
      downloadProductSheetPdf: "Download product sheet PDF",
      exampleUseCases: "Example use cases",
    },
    sheets: {
      heroTitle: "Product sheets.",
      heroAccent: "Official specs for every sensor.",
      lead: "Download PDF product sheets for the full RoomAlyzer portfolio.",
      metaDescription:
        "Download official RoomAlyzer product sheets for every sensor in our portfolio.",
      pdf: "PDF",
    },
    gallery: {
      tablistLabel: "Product views",
      product: "Product",
      dimensions: "Dimensions",
      dimensionsHeading: "Dimensions",
      zoomDimensions: "Enlarge dimensions view",
      closeZoom: "Close",
      inUse: "In use",
      compact: "Compact (IP30)",
      pro: "Pro (IP67)",
      smallUnit: "Small unit",
      largeUnit: "Large unit",
      rangeExtender: "Range extender",
      bracket: "Bracket",
    },
  },
  modules: {
    breadcrumb: { home: "Home", modules: "Modules" },
    common: {
      readMore: "Read more",
      bookDemo: "Book a free demo",
      contactSales: "Contact sales",
      productSheets: "Product sheets",
      getAnOffer: "Get an offer",
    },
    index: {
      sectionEyebrow: "Modules",
      sectionHeading: "Solve real building problems.",
      sectionIntro:
        "Indoor climate, space management, water detection and more — each module runs on the same RoomAlyzer platform and sensor network.",
      ctaTitle: "Want a guided walk-through?",
      ctaSubtitle: "Book a demo and we'll tailor it to your building.",
    },
    content: {
      challengesEyebrow: "The challenges you know",
      solutionEyebrow: "How RoomAlyzer solves it",
      smarterTogether: "Smarter together:",
    },
    detail: {
      ctaBandTitle: "Want to know more right now?",
      ctaBandSubtitle: "Get in touch, we're always happy to have a no-strings chat.",
    },
  },
  industries: {
    breadcrumb: { home: "Home", industries: "Industries" },
    content: {
      focusEyebrow: "What matters in this sector",
      challengesEyebrow: "Typical challenges",
      solutionEyebrow: "How RoomAlyzer helps",
      smarterTogether: "Smarter together:",
      sensorsEyebrow: "Recommended sensors",
      modulesEyebrow: "Relevant modules",
      modulesLinkLabel: "Explore module",
    },
    cases: {
      eyebrow: "Customer cases",
      heading: "Buildings like yours.",
      readMore: "Read case",
    },
    detail: {
      ctaBandTitle: "Want a setup tailored to your buildings?",
      ctaBandSubtitle: "Book a demo and we will walk through the sensors that fit your sector.",
    },
    articles: {
      eyebrow: "Articles",
      heading: "This could interest you too.",
      viewAll: "View all articles",
    },
  },
  faqSection: {
    title: "Frequently asked questions",
    contextAlt: "Colleagues discussing plans around a meeting table",
  },
};

const da: UiStrings = {
  footer: {
    brandBlurb:
      "100% dansk-ejet SaaS- og IoT-virksomhed. Vi leverer trådløse sensorer og en platform, der gør data til noget brugbart til facility- og space management.",
    headOffice: "Hovedkontor",
    hubOffice: "Hub-kontor",
    openingHours: "Åbningstider",
    hoursWeekday: "Man – tor: 8:00 – 15:30",
    hoursFriday: "Fredag: Lukket (kun e-mailsupport)",
    contact: "Kontakt",
    followUs: "Følg os",
    rightsReserved: "© {year} IoT Fabrikken ApS. Alle rettigheder forbeholdes.",
    headings: {
      product: "Produkt",
      evaluate: "Vurder",
      resources: "Ressourcer",
      company: "Virksomhed",
      supportLegal: "Support og juridisk",
    },
    links: {
      platform: "Platform",
      modules: "Moduler",
      sensors: "Sensorer",
      integrations: "Integrationer",
      pricing: "Priser",
      industries: "Brancher",
      compare: "Sammenlign",
      roi: "ROI",
      library: "Artikler",
      cases: "Cases",
      productSheets: "Produktblade",
      whitepapers: "Whitepapers",
      about: "Om os",
      careers: "Karriere",
      partners: "Partnere",
      press: "Presse",
      events: "Arrangementer",
      contact: "Kontakt",
      login: "Log ind",
      support: "Support",
      faq: "FAQ",
      securitySla: "Sikkerhed og SLA",
      impressum: "Kolofon",
      privacy: "Privatlivspolitik",
      cookies: "Cookies",
      terms: "Betingelser",
    },
  },
  nav: {
    utility: {
      builtInDenmark: "Bygget i Danmark, rigtige mennesker i den anden ende.",
      talkToUs: "Tal med os",
    },
    top: {
      products: "Produkter",
      industries: "Brancher",
      pricing: "Priser",
      resources: "Ressourcer",
      company: "Virksomhed",
      helpcenter: "Hjælpecenter",
      login: "Log ind",
      bookDemo: "Book gratis demo",
    },
    columns: {
      platform: "Platform",
      modules: "Moduler",
      sensors: "Sensorer",
      library: "Artikler",
    },
    cta: {
      allSensors: "Alle sensorer",
      compareSensors: "Sammenlign sensorer",
      allIndustries: "Alle brancher",
    },
    industryColumns: {
      publicHealth: "Offentlig sektor og sundhed",
      commercial: "Erhverv og virksomheder",
      culture: "Kultur og kulturarv",
      property: "Ejendom og facility services",
    },
    pricing: {
      modelsLabel: "Prismodeller",
      modelsDesc: "Enkle planer, der skalerer med din bygning.",
      roiLabel: "ROI-beregner",
      roiDesc: "Estimer tilbagebetaling med dine egne tal.",
    },
    resources: {
      libraryLabel: "Artikler",
      libraryDesc: "Guides, use cases og nyheder, søgbare efter emne eller branche.",
      casesLabel: "Cases",
      casesDesc: "Hvad kunder siger om at arbejde med os.",
      whitepapersLabel: "Whitepapers",
      whitepapersDesc: "Dybdegående rapporter til beslutningstagere.",
    },
    company: {
      aboutLabel: "Om os",
      aboutDesc: "Vores historie, team og danske rødder.",
      careersLabel: "Karriere",
      careersDesc: "Ledige stillinger og livet hos IoT Fabrikken.",
      contactLabel: "Kontakt",
      contactDesc: "Salg, support og demoanmodninger.",
    },
  },
  sensors: {
    breadcrumb: { home: "Hjem", sensors: "Sensorer", compare: "Sammenlign", productSheets: "Produktblade" },
    common: {
      readMore: "Læs mere",
      bookDemo: "Book en gratis demo",
      bookLiveDemo: "Book en live-demo",
      downloadProductSheet: "Download produktblad",
      getAnOffer: "Få et tilbud",
      productSheets: "Produktblade",
      contactSales: "Kontakt salg",
      allSensors: "Se alle sensorer",
      demoDisclaimer: "Live-demoen er altid gratis og helt uforpligtende.",
    },
    index: {
      ctaTitle: "Vil du have en guidet gennemgang?",
      ctaSubtitle: "Book en demo, så tilpasser vi den til din bygning.",
    },
    detail: {
      exampleUseCases: "Eksempler på anvendelse",
      productViews: "Produktvisninger",
      whyChoose: "Hvorfor vælge denne sensor?",
      ctaBandTitle: "Vil du selv se det?",
      ctaBandSubtitle: "Book en live-demo, altid gratis og helt uforpligtende.",
      specs: {
        title: "Tekniske specifikationer",
        downloadFullSheet: "Download fuldt produktblad (PDF)",
        rows: {
          productLine: "Produktlinje",
          measurements: "Målinger",
          dimensions: "Dimensioner",
          measuringRange: "Måleområde",
          operatingRange: "Driftsområde",
          operatingConditions: "Driftsforhold",
          fieldOfView: "Synsfelt",
          precision: "Præcision",
          longTermDrift: "Langtidsdrift",
          battery: "Batteri",
          connectivity: "Forbindelse",
          simCard: "SIM-kort",
          wirelessRange: "Trådløs rækkevidde",
          voltage: "Spænding",
          ipRating: "IP-klassificering",
          probe: "Probe",
          maintenance: "Vedligeholdelse",
          activation: "Aktivering",
          controlSoftware: "Styringssoftware",
          mounting: "Montering",
          material: "Materiale",
          application: "Anvendelse",
          certification: "Certificering",
        },
      },
    },
    compare: {
      heroAccent: "Alle parametre i ét overblik.",
      all: "Alle",
      clear: "Ryd",
      filterByLine: "Filtrér efter produktlinje",
      highlightByUseCase: "Fremhæv efter anvendelse",
      headToHead: "Head to head",
      headToHeadHeading: "Vælg to vilkårlige sensorer, og se hvordan de adskiller sig.",
      sensorA: "Sensor A",
      sensorB: "Sensor B",
      selectSensor: "Vælg en sensor",
      pickTwoDifferent: "Vælg to forskellige sensorer for at sammenligne.",
      sameProfile:
        "Disse sensorer har samme funktionsprofil i vores matrix. Se produktsiderne for flere detaljer.",
      capability: "Funktion",
      yes: "Ja",
      battery: "Batteri",
      connectivity: "Forbindelse",
      ctaTitle: "Stadig i tvivl?",
      ctaSubtitle: "Book en demo, så matcher vi de rette sensorer til dine rum, uden gætværk.",
      browseAllSensors: "Se alle sensorer",
      swapSensors: "Byt sensorer",
      showDifferencesOnly: "Vis kun forskelle",
      showAllCapabilities: "Vis alle funktioner",
      viewProduct: "Se produktside",
      differencesFound: "{n} funktionsforskelle",
      allCapabilitiesMatch: "Alle funktioner matcher i denne visning",
      downloadProductSheetPdf: "Download produktblad PDF",
      exampleUseCases: "Eksempler på anvendelse",
    },
    sheets: {
      heroTitle: "Produktblade.",
      heroAccent: "Officielle specifikationer for hver sensor.",
      lead: "Download PDF-produktblade for hele RoomAlyzer-porteføljen.",
      metaDescription:
        "Download officielle RoomAlyzer-produktblade for hver sensor i vores portefølje.",
      pdf: "PDF",
    },
    gallery: {
      tablistLabel: "Produktvisninger",
      product: "Produkt",
      dimensions: "Dimensioner",
      dimensionsHeading: "Dimensioner",
      zoomDimensions: "Forstør dimensionsvisning",
      closeZoom: "Luk",
      inUse: "I brug",
      compact: "Compact (IP30)",
      pro: "Pro (IP67)",
      smallUnit: "Lille enhed",
      largeUnit: "Stor enhed",
      rangeExtender: "Range extender",
      bracket: "Beslag",
    },
  },
  modules: {
    breadcrumb: { home: "Hjem", modules: "Moduler" },
    common: {
      readMore: "Læs mere",
      bookDemo: "Book en gratis demo",
      contactSales: "Kontakt salg",
      productSheets: "Produktblade",
      getAnOffer: "Få et tilbud",
    },
    index: {
      sectionEyebrow: "Moduler",
      sectionHeading: "Løs reelle bygningsudfordringer.",
      sectionIntro:
        "Indeklima, pladsudnyttelse, vanddetektion og mere — hvert modul kører på den samme RoomAlyzer-platform og sensornetværk.",
      ctaTitle: "Vil du have en guidet gennemgang?",
      ctaSubtitle: "Book en demo, så tilpasser vi den til din bygning.",
    },
    content: {
      challengesEyebrow: "De udfordringer, du kender",
      solutionEyebrow: "Sådan løser RoomAlyzer det",
      smarterTogether: "Smartere sammen:",
    },
    detail: {
      ctaBandTitle: "Vil du vide mere allerede nu?",
      ctaBandSubtitle: "Tag fat i os, vi tager altid gerne en uforpligtende snak.",
    },
  },
  industries: {
    breadcrumb: { home: "Hjem", industries: "Brancher" },
    content: {
      focusEyebrow: "Det, der betyder noget i denne branche",
      challengesEyebrow: "Typiske udfordringer",
      solutionEyebrow: "Sådan hjælper RoomAlyzer",
      smarterTogether: "Smartere sammen:",
      sensorsEyebrow: "Anbefalede sensorer",
      modulesEyebrow: "Relevante moduler",
      modulesLinkLabel: "Se modul",
    },
    cases: {
      eyebrow: "Kundecases",
      heading: "Bygninger som jeres.",
      readMore: "Læs case",
    },
    detail: {
      ctaBandTitle: "Vil I have en løsning skræddersyet til jeres bygninger?",
      ctaBandSubtitle: "Book en demo, så gennemgår vi de sensorer, der passer til jeres branche.",
    },
    articles: {
      eyebrow: "Artikler",
      heading: "Dette kunne også interessere dig.",
      viewAll: "Se alle artikler",
    },
  },
  faqSection: {
    title: "Ofte stillede spørgsmål",
    contextAlt: "Kolleger, der diskuterer planer omkring et mødebord",
  },
};

const de: UiStrings = {
  footer: {
    brandBlurb:
      "100% dänisches SaaS- und IoT-Unternehmen in eigenem Besitz. Wir liefern drahtlose Sensoren und eine Plattform, die Daten in nützliche Erkenntnisse für Facility- und Space-Management verwandelt.",
    headOffice: "Hauptsitz",
    hubOffice: "Hub-Büro",
    openingHours: "Öffnungszeiten",
    hoursWeekday: "Mo – Do: 8:00 – 15:30",
    hoursFriday: "Freitag: Geschlossen (nur E-Mail-Support)",
    contact: "Kontakt",
    followUs: "Folgen Sie uns",
    rightsReserved: "© {year} IoT Fabrikken ApS. Alle Rechte vorbehalten.",
    headings: {
      product: "Produkt",
      evaluate: "Bewerten",
      resources: "Ressourcen",
      company: "Unternehmen",
      supportLegal: "Support & Rechtliches",
    },
    links: {
      platform: "Plattform",
      modules: "Module",
      sensors: "Sensoren",
      integrations: "Integrationen",
      pricing: "Preise",
      industries: "Branchen",
      compare: "Vergleichen",
      roi: "ROI",
      library: "Artikel",
      cases: "Referenzen",
      productSheets: "Produktdatenblätter",
      whitepapers: "Whitepaper",
      about: "Über uns",
      careers: "Karriere",
      partners: "Partner",
      press: "Presse",
      events: "Veranstaltungen",
      contact: "Kontakt",
      login: "Anmelden",
      support: "Support",
      faq: "FAQ",
      securitySla: "Sicherheit & SLA",
      impressum: "Impressum",
      privacy: "Datenschutz",
      cookies: "Cookies",
      terms: "AGB",
    },
  },
  nav: {
    utility: {
      builtInDenmark: "Entwickelt in Dänemark, echte Menschen am anderen Ende.",
      talkToUs: "Sprechen Sie mit uns",
    },
    top: {
      products: "Produkte",
      industries: "Branchen",
      pricing: "Preise",
      resources: "Ressourcen",
      company: "Unternehmen",
      helpcenter: "Hilfecenter",
      login: "Anmelden",
      bookDemo: "Demo buchen",
    },
    columns: {
      platform: "Plattform",
      modules: "Module",
      sensors: "Sensoren",
      library: "Artikel",
    },
    cta: {
      allSensors: "Alle Sensoren",
      compareSensors: "Sensoren vergleichen",
      allIndustries: "Alle Branchen",
    },
    industryColumns: {
      publicHealth: "Öffentlicher Sektor & Gesundheit",
      commercial: "Gewerbe & Unternehmen",
      culture: "Kultur & Kulturerbe",
      property: "Immobilien & Facility Services",
    },
    pricing: {
      modelsLabel: "Preismodelle",
      modelsDesc: "Einfache Tarife, die mit Ihrem Gebäude wachsen.",
      roiLabel: "ROI-Rechner",
      roiDesc: "Berechnen Sie die Amortisation mit Ihren eigenen Zahlen.",
    },
    resources: {
      libraryLabel: "Artikel",
      libraryDesc: "Leitfäden, Anwendungsfälle und News, nach Thema oder Branche durchsuchbar.",
      casesLabel: "Referenzen",
      casesDesc: "Was Kunden über die Zusammenarbeit mit uns sagen.",
      whitepapersLabel: "Whitepaper",
      whitepapersDesc: "Ausführliche Berichte für Entscheidungsträger.",
    },
    company: {
      aboutLabel: "Über uns",
      aboutDesc: "Unsere Geschichte, unser Team und unsere dänischen Wurzeln.",
      careersLabel: "Karriere",
      careersDesc: "Offene Stellen und das Leben bei IoT Fabrikken.",
      contactLabel: "Kontakt",
      contactDesc: "Vertrieb, Support und Demo-Anfragen.",
    },
  },
  sensors: {
    breadcrumb: { home: "Startseite", sensors: "Sensoren", compare: "Vergleichen", productSheets: "Produktdatenblätter" },
    common: {
      readMore: "Mehr erfahren",
      bookDemo: "Kostenlose Demo buchen",
      bookLiveDemo: "Live-Demo buchen",
      downloadProductSheet: "Produktdatenblatt herunterladen",
      getAnOffer: "Angebot anfordern",
      productSheets: "Produktdatenblätter",
      contactSales: "Vertrieb kontaktieren",
      allSensors: "Alle Sensoren ansehen",
      demoDisclaimer: "Die Live-Demo ist immer kostenlos und völlig unverbindlich.",
    },
    index: {
      ctaTitle: "Möchten Sie eine geführte Tour?",
      ctaSubtitle: "Buchen Sie eine Demo, die wir auf Ihr Gebäude zuschneiden.",
    },
    detail: {
      exampleUseCases: "Beispielhafte Anwendungsfälle",
      productViews: "Produktansichten",
      whyChoose: "Warum dieser Sensor?",
      ctaBandTitle: "Möchten Sie es selbst sehen?",
      ctaBandSubtitle: "Buchen Sie eine Live-Demo, immer kostenlos und völlig unverbindlich.",
      specs: {
        title: "Technische Spezifikationen",
        downloadFullSheet: "Vollständiges Produktdatenblatt herunterladen (PDF)",
        rows: {
          productLine: "Produktlinie",
          measurements: "Messgrößen",
          dimensions: "Abmessungen",
          measuringRange: "Messbereich",
          operatingRange: "Betriebsbereich",
          operatingConditions: "Betriebsbedingungen",
          fieldOfView: "Erfassungsbereich",
          precision: "Genauigkeit",
          longTermDrift: "Langzeitdrift",
          battery: "Batterie",
          connectivity: "Konnektivität",
          simCard: "SIM-Karte",
          wirelessRange: "Funkreichweite",
          voltage: "Spannung",
          ipRating: "IP-Schutzart",
          probe: "Sonde",
          maintenance: "Wartung",
          activation: "Aktivierung",
          controlSoftware: "Steuerungssoftware",
          mounting: "Montage",
          material: "Material",
          application: "Anwendung",
          certification: "Zertifizierung",
        },
      },
    },
    compare: {
      heroAccent: "Alle Parameter auf einen Blick.",
      all: "Alle",
      clear: "Zurücksetzen",
      filterByLine: "Nach Produktlinie filtern",
      highlightByUseCase: "Nach Anwendungsfall hervorheben",
      headToHead: "Direktvergleich",
      headToHeadHeading: "Wählen Sie zwei beliebige Sensoren und sehen Sie die Unterschiede.",
      sensorA: "Sensor A",
      sensorB: "Sensor B",
      selectSensor: "Sensor auswählen",
      pickTwoDifferent: "Wählen Sie zwei verschiedene Sensoren zum Vergleichen.",
      sameProfile:
        "Diese Sensoren haben in unserer Matrix dasselbe Funktionsprofil. Weitere Details finden Sie auf den Produktseiten.",
      capability: "Funktion",
      yes: "Ja",
      battery: "Batterie",
      connectivity: "Konnektivität",
      ctaTitle: "Noch unentschlossen?",
      ctaSubtitle: "Buchen Sie eine Demo, und wir ordnen die passenden Sensoren Ihren Räumen zu, ohne Rätselraten.",
      browseAllSensors: "Alle Sensoren ansehen",
      swapSensors: "Sensoren tauschen",
      showDifferencesOnly: "Nur Unterschiede anzeigen",
      showAllCapabilities: "Alle Funktionen anzeigen",
      viewProduct: "Produktseite ansehen",
      differencesFound: "{n} Funktionsunterschiede",
      allCapabilitiesMatch: "Alle Funktionen stimmen in dieser Ansicht überein",
      downloadProductSheetPdf: "Produktdatenblatt PDF herunterladen",
      exampleUseCases: "Beispielhafte Anwendungsfälle",
    },
    sheets: {
      heroTitle: "Produktdatenblätter.",
      heroAccent: "Offizielle Spezifikationen für jeden Sensor.",
      lead: "Laden Sie PDF-Produktdatenblätter für das gesamte RoomAlyzer-Portfolio herunter.",
      metaDescription:
        "Laden Sie offizielle RoomAlyzer-Produktdatenblätter für jeden Sensor unseres Portfolios herunter.",
      pdf: "PDF",
    },
    gallery: {
      tablistLabel: "Produktansichten",
      product: "Produkt",
      dimensions: "Abmessungen",
      dimensionsHeading: "Abmessungen",
      zoomDimensions: "Abmessungsansicht vergrößern",
      closeZoom: "Schließen",
      inUse: "Im Einsatz",
      compact: "Compact (IP30)",
      pro: "Pro (IP67)",
      smallUnit: "Kleine Einheit",
      largeUnit: "Große Einheit",
      rangeExtender: "Range Extender",
      bracket: "Halterung",
    },
  },
  modules: {
    breadcrumb: { home: "Startseite", modules: "Module" },
    common: {
      readMore: "Mehr erfahren",
      bookDemo: "Kostenlose Demo buchen",
      contactSales: "Vertrieb kontaktieren",
      productSheets: "Produktdatenblätter",
      getAnOffer: "Angebot anfordern",
    },
    index: {
      sectionEyebrow: "Module",
      sectionHeading: "Echte Gebäudeprobleme lösen.",
      sectionIntro:
        "Innenklima, Raumnutzung, Wassermonitoring und mehr, jedes Modul läuft auf derselben RoomAlyzer-Plattform und demselben Sensornetzwerk.",
      ctaTitle: "Möchten Sie eine geführte Tour?",
      ctaSubtitle: "Buchen Sie eine Demo, die wir auf Ihr Gebäude zuschneiden.",
    },
    content: {
      challengesEyebrow: "Die Herausforderungen, die Sie kennen",
      solutionEyebrow: "So löst RoomAlyzer das",
      smarterTogether: "Gemeinsam smarter:",
    },
    detail: {
      ctaBandTitle: "Möchten Sie schon jetzt mehr erfahren?",
      ctaBandSubtitle: "Melden Sie sich, wir führen jederzeit gern ein unverbindliches Gespräch.",
    },
  },
  industries: {
    breadcrumb: { home: "Startseite", industries: "Branchen" },
    content: {
      focusEyebrow: "Was in dieser Branche zählt",
      challengesEyebrow: "Typische Herausforderungen",
      solutionEyebrow: "So hilft RoomAlyzer",
      smarterTogether: "Gemeinsam smarter:",
      sensorsEyebrow: "Empfohlene Sensoren",
      modulesEyebrow: "Relevante Module",
      modulesLinkLabel: "Modul ansehen",
    },
    cases: {
      eyebrow: "Kundenreferenzen",
      heading: "Gebäude wie Ihre.",
      readMore: "Referenz lesen",
    },
    detail: {
      ctaBandTitle: "Möchten Sie eine Lösung für Ihre Gebäude?",
      ctaBandSubtitle: "Buchen Sie eine Demo, wir zeigen die Sensoren, die zu Ihrer Branche passen.",
    },
    articles: {
      eyebrow: "Artikel",
      heading: "Das könnte Sie auch interessieren.",
      viewAll: "Alle Artikel ansehen",
    },
  },
  faqSection: {
    title: "Häufig gestellte Fragen",
    contextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
  },
};

const sv: UiStrings = {
  footer: {
    brandBlurb:
      "100% danskägt SaaS- och IoT-företag. Vi levererar trådlösa sensorer och en plattform som förvandlar data till något användbart för facility- och space management.",
    headOffice: "Huvudkontor",
    hubOffice: "Hubbkontor",
    openingHours: "Öppettider",
    hoursWeekday: "Mån – tors: 8:00 – 15:30",
    hoursFriday: "Fredag: Stängt (endast e-postsupport)",
    contact: "Kontakt",
    followUs: "Följ oss",
    rightsReserved: "© {year} IoT Fabrikken ApS. Alla rättigheter förbehållna.",
    headings: {
      product: "Produkt",
      evaluate: "Utvärdera",
      resources: "Resurser",
      company: "Företag",
      supportLegal: "Support och juridik",
    },
    links: {
      platform: "Plattform",
      modules: "Moduler",
      sensors: "Sensorer",
      integrations: "Integrationer",
      pricing: "Priser",
      industries: "Branscher",
      compare: "Jämför",
      roi: "ROI",
      library: "Artiklar",
      cases: "Kundcase",
      productSheets: "Produktblad",
      whitepapers: "Whitepapers",
      about: "Om oss",
      careers: "Karriär",
      partners: "Partner",
      press: "Press",
      events: "Event",
      contact: "Kontakt",
      login: "Logga in",
      support: "Support",
      faq: "FAQ",
      securitySla: "Säkerhet och SLA",
      impressum: "Impressum",
      privacy: "Integritetspolicy",
      cookies: "Cookies",
      terms: "Villkor",
    },
  },
  nav: {
    utility: {
      builtInDenmark: "Byggt i Danmark, riktiga människor i andra änden.",
      talkToUs: "Prata med oss",
    },
    top: {
      products: "Produkter",
      industries: "Branscher",
      pricing: "Priser",
      resources: "Resurser",
      company: "Företag",
      helpcenter: "Hjälpcenter",
      login: "Logga in",
      bookDemo: "Boka en gratis demo",
    },
    columns: {
      platform: "Plattform",
      modules: "Moduler",
      sensors: "Sensorer",
      library: "Artiklar",
    },
    cta: {
      allSensors: "Alla sensorer",
      compareSensors: "Jämför sensorer",
      allIndustries: "Alla branscher",
    },
    industryColumns: {
      publicHealth: "Offentlig sektor och vård",
      commercial: "Näringsliv och företag",
      culture: "Kultur och kulturarv",
      property: "Fastighet och facility services",
    },
    pricing: {
      modelsLabel: "Prismodeller",
      modelsDesc: "Enkla planer som skalar med din byggnad.",
      roiLabel: "ROI-kalkylator",
      roiDesc: "Uppskatta återbetalning med dina egna siffror.",
    },
    resources: {
      libraryLabel: "Artiklar",
      libraryDesc: "Guider, användningsfall och nyheter, sökbara efter ämne eller bransch.",
      casesLabel: "Kundcase",
      casesDesc: "Vad kunder säger om att arbeta med oss.",
      whitepapersLabel: "Whitepapers",
      whitepapersDesc: "Djupgående rapporter för beslutsfattare.",
    },
    company: {
      aboutLabel: "Om oss",
      aboutDesc: "Vår historia, vårt team och våra danska rötter.",
      careersLabel: "Karriär",
      careersDesc: "Lediga tjänster och livet på IoT Fabrikken.",
      contactLabel: "Kontakt",
      contactDesc: "Försäljning, support och demoförfrågningar.",
    },
  },
  sensors: {
    breadcrumb: { home: "Hem", sensors: "Sensorer", compare: "Jämför", productSheets: "Produktblad" },
    common: {
      readMore: "Läs mer",
      bookDemo: "Boka en gratis demo",
      bookLiveDemo: "Boka en live-demo",
      downloadProductSheet: "Ladda ner produktblad",
      getAnOffer: "Få en offert",
      productSheets: "Produktblad",
      contactSales: "Kontakta försäljning",
      allSensors: "Se alla sensorer",
      demoDisclaimer: "Live-demon är alltid kostnadsfri och helt förutsättningslös.",
    },
    index: {
      ctaTitle: "Vill du ha en guidad genomgång?",
      ctaSubtitle: "Boka en demo så skräddarsyr vi den efter din byggnad.",
    },
    detail: {
      exampleUseCases: "Exempel på användning",
      productViews: "Produktvyer",
      whyChoose: "Varför välja den här sensorn?",
      ctaBandTitle: "Vill du se det själv?",
      ctaBandSubtitle: "Boka en live-demo, alltid kostnadsfri och helt förutsättningslös.",
      specs: {
        title: "Tekniska specifikationer",
        downloadFullSheet: "Ladda ner fullständigt produktblad (PDF)",
        rows: {
          productLine: "Produktlinje",
          measurements: "Mätningar",
          dimensions: "Dimensioner",
          measuringRange: "Mätområde",
          operatingRange: "Driftområde",
          operatingConditions: "Driftförhållanden",
          fieldOfView: "Synfält",
          precision: "Precision",
          longTermDrift: "Långtidsdrift",
          battery: "Batteri",
          connectivity: "Anslutning",
          simCard: "SIM-kort",
          wirelessRange: "Trådlös räckvidd",
          voltage: "Spänning",
          ipRating: "IP-klassificering",
          probe: "Sond",
          maintenance: "Underhåll",
          activation: "Aktivering",
          controlSoftware: "Styrprogramvara",
          mounting: "Montering",
          material: "Material",
          application: "Användning",
          certification: "Certifiering",
        },
      },
    },
    compare: {
      heroAccent: "Alla parametrar i en vy.",
      all: "Alla",
      clear: "Rensa",
      filterByLine: "Filtrera efter produktlinje",
      highlightByUseCase: "Markera efter användningsfall",
      headToHead: "Head to head",
      headToHeadHeading: "Välj två valfria sensorer och se hur de skiljer sig åt.",
      sensorA: "Sensor A",
      sensorB: "Sensor B",
      selectSensor: "Välj en sensor",
      pickTwoDifferent: "Välj två olika sensorer för att jämföra.",
      sameProfile:
        "Dessa sensorer har samma funktionsprofil i vår matris. Se produktsidorna för fler detaljer.",
      capability: "Funktion",
      yes: "Ja",
      battery: "Batteri",
      connectivity: "Anslutning",
      ctaTitle: "Fortfarande osäker?",
      ctaSubtitle: "Boka en demo så matchar vi rätt sensorer till dina rum, utan gissningar.",
      browseAllSensors: "Se alla sensorer",
      swapSensors: "Byt sensorer",
      showDifferencesOnly: "Visa endast skillnader",
      showAllCapabilities: "Visa alla funktioner",
      viewProduct: "Visa produktsida",
      differencesFound: "{n} funktionsskillnader",
      allCapabilitiesMatch: "Alla funktioner matchar i den här vyn",
      downloadProductSheetPdf: "Ladda ner produktblad PDF",
      exampleUseCases: "Exempel på användning",
    },
    sheets: {
      heroTitle: "Produktblad.",
      heroAccent: "Officiella specifikationer för varje sensor.",
      lead: "Ladda ner PDF-produktblad för hela RoomAlyzer-portföljen.",
      metaDescription:
        "Ladda ner officiella RoomAlyzer-produktblad för varje sensor i vår portfölj.",
      pdf: "PDF",
    },
    gallery: {
      tablistLabel: "Produktvyer",
      product: "Produkt",
      dimensions: "Dimensioner",
      dimensionsHeading: "Dimensioner",
      zoomDimensions: "Förstora dimensionsvy",
      closeZoom: "Stäng",
      inUse: "I bruk",
      compact: "Compact (IP30)",
      pro: "Pro (IP67)",
      smallUnit: "Liten enhet",
      largeUnit: "Stor enhet",
      rangeExtender: "Range extender",
      bracket: "Fäste",
    },
  },
  modules: {
    breadcrumb: { home: "Hem", modules: "Moduler" },
    common: {
      readMore: "Läs mer",
      bookDemo: "Boka en gratis demo",
      contactSales: "Kontakta försäljning",
      productSheets: "Produktblad",
      getAnOffer: "Få en offert",
    },
    index: {
      sectionEyebrow: "Moduler",
      sectionHeading: "Lös verkliga byggnadsutmaningar.",
      sectionIntro:
        "Inomhusklimat, ytanvändning, vattendetektering och mer, varje modul körs på samma RoomAlyzer-plattform och sensornätverk.",
      ctaTitle: "Vill du ha en guidad genomgång?",
      ctaSubtitle: "Boka en demo så skräddarsyr vi den efter din byggnad.",
    },
    content: {
      challengesEyebrow: "Utmaningarna du känner till",
      solutionEyebrow: "Så löser RoomAlyzer det",
      smarterTogether: "Smartare tillsammans:",
    },
    detail: {
      ctaBandTitle: "Vill du veta mer redan nu?",
      ctaBandSubtitle: "Hör av dig, vi tar alltid gärna ett förutsättningslöst samtal.",
    },
  },
  industries: {
    breadcrumb: { home: "Hem", industries: "Branscher" },
    content: {
      focusEyebrow: "Det som spelar roll i den här branschen",
      challengesEyebrow: "Typiska utmaningar",
      solutionEyebrow: "Så hjälper RoomAlyzer",
      smarterTogether: "Smartare tillsammans:",
      sensorsEyebrow: "Rekommenderade sensorer",
      modulesEyebrow: "Relevanta moduler",
      modulesLinkLabel: "Utforska modul",
    },
    cases: {
      eyebrow: "Kundcase",
      heading: "Byggnader som era.",
      readMore: "Läs case",
    },
    detail: {
      ctaBandTitle: "Vill ni ha en lösning skräddarsydd för era byggnader?",
      ctaBandSubtitle: "Boka en demo så går vi igenom sensorerna som passar er bransch.",
    },
    articles: {
      eyebrow: "Artiklar",
      heading: "Det här kan också intressera dig.",
      viewAll: "Visa alla artiklar",
    },
  },
  faqSection: {
    title: "Vanliga frågor",
    contextAlt: "Kolleger som diskuterar planer runt ett mötesbord",
  },
};

const dictionaries: Record<Lang, UiStrings> = { en, da, de, sv };

/** Return the UI string dictionary for a locale, falling back to English. */
export function getUi(lang: Lang): UiStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}
