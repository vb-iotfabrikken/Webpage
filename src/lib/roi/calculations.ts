import {
  BASELINE_TEMP_C,
  CO2_PRODUCTIVITY_UPLIFT_PCT,
  DEGREE_SAVINGS_PCT_PER_C,
  ENERGY_SAVINGS_CAP_PCT,
  FOCUS_ROOM_SQM,
  HERITAGE_BASE_RISK,
  HERITAGE_RISK_HUMIDITY,
  HERITAGE_RISK_INTERMITTENT,
  MEETING_ROOM_SQM,
  NIGHTLY_WASTE_PCT,
  OFFICE_SQM_PER_EMPLOYEE,
  PEOPLE_PER_CLASSROOM,
  SICK_DAY_REDUCTION_PER_YEAR,
  WEEKEND_WASTE_PCT,
  type DeskGoal,
  type EnergyFacility,
} from "./constants";
import { DESK_AREA_PER_DESK_SQM } from "./investment";

export type DeskInputs = {
  currentDesks: number;
  peakAttendancePct: number;
  annualCostPerDesk: number;
  /** Selected outcome goals (at least one). */
  goals: DeskGoal[];
};

export type DeskResults = {
  requiredDesks: number;
  reducibleDesks: number;
  totalSavings: number;
  savingsPctOfCapacity: number;
  /** Floor area released by the reducible desks (m²). */
  freedSqm: number;
  /** Alternative-scenario suggestions for the freed area (not additive). */
  meetingRoomsFit: number;
  focusRoomsFit: number;
  /** Seats available for new hires without a new lease. */
  growthHeadroom: number;
};

export type EnergyInputs = {
  facility: EnergyFacility;
  /** Energy module (office always; heritage/school via the opt-in toggle). */
  energyModuleActive: boolean;
  annualBill: number;
  /** true = still heating on weekends — recoverable waste; false = already off */
  heatsWeekends: boolean;
  /** true = still heating outside working hours — recoverable waste */
  heatsNightly: boolean;
  avgTempC: number;
  /** Office: floor area (sensor sizing + derived headcount). */
  areaSqm: number;
  /** Office: headcount override; when absent it is derived from areaSqm. */
  employees?: number;
  avgEmployeeCost: number;
  /** Heritage. */
  monitoredRooms: number;
  humiditySensitive: boolean;
  intermittentHeating: boolean;
  needsDocumentation: boolean;
  /** Heritage: optional value of the collection/interior at risk (display only). */
  collectionValue?: number;
  heritageIncidentCost: number;
  /** School. */
  classrooms: number;
  /** School: people override; when absent derived from classrooms. */
  people?: number;
  costPerSickDay: number;
};

export type HeritageRiskLevel = "low" | "medium" | "high";

export type EnergyResults = {
  /* Energy module — all 0 when the module is inactive. */
  weekendSavings: number;
  nightlySavings: number;
  degreeSavings: number;
  rawTotalSavings: number;
  energySavings: number;
  capped: boolean;
  savingsPctOfBill: number;
  /* Facility value lines (one is non-zero depending on facility). */
  /** Office: value of CO2-driven productivity uplift. */
  productivityValue: number;
  derivedEmployees: number;
  /** School: value of avoided sick days. */
  sickDayValue: number;
  derivedPeople: number;
  avoidedSickDays: number;
  /** Heritage: annualised cost of inaction (avoidable incident exposure). */
  riskValue: number;
  riskLevel: HeritageRiskLevel;
  /** Combined annual value — drives investment/break-even math. */
  totalSavings: number;
};

/** Display order for goal zones in the heatmap and report. */
export const DESK_GOAL_ORDER: DeskGoal[] = ["cut", "repurpose", "grow"];

export type FreedShare = { goal: DeskGoal; desks: number };

/**
 * Split the freed desks across the selected goals (even split, remainder to
 * the earlier goals) — used to zone the heatmap and the report suggestions.
 */
export function partitionFreedDesks(
  reducibleDesks: number,
  goals: DeskGoal[],
): FreedShare[] {
  const selected = DESK_GOAL_ORDER.filter((g) => goals.includes(g));
  if (selected.length === 0 || reducibleDesks <= 0) return [];
  const base = Math.floor(reducibleDesks / selected.length);
  let remainder = reducibleDesks - base * selected.length;
  return selected.map((goal) => {
    const extra = remainder > 0 ? 1 : 0;
    remainder -= extra;
    return { goal, desks: base + extra };
  });
}

/**
 * Baseline office EnergyInputs for teasers/tests — zeroed value models so
 * `totalSavings` equals the pure energy figure unless overridden.
 */
export function defaultEnergyInputs(
  over: Partial<EnergyInputs> = {},
): EnergyInputs {
  return {
    facility: "office",
    energyModuleActive: true,
    annualBill: 0,
    heatsWeekends: true,
    heatsNightly: true,
    avgTempC: BASELINE_TEMP_C,
    areaSqm: 0,
    avgEmployeeCost: 0,
    monitoredRooms: 0,
    humiditySensitive: false,
    intermittentHeating: false,
    needsDocumentation: false,
    heritageIncidentCost: 0,
    classrooms: 0,
    costPerSickDay: 0,
    ...over,
  };
}

export function deriveEmployeesFromArea(areaSqm: number): number {
  return Math.max(1, Math.round(Math.max(0, areaSqm) / OFFICE_SQM_PER_EMPLOYEE));
}

export function derivePeopleFromClassrooms(classrooms: number): number {
  return Math.max(0, Math.round(classrooms)) * PEOPLE_PER_CLASSROOM;
}

export function calculateDesk(inputs: DeskInputs): DeskResults {
  const currentDesks = Math.max(0, inputs.currentDesks);
  const peak = Math.min(100, Math.max(0, inputs.peakAttendancePct));
  const requiredDesks = Math.round(currentDesks * (peak / 100));
  const reducibleDesks = Math.max(0, currentDesks - requiredDesks);
  const totalSavings = reducibleDesks * Math.max(0, inputs.annualCostPerDesk);
  const savingsPctOfCapacity =
    currentDesks > 0 ? (reducibleDesks / currentDesks) * 100 : 0;

  const freedSqm = reducibleDesks * DESK_AREA_PER_DESK_SQM;
  const meetingRoomsFit = Math.floor(freedSqm / MEETING_ROOM_SQM);
  const focusRoomsFit = Math.floor(
    (freedSqm - meetingRoomsFit * MEETING_ROOM_SQM) / FOCUS_ROOM_SQM,
  );

  return {
    requiredDesks,
    reducibleDesks,
    totalSavings,
    savingsPctOfCapacity,
    freedSqm,
    meetingRoomsFit,
    focusRoomsFit,
    growthHeadroom: reducibleDesks,
  };
}

function calculateEnergyModule(inputs: EnergyInputs) {
  if (!inputs.energyModuleActive) {
    return {
      weekendSavings: 0,
      nightlySavings: 0,
      degreeSavings: 0,
      rawTotalSavings: 0,
      energySavings: 0,
      capped: false,
      savingsPctOfBill: 0,
    };
  }
  const bill = Math.max(0, inputs.annualBill);
  // Waste that exists today is what sensor-driven setbacks can recover.
  const weekendSavings = inputs.heatsWeekends ? bill * WEEKEND_WASTE_PCT : 0;
  const nightlySavings = inputs.heatsNightly ? bill * NIGHTLY_WASTE_PCT : 0;
  const degreesAboveBaseline = Math.max(0, inputs.avgTempC - BASELINE_TEMP_C);
  const degreeSavings = degreesAboveBaseline * DEGREE_SAVINGS_PCT_PER_C * bill;
  const rawTotalSavings = weekendSavings + nightlySavings + degreeSavings;
  const cap = bill * ENERGY_SAVINGS_CAP_PCT;
  const capped = rawTotalSavings > cap && bill > 0;
  const energySavings = capped ? cap : rawTotalSavings;
  const savingsPctOfBill = bill > 0 ? (energySavings / bill) * 100 : 0;

  return {
    weekendSavings,
    nightlySavings,
    degreeSavings,
    rawTotalSavings,
    energySavings,
    capped,
    savingsPctOfBill,
  };
}

export function heritageRiskLevel(inputs: EnergyInputs): HeritageRiskLevel {
  const flags =
    Number(inputs.humiditySensitive) + Number(inputs.intermittentHeating);
  if (flags >= 2) return "high";
  if (flags === 1) return "medium";
  return "low";
}

export function calculateEnergy(inputs: EnergyInputs): EnergyResults {
  const energy = calculateEnergyModule(inputs);

  const derivedEmployees =
    inputs.employees && inputs.employees > 0
      ? Math.round(inputs.employees)
      : deriveEmployeesFromArea(inputs.areaSqm);
  const productivityValue =
    inputs.facility === "office"
      ? derivedEmployees *
        Math.max(0, inputs.avgEmployeeCost) *
        CO2_PRODUCTIVITY_UPLIFT_PCT
      : 0;

  const derivedPeople =
    inputs.people && inputs.people > 0
      ? Math.round(inputs.people)
      : derivePeopleFromClassrooms(inputs.classrooms);
  const avoidedSickDays =
    inputs.facility === "school"
      ? derivedPeople * SICK_DAY_REDUCTION_PER_YEAR
      : 0;
  const sickDayValue = avoidedSickDays * Math.max(0, inputs.costPerSickDay);

  const riskLevel = heritageRiskLevel(inputs);
  const annualRisk =
    HERITAGE_BASE_RISK +
    (inputs.humiditySensitive ? HERITAGE_RISK_HUMIDITY : 0) +
    (inputs.intermittentHeating ? HERITAGE_RISK_INTERMITTENT : 0);
  const riskValue =
    inputs.facility === "heritage"
      ? Math.max(0, inputs.heritageIncidentCost) * annualRisk
      : 0;

  const totalSavings =
    energy.energySavings + productivityValue + sickDayValue + riskValue;

  return {
    ...energy,
    productivityValue,
    derivedEmployees,
    sickDayValue,
    derivedPeople,
    avoidedSickDays,
    riskValue,
    riskLevel,
    totalSavings,
  };
}
