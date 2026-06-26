/** Hero and capability screenshot metadata for the push-buttons module page. */

export const pushButtonsDashboard = {

  width: 1400,

  height: 800,

  placeholderLabel: "RoomAlyzer push buttons dashboard",

};

/** Small editorial photo beside the capabilities section intro. */
export const pushButtonsCapabilitiesContext = {
  width: 960,
  height: 695,
  placeholderLabel: "Push buttons in use photo",
} as const;



export const pushButtonsFeatureImages: Record<

  string,

  { width: number; height: number; placeholderLabel: string; src?: string }

> = {

  "one-tap": { width: 1200, height: 750, placeholderLabel: "One-tap feedback screenshot" },

  "instant-routing": { width: 1200, height: 750, placeholderLabel: "Alert routing screenshot" },

  "feedback-history": { width: 1200, height: 750, placeholderLabel: "Feedback history screenshot" },

  "flexible-placement": { width: 1200, height: 750, placeholderLabel: "Flexible button placement screenshot" },

};

