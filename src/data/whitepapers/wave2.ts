import type { Wave2Flagship } from "./types";

/**
 * Wave 2 flagship white papers — one strong topic per module not covered in wave 1.
 * Wave 1 covers indoor climate (schools), space (hybrid), preservation (museums), ESG.
 */
export const wave2Flagships: Wave2Flagship[] = [
  {
    slug: "water-damage-economics",
    moduleSlug: "water-detection",
    workingTitle: "Water damage economics",
    audience: ["Real estate CFOs", "Risk managers", "Insurers and housing associations"],
    uniqueAngle:
      "Sensor fleet cost vs one catastrophic leak — repackage four published water-detection articles into a CFO-ready business case.",
    wave: 2,
    relatedArticleSlugs: [
      "water-detection-stop-damage-before-it-spreads",
      "leak-sensors-for-basements-and-plant-rooms",
      "water-alarms-in-server-rooms",
      "water-damage-insurance-documentation",
    ],
    relatedCaseStudySlugs: [],
  },
  {
    slug: "demand-driven-cleaning",
    moduleSlug: "usage-cleaning",
    workingTitle: "Demand-driven cleaning",
    audience: ["Cleaning contractors", "FM procurement leads", "Hotel operations"],
    uniqueAngle:
      "Move from fixed rotas to rooms that were actually used — Motion data via Space module with restroom SLA templates.",
    wave: 2,
    relatedArticleSlugs: [],
    relatedCaseStudySlugs: [],
  },
  {
    slug: "open-close-monitoring",
    moduleSlug: "lockers-doors",
    workingTitle: "Open/close monitoring for lockers, fire doors and after-hours security",
    audience: ["Workplace FM teams", "School estates", "Healthcare compliance officers"],
    uniqueAngle:
      "Energy waste from open windows, fire door compliance, and audit trails without cameras — privacy-by-design access monitoring.",
    wave: 2,
    relatedArticleSlugs: [],
    relatedCaseStudySlugs: [],
  },
  {
    slug: "church-climate-heritage",
    moduleSlug: "preservation",
    workingTitle: "Church climate",
    audience: ["Church wardens", "Diocese FM teams", "Heritage advisors"],
    uniqueAngle:
      "Protecting organs and frescoes in unevenly heated volumes — Freiburg and EKHN proof with humidity-in-churches article as companion.",
    wave: 2,
    relatedArticleSlugs: ["humidity-in-churches", "en-15757-in-practice"],
    relatedCaseStudySlugs: [
      "archdiocese-of-freiburg",
      "evangelische-kirche-in-hessen-und-nassau",
    ],
  },
];

/** Lookup wave 2 flagship by module slug. */
export function getWave2FlagshipByModule(moduleSlug: string): Wave2Flagship | undefined {
  return wave2Flagships.find((f) => f.moduleSlug === moduleSlug);
}

/** Lookup wave 2 flagship by white paper slug. */
export function getWave2Flagship(slug: string): Wave2Flagship | undefined {
  return wave2Flagships.find((f) => f.slug === slug);
}
