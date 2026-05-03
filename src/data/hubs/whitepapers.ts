import type { Hub } from "./types";

export const whitepapersHub: Hub = {
  slug: "whitepapers",
  title: "White papers.",
  titleAccent: "In-depth reading for decision makers.",
  eyebrow: "White papers",
  lead: "Long-form guides on the topics our customers ask about most — with references, benchmarks and case numbers.",
  leaves: [
    {
      slug: "indoor-climate-schools",
      eyebrow: "White paper",
      title: "Indoor climate in schools.",
      titleAccent: "The full guide.",
      lead: "Why CO2, temperature and humidity drive both learning outcomes and long-term building condition.",
    },
    {
      slug: "hybrid-work-space",
      eyebrow: "White paper",
      title: "Hybrid work and space.",
      titleAccent: "How to right-size the office.",
      lead: "Measuring, modelling and redesigning offices for the post-2020 reality of hybrid work.",
    },
    {
      slug: "preservation-museums",
      eyebrow: "White paper",
      title: "Preservation in museums.",
      titleAccent: "Standards and practice.",
      lead: "Linking international preservation standards to the day-to-day operation of a museum climate.",
    },
    {
      slug: "esg-buildings",
      eyebrow: "White paper",
      title: "ESG for buildings.",
      titleAccent: "Data that stands up to reporting.",
      lead: "How to document environmental and social performance of buildings using objective sensor data.",
    },
  ],
};
