import { captureAttribution } from "./attribution";
import {
  applyConsentMode,
  hasTrackingConsent,
  readConsentState,
  setDefaultConsentMode,
} from "./consent";
import { isAnalyticsEnabled } from "./config";
import { initCtaTracking, trackContentView } from "./cta-tracking";
import { loadGtm } from "./gtm";

/** Initialise analytics helpers after consent is resolved. */
export function initAnalyticsRuntime(): void {
  if (!isAnalyticsEnabled()) return;

  captureAttribution();
  initCtaTracking();

  const consent = readConsentState();
  if (consent && hasTrackingConsent(consent)) {
    applyConsentMode(consent);
    loadGtm();
    trackContentView();
  }
}

/** Called from ConsentBanner after the user saves preferences. */
export function onConsentSaved(): void {
  const consent = readConsentState();
  if (!consent) return;

  applyConsentMode(consent);

  if (hasTrackingConsent(consent)) {
    loadGtm();
    trackContentView();
  }
}

/** Bootstrap consent defaults in <head> before any Google tag. */
export function bootstrapConsentDefaults(): void {
  if (!isAnalyticsEnabled()) return;
  setDefaultConsentMode();
}
