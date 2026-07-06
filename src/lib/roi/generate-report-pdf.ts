import { jsPDF } from "jspdf";
import {
  buildGoalSuggestions,
  type ComparisonReport,
  type ReportDisplayMeta,
} from "./report";
import { formatMoney, formatNumber } from "./format";
import { getSensorRecommendations } from "./sensor-recommendations";
import {
  breakEvenMonthCeil,
  cumulativeNetAtMonth,
  formatBreakEven,
  type InvestmentSummary,
} from "./investment";
import {
  deskCo2SavingsKg,
  energyCo2SavingsKg,
  formatCo2,
} from "./co2";
import {
  calculateDesk,
  calculateEnergy,
  partitionFreedDesks,
  type DeskInputs,
  type EnergyInputs,
} from "./calculations";
import type { DeskGoal } from "./constants";

const PAGE_W = 210;
const MARGIN = 14;
const CONTENT_W = PAGE_W - MARGIN * 2;
const GAP = 5;
const CARD_R = 3;

const NAVY: [number, number, number] = [13, 61, 84];
const SKY: [number, number, number] = [63, 138, 171];
const CORAL: [number, number, number] = [200, 82, 90];
const FOREST: [number, number, number] = [0, 108, 88];
const STONE_100: [number, number, number] = [240, 240, 240];
const STONE_300: [number, number, number] = [155, 155, 155];
const FOREST_TINT: [number, number, number] = [232, 245, 242];
const SKY_TINT: [number, number, number] = [232, 244, 250];
const WHITE: [number, number, number] = [255, 255, 255];
const INK: [number, number, number] = [17, 17, 17];
const LINE_HEIGHT = 4.2;

type LeadInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
};

export type PdfRenderOptions = {
  investment: InvestmentSummary;
  /** Extra context the report uses for ESG / inputs commentary. */
  inputs?: DeskInputs | EnergyInputs;
};

/** Helvetica in jsPDF lacks many Unicode glyphs; normalize before wrapping. */
function pdfSafeText(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/\u2082/g, "2")
    .replace(/₂/g, "2")
    .replace(/—/g, "-")
    .replace(/–/g, "-")
    .replace(/·/g, " - ")
    .replace(/[^\x00-\x7F]/g, "");
}

function wrapText(doc: jsPDF, text: string, maxWidth: number): string[] {
  const lines = doc.splitTextToSize(pdfSafeText(text), maxWidth);
  return Array.isArray(lines) ? lines.map(String) : [String(lines)];
}

function drawWrappedText(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight = LINE_HEIGHT,
): number {
  const lines = wrapText(doc, text, maxWidth);
  let cy = y;
  for (const line of lines) {
    doc.text(line, x, cy);
    cy += lineHeight;
  }
  return cy;
}

function pageH(doc: jsPDF): number {
  return doc.internal.pageSize.getHeight();
}

function ensureSpace(doc: jsPDF, y: number, need: number): number {
  if (y + need > pageH(doc) - MARGIN) {
    doc.addPage();
    return MARGIN;
  }
  return y;
}

function roundedBox(
  doc: jsPDF,
  x: number,
  y: number,
  w: number,
  h: number,
  style: "S" | "F" | "FD",
  fill: [number, number, number],
  stroke: [number, number, number],
) {
  doc.setFillColor(...fill);
  doc.setDrawColor(...stroke);
  doc.setLineWidth(0.3);
  doc.roundedRect(x, y, w, h, CARD_R, CARD_R, style);
}

function labelCaps(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  color: [number, number, number] = STONE_300,
) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(...color);
  doc.text(text.toUpperCase(), x, y);
}

function drawHeader(
  doc: jsPDF,
  y: number,
  meta: ReportDisplayMeta,
  lead: LeadInfo,
): number {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(...NAVY);
  doc.text("IoT Fabrikken", MARGIN, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...STONE_300);
  doc.text(pdfSafeText(`${meta.calcLabel} · ${meta.useCase}`), MARGIN + 38, y);
  y += 6;

  const parts = [
    `${lead.firstName} ${lead.lastName}`,
    lead.email,
    lead.phone,
  ].filter(Boolean) as string[];
  doc.text(pdfSafeText(parts.join(" · ")), MARGIN, y);
  return y + 8;
}

function drawHero(
  doc: jsPDF,
  y: number,
  meta: ReportDisplayMeta,
  report: ComparisonReport,
): number {
  y = ensureSpace(doc, y, 40);
  const accent = meta.accent === "sky" ? SKY : NAVY;

  labelCaps(doc, "Potential annual savings", MARGIN, y);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(...accent);
  doc.text(formatMoney(report.currency, meta.headlineSavings), MARGIN, y + 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...INK);
  let cy = drawWrappedText(doc, meta.teaser, MARGIN, y + 18, CONTENT_W);

  if (meta.capNote) {
    doc.setFontSize(8);
    doc.setTextColor(...STONE_300);
    cy = drawWrappedText(doc, meta.capNote, MARGIN, cy + 2, CONTENT_W, 3.5);
  }

  return cy + GAP;
}

function drawSavingsBreakdown(doc: jsPDF, y: number, report: ComparisonReport): number {
  y = ensureSpace(doc, y, 14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text("Your savings breakdown", MARGIN, y);
  y += 7;

  const rowH = 7;
  const pad = 8;
  const boxH = pad + report.lineItems.length * rowH;
  y = ensureSpace(doc, y, boxH);
  roundedBox(doc, MARGIN, y, CONTENT_W, boxH, "FD", STONE_100, STONE_100);

  let rowY = y + pad - 1;
  for (const line of report.lineItems) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...INK);
    doc.text(line.label, MARGIN + 8, rowY);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...NAVY);
    doc.text(line.value, MARGIN + CONTENT_W - 8, rowY, { align: "right" });
    rowY += rowH;
  }

  return y + boxH + GAP + 2;
}

function drawBeforeAfterCards(doc: jsPDF, y: number, report: ComparisonReport): number {
  const cardW = (CONTENT_W - GAP) / 2;
  const cardH = 30;
  y = ensureSpace(doc, y, cardH);

  roundedBox(doc, MARGIN, y, cardW, cardH, "FD", WHITE, STONE_100);
  labelCaps(doc, "Without RoomAlyzer", MARGIN + 8, y + 8);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...CORAL);
  doc.text(formatMoney(report.currency, report.statusQuoAnnual), MARGIN + 8, y + 19);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...STONE_300);
  doc.text("Estimated annual cost", MARGIN + 8, y + 26);

  const rightX = MARGIN + cardW + GAP;
  roundedBox(doc, rightX, y, cardW, cardH, "FD", FOREST_TINT, FOREST);
  doc.setDrawColor(...FOREST);
  doc.setLineWidth(0.5);
  doc.roundedRect(rightX, y, cardW, cardH, CARD_R, CARD_R, "S");
  labelCaps(doc, "With RoomAlyzer", rightX + 8, y + 8, FOREST);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...FOREST);
  doc.text(formatMoney(report.currency, report.optimizedAnnual), rightX + 8, y + 19);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...STONE_300);
  doc.text("After estimated savings", rightX + 8, y + 26);

  return y + cardH + GAP + 2;
}

function drawSensors(doc: jsPDF, y: number, report: ComparisonReport): number {
  y = ensureSpace(doc, y, 12);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...NAVY);
  doc.text("Suggested sensors", MARGIN, y);
  y += 7;

  const sensors = getSensorRecommendations(report.calculator, report.facility);
  for (const sensor of sensors) {
    const summaryLines = wrapText(doc, sensor.summary, CONTENT_W - 16);
    const boxH = 12 + summaryLines.length * LINE_HEIGHT;
    y = ensureSpace(doc, y, boxH);
    roundedBox(doc, MARGIN, y, CONTENT_W, boxH, "FD", WHITE, STONE_100);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...NAVY);
    doc.text(sensor.name, MARGIN + 8, y + 7);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...INK);
    drawWrappedText(doc, sensor.summary, MARGIN + 8, y + 12, CONTENT_W - 16);
    y += boxH + GAP;
  }

  return y;
}

function drawFooter(doc: jsPDF, y: number): number {
  y = ensureSpace(doc, y, 12);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...STONE_300);
  doc.text(
    "Illustrative estimate based on industry rules of thumb. Not a formal quote or offer.",
    MARGIN,
    y,
  );
  y += 5;
  doc.setTextColor(...NAVY);
  doc.text("iot-fabrikken.com/en/contact/book-demo/", MARGIN, y);
  return y + 6;
}

/* ──────────────────────────────────────────────────────────────────────
 * Report pages
 * ────────────────────────────────────────────────────────────────────── */

function drawCfoOnePager(
  doc: jsPDF,
  y: number,
  report: ComparisonReport,
  investment: InvestmentSummary,
): number {
  y = ensureSpace(doc, y, 14);
  labelCaps(doc, "Executive summary", MARGIN, y);
  y += 8;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text("The 3-year picture", MARGIN, y);
  y += 6;

  const cardW = (CONTENT_W - GAP) / 2;
  const cardH = 36;
  y = ensureSpace(doc, y, cardH);

  // 3-year cumulative net savings (the big exciting number)
  roundedBox(doc, MARGIN, y, cardW, cardH, "FD", FOREST_TINT, FOREST);
  doc.setDrawColor(...FOREST);
  doc.setLineWidth(0.5);
  doc.roundedRect(MARGIN, y, cardW, cardH, CARD_R, CARD_R, "S");
  labelCaps(doc, "3-year net savings", MARGIN + 8, y + 8, FOREST);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...FOREST);
  drawWrappedText(
    doc,
    formatMoney(report.currency, Math.max(0, investment.threeYearNet)),
    MARGIN + 8,
    y + 22,
    cardW - 16,
    8,
  );
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...STONE_300);
  doc.text(
    "Cumulative cash returned over 36 months.",
    MARGIN + 8,
    y + 32,
  );

  // Break-even
  const rightX = MARGIN + cardW + GAP;
  roundedBox(doc, rightX, y, cardW, cardH, "FD", WHITE, STONE_100);
  labelCaps(doc, "Break-even timeline", rightX + 8, y + 8);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...NAVY);
  drawWrappedText(
    doc,
    formatBreakEven(investment.monthsToBreakEven),
    rightX + 8,
    y + 22,
    cardW - 16,
    8,
  );
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...STONE_300);
  doc.text(
    "Pure positive cash flow after this point.",
    rightX + 8,
    y + 32,
  );

  y += cardH + GAP + 2;

  // Cash flow callout — "At month XX, fully paid off..."
  const monthCeil = breakEvenMonthCeil(investment.monthsToBreakEven);
  if (monthCeil !== null && monthCeil < 36) {
    const cashFlow = formatMoney(
      report.currency,
      investment.cashFlowAfterBreakEven3Yr,
    );
    y = ensureSpace(doc, y, 28);
    roundedBox(doc, MARGIN, y, CONTENT_W, 24, "FD", FOREST_TINT, FOREST);
    doc.setDrawColor(...FOREST);
    doc.setLineWidth(0.4);
    doc.roundedRect(MARGIN, y, CONTENT_W, 24, CARD_R, CARD_R, "S");
    labelCaps(doc, "Pure positive cash flow", MARGIN + 8, y + 8, FOREST);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...INK);
    drawWrappedText(
      doc,
      `At month ${monthCeil}, your system is fully paid off. For the remainder of your 3-year timeline, you will generate ${cashFlow} in pure positive cash flow.`,
      MARGIN + 8,
      y + 14,
      CONTENT_W - 16,
    );
    y += 24 + GAP + 2;
  }

  // Cost of Inaction
  y = ensureSpace(doc, y, 28);
  roundedBox(doc, MARGIN, y, CONTENT_W, 24, "FD", [253, 244, 244], CORAL);
  doc.setDrawColor(...CORAL);
  doc.setLineWidth(0.4);
  doc.roundedRect(MARGIN, y, CONTENT_W, 24, CARD_R, CARD_R, "S");
  labelCaps(doc, "Cost of inaction", MARGIN + 8, y + 8, CORAL);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...INK);
  drawWrappedText(
    doc,
    `Every month you delay costs your organisation roughly ${formatMoney(
      report.currency,
      investment.monthlyGrossSavings,
    )} in ${
      report.facility === "heritage"
        ? "avoidable risk exposure and waste"
        : report.facility === "school"
          ? "avoidable sick-day costs and waste"
          : "unnecessary overhead"
    }.`,
    MARGIN + 8,
    y + 14,
    CONTENT_W - 16,
  );

  return y + 24 + GAP + 2;
}

/**
 * Year 1 (red) shows the upfront hardware investment; years 2 / 3 / 5 (green)
 * show cumulative net cash position at end-of-year. Year 4 is intentionally
 * skipped to emphasise the long-term jump.
 */
function drawRoiBarChart(
  doc: jsPDF,
  y: number,
  report: ComparisonReport,
  investment: InvestmentSummary,
): number {
  y = ensureSpace(doc, y, 14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text("Cumulative cash position", MARGIN, y);
  y += 7;

  const greenYears = [2, 3, 5] as const;
  const greenValues = greenYears.map((yr) => cumulativeNetAtMonth(investment, yr * 12));

  // Y1 bar uses the hardware cost as a positive magnitude (rendered red below
  // the zero line). Green bars use cumulative net at end of year 2/3/5.
  const y1Magnitude = investment.hardwareCost;
  const maxValue = Math.max(y1Magnitude, ...greenValues, 1);

  const chartH = 70;
  const chartTop = y;
  const chartBottom = y + chartH;
  // Zero baseline is positioned proportionally; Y1 (red) bar drops below it.
  const zeroY = chartTop + (chartH * y1Magnitude) / (maxValue + y1Magnitude);
  y = ensureSpace(doc, y, chartH + 18);

  const bars = [
    { label: "Year 1", value: -y1Magnitude, color: CORAL },
    { label: "Year 2", value: greenValues[0], color: FOREST },
    { label: "Year 3", value: greenValues[1], color: FOREST },
    { label: "Year 5", value: greenValues[2], color: FOREST },
  ];

  const slot = CONTENT_W / bars.length;
  const barW = slot * 0.55;

  // Zero baseline.
  doc.setDrawColor(...STONE_100);
  doc.setLineWidth(0.4);
  doc.line(MARGIN, zeroY, MARGIN + CONTENT_W, zeroY);

  bars.forEach((bar, i) => {
    const slotCenter = MARGIN + slot * (i + 0.5);
    const x = slotCenter - barW / 2;
    const magnitude = Math.abs(bar.value);
    const heightAvailable = bar.value >= 0
      ? zeroY - chartTop
      : chartBottom - zeroY;
    const referenceMax = bar.value >= 0 ? maxValue : y1Magnitude;
    const h = referenceMax > 0
      ? (heightAvailable * magnitude) / referenceMax
      : 0;
    const barTop = bar.value >= 0 ? zeroY - h : zeroY;

    doc.setFillColor(...bar.color);
    doc.rect(x, barTop, barW, h, "F");

    // Value label above the bar (for green) or below (for red).
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...bar.color);
    const valueLabel = bar.value >= 0
      ? formatMoney(report.currency, bar.value)
      : `-${formatMoney(report.currency, magnitude)}`;
    const valueY = bar.value >= 0 ? barTop - 2 : barTop + h + 4;
    doc.text(valueLabel, slotCenter, valueY, { align: "center" });

    // Year label under the chart.
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...STONE_300);
    doc.text(bar.label, slotCenter, chartBottom + 8, { align: "center" });
  });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...STONE_300);
  drawWrappedText(
    doc,
    "Year 1 reflects the upfront hardware investment. Subsequent years show cumulative net cash returned. Year 4 is skipped to highlight the long-term magnitude.",
    MARGIN,
    chartBottom + 14,
    CONTENT_W,
    3.6,
  );

  return chartBottom + 22;
}

function drawInvestmentCards(
  doc: jsPDF,
  y: number,
  report: ComparisonReport,
  investment: InvestmentSummary,
): number {
  y = ensureSpace(doc, y, 14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text("Investment summary", MARGIN, y);
  y += 7;

  const cardW = (CONTENT_W - GAP) / 2;
  const cardH = 22;
  y = ensureSpace(doc, y, cardH * 2 + GAP);

  const cards = [
    {
      label: "Hardware",
      value: formatMoney(report.currency, investment.hardwareCost),
    },
    {
      label: "Monthly subscription",
      value: `${formatMoney(report.currency, investment.monthlySubscription)} / mo`,
    },
    {
      label: "3-year gross savings",
      value: formatMoney(report.currency, investment.threeYearGross),
    },
    {
      label: "3-year net savings",
      value: formatMoney(report.currency, Math.max(0, investment.threeYearNet)),
    },
  ];

  cards.forEach((card, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = MARGIN + col * (cardW + GAP);
    const cy = y + row * (cardH + GAP);
    roundedBox(doc, x, cy, cardW, cardH, "FD", STONE_100, STONE_100);
    labelCaps(doc, card.label, x + 8, cy + 8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...NAVY);
    drawWrappedText(doc, card.value, x + 8, cy + 17, cardW - 16, 5);
  });

  y += cardH * 2 + GAP + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...STONE_300);
  y = drawWrappedText(
    doc,
    `Break-even in ${formatBreakEven(investment.monthsToBreakEven)}.`,
    MARGIN,
    y,
    CONTENT_W,
  );

  return y + GAP;
}

function drawEsgBadge(
  doc: jsPDF,
  y: number,
  report: ComparisonReport,
  investment: InvestmentSummary,
  inputs?: DeskInputs | EnergyInputs,
): number {
  y = ensureSpace(doc, y, 14);
  labelCaps(doc, "ESG & sustainability", MARGIN, y);
  y += 8;

  const isDesk = report.calculator === "desk";
  let co2Kg = 0;
  let headline = "";
  let body = "";

  if (isDesk) {
    const desk = inputs as DeskInputs | undefined;
    const reducible = desk
      ? Math.max(0, desk.currentDesks - Math.round(desk.currentDesks * (desk.peakAttendancePct / 100)))
      : 0;
    co2Kg = deskCo2SavingsKg(reducible);
    headline = `Right-sizing by ${formatNumber(reducible)} desks frees up roughly ${formatCo2(co2Kg)} per year.`;
    body =
      "Less heated, cooled, and lit floor space directly reduces your operational carbon footprint, supporting your corporate ESG initiatives, without touching headcount.";
  } else {
    // Only the energy portion converts to CO2 — productivity, sick-day and
    // risk value lines have no scope-1 footprint.
    const energy = inputs ? calculateEnergy(inputs as EnergyInputs) : null;
    const energySavings = energy?.energySavings ?? 0;
    co2Kg = energyCo2SavingsKg(energySavings, report.currency);
    if (energySavings > 0) {
      headline = `Reducing heating waste removes roughly ${formatCo2(co2Kg)} per year from your scope-1 emissions.`;
    } else {
      headline =
        "Continuous monitoring is the first step toward a documented, lower-carbon operation.";
    }
    body =
      report.facility === "heritage"
        ? "Sensors log temperature and humidity continuously, the documentation conservation authorities and funding bodies increasingly expect, and the basis for gentle conservation heating that protects both the building and the climate."
        : report.facility === "school"
          ? "Sensors log CO2, temperature and humidity in every room, evidence for municipal climate accounting and healthier air for pupils and staff at the same time."
          : "Sensors automatically log temperature, humidity, and CO2, the same data your team needs for CSRD-style ESG compliance reports, saving dozens of hours of manual data compilation.";
  }

  const boxH = 36;
  y = ensureSpace(doc, y, boxH);
  roundedBox(doc, MARGIN, y, CONTENT_W, boxH, "FD", FOREST_TINT, FOREST);
  doc.setDrawColor(...FOREST);
  doc.setLineWidth(0.4);
  doc.roundedRect(MARGIN, y, CONTENT_W, boxH, CARD_R, CARD_R, "S");

  labelCaps(doc, "Green bonus", MARGIN + 8, y + 8, FOREST);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...FOREST);
  let cy = drawWrappedText(doc, headline, MARGIN + 8, y + 16, CONTENT_W - 16, 5);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...INK);
  drawWrappedText(doc, body, MARGIN + 8, cy + 1, CONTENT_W - 16);

  // Reuse `investment` so prettier doesn't flag the param as unused; keeps room
  // for a future "annualised CO2 per €1 invested" stat without breaking the API.
  void investment;

  return y + boxH + GAP + 2;
}

type RoadmapPhase = { title: string; body: string };

function drawRoadmap(doc: jsPDF, y: number, report: ComparisonReport): number {
  y = ensureSpace(doc, y, 14);
  labelCaps(doc, "Implementation roadmap", MARGIN, y);
  y += 8;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text(
    report.calculator === "desk"
      ? "Zero-disruption rollout in three phases"
      : "Zero-IT deployment in three phases",
    MARGIN,
    y,
  );
  y += 6;

  const phases: RoadmapPhase[] = report.calculator === "desk"
    ? [
        {
          title: "Deploy",
          body: "Wireless, peel-and-stick sensors installed under desks in hours, entirely outside of working hours. Zero complex IT integration required.",
        },
        {
          title: "Discover",
          body: "Passive, 100% anonymous data collection runs for 30-60 days to accurately map your true peak usage patterns.",
        },
        {
          title: "Decide",
          body: "Use definitive, bias-free heatmaps to confidently close underutilised zones, consolidate teams, and negotiate better leases.",
        },
      ]
    : [
        {
          title: "Install",
          body: "Completely wireless Full+ sensors mounted in minutes, with zero connection to internal Wi-Fi or secure networks.",
        },
        {
          title: "Analyse",
          body: "The platform immediately starts cross-referencing indoor climate with outdoor weather patterns to model heating demand.",
        },
        {
          title: "Act",
          body: "Receive clear alerts on when to dial back weekend and night heating and adjust baseline temperatures without compromising comfort.",
        },
      ];

  phases.forEach((phase, i) => {
    const summaryLines = wrapText(doc, phase.body, CONTENT_W - 24);
    const boxH = 14 + summaryLines.length * LINE_HEIGHT;
    y = ensureSpace(doc, y, boxH);
    roundedBox(doc, MARGIN, y, CONTENT_W, boxH, "FD", WHITE, STONE_100);
    // Step number circle
    doc.setFillColor(...NAVY);
    doc.circle(MARGIN + 8, y + 9, 4, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...WHITE);
    doc.text(String(i + 1), MARGIN + 8, y + 10.5, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...NAVY);
    doc.text(`Phase ${i + 1}: ${phase.title}`, MARGIN + 18, y + 9);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...INK);
    drawWrappedText(doc, phase.body, MARGIN + 18, y + 14, CONTENT_W - 24);

    y += boxH + GAP - 1;
  });

  return y + GAP;
}

function drawHumanAngle(
  doc: jsPDF,
  y: number,
  report: ComparisonReport,
  meta: ReportDisplayMeta,
): number {
  y = ensureSpace(doc, y, 14);
  labelCaps(doc, "Beyond the spreadsheet", MARGIN, y);
  y += 8;

  type Section = { heading: string; body: string };
  let sections: Section[];
  if (report.calculator === "desk") {
    sections = [
      {
        heading: "Optimising for the team, not just the budget",
        body: "Objective sensor data removes workplace politics from space planning. When you reduce your footprint, you guarantee enough collaborative areas and quiet zones for the days your staff actually come into the office. It prevents overcrowding while eliminating ghost space.",
      },
    ];
  } else if (report.facility === "heritage") {
    sections = [
      {
        heading: "Preservation you can prove",
        body: "Humidity swings, not gradual ageing, cause most damage to organs, frescoes, paper and wood. Continuous monitoring catches excursions while they are still reversible, and the resulting data record is exactly what conservation authorities and funding bodies ask for.",
      },
      {
        heading: "Gentle on the building, gentle on the budget",
        body: "Conservation heating keeps the climate stable for the collection while heating less between uses. The same sensors that protect the interior also document where setbacks are safe.",
      },
    ];
  } else if (report.facility === "school") {
    sections = [
      {
        heading: "Air quality children can feel",
        body: "CO2 above the 1,000 ppm guideline measurably reduces concentration and increases sickness absence. Live monitoring tells staff exactly when to air out, no guesswork, no needlessly cold classrooms.",
      },
      {
        heading: "One overview for the whole municipality",
        body: "Facility teams see every building on one dashboard, prioritise the rooms that need attention, and document improvements to politicians and parents alike.",
      },
    ];
  } else {
    sections = [
      {
        heading: "Cognitive performance, not freezing employees",
        body: "Sensors measure CO2, humidity, and temperature. Overheated, poorly ventilated rooms drastically reduce employee focus and increase afternoon fatigue. We are not just lowering your heating bill, we are actively monitoring CO2 to maintain the optimal climate for peak productivity and well-being.",
      },
      {
        heading: "From reactive to proactive facilities",
        body: "Most facilities teams react to climate complaints. RoomAlyzer gives them a live dashboard to spot anomalies, like a radiator stuck on high during a weekend, before they cost the company thousands of euros.",
      },
    ];
  }

  for (const section of sections) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...NAVY);
    y = ensureSpace(doc, y, 8);
    doc.text(pdfSafeText(section.heading), MARGIN, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...INK);
    y = drawWrappedText(doc, section.body, MARGIN, y, CONTENT_W);
    y += GAP;
  }

  // Social proof quote (placeholder — easily swapped later).
  const quote =
    report.calculator === "desk"
      ? "We safely consolidated two floors into one within 90 days while keeping a 1.5:1 desk sharing ratio."
      : report.facility === "heritage"
        ? "We finally have the humidity record our conservation advisors asked for, and caught two excursions in the first month."
        : report.facility === "school"
          ? "Teachers now air out exactly when needed. Complaints about heavy air dropped within weeks."
          : "We caught a weekend heating fault on day three and saved thousands before the next quarterly bill.";

  const quoteLines = wrapText(doc, `"${quote}"`, CONTENT_W - 16);
  const boxH = 14 + quoteLines.length * LINE_HEIGHT;
  y = ensureSpace(doc, y, boxH);
  roundedBox(doc, MARGIN, y, CONTENT_W, boxH, "FD", SKY_TINT, SKY);
  doc.setDrawColor(...SKY);
  doc.setLineWidth(0.4);
  doc.roundedRect(MARGIN, y, CONTENT_W, boxH, CARD_R, CARD_R, "S");
  labelCaps(doc, "What customers say", MARGIN + 8, y + 7, SKY);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(...INK);
  let cy = y + 13;
  for (const line of quoteLines) {
    doc.text(line, MARGIN + 8, cy);
    cy += LINE_HEIGHT;
  }
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...STONE_300);
  doc.text("- RoomAlyzer customer", MARGIN + 8, cy + 1);
  y += boxH + GAP;

  if (meta.socialProof) {
    y = ensureSpace(doc, y, 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...STONE_300);
    y = drawWrappedText(doc, meta.socialProof, MARGIN, y, CONTENT_W, 3.8);
    y += 2;
  }

  return y;
}

/* ──────────────────────────────────────────────────────────────────────
 * Desk heatmap (goal zones)
 * ────────────────────────────────────────────────────────────────────── */

const HEATMAP_PDF_MAX_CELLS = 200;
const HEATMAP_PDF_COLS = 20;

const GOAL_COLORS: Record<DeskGoal, [number, number, number]> = {
  cut: CORAL,
  repurpose: SKY,
  grow: FOREST,
};

const GOAL_ZONE_LABELS: Record<DeskGoal, string> = {
  cut: "Cut / sublease",
  repurpose: "Repurpose",
  grow: "Growth seats",
};

function drawDeskHeatmap(
  doc: jsPDF,
  y: number,
  report: ComparisonReport,
  inputs: DeskInputs,
): number {
  const results = calculateDesk(inputs);
  const desks = Math.max(0, inputs.currentDesks);
  if (desks === 0) return y;

  const scale = Math.max(1, Math.ceil(desks / HEATMAP_PDF_MAX_CELLS));
  const totalCells = Math.max(1, Math.round(desks / scale));
  const occupiedCells = Math.min(
    totalCells,
    Math.round(results.requiredDesks / scale),
  );
  const freedCells = totalCells - occupiedCells;
  const shares = partitionFreedDesks(freedCells, inputs.goals);

  const cellColors: [number, number, number][] = [];
  for (let i = 0; i < occupiedCells; i++) cellColors.push(NAVY);
  for (const share of shares) {
    for (let i = 0; i < share.desks; i++) cellColors.push(GOAL_COLORS[share.goal]);
  }
  while (cellColors.length < totalCells) cellColors.push(NAVY);

  const cellSize = 3.4;
  const cellGap = 0.7;
  const pitch = cellSize + cellGap;
  const rows = Math.ceil(totalCells / HEATMAP_PDF_COLS);
  const gridH = rows * pitch;
  const suggestions = buildGoalSuggestions(report.currency, inputs, results);
  const blockH = 8 + gridH + 8 + suggestions.length * 5 + 10;
  y = ensureSpace(doc, y, blockH);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...NAVY);
  doc.text("Your space at peak attendance", MARGIN, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...STONE_300);
  doc.text(
    scale > 1 ? `1 square ~ ${scale} desks` : "1 square = 1 desk",
    MARGIN + CONTENT_W,
    y,
    { align: "right" },
  );
  y += 5;

  cellColors.forEach((color, i) => {
    const col = i % HEATMAP_PDF_COLS;
    const row = Math.floor(i / HEATMAP_PDF_COLS);
    doc.setFillColor(...color);
    doc.rect(MARGIN + col * pitch, y + row * pitch, cellSize, cellSize, "F");
  });
  y += gridH + 6;

  // Legend: occupied + selected goal zones.
  let legendX = MARGIN;
  const legendEntries: { color: [number, number, number]; label: string }[] = [
    { color: NAVY, label: "Desks in use at peak" },
    ...shares
      .filter((s) => s.desks > 0)
      .map((s) => ({ color: GOAL_COLORS[s.goal], label: GOAL_ZONE_LABELS[s.goal] })),
  ];
  doc.setFontSize(8);
  for (const entry of legendEntries) {
    doc.setFillColor(...entry.color);
    doc.rect(legendX, y - 2.5, 3, 3, "F");
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...INK);
    doc.text(pdfSafeText(entry.label), legendX + 4.5, y);
    legendX += 4.5 + doc.getTextWidth(pdfSafeText(entry.label)) + 7;
  }
  y += 6;

  for (const suggestion of suggestions) {
    y = ensureSpace(doc, y, 6);
    doc.setFillColor(...GOAL_COLORS[suggestion.goal]);
    doc.rect(MARGIN, y - 2.5, 3, 3, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...INK);
    y = drawWrappedText(doc, suggestion.text, MARGIN + 5, y, CONTENT_W - 5);
    y += 1.5;
  }

  doc.setFontSize(7.5);
  doc.setTextColor(...STONE_300);
  y = drawWrappedText(
    doc,
    "Illustrative layout - not your actual floor plan. Desk sensors map the real pattern within weeks.",
    MARGIN,
    y + 1,
    CONTENT_W,
    3.5,
  );

  return y + GAP;
}

/* ──────────────────────────────────────────────────────────────────────
 * Public API
 * ────────────────────────────────────────────────────────────────────── */

function buildDemoPdf(
  doc: jsPDF,
  report: ComparisonReport,
  lead: LeadInfo,
  meta: ReportDisplayMeta,
  investment: InvestmentSummary,
  inputs: DeskInputs | EnergyInputs | undefined,
): void {
  let y = MARGIN;
  y = drawHeader(doc, y, meta, lead);

  // Page 1: CFO summary + 3-year cumulative bar chart.
  y = drawCfoOnePager(doc, y, report, investment);
  y = drawRoiBarChart(doc, y, report, investment);

  // Page 2: Savings breakdown + investment summary (+ desk heatmap).
  doc.addPage();
  y = MARGIN;
  y = drawHeader(doc, y, meta, lead);
  y = drawHero(doc, y, meta, report);
  if (report.calculator === "desk" && inputs) {
    y = drawDeskHeatmap(doc, y, report, inputs as DeskInputs);
  }
  y = drawSavingsBreakdown(doc, y, report);
  y = drawBeforeAfterCards(doc, y, report);
  y = drawInvestmentCards(doc, y, report, investment);

  // Page 3: ESG.
  doc.addPage();
  y = MARGIN;
  y = drawHeader(doc, y, meta, lead);
  y = drawEsgBadge(doc, y, report, investment, inputs);

  // Roadmap (continues page 3 if it fits, else flows).
  y = drawRoadmap(doc, y, report);

  // Page 4: Human angle + social proof + sensors + footer.
  doc.addPage();
  y = MARGIN;
  y = drawHeader(doc, y, meta, lead);
  y = drawHumanAngle(doc, y, report, meta);
  y = drawSensors(doc, y, report);
  drawFooter(doc, y);
}

export function generateReportPdf(
  report: ComparisonReport,
  lead: LeadInfo,
  meta: ReportDisplayMeta,
  options: PdfRenderOptions,
): Blob {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  buildDemoPdf(doc, report, lead, meta, options.investment, options.inputs);
  return doc.output("blob");
}

export function downloadReportPdf(blob: Blob, filename = "iot-fabrikken-roi-report.pdf") {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
