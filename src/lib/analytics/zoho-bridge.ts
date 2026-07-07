import { formatAttributionForZoho } from "./attribution";
import { isAnalyticsEnabled } from "./config";

const GA4_CLIENT_ID_COOKIE = "_ga";

/** Read GA4 client_id from the _ga cookie (format: GA1.1.XXXXXXXX.YYYYYYYY). */
export function readGa4ClientId(): string | undefined {
  if (typeof document === "undefined") return undefined;

  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${GA4_CLIENT_ID_COOKIE}=`));

  if (!match) return undefined;

  const value = decodeURIComponent(match.slice(GA4_CLIENT_ID_COOKIE.length + 1));
  const parts = value.split(".");
  if (parts.length >= 4) {
    return `${parts[2]}.${parts[3]}`;
  }
  return value || undefined;
}

/** Append analytics attribution block to a Zoho Description field. */
export function enrichZohoDescription(
  baseDescription: string | undefined,
  source: string,
): string {
  const sections: string[] = [`Lead source: ${source}`];

  if (isAnalyticsEnabled()) {
    const clientId = readGa4ClientId();
    if (clientId) sections.push(`GA4 client_id: ${clientId}`);

    const attribution = formatAttributionForZoho();
    if (attribution) sections.push(attribution);
  }

  if (baseDescription?.trim()) {
    sections.push(baseDescription.trim());
  }

  return sections.join("\n\n");
}
