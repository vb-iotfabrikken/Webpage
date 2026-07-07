import { pushEvent } from "./events";

/** Map common CTA href paths to stable analytics IDs. */
const HREF_TO_CTA_ID: ReadonlyArray<[RegExp, string]> = [
  [/\/contact\/book-demo\/?$/i, "book_demo"],
  [/\/get-an-offer\/?$/i, "get_offer"],
  [/\/contact\/sales\/?$/i, "contact_sales"],
  [/\/contact\/become-partner\/?$/i, "become_partner"],
  [/\/contact\/support-info\/?$/i, "contact_support"],
  [/\/contact\/?$/i, "contact_hub"],
  [/\?from=pricing-enterprise/i, "pricing_enterprise"],
];

function resolveCtaId(element: HTMLElement): string | undefined {
  const explicit = element.dataset.analyticsCta;
  if (explicit) return explicit;

  const href =
    element instanceof HTMLAnchorElement
      ? element.href
      : element.closest("a")?.href;

  if (!href) return undefined;

  try {
    const url = new URL(href, window.location.origin);
    const pathAndQuery = `${url.pathname}${url.search}`;

    for (const [pattern, id] of HREF_TO_CTA_ID) {
      if (pattern.test(pathAndQuery) || pattern.test(url.pathname)) return id;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function readPageContext(): { lang?: string; page_type?: string } {
  return {
    lang: document.documentElement.lang || undefined,
    page_type: document.documentElement.dataset.analyticsPageType,
  };
}

/** Delegated click listener for `[data-analytics-cta]` and known CTA hrefs. */
export function initCtaTracking(): void {
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLElement>("a[data-analytics-cta], a[href]");
      if (!link || !(link instanceof HTMLAnchorElement)) return;

      const ctaId = resolveCtaId(link);
      if (!ctaId) return;

      const ctx = readPageContext();
      pushEvent("cta_click", {
        cta_id: ctaId,
        link_url: link.pathname + link.search,
        lang: ctx.lang,
        page_type: ctx.page_type,
      });
    },
    { capture: true },
  );
}

/** Fire content_view once when the page declares analytics content metadata. */
export function trackContentView(): void {
  const root = document.documentElement;
  const pageType = root.dataset.analyticsPageType;
  const contentId = root.dataset.analyticsContentId;

  if (!pageType) return;

  pushEvent("content_view", {
    page_type: pageType,
    content_id: contentId,
    lang: root.lang || undefined,
  });
}
