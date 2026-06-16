import { externalLinks } from "../../data/externalLinks";

/**
 * Single source of truth for site-wide SEO constants. Keep brand/legal facts
 * here so metadata, structured data and Open Graph stay consistent.
 */
export const SITE_URL = "https://iot-fabrikken.com";
export const SITE_NAME = "IoT Fabrikken";
export const LEGAL_NAME = "IoT Fabrikken ApS";
export const VAT_ID = "DK39110393"; // CVR 39 11 03 93

/** Default share image used when a page does not supply its own (1200x630). */
export const DEFAULT_OG_IMAGE = "/og-default.png";

/** Title template applied to page titles that are not already brand-suffixed. */
export const TITLE_SUFFIX = `${SITE_NAME}`;

export const CONTACT = {
  phone: "+45 71 71 80 90",
  email: "info@iot-fabrikken.com",
};

export const POSTAL_ADDRESS = {
  street: "Brønsager 1",
  postalCode: "4000",
  city: "Roskilde",
  countryCode: "DK",
};

/** Public social / external profiles used for the `sameAs` graph. */
export const SAME_AS: string[] = [
  externalLinks.linkedin,
  externalLinks.youtube,
  externalLinks.github,
];

/** Resolve a site-absolute URL from a path or pass through absolute URLs. */
export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return new URL(pathOrUrl, SITE_URL).toString();
}

/**
 * Organization schema — emitted once site-wide. Uses a stable @id so other
 * nodes (publisher, breadcrumb, etc.) can reference the same entity.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.png"),
    },
    vatID: VAT_ID,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: POSTAL_ADDRESS.street,
      postalCode: POSTAL_ADDRESS.postalCode,
      addressLocality: POSTAL_ADDRESS.city,
      addressCountry: POSTAL_ADDRESS.countryCode,
    },
    sameAs: SAME_AS,
  };
}

/** WebSite schema — emitted once site-wide; references the Organization. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}
