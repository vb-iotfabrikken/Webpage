export type Currency = "EUR" | "DKK";
export type CalculatorTab = "desk" | "energy";

export const ENERGY_SAVINGS_CAP_PCT = 0.8;
export const WEEKEND_WASTE_PCT = 0.1;
export const NIGHTLY_WASTE_PCT = 0.1;
export const DEGREE_SAVINGS_PCT_PER_C = 0.05;
export const BASELINE_TEMP_C = 20;

/** EUR defaults; DKK uses approximate parity for display defaults only. */
export const DEFAULTS = {
  EUR: {
    costPerDesk: 10_000,
    heatingBill: 50_000,
    heatingPerSqm: 25,
  },
  DKK: {
    costPerDesk: 75_000,
    heatingBill: 375_000,
    heatingPerSqm: 185,
  },
} as const;

export const DESK_LIMITS = {
  minDesks: 20,
  maxDesks: 500,
  deskStep: 5,
  minAttendance: 30,
  maxAttendance: 100,
  defaultDesks: 100,
  defaultAttendance: 70,
} as const;

export const ENERGY_LIMITS = {
  minTemp: 18,
  maxTemp: 26,
  defaultTemp: 23,
  minSqm: 100,
  maxSqm: 50_000,
  defaultSqm: 2_000,
} as const;

/** Email prefill when using “Adjust inputs” (not used to auto-show breakdown on refresh). */
export const ROI_LEAD_STORAGE_KEY = "roi-lead";
