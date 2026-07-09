import type { WhitepaperLocalizationPlan } from "./types";

/**
 * PDF translation priorities per white paper.
 * English is always canonical; other locales ship after the EN PDF is published.
 */
export const whitepaperLocalizationPlans: WhitepaperLocalizationPlan[] = [
  {
    slug: "classroom-air-quality",
    locales: {
      en: { priority: "primary", rationale: "Canonical source of truth." },
      da: {
        priority: "primary",
        rationale: "Danish municipal and school buyers; BR18 context; Varde and Gribskov proof.",
        targetQuarter: "2026-Q4",
      },
      de: {
        priority: "optional",
        rationale: "Limited school-case proof in DE; EN fallback acceptable at launch.",
      },
      sv: {
        priority: "secondary",
        rationale: "Nordic municipal buyers; EN acceptable until SV proof is added.",
        targetQuarter: "2027-Q1",
      },
    },
  },
  {
    slug: "hybrid-office-business-case",
    locales: {
      en: { priority: "primary", rationale: "Canonical source of truth." },
      da: {
        priority: "primary",
        rationale: "Norddjurs, Varde, Gribskov, Dansk Industri cases are Danish.",
        targetQuarter: "2026-Q4",
      },
      de: {
        priority: "secondary",
        rationale: "Hybrid office narrative applies; local case numbers needed for full DE version.",
        targetQuarter: "2027-Q1",
      },
      sv: {
        priority: "secondary",
        rationale: "Nordic hybrid office market; translate after DA.",
        targetQuarter: "2027-Q2",
      },
    },
  },
  {
    slug: "museum-preservation-monitoring",
    locales: {
      en: { priority: "primary", rationale: "Canonical source of truth." },
      de: {
        priority: "primary",
        rationale: "Deutsches Museum Nordschleswig proof; EN 15757 and German heritage buyers.",
        targetQuarter: "2026-Q4",
      },
      da: {
        priority: "primary",
        rationale: "Rudersdal and Faaborg cases; Danish museum market.",
        targetQuarter: "2026-Q4",
      },
      sv: {
        priority: "optional",
        rationale: "EN fallback until SV museum proof is available.",
      },
    },
  },
  {
    slug: "indoor-climate-esg-reporting",
    locales: {
      en: { priority: "primary", rationale: "Canonical source of truth." },
      de: {
        priority: "secondary",
        rationale: "DGNB-heavy market; CSRD applies EU-wide.",
        targetQuarter: "2027-Q1",
      },
      da: {
        priority: "secondary",
        rationale: "EPBD and green building schemes; Sweco Nordic proof.",
        targetQuarter: "2027-Q1",
      },
      sv: {
        priority: "secondary",
        rationale: "EU ESG frameworks; translate with DE/DA batch.",
        targetQuarter: "2027-Q2",
      },
    },
  },
  {
    slug: "water-damage-economics",
    locales: {
      en: { priority: "primary", rationale: "Canonical source; four EN articles as chapter seeds." },
      da: {
        priority: "primary",
        rationale: "Housing associations and Danish property managers.",
        targetQuarter: "2027-Q1",
      },
      de: {
        priority: "secondary",
        rationale: "Property and FM market; translate after EN + DA.",
        targetQuarter: "2027-Q2",
      },
      sv: { priority: "optional", rationale: "EN fallback at wave 2 launch." },
    },
  },
  {
    slug: "demand-driven-cleaning",
    locales: {
      en: { priority: "primary", rationale: "Canonical source of truth." },
      da: {
        priority: "secondary",
        rationale: "Danish FM and cleaning contractors.",
        targetQuarter: "2027-Q2",
      },
      de: {
        priority: "secondary",
        rationale: "FM procurement market.",
        targetQuarter: "2027-Q2",
      },
      sv: { priority: "optional", rationale: "EN fallback at wave 2 launch." },
    },
  },
  {
    slug: "open-close-monitoring",
    locales: {
      en: { priority: "primary", rationale: "Canonical source of truth." },
      de: {
        priority: "secondary",
        rationale: "Healthcare and compliance-heavy market.",
        targetQuarter: "2027-Q2",
      },
      da: {
        priority: "secondary",
        rationale: "School and workplace FM.",
        targetQuarter: "2027-Q2",
      },
      sv: { priority: "optional", rationale: "EN fallback at wave 2 launch." },
    },
  },
  {
    slug: "church-climate-heritage",
    locales: {
      en: { priority: "primary", rationale: "Canonical source of truth." },
      de: {
        priority: "primary",
        rationale: "Freiburg and EKHN proof; primary heritage market.",
        targetQuarter: "2027-Q1",
      },
      da: {
        priority: "secondary",
        rationale: "Danish churches; humidity-in-churches article companion.",
        targetQuarter: "2027-Q1",
      },
      sv: { priority: "optional", rationale: "EN fallback until SV church proof is added." },
    },
  },
];

/** Localization plan for a white paper slug. */
export function getWhitepaperLocalizationPlan(
  slug: string,
): WhitepaperLocalizationPlan | undefined {
  return whitepaperLocalizationPlans.find((p) => p.slug === slug);
}

/** Locales marked primary or secondary for translation after EN ships. */
export function getTranslationLocales(slug: string): string[] {
  const plan = getWhitepaperLocalizationPlan(slug);
  if (!plan) return [];
  return Object.entries(plan.locales)
    .filter(([, entry]) => entry && entry.priority !== "optional")
    .map(([lang]) => lang)
    .filter((lang) => lang !== "en");
}
