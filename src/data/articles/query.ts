import type { CollectionEntry } from "astro:content";
import { articles as catalog } from "../library/catalog";
import type { LandingCategorySlug } from "../landingCategories";

/**
 * Unified card model so every surface (articles index, tag pages, industry
 * spotlights and sector lists) can treat published MDX articles and planned
 * catalogue stubs the same way. `isFull: true` marks a real MDX article;
 * `isFull: false` marks a planned stub.
 */
export type ArticleCard = {
  id: string;
  title: string;
  description: string;
  category: LandingCategorySlug;
  tags: string[];
  isFull: boolean;
  /** Teaser image (cardImage → heroImage). Undefined → placeholder. */
  image?: string;
  imageAlt?: string;
};

const INDUSTRY_PREFIX = "industry:";

/** Build the unified card list from the landingpages collection + catalogue. */
export function buildArticleCards(
  entries: CollectionEntry<"landingpages">[],
): ArticleCard[] {
  const mdxSlugs = new Set(entries.map((e) => e.id));
  return [
    ...entries.map<ArticleCard>((e) => ({
      id: e.id,
      title: e.data.title,
      description: e.data.description,
      category: e.data.category,
      tags: (e.data.tags ?? []).map((t) => t.trim()).filter(Boolean),
      isFull: true,
      image: e.data.cardImage ?? e.data.heroImage,
      imageAlt: e.data.cardImageAlt ?? e.data.heroImageAlt ?? e.data.title,
    })),
    ...catalog
      .filter((a) => !mdxSlugs.has(a.slug))
      .map<ArticleCard>((a) => ({
        id: a.slug,
        title: a.title,
        description: a.lead,
        category: a.category,
        tags: a.tags,
        isFull: false,
      })),
  ];
}

/** Published-first, then alphabetical by title. */
export function sortArticleCards(cards: ArticleCard[]): ArticleCard[] {
  return [...cards].sort((a, b) => {
    if (a.isFull !== b.isFull) return a.isFull ? -1 : 1;
    return a.title.localeCompare(b.title, "en");
  });
}

/** Every card tagged for a given industry hub slug (case-insensitive). */
export function cardsForIndustry(
  cards: ArticleCard[],
  industrySlug: string,
): ArticleCard[] {
  const needle = `${INDUSTRY_PREFIX}${industrySlug.toLowerCase()}`;
  return cards.filter((c) =>
    c.tags.some((t) => t.toLowerCase() === needle),
  );
}

/**
 * Curated spotlight for an industry page: manual picks first (in the given
 * order, when they exist in the pool), then filled from the sorted auto pool.
 */
export function featuredForIndustry(
  cards: ArticleCard[],
  industrySlug: string,
  manualSlugs: string[] = [],
  limit = 6,
): ArticleCard[] {
  const pool = cardsForIndustry(cards, industrySlug);
  const byId = new Map(pool.map((c) => [c.id, c]));
  const picked: ArticleCard[] = [];
  const seen = new Set<string>();

  for (const slug of manualSlugs) {
    const card = byId.get(slug);
    if (card && !seen.has(slug)) {
      picked.push(card);
      seen.add(slug);
    }
  }

  if (picked.length < limit) {
    for (const card of sortArticleCards(pool)) {
      if (picked.length >= limit) break;
      if (!seen.has(card.id)) {
        picked.push(card);
        seen.add(card.id);
      }
    }
  }

  return picked.slice(0, limit);
}

/** When an article carries exactly one `industry:` tag for a known hub, return it. */
export function primaryIndustrySlugFromTags(
  tags: string[] | undefined,
  validHubSlugs: Iterable<string>,
): string | null {
  const hubSlugs = new Set(validHubSlugs);
  const industrySlugs = (tags ?? [])
    .filter((t) => t.toLowerCase().startsWith(INDUSTRY_PREFIX))
    .map((t) => t.slice(INDUSTRY_PREFIX.length).toLowerCase())
    .filter((slug) => hubSlugs.has(slug));
  return industrySlugs.length === 1 ? industrySlugs[0] : null;
}

/**
 * Related articles for an industry-tagged article page: same curated rule as
 * industry hub spotlights (manual picks first, then auto pool), excluding the
 * current article.
 */
export function relatedForIndustryArticle(
  cards: ArticleCard[],
  articleSlug: string,
  industrySlug: string,
  manualSlugs: string[] = [],
  limit = 3,
): ArticleCard[] {
  return featuredForIndustry(cards, industrySlug, manualSlugs, limit + 1)
    .filter((c) => c.id !== articleSlug)
    .slice(0, limit);
}
