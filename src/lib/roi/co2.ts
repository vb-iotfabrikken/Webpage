import type { Currency } from "./constants";

/**
 * Industry rule-of-thumb CO2 factors. Values are illustrative — meant for
 * communicating ESG impact in the lead-gen report, not for compliance reporting.
 */

/** Approx. annual CO2 footprint of a single office desk (heating, cooling, lighting). */
export const CO2_KG_PER_DESK_PER_YEAR = 150;

/** Approx. CO2 emitted per EUR of natural-gas heating (~0.2 kg/kWh, ~€0.04/kWh). */
const EUR_TO_CO2_KG = 5;
/** DKK uses a fixed conversion to EUR (~1 EUR ≈ 7.46 DKK). */
const DKK_TO_CO2_KG = EUR_TO_CO2_KG / 7.46;

export function deskCo2SavingsKg(reducibleDesks: number): number {
  return Math.max(0, reducibleDesks) * CO2_KG_PER_DESK_PER_YEAR;
}

export function energyCo2SavingsKg(
  grossAnnualSavings: number,
  currency: Currency,
): number {
  const factor = currency === "EUR" ? EUR_TO_CO2_KG : DKK_TO_CO2_KG;
  return Math.max(0, grossAnnualSavings) * factor;
}

/** Format kg with thousands separator; switch to tonnes when >= 1,000 kg. */
export function formatCo2(kg: number): string {
  if (kg <= 0) return "0 kg CO2";
  if (kg >= 1_000) {
    const tonnes = kg / 1_000;
    const formatted = tonnes >= 100
      ? Math.round(tonnes).toLocaleString("en-GB")
      : tonnes.toFixed(1);
    return `${formatted} tonnes CO2`;
  }
  return `${Math.round(kg).toLocaleString("en-GB")} kg CO2`;
}
