export type CaseStudyCategory = "space-management" | "indoor-climate";

export type HubLeaf = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lead: string;
  /** Module focus shown on the cases index card. */
  category?: CaseStudyCategory;
  /** Customer logo under `public/cases/`. */
  logo?: string;
  logoAlt?: string;
  /** Optional link to a related article (internal path or external URL). */
  articleHref?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type Hub = {
  slug: string;
  title: string;
  titleAccent?: string;
  eyebrow: string;
  lead: string;
  leaves: HubLeaf[];
};
