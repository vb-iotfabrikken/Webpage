import type { ZohoLeadSource } from "../../data/zoho";

/** Query parameter used to override the form's default Zoho lead source. */
export const LEAD_SOURCE_QUERY_PARAM = "from";

/**
 * Maps `?from=` values to Zoho lead-source labels. Add entries here when a CTA
 * should tag submissions differently while still using an existing contact page.
 */
export const LEAD_SOURCE_FROM_QUERY: Record<string, ZohoLeadSource> = {
  "pricing-enterprise": "Website - Pricing enterprise",
};

/** Resolve the lead source, honouring an optional `?from=` override in the URL. */
export function resolveLeadSource(defaultSource: ZohoLeadSource): ZohoLeadSource {
  if (typeof window === "undefined") return defaultSource;
  const from = new URLSearchParams(window.location.search).get(LEAD_SOURCE_QUERY_PARAM);
  if (!from) return defaultSource;
  return LEAD_SOURCE_FROM_QUERY[from] ?? defaultSource;
}
