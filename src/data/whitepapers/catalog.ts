import type { WhitepaperLeaf } from "./types";
import { wave1Outlines } from "./outlines";
import { wave2Flagships } from "./wave2";

function wave1Leaf(outline: (typeof wave1Outlines)[number]): WhitepaperLeaf {
  const moduleRoutes = outline.relatedModules.map((m) => `modules/${m}`);
  const titles: Record<string, { title: string; titleAccent: string; lead: string; category: WhitepaperLeaf["category"] }> = {
    "classroom-air-quality": {
      title: "Classroom air quality.",
      titleAccent: "From parent complaints to documented improvement.",
      lead: "A decision-maker guide to CO₂ monitoring in schools — thresholds, municipal rollouts, and compliance documentation without a full BMS project.",
      category: "indoor-climate",
    },
    "hybrid-office-business-case": {
      title: "The hybrid office business case.",
      titleAccent: "Empty desks, ghost bookings and energy waste.",
      lead: "How occupancy data justifies consolidation, fair space allocation, and occupancy-aware energy savings — with numbers from Danish municipalities and Dansk Industri.",
      category: "space-management",
    },
    "museum-preservation-monitoring": {
      title: "Preservation monitoring.",
      titleAccent: "Conservators and facility managers both trust.",
      lead: "EN 15757 methodology, loan documentation, and vitrine-level monitoring for museums — one dataset for conservation and heating-cost conversations.",
      category: "preservation",
    },
    "indoor-climate-esg-reporting": {
      title: "Indoor climate for ESG reporting.",
      titleAccent: "A practical data layer for non-specialists.",
      lead: "Which sensor metrics map to CSRD, DGNB, and green building KPIs — continuous evidence without overclaiming regulatory compliance.",
      category: "energy",
    },
  };
  const copy = titles[outline.slug]!;
  return {
    slug: outline.slug,
    eyebrow: "White paper",
    title: copy.title,
    titleAccent: copy.titleAccent,
    lead: copy.lead,
    wave: 1,
    status: "in_preparation",
    category: copy.category,
    gated: true,
    relatedArticles: outline.relatedArticleSlugs,
    relatedCaseStudies: outline.relatedCaseStudySlugs,
    relatedModules: moduleRoutes,
    outlineSlug: outline.slug,
    noindex: true,
    primaryCta: { label: "Book a free demo", href: "/en/contact/book-demo/" },
    secondaryCta: { label: "Browse articles", href: "/en/articles/" },
  };
}

function wave2Leaf(flagship: (typeof wave2Flagships)[number]): WhitepaperLeaf {
  const categoryMap: Record<string, WhitepaperLeaf["category"]> = {
    "water-detection": "water-detection",
    "usage-cleaning": "cleaning",
    "lockers-doors": "lockers-doors",
    preservation: "preservation",
  };
  const leads: Record<string, string> = {
    "water-damage-economics":
      "The cost of a sensor fleet versus a single catastrophic leak — CFO-ready economics with coverage for basements, plant rooms, and server rooms.",
    "demand-driven-cleaning":
      "Move from fixed cleaning rotas to rooms that were actually used — usage data for FM procurement and restroom SLAs.",
    "open-close-monitoring":
      "Fire doors, lockers, and after-hours windows — compliance and energy waste without cameras.",
    "church-climate-heritage":
      "Protecting organs and frescoes in unevenly heated church volumes — diocese-scale monitoring with Freiburg and EKHN proof.",
  };
  return {
    slug: flagship.slug,
    eyebrow: "White paper",
    title: `${flagship.workingTitle}.`,
    titleAccent: flagship.uniqueAngle.split(" — ")[0] + ".",
    lead: leads[flagship.slug] ?? flagship.uniqueAngle,
    wave: 2,
    status: "planned",
    category: categoryMap[flagship.moduleSlug],
    gated: true,
    relatedArticles: flagship.relatedArticleSlugs,
    relatedCaseStudies: flagship.relatedCaseStudySlugs,
    relatedModules: [`modules/${flagship.moduleSlug}`],
    outlineSlug: flagship.slug,
    noindex: true,
    primaryCta: { label: "Book a free demo", href: "/en/contact/book-demo/" },
    secondaryCta: { label: "Browse articles", href: "/en/articles/" },
  };
}

/** All planned white paper hub leaves — wave 1 in preparation, wave 2 planned. */
export const whitepaperCatalog: WhitepaperLeaf[] = [
  ...wave1Outlines.map(wave1Leaf),
  ...wave2Flagships.map(wave2Leaf),
];

/** Lookup catalog entry by slug. */
export function getWhitepaperCatalogEntry(slug: string): WhitepaperLeaf | undefined {
  return whitepaperCatalog.find((w) => w.slug === slug);
}

/** Hub leaves filtered by rollout wave. */
export function getWhitepapersByWave(wave: 1 | 2 | 3): WhitepaperLeaf[] {
  return whitepaperCatalog.filter((w) => w.wave === wave);
}

/** Published or in-preparation entries shown on the hub (excludes long-term planned). */
export function getActiveWhitepaperLeaves(): WhitepaperLeaf[] {
  return whitepaperCatalog.filter((w) => w.status !== "planned" || w.wave === 1);
}
