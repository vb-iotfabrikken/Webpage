/** Hero and capability screenshot metadata for the preservation module page. */
export const preservationDashboard = {
  width: 1024,
  height: 595,
  placeholderLabel: "Preservation dashboard screenshot",
};

/** Small editorial photo beside the capabilities section intro. */
export const preservationCapabilitiesContext = {
  width: 960,
  height: 695,
  placeholderLabel: "Preservation in use photo",
} as const;

export const preservationFeatureImages: Record<
  string,
  { width: number; height: number; placeholderLabel: string; src?: string }
> = {
  precision: { width: 1200, height: 750, placeholderLabel: "High-precision RH and temperature screenshot" },
  documentation: { width: 1200, height: 750, placeholderLabel: "Climate history and reports screenshot" },
  "drift-alerts": { width: 1200, height: 750, placeholderLabel: "Setpoint drift detection screenshot" },
  "multi-zone": { width: 1200, height: 750, placeholderLabel: "Multi-zone climate view screenshot" },
};
