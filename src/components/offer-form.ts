import {
  isHoneypotFilled,
  isSubmitTooSoon,
  validateLeadForm,
} from "../lib/forms/validate-lead";
import { submitLeadToZoho } from "../lib/forms/zoho";

function readMessages(form: HTMLFormElement): Record<string, string> {
  try {
    return JSON.parse(form.dataset.offerMessages ?? "{}") as Record<string, string>;
  } catch {
    return {};
  }
}

/** Read the selected sensor + quantity from every repeatable row. */
function readSensorRows(form: HTMLFormElement): Array<{ label: string; qty: number }> {
  const rows = form.querySelectorAll<HTMLElement>(".offer-row");
  const selected: Array<{ label: string; qty: number }> = [];

  rows.forEach((row) => {
    const sensor = row.querySelector<HTMLSelectElement>("[data-offer-sensor]")?.value.trim();
    const qty = Number.parseInt(
      row.querySelector<HTMLInputElement>("[data-offer-qty]")?.value ?? "",
      10,
    );
    if (sensor && Number.isFinite(qty) && qty > 0) {
      selected.push({ label: sensor, qty });
    }
  });

  return selected;
}

function buildDescription(form: HTMLFormElement): string {
  const wishes = form.querySelector<HTMLTextAreaElement>('[name="wishes"]')?.value.trim();
  const comment = form.querySelector<HTMLTextAreaElement>('[name="comment"]')?.value.trim();
  const quantities = readSensorRows(form);

  const parts: string[] = [];
  if (wishes) parts.push(`Wishes: ${wishes}`);
  if (quantities.length > 0) {
    parts.push(
      `Requested quantities:\n${quantities.map((row) => `- ${row.label}: ${row.qty}`).join("\n")}`,
    );
  }
  if (comment) parts.push(`Comment: ${comment}`);
  return parts.join("\n\n");
}

/**
 * Wire up the repeatable sensor rows: seed one row from the template, let the
 * "Add sensor" button append more, and remove a row when its remove button is
 * clicked (always keeping at least one row on screen).
 */
function initSensorRows(form: HTMLFormElement) {
  const template = form.querySelector<HTMLTemplateElement>("[data-offer-row-template]");
  const container = form.querySelector<HTMLElement>("[data-offer-rows]");
  const addBtn = form.querySelector<HTMLButtonElement>("[data-offer-add]");
  if (!template || !container) return;

  const addRow = () => {
    const fragment = template.content.cloneNode(true) as DocumentFragment;
    container.appendChild(fragment);
  };

  // Start with a single empty row.
  addRow();

  addBtn?.addEventListener("click", addRow);

  container.addEventListener("click", (e) => {
    const removeBtn = (e.target as HTMLElement).closest<HTMLButtonElement>(
      "[data-offer-remove]",
    );
    if (!removeBtn) return;
    const rows = container.querySelectorAll(".offer-row");
    const row = removeBtn.closest(".offer-row");
    if (rows.length > 1) {
      row?.remove();
    } else {
      // Keep the last row but clear it.
      row?.querySelectorAll<HTMLSelectElement | HTMLInputElement>(
        "[data-offer-sensor], [data-offer-qty]",
      ).forEach((el) => {
        el.value = "";
      });
    }
  });
}

function initOfferForm(form: HTMLFormElement) {
  const readyAt = Date.now();
  const messages = readMessages(form);
  const honeypot = form.querySelector<HTMLInputElement>("[data-offer-honeypot]");
  const errorEl = form.querySelector<HTMLElement>("[data-offer-error]");
  const firstNameInput = form.querySelector<HTMLInputElement>('[name="firstName"]');
  const lastNameInput = form.querySelector<HTMLInputElement>('[name="lastName"]');
  const companyInput = form.querySelector<HTMLInputElement>('[name="company"]');
  const emailInput = form.querySelector<HTMLInputElement>('[name="email"]');
  const phoneInput = form.querySelector<HTMLInputElement>('[name="phone"]');
  const consentInput = form.querySelector<HTMLInputElement>("[data-offer-consent]");
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const successEl = form.parentElement?.querySelector<HTMLElement>("[data-offer-success]");

  const showError = (text: string) => {
    if (errorEl) errorEl.textContent = text;
    errorEl?.classList.remove("hidden");
  };

  initSensorRows(form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (isHoneypotFilled(honeypot?.value ?? "")) {
      return;
    }

    if (isSubmitTooSoon(readyAt)) {
      showError(
        messages.too_soon ?? "Please wait a moment before submitting, then try again.",
      );
      return;
    }

    const result = validateLeadForm({
      firstName: firstNameInput?.value ?? "",
      lastName: lastNameInput?.value ?? "",
      email: emailInput?.value ?? "",
      phone: phoneInput?.value ?? "",
    });

    if (!result.valid) {
      showError(messages[result.code] ?? result.message);
      return;
    }

    if (companyInput && !companyInput.value.trim()) {
      showError(messages.company_required ?? "Please enter your company name.");
      return;
    }

    if (consentInput && !consentInput.checked) {
      showError(messages.consent_required ?? "Please accept the privacy policy to continue.");
      return;
    }

    errorEl?.classList.add("hidden");
    if (submitBtn) submitBtn.disabled = true;

    try {
      await submitLeadToZoho(
        {
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          email: result.data.email,
          phone: result.data.phone,
          company: companyInput?.value ?? "",
          description: buildDescription(form),
        },
        "Website - Get offer",
      );
      form.classList.add("hidden");
      successEl?.classList.remove("hidden");
    } catch {
      showError(
        messages.submit_error ??
          "Something went wrong sending your message. Please try again.",
      );
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

document
  .querySelectorAll<HTMLFormElement>("[data-offer-form]")
  .forEach(initOfferForm);
