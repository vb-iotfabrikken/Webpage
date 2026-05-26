import {
  calculateDesk,
  calculateEnergy,
  estimateBillFromSqm,
  type DeskInputs,
  type DeskResults,
  type EnergyInputs,
  type EnergyResults,
} from "../../lib/roi/calculations";
import {
  DEFAULTS,
  DESK_LIMITS,
  ENERGY_LIMITS,
  ROI_LEAD_STORAGE_KEY,
  type CalculatorTab,
  type Currency,
} from "../../lib/roi/constants";
import { formatMoney, formatNumber, formatPct } from "../../lib/roi/format";
import {
  downloadReportPdf,
  generateReportPdf,
} from "../../lib/roi/generate-report-pdf";
import {
  buildComparisonReport,
  buildReportDisplayMeta,
  type ComparisonReport,
} from "../../lib/roi/report";
import { submitLead, type LeadPayload } from "../../lib/roi/submit-lead";

function initCalculator(root: HTMLElement) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let activeTab: CalculatorTab = "desk";
  let currency: Currency = "EUR";
  let animFrame = 0;
  let displayValue = 0;
  let targetValue = 0;

  const counterEl = root.querySelector<HTMLElement>("[data-roi-counter-value]");
  const teaserEl = root.querySelector<HTMLElement>("[data-roi-counter-teaser]");
  const capNoteEl = root.querySelector<HTMLElement>("[data-roi-counter-cap-note]");
  const savingsCounterWrap = root.querySelector<HTMLElement>(
    "[data-roi-savings-counter]",
  );
  const emailForm = root.querySelector<HTMLFormElement>("[data-roi-email-form]");
  const emailGate = root.querySelector<HTMLElement>("[data-roi-email-gate]");
  const emailBreakdown = root.querySelector<HTMLElement>("[data-roi-email-breakdown]");
  const emailInput = root.querySelector<HTMLInputElement>("[data-roi-email-input]");
  const companyInput = root.querySelector<HTMLInputElement>("[data-roi-company-input]");
  const emailError = root.querySelector<HTMLElement>("[data-roi-email-error]");
  const heatingEstimateToggle = root.querySelector<HTMLButtonElement>(
    "[data-roi-heating-estimate-toggle]",
  );
  const heatingEstimatePanel = root.querySelector<HTMLElement>(
    "[data-roi-heating-estimate]",
  );

  const deskPanel = root.querySelector<HTMLElement>('[data-roi-panel="desk"]');
  const energyPanel = root.querySelector<HTMLElement>(
    '[data-roi-panel="energy"]',
  );
  const moduleLinkDesk = root.querySelector<HTMLElement>(
    "[data-roi-module-link-desk]",
  );
  const moduleLinkEnergy = root.querySelector<HTMLElement>(
    "[data-roi-module-link-energy]",
  );

  const desksRange = root.querySelector<HTMLInputElement>("[data-roi-desks-range]");
  const desksNumber = root.querySelector<HTMLInputElement>(
    "[data-roi-desks-number]",
  );
  const desksDisplay = root.querySelector<HTMLElement>(
    "[data-roi-desks-display]",
  );
  const attendanceRange = root.querySelector<HTMLInputElement>(
    "[data-roi-attendance-range]",
  );
  const attendanceDisplay = root.querySelector<HTMLElement>(
    "[data-roi-attendance-display]",
  );
  const deskCostInput = root.querySelector<HTMLInputElement>("[data-roi-desk-cost]");

  const heatingBillInput = root.querySelector<HTMLInputElement>(
    "[data-roi-heating-bill]",
  );
  const sqmInput = root.querySelector<HTMLInputElement>("[data-roi-sqm]");
  const tempRange = root.querySelector<HTMLInputElement>("[data-roi-temp-range]");
  const tempDisplay = root.querySelector<HTMLElement>("[data-roi-temp-display]");

  const currencySymbols = root.querySelectorAll<HTMLElement>(
    "[data-roi-currency-symbol], [data-roi-currency-symbol-energy]",
  );

  let deskResults: DeskResults | null = null;
  let energyResults: EnergyResults | null = null;
  let sqmEstimateActive = false;
  let leadUnlocked = false;
  let breakdownVisible = false;
  let savedEmail = "";
  let savedCompany = "";
  let lastReport: ComparisonReport | null = null;

  function buildPayload(): LeadPayload {
    return {
      calculator: activeTab,
      email: savedEmail,
      company: savedCompany || undefined,
      currency,
      inputs: activeTab === "desk" ? readDeskInputs() : readEnergyInputs(),
      results:
        activeTab === "desk"
          ? (deskResults ?? calculateDesk(readDeskInputs()))
          : (energyResults ?? calculateEnergy(readEnergyInputs())),
      pageUrl: window.location.href,
    };
  }

  function readLeadFromForm(): { email: string } | null {
    const email = emailInput?.value.trim() ?? "";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return null;
    }
    return { email };
  }

  function persistLead(email: string, company: string) {
    savedEmail = email;
    savedCompany = company;
    sessionStorage.setItem(
      ROI_LEAD_STORAGE_KEY,
      JSON.stringify({ email, company }),
    );
    if (emailInput) emailInput.value = email;
    if (companyInput) companyInput.value = company;
  }

  function prefillLeadFromStorage() {
    try {
      const raw = sessionStorage.getItem(ROI_LEAD_STORAGE_KEY);
      if (!raw) return;
      const { email, company } = JSON.parse(raw) as {
        email?: string;
        company?: string;
      };
      if (email && emailInput) emailInput.value = email;
      if (company && companyInput) companyInput.value = company;
      if (email) savedEmail = email;
      if (company) savedCompany = company;
    } catch {
      /* ignore */
    }
  }

  function renderBreakdown() {
    if (!emailBreakdown || !savedEmail) return;
    const payload = buildPayload();
    const report = buildComparisonReport(payload);
    lastReport = report;

    const set = (sel: string, text: string) => {
      const el = emailBreakdown.querySelector<HTMLElement>(sel);
      if (el) el.textContent = text;
    };
    set("[data-roi-without-total]", formatMoney(report.currency, report.statusQuoAnnual));
    set("[data-roi-with-total]", formatMoney(report.currency, report.optimizedAnnual));
    set("[data-roi-gross]", formatMoney(report.currency, report.grossSavings));
    set("[data-roi-platform]", formatMoney(report.currency, report.platformCostAnnual));
    set("[data-roi-net]", formatMoney(report.currency, report.netSavings));

    const list = emailBreakdown.querySelector("[data-roi-breakdown-lines]");
    if (list) {
      list.innerHTML = "";
      for (const line of report.lineItems) {
        const li = document.createElement("li");
        li.className = "flex justify-between gap-3";
        li.innerHTML = `<span>${line.label}</span><span class="font-medium text-navy-500 shrink-0">${line.value}</span>`;
        list.appendChild(li);
      }
    }
  }

  function deliverPdfReport() {
    if (!lastReport || !savedEmail) return;
    const payload = buildPayload();
    const meta = buildReportDisplayMeta(payload);
    const blob = generateReportPdf(
      lastReport,
      {
        email: savedEmail,
        company: savedCompany || undefined,
      },
      meta,
    );
    downloadReportPdf(blob);
  }

  function showBreakdown() {
    breakdownVisible = true;
    emailGate?.classList.add("hidden");
    emailBreakdown?.classList.remove("hidden");
    renderBreakdown();
  }

  function showGate(prefillOnly = false) {
    breakdownVisible = false;
    emailGate?.classList.remove("hidden");
    emailBreakdown?.classList.add("hidden");
    if (prefillOnly) {
      prefillLeadFromStorage();
    }
  }

  /** true = Yes, still heating (waste); false = No, setback active */
  function getToggleHeating(name: "weekend" | "nightly"): boolean {
    const group = root.querySelector<HTMLElement>(
      `[data-roi-toggle="${name}"]`,
    );
    return group?.dataset.roiToggleOn === "true";
  }

  function setToggleHeating(name: "weekend" | "nightly", stillHeating: boolean) {
    const group = root.querySelector<HTMLElement>(
      `[data-roi-toggle="${name}"]`,
    );
    if (!group) return;
    group.dataset.roiToggleOn = String(stillHeating);
    group.querySelectorAll<HTMLButtonElement>(".roi-toggle-btn").forEach((btn) => {
      const val = btn.dataset.roiToggleValue === "true";
      const active = val === stillHeating;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    const hint = root.querySelector<HTMLElement>(`[data-roi-badge-${name}]`);
    if (hint) {
      hint.classList.toggle("hidden", stillHeating);
    }
  }

  function readDeskInputs(): DeskInputs {
    const desks = Number(desksRange?.value ?? DESK_LIMITS.defaultDesks);
    return {
      currentDesks: desks,
      peakAttendancePct: Number(
        attendanceRange?.value ?? DESK_LIMITS.defaultAttendance,
      ),
      annualCostPerDesk: Number(deskCostInput?.value ?? DEFAULTS[currency].costPerDesk),
    };
  }

  function readEnergyInputs(): EnergyInputs {
    let bill = Number(heatingBillInput?.value ?? DEFAULTS[currency].heatingBill);
    if (sqmEstimateActive && sqmInput) {
      bill = estimateBillFromSqm(
        Number(sqmInput.value),
        DEFAULTS[currency].heatingPerSqm,
      );
      if (heatingBillInput) heatingBillInput.value = String(Math.round(bill));
    }
    return {
      annualBill: bill,
      heatsWeekends: getToggleHeating("weekend"),
      heatsNightly: getToggleHeating("nightly"),
      avgTempC: Number(tempRange?.value ?? ENERGY_LIMITS.defaultTemp),
    };
  }

  function animateCounter(target: number) {
    if (!counterEl) return;
    targetValue = target;
    if (prefersReducedMotion) {
      displayValue = target;
      counterEl.textContent = formatMoney(currency, displayValue);
      return;
    }
    cancelAnimationFrame(animFrame);
    const start = displayValue;
    const startTime = performance.now();
    const duration = 400;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - (1 - t) ** 3;
      displayValue = start + (target - start) * eased;
      counterEl.textContent = formatMoney(currency, displayValue);
      if (t < 1) {
        animFrame = requestAnimationFrame(tick);
      } else {
        displayValue = target;
      }
    };
    animFrame = requestAnimationFrame(tick);
  }

  function updateCounterAccent(tab: CalculatorTab) {
    if (!savingsCounterWrap) return;
    const valueEl = savingsCounterWrap.querySelector("[data-roi-counter-value]");
    valueEl?.classList.toggle("text-sky-600", tab === "energy");
    valueEl?.classList.toggle("text-navy-500", tab === "desk");
  }

  function renderDesk() {
    const inputs = readDeskInputs();
    deskResults = calculateDesk(inputs);
    if (desksDisplay) desksDisplay.textContent = formatNumber(inputs.currentDesks);
    if (attendanceDisplay)
      attendanceDisplay.textContent = formatPct(inputs.peakAttendancePct);
    if (activeTab === "desk") {
      animateCounter(deskResults.totalSavings);
      if (teaserEl) {
        teaserEl.textContent =
          deskResults.reducibleDesks > 0
            ? `You could right-size ~${formatNumber(deskResults.reducibleDesks)} desks (${formatPct(deskResults.savingsPctOfCapacity, 0)} of capacity).`
            : "Your peak attendance matches your desk count — try lowering the attendance slider.";
      }
      capNoteEl?.classList.add("hidden");
    }
  }

  function renderEnergy() {
    const inputs = readEnergyInputs();
    energyResults = calculateEnergy(inputs);
    if (tempDisplay) tempDisplay.textContent = `${inputs.avgTempC}°C`;
    if (tempRange) tempRange.setAttribute("aria-valuenow", String(inputs.avgTempC));
    if (activeTab === "energy") {
      animateCounter(energyResults.totalSavings);
      if (teaserEl) {
        teaserEl.textContent =
          inputs.annualBill > 0
            ? `Up to ${formatPct(energyResults.savingsPctOfBill, 0)} of your annual heating bill.`
            : "Enter your heating bill or floor area to see an estimate.";
      }
      capNoteEl?.classList.toggle("hidden", !energyResults.capped);
    }
  }

  function recalc() {
    renderDesk();
    renderEnergy();
    if (leadUnlocked && breakdownVisible) {
      renderBreakdown();
    }
  }

  function setTab(tab: CalculatorTab) {
    activeTab = tab;
    root.dataset.activeTab = tab;
    root.querySelectorAll<HTMLButtonElement>("[data-roi-tab]").forEach((btn) => {
      const isActive = btn.dataset.roiTab === tab;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });
    deskPanel?.classList.toggle("hidden", tab !== "desk");
    energyPanel?.classList.toggle("hidden", tab !== "energy");
    moduleLinkDesk?.classList.toggle("hidden", tab !== "desk");
    moduleLinkEnergy?.classList.toggle("hidden", tab !== "energy");
    updateCounterAccent(tab);
    if (tab === "desk" && deskResults) {
      animateCounter(deskResults.totalSavings);
      renderDesk();
    } else if (tab === "energy" && energyResults) {
      animateCounter(energyResults.totalSavings);
      renderEnergy();
    }
    recalc();
  }

  function applyCurrency(next: Currency) {
    const prev = currency;
    currency = next;
    root.querySelectorAll<HTMLButtonElement>("[data-roi-currency]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.roiCurrency === next);
    });
    const sym = next === "EUR" ? "€" : "DKK";
    currencySymbols.forEach((el) => {
      el.textContent = sym;
    });

    if (deskCostInput && prev !== next) {
      deskCostInput.value = String(DEFAULTS[next].costPerDesk);
    }
    if (heatingBillInput && prev !== next) {
      heatingBillInput.value = String(DEFAULTS[next].heatingBill);
    }
    recalc();
  }

  // Tab buttons
  root.querySelectorAll<HTMLButtonElement>("[data-roi-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.roiTab as CalculatorTab;
      if (tab) setTab(tab);
      history.replaceState(null, "", `#${tab}`);
    });
  });

  // Currency
  root.querySelectorAll<HTMLButtonElement>("[data-roi-currency]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const c = btn.dataset.roiCurrency as Currency;
      if (c) applyCurrency(c);
    });
  });

  // Desk inputs
  const syncDesks = (value: number) => {
    const v = Math.min(
      DESK_LIMITS.maxDesks,
      Math.max(DESK_LIMITS.minDesks, value),
    );
    if (desksRange) desksRange.value = String(v);
    if (desksNumber) desksNumber.value = String(v);
    renderDesk();
  };
  desksRange?.addEventListener("input", () => {
    syncDesks(Number(desksRange.value));
    recalc();
  });
  desksNumber?.addEventListener("change", () => {
    syncDesks(Number(desksNumber.value));
    recalc();
  });
  attendanceRange?.addEventListener("input", () => renderDesk());
  deskCostInput?.addEventListener("input", () => renderDesk());

  // Energy inputs
  heatingBillInput?.addEventListener("input", () => {
    sqmEstimateActive = false;
    renderEnergy();
  });
  sqmInput?.addEventListener("input", () => {
    sqmEstimateActive = true;
    renderEnergy();
  });
  tempRange?.addEventListener("input", () => renderEnergy());

  heatingEstimateToggle?.addEventListener("click", () => {
    const open = heatingEstimatePanel?.classList.toggle("hidden") === false;
    heatingEstimateToggle.setAttribute("aria-expanded", String(open));
    if (!open) {
      sqmEstimateActive = false;
      renderEnergy();
    }
  });

  root.querySelectorAll<HTMLElement>("[data-roi-toggle]").forEach((group) => {
    group.querySelectorAll<HTMLButtonElement>(".roi-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const stillHeating = btn.dataset.roiToggleValue === "true";
        const name = group.dataset.roiToggle as "weekend" | "nightly";
        setToggleHeating(name, stillHeating);
        renderEnergy();
      });
    });
  });

  emailForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const lead = readLeadFromForm();
    if (!lead) {
      emailError?.classList.remove("hidden");
      return;
    }
    emailError?.classList.add("hidden");
    persistLead(lead.email, companyInput?.value.trim() ?? "");
    leadUnlocked = true;

    const payload = buildPayload();
    await submitLead(payload);
    showBreakdown();
    deliverPdfReport();
  });

  root.querySelector<HTMLButtonElement>("[data-roi-adjust-inputs]")?.addEventListener(
    "click",
    () => {
      showGate(true);
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  );

  // Hash routing — #desk / #energy from teaser cards and external links
  function applyHashTab(scrollIntoView = false) {
    const hash = window.location.hash.replace("#", "");
    if (hash === "energy" || hash === "desk") {
      setTab(hash);
      if (scrollIntoView) {
        root.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }
      return true;
    }
    return false;
  }

  if (!applyHashTab(true)) {
    setTab("desk");
  }

  window.addEventListener("hashchange", () => {
    applyHashTab(true);
  });

  sessionStorage.removeItem("roi-unlocked");
  sessionStorage.removeItem("roi-report");
  leadUnlocked = false;
  breakdownVisible = false;
  prefillLeadFromStorage();
  showGate();
  recalc();
}

document.querySelectorAll<HTMLElement>("[data-roi-calculator]").forEach((root) => {
  initCalculator(root);
});
