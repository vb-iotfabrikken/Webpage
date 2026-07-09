import {
  calculateDesk,
  calculateEnergy,
  deriveEmployeesFromArea,
  derivePeopleFromClassrooms,
  partitionFreedDesks,
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
  type DeskGoal,
  type EnergyFacility,
} from "../../lib/roi/constants";
import { formatMoney, formatNumber, formatPct } from "../../lib/roi/format";
import {
  downloadReportPdf,
  generateReportPdf,
} from "../../lib/roi/generate-report-pdf";
import {
  buildComparisonReport,
  buildGoalSuggestions,
  buildReportDisplayMeta,
  type ComparisonReport,
} from "../../lib/roi/report";
import {
  submitConsultRequest,
  submitLead,
  type ConsultRequestPayload,
  type LeadPayload,
} from "../../lib/roi/submit-lead";
import {
  applyFieldErrors,
  bindFieldErrorClear,
  clearFieldErrors,
  resolveFieldErrorMessages,
} from "../../lib/forms/field-errors";
import {
  bindAutofillFieldSync,
  readLeadFormValuesFromForm,
} from "../../lib/forms/read-form-fields";
import { bindFormSubmitGuard } from "../../lib/forms/submit-guard";
import {
  isHoneypotFilled,
  isSubmitTooSoon,
  validateLeadFormFields,
} from "../../lib/forms/validate-lead";
import {
  calculateDeskInvestment,
  calculateEnergyInvestment,
  type InvestmentSummary,
} from "../../lib/roi/investment";

const ROI_FIELD_FALLBACKS: Record<string, string> = {
  first_name_required: "Please enter your first name.",
  last_name_required: "Please enter your last name.",
  email_required: "Please enter your work email.",
  email_invalid: "Please enter a valid work email address.",
  email_personal:
    "Please use your work email. Personal addresses (Gmail, Outlook, Yahoo, etc.) are not accepted.",
  email_disposable:
    "Please use a permanent work email. Temporary or disposable addresses are not accepted.",
  phone_invalid: "Please enter a valid phone number, or leave the field empty.",
  phone_required: "A phone number is required so sales can reach you.",
};

/** Heatmap caps at this many cells; above it one cell represents N desks. */
const HEATMAP_MAX_CELLS = 200;
/** Approximate range-thumb width for aligning preset labels under the track. */
const ATTENDANCE_THUMB_PX = 18;

function initCalculator(root: HTMLElement) {
  const calculatorReadyAt = Date.now();
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let activeTab: CalculatorTab = "desk";
  let currency: Currency = "EUR";
  const deskGoals = new Set<DeskGoal>();
  let activeFacility: EnergyFacility = "office";
  /** Derived fields stop auto-syncing once the visitor edits them. */
  let employeesDirty = false;
  let peopleDirty = false;

  const emailForm = root.querySelector<HTMLFormElement>("[data-roi-email-form]");
  const emailGate = root.querySelector<HTMLElement>("[data-roi-email-gate]");
  const emailSuccess = root.querySelector<HTMLElement>("[data-roi-email-success]");
  const firstNameInput = root.querySelector<HTMLInputElement>(
    "[data-roi-first-name-input]",
  );
  const lastNameInput = root.querySelector<HTMLInputElement>(
    "[data-roi-last-name-input]",
  );
  const emailInput = root.querySelector<HTMLInputElement>("[data-roi-email-input]");
  const phoneInput = root.querySelector<HTMLInputElement>("[data-roi-phone-input]");
  const honeypotInput = root.querySelector<HTMLInputElement>("[data-roi-honeypot]");
  const emailError = root.querySelector<HTMLElement>("[data-roi-email-error]");

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

  const goalChips = root.querySelectorAll<HTMLButtonElement>("[data-roi-goal]");
  const heatmapGrid = root.querySelector<HTMLElement>("[data-roi-heatmap-grid]");
  const heatmapSuggestions = root.querySelector<HTMLElement>(
    "[data-roi-heatmap-suggestions]",
  );
  const heatmapScaleNote = root.querySelector<HTMLElement>(
    "[data-roi-heatmap-scale-note]",
  );

  const heatingBillInput = root.querySelector<HTMLInputElement>(
    "[data-roi-heating-bill]",
  );
  const sqmInput = root.querySelector<HTMLInputElement>("[data-roi-sqm]");
  const tempRange = root.querySelector<HTMLInputElement>("[data-roi-temp-range]");
  const tempDisplay = root.querySelector<HTMLElement>("[data-roi-temp-display]");

  const facilityButtons = root.querySelectorAll<HTMLButtonElement>(
    "[data-roi-facility]",
  );
  const facilitySections = root.querySelectorAll<HTMLElement>(
    "[data-roi-facility-section]",
  );
  const energyOptinRow = root.querySelector<HTMLElement>(
    "[data-roi-energy-optin-row]",
  );
  const energyModule = root.querySelector<HTMLElement>("[data-roi-energy-module]");
  const deskHeatmapWrap = root.querySelector<HTMLElement>(
    "[data-roi-desk-heatmap-wrap]",
  );
  const demoWrap = root.querySelector<HTMLElement>("[data-roi-demo-wrap]");
  const rightStack = root.querySelector<HTMLElement>("[data-roi-right-stack]");
  const emailPanel = root.querySelector<HTMLElement>("[data-roi-email-panel]");
  const emailWrap = root.querySelector<HTMLElement>("[data-roi-email-wrap]");
  const salesCta = root.querySelector<HTMLElement>("[data-roi-sales-cta]");

  const employeesInput = root.querySelector<HTMLInputElement>("[data-roi-employees]");
  const employeeCostInput = root.querySelector<HTMLInputElement>(
    "[data-roi-employee-cost]",
  );
  const roomsInput = root.querySelector<HTMLInputElement>("[data-roi-rooms]");
  const classroomsInput = root.querySelector<HTMLInputElement>(
    "[data-roi-classrooms]",
  );
  const peopleInput = root.querySelector<HTMLInputElement>("[data-roi-people]");
  const riskLevelEl = root.querySelector<HTMLElement>("[data-roi-risk-level]");
  const collectionReveal = root.querySelector<HTMLButtonElement>(
    "[data-roi-collection-reveal]",
  );
  const collectionPanel = root.querySelector<HTMLElement>(
    "[data-roi-collection-panel]",
  );
  const collectionInput = root.querySelector<HTMLInputElement>(
    "[data-roi-collection-value]",
  );

  const demoWithoutEl = root.querySelector<HTMLElement>("[data-roi-demo-without]");
  const demoWithEl = root.querySelector<HTMLElement>("[data-roi-demo-with]");
  const demoAnnualNoteEl = root.querySelector<HTMLElement>("[data-roi-demo-annual-note]");
  const demoThreeYearNetEl = root.querySelector<HTMLElement>(
    "[data-roi-demo-three-year-net]",
  );

  const disqualifyDialog = root.querySelector<HTMLDialogElement>(
    "[data-roi-disqualify-dialog]",
  );
  const disqualifyForm = root.querySelector<HTMLFormElement>(
    "[data-roi-disqualify-form]",
  );
  const disqualifyContent = root.querySelector<HTMLElement>(
    "[data-roi-disqualify-content]",
  );
  const disqualifySuccess = root.querySelector<HTMLElement>(
    "[data-roi-disqualify-success]",
  );
  const disqualifyFirstName = root.querySelector<HTMLInputElement>(
    "[data-roi-disqualify-first-name]",
  );
  const disqualifyLastName = root.querySelector<HTMLInputElement>(
    "[data-roi-disqualify-last-name]",
  );
  const disqualifyEmail = root.querySelector<HTMLInputElement>(
    "[data-roi-disqualify-email]",
  );
  const disqualifyPhone = root.querySelector<HTMLInputElement>(
    "[data-roi-disqualify-phone]",
  );
  const disqualifyError = root.querySelector<HTMLElement>(
    "[data-roi-disqualify-error]",
  );
  const disqualifyHoneypot = root.querySelector<HTMLInputElement>(
    "[data-roi-disqualify-honeypot]",
  );

  if (emailForm) {
    bindFormSubmitGuard(emailForm);
    bindAutofillFieldSync(emailForm);
  }
  if (disqualifyForm) {
    bindFormSubmitGuard(disqualifyForm);
    bindAutofillFieldSync(disqualifyForm);
  }

  const currencySymbols = root.querySelectorAll<HTMLElement>(
    "[data-roi-currency-symbol], [data-roi-currency-symbol-energy]",
  );

  let deskResults: DeskResults | null = null;
  let energyResults: EnergyResults | null = null;
  let leadUnlocked = false;
  let breakdownVisible = false;
  let savedFirstName = "";
  let savedLastName = "";
  let savedEmail = "";
  let savedPhone = "";
  let lastReport: ComparisonReport | null = null;

  function buildPayload(): LeadPayload {
    return {
      calculator: activeTab,
      firstName: savedFirstName,
      lastName: savedLastName,
      email: savedEmail,
      phone: savedPhone || undefined,
      currency,
      inputs: activeTab === "desk" ? readDeskInputs() : readEnergyInputs(),
      results:
        activeTab === "desk"
          ? (deskResults ?? calculateDesk(readDeskInputs()))
          : (energyResults ?? calculateEnergy(readEnergyInputs())),
      pageUrl: window.location.href,
    };
  }

  function readLeadFromForm() {
    return validateLeadFormFields({
      firstName: firstNameInput?.value ?? "",
      lastName: lastNameInput?.value ?? "",
      email: emailInput?.value ?? "",
      phone: phoneInput?.value ?? "",
    });
  }

  function persistLead(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
  ) {
    savedFirstName = firstName;
    savedLastName = lastName;
    savedEmail = email;
    savedPhone = phone;
    sessionStorage.setItem(
      ROI_LEAD_STORAGE_KEY,
      JSON.stringify({ firstName, lastName, email, phone }),
    );
    if (firstNameInput) firstNameInput.value = firstName;
    if (lastNameInput) lastNameInput.value = lastName;
    if (emailInput) emailInput.value = email;
    if (phoneInput) phoneInput.value = phone;
  }

  function prefillLeadFromStorage() {
    try {
      const raw = sessionStorage.getItem(ROI_LEAD_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as {
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
      };
      if (parsed.firstName && firstNameInput) firstNameInput.value = parsed.firstName;
      if (parsed.lastName && lastNameInput) lastNameInput.value = parsed.lastName;
      if (parsed.email && emailInput) emailInput.value = parsed.email;
      if (parsed.phone && phoneInput) phoneInput.value = parsed.phone;
      if (parsed.firstName) savedFirstName = parsed.firstName;
      if (parsed.lastName) savedLastName = parsed.lastName;
      if (parsed.email) savedEmail = parsed.email;
      if (parsed.phone) savedPhone = parsed.phone;
    } catch {
      /* ignore */
    }
  }

  function syncReportCache() {
    lastReport = buildComparisonReport(buildPayload());
  }

  function deliverPdfReport() {
    if (!lastReport || !savedEmail) {
      console.warn("[ROI] PDF skipped: missing report or email", {
        hasReport: !!lastReport,
        hasEmail: !!savedEmail,
      });
      return;
    }
    try {
      const payload = buildPayload();
      const meta = buildReportDisplayMeta(payload);
      const investment = computeInvestment();
      const blob = generateReportPdf(
        lastReport,
        {
          firstName: savedFirstName,
          lastName: savedLastName,
          email: savedEmail,
          phone: savedPhone || undefined,
        },
        meta,
        { investment, inputs: payload.inputs },
      );
      downloadReportPdf(blob);
    } catch (err) {
      console.error("[ROI] PDF generation failed", err);
      if (emailError) {
        emailError.textContent =
          "Sorry, we couldn't build the PDF. Open the browser console for details.";
        emailError.classList.remove("hidden");
      }
    }
  }

  function showSuccess() {
    breakdownVisible = true;
    emailGate?.classList.add("hidden");
    emailSuccess?.classList.remove("hidden");
    syncReportCache();
    syncCompletionGating();
    renderDemoPanel();
  }

  function showGate(prefillOnly = false) {
    breakdownVisible = false;
    emailGate?.classList.remove("hidden");
    emailSuccess?.classList.add("hidden");
    if (prefillOnly) {
      prefillLeadFromStorage();
    }
  }

  /** Generic yes/no toggle row state. true = "Yes". */
  function getToggle(name: string): boolean {
    const group = root.querySelector<HTMLElement>(`[data-roi-toggle="${name}"]`);
    return group?.dataset.roiToggleOn === "true";
  }

  function setToggle(name: string, on: boolean) {
    const group = root.querySelector<HTMLElement>(`[data-roi-toggle="${name}"]`);
    if (!group) return;
    group.dataset.roiToggleOn = String(on);
    group.querySelectorAll<HTMLButtonElement>(".roi-toggle-btn").forEach((btn) => {
      const val = btn.dataset.roiToggleValue === "true";
      const active = val === on;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    const hint = root.querySelector<HTMLElement>(`[data-roi-badge-${name}]`);
    if (hint) {
      // "Yes" answers are the opportunity sensors address — show the badge.
      hint.classList.toggle("hidden", !on);
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
      goals: [...deskGoals],
    };
  }

  function energyModuleActive(): boolean {
    return activeFacility === "office" || getToggle("energy-optin");
  }

  function readEnergyInputs(): EnergyInputs {
    const collectionRaw = Number(collectionInput?.value);
    return {
      facility: activeFacility,
      energyModuleActive: energyModuleActive(),
      annualBill: Number(heatingBillInput?.value ?? DEFAULTS[currency].heatingBill),
      heatsWeekends: getToggle("weekend"),
      heatsNightly: getToggle("nightly"),
      avgTempC: Number(tempRange?.value ?? ENERGY_LIMITS.defaultTemp),
      areaSqm: readEnergyAreaSqm(),
      employees:
        employeesDirty && employeesInput
          ? Math.max(1, Number(employeesInput.value) || 1)
          : undefined,
      avgEmployeeCost: Number(
        employeeCostInput?.value ?? DEFAULTS[currency].avgEmployeeCost,
      ),
      monitoredRooms: Math.max(
        1,
        Number(roomsInput?.value ?? ENERGY_LIMITS.defaultHeritageRooms) || 1,
      ),
      humiditySensitive: getToggle("humidity"),
      intermittentHeating: getToggle("intermittent"),
      needsDocumentation: getToggle("documentation"),
      collectionValue:
        Number.isFinite(collectionRaw) && collectionRaw > 0
          ? collectionRaw
          : undefined,
      heritageIncidentCost: DEFAULTS[currency].heritageIncidentCost,
      classrooms: Math.max(
        1,
        Number(classroomsInput?.value ?? ENERGY_LIMITS.defaultClassrooms) || 1,
      ),
      people:
        peopleDirty && peopleInput
          ? Math.max(1, Number(peopleInput.value) || 1)
          : undefined,
      costPerSickDay: DEFAULTS[currency].costPerSickDay,
    };
  }

  /** Returns m² either from the input or back-derived from the heating bill. */
  function readEnergyAreaSqm(): number {
    const inputVal = Number(sqmInput?.value);
    if (Number.isFinite(inputVal) && inputVal > 0) return inputVal;
    const bill = Number(heatingBillInput?.value ?? DEFAULTS[currency].heatingBill);
    const perSqm = DEFAULTS[currency].heatingPerSqm;
    if (bill > 0 && perSqm > 0) return Math.max(50, Math.round(bill / perSqm));
    return ENERGY_LIMITS.defaultSqm;
  }

  function computeInvestment(): InvestmentSummary {
    if (activeTab === "desk") {
      const inputs = readDeskInputs();
      const results = deskResults ?? calculateDesk(inputs);
      return calculateDeskInvestment({
        currentDesks: inputs.currentDesks,
        grossAnnualSavings: results.totalSavings,
        currency,
      });
    }
    const energyInputs = readEnergyInputs();
    const results = energyResults ?? calculateEnergy(energyInputs);
    return calculateEnergyInvestment({
      facility: activeFacility,
      areaSqm: energyInputs.areaSqm,
      roomCount:
        activeFacility === "heritage"
          ? energyInputs.monitoredRooms
          : energyInputs.classrooms,
      grossAnnualSavings: results.totalSavings,
      currency,
    });
  }

  function renderDemoPanel() {
    if (activeTab === "desk" && deskGoals.size === 0) return;

    const investment = computeInvestment();
    const report = buildComparisonReport(buildPayload());

    if (demoWithoutEl) {
      demoWithoutEl.textContent = formatMoney(currency, report.statusQuoAnnual);
    }
    if (demoWithEl) {
      demoWithEl.textContent = formatMoney(currency, report.optimizedAnnual);
    }
    if (demoAnnualNoteEl) {
      if (activeTab === "desk") {
        demoAnnualNoteEl.textContent =
          "Annual desk spend today vs. after right-sizing at peak attendance.";
      } else if (activeFacility === "heritage") {
        demoAnnualNoteEl.textContent =
          "Bill and risk exposure today vs. after monitoring and setbacks.";
      } else if (activeFacility === "school") {
        demoAnnualNoteEl.textContent =
          "Today's bill and sick-day cost vs. after healthier classrooms.";
      } else {
        demoAnnualNoteEl.textContent =
          "Energy bill and productivity cost today vs. after optimising climate.";
      }
    }
    if (demoThreeYearNetEl) {
      demoThreeYearNetEl.textContent = formatMoney(
        currency,
        Math.max(0, investment.threeYearNet),
      );
    }
    syncPaywallState();
  }

  function clearEmailFieldErrors() {
    if (emailForm) clearFieldErrors(emailForm);
  }

  if (emailForm) bindFieldErrorClear(emailForm);
  if (disqualifyForm) bindFieldErrorClear(disqualifyForm);

  function syncPaywallState() {
    const zone = root.querySelector<HTMLElement>("[data-roi-paywall-zone]");
    if (!zone) return;
    zone.classList.toggle("is-unlocked", leadUnlocked);
    zone.classList.toggle("is-locked", !leadUnlocked);
  }

  function isCalculatorComplete(): boolean {
    if (activeTab === "desk") {
      if (deskGoals.size === 0) return false;
      if (deskGoals.has("cut")) {
        const cost = Number(deskCostInput?.value);
        if (!Number.isFinite(cost) || cost <= 0) return false;
      }
      return true;
    }
    return true;
  }

  function syncCompletionGating() {
    const complete = isCalculatorComplete();
    if (emailWrap) {
      emailWrap.classList.toggle("hidden", !complete && !leadUnlocked);
    }
    salesCta?.classList.toggle("hidden", !complete);
    if (emailPanel) {
      emailPanel.classList.add("roi-email-paywall");
    }
  }

  function syncDeskBlocks() {
    const hasGoals = deskGoals.size > 0;
    root.querySelectorAll<HTMLElement>("[data-roi-desk-block]").forEach((block) => {
      const kind = block.dataset.roiDeskBlock;
      const visible =
        (kind === "core" && hasGoals) || (kind === "cut" && deskGoals.has("cut"));
      block.classList.toggle("is-visible", visible);
    });
  }

  function syncLayout() {
    const hasGoals = deskGoals.size > 0;
    const onDesk = activeTab === "desk";
    if (onDesk) syncDeskBlocks();
    const demoVisible = !(onDesk && !hasGoals);
    deskHeatmapWrap?.classList.toggle("hidden", !onDesk || !hasGoals);
    demoWrap?.classList.toggle("hidden", !demoVisible);
    rightStack?.classList.toggle("has-demo", demoVisible);
    syncCompletionGating();
    syncPaywallState();
  }

  /** Pixel centre of the range thumb for a given value — matches browser track geometry. */
  function rangeThumbCenterPx(range: HTMLInputElement, value: number): number {
    const min = Number(range.min);
    const max = Number(range.max);
    const span = max - min;
    const ratio = span > 0 ? (value - min) / span : 0;
    const rect = range.getBoundingClientRect();
    return rect.left + ATTENDANCE_THUMB_PX / 2 + ratio * (rect.width - ATTENDANCE_THUMB_PX);
  }

  function syncAttendanceMarks() {
    const marksContainer = root.querySelector<HTMLElement>("[data-roi-attendance-marks]");
    if (!attendanceRange || !marksContainer) return;
    const containerRect = marksContainer.getBoundingClientRect();
    if (containerRect.width <= 0) return;

    root
      .querySelectorAll<HTMLButtonElement>("[data-roi-attendance-mark]")
      .forEach((btn) => {
        const value = Number(btn.dataset.roiAttendanceMark);
        if (Number.isNaN(value)) return;
        const leftPx = rangeThumbCenterPx(attendanceRange, value) - containerRect.left;
        btn.style.left = `${leftPx}px`;
      });
  }

  function syncEnergyModuleVisibility(scrollReveal = false) {
    const show = activeFacility === "office" || getToggle("energy-optin");
    energyModule?.classList.toggle("hidden", !show);
    energyOptinRow?.classList.toggle("hidden", activeFacility === "office");
    if (scrollReveal && show && activeFacility !== "office") {
      energyModule?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "nearest",
      });
    }
  }

  function renderDesk() {
    const inputs = readDeskInputs();
    deskResults = calculateDesk(inputs);
    if (desksDisplay) desksDisplay.textContent = formatNumber(inputs.currentDesks);
    if (attendanceDisplay)
      attendanceDisplay.textContent = formatPct(inputs.peakAttendancePct);
    renderHeatmap(inputs, deskResults);
    syncAttendanceMarks();
  }

  function renderHeatmap(inputs: DeskInputs, results: DeskResults) {
    if (!heatmapGrid) return;
    if (deskGoals.size === 0) return;

    const desks = Math.max(0, inputs.currentDesks);
    const scale = Math.max(1, Math.ceil(desks / HEATMAP_MAX_CELLS));
    const totalCells = Math.max(1, Math.round(desks / scale));
    const occupiedCells = Math.min(
      totalCells,
      Math.round(results.requiredDesks / scale),
    );
    const freedCells = totalCells - occupiedCells;

    if (heatmapScaleNote) {
      heatmapScaleNote.textContent =
        scale > 1 ? `1 square ≈ ${scale} desks` : "1 square = 1 desk";
    }

    const targetRows = 5;
    const cols = Math.min(20, Math.max(10, Math.ceil(totalCells / targetRows)));
    heatmapGrid.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;

    // Zone the freed cells across the selected goals.
    const shares = partitionFreedDesks(freedCells, inputs.goals);
    const cellClasses: string[] = [];
    for (let i = 0; i < occupiedCells; i++) cellClasses.push("roi-heat-occupied");
    if (shares.length > 0) {
      for (const share of shares) {
        for (let i = 0; i < share.desks; i++) {
          cellClasses.push(`roi-heat-${share.goal}`);
        }
      }
    } else if (freedCells > 0) {
      for (let i = 0; i < freedCells; i++) cellClasses.push("roi-heat-cut");
    }
    while (cellClasses.length < totalCells) cellClasses.push("roi-heat-occupied");

    heatmapGrid.innerHTML = "";
    for (const cls of cellClasses) {
      const cell = document.createElement("div");
      cell.className = `roi-heat-cell ${cls}`;
      heatmapGrid.appendChild(cell);
    }

    // Legend rows only for selected goals.
    root
      .querySelectorAll<HTMLElement>("[data-roi-heatmap-legend]")
      .forEach((legend) => {
        const goal = legend.dataset.roiHeatmapLegend as DeskGoal;
        legend.classList.toggle("hidden", !inputs.goals.includes(goal));
      });

    if (heatmapSuggestions) {
      heatmapSuggestions.innerHTML = "";
      const suggestions = buildGoalSuggestions(currency, inputs, results);
      for (const suggestion of suggestions) {
        const li = document.createElement("li");
        li.className = "flex items-start gap-2";
        const dot = document.createElement("span");
        dot.className = `roi-heat-swatch roi-heat-${suggestion.goal} mt-1 shrink-0`;
        dot.setAttribute("aria-hidden", "true");
        const text = document.createElement("span");
        text.textContent = suggestion.text;
        li.append(dot, text);
        heatmapSuggestions.appendChild(li);
      }
      if (suggestions.length === 0 && freedCells === 0) {
        const li = document.createElement("li");
        li.className = "text-stone-300";
        li.textContent =
          "Peak attendance matches your desk count. Lower the attendance slider to free up space.";
        heatmapSuggestions.appendChild(li);
      }
    }
  }

  function renderEnergy() {
    const inputs = readEnergyInputs();
    energyResults = calculateEnergy(inputs);
    if (tempDisplay) tempDisplay.textContent = `${inputs.avgTempC}°C`;
    if (tempRange) tempRange.setAttribute("aria-valuenow", String(inputs.avgTempC));

    // Keep derived fields in sync until the visitor edits them.
    if (employeesInput && !employeesDirty) {
      employeesInput.value = String(deriveEmployeesFromArea(inputs.areaSqm));
    }
    if (peopleInput && !peopleDirty) {
      peopleInput.value = String(derivePeopleFromClassrooms(inputs.classrooms));
    }
    if (riskLevelEl) {
      const labels = { low: "Low", medium: "Medium", high: "High" } as const;
      riskLevelEl.textContent = labels[energyResults.riskLevel];
    }
  }

  function recalc() {
    renderDesk();
    renderEnergy();
    renderDemoPanel();
    syncCompletionGating();
    if (leadUnlocked && breakdownVisible) {
      syncReportCache();
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
    syncLayout();
    recalc();
  }

  function setFacility(facility: EnergyFacility) {
    activeFacility = facility;
    facilityButtons.forEach((btn) => {
      const isActive = btn.dataset.roiFacility === facility;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
    facilitySections.forEach((section) => {
      section.classList.toggle(
        "hidden",
        section.dataset.roiFacilitySection !== facility,
      );
    });
    syncEnergyModuleVisibility();
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

    if (prev !== next) {
      if (deskCostInput) deskCostInput.value = String(DEFAULTS[next].costPerDesk);
      if (heatingBillInput) {
        heatingBillInput.value = String(DEFAULTS[next].heatingBill);
      }
      if (employeeCostInput) {
        employeeCostInput.value = String(DEFAULTS[next].avgEmployeeCost);
      }
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

  // Desk goal chips — multi-select; fields appear as goals are chosen.
  goalChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const goal = chip.dataset.roiGoal as DeskGoal;
      if (!goal) return;
      if (deskGoals.has(goal)) {
        deskGoals.delete(goal);
      } else {
        deskGoals.add(goal);
      }
      goalChips.forEach((c) => {
        const active = deskGoals.has(c.dataset.roiGoal as DeskGoal);
        c.classList.toggle("is-active", active);
        c.setAttribute("aria-pressed", String(active));
      });
      syncLayout();
      recalc();
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
  attendanceRange?.addEventListener("input", () => {
    renderDesk();
    recalc();
  });
  deskCostInput?.addEventListener("change", () => {
    recalc();
  });

  root.querySelectorAll<HTMLButtonElement>("[data-roi-attendance-mark]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = Number(btn.dataset.roiAttendanceMark);
      if (!attendanceRange || Number.isNaN(value)) return;
      attendanceRange.value = String(value);
      renderDesk();
      recalc();
    });
  });
  deskCostInput?.addEventListener("input", () => renderDesk());

  // Facility selector
  facilityButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const facility = btn.dataset.roiFacility as EnergyFacility;
      if (facility) setFacility(facility);
    });
  });

  // Energy inputs
  heatingBillInput?.addEventListener("input", () => {
    renderEnergy();
    renderDemoPanel();
  });
  sqmInput?.addEventListener("input", () => {
    renderEnergy();
    renderDemoPanel();
  });
  tempRange?.addEventListener("input", () => {
    renderEnergy();
    renderDemoPanel();
  });
  employeesInput?.addEventListener("input", () => {
    employeesDirty = true;
    renderEnergy();
    renderDemoPanel();
  });
  employeeCostInput?.addEventListener("input", () => {
    renderEnergy();
    renderDemoPanel();
  });
  roomsInput?.addEventListener("input", () => {
    renderEnergy();
    renderDemoPanel();
  });
  classroomsInput?.addEventListener("input", () => {
    renderEnergy();
    renderDemoPanel();
  });
  peopleInput?.addEventListener("input", () => {
    peopleDirty = true;
    renderEnergy();
    renderDemoPanel();
  });
  collectionInput?.addEventListener("input", () => {
    renderEnergy();
    renderDemoPanel();
  });

  const clearFieldError = (el: HTMLInputElement | null) => {
    el?.addEventListener("input", () => el.classList.remove("roi-field-error"));
  };
  clearFieldError(firstNameInput);
  clearFieldError(lastNameInput);
  clearFieldError(emailInput);

  collectionReveal?.addEventListener("click", () => {
    const open = collectionPanel?.classList.toggle("hidden") === false;
    collectionReveal.setAttribute("aria-expanded", String(open));
    if (open) collectionInput?.focus();
  });

  root.querySelectorAll<HTMLElement>("[data-roi-toggle]").forEach((group) => {
    group.querySelectorAll<HTMLButtonElement>(".roi-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const on = btn.dataset.roiToggleValue === "true";
        const name = group.dataset.roiToggle;
        if (!name) return;
        setToggle(name, on);
        if (name === "energy-optin") {
          syncEnergyModuleVisibility(on);
        }
        recalc();
      });
    });
  });

  emailForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!emailForm) return;

    // Anti-spam gates (honeypot + dwell time) are temporarily disabled so
    // reports can be tested end-to-end. Re-enable both before going live.
    // if (isHoneypotFilled(honeypotInput?.value ?? "")) return;
    // if (isSubmitTooSoon(calculatorReadyAt)) { ... }
    void honeypotInput;
    void calculatorReadyAt;
    void isHoneypotFilled;
    void isSubmitTooSoon;

    clearEmailFieldErrors();
    const formFields = await readLeadFormValuesFromForm(emailForm);
    const result = validateLeadFormFields(formFields);
    if (!result.valid) {
      if (emailForm) {
        applyFieldErrors(
          emailForm,
          resolveFieldErrorMessages(result.fieldErrors, {}, ROI_FIELD_FALLBACKS),
        );
      }
      emailError?.classList.add("hidden");
      return;
    }
    emailError?.classList.add("hidden");
    persistLead(
      result.data.firstName,
      result.data.lastName,
      result.data.email,
      result.data.phone ?? "",
    );

    // Disqualification: when subscription >= savings the customer can never
    // break even — skip the negative PDF and route them to sales.
    const investment = computeInvestment();
    if (investment.disqualified) {
      openDisqualifyDialog();
      return;
    }

    leadUnlocked = true;

    const payload = buildPayload();
    await submitLead(payload);
    showSuccess();
    deliverPdfReport();
  });

  function openDisqualifyDialog() {
    if (!disqualifyDialog) return;
    disqualifyContent?.classList.remove("hidden");
    disqualifySuccess?.classList.add("hidden");
    disqualifyError?.classList.add("hidden");
    if (disqualifyFirstName) disqualifyFirstName.value = savedFirstName;
    if (disqualifyLastName) disqualifyLastName.value = savedLastName;
    if (disqualifyEmail) disqualifyEmail.value = savedEmail;
    if (disqualifyPhone) disqualifyPhone.value = savedPhone;
    if (typeof disqualifyDialog.showModal === "function") {
      disqualifyDialog.showModal();
    } else {
      disqualifyDialog.setAttribute("open", "");
    }
  }

  function closeDisqualifyDialog() {
    if (!disqualifyDialog) return;
    if (typeof disqualifyDialog.close === "function") {
      disqualifyDialog.close();
    } else {
      disqualifyDialog.removeAttribute("open");
    }
  }

  root.querySelectorAll<HTMLButtonElement>(
    "[data-roi-disqualify-close]",
  ).forEach((btn) => {
    btn.addEventListener("click", closeDisqualifyDialog);
  });

  disqualifyForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!disqualifyForm) return;

    // Anti-spam gates temporarily disabled (see emailForm handler above).
    void disqualifyHoneypot;

    const fieldErrors: Record<string, string> = {};
    const fields = await readLeadFormValuesFromForm(disqualifyForm);
    const validation = validateLeadFormFields(fields);
    const phoneRaw = fields.phone?.trim() ?? "";

    if (!validation.valid) {
      Object.assign(fieldErrors, validation.fieldErrors);
    }
    if (!phoneRaw) {
      fieldErrors.phone = "phone_required";
    }

    if (Object.keys(fieldErrors).length > 0) {
      if (disqualifyForm) {
        applyFieldErrors(
          disqualifyForm,
          resolveFieldErrorMessages(fieldErrors, {}, ROI_FIELD_FALLBACKS),
        );
      }
      disqualifyError?.classList.add("hidden");
      return;
    }
    if (!validation.valid) return;

    disqualifyError?.classList.add("hidden");

    persistLead(
      validation.data.firstName,
      validation.data.lastName,
      validation.data.email,
      validation.data.phone ?? "",
    );

    const inputs =
      activeTab === "desk" ? readDeskInputs() : readEnergyInputs();
    const results =
      activeTab === "desk"
        ? (deskResults ?? calculateDesk(readDeskInputs()))
        : (energyResults ?? calculateEnergy(readEnergyInputs()));

    const payload: ConsultRequestPayload = {
      reason: "disqualified-roi",
      calculator: activeTab,
      firstName: validation.data.firstName,
      lastName: validation.data.lastName,
      email: validation.data.email,
      phone: validation.data.phone ?? "",
      currency,
      inputs,
      results,
      pageUrl: window.location.href,
    };

    await submitConsultRequest(payload);
    disqualifyContent?.classList.add("hidden");
    disqualifySuccess?.classList.remove("hidden");
  });

  root.querySelector<HTMLButtonElement>("[data-roi-adjust-inputs]")?.addEventListener(
    "click",
    () => {
      leadUnlocked = false;
      showGate(true);
      syncCompletionGating();
      renderDemoPanel();
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
  syncLayout();
  setFacility("office");
  requestAnimationFrame(() => syncAttendanceMarks());
  window.addEventListener("resize", () => syncAttendanceMarks());
}

export function initRoiCalculators(): void {
  document.querySelectorAll<HTMLElement>("[data-roi-calculator]").forEach((root) => {
    if (root.dataset.roiCalculatorBound === "true") return;
    try {
      initCalculator(root);
      root.dataset.roiCalculatorBound = "true";
    } catch (err) {
      console.error("[roi-calculator] Failed to bind", err);
    }
  });
}
