/**
 * Hero photography for industry detail pages.
 *
 * Dedicated sector photos live in `public/images/industries/`. Museums and
 * municipalities still reuse the homepage sector teaser images
 * (`public/images/sensor-finder/`) until dedicated shots exist. Industries
 * without any photo fall back to a placeholder rendered by the consuming
 * component.
 */

const BASE = "/images/industries";
const TEASER_BASE = "/images/sensor-finder";

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
  "museums-galleries": {
    src: `${TEASER_BASE}/municipalities.png`,
    alt: "Visitors viewing art in a museum gallery",
  },
  municipalities: {
    src: `${TEASER_BASE}/schools.png`,
    alt: "A municipal building serving the local community",
  },
};

export function getIndustryImage(slug: string): IndustryImage | undefined {
  return industryImages[slug];
}
