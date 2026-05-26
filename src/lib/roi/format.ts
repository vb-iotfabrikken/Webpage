import type { Currency } from "./constants";

/** Comma thousands separators — avoids European dot notation (7.500) being read as decimals. */
const numberFmt = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 });

export function formatMoney(currency: Currency, value: number): string {
  const amount = numberFmt.format(Math.round(value));
  if (currency === "EUR") {
    return `€${amount}`;
  }
  return `${amount} DKK`;
}

export function formatNumber(value: number): string {
  return numberFmt.format(Math.round(value));
}

export function formatPct(value: number, decimals = 0): string {
  return `${value.toFixed(decimals)}%`;
}
