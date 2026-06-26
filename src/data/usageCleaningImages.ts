/** Hero and capability screenshot metadata for the usage-cleaning module page. */
export const usageCleaningDashboard = {
  width: 1200,
  height: 750,
  placeholderLabel: "Usage and cleaning dashboard screenshot",
};

/** Small editorial photo beside the capabilities section intro. */
export const usageCleaningCapabilitiesContext = {
  width: 960,
  height: 695,
  placeholderLabel: "Usage and cleaning in use photo",
} as const;

export const usageCleaningFeatureImages: Record<
  string,
  { width: number; height: number; placeholderLabel: string; src?: string }
> = {
  "usage-visibility": { width: 1200, height: 750, placeholderLabel: "Space usage visibility screenshot" },
  "demand-scheduling": { width: 1200, height: 750, placeholderLabel: "Demand-based scheduling screenshot" },
  washrooms: { width: 1200, height: 750, placeholderLabel: "Washroom usage screenshot" },
  "contractor-reports": { width: 1200, height: 750, placeholderLabel: "Contractor reporting screenshot" },
};
