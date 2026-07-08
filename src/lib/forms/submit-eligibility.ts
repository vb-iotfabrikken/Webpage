/**
 * Anti-spam timer starts on first form interaction, not script init.
 * Returns a getter for the timestamp from which submit eligibility is measured.
 */
export function bindFormSubmitEligibility(form: HTMLFormElement): () => number {
  let readyAt = Date.now();
  let interacted = false;

  const onInteraction = () => {
    if (interacted) return;
    interacted = true;
    readyAt = Date.now();
  };

  form.addEventListener("focusin", onInteraction);
  form.addEventListener("input", onInteraction);

  return () => readyAt;
}
