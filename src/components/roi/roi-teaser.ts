import { calculateDesk, calculateEnergy } from "../../lib/roi/calculations";
import { DEFAULTS, DESK_LIMITS, ENERGY_LIMITS } from "../../lib/roi/constants";
import { formatMoney, formatNumber, formatPct } from "../../lib/roi/format";

function initTeaserCard(card: HTMLElement) {
  const type = card.dataset.roiTeaserCard as "desk" | "energy" | undefined;
  const range = card.querySelector<HTMLInputElement>("[data-roi-teaser-range]");
  const valueDisplay = card.querySelector<HTMLElement>("[data-roi-teaser-value]");
  const savingsEl = card.querySelector<HTMLElement>("[data-roi-teaser-savings]");
  const teaserEl = card.querySelector<HTMLElement>("[data-roi-teaser-teaser]");

  if (!type || !range) return;

  const update = () => {
    if (type === "desk") {
      const peak = Number(range.value);
      if (valueDisplay) valueDisplay.textContent = formatPct(peak, 0);
      const results = calculateDesk({
        currentDesks: DESK_LIMITS.defaultDesks,
        peakAttendancePct: peak,
        annualCostPerDesk: DEFAULTS.EUR.costPerDesk,
      });
      if (savingsEl) savingsEl.textContent = formatMoney("EUR", results.totalSavings);
      if (teaserEl) {
        teaserEl.textContent =
          results.reducibleDesks > 0
            ? `~${formatNumber(results.reducibleDesks)} desks could be right-sized at ${formatPct(peak, 0)} peak attendance.`
            : "Lower peak attendance to see desk savings.";
      }
      return;
    }

    const temp = Number(range.value);
    if (valueDisplay) valueDisplay.textContent = `${temp}°C`;
    const results = calculateEnergy({
      annualBill: DEFAULTS.EUR.heatingBill,
      heatsWeekends: true,
      heatsNightly: true,
      avgTempC: temp,
    });
    if (savingsEl) savingsEl.textContent = formatMoney("EUR", results.totalSavings);
    if (teaserEl) {
      teaserEl.textContent =
        results.totalSavings > 0
          ? `Up to ${formatPct(results.savingsPctOfBill, 0)} of a typical annual heating bill.`
          : "You are already at the 20°C baseline in this quick estimate.";
    }
  };

  range.addEventListener("input", update);
  update();
}

document.querySelectorAll<HTMLElement>("[data-roi-teaser-card]").forEach(initTeaserCard);
