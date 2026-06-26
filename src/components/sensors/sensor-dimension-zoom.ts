/**
 * Click-to-open enlarged dimensions view (native dialog).
 */
export function initSensorDimensionZoom(): void {
  if (typeof document === "undefined") return;
  if (document.documentElement.dataset.sensorDimensionZoomInit) return;
  document.documentElement.dataset.sensorDimensionZoomInit = "true";

  document.addEventListener("click", (event) => {
    const target = event.target as Element | null;
    if (!target) return;

    const openBtn = target.closest<HTMLElement>("[data-dimension-zoom-open]");
    if (openBtn) {
      const id = openBtn.getAttribute("data-dimension-zoom-open");
      if (!id) return;
      const dialog = document.querySelector<HTMLDialogElement>(
        `dialog[data-dimension-zoom-dialog="${id}"]`,
      );
      dialog?.showModal();
      return;
    }

    const closeBtn = target.closest<HTMLElement>("[data-dimension-zoom-close]");
    if (closeBtn) {
      closeBtn.closest("dialog")?.close();
      return;
    }

    if (target instanceof HTMLDialogElement && target.matches("[data-dimension-zoom-dialog]")) {
      if (target === event.target) {
        target.close();
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openDialog = document.querySelector<HTMLDialogElement>(
      "dialog[data-dimension-zoom-dialog][open]",
    );
    openDialog?.close();
  });
}

if (typeof document !== "undefined") {
  initSensorDimensionZoom();
}
