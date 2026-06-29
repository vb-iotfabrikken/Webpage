import type { ZohoLeadSource } from "../data/zoho";
import { resolveLeadSource } from "../lib/forms/lead-source";
import {
  isHoneypotFilled,
  isSubmitTooSoon,
  validateLeadForm,
} from "../lib/forms/validate-lead";
import { submitLeadToZoho } from "../lib/forms/zoho";

const DEFAULT_SOURCE: ZohoLeadSource = "Website - Contact";

/** Localized validation strings injected server-side via data-contact-messages. */
function readMessages(form: HTMLFormElement): Record<string, string> {
  try {
    return JSON.parse(form.dataset.contactMessages ?? "{}") as Record<string, string>;
  } catch {
    return {};
  }
}

function initContactForm(form: HTMLFormElement) {
  const readyAt = Date.now();
  const messages = readMessages(form);
  const honeypot = form.querySelector<HTMLInputElement>("[data-contact-honeypot]");
  const errorEl = form.querySelector<HTMLElement>("[data-contact-error]");
  const firstNameInput = form.querySelector<HTMLInputElement>('[name="firstName"]');
  const lastNameInput = form.querySelector<HTMLInputElement>('[name="lastName"]');
  const companyInput = form.querySelector<HTMLInputElement>('[name="company"]');
  const emailInput = form.querySelector<HTMLInputElement>('[name="email"]');
  const phoneInput = form.querySelector<HTMLInputElement>('[name="phone"]');
  const messageInput = form.querySelector<HTMLTextAreaElement>('[name="message"]');
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const successEl = form.parentElement?.querySelector<HTMLElement>("[data-contact-success]");

  const showError = (text: string) => {
    if (errorEl) errorEl.textContent = text;
    errorEl?.classList.remove("hidden");
  };

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

    const source = resolveLeadSource(
      (form.dataset.contactSource as ZohoLeadSource | undefined) ?? DEFAULT_SOURCE,
    );
    const message = messageInput?.value.trim();

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
          description: message || undefined,
        },
        source,
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
  .querySelectorAll<HTMLFormElement>("[data-contact-form]")
  .forEach(initContactForm);
