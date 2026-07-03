import type { LeadFormFields } from "./validate-lead";

/** Let the browser commit pending edits (notably Chrome autofill clears). */
export function commitFormControlValues(form: HTMLFormElement): void {
  const active = document.activeElement;
  if (active instanceof HTMLElement && form.contains(active)) {
    active.blur();
  }
}

function readTextValue(input: HTMLInputElement | HTMLTextAreaElement | null): string {
  if (!input) return "";
  const trimmed = input.value.trim();
  if (!trimmed) {
    input.value = "";
  }
  return trimmed;
}

function readEmailValue(input: HTMLInputElement | null): string {
  if (!input) return "";
  if (input.dataset.userCleared === "true") {
    input.value = "";
    return "";
  }
  return readTextValue(input);
}

async function waitForPaint(): Promise<void> {
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

/** Read lead fields after blur + paint so autofill edits are committed. */
export async function readLeadFormValuesFromForm(
  form: HTMLFormElement,
): Promise<LeadFormFields> {
  commitFormControlValues(form);
  await waitForPaint();

  const firstName = readTextValue(form.querySelector<HTMLInputElement>('[name="firstName"]'));
  const lastName = readTextValue(form.querySelector<HTMLInputElement>('[name="lastName"]'));
  let email = readEmailValue(form.querySelector<HTMLInputElement>('[name="email"]'));
  const phone = readTextValue(form.querySelector<HTMLInputElement>('[name="phone"]'));

  // Chrome can lag behind on autofill batch fills — retry once if names look empty.
  if (!firstName && !lastName && !email) {
    await waitForPaint();
    return {
      firstName: readTextValue(form.querySelector<HTMLInputElement>('[name="firstName"]')),
      lastName: readTextValue(form.querySelector<HTMLInputElement>('[name="lastName"]')),
      email: readEmailValue(form.querySelector<HTMLInputElement>('[name="email"]')),
      phone: readTextValue(form.querySelector<HTMLInputElement>('[name="phone"]')),
    };
  }

  return { firstName, lastName, email, phone };
}

/** Track autofill + manual clears so empty email is detected reliably. */
export function bindAutofillFieldSync(form: HTMLFormElement): void {
  form.querySelectorAll<HTMLInputElement>('input[name="email"]').forEach((emailInput) => {
    emailInput.addEventListener("focus", () => {
      emailInput.dataset.userFocused = "true";
    });

    const syncCleared = () => {
      if (emailInput.dataset.userFocused !== "true") return;
      if (!emailInput.value.trim()) {
        emailInput.value = "";
        emailInput.dataset.userCleared = "true";
      } else {
        delete emailInput.dataset.userCleared;
      }
    };

    emailInput.addEventListener("input", syncCleared);
    emailInput.addEventListener("change", syncCleared);
  });
}
