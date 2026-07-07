/** Persist first-touch campaign parameters for form attribution across navigation. */

const STORAGE_KEY = "iotf-attribution-v1";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "from",
] as const;

export type StoredAttribution = Partial<Record<(typeof TRACKED_PARAMS)[number], string>> & {
  landing_page?: string;
  captured_at?: string;
};

function readStore(): StoredAttribution | null {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredAttribution) : null;
  } catch {
    return null;
  }
}

function writeStore(data: StoredAttribution): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage may be unavailable in private mode
  }
}

/** Capture UTM, gclid, and ?from= from the landing URL (first touch only). */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  if (readStore()) return;

  const params = new URLSearchParams(window.location.search);
  const captured: StoredAttribution = {
    landing_page: `${window.location.pathname}${window.location.search}`,
    captured_at: new Date().toISOString(),
  };

  let hasCampaign = false;
  for (const key of TRACKED_PARAMS) {
    const value = params.get(key)?.trim();
    if (value) {
      captured[key] = value;
      hasCampaign = true;
    }
  }

  if (hasCampaign || captured.landing_page) {
    writeStore(captured);
  }
}

/** Return stored first-touch attribution for CRM or event enrichment. */
export function getStoredAttribution(): StoredAttribution | null {
  return readStore();
}

/** Format attribution as a multi-line block for Zoho Description. */
export function formatAttributionForZoho(): string | undefined {
  const data = readStore();
  if (!data) return undefined;

  const lines: string[] = [];
  if (data.landing_page) lines.push(`Landing page: ${data.landing_page}`);
  if (data.gclid) lines.push(`gclid: ${data.gclid}`);
  if (data.utm_source) lines.push(`utm_source: ${data.utm_source}`);
  if (data.utm_medium) lines.push(`utm_medium: ${data.utm_medium}`);
  if (data.utm_campaign) lines.push(`utm_campaign: ${data.utm_campaign}`);
  if (data.utm_term) lines.push(`utm_term: ${data.utm_term}`);
  if (data.utm_content) lines.push(`utm_content: ${data.utm_content}`);
  if (data.from) lines.push(`from: ${data.from}`);

  return lines.length > 0 ? lines.join("\n") : undefined;
}
