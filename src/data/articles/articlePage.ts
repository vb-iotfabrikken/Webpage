import type { CollectionEntry } from "astro:content";
import type { CatalogArticle } from "../library/types";
import { landingCategories, type LandingCategorySlug } from "../landingCategories";
import { industriesHub } from "../site";
import type { ArticleCard } from "./query";
import {
  primaryIndustrySlugFromTags,
  relatedForIndustryArticle,
} from "./query";
import { getIndustryContent } from "../content/industries";

export type ArticleKeyPoint = {
  title: string;
  body?: string;
  unit?: string;
};

export type ArticleFaqItem = {
  q: string;
  a: string;
};

export type ArticleLink = {
  label: string;
  href: string;
};

/** Normalised article page data consumed by LandingPageLayout. */
export type ArticlePageData = {
  slug: string;
  title: string;
  description: string;
  category: LandingCategorySlug;
  eyebrow?: string;
  heroTitle: string;
  heroTitleAccent?: string;
  heroLead: string;
  heroImage?: string;
  heroImageAlt?: string;
  cardImage?: string;
  cardImageAlt?: string;
  primaryCta?: ArticleLink;
  secondaryCta?: ArticleLink;
  keyPoints?: ArticleKeyPoint[];
  faq?: ArticleFaqItem[];
  tags?: string[];
  publishedAt?: Date;
  updatedAt?: Date;
  seoTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  noindex?: boolean;
  /** True for catalogue stubs without a real MDX article. */
  isPlanned: boolean;
};

type PlaceholderTemplate = {
  keyPoints: ArticleKeyPoint[];
  faq: ArticleFaqItem[];
};

const hubLabelBySlug = new Map(
  industriesHub.leaves.map((l) => [l.slug, l.title.replace(/\.$/, "")]),
);

const TYPE_ACCENT: Record<string, string> = {
  "type:guide": "Practical guide.",
  "type:technical": "Technical deep-dive.",
  "type:standard": "Compliance explained.",
  "type:business-case": "The business case.",
  "type:integration": "Integration guide.",
  "type:customer-story": "Real-world results.",
  "type:niche": "Specialised use case.",
};

const PLACEHOLDER_BY_GROUP: Record<string, PlaceholderTemplate> = {
  "indoor-climate": {
    keyPoints: [
      { title: "Parameters", unit: "CO₂ · temp · RH", body: "Continuous monitoring across every room that matters." },
      { title: "Reporting", unit: "Daily / weekly", body: "Automatic graphs and reports by email to facilities teams." },
      { title: "Alarms", unit: "SMS + email", body: "Notifications when readings exceed agreed thresholds." },
      { title: "Compliance", unit: "BR18 · EN 16798", body: "Documentation that stands up to inspections and audits." },
    ],
    faq: [
      { q: "How many sensors do we need?", a: "It depends on room count and layout. We are happy to draw up a plan with you — book a demo and we will walk through your buildings." },
      { q: "When will the full article be published?", a: "This topic is on our knowledge-base roadmap. The sections below outline the subject; contact us if you need guidance before the full guide is ready." },
      { q: "Can we see RoomAlyzer live for this use case?", a: "Yes. Book a free 30-minute demo and we will show the platform with examples relevant to your buildings." },
    ],
  },
  preservation: {
    keyPoints: [
      { title: "Range", unit: "0–100 % RH", body: "High-accuracy temperature and relative humidity in historic spaces." },
      { title: "Battery life", unit: "Up to 10 years", body: "One setup — minimal maintenance in sensitive environments." },
      { title: "Network", unit: "NB-IoT / LoRaWAN", body: "No WiFi or cabling required in most heritage buildings." },
      { title: "Reporting", unit: "EN 15757 ready", body: "Automatic graphs and PDF reports for conservators and advisors." },
    ],
    faq: [
      { q: "Can sensors be installed discreetly?", a: "Yes. Our MINI range is only a few centimetres wide and mounts with a single screw or adhesive pad." },
      { q: "When will the full article be published?", a: "This topic is on our knowledge-base roadmap. Contact us if you need preservation-climate guidance before the full guide is ready." },
      { q: "Can one platform cover multiple sites?", a: "Yes. Dioceses, museum networks and property portfolios can see every building in a single view with role-based access." },
    ],
  },
  "water-detection": {
    keyPoints: [
      { title: "Response time", unit: "Under 60 seconds", body: "From water detection to SMS or email with the on-call team." },
      { title: "Battery life", unit: "Up to 10 years", body: "Install and forget — the platform warns before batteries need replacing." },
      { title: "Network", unit: "NB-IoT / LoRaWAN", body: "Works in basements and plant rooms without WiFi." },
      { title: "Escalation", unit: "SMS · email · webhook", body: "Integrate alarms into your existing emergency or ITSM flow." },
    ],
    faq: [
      { q: "Where should sensors be placed?", a: "Typically low on the floor at water heaters, pipe joints, plant equipment and drain covers. We are happy to draw up a plan with you." },
      { q: "When will the full article be published?", a: "This topic is on our knowledge-base roadmap. Contact us if you need water-detection guidance before the full guide is ready." },
      { q: "Can alarms trigger automatic shut-off?", a: "Yes. Via webhook or MQTT an alarm can trigger a solenoid valve while your team is on the way." },
    ],
  },
  integrations: {
    keyPoints: [
      { title: "Protocol", unit: "MQTT / REST", body: "Publish–subscribe or REST API — supported by every major BMS platform." },
      { title: "Payload", unit: "JSON", body: "Easy-to-read JSON with timestamp, reading, unit and device metadata." },
      { title: "Security", unit: "TLS + certificates", body: "Each consumer has its own identity and topic restrictions." },
      { title: "Latency", unit: "Near real-time", body: "Data arrives as often as the sensor reports — typically every 1–2 minutes." },
    ],
    faq: [
      { q: "Do we need our own MQTT broker?", a: "No — RoomAlyzer provides the broker. You get credentials and a TLS endpoint and can be up and running in under an hour." },
      { q: "When will the full article be published?", a: "This topic is on our knowledge-base roadmap. Contact us if you need integration guidance before the full guide is ready." },
      { q: "Can we subscribe to alarms as well as readings?", a: "Yes. Alarm events are published on a separate topic so your systems can react without polling an API." },
    ],
  },
  cases: {
    keyPoints: [
      { title: "Scale", unit: "Portfolio-wide", body: "From a single building to hundreds of sites in one rollout." },
      { title: "Timeline", unit: "Weeks, not months", body: "Structured deployment scripts that keep projects on schedule." },
      { title: "Stakeholders", unit: "On-site + remote", body: "Caretakers, management and advisors all get the access they need." },
      { title: "Lessons learned", unit: "Documented", body: "What worked, what we would do differently — shared openly." },
    ],
    faq: [
      { q: "Can we visit a reference site?", a: "Many customers are happy to share their experience. Ask us during a demo and we will connect you where possible." },
      { q: "When will the full case study be published?", a: "This customer story is on our roadmap. Contact us if you want to hear similar rollout experiences now." },
      { q: "How long does a typical rollout take?", a: "It varies by building count and sensor density. Book a demo and we will give a realistic timeline for your portfolio." },
    ],
  },
  default: {
    keyPoints: [
      { title: "Coverage", unit: "Room-level", body: "Wireless sensors across every space that matters in your portfolio." },
      { title: "Reporting", unit: "Automated", body: "Graphs, PDF exports and scheduled email reports to the right people." },
      { title: "Alarms", unit: "Configurable", body: "Thresholds, escalation ladders and quiet hours tuned to your operations." },
      { title: "Platform", unit: "RoomAlyzer", body: "One login for every building, sensor and stakeholder role." },
    ],
    faq: [
      { q: "How do we get started?", a: "Book a free 30-minute demo. We will walk through your case and give a concrete price estimate." },
      { q: "When will the full article be published?", a: "This topic is on our knowledge-base roadmap. Contact us if you need guidance before the full guide is ready." },
      { q: "Is RoomAlyzer right for our building type?", a: "We have rolled out in schools, offices, churches, hospitals and more. Tell us about your buildings and we will show relevant examples." },
    ],
  },
};

/** Map each landing category to a placeholder template group. */
const CATEGORY_TEMPLATE_GROUP: Partial<Record<LandingCategorySlug, keyof typeof PLACEHOLDER_BY_GROUP>> = {
  "indoor-climate": "indoor-climate",
  preservation: "preservation",
  "water-detection": "water-detection",
  integrations: "integrations",
  platform: "integrations",
  cases: "cases",
};

function placeholderTemplate(category: LandingCategorySlug): PlaceholderTemplate {
  const group = CATEGORY_TEMPLATE_GROUP[category] ?? "default";
  return PLACEHOLDER_BY_GROUP[group];
}

const MODULE_LABEL: Record<string, string> = {
  "module:indoor-climate": "Indoor climate",
  "module:preservation": "Preservation",
  "module:water-detection": "Water detection",
  "module:space-management": "Space management",
  "module:usage-cleaning": "Usage and cleaning",
  "module:energy": "Energy",
  "module:lockers-doors": "Lockers and doors",
  "module:push-buttons": "Push buttons",
  "module:platform": "Platform",
};

/**
 * Split a catalogue title into hero title + accent.
 * Two-sentence titles split on the first period; single-sentence titles
 * use the full title and derive the accent from tags or category.
 */
export function splitHeroTitle(
  title: string,
  tags: string[] = [],
  categoryEyebrow?: string,
): { heroTitle: string; heroTitleAccent?: string } {
  const trimmed = title.trim();
  const twoPart = trimmed.match(/^(.+?\.)\s+(.+)$/);
  if (twoPart) {
    const accent = twoPart[2].endsWith(".") ? twoPart[2] : `${twoPart[2]}.`;
    return { heroTitle: twoPart[1], heroTitleAccent: accent };
  }

  const heroTitle = trimmed.endsWith(".") ? trimmed : `${trimmed}.`;
  const typeTag = tags.find((t) => t.toLowerCase().startsWith("type:"));
  const accent =
    (typeTag && TYPE_ACCENT[typeTag.toLowerCase()]) ??
    (categoryEyebrow ? `${categoryEyebrow} guide.` : "Practical guide.");

  return { heroTitle, heroTitleAccent: accent };
}

function buildEyebrow(category: LandingCategorySlug, tags: string[]): string {
  const cat = landingCategories[category];

  const typeTag = tags.find((t) => t.toLowerCase().startsWith("type:"))?.toLowerCase();
  if (typeTag === "type:customer-story") {
    return `Customer story — ${cat.name}`;
  }

  const industryTags = tags
    .filter((t) => t.toLowerCase().startsWith("industry:"))
    .map((t) => t.slice("industry:".length).toLowerCase())
    .filter((slug) => hubLabelBySlug.has(slug));

  if (industryTags.length === 1) {
    return `Use case — ${hubLabelBySlug.get(industryTags[0])}`;
  }

  const moduleTag = tags.find((t) => t.toLowerCase().startsWith("module:"))?.toLowerCase();
  if (moduleTag && MODULE_LABEL[moduleTag]) {
    return `Use case — ${MODULE_LABEL[moduleTag]}`;
  }

  if (typeTag === "type:standard") {
    return `Compliance — ${cat.name}`;
  }
  if (typeTag === "type:business-case") {
    return `Business case — ${cat.name}`;
  }
  if (typeTag === "type:technical") {
    return `Technical — ${cat.name}`;
  }

  return `Use case — ${cat.name}`;
}

export function articlePageFromMdx(
  entry: CollectionEntry<"landingpages">,
): ArticlePageData {
  const d = entry.data;
  return {
    slug: entry.id,
    title: d.title,
    description: d.description,
    category: d.category,
    eyebrow: d.eyebrow,
    heroTitle: d.heroTitle,
    heroTitleAccent: d.heroTitleAccent,
    heroLead: d.heroLead,
    heroImage: d.heroImage,
    heroImageAlt: d.heroImageAlt,
    cardImage: d.cardImage,
    cardImageAlt: d.cardImageAlt,
    primaryCta: d.primaryCta,
    secondaryCta: d.secondaryCta,
    keyPoints: d.keyPoints,
    faq: d.faq,
    tags: d.tags,
    publishedAt: d.publishedAt,
    updatedAt: d.updatedAt,
    seoTitle: d.seoTitle,
    metaDescription: d.metaDescription,
    ogImage: d.ogImage,
    noindex: d.noindex,
    isPlanned: false,
  };
}

export function articlePageFromCatalog(stub: CatalogArticle): ArticlePageData {
  const cat = landingCategories[stub.category];
  const { heroTitle, heroTitleAccent } = splitHeroTitle(
    stub.title,
    stub.tags,
    cat.eyebrow,
  );
  const template = placeholderTemplate(stub.category);

  return {
    slug: stub.slug,
    title: stub.title.replace(/\.$/, ""),
    description: stub.lead,
    category: stub.category,
    eyebrow: buildEyebrow(stub.category, stub.tags),
    heroTitle,
    heroTitleAccent,
    heroLead: stub.lead,
    keyPoints: template.keyPoints,
    faq: template.faq,
    tags: stub.tags,
    isPlanned: true,
  };
}

/** Resolve related article cards for any article slug (MDX or catalogue). */
export function resolveRelatedCards(
  slug: string,
  tags: string[] | undefined,
  category: LandingCategorySlug,
  articleCards: ArticleCard[],
  industryHubSlugs: string[],
  manualRelatedSlugs: string[] = [],
): ArticleCard[] {
  const primaryIndustrySlug = primaryIndustrySlugFromTags(tags, industryHubSlugs);

  if (primaryIndustrySlug) {
    const industryContent = getIndustryContent(primaryIndustrySlug);
    return relatedForIndustryArticle(
      articleCards,
      slug,
      primaryIndustrySlug,
      industryContent?.featuredArticleSlugs ?? [],
      3,
    );
  }

  const manualRelated = manualRelatedSlugs
    .map((s) => articleCards.find((c) => c.id === s))
    .filter((c): c is ArticleCard => Boolean(c));

  if (manualRelated.length > 0) {
    return manualRelated.slice(0, 3);
  }

  return articleCards
    .filter((c) => c.id !== slug && c.category === category)
    .slice(0, 3);
}
