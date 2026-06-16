import type { Currency, EnergyFacility } from "./constants";

export const DESK_PRICING: Record<
  Currency,
  { sensor: number; connector: number; sensorMo: number; connectorMo: number }
> = {
  EUR: { sensor: 50, connector: 360, sensorMo: 3, connectorMo: 7 },
  DKK: { sensor: 375, connector: 2_700, sensorMo: 22, connectorMo: 52 },
};

export const ENERGY_PRICING: Record<
  Currency,
  { sensor: number; sensorMo: number }
> = {
  EUR: { sensor: 115, sensorMo: 6 },
  DKK: { sensor: 850, sensorMo: 45 },
};

export const ENERGY_AREA_PER_SENSOR_SQM = 50;

/** Industry-average office area per desk (m²) used to auto-size connectors. */
export const DESK_AREA_PER_DESK_SQM = 12.5;
/** Industry-average desks per floor used to auto-size connectors. */
export const DESK_DESKS_PER_FLOOR = 1_500;
/** Cloud connector coverage per floor (m²). */
export const DESK_CONNECTOR_AREA_SQM = 2_500;

export type InvestmentSummary = {
  /** Sensor count (under-desk sensors for desk; Full+ sensors for energy). */
  sensors: number;
  /** Cloud connectors (desk only); 0 for energy. */
  connectors: number;
  hardwareCost: number;
  monthlySubscription: number;
  year1Investment: number;
  netYear1Savings: number;
  /** Months until cumulative savings cover hardware cost. May be null/Infinity. */
  monthsToBreakEven: number | null;
  /** Per-month gross savings (helper for cost-of-inaction copy). */
  monthlyGrossSavings: number;
  /** Cumulative net cash returned over a 3-year horizon (after hardware + 36 mo subscription). */
  threeYearNet: number;
  /** Total gross savings over 3 years (no costs deducted). */
  threeYearGross: number;
  /**
   * Cash flow generated between the break-even point and the end of year 3.
   * Zero when break-even falls outside the 3-year window.
   */
  cashFlowAfterBreakEven3Yr: number;
  /** True when monthly subscription >= monthly gross savings — config can never break even. */
  disqualified: boolean;
};

const THREE_YEAR_MONTHS = 36;

export type DeskInvestmentInput = {
  currentDesks: number;
  grossAnnualSavings: number;
  currency: Currency;
};

export type EnergyInvestmentInput = {
  facility: EnergyFacility;
  /** Office: floor area sized at one sensor per 50 m². */
  areaSqm: number;
  /** Heritage: monitored rooms; school: classrooms — one sensor each. */
  roomCount: number;
  grossAnnualSavings: number;
  currency: Currency;
};

function computeBreakEven(
  hardwareCost: number,
  monthlyGross: number,
  monthlySub: number,
): number | null {
  const monthlyNet = monthlyGross - monthlySub;
  if (monthlyNet <= 0) return null;
  return hardwareCost / monthlyNet;
}

function computeMultiYearMetrics(
  hardwareCost: number,
  monthlyGross: number,
  monthlySub: number,
  monthsToBreakEven: number | null,
): Pick<InvestmentSummary, "threeYearNet" | "threeYearGross" | "cashFlowAfterBreakEven3Yr"> {
  const monthlyNet = monthlyGross - monthlySub;
  const threeYearGross = monthlyGross * THREE_YEAR_MONTHS;
  const threeYearNet = monthlyNet * THREE_YEAR_MONTHS - hardwareCost;
  const cashFlowAfterBreakEven3Yr =
    monthsToBreakEven !== null && monthsToBreakEven < THREE_YEAR_MONTHS
      ? monthlyNet * (THREE_YEAR_MONTHS - monthsToBreakEven)
      : 0;
  return { threeYearNet, threeYearGross, cashFlowAfterBreakEven3Yr };
}

/** Cumulative net cash position at the end of `months` months of operation. */
export function cumulativeNetAtMonth(
  inv: Pick<
    InvestmentSummary,
    "hardwareCost" | "monthlyGrossSavings" | "monthlySubscription"
  >,
  months: number,
): number {
  const monthlyNet = inv.monthlyGrossSavings - inv.monthlySubscription;
  return monthlyNet * months - inv.hardwareCost;
}

/** Whole-month break-even ceiling for "At month XX, fully paid off" copy. */
export function breakEvenMonthCeil(monthsToBreakEven: number | null): number | null {
  if (monthsToBreakEven === null || !Number.isFinite(monthsToBreakEven)) return null;
  if (monthsToBreakEven <= 0) return 0;
  return Math.max(1, Math.ceil(monthsToBreakEven));
}

export function calculateDeskInvestment({
  currentDesks,
  grossAnnualSavings,
  currency,
}: DeskInvestmentInput): InvestmentSummary {
  const pricing = DESK_PRICING[currency];
  const sensors = Math.max(0, Math.floor(currentDesks));

  // Option B (full auto) — area is industry-average m² per desk; floors derived
  // from desks. Connectors per floor = ceil(area-per-floor / 2,500 m²).
  let connectors = 0;
  if (sensors > 0) {
    const floors = Math.max(1, Math.ceil(sensors / DESK_DESKS_PER_FLOOR));
    const totalAreaSqm = sensors * DESK_AREA_PER_DESK_SQM;
    const areaPerFloor = totalAreaSqm / floors;
    connectors = floors * Math.ceil(areaPerFloor / DESK_CONNECTOR_AREA_SQM);
  }

  const hardwareCost = sensors * pricing.sensor + connectors * pricing.connector;
  const monthlySubscription = sensors * pricing.sensorMo + connectors * pricing.connectorMo;
  const year1Investment = hardwareCost + monthlySubscription * 12;
  const netYear1Savings = grossAnnualSavings - year1Investment;
  const monthlyGrossSavings = grossAnnualSavings / 12;
  const monthsToBreakEven = computeBreakEven(
    hardwareCost,
    monthlyGrossSavings,
    monthlySubscription,
  );
  const multi = computeMultiYearMetrics(
    hardwareCost,
    monthlyGrossSavings,
    monthlySubscription,
    monthsToBreakEven,
  );

  return {
    sensors,
    connectors,
    hardwareCost,
    monthlySubscription,
    year1Investment,
    netYear1Savings,
    monthsToBreakEven,
    monthlyGrossSavings,
    ...multi,
    disqualified:
      sensors > 0 && monthlyGrossSavings <= monthlySubscription,
  };
}

export function calculateEnergyInvestment({
  facility,
  areaSqm,
  roomCount,
  grossAnnualSavings,
  currency,
}: EnergyInvestmentInput): InvestmentSummary {
  const pricing = ENERGY_PRICING[currency];
  const sensors =
    facility === "office"
      ? areaSqm > 0
        ? Math.ceil(Math.max(0, areaSqm) / ENERGY_AREA_PER_SENSOR_SQM)
        : 0
      : Math.max(0, Math.round(roomCount));

  const hardwareCost = sensors * pricing.sensor;
  const monthlySubscription = sensors * pricing.sensorMo;
  const year1Investment = hardwareCost + monthlySubscription * 12;
  const netYear1Savings = grossAnnualSavings - year1Investment;
  const monthlyGrossSavings = grossAnnualSavings / 12;
  const monthsToBreakEven = computeBreakEven(
    hardwareCost,
    monthlyGrossSavings,
    monthlySubscription,
  );
  const multi = computeMultiYearMetrics(
    hardwareCost,
    monthlyGrossSavings,
    monthlySubscription,
    monthsToBreakEven,
  );

  return {
    sensors,
    connectors: 0,
    hardwareCost,
    monthlySubscription,
    year1Investment,
    netYear1Savings,
    monthsToBreakEven,
    monthlyGrossSavings,
    ...multi,
    disqualified:
      sensors > 0 && monthlyGrossSavings <= monthlySubscription,
  };
}

/** Human-readable break-even — handles months < 1 (days) and impossible cases. */
export function formatBreakEven(months: number | null): string {
  if (months === null || !Number.isFinite(months) || months <= 0) {
    return "Not within 5 years";
  }
  if (months > 60) {
    return "More than 5 years";
  }
  if (months < 1) {
    const days = Math.max(1, Math.round(months * 30));
    return `${days} day${days === 1 ? "" : "s"}`;
  }
  if (months < 10) {
    return `${months.toFixed(1)} months`;
  }
  return `${Math.round(months)} months`;
}
