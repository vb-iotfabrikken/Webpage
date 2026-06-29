import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const categorySlugs = [
  "indoor-climate",
  "preservation",
  "space-management",
  "water-detection",
  "push-buttons",
  "cabinets-doors",
  "lockers-doors",
  "cleaning",
  "energy",
  "sensors",
  "platform",
  "integrations",
  "industries",
  "business-cases",
  "standards",
  "guides",
  "cases",
  "comparisons",
  "trends",
  "buyers-journey",
  "niche",
] as const;

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const faqSchema = z.object({
  q: z.string(),
  a: z.string(),
});

const keyPointSchema = z.object({
  title: z.string(),
  body: z.string().optional(),
  unit: z.string().optional(),
});

const landingpages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/landingpages",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),

    category: z.enum(categorySlugs),

    eyebrow: z.string().optional(),
    heroTitle: z.string(),
    heroTitleAccent: z.string().optional(),
    heroLead: z.string(),

    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    cardImage: z.string().optional(),
    cardImageAlt: z.string().optional(),

    primaryCta: linkSchema.optional(),
    secondaryCta: linkSchema.optional(),

    keyPoints: z.array(keyPointSchema).optional(),
    faq: z.array(faqSchema).optional(),

    related: z.array(z.string()).optional(),

    // Tags on library articles use a colon-prefixed convention so the tag
    // browser (/en/library/tags/<dimension>/<slug>/) can group them by
    // dimension. Accepted prefixes: module, industry, sensor, standard, type,
    // level. Free-form strings without a prefix are still accepted for
    // backward compatibility but won't show up under a dimension.
    tags: z.array(z.string()).optional(),

    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),

    // SEO overrides — fall back to title/description when omitted.
    seoTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    ogImage: z.string().optional(),

    draft: z.boolean().optional().default(false),
    noindex: z.boolean().optional().default(false),
  }),
});

export const collections = { landingpages };
