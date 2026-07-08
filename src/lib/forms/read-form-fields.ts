import type { LeadFormFields } from "./validate-lead";

const REQUIRED_LEAD_INPUTS = ["firstName", "lastName", "email"] as const;

type FieldSnapshot = {
  userEmptied: boolean;
  trimmedEmpty: boolean;
};

/** Let the browser commit pending edits (notably Chrome autofill clears). */
export function commitFormControlValues(form: HTMLFormElement): void {
  const active = document.activeElement;
  if (active instanceof HTMLElement && form.contains(active)) {
    active.blur();
  }
}

function getLeadInput(form: HTMLFormElement, name: string): HTMLInputElement | null {
  return form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
}

function snapshotField(input: HTMLInputElement | null): FieldSnapshot {
  if (!input) return { userEmptied: false, trimmedEmpty: true };
  return {
    userEmptied: input.dataset.userEmptied === "true",
    trimmedEmpty: !input.value.trim(),
  };
}

function readTextValue(
  input: HTMLInputElement | HTMLTextAreaElement | null,
  snapshot?: FieldSnapshot,
): string {
  if (!input) return "";
  if (snapshot && (snapshot.userEmptied || snapshot.trimmedEmpty)) {
    input.value = "";
    return "";
  }
  const trimmed = input.value.trim();
  if (!trimmed) {
    input.value = "";
  }
  return trimmed;
}

async function waitForPaint(): Promise<void> {
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

function readLeadFieldsFromDom(
  form: HTMLFormElement,
  snapshots: Partial<Record<(typeof REQUIRED_LEAD_INPUTS)[number], FieldSnapshot>>,
  useSnapshots: boolean,
): LeadFormFields {
  const snap = (name: (typeof REQUIRED_LEAD_INPUTS)[number]) =>
    useSnapshots ? snapshots[name] : undefined;

  return {
    firstName: readTextValue(getLeadInput(form, "firstName"), snap("firstName")),
    lastName: readTextValue(getLeadInput(form, "lastName"), snap("lastName")),
    email: readTextValue(getLeadInput(form, "email"), snap("email")),
    phone: readTextValue(form.querySelector<HTMLInputElement>('[name="phone"]')),
  };
}

/** Read lead fields after blur + paint so autofill edits are committed. */
export async function readLeadFormValuesFromForm(
  form: HTMLFormElement,
): Promise<LeadFormFields> {
  const snapshots: Partial<Record<(typeof REQUIRED_LEAD_INPUTS)[number], FieldSnapshot>> = {};
  for (const name of REQUIRED_LEAD_INPUTS) {
    snapshots[name] = snapshotField(getLeadInput(form, name));
  }

  commitFormControlValues(form);
  await waitForPaint();

  let fields = readLeadFieldsFromDom(form, snapshots, true);

  // Chrome can lag behind on autofill batch fills — retry once if names look empty.
  if (!fields.firstName && !fields.lastName && !fields.email) {
    await waitForPaint();
    fields = readLeadFieldsFromDom(form, snapshots, false);
  }

  return fields;
}

/** Track autofill + manual clears so emptied required fields are detected reliably. */
export function bindAutofillFieldSync(form: HTMLFormElement): void {
  for (const name of REQUIRED_LEAD_INPUTS) {
    const input = getLeadInput(form, name);
    if (!input) continue;

    const markTouched = () => {
      input.dataset.userTouched = "true";
    };

    const syncEmptied = () => {
      input.dataset.userTouched = "true";
      if (!input.value.trim()) {
        input.value = "";
        input.dataset.userEmptied = "true";
      } else {
        delete input.dataset.userEmptied;
      }
    };

    input.addEventListener("focus", markTouched);
    input.addEventListener("input", syncEmptied);
    input.addEventListener("change", syncEmptied);
  }
}
