import {
  calculateDesk,
  calculateEnergy,
  type DeskInputs,
  type DeskResults,
  type EnergyInputs,
  type EnergyResults,
} from "./calculations";
import type { Currency, CalculatorTab } from "./constants";
import type { LeadPayload } from "./submit-lead";
import { formatMoney, formatNumber, formatPct } from "./format";

export type ComparisonLine = {
  label: string;
  value: string;
};

export type ComparisonReport = {
  calculator: CalculatorTab;
  currency: Currency;
  statusQuoAnnual: number;
  optimizedAnnual: number;
  grossSavings: number;
  platformCostAnnual: number;
  netSavings: number;
  lineItems: ComparisonLine[];
};

/** Illustrative RoomAlyzer annual cost for the comparison view. */
function estimatePlatformCost(currency: Currency, grossSavings: number): number {
  const rate = 0.12;
  const min = currency === "EUR" ? 1_200 : 9_000;
  return Math.max(min, Math.round(grossSavings * rate));
}

export type ReportDisplayMeta = {
  calcLabel: string;
  useCase: string;
  teaser: string;
  capNote?: string;
  headlineSavings: number;
  accent: "navy" | "sky";
};

export function buildReportDisplayMeta(payload: LeadPayload): ReportDisplayMeta {
  const report = buildComparisonReport(payload);
  const calcLabel =
    payload.calculator === "desk" ? "Desk Optimizer" : "Energy Saver";
  const useCase =
    payload.calculator === "desk" ? "Space management" : "Indoor climate / energy";

  if (payload.calculator === "desk") {
    const results = payload.results as DeskResults;
    const teaser =
      results.reducibleDesks > 0
        ? `You could right-size ~${formatNumber(results.reducibleDesks)} desks (${formatPct(results.savingsPctOfCapacity, 0)} of capacity).`
        : "Your peak attendance matches your desk count — try lowering the attendance slider.";
    return {
      calcLabel,
      useCase,
      teaser,
      headlineSavings: report.grossSavings,
      accent: "navy",
    };
  }

  const results = payload.results as EnergyResults;
  const inputs = payload.inputs as EnergyInputs;
  const teaser =
    inputs.annualBill > 0
      ? `Up to ${formatPct(results.savingsPctOfBill, 0)} of your annual heating bill.`
      : "Enter your heating bill or floor area to see an estimate.";

  return {
    calcLabel,
    useCase,
    teaser,
    capNote: results.capped
      ? "Savings capped at 80% of your heating bill for this illustrative estimate."
      : undefined,
    headlineSavings: report.grossSavings,
    accent: "sky",
  };
}

export function buildComparisonReport(payload: LeadPayload): ComparisonReport {
  const { calculator, currency, inputs, results } = payload;

  if (calculator === "desk") {
    const deskInputs = inputs as DeskInputs;
    const deskResults = results as DeskResults;
    const statusQuoAnnual = deskInputs.currentDesks * deskInputs.annualCostPerDesk;
    const optimizedAnnual = deskResults.requiredDesks * deskInputs.annualCostPerDesk;
    const grossSavings = deskResults.totalSavings;
    const platformCostAnnual = estimatePlatformCost(currency, grossSavings);
    const netSavings = Math.max(0, grossSavings - platformCostAnnual);

    return {
      calculator,
      currency,
      statusQuoAnnual,
      optimizedAnnual,
      grossSavings,
      platformCostAnnual,
      netSavings,
      lineItems: [
        {
          label: "Current desks",
          value: formatNumber(deskInputs.currentDesks),
        },
        {
          label: `Required at peak (${formatPct(deskInputs.peakAttendancePct)})`,
          value: formatNumber(deskResults.requiredDesks),
        },
        {
          label: "Reducible desks",
          value: formatNumber(deskResults.reducibleDesks),
        },
        {
          label: "Cost per desk",
          value: formatMoney(currency, deskInputs.annualCostPerDesk),
        },
        {
          label: "Gross annual savings",
          value: formatMoney(currency, grossSavings),
        },
      ],
    };
  }

  const energyInputs = inputs as EnergyInputs;
  const energyResults = results as EnergyResults;
  const statusQuoAnnual = energyInputs.annualBill;
  const optimizedAnnual = Math.max(0, energyInputs.annualBill - energyResults.totalSavings);
  const grossSavings = energyResults.totalSavings;
  const platformCostAnnual = estimatePlatformCost(currency, grossSavings);
  const netSavings = Math.max(0, grossSavings - platformCostAnnual);

  return {
    calculator,
    currency,
    statusQuoAnnual,
    optimizedAnnual,
    grossSavings,
    platformCostAnnual,
    netSavings,
    lineItems: [
      {
        label: "Annual heating bill (today)",
        value: formatMoney(currency, energyInputs.annualBill),
      },
      {
        label: "Weekend setback",
        value: formatMoney(currency, energyResults.weekendSavings),
      },
      {
        label: "Night setback",
        value: formatMoney(currency, energyResults.nightlySavings),
      },
      {
        label: "Temperature adjustment",
        value: formatMoney(currency, energyResults.degreeSavings),
      },
      {
        label: "Gross annual savings",
        value: formatMoney(currency, grossSavings),
      },
    ],
  };
}

/** Recompute report from stored payload (validates shape). */
export function reportFromPayload(raw: unknown): ComparisonReport | null {
  if (!raw || typeof raw !== "object") return null;
  const p = raw as LeadPayload;
  if (p.calculator !== "desk" && p.calculator !== "energy") return null;
  if (p.currency !== "EUR" && p.currency !== "DKK") return null;
  if (!p.inputs || !p.results) return null;

  if (p.calculator === "desk") {
    const inputs = p.inputs as DeskInputs;
    const results = calculateDesk(inputs);
    return buildComparisonReport({ ...p, results });
  }

  const inputs = p.inputs as EnergyInputs;
  const results = calculateEnergy(inputs);
  return buildComparisonReport({ ...p, results });
}

export function formatReportAsText(
  report: ComparisonReport,
  lead: { email: string; company?: string },
): string {
  const calcLabel = report.calculator === "desk" ? "Desk Optimizer" : "Energy Saver";
  const lines = [
    "IoT Fabrikken — ROI breakdown (illustrative)",
    "",
    `Calculator: ${calcLabel}`,
    `Email: ${lead.email}`,
    ...(lead.company ? [`Company: ${lead.company}`] : []),
    "",
    `Without RoomAlyzer: ${formatMoney(report.currency, report.statusQuoAnnual)} / year`,
    `With RoomAlyzer: ${formatMoney(report.currency, report.optimizedAnnual)} / year`,
    "",
    "Details:",
    ...report.lineItems.map((l) => `  ${l.label}: ${l.value}`),
    "",
    `Gross savings: ${formatMoney(report.currency, report.grossSavings)}`,
    `RoomAlyzer (illustrative): ${formatMoney(report.currency, report.platformCostAnnual)}`,
    `Net savings: ${formatMoney(report.currency, report.netSavings)}`,
    "",
    "Not a formal quote. Based on industry rules of thumb.",
  ];
  return lines.join("\n");
}
