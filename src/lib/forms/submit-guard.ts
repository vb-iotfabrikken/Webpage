/** Prevent native navigation/reload even if later init throws. */
export function bindFormSubmitGuard(form: HTMLFormElement): void {
  form.addEventListener("submit", (e) => e.preventDefault(), { capture: true });
}
