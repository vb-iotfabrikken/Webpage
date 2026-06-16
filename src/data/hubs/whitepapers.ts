import type { Hub } from "./types";

export type WhitepaperResource = {
  href: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lead: string;
  ctaLabel: string;
};

export const whitepapersHub: Hub = {
  slug: "whitepapers",
  title: "White papers.",
  titleAccent: "Long-form guides for decision makers.",
  eyebrow: "White papers",
  lead: "We are preparing official white papers on the topics our customers ask about most. Until they are ready, explore our library, customer cases and blog — or book a briefing with our team.",
  leaves: [],
};

/** Real pages visitors can use while official white papers are in production. */
export const whitepaperResources: WhitepaperResource[] = [
  {
    href: "/en/library/",
    eyebrow: "Library",
    title: "Articles and use cases.",
    titleAccent: "Search by topic or industry.",
    lead: "Guides on indoor climate, preservation, space management, integrations and more — with filters for tags and categories.",
    ctaLabel: "Browse the library",
  },
  {
    href: "/en/case-studies/",
    eyebrow: "Customer cases",
    title: "Real buildings, real results.",
    titleAccent: "Municipalities, offices and heritage.",
    lead: "See how customers use RoomAlyzer for indoor climate, space management and water prevention — with named references where we can share them.",
    ctaLabel: "Read customer cases",
  },
  {
    href: "/en/blog/",
    eyebrow: "Blog",
    title: "Longer reads and field notes.",
    titleAccent: "Rollouts, standards and lessons learned.",
    lead: "In-depth posts from our team on preservation standards, municipal rollouts and what we would do differently next time.",
    ctaLabel: "Visit the blog",
  },
  {
    href: "/en/contact/book-demo/",
    eyebrow: "Briefing",
    title: "Talk to us directly.",
    titleAccent: "Tailored to your building type.",
    lead: "Book a 30-minute walk-through and we will cover the topics that matter for your portfolio — no white paper required.",
    ctaLabel: "Book a free demo",
  },
];
