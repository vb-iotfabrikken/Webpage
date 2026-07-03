/** Hero and capability screenshot metadata for the indoor-climate module page. */
export const indoorClimateDashboardSrc = "/images/modules/indoor-climate-hero-occupancy.webp";

export const indoorClimateDashboardSize = { width: 1200, height: 576 } as const;

/** Small editorial photo beside the capabilities section intro. */
export const indoorClimateCapabilitiesContext = {
  src: "/images/modules/indoor-climate-dashboard.webp",
  width: 1200,
  height: 869,
  placeholderLabel: "RoomAlyzer indoor climate dashboard",
} as const;

export const indoorClimateFeatureImages: Record<
  string,
  { width: number; height: number; placeholderLabel: string; src?: string }
> = {
  "epbd-report": {
    src: "/images/modules/indoor-climate-feature-epbd-report.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "EPBD compliance report in RoomAlyzer",
  },
  "energy-optimisation": {
    src: "/images/modules/indoor-climate-feature-energy-optimisation.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "Energy optimisation module in RoomAlyzer",
  },
  "mould-risk": {
    src: "/images/modules/indoor-climate-feature-mould-risk.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "Mould risk module in RoomAlyzer",
  },
  scenarios: {
    src: "/images/modules/indoor-climate-feature-scenarios.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "Indoor climate scenarios and thresholds in RoomAlyzer",
  },
  "legacy-report": {
    src: "/images/modules/indoor-climate-feature-legacy-report.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "Legacy indoor climate report in RoomAlyzer",
  },
};
