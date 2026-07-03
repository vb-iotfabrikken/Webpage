/** Mark honeypot as intentionally filled (bot / manual spam). */
export function bindHoneypotTouch(honeypot: HTMLInputElement | null): void {
  if (!honeypot) return;

  const markTouched = () => {
    honeypot.dataset.touched = "true";
  };

  honeypot.addEventListener("focus", markTouched);
  honeypot.addEventListener("input", markTouched);
}

/**
 * Returns true when the submission should be rejected as spam.
 * Clears autofill noise when the honeypot was never focused or edited.
 */
export function shouldRejectHoneypot(honeypot: HTMLInputElement | null): boolean {
  if (!honeypot || !honeypot.value.trim()) return false;

  if (honeypot.dataset.touched !== "true") {
    honeypot.value = "";
    return false;
  }

  return true;
}
