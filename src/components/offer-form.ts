import {

  applyFieldErrors,

  bindFieldErrorClear,

  clearFieldErrors,

  resolveFieldErrorMessages,

} from "../lib/forms/field-errors";

import { bindHoneypotTouch, shouldRejectHoneypot } from "../lib/forms/honeypot";

import {

  bindAutofillFieldSync,

  readLeadFormValuesFromForm,

} from "../lib/forms/read-form-fields";

import { bindFormSubmitEligibility } from "../lib/forms/submit-eligibility";

import { bindFormSubmitGuard } from "../lib/forms/submit-guard";

import {

  isSubmitTooSoon,

  validateLeadFormFields,

} from "../lib/forms/validate-lead";

import { submitLeadToZoho } from "../lib/forms/zoho";

import { pushEnhancedConversionEmail } from "../lib/analytics/enhanced-conversions";

import {

  bindFormStartTracking,

  trackFormError,

  trackGenerateLead,

} from "../lib/analytics/form-tracking";



function readMessages(form: HTMLFormElement): Record<string, string> {

  try {

    return JSON.parse(form.dataset.offerMessages ?? "{}") as Record<string, string>;

  } catch {

    return {};

  }

}



const FIELD_FALLBACKS: Record<string, string> = {

  first_name_required: "Please enter your first name.",

  last_name_required: "Please enter your last name.",

  email_required: "Please enter your work email.",

  email_invalid: "Please enter a valid work email address.",

  email_personal:

    "Please use your work email. Personal addresses (Gmail, Outlook, Yahoo, etc.) are not accepted.",

  email_disposable:

    "Please use a permanent work email. Temporary or disposable addresses are not accepted.",

  phone_invalid: "Please enter a valid phone number, or leave the field empty.",

  company_required: "Please enter your company name.",

  consent_required: "Please accept the privacy policy to continue.",

};



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

  bindFormSubmitGuard(form);

  const getSubmitReadyAt = bindFormSubmitEligibility(form);

  const messages = readMessages(form);

  const honeypot = form.querySelector<HTMLInputElement>("[data-offer-honeypot]");

  const errorEl = form.querySelector<HTMLElement>("[data-offer-error]");

  const companyInput = form.querySelector<HTMLInputElement>('[name="company"]');

  const consentInput = form.querySelector<HTMLInputElement>("[data-offer-consent]");

  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  const successEl = form.parentElement?.querySelector<HTMLElement>("[data-offer-success]");

  const submitLabel = submitBtn?.textContent?.trim() ?? "Get an offer";



  bindFieldErrorClear(form);

  bindAutofillFieldSync(form);

  bindHoneypotTouch(honeypot);

  bindFormStartTracking(form);



  const showFormError = (text: string) => {

    clearFieldErrors(form);

    if (errorEl) errorEl.textContent = text;

    errorEl?.classList.remove("hidden");

    errorEl?.scrollIntoView({ behavior: "smooth", block: "nearest" });

  };



  const hideFormError = () => {

    errorEl?.classList.add("hidden");

  };



  const resetSubmitButton = () => {

    if (!submitBtn) return;

    submitBtn.disabled = false;

    submitBtn.textContent = submitLabel;

  };



  initSensorRows(form);



  let submitting = false;

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    if (submitting) return;



    try {

      if (shouldRejectHoneypot(honeypot)) {

        return;

      }



      submitting = true;

      if (submitBtn) submitBtn.disabled = true;

      hideFormError();



      const fields = await readLeadFormValuesFromForm(form);

      const fieldErrors: Record<string, string> = {};



      const result = validateLeadFormFields(fields);



      if (!result.valid) {

        Object.assign(fieldErrors, result.fieldErrors);

      }



      if (companyInput && !companyInput.value.trim()) {

        fieldErrors.company = "company_required";

      }



      if (consentInput && !consentInput.checked) {

        fieldErrors.consent = "consent_required";

      }



      if (Object.keys(fieldErrors).length > 0) {

        applyFieldErrors(

          form,

          resolveFieldErrorMessages(fieldErrors, messages, FIELD_FALLBACKS),

        );

        trackFormError(form, "validation");

        resetSubmitButton();

        submitting = false;

        return;

      }



      if (isSubmitTooSoon(getSubmitReadyAt())) {

        showFormError(

          messages.too_soon ?? "Please wait a moment before submitting, then try again.",

        );

        trackFormError(form, "too_soon");

        resetSubmitButton();

        submitting = false;

        return;

      }



      if (!result.valid) {

        resetSubmitButton();

        submitting = false;

        return;

      }



      clearFieldErrors(form);

      if (submitBtn) submitBtn.textContent = messages.sending ?? "Sending…";



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

      trackGenerateLead(form, "Website - Get offer");

      void pushEnhancedConversionEmail(result.data.email);

      form.hidden = true;

      if (successEl) {

        successEl.hidden = false;

        successEl.scrollIntoView({ behavior: "smooth", block: "nearest" });

      }

    } catch {

      trackFormError(form, "submit");

      showFormError(

        messages.submit_error ??

          "Something went wrong sending your message. Please try again.",

      );

      resetSubmitButton();

      submitting = false;

    }

  });

}



export function initOfferForms(): void {

  document.querySelectorAll<HTMLFormElement>("[data-offer-form]").forEach((form) => {

    if (form.dataset.leadFormBound === "true") return;

    try {

      initOfferForm(form);

      form.dataset.leadFormBound = "true";

    } catch (err) {

      console.error("[offer-form] Failed to bind form", err);

    }

  });

}


