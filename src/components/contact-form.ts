import type { ZohoLeadSource } from "../data/zoho";

import {

  applyFieldErrors,

  bindFieldErrorClear,

  clearFieldErrors,

  resolveFieldErrorMessages,

} from "../lib/forms/field-errors";

import { bindHoneypotTouch, shouldRejectHoneypot } from "../lib/forms/honeypot";

import { resolveLeadSource } from "../lib/forms/lead-source";

import {

  bindAutofillFieldSync,

  readLeadFormValuesFromForm,

} from "../lib/forms/read-form-fields";

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



const DEFAULT_SOURCE: ZohoLeadSource = "Website - Contact";



/** Localized validation strings injected server-side via data-contact-messages. */

function readMessages(form: HTMLFormElement): Record<string, string> {

  try {

    return JSON.parse(form.dataset.contactMessages ?? "{}") as Record<string, string>;

  } catch {

    return {};

  }

}



const LG_BREAKPOINT = "(min-width: 1024px)";



function syncContactFormColumnHeight(section: HTMLElement) {

  const left = section.querySelector<HTMLElement>("[data-contact-form-left]");

  const right = section.querySelector<HTMLElement>("[data-contact-form-right]");

  if (!left || !right) return;



  if (window.matchMedia(LG_BREAKPOINT).matches) {

    right.style.height = `${left.offsetHeight}px`;

  } else {

    right.style.height = "";

  }

}



function initContactFormLayout(section: HTMLElement) {

  const sync = () => syncContactFormColumnHeight(section);



  sync();

  window.addEventListener("resize", sync, { passive: true });



  const left = section.querySelector("[data-contact-form-left]");

  if (left) {

    new ResizeObserver(sync).observe(left);

  }

}



function initContactForm(form: HTMLFormElement) {

  const readyAt = Date.now();

  const messages = readMessages(form);

  const honeypot = form.querySelector<HTMLInputElement>("[data-contact-honeypot]");

  const errorEl = form.querySelector<HTMLElement>("[data-contact-error]");

  const companyInput = form.querySelector<HTMLInputElement>('[name="company"]');

  const messageInput = form.querySelector<HTMLTextAreaElement>('[name="message"]');

  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  const successEl = form.parentElement?.querySelector<HTMLElement>("[data-contact-success]");

  const submitLabel = submitBtn?.textContent?.trim() ?? "Send";



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



  form.addEventListener("submit", async (e) => {

    e.preventDefault();



    try {

      if (shouldRejectHoneypot(honeypot)) {

        return;

      }



      hideFormError();



      const fields = await readLeadFormValuesFromForm(form);

      const result = validateLeadFormFields(fields);



      if (!result.valid) {

        applyFieldErrors(

          form,

          resolveFieldErrorMessages(result.fieldErrors, messages, {

            first_name_required: "Please enter your first name.",

            last_name_required: "Please enter your last name.",

            email_required: "Please enter your work email.",

            email_invalid: "Please enter a valid work email address.",

            email_personal:

              "Please use your work email. Personal addresses (Gmail, Outlook, Yahoo, etc.) are not accepted.",

            email_disposable:

              "Please use a permanent work email. Temporary or disposable addresses are not accepted.",

            phone_invalid: "Please enter a valid phone number, or leave the field empty.",

          }),

        );

        trackFormError(form, "validation");

        return;

      }



      if (isSubmitTooSoon(readyAt)) {

        showFormError(

          messages.too_soon ?? "Please wait a moment before submitting, then try again.",

        );

        trackFormError(form, "too_soon");

        return;

      }



      const source = resolveLeadSource(

        (form.dataset.contactSource as ZohoLeadSource | undefined) ?? DEFAULT_SOURCE,

      );

      const message = messageInput?.value.trim();



      clearFieldErrors(form);

      if (submitBtn) {

        submitBtn.disabled = true;

        submitBtn.textContent = messages.sending ?? "Sending…";

      }



      await submitLeadToZoho(

        {

          firstName: result.data.firstName,

          lastName: result.data.lastName,

          email: result.data.email,

          phone: result.data.phone,

          company: companyInput?.value ?? "",

          description: message || undefined,

        },

        source,

      );

      trackGenerateLead(form, source);

      void pushEnhancedConversionEmail(result.data.email);

      form.hidden = true;

      if (successEl) successEl.hidden = false;

      const section = form.closest<HTMLElement>("[data-contact-form-layout]");

      if (section) syncContactFormColumnHeight(section);

    } catch {

      trackFormError(form, "submit");

      showFormError(

        messages.submit_error ??

          "Something went wrong sending your message. Please try again.",

      );

      resetSubmitButton();

    }

  });

}



export function initContactForms(): void {

  document.querySelectorAll<HTMLElement>("[data-contact-form-layout]").forEach((section) => {

    if (section.dataset.leadFormLayoutBound === "true") return;

    section.dataset.leadFormLayoutBound = "true";

    initContactFormLayout(section);

  });



  document.querySelectorAll<HTMLFormElement>("[data-contact-form]").forEach((form) => {

    if (form.dataset.leadFormBound === "true") return;

    initContactForm(form);

    form.dataset.leadFormBound = "true";

  });

}


