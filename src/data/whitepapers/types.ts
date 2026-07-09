import type { Lang } from "../lang";
import type { LandingCategorySlug } from "../landingCategories";

/** Production lifecycle for a white paper PDF. */
export type WhitepaperStatus = "in_preparation" | "planned" | "published";

/** Rollout wave from the content plan. */
export type WhitepaperWave = 1 | 2 | 3;

/** Section within a white paper outline. */
export type WhitepaperOutlineSection = {
  /** Stable section id, e.g. `executive-summary`. */
  id: string;
  title: string;
  /** Bullet points describing what the section must cover. */
  points: string[];
  /** Estimated page count for this section. */
  pages?: number;
};

/** Authoring blueprint for a white paper before PDF production. */
export type WhitepaperOutline = {
  slug: string;
  workingTitle: string;
  subtitle?: string;
  wave: WhitepaperWave;
  /** Primary buyer personas. */
  audience: string[];
  /** One-sentence thesis. */
  coreArgument: string;
  /** Estimated total page count (24–36 target). */
  estimatedPages: number;
  sections: WhitepaperOutlineSection[];
  /** Module slugs this paper supports commercially. */
  relatedModules: string[];
  /** Article catalogue slugs to repackage (see sources.ts). */
  relatedArticleSlugs: string[];
  /** Case study slugs for evidence chapters. */
  relatedCaseStudySlugs: string[];
  /** Optional ROI hub leaf slug for worksheet appendix. */
  roiLeafSlug?: string;
  /** Standards and frameworks referenced in the compliance appendix. */
  standards?: string[];
};

/** Maps existing site content to white paper chapters. */
export type WhitepaperContentSource = {
  whitepaperSlug: string;
  chapterId: string;
  chapterTitle: string;
  /** Published article slug under `src/content/landingpages/`. */
  articleSlug?: string;
  /** Case study slug from `caseStudies.ts`. */
  caseStudySlug?: string;
  /** External URL (press, partner PDF). */
  externalUrl?: string;
  /** ROI calculator tab or assumption set. */
  roiReference?: "desk-optimiser" | "energy-saver" | "schools" | "museums" | "offices" | "water-prevention";
  /** What to extract or adapt from the source. */
  notes: string;
};

/** Wave 2 flagship selection for a module not covered in wave 1. */
export type Wave2Flagship = {
  slug: string;
  moduleSlug: string;
  workingTitle: string;
  audience: string[];
  uniqueAngle: string;
  wave: 2;
  relatedArticleSlugs: string[];
  relatedCaseStudySlugs: string[];
};

/** Locale priority for PDF translation. */
export type LocalizationPriority = "primary" | "secondary" | "optional";

/** Translation plan row per white paper. */
export type WhitepaperLocalizationPlan = {
  slug: string;
  /** English is always canonical and primary. */
  locales: Partial<
    Record<
      Lang,
      {
        priority: LocalizationPriority;
        rationale: string;
        /** Target quarter for translation after EN PDF ships. */
        targetQuarter?: string;
      }
    >
  >;
};

/** Hub leaf for `/whitepapers/` and detail pages. */
export type WhitepaperLeaf = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lead: string;
  wave: WhitepaperWave;
  status: WhitepaperStatus;
  /** Primary landing category for articles cross-link. */
  category?: LandingCategorySlug;
  /** Site-relative PDF path once published, e.g. `/downloads/whitepapers/schools-indoor-climate.pdf`. */
  pdfPath?: string;
  /** When true, detail page shows email gate before PDF download. */
  gated?: boolean;
  /** Article slugs shown as related reading on the detail page. */
  relatedArticles?: string[];
  /** Case study slugs for proof links. */
  relatedCaseStudies?: string[];
  /** Module route keys, e.g. `modules/indoor-climate`. */
  relatedModules?: string[];
  /** Outline slug — defaults to `slug` when omitted. */
  outlineSlug?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  noindex?: boolean;
};
