import type { Hub } from "./types";

export const legalHub: Hub = {
  slug: "legal",
  title: "Legal.",
  titleAccent: "The fine print, in plain language.",
  eyebrow: "Legal",
  lead: "Privacy, cookies, terms, security and the legal pages we are required to publish.",
  leaves: [
    {
      slug: "privacy",
      eyebrow: "Legal",
      title: "Privacy policy.",
      titleAccent: "What we do with data — and what we don't.",
      lead: "How we process personal data, which subprocessors we use and the rights you have as a registered person.",
    },
    {
      slug: "cookies",
      eyebrow: "Legal",
      title: "Cookie policy.",
      titleAccent: "Which cookies, and why.",
      lead: "The cookies we set, the ones we do not and how you can change your preferences at any time.",
    },
    {
      slug: "terms",
      eyebrow: "Legal",
      title: "Terms and DPA.",
      titleAccent: "Commercial terms and data processing.",
      lead: "Our commercial terms and the data-processing agreement that applies to every RoomAlyzer deployment.",
    },
    {
      slug: "impressum",
      eyebrow: "Legal",
      title: "Impressum.",
      titleAccent: "Statutory information.",
      lead: "Company details, registered address and responsible persons — as required under German law.",
    },
    {
      slug: "security",
      eyebrow: "Legal",
      title: "Security.",
      titleAccent: "How we protect your data.",
      lead: "Certifications, controls and the architectural choices behind RoomAlyzer's security posture.",
    },
    {
      slug: "accessibility",
      eyebrow: "Legal",
      title: "Accessibility statement.",
      titleAccent: "A site that everyone can use.",
      lead: "Our current accessibility level, known issues and how to report problems.",
    },
    {
      slug: "sla",
      eyebrow: "Legal",
      title: "Service-level agreement.",
      titleAccent: "What we commit to — and how.",
      lead: "Our uptime commitment, support hours and the way we measure and report on service levels.",
    },
  ],
};
