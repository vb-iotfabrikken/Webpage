/** SHA-256 hash for Google Ads enhanced conversions (email only, no storage). */

import { isAnalyticsEnabled } from "./config";

export async function hashEmailForEnhancedConversion(email: string): Promise<string | undefined> {
  const normalised = email.trim().toLowerCase();
  if (!normalised || typeof crypto?.subtle?.digest !== "function") return undefined;

  const encoded = new TextEncoder().encode(normalised);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

/** Push hashed email to dataLayer for a GTM enhanced-conversions tag. */
export async function pushEnhancedConversionEmail(email: string): Promise<void> {
  if (!isAnalyticsEnabled()) return;

  const hashed = await hashEmailForEnhancedConversion(email);
  if (!hashed || typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: "enhanced_conversion",
    enhanced_conversion_data: {
      email: hashed,
    },
  });
}
