import type { ZohoLeadSource } from "./zoho";

/** Zoho lead-source label per event landing contact form. */
export const eventContactLeadSources = {
  archivistica: "Website - Archivistica on-site",
  "worktech26-stockholm": "Website - WORKTECH26 Stockholm on-site",
  "dhbv-verbandstag-2026": "Website - DHBV Verbandstag on-site",
  "mutec-2026": "Website - MUTEC on-site",
} as const satisfies Record<string, ZohoLeadSource>;
