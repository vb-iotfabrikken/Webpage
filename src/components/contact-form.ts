import {
  isHoneypotFilled,
  isSubmitTooSoon,
  validateContactForm,
} from "../lib/forms/validate-lead";

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
  const nameInput = form.querySelector<HTMLInputElement>('[name="name"]');
  const emailInput = form.querySelector<HTMLInputElement>('[name="email"]');
  const phoneInput = form.querySelector<HTMLInputElement>('[name="phone"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isHoneypotFilled(honeypot?.value ?? "")) {
      return;
    }

    if (isSubmitTooSoon(readyAt)) {
      if (errorEl) {
        errorEl.textContent =
          messages.too_soon ?? "Please wait a moment before submitting, then try again.";
      }
      errorEl?.classList.remove("hidden");
      return;
    }

    const result = validateContactForm({
      name: nameInput?.value ?? "",
      email: emailInput?.value ?? "",
      phone: phoneInput?.value ?? "",
    });

    if (!result.valid) {
      if (errorEl) errorEl.textContent = messages[result.code] ?? result.message;
      errorEl?.classList.remove("hidden");
      return;
    }

    errorEl?.classList.add("hidden");
    // Backend not wired yet — validation-only until CRM endpoint is configured.
  });
}

document
  .querySelectorAll<HTMLFormElement>("[data-contact-form]")
  .forEach(initContactForm);
