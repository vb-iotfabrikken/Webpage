const INVALID_FIELD_CLASSES = ["border-coral-500", "ring-1", "ring-coral-500"] as const;

function fieldControl(form: HTMLFormElement, field: string): HTMLElement | null {
  return form.querySelector<HTMLElement>(
    `[name="${field}"], [data-field-control="${field}"]`,
  );
}

function showErrorEl(el: HTMLElement, message: string): void {
  el.textContent = message;
  el.classList.remove("hidden");
  el.removeAttribute("hidden");
}

function hideErrorEl(el: HTMLElement): void {
  el.textContent = "";
  el.classList.add("hidden");
}

function isErrorVisible(el: HTMLElement): boolean {
  return !el.classList.contains("hidden") && Boolean(el.textContent?.trim());
}

/** Clear all inline field errors in a form. */
export function clearFieldErrors(form: HTMLFormElement): void {
  form.querySelectorAll<HTMLElement>("[data-field-error]").forEach((el) => {
    hideErrorEl(el);
  });

  form.querySelectorAll<HTMLElement>("[data-field-control], input, textarea, select").forEach(
    (control) => {
      if (control.closest(".form-honeypot")) return;
      control.removeAttribute("aria-invalid");
      control.classList.remove(...INVALID_FIELD_CLASSES);
      if (
        control instanceof HTMLInputElement ||
        control instanceof HTMLTextAreaElement ||
        control instanceof HTMLSelectElement
      ) {
        control.classList.add("border-stone-100");
      }
    },
  );
}

/** Show one error above a field and highlight its control. */
export function showFieldError(
  form: HTMLFormElement,
  field: string,
  message: string,
): void {
  const errorEl = form.querySelector<HTMLElement>(`[data-field-error="${field}"]`);
  const control = fieldControl(form, field);

  if (errorEl) {
    showErrorEl(errorEl, message);
  }

  if (control) {
    control.setAttribute("aria-invalid", "true");
    if (control instanceof HTMLInputElement && control.type === "checkbox") {
      return;
    }
    control.classList.remove("border-stone-100");
    control.classList.add(...INVALID_FIELD_CLASSES);
  }
}

/** Apply a map of field → message; focuses the first invalid control. */
export function applyFieldErrors(
  form: HTMLFormElement,
  errors: Record<string, string>,
): void {
  clearFieldErrors(form);

  const fields = Object.keys(errors);
  for (const field of fields) {
    showFieldError(form, field, errors[field]!);
  }

  const first = fields[0];
  const firstControl = first ? fieldControl(form, first) : null;
  firstControl?.focus({ preventScroll: true });
  firstControl?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/** Resolve validation codes to localized strings. */
export function resolveFieldErrorMessages(
  errors: Record<string, string>,
  messages: Record<string, string>,
  fallbacks: Record<string, string> = {},
): Record<string, string> {
  const resolved: Record<string, string> = {};
  for (const [field, code] of Object.entries(errors)) {
    resolved[field] = messages[code] ?? fallbacks[code] ?? code;
  }
  return resolved;
}

/** Clear a field's error as the user edits it. */
export function bindFieldErrorClear(form: HTMLFormElement): void {
  const clearOne = (field: string) => {
    const errorEl = form.querySelector<HTMLElement>(`[data-field-error="${field}"]`);
    if (!errorEl || !isErrorVisible(errorEl)) return;

    hideErrorEl(errorEl);

    const control = fieldControl(form, field);
    control?.removeAttribute("aria-invalid");
    control?.classList.remove(...INVALID_FIELD_CLASSES);
    control?.classList.add("border-stone-100");
  };

  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    "input:not([type='hidden']):not([data-contact-honeypot]):not([data-offer-honeypot]):not([data-roi-honeypot]):not([data-roi-disqualify-honeypot]), textarea, select",
  ).forEach((control) => {
    const field = control.name || control.dataset.fieldControl;
    if (!field) return;

    const event = control.type === "checkbox" ? "change" : "input";
    control.addEventListener(event, () => clearOne(field));
    if (event !== "change") {
      control.addEventListener("change", () => clearOne(field));
    }
    control.addEventListener("blur", () => clearOne(field));
  });
}
