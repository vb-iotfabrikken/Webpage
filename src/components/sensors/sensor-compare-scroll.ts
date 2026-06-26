/** Scroll-hint fades for the sensor compare matrix (native scrollbars handle scrolling). */
export function initSensorCompareScroll(root: HTMLElement) {
  const existingCleanup = (root as HTMLElement & { _compareScrollCleanup?: () => void })._compareScrollCleanup;
  existingCleanup?.();

  const scroller = root.querySelector<HTMLElement>("[data-compare-scroll]");
  const fadeRight = root.querySelector<HTMLElement>("[data-compare-fade-right]");
  const fadeBottom = root.querySelector<HTMLElement>("[data-compare-fade-bottom]");
  if (!scroller) return;

  function scrollRangeX() {
    return Math.max(0, scroller!.scrollWidth - scroller!.clientWidth);
  }

  function scrollRangeY() {
    return Math.max(0, scroller!.scrollHeight - scroller!.clientHeight);
  }

  function updateScrollIndicators() {
    const rangeX = scrollRangeX();
    const rangeY = scrollRangeY();
    const atRight = rangeX <= 1 || scroller!.scrollLeft >= rangeX - 1;
    const atBottom = rangeY <= 1 || scroller!.scrollTop >= rangeY - 1;

    fadeRight?.classList.toggle("is-visible", rangeX > 1 && !atRight);
    fadeBottom?.classList.toggle("is-visible", rangeY > 1 && !atBottom);
  }

  scroller.addEventListener("scroll", updateScrollIndicators, { passive: true });

  const resizeObserver = new ResizeObserver(updateScrollIndicators);
  resizeObserver.observe(scroller);
  resizeObserver.observe(root);

  const matrix = scroller.querySelector("#sensor-compare-matrix");
  if (matrix) resizeObserver.observe(matrix);

  window.addEventListener("resize", updateScrollIndicators, { passive: true });

  updateScrollIndicators();
  requestAnimationFrame(updateScrollIndicators);

  const cleanup = () => {
    resizeObserver.disconnect();
    window.removeEventListener("resize", updateScrollIndicators);
  };

  (root as HTMLElement & { _compareScrollCleanup?: () => void })._compareScrollCleanup = cleanup;
  return cleanup;
}
