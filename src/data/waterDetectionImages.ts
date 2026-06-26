/** Hero and capability screenshot metadata for the water-detection module page. */
export const waterDetectionDashboard = {
  width: 1200,
  height: 750,
  placeholderLabel: "Water detection dashboard screenshot",
};

/** Small editorial photo beside the capabilities section intro. */
export const waterDetectionCapabilitiesContext = {
  width: 960,
  height: 695,
  placeholderLabel: "Water detection in use photo",
} as const;

export const waterDetectionFeatureImages: Record<
  string,
  { width: number; height: number; placeholderLabel: string; src?: string }
> = {
  "instant-alerts": { width: 1200, height: 750, placeholderLabel: "Instant water alert screenshot" },
  cellular: { width: 1200, height: 750, placeholderLabel: "Cellular water sensor screenshot" },
  "point-detector": { width: 1200, height: 750, placeholderLabel: "Point water detector screenshot" },
  "incident-log": { width: 1200, height: 750, placeholderLabel: "Water incident log screenshot" },
};
