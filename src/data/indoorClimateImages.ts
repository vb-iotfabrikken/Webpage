/** Hero and capability screenshot metadata for the indoor-climate module page. */
export const indoorClimateDashboardSrc = "/images/modules/indoor-climate-dashboard.webp";

/** Small editorial photo beside the capabilities section intro. */
export const indoorClimateCapabilitiesContext = {
  width: 960,
  height: 695,
  placeholderLabel: "Indoor climate in use photo",
} as const;

export const indoorClimateFeatureImages: Record<
  string,
  { width: number; height: number; placeholderLabel: string; src?: string }
> = {
  co2: { width: 1200, height: 750, placeholderLabel: "CO₂ monitoring screenshot" },
  temperature: { width: 1200, height: 750, placeholderLabel: "Temperature monitoring screenshot" },
  humidity: { width: 1200, height: 750, placeholderLabel: "Humidity monitoring screenshot" },
  voc: { width: 1200, height: 750, placeholderLabel: "VOC monitoring screenshot" },
  "mould-damp": { width: 1200, height: 750, placeholderLabel: "Mould and damp analysis screenshot" },
  pressure: { width: 1200, height: 750, placeholderLabel: "Pressure monitoring screenshot" },
};
