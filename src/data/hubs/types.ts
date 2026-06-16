export type CaseStudyCategory = "space-management" | "indoor-climate";

/** Official RoomAlyzer product line — see project rules for the authoritative list. */
export type SensorCategory = "air" | "space" | "water" | "misc";

/**
 * Optional per-entity SEO overrides. When omitted, pages fall back to deriving
 * the title from the entity title and the meta description from its lead.
 */
export type SeoFields = {
  /** Override the document <title> (without the brand suffix). */
  seoTitle?: string;
  /** Override the meta description / OG description. */
  metaDescription?: string;
  /** Page-specific Open Graph / share image (site-relative path). */
  ogImage?: string;
  /** Exclude this entity's page from indexing (still followable). */
  noindex?: boolean;
};

export type HubLeaf = SeoFields & {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lead: string;
  /**
   * Sensors catalogue: RoomAlyzer Air / Space / Water / Miscellaneous.
   * Case-studies hub: the module focus (space-management / indoor-climate).
   */
  category?: SensorCategory | CaseStudyCategory;
  /** Public URL to the English product sheet PDF. */
  productSheetUrl?: string;
  /** Customer logo under `public/cases/`. */
  logo?: string;
  logoAlt?: string;
  /** Optional link to a related article (internal path or external URL). */
  articleHref?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type Hub = SeoFields & {
  slug: string;
  title: string;
  titleAccent?: string;
  eyebrow: string;
  lead: string;
  leaves: HubLeaf[];
};
