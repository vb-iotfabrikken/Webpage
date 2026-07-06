import {
  calculateDesk,
  calculateEnergy,
  partitionFreedDesks,
  type DeskInputs,
  type DeskResults,
  type EnergyInputs,
  type EnergyResults,
} from "./calculations";
import {
  FOCUS_ROOM_SQM,
  MEETING_ROOM_SQM,
  type CalculatorTab,
  type Currency,
  type DeskGoal,
  type EnergyFacility,
} from "./constants";
import { DESK_AREA_PER_DESK_SQM } from "./investment";
import type { LeadPayload } from "./submit-lead";
import { formatMoney, formatNumber, formatPct } from "./format";

export type ComparisonLine = {
  label: string;
  value: string;
};

export type ComparisonReport = {
  calculator: CalculatorTab;
  currency: Currency;
  /** Desk: selected goals; undefined for energy. */
  deskGoals?: DeskGoal[];
  /** Energy: selected facility; undefined for desk. */
  facility?: EnergyFacility;
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

export const GOAL_LABELS: Record<DeskGoal, string> = {
  cut: "Cut costs",
  repurpose: "Repurpose space",
  grow: "Grow without moving",
};

export const FACILITY_LABELS: Record<EnergyFacility, string> = {
  office: "Office / workplace",
  heritage: "Church / Museum / Heritage",
  school: "School / municipality",
};

export const FACILITY_SOCIAL_PROOF: Record<EnergyFacility, string> = {
  office:
    "RoomAlyzer monitors offices across the Nordics, from single floors to full headquarters.",
  heritage:
    "Trusted by the Protestant Church in Hesse and Nassau, Rudersdal Museums and Faaborg Museum.",
  school:
    "Used in the Realdania indoor-climate project across municipal schools and buildings.",
};

export type GoalSuggestion = { goal: DeskGoal; text: string };

/**
 * Per-goal suggestions for the freed desks. The freed capacity is partitioned
 * across the selected goals so the suggestions are a combined plan, not
 * double-counted alternatives.
 */
export function buildGoalSuggestions(
  currency: Currency,
  inputs: DeskInputs,
  results: DeskResults,
): GoalSuggestion[] {
  const shares = partitionFreedDesks(results.reducibleDesks, inputs.goals);
  const suggestions: GoalSuggestion[] = [];

  for (const share of shares) {
    if (share.desks <= 0) continue;
    if (share.goal === "cut") {
      const value = share.desks * Math.max(0, inputs.annualCostPerDesk);
      suggestions.push({
        goal: "cut",
        text: `Remove or sublease ~${formatNumber(share.desks)} desks (${formatMoney(currency, value)} / year off your cost base).`,
      });
    } else if (share.goal === "repurpose") {
      const sqm = share.desks * DESK_AREA_PER_DESK_SQM;
      const meetingRooms = Math.floor(sqm / MEETING_ROOM_SQM);
      const focusRooms = Math.floor(
        (sqm - meetingRooms * MEETING_ROOM_SQM) / FOCUS_ROOM_SQM,
      );
      const fits = [
        meetingRooms > 0 ? `${formatNumber(meetingRooms)} meeting rooms` : "",
        focusRooms > 0 ? `${formatNumber(focusRooms)} focus pods` : "",
      ]
        .filter(Boolean)
        .join(" and ");
      suggestions.push({
        goal: "repurpose",
        text: `Convert ~${formatNumber(sqm)} m² of desk space${fits ? ` (fits ~${fits})` : ""}.`,
      });
    } else {
      suggestions.push({
        goal: "grow",
        text: `Seat ~${formatNumber(share.desks)} new hires in your current lease, growth without a new rental contract.`,
      });
    }
  }

  return suggestions;
}

/** Facility-specific value lines shown under the demo headline and in the PDF. */
export function buildEnergyValueLines(
  currency: Currency,
  inputs: EnergyInputs,
  results: EnergyResults,
): string[] {
  const lines: string[] = [];

  if (inputs.facility === "office") {
    lines.push(
      `Energy setbacks: ${formatMoney(currency, results.energySavings)} / year.`,
    );
    lines.push(
      `Healthy-CO2 productivity (~${formatNumber(results.derivedEmployees)} employees, 1% uplift): ${formatMoney(currency, results.productivityValue)} / year.`,
    );
    return lines;
  }

  if (inputs.facility === "heritage") {
    const levels = { low: "Low", medium: "Medium", high: "High" } as const;
    lines.push(
      `Climate risk exposure: ${levels[results.riskLevel]}, avoidable incident cost ~${formatMoney(currency, results.riskValue)} / year.`,
    );
    if (inputs.collectionValue && inputs.collectionValue > 0) {
      lines.push(
        `Collection under continuous protection: ${formatMoney(currency, inputs.collectionValue)}.`,
      );
    }
    if (inputs.needsDocumentation) {
      lines.push(
        "Continuous climate logs, documentation for conservation authorities and fund applications.",
      );
    }
    if (inputs.energyModuleActive) {
      lines.push(
        `Energy setbacks between uses: ${formatMoney(currency, results.energySavings)} / year.`,
      );
    }
    return lines;
  }

  // school
  lines.push(
    `~${formatNumber(results.avoidedSickDays)} avoided sick days (~${formatNumber(results.derivedPeople)} people): ${formatMoney(currency, results.sickDayValue)} / year.`,
  );
  lines.push(
    "CO2 alerts before classrooms pass the 1,000 ppm guideline.",
  );
  if (inputs.energyModuleActive) {
    lines.push(
      `Energy setbacks: ${formatMoney(currency, results.energySavings)} / year.`,
    );
  }
  return lines;
}

export type ReportDisplayMeta = {
  calcLabel: string;
  useCase: string;
  teaser: string;
  capNote?: string;
  headlineSavings: number;
  accent: "navy" | "sky";
  /** One-line case-study reference for the report. */
  socialProof?: string;
};

export function buildReportDisplayMeta(payload: LeadPayload): ReportDisplayMeta {
  const report = buildComparisonReport(payload);

  if (payload.calculator === "desk") {
    const results = payload.results as DeskResults;
    const inputs = payload.inputs as DeskInputs;
    const goalLabels = inputs.goals.map((g) => GOAL_LABELS[g]).join(", ");
    const teaser =
      results.reducibleDesks > 0
        ? `You could right-size ~${formatNumber(results.reducibleDesks)} desks (${formatPct(results.savingsPctOfCapacity, 0)} of capacity), goals: ${goalLabels}.`
        : "Your peak attendance matches your desk count, try lowering the attendance slider.";
    return {
      calcLabel: "Desk optimiser",
      useCase: "Space management",
      teaser,
      headlineSavings: report.grossSavings,
      accent: "navy",
    };
  }

  const results = payload.results as EnergyResults;
  const inputs = payload.inputs as EnergyInputs;
  const facility = inputs.facility;

  let teaser: string;
  if (facility === "heritage") {
    const levels = { low: "low", medium: "medium", high: "high" } as const;
    teaser = `Preservation first: ${levels[results.riskLevel]} climate-risk exposure across ${formatNumber(inputs.monitoredRooms)} monitored rooms.`;
  } else if (facility === "school") {
    teaser = `Healthier air for ~${formatNumber(results.derivedPeople)} pupils and staff across ${formatNumber(inputs.classrooms)} rooms.`;
  } else {
    teaser =
      inputs.annualBill > 0
        ? `Up to ${formatPct(results.savingsPctOfBill, 0)} of your annual heating bill, plus a productivity uplift.`
        : "Enter your heating bill or floor area to see an estimate.";
  }

  return {
    calcLabel: `Energy saver: ${FACILITY_LABELS[facility]}`,
    useCase:
      facility === "heritage"
        ? "Preservation / indoor climate"
        : facility === "school"
          ? "Health / indoor climate"
          : "Indoor climate / energy",
    teaser,
    capNote: results.capped
      ? "Energy savings capped at 80% of your heating bill for this illustrative estimate."
      : undefined,
    headlineSavings: report.grossSavings,
    accent: "sky",
    socialProof: FACILITY_SOCIAL_PROOF[facility],
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

    const lineItems: ComparisonLine[] = [
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
    ];
    if (deskInputs.goals.includes("repurpose") || deskInputs.goals.includes("grow")) {
      lineItems.push({
        label: "Freed floor area",
        value: `~${formatNumber(deskResults.freedSqm)} m²`,
      });
    }
    if (deskInputs.goals.includes("grow")) {
      lineItems.push({
        label: "Growth headroom (seats)",
        value: formatNumber(deskResults.growthHeadroom),
      });
    }
    lineItems.push({
      label: "Gross annual savings",
      value: formatMoney(currency, grossSavings),
    });

    return {
      calculator,
      currency,
      deskGoals: [...deskInputs.goals],
      statusQuoAnnual,
      optimizedAnnual,
      grossSavings,
      platformCostAnnual,
      netSavings,
      lineItems,
    };
  }

  const energyInputs = inputs as EnergyInputs;
  const energyResults = results as EnergyResults;
  const facility = energyInputs.facility;

  // "Without RoomAlyzer" = today's bill plus the hidden costs the facility
  // model surfaces (lost productivity, sick days, incident exposure).
  const hiddenCosts =
    energyResults.productivityValue +
    energyResults.sickDayValue +
    energyResults.riskValue;
  const billPart = energyInputs.energyModuleActive ? energyInputs.annualBill : 0;
  const statusQuoAnnual = billPart + hiddenCosts;
  const grossSavings = energyResults.totalSavings;
  const optimizedAnnual = Math.max(0, statusQuoAnnual - grossSavings);
  const platformCostAnnual = estimatePlatformCost(currency, grossSavings);
  const netSavings = Math.max(0, grossSavings - platformCostAnnual);

  const lineItems: ComparisonLine[] = [];

  if (energyInputs.energyModuleActive) {
    lineItems.push(
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
    );
  }

  if (facility === "office") {
    lineItems.push({
      label: `Productivity uplift (~${formatNumber(energyResults.derivedEmployees)} employees)`,
      value: formatMoney(currency, energyResults.productivityValue),
    });
  } else if (facility === "heritage") {
    const levels = { low: "Low", medium: "Medium", high: "High" } as const;
    lineItems.push(
      {
        label: "Monitored rooms / zones",
        value: formatNumber(energyInputs.monitoredRooms),
      },
      {
        label: "Climate risk exposure",
        value: levels[energyResults.riskLevel],
      },
      {
        label: "Avoidable incident cost / year",
        value: formatMoney(currency, energyResults.riskValue),
      },
    );
    if (energyInputs.collectionValue && energyInputs.collectionValue > 0) {
      lineItems.push({
        label: "Collection value protected",
        value: formatMoney(currency, energyInputs.collectionValue),
      });
    }
  } else {
    lineItems.push(
      {
        label: "Rooms monitored",
        value: formatNumber(energyInputs.classrooms),
      },
      {
        label: `Avoided sick days (~${formatNumber(energyResults.derivedPeople)} people)`,
        value: formatNumber(energyResults.avoidedSickDays),
      },
      {
        label: "Sick-day cost reduction / year",
        value: formatMoney(currency, energyResults.sickDayValue),
      },
    );
  }

  lineItems.push({
    label: "Gross annual value",
    value: formatMoney(currency, grossSavings),
  });

  return {
    calculator,
    currency,
    facility,
    statusQuoAnnual,
    optimizedAnnual,
    grossSavings,
    platformCostAnnual,
    netSavings,
    lineItems,
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
  lead: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  },
): string {
  const calcLabel = report.calculator === "desk" ? "Desk optimiser" : "Energy saver";
  const lines = [
    "IoT Fabrikken: ROI breakdown (illustrative)",
    "",
    `Calculator: ${calcLabel}`,
    `Name: ${lead.firstName} ${lead.lastName}`,
    `Email: ${lead.email}`,
    ...(lead.phone ? [`Phone: ${lead.phone}`] : []),
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
