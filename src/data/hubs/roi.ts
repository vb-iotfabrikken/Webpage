import type { Hub } from "./types";

export const roiHub: Hub = {
  slug: "roi",
  title: "Business cases and ROI.",
  titleAccent: "Numbers, not just promises.",
  eyebrow: "ROI",
  lead: "The savings, payback time and total cost of ownership behind every module — with real customer data to back it up.",
  leaves: [
    {
      slug: "calculator",
      eyebrow: "ROI",
      title: "ROI calculator.",
      titleAccent: "Your case, your numbers.",
      lead: "An interactive calculator that estimates payback based on the number of sensors, square metres and the cost baseline in your building.",
    },
    {
      slug: "schools",
      eyebrow: "ROI",
      title: "ROI for schools.",
      titleAccent: "From CO2 to better results.",
      lead: "The documented effect of better indoor climate on attendance, learning outcomes and building maintenance.",
    },
    {
      slug: "museums",
      eyebrow: "ROI",
      title: "ROI for museums.",
      titleAccent: "Insurance for the collection.",
      lead: "How continuous climate monitoring reduces preservation risk — and protects lending agreements.",
    },
    {
      slug: "offices",
      eyebrow: "ROI",
      title: "ROI for offices.",
      titleAccent: "Every empty desk has a price tag.",
      lead: "The case for space management in hybrid offices, including real numbers from our customers.",
    },
    {
      slug: "water-prevention",
      eyebrow: "ROI",
      title: "ROI for water prevention.",
      titleAccent: "A very cheap insurance policy.",
      lead: "The cost of a single water damage event versus the cost of a building-wide fleet of leak sensors.",
    },
  ],
};
