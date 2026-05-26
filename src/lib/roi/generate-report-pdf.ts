import { jsPDF } from "jspdf";
import type { ComparisonReport, ReportDisplayMeta } from "./report";
import { formatMoney } from "./format";
import { getSensorRecommendations } from "./sensor-recommendations";

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
const WHITE: [number, number, number] = [255, 255, 255];
const INK: [number, number, number] = [17, 17, 17];
const LINE_HEIGHT = 4.2;

type LeadInfo = {
  email: string;
  company?: string;
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

  const metaLine = lead.company
    ? pdfSafeText(`${lead.email} · ${lead.company}`)
    : lead.email;
  doc.text(metaLine, MARGIN, y);
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

/** Line-item table directly under the hero — mirrors on-page "Your savings breakdown". */
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

/** Side-by-side Without / With cards — mirrors on-page before/after row. */
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

/** Three-card row: Gross · RoomAlyzer · Net — mirrors on-page equation cards. */
function drawEquationCards(doc: jsPDF, y: number, report: ComparisonReport): number {
  const cardW = (CONTENT_W - GAP * 2) / 3;
  const cardH = 24;
  y = ensureSpace(doc, y, cardH);

  const items = [
    {
      label: "Gross savings",
      value: formatMoney(report.currency, report.grossSavings),
      fill: STONE_100,
      stroke: STONE_100,
      labelColor: STONE_300,
      valueColor: NAVY,
      outline: false,
    },
    {
      label: "RoomAlyzer (illustrative)",
      value: formatMoney(report.currency, report.platformCostAnnual),
      fill: STONE_100,
      stroke: STONE_100,
      labelColor: STONE_300,
      valueColor: INK,
      outline: false,
    },
    {
      label: "Net savings",
      value: formatMoney(report.currency, report.netSavings),
      fill: FOREST_TINT,
      stroke: FOREST,
      labelColor: FOREST,
      valueColor: FOREST,
      outline: true,
    },
  ];

  items.forEach((item, i) => {
    const x = MARGIN + i * (cardW + GAP);
    roundedBox(doc, x, y, cardW, cardH, "FD", item.fill, item.stroke);
    if (item.outline) {
      doc.setDrawColor(...FOREST);
      doc.setLineWidth(0.4);
      doc.roundedRect(x, y, cardW, cardH, CARD_R, CARD_R, "S");
    }
    labelCaps(doc, item.label, x + 6, y + 8, item.labelColor);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...item.valueColor);
    drawWrappedText(doc, item.value, x + 6, y + 17, cardW - 12, 4);
  });

  return y + cardH + GAP + 2;
}

function drawSensors(doc: jsPDF, y: number, report: ComparisonReport): number {
  y = ensureSpace(doc, y, 12);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...NAVY);
  doc.text("Suggested sensors", MARGIN, y);
  y += 7;

  const sensors = getSensorRecommendations(report.calculator);
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

export function generateReportPdf(
  report: ComparisonReport,
  lead: LeadInfo,
  meta: ReportDisplayMeta,
): Blob {
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  let y = MARGIN;
  y = drawHeader(doc, y, meta, lead);
  y = drawHero(doc, y, meta, report);
  y = drawSavingsBreakdown(doc, y, report);
  y = drawBeforeAfterCards(doc, y, report);
  y = drawEquationCards(doc, y, report);
  y = drawSensors(doc, y, report);
  drawFooter(doc, y);

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
