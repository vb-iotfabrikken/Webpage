/** Hero and capability screenshot metadata for the water-detection module page. */
export const waterDetectionDashboard = {
  width: 1200,
  height: 750,
  placeholderLabel: "Water detection dashboard screenshot",
};

/** Linked variant cards in the sensor spotlight section. */
export const waterDetectionSpotlightImages = {
  compact: {
    src: "/images/modules/water-detection-spotlight-compact.webp",
    width: 960,
    height: 1003,
    placeholderLabel: "Water detector Compact in a technical cabinet",
  },
  pro: {
    src: "/images/modules/water-detection-spotlight-pro.webp",
    width: 960,
    height: 1003,
    placeholderLabel: "Water detector Pro in a plant room",
  },
} as const;

/** Small editorial photo beside the capabilities section intro. */
export const waterDetectionCapabilitiesContext = {
  src: "/images/modules/water-detection-capabilities-context.webp",
  width: 1200,
  height: 869,
  placeholderLabel: "Water detection dashboard screenshot",
} as const;

export const waterDetectionFeatureImages: Record<
  string,
  { width: number; height: number; placeholderLabel: string; src?: string }
> = {
  "smart-notifications": {
    src: "/images/modules/water-detection-smart-notifications.webp",
    width: 829,
    height: 1024,
    placeholderLabel: "Smart water alert via SMS and email",
  },
  "alarm-escalation": {
    src: "/images/modules/water-detection-alarm-escalation.webp",
    width: 1024,
    height: 750,
    placeholderLabel: "Water alarm escalation chain screenshot",
  },
  "visual-overview": {
    src: "/images/modules/water-detection-visual-overview.webp",
    width: 870,
    height: 771,
    placeholderLabel: "Leak location on floor plan",
  },
  "incident-log": {
    src: "/images/modules/water-detection-incident-log.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "Water incident log screenshot",
  },
  "plug-and-play": {
    src: "/images/modules/water-detection-plug-and-play.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "NB-IoT water sensor in plant room",
  },
};
