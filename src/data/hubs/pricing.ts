import type { Hub } from "./types";

export const pricingHub: Hub = {
  slug: "pricing",
  title: "Pricing you can plan with.",
  titleAccent: "No per-sensor licence fees.",
  eyebrow: "Pricing",
  lead: "A simple, predictable subscription that scales with your building — not with every new device you add.",
  leaves: [
    {
      slug: "plans",
      eyebrow: "Pricing",
      title: "Plans.",
      titleAccent: "Start small, grow at your pace.",
      lead: "Three straightforward plans that cover the needs of single buildings, portfolios and enterprises.",
    },
    {
      slug: "enterprise",
      eyebrow: "Pricing",
      title: "Enterprise.",
      titleAccent: "Custom terms for large rollouts.",
      lead: "Annual agreements, volume pricing, dedicated support and tailored onboarding for organisations over 1 000 sensors.",
    },
  ],
};
