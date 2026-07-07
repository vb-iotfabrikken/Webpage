/**
 * Analytics event catalog — names and parameters pushed to `window.dataLayer` for GTM.
 *
 * Register custom dimensions in GA4 admin:
 *   lang, page_type, form_type, lead_source, cta_id, content_id, error_type
 */

import { isAnalyticsEnabled } from "./config";

export type AnalyticsEventName =
  | "content_view"
  | "cta_click"
  | "form_start"
  | "form_error"
  | "generate_lead"
  | "consent_update";

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/** Push a structured event to the GTM dataLayer. No-op when analytics wave is off. */
export function pushEvent(name: AnalyticsEventName, params: AnalyticsEventParams = {}): void {
  if (!isAnalyticsEnabled() || typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  const payload: Record<string, unknown> = {
    event: name,
    ...Object.fromEntries(
      Object.entries(params).filter(([, value]) => value !== undefined && value !== ""),
    ),
  };
  window.dataLayer.push(payload);
}

/** Documented event catalog for the internal journey dashboard. */
export const EVENT_CATALOG: ReadonlyArray<{
  event: AnalyticsEventName;
  stage: string;
  trigger: string;
  params: readonly string[];
}> = [
  {
    event: "content_view",
    stage: "Exploration",
    trigger: "Module, sensor, compare, or case study page load",
    params: ["lang", "page_type", "content_id"],
  },
  {
    event: "cta_click",
    stage: "Intent",
    trigger: "Click on a primary CTA link (book demo, get offer, contact sales)",
    params: ["lang", "cta_id", "page_type", "link_url"],
  },
  {
    event: "form_start",
    stage: "Form engagement",
    trigger: "First focus on a lead form field",
    params: ["lang", "form_type", "page_type"],
  },
  {
    event: "form_error",
    stage: "Form engagement",
    trigger: "Validation or submit failure (no PII)",
    params: ["lang", "form_type", "error_type"],
  },
  {
    event: "generate_lead",
    stage: "Conversion",
    trigger: "Successful Zoho Web-to-Lead submit",
    params: ["lang", "form_type", "lead_source", "page_type"],
  },
  {
    event: "consent_update",
    stage: "Consent",
    trigger: "User updates cookie preferences",
    params: ["analytics", "marketing"],
  },
];
