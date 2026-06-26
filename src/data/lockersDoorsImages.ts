/** Hero and capability screenshot metadata for the lockers-doors module page. */
export const lockersDoorsDashboard = {
  width: 1200,
  height: 750,
  placeholderLabel: "Lockers and doors dashboard screenshot",
};

/** Small editorial photo beside the capabilities section intro. */
export const lockersDoorsCapabilitiesContext = {
  width: 960,
  height: 695,
  placeholderLabel: "Lockers and doors in use photo",
} as const;

export const lockersDoorsFeatureImages: Record<
  string,
  { width: number; height: number; placeholderLabel: string; src?: string }
> = {
  "live-status": { width: 1200, height: 750, placeholderLabel: "Live open/close status screenshot" },
  "locker-overview": { width: 1200, height: 750, placeholderLabel: "Locker overview screenshot" },
  "after-hours": { width: 1200, height: 750, placeholderLabel: "After-hours check screenshot" },
  "usage-trends": { width: 1200, height: 750, placeholderLabel: "Usage trends screenshot" },
};
