/** Screenshot metadata for the space-management capability showcase. */
export const spaceManagementFeatureImages: Record<
  string,
  { src: string; width: number; height: number }
> = {
  desks: { src: "/images/modules/space-management-desks.png", width: 963, height: 777 },
  "meeting-rooms": { src: "/images/modules/space-management-meeting-rooms.png", width: 967, height: 561 },
  heatmaps: { src: "/images/modules/space-management-heatmaps.png", width: 1734, height: 696 },
  savings: { src: "/images/modules/space-management-savings.png", width: 540, height: 519 },
};

export const spaceManagementDashboardSrc = "/images/modules/space-management-dashboard.png";

/** Small editorial photo beside the capabilities section intro. */
export const spaceManagementCapabilitiesContext = {
  src: "/images/modules/space-management-capabilities-context.webp",
  width: 960,
  height: 695,
  placeholderLabel: "Space management in use photo",
} as const;
