import {
  BASELINE_TEMP_C,
  DEGREE_SAVINGS_PCT_PER_C,
  ENERGY_SAVINGS_CAP_PCT,
  NIGHTLY_WASTE_PCT,
  WEEKEND_WASTE_PCT,
} from "./constants";

export type DeskInputs = {
  currentDesks: number;
  peakAttendancePct: number;
  annualCostPerDesk: number;
};

export type DeskResults = {
  requiredDesks: number;
  reducibleDesks: number;
  totalSavings: number;
  savingsPctOfCapacity: number;
};

export type EnergyInputs = {
  annualBill: number;
  /** true = still heating on weekends (waste); false = already off / will turn off */
  heatsWeekends: boolean;
  /** true = still heating outside working hours */
  heatsNightly: boolean;
  avgTempC: number;
};

export type EnergyResults = {
  weekendSavings: number;
  nightlySavings: number;
  degreeSavings: number;
  rawTotalSavings: number;
  totalSavings: number;
  capped: boolean;
  savingsPctOfBill: number;
};

export function calculateDesk(inputs: DeskInputs): DeskResults {
  const currentDesks = Math.max(0, inputs.currentDesks);
  const peak = Math.min(100, Math.max(0, inputs.peakAttendancePct));
  const requiredDesks = Math.round(currentDesks * (peak / 100));
  const reducibleDesks = Math.max(0, currentDesks - requiredDesks);
  const totalSavings = reducibleDesks * Math.max(0, inputs.annualCostPerDesk);
  const savingsPctOfCapacity =
    currentDesks > 0 ? (reducibleDesks / currentDesks) * 100 : 0;

  return {
    requiredDesks,
    reducibleDesks,
    totalSavings,
    savingsPctOfCapacity,
  };
}

export function calculateEnergy(inputs: EnergyInputs): EnergyResults {
  const bill = Math.max(0, inputs.annualBill);
  const weekendSavings = inputs.heatsWeekends ? 0 : bill * WEEKEND_WASTE_PCT;
  const nightlySavings = inputs.heatsNightly ? 0 : bill * NIGHTLY_WASTE_PCT;
  const degreesAboveBaseline = Math.max(0, inputs.avgTempC - BASELINE_TEMP_C);
  const degreeSavings =
    degreesAboveBaseline * DEGREE_SAVINGS_PCT_PER_C * bill;
  const rawTotalSavings = weekendSavings + nightlySavings + degreeSavings;
  const cap = bill * ENERGY_SAVINGS_CAP_PCT;
  const capped = rawTotalSavings > cap && bill > 0;
  const totalSavings = capped ? cap : rawTotalSavings;
  const savingsPctOfBill = bill > 0 ? (totalSavings / bill) * 100 : 0;

  return {
    weekendSavings,
    nightlySavings,
    degreeSavings,
    rawTotalSavings,
    totalSavings,
    capped,
    savingsPctOfBill,
  };
}

export function estimateBillFromSqm(
  sqm: number,
  heatingPerSqm: number,
): number {
  return Math.max(0, sqm) * Math.max(0, heatingPerSqm);
}
