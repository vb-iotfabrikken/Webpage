/** Public analytics configuration (env-driven, safe to expose in the browser bundle). */

import { ANALYTICS_WAVE_LIVE } from "../../data/launch";

export const ANALYTICS_STORAGE_KEY = "iotf-consent-v1";

/** True when the second analytics wave is live and env has not disabled tags. */
export function isAnalyticsEnabled(): boolean {
  if (!ANALYTICS_WAVE_LIVE) return false;
  return import.meta.env.PUBLIC_ANALYTICS_ENABLED !== "false";
}

export function getGtmId(): string | undefined {
  const id = import.meta.env.PUBLIC_GTM_ID?.trim();
  return id || undefined;
}

export function getGa4MeasurementId(): string | undefined {
  const id = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID?.trim();
  return id || undefined;
}

export function getGscVerification(): string | undefined {
  const token = import.meta.env.PUBLIC_GSC_VERIFICATION?.trim();
  return token || undefined;
}

/** Optional Clarity project ID — prefer loading Clarity via GTM; used for docs/reference only. */
export function getClarityProjectId(): string | undefined {
  const id = import.meta.env.PUBLIC_CLARITY_PROJECT_ID?.trim();
  return id || undefined;
}

/** Outbound links for the internal journey hub (open in Google/Microsoft UI with team 2FA). */
export type AnalyticsToolLinks = {
  ga4?: string;
  lookerFunnel?: string;
  lookerSearchConsole?: string;
  searchConsole?: string;
  clarity?: string;
  googleAds?: string;
};

export function getAnalyticsToolLinks(): AnalyticsToolLinks {
  return {
    ga4: import.meta.env.PUBLIC_GA4_REPORT_URL?.trim() || undefined,
    lookerFunnel: import.meta.env.PUBLIC_LOOKER_GA4_URL?.trim() || undefined,
    lookerSearchConsole: import.meta.env.PUBLIC_LOOKER_GSC_URL?.trim() || undefined,
    searchConsole: import.meta.env.PUBLIC_GSC_URL?.trim() || undefined,
    clarity: import.meta.env.PUBLIC_CLARITY_DASHBOARD_URL?.trim() || undefined,
    googleAds: import.meta.env.PUBLIC_GOOGLE_ADS_URL?.trim() || undefined,
  };
}
