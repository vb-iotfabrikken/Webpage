import { SITE_URL, SITE_NAME, absoluteUrl } from "./config";

/**
 * Reusable JSON-LD builders for per-page structured data. Each returns a plain
 * object (or null) suitable for passing to `Layout`'s `jsonLd` prop. The
 * publisher/author reference the site-wide Organization node by @id.
 */

const ORG_REF = { "@id": `${SITE_URL}/#organization` };

export interface BreadcrumbItem {
  name: string;
  /** Site-relative path or absolute URL. */
  href: string;
}

/** BreadcrumbList from an ordered list of crumbs (omit if fewer than 2). */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  if (!items || items.length < 2) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  datePublished?: Date | string;
  dateModified?: Date | string;
  authorName?: string;
  image?: string;
  type?: "Article" | "BlogPosting" | "NewsArticle";
}

const toIso = (d?: Date | string) =>
  d == null ? undefined : d instanceof Date ? d.toISOString() : d;

export function articleSchema(input: ArticleSchemaInput) {
  const published = toIso(input.datePublished);
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.url),
    ...(published ? { datePublished: published } : {}),
    dateModified: toIso(input.dateModified) ?? published,
    ...(input.image ? { image: absoluteUrl(input.image) } : {}),
    author: input.authorName
      ? { "@type": "Person", name: input.authorName }
      : ORG_REF,
    publisher: ORG_REF,
  };
}

export interface ProductSchemaInput {
  name: string;
  description: string;
  url: string;
  image?: string;
  brand?: string;
}

export function productSchema(input: ProductSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    ...(input.image ? { image: absoluteUrl(input.image) } : {}),
    brand: { "@type": "Brand", name: input.brand ?? SITE_NAME },
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

/** FAQPage from question/answer pairs (omit if empty). */
export function faqSchema(items: FaqItem[]) {
  if (!items || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export interface WebPageSchemaInput {
  title: string;
  description: string;
  url: string;
  inLanguage?: string;
}

export function webPageSchema(input: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.url),
    inLanguage: input.inLanguage ?? "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}
