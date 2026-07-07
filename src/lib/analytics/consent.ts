import { ANALYTICS_STORAGE_KEY } from "./config";

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export type ConsentChoice = "all" | "necessary" | "custom";

const DEFAULT_STATE: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: "",
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]): void {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(args);
}

/** Apply Google Consent Mode v2 signals from the current consent state. */
export function applyConsentMode(state: ConsentState): void {
  if (typeof window === "undefined") return;

  const analyticsGranted = state.analytics ? "granted" : "denied";
  const marketingGranted = state.marketing ? "granted" : "denied";

  gtag("consent", "update", {
    analytics_storage: analyticsGranted,
    ad_storage: marketingGranted,
    ad_user_data: marketingGranted,
    ad_personalization: marketingGranted,
  });
}

/** Set Consent Mode defaults before any Google tag loads. */
export function setDefaultConsentMode(): void {
  if (typeof window === "undefined") return;

  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
  });
}

export function readConsentState(): ConsentState | null {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") {
      return null;
    }
    return { ...DEFAULT_STATE, ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function writeConsentState(state: ConsentState): void {
  try {
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage may be unavailable
  }
}

export function consentFromChoice(choice: ConsentChoice, custom?: Pick<ConsentState, "analytics" | "marketing">): ConsentState {
  const updatedAt = new Date().toISOString();

  if (choice === "all") {
    return { necessary: true, analytics: true, marketing: true, updatedAt };
  }
  if (choice === "necessary") {
    return { necessary: true, analytics: false, marketing: false, updatedAt };
  }

  return {
    necessary: true,
    analytics: custom?.analytics ?? false,
    marketing: custom?.marketing ?? false,
    updatedAt,
  };
}

export function hasTrackingConsent(state: ConsentState): boolean {
  return state.analytics || state.marketing;
}
