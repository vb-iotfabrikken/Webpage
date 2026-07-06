import type { Lang } from "../lang";
import { defaultLang, langPath } from "../lang";

export type PricingCell = boolean | string;

export interface PricingPlan {
  slug: string;
  name: string;
  tagline: string;
  /** `null` means custom / contact sales — no published price. */
  price: string | null;
  priceNote?: string;
  ctaLabel: string;
  /** `demo` links to book demo; `enterprise` links to sales with pricing lead source. */
  ctaKind: "demo" | "enterprise";
  highlighted?: boolean;
}

export interface PricingFeatureRow {
  id: string;
  label: string;
  group?: string;
  values: Record<string, PricingCell>;
}

export interface PricingStrings {
  breadcrumb: { home: string; pricing: string };
  common: { bookDemo: string; contactSales: string };
  metaTitle: string;
  hero: {
    title: string;
    titleAccent: string;
    lead: string;
  };
  matrix: {
    sectionTitle: string;
    sectionLead: string;
    priceLabel: string;
    customPrice: string;
    featureColumn: string;
    pricePlaceholder: string;
    pricePlaceholderNote: string;
    scrollHint: string;
  };
  plans: PricingPlan[];
  features: PricingFeatureRow[];
  footnote: string;
  ctaTitle: string;
  ctaSubtitle: string;
}

const en: PricingStrings = {
  breadcrumb: { home: "Home", pricing: "Pricing" },
  common: { bookDemo: "Book a free demo", contactSales: "Contact sales" },
  metaTitle: "Pricing you can plan with",
  hero: {
    title: "Pricing you can plan with.",
    titleAccent: "No per-sensor licence fees.",
    lead: "A simple, predictable subscription that scales with your building, not with every new device you add.",
  },
  matrix: {
    sectionTitle: "Compare plans.",
    sectionLead:
      "Three tiers for single sites and portfolios, plus enterprise terms for large rollouts. Published prices are on the way, the matrix below shows what each plan includes.",
    priceLabel: "Annual subscription",
    customPrice: "Custom",
    featureColumn: "What's included",
    pricePlaceholder: "TBD",
    pricePlaceholderNote: "per sensor / year",
    scrollHint: "Scroll sideways to compare all plans",
  },
  plans: [
    {
      slug: "building",
      name: "Building",
      tagline: "One site, full visibility.",
      price: "TBD",
      priceNote: "per sensor / year",
      ctaLabel: "Book a free demo",
      ctaKind: "demo",
    },
    {
      slug: "portfolio",
      name: "Portfolio",
      tagline: "Multiple buildings, one account.",
      price: "TBD",
      priceNote: "per sensor / year",
      ctaLabel: "Book a free demo",
      ctaKind: "demo",
      highlighted: true,
    },
    {
      slug: "enterprise",
      name: "Enterprise",
      tagline: "Volume rollouts and custom terms.",
      price: null,
      ctaLabel: "Contact sales",
      ctaKind: "enterprise",
    },
  ],
  features: [
    {
      id: "subscription",
      label: "Per-sensor annual subscription",
      group: "Subscription",
      values: {
        building: "TBD",
        portfolio: "TBD",
        enterprise: "Volume pricing",
      },
    },
    {
      id: "hardware",
      label: "Sensor hardware",
      group: "Subscription",
      values: {
        building: "One-off purchase",
        portfolio: "One-off purchase",
        enterprise: "Volume pricing",
      },
    },
    {
      id: "platform",
      label: "Platform, dashboards & mobile app",
      group: "Platform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "alarms",
      label: "Alarms & notifications",
      group: "Platform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "api",
      label: "API access",
      group: "Platform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "integrations",
      label: "Integrations",
      group: "Platform",
      values: { building: "Standard", portfolio: "Standard", enterprise: "Custom" },
    },
    {
      id: "support",
      label: "Email & chat support",
      group: "Support",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "onboarding",
      label: "Onboarding workshop",
      group: "Support",
      values: { building: false, portfolio: "Optional", enterprise: "Included" },
    },
    {
      id: "dedicated-cs",
      label: "Dedicated customer success",
      group: "Support",
      values: { building: false, portfolio: false, enterprise: true },
    },
    {
      id: "sso",
      label: "SSO (SAML / OIDC)",
      group: "Governance",
      values: { building: false, portfolio: false, enterprise: true },
    },
    {
      id: "retention",
      label: "Extended raw data retention",
      group: "Governance",
      values: {
        building: "24 months",
        portfolio: "24 months",
        enterprise: "Up to 10 years",
      },
    },
    {
      id: "white-label",
      label: "White-label dashboards",
      group: "Governance",
      values: { building: false, portfolio: false, enterprise: true },
    },
  ],
  footnote:
    "Prices shown are placeholders until our published rate card is ready. Hardware is billed separately; enterprise agreements include tailored onboarding for organisations over 1,000 sensors.",
  ctaTitle: "Not sure which plan fits?",
  ctaSubtitle: "Book a demo or talk to sales, we'll help you size a setup for your buildings.",
};

const da: PricingStrings = {
  breadcrumb: { home: "Forside", pricing: "Priser" },
  common: { bookDemo: "Book en gratis demo", contactSales: "Kontakt salg" },
  metaTitle: "Priser du kan planlægge efter",
  hero: {
    title: "Priser du kan planlægge efter.",
    titleAccent: "Ingen licens pr. sensor.",
    lead: "Et enkelt, forudsigeligt abonnement, der skalerer med din bygning, ikke med hver ny enhed du tilføjer.",
  },
  matrix: {
    sectionTitle: "Sammenlign planer.",
    sectionLead:
      "Tre niveauer til enkeltstående bygninger og porteføljer, plus enterprise-vilkår til store udrulninger. Offentlige priser kommer snart, matricen viser, hvad hver plan indeholder.",
    priceLabel: "Årligt abonnement",
    customPrice: "Tilpasset",
    featureColumn: "Det er inkluderet",
    pricePlaceholder: "TBD",
    pricePlaceholderNote: "pr. sensor / år",
    scrollHint: "Scroll vandret for at sammenligne alle planer",
  },
  plans: [
    {
      slug: "building",
      name: "Building",
      tagline: "Én bygning, fuldt overblik.",
      price: "TBD",
      priceNote: "pr. sensor / år",
      ctaLabel: "Book en gratis demo",
      ctaKind: "demo",
    },
    {
      slug: "portfolio",
      name: "Portfolio",
      tagline: "Flere bygninger, én konto.",
      price: "TBD",
      priceNote: "pr. sensor / år",
      ctaLabel: "Book en gratis demo",
      ctaKind: "demo",
      highlighted: true,
    },
    {
      slug: "enterprise",
      name: "Enterprise",
      tagline: "Store udrulninger og skræddersyede vilkår.",
      price: null,
      ctaLabel: "Kontakt salg",
      ctaKind: "enterprise",
    },
  ],
  features: [
    {
      id: "subscription",
      label: "Årligt abonnement pr. sensor",
      group: "Abonnement",
      values: {
        building: "TBD",
        portfolio: "TBD",
        enterprise: "Mængderabat",
      },
    },
    {
      id: "hardware",
      label: "Sensorhardware",
      group: "Abonnement",
      values: {
        building: "Engangskøb",
        portfolio: "Engangskøb",
        enterprise: "Mængderabat",
      },
    },
    {
      id: "platform",
      label: "Platform, dashboards og mobilapp",
      group: "Platform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "alarms",
      label: "Alarmer og notifikationer",
      group: "Platform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "api",
      label: "API-adgang",
      group: "Platform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "integrations",
      label: "Integrationer",
      group: "Platform",
      values: { building: "Standard", portfolio: "Standard", enterprise: "Tilpasset" },
    },
    {
      id: "support",
      label: "E-mail- og chat-support",
      group: "Support",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "onboarding",
      label: "Onboarding-workshop",
      group: "Support",
      values: { building: false, portfolio: "Valgfrit", enterprise: "Inkluderet" },
    },
    {
      id: "dedicated-cs",
      label: "Dedikeret customer success",
      group: "Support",
      values: { building: false, portfolio: false, enterprise: true },
    },
    {
      id: "sso",
      label: "SSO (SAML / OIDC)",
      group: "Governance",
      values: { building: false, portfolio: false, enterprise: true },
    },
    {
      id: "retention",
      label: "Udvidet rådataopbevaring",
      group: "Governance",
      values: {
        building: "24 måneder",
        portfolio: "24 måneder",
        enterprise: "Op til 10 år",
      },
    },
    {
      id: "white-label",
      label: "White-label dashboards",
      group: "Governance",
      values: { building: false, portfolio: false, enterprise: true },
    },
  ],
  footnote:
    "Viste priser er pladsholdere, indtil vores offentlige prisliste er klar. Hardware faktureres separat; enterprise-aftaler inkluderer skræddersyet onboarding til organisationer med over 1.000 sensorer.",
  ctaTitle: "Usikker på hvilken plan der passer?",
  ctaSubtitle: "Book en demo eller tal med salg, vi hjælper dig med at dimensionere et setup til dine bygninger.",
};

const de: PricingStrings = {
  breadcrumb: { home: "Startseite", pricing: "Preise" },
  common: { bookDemo: "Kostenlose Demo buchen", contactSales: "Vertrieb kontaktieren" },
  metaTitle: "Preise, mit denen Sie planen können",
  hero: {
    title: "Preise, mit denen Sie planen können.",
    titleAccent: "Keine Lizenzgebühr pro Sensor.",
    lead: "Ein einfaches, planbares Abonnement, das mit Ihrem Gebäude skaliert, nicht mit jedem neuen Gerät, das Sie hinzufügen.",
  },
  matrix: {
    sectionTitle: "Pläne vergleichen.",
    sectionLead:
      "Drei Stufen für Einzelstandorte und Portfolios plus Enterprise-Bedingungen für große Rollouts. Veröffentlichte Preise folgen in Kürze, die Matrix zeigt, was jeder Plan enthält.",
    priceLabel: "Jahresabonnement",
    customPrice: "Individuell",
    featureColumn: "Enthalten",
    pricePlaceholder: "TBD",
    pricePlaceholderNote: "pro Sensor / Jahr",
    scrollHint: "Horizontal scrollen, um alle Pläne zu vergleichen",
  },
  plans: [
    {
      slug: "building",
      name: "Building",
      tagline: "Ein Standort, voller Überblick.",
      price: "TBD",
      priceNote: "pro Sensor / Jahr",
      ctaLabel: "Kostenlose Demo buchen",
      ctaKind: "demo",
    },
    {
      slug: "portfolio",
      name: "Portfolio",
      tagline: "Mehrere Gebäude, ein Konto.",
      price: "TBD",
      priceNote: "pro Sensor / Jahr",
      ctaLabel: "Kostenlose Demo buchen",
      ctaKind: "demo",
      highlighted: true,
    },
    {
      slug: "enterprise",
      name: "Enterprise",
      tagline: "Große Rollouts und individuelle Konditionen.",
      price: null,
      ctaLabel: "Vertrieb kontaktieren",
      ctaKind: "enterprise",
    },
  ],
  features: [
    {
      id: "subscription",
      label: "Jahresabonnement pro Sensor",
      group: "Abonnement",
      values: {
        building: "TBD",
        portfolio: "TBD",
        enterprise: "Mengenpreise",
      },
    },
    {
      id: "hardware",
      label: "Sensor-Hardware",
      group: "Abonnement",
      values: {
        building: "Einmalkauf",
        portfolio: "Einmalkauf",
        enterprise: "Mengenpreise",
      },
    },
    {
      id: "platform",
      label: "Plattform, Dashboards & Mobile App",
      group: "Plattform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "alarms",
      label: "Alarme & Benachrichtigungen",
      group: "Plattform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "api",
      label: "API-Zugang",
      group: "Plattform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "integrations",
      label: "Integrationen",
      group: "Plattform",
      values: { building: "Standard", portfolio: "Standard", enterprise: "Individuell" },
    },
    {
      id: "support",
      label: "E-Mail- & Chat-Support",
      group: "Support",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "onboarding",
      label: "Onboarding-Workshop",
      group: "Support",
      values: { building: false, portfolio: "Optional", enterprise: "Inklusive" },
    },
    {
      id: "dedicated-cs",
      label: "Dedizierter Customer Success",
      group: "Support",
      values: { building: false, portfolio: false, enterprise: true },
    },
    {
      id: "sso",
      label: "SSO (SAML / OIDC)",
      group: "Governance",
      values: { building: false, portfolio: false, enterprise: true },
    },
    {
      id: "retention",
      label: "Erweiterte Rohdaten-Aufbewahrung",
      group: "Governance",
      values: {
        building: "24 Monate",
        portfolio: "24 Monate",
        enterprise: "Bis zu 10 Jahre",
      },
    },
    {
      id: "white-label",
      label: "White-Label-Dashboards",
      group: "Governance",
      values: { building: false, portfolio: false, enterprise: true },
    },
  ],
  footnote:
    "Angezeigte Preise sind Platzhalter, bis unsere veröffentlichte Preisliste vorliegt. Hardware wird separat berechnet; Enterprise-Verträge beinhalten maßgeschneidetes Onboarding für Organisationen mit über 1.000 Sensoren.",
  ctaTitle: "Unsicher, welcher Plan passt?",
  ctaSubtitle: "Buchen Sie eine Demo oder sprechen Sie mit dem Vertrieb, wir helfen Ihnen, ein Setup für Ihre Gebäude zu dimensionieren.",
};

const sv: PricingStrings = {
  breadcrumb: { home: "Startsida", pricing: "Priser" },
  common: { bookDemo: "Boka en gratis demo", contactSales: "Kontakta sälj" },
  metaTitle: "Priser du kan planera efter",
  hero: {
    title: "Priser du kan planera efter.",
    titleAccent: "Ingen licensavgift per sensor.",
    lead: "En enkel, förutsägbar prenumeration som skalar med din byggnad, inte med varje ny enhet du lägger till.",
  },
  matrix: {
    sectionTitle: "Jämför planer.",
    sectionLead:
      "Tre nivåer för enskilda fastigheter och portföljer, plus enterprise-villkor för stora utrullningar. Publicerade priser kommer snart, matrisen visar vad varje plan innehåller.",
    priceLabel: "Årlig prenumeration",
    customPrice: "Anpassat",
    featureColumn: "Det ingår",
    pricePlaceholder: "TBD",
    pricePlaceholderNote: "per sensor / år",
    scrollHint: "Scrolla horisontellt för att jämföra alla planer",
  },
  plans: [
    {
      slug: "building",
      name: "Building",
      tagline: "En fastighet, full överblick.",
      price: "TBD",
      priceNote: "per sensor / år",
      ctaLabel: "Boka en gratis demo",
      ctaKind: "demo",
    },
    {
      slug: "portfolio",
      name: "Portfolio",
      tagline: "Flera byggnader, ett konto.",
      price: "TBD",
      priceNote: "per sensor / år",
      ctaLabel: "Boka en gratis demo",
      ctaKind: "demo",
      highlighted: true,
    },
    {
      slug: "enterprise",
      name: "Enterprise",
      tagline: "Stora utrullningar och anpassade villkor.",
      price: null,
      ctaLabel: "Kontakta sälj",
      ctaKind: "enterprise",
    },
  ],
  features: [
    {
      id: "subscription",
      label: "Årlig prenumeration per sensor",
      group: "Prenumeration",
      values: {
        building: "TBD",
        portfolio: "TBD",
        enterprise: "Volympriser",
      },
    },
    {
      id: "hardware",
      label: "Sensorhårdvara",
      group: "Prenumeration",
      values: {
        building: "Engångsköp",
        portfolio: "Engångsköp",
        enterprise: "Volympriser",
      },
    },
    {
      id: "platform",
      label: "Plattform, dashboards och mobilapp",
      group: "Plattform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "alarms",
      label: "Larm och notiser",
      group: "Plattform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "api",
      label: "API-åtkomst",
      group: "Plattform",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "integrations",
      label: "Integrationer",
      group: "Plattform",
      values: { building: "Standard", portfolio: "Standard", enterprise: "Anpassat" },
    },
    {
      id: "support",
      label: "E-post- och chattsupport",
      group: "Support",
      values: { building: true, portfolio: true, enterprise: true },
    },
    {
      id: "onboarding",
      label: "Onboarding-workshop",
      group: "Support",
      values: { building: false, portfolio: "Valfritt", enterprise: "Ingår" },
    },
    {
      id: "dedicated-cs",
      label: "Dedikerad customer success",
      group: "Support",
      values: { building: false, portfolio: false, enterprise: true },
    },
    {
      id: "sso",
      label: "SSO (SAML / OIDC)",
      group: "Governance",
      values: { building: false, portfolio: false, enterprise: true },
    },
    {
      id: "retention",
      label: "Utökad rådatalagring",
      group: "Governance",
      values: {
        building: "24 månader",
        portfolio: "24 månader",
        enterprise: "Upp till 10 år",
      },
    },
    {
      id: "white-label",
      label: "White-label-dashboards",
      group: "Governance",
      values: { building: false, portfolio: false, enterprise: true },
    },
  ],
  footnote:
    "Visade priser är platshållare tills vår publicerade prislista är klar. Hårdvara faktureras separat; enterprise-avtal inkluderar skräddarsydd onboarding för organisationer med över 1 000 sensorer.",
  ctaTitle: "Osäker på vilken plan som passar?",
  ctaSubtitle: "Boka en demo eller prata med sälj, vi hjälper dig att dimensionera en lösning för dina byggnader.",
};

const pricingStrings: Record<Lang, PricingStrings> = { en, da, de, sv };

export function getPricing(lang: Lang = defaultLang): PricingStrings {
  return pricingStrings[lang] ?? pricingStrings[defaultLang];
}

/** Sales contact URL with the pricing-enterprise lead-source query param. */
export function pricingEnterpriseSalesHref(lang: Lang): string {
  return `${langPath("contact/sales", lang)}?from=pricing-enterprise`;
}
