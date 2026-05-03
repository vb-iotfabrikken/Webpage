import type { LandingCategorySlug } from "../landingCategories";

/**
 * Catalog letters correspond to the content-plan in the sitemap
 * (A=indoor climate deep-dive features, B=preservation, …, T=niche).
 */
export type CatalogLetter =
  | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J"
  | "K" | "L" | "M" | "N" | "O" | "Q" | "R" | "S" | "T";

/**
 * A stub entry in the library catalog. The router (`/en/library/[slug].astro`)
 * prefers a real MDX article with the same slug if one exists in
 * `src/content/landingpages/`, otherwise falls back to a rich placeholder.
 */
export type CatalogArticle = {
  slug: string;
  title: string;
  lead: string;
  category: LandingCategorySlug;
  catalog: CatalogLetter;
  /** Prefixed tag strings, e.g. `module:indoor-climate`, `industry:schools`. */
  tags: string[];
};

export type CatalogGroupInput = Omit<CatalogArticle, "category" | "catalog">;

export function makeCatalog(
  category: LandingCategorySlug,
  catalog: CatalogLetter,
  items: CatalogGroupInput[],
): CatalogArticle[] {
  return items.map((it) => ({ ...it, category, catalog }));
}
