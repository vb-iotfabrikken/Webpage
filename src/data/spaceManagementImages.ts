/** Screenshot metadata for the space-management capability showcase. */
export const spaceManagementFeatureImages: Record<
  string,
  { src: string; width: number; height: number }
> = {
  desks: { src: "/images/modules/space-management-desks.webp", width: 963, height: 777 },
  "meeting-rooms": { src: "/images/modules/space-management-meeting-rooms.webp", width: 967, height: 561 },
  heatmaps: { src: "/images/modules/space-management-heatmaps.webp", width: 1734, height: 696 },
  savings: { src: "/images/modules/space-management-savings.webp", width: 540, height: 519 },
};

export const spaceManagementDashboardSrc = "/images/modules/space-management-dashboard.webp";

/** Editorial photo in the hero split visual. */
export const spaceManagementHeroHand = {
  src: "/images/modules/space-management-hero-hand.webp",
  width: 1213,
  height: 1293,
} as const;

/** Small editorial photo beside the capabilities section intro. */
export const spaceManagementCapabilitiesContext = {
  src: "/images/modules/space-management-capabilities-context.webp",
  width: 1200,
  height: 799,
  placeholderLabel: "Space management in use photo",
} as const;
