import { pushEvent } from "./events";
import { isAnalyticsEnabled } from "./config";

const STARTED_FORMS = new WeakSet<HTMLFormElement>();

export type FormType =
  | "book_demo"
  | "contact_sales"
  | "contact_partner"
  | "contact_support"
  | "get_offer"
  | "event_contact"
  | "contact";

function resolveFormType(form: HTMLFormElement): FormType {
  const explicit = form.dataset.analyticsFormType as FormType | undefined;
  if (explicit) return explicit;

  if (form.hasAttribute("data-offer-form")) return "get_offer";
  if (form.hasAttribute("data-contact-form")) {
    const source = form.dataset.contactSource ?? "";
    const fromSource = ZOHO_SOURCE_TO_FORM_TYPE[source];
    if (fromSource) return fromSource;
    return "contact";
  }

  return "contact";
}

const ZOHO_SOURCE_TO_FORM_TYPE: Record<string, FormType> = {
  "Website - Book demo": "book_demo",
  "Website - Contact": "contact",
  "Website - Sales": "contact_sales",
  "Website - Partner": "contact_partner",
  "Website - Get offer": "get_offer",
  "Website - Pricing enterprise": "contact_sales",
  "Website - Archivistica on-site": "event_contact",
  "Website - WORKTECH26 Stockholm on-site": "event_contact",
  "Website - DHBV Verbandstag on-site": "event_contact",
  "Website - MUTEC on-site": "event_contact",
};

function readPageContext(): { lang?: string; page_type?: string } {
  const root = document.documentElement;
  return {
    lang: root.lang || undefined,
    page_type: root.dataset.analyticsPageType,
  };
}

/** Fire form_start once per form instance on first field focus. */
export function bindFormStartTracking(form: HTMLFormElement): void {
  if (!isAnalyticsEnabled()) return;
  if (STARTED_FORMS.has(form)) return;

  const onFocus = () => {
    if (STARTED_FORMS.has(form)) return;
    STARTED_FORMS.add(form);

    const ctx = readPageContext();
    pushEvent("form_start", {
      form_type: resolveFormType(form),
      lang: ctx.lang,
      page_type: ctx.page_type,
    });

    form.removeEventListener("focusin", onFocus);
  };

  form.addEventListener("focusin", onFocus);
}

export function trackFormError(form: HTMLFormElement, errorType: string): void {
  const ctx = readPageContext();
  pushEvent("form_error", {
    form_type: resolveFormType(form),
    error_type: errorType,
    lang: ctx.lang,
  });
}

export function trackGenerateLead(
  form: HTMLFormElement,
  leadSource: string,
): void {
  const ctx = readPageContext();
  pushEvent("generate_lead", {
    form_type: resolveFormType(form),
    lead_source: leadSource,
    lang: ctx.lang,
    page_type: ctx.page_type,
  });
}
