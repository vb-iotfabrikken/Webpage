export type Currency = "EUR" | "DKK";
export type CalculatorTab = "desk" | "energy";

/** Desk Optimizer outcome goals — multi-select, at least one active. */
export type DeskGoal = "cut" | "repurpose" | "grow";

/** Energy Saver facility types. */
export type EnergyFacility = "office" | "heritage" | "school";

export const ENERGY_SAVINGS_CAP_PCT = 0.8;
export const WEEKEND_WASTE_PCT = 0.1;
export const NIGHTLY_WASTE_PCT = 0.1;
export const DEGREE_SAVINGS_PCT_PER_C = 0.05;
export const BASELINE_TEMP_C = 20;

/* ── Value-model constants (all illustrative, tunable in one place) ── */

/** Office area occupied per employee (m²) — derives headcount from floor area. */
export const OFFICE_SQM_PER_EMPLOYEE = 15;
/** Conservative productivity uplift from keeping CO2 low (research supports more). */
export const CO2_PRODUCTIVITY_UPLIFT_PCT = 0.01;
/** Pupils + staff per classroom — derives people from classroom count. */
export const PEOPLE_PER_CLASSROOM = 28;
/** Avoided sick days per person per year from a healthier indoor climate. */
export const SICK_DAY_REDUCTION_PER_YEAR = 0.5;
/** Baseline annual probability of a costly climate incident in an unmonitored heritage site. */
export const HERITAGE_BASE_RISK = 0.1;
/** Added annual risk when the collection is humidity-sensitive. */
export const HERITAGE_RISK_HUMIDITY = 0.1;
/** Added annual risk when rooms are heated intermittently. */
export const HERITAGE_RISK_INTERMITTENT = 0.1;

/** EUR defaults; DKK uses approximate parity for display defaults only. */
export const DEFAULTS = {
  EUR: {
    costPerDesk: 10_000,
    heatingBill: 50_000,
    heatingPerSqm: 25,
    avgEmployeeCost: 55_000,
    costPerSickDay: 250,
    heritageIncidentCost: 25_000,
  },
  DKK: {
    costPerDesk: 75_000,
    heatingBill: 375_000,
    heatingPerSqm: 185,
    avgEmployeeCost: 410_000,
    costPerSickDay: 1_850,
    heritageIncidentCost: 185_000,
  },
} as const;

export const DESK_LIMITS = {
  minDesks: 20,
  maxDesks: 1000,
  deskStep: 5,
  /** 0–100 scale so 50% (Hybrid) sits at the visual centre of the track. */
  minAttendance: 0,
  maxAttendance: 100,
  defaultDesks: 100,
  defaultAttendance: 70,
} as const;

/** Peak-attendance slider markers (value = attendance %). */
export const ATTENDANCE_MARKS = [
  { value: 30, label: "Remote" },
  { value: 50, label: "Hybrid" },
  { value: 100, label: "Office" },
] as const;

export const ENERGY_LIMITS = {
  minTemp: 18,
  maxTemp: 26,
  defaultTemp: 23,
  minSqm: 100,
  maxSqm: 50_000,
  defaultSqm: 2_000,
  defaultHeritageRooms: 5,
  defaultClassrooms: 12,
} as const;

/** Area assumptions for the desk heatmap's "what fits" suggestions (m²). */
export const MEETING_ROOM_SQM = 15;
export const FOCUS_ROOM_SQM = 5;

/** Email prefill when using “Adjust inputs” (not used to auto-show breakdown on refresh). */
export const ROI_LEAD_STORAGE_KEY = "roi-lead";

/** @deprecated Use `FORM_MIN_SUBMIT_MS` from `src/lib/forms/constants`. */
export { FORM_MIN_SUBMIT_MS as ROI_MIN_SUBMIT_MS } from "../forms/constants";
