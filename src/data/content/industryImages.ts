/**
 * Hero photography for industry detail pages.
 *
 * Dedicated sector photos live in `public/images/industries/`. Industries
 * without any photo fall back to a placeholder rendered by the consuming
 * component.
 */

const BASE = "/images/industries";
export type IndustryImage = {
  src: string;
  alt: string;
};

export const industryImages: Record<string, IndustryImage> = {
  offices: {
    src: `${BASE}/offices.webp`,
    alt: "People working together in a bright modern open-plan office",
  },
  schools: {
    src: `${BASE}/schools.webp`,
    alt: "Students in a bright, well-ventilated classroom",
  },
  churches: {
    src: `${BASE}/churches.webp`,
    alt: "Interior of a historic church with wooden pews",
  },
  "archives-libraries": {
    src: `${BASE}/archives-libraries.webp`,
    alt: "Rows of shelved books and documents in an archive",
  },
  "warehouses-logistics": {
    src: `${BASE}/warehouses-logistics.webp`,
    alt: "Tall storage shelving in a logistics warehouse",
  },
  hospitals: {
    src: `${BASE}/hospitals.webp`,
    alt: "Clean, well-monitored hospital corridor and patient areas",
  },
  hotels: {
    src: `${BASE}/hotels.webp`,
    alt: "Comfortable hotel room with a welcoming interior",
  },
  retail: {
    src: `${BASE}/retail.webp`,
    alt: "Bright retail store interior with stocked shelves",
  },
  "elderly-care": {
    src: `${BASE}/elderly-care.webp`,
    alt: "Calm, comfortable elderly-care living space",
  },
  "manors-castles": {
    src: `${BASE}/manors-castles.webp`,
    alt: "Historic manor house with heritage interiors",
  },
  "property-management": {
    src: `${BASE}/property-management.webp`,
    alt: "Modern residential property managed across a portfolio",
  },
  "fm-companies": {
    src: `${BASE}/fm-companies.webp`,
    alt: "Facility-management team maintaining a commercial building",
  },
  "consulting-engineers": {
    src: `${BASE}/consulting-engineers.webp`,
    alt: "Consulting engineer reviewing building measurements on site",
  },
  "museums-galleries": {
    src: `${BASE}/museums-galleries.webp`,
    alt: "Visitors viewing art in a museum gallery",
  },
  municipalities: {
    src: `${BASE}/municipalities.webp`,
    alt: "A municipal building serving the local community",
  },
};

export function getIndustryImage(slug: string): IndustryImage | undefined {
  return industryImages[slug];
}
