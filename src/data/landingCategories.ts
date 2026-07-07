import type { ModuleColor } from "./modules";

export type LandingCategorySlug =
  | "indoor-climate"
  | "preservation"
  | "space-management"
  | "water-detection"
  | "push-buttons"
  | "cabinets-doors"
  | "lockers-doors"
  | "cleaning"
  | "energy"
  | "sensors"
  | "platform"
  | "integrations"
  | "industries"
  | "business-cases"
  | "standards"
  | "guides"
  | "cases"
  | "comparisons"
  | "trends"
  | "buyers-journey"
  | "niche";

export type LandingCategory = {
  slug: LandingCategorySlug;
  name: string;
  /** Short label shown above the hero headline (eyebrow). */
  eyebrow: string;
  /** One-liner used on the overview page. */
  description: string;
  color: ModuleColor;
  /** Optional slug of the matching top-level module page, e.g. /indoor-climate. */
  module?: string;
};

export const landingCategories: Record<LandingCategorySlug, LandingCategory> = {
  "indoor-climate": {
    slug: "indoor-climate",
    name: "Indoor climate",
    eyebrow: "Indoor climate",
    description: "Real-time monitoring of CO₂, temperature, humidity, VOC and more.",
    color: "sky",
    module: "indoor-climate",
  },
  preservation: {
    slug: "preservation",
    name: "Preservation",
    eyebrow: "Preservation",
    description: "Protect collections, cultural heritage and sensitive materials with data.",
    color: "coral",
    module: "preservation",
  },
  "space-management": {
    slug: "space-management",
    name: "Space management",
    eyebrow: "Space management",
    description: "Understand and optimise how your floor space and rooms are used.",
    color: "navy",
    module: "space-management",
  },
  "water-detection": {
    slug: "water-detection",
    name: "Water detection",
    eyebrow: "Water detection",
    description: "Stop water damage before it spreads.",
    color: "forest",
    module: "water-detection",
  },
  "push-buttons": {
    slug: "push-buttons",
    name: "Push buttons",
    eyebrow: "Push buttons",
    description: "Service calls and user feedback with a single tap.",
    color: "coral",
    module: "push-buttons",
  },
  "cabinets-doors": {
    slug: "cabinets-doors",
    name: "Cabinets and doors",
    eyebrow: "Open/close",
    description: "Monitor doors, windows and cabinets, without expensive installation.",
    color: "sky",
  },
  cleaning: {
    slug: "cleaning",
    name: "Usage and cleaning",
    eyebrow: "Cleaning",
    description: "Demand-based cleaning and usage patterns in the building.",
    color: "forest",
    module: "usage-cleaning",
  },
  energy: {
    slug: "energy",
    name: "Energy",
    eyebrow: "Energy",
    description: "Save energy by combining indoor climate, presence and climate data.",
    color: "navy",
  },
  "lockers-doors": {
    slug: "lockers-doors",
    name: "Lockers and doors",
    eyebrow: "Open/close",
    description: "Monitor lockers, doors and cabinets with wireless open/close sensors.",
    color: "sky",
    module: "lockers-doors",
  },
  sensors: {
    slug: "sensors",
    name: "Sensors and hardware",
    eyebrow: "Hardware",
    description: "The full RoomAlyzer family and the sensor types that go with it.",
    color: "sky",
  },
  platform: {
    slug: "platform",
    name: "Technology and platform",
    eyebrow: "Platform",
    description: "Architecture, dashboards, security and scalability.",
    color: "navy",
  },
  integrations: {
    slug: "integrations",
    name: "Integrations",
    eyebrow: "Integration",
    description: "Open APIs and integrations for BMS, FM, BI and more.",
    color: "forest",
  },
  industries: {
    slug: "industries",
    name: "Industries",
    eyebrow: "Industry",
    description: "IoT tailored to your sector, from schools to hospitals.",
    color: "sky",
  },
  "business-cases": {
    slug: "business-cases",
    name: "Business cases and ROI",
    eyebrow: "ROI",
    description: "The numbers behind the savings, payback and total cost of ownership.",
    color: "coral",
  },
  standards: {
    slug: "standards",
    name: "Standards and compliance",
    eyebrow: "Compliance",
    description: "EN 16798, DGNB, WELL, ISO and ESG — document compliance with data.",
    color: "navy",
  },
  guides: {
    slug: "guides",
    name: "Guides and knowledge",
    eyebrow: "Guide",
    description: "Beginner guides, best practices and technical introductions.",
    color: "sky",
  },
  cases: {
    slug: "cases",
    name: "Customer cases",
    eyebrow: "Customer case",
    description: "Real-world results from customers across Europe.",
    color: "forest",
  },
  comparisons: {
    slug: "comparisons",
    name: "Comparisons",
    eyebrow: "Comparison",
    description: "RoomAlyzer compared to the alternatives.",
    color: "navy",
  },
  trends: {
    slug: "trends",
    name: "News and trends",
    eyebrow: "Trend",
    description: "What's happening in smart buildings, PropTech and IoT?",
    color: "coral",
  },
  "buyers-journey": {
    slug: "buyers-journey",
    name: "Buyer's journey",
    eyebrow: "Get started",
    description: "Pricing, packages, demo and onboarding.",
    color: "sky",
  },
  niche: {
    slug: "niche",
    name: "Niche and specialties",
    eyebrow: "Specialty",
    description: "Special use cases: organs, wine, pharmacies, greenhouses and more.",
    color: "forest",
  },
};

export const landingCategoryList = Object.values(landingCategories);

export function categoryColorClasses(color: ModuleColor) {
  switch (color) {
    case "coral":
      return { dot: "bg-coral-500", chip: "bg-coral-50 text-coral-600", accent: "text-coral-500" };
    case "sky":
      return { dot: "bg-sky-500", chip: "bg-sky-50 text-sky-600", accent: "text-sky-600" };
    case "forest":
      return { dot: "bg-forest-500", chip: "bg-forest-50 text-forest-500", accent: "text-forest-500" };
    case "amber":
      return { dot: "bg-amber-500", chip: "bg-amber-50 text-amber-600", accent: "text-amber-500" };
    case "violet":
      return { dot: "bg-violet-500", chip: "bg-violet-50 text-violet-600", accent: "text-violet-500" };
    case "orange":
      return { dot: "bg-orange-500", chip: "bg-orange-50 text-orange-600", accent: "text-orange-500" };
    case "white":
      return { dot: "bg-stone-100", chip: "bg-stone-0 text-navy-500", accent: "text-navy-500" };
    case "navy":
    default:
      return { dot: "bg-navy-500", chip: "bg-stone-100 text-navy-500", accent: "text-navy-500" };
  }
}
