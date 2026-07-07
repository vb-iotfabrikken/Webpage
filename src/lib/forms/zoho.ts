import {
  ZOHO_COMPANY_FALLBACK,
  ZOHO_FIELDS,
  ZOHO_RETURN_URL,
  ZOHO_TOKENS,
  ZOHO_WEBTOLEAD_ENDPOINT,
  type ZohoLeadSource,
} from "../../data/zoho";
import { enrichZohoDescription } from "../analytics/zoho-bridge";

/** Lead fields collected from any of the site's forms. */
export type ZohoLeadFields = {
  firstName?: string;
  lastName: string;
  email: string;
  phone?: string;
  /** Zoho's Company field is mandatory; a fallback is sent when empty. */
  company?: string;
  /** Free-text notes (message, ROI snapshot, etc.). */
  description?: string;
};

/** Name of the reusable hidden iframe that absorbs Zoho's response. */
const SINK_NAME = "zoho-weblead-sink";

/**
 * Optimistic timeout: Zoho's response is cross-origin so we cannot read it. We
 * resolve on the iframe `load` event, and fall back to this timeout so the UI
 * never hangs if the event is missed.
 */
const SUBMIT_TIMEOUT_MS = 6_000;

/**
 * Whether real Zoho tokens have been pasted in. Until then we refuse to submit
 * so forms surface an error instead of a false "Thanks" while silently dropping
 * the lead.
 */
function tokensConfigured(): boolean {
  return (
    !ZOHO_TOKENS.xnQsjsdp.startsWith("REPLACE_WITH_") &&
    !ZOHO_TOKENS.xmIwtLD.startsWith("REPLACE_WITH_")
  );
}

/** Create the hidden iframe sink once and reuse it for every submit. */
function ensureSink(): HTMLIFrameElement {
  const existing = document.querySelector<HTMLIFrameElement>(
    `iframe[name="${SINK_NAME}"]`,
  );
  if (existing) return existing;

  const iframe = document.createElement("iframe");
  iframe.name = SINK_NAME;
  iframe.setAttribute("aria-hidden", "true");
  iframe.tabIndex = -1;
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  return iframe;
}

function addHidden(form: HTMLFormElement, name: string, value: string): void {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  input.value = value;
  form.appendChild(input);
}

/**
 * Post a lead to Zoho CRM via the Web-to-Lead endpoint.
 *
 * Builds a detached form (tokens + mapped fields), submits it into a hidden
 * iframe so the page never navigates, and resolves once Zoho responds (or after
 * a short timeout). The source is recorded as a prefix on the Description.
 *
 * Rejects if the Zoho tokens are still placeholders, so callers show their error
 * state instead of a false success.
 */
export function submitLeadToZoho(
  fields: ZohoLeadFields,
  source: ZohoLeadSource,
): Promise<void> {
  if (!tokensConfigured()) {
    return Promise.reject(
      new Error("Zoho web form tokens are not configured."),
    );
  }

  const sink = ensureSink();

  const form = document.createElement("form");
  form.method = "POST";
  form.action = ZOHO_WEBTOLEAD_ENDPOINT;
  form.target = SINK_NAME;
  form.acceptCharset = "UTF-8";
  form.style.display = "none";

  addHidden(form, "xnQsjsdp", ZOHO_TOKENS.xnQsjsdp);
  addHidden(form, "xmIwtLD", ZOHO_TOKENS.xmIwtLD);
  addHidden(form, "actionType", ZOHO_TOKENS.actionType);
  addHidden(form, "returnURL", ZOHO_RETURN_URL);

  const lastName = fields.lastName.trim() || fields.email.trim();
  addHidden(form, ZOHO_FIELDS.lastName, lastName);
  addHidden(form, ZOHO_FIELDS.email, fields.email.trim());
  addHidden(
    form,
    ZOHO_FIELDS.company,
    fields.company?.trim() || ZOHO_COMPANY_FALLBACK,
  );

  if (fields.firstName?.trim()) {
    addHidden(form, ZOHO_FIELDS.firstName, fields.firstName.trim());
  }
  if (fields.phone?.trim()) {
    addHidden(form, ZOHO_FIELDS.phone, fields.phone.trim());
  }

  const description = enrichZohoDescription(fields.description?.trim(), source);
  addHidden(form, ZOHO_FIELDS.description, description);

  document.body.appendChild(form);

  return new Promise<void>((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      sink.removeEventListener("load", finish);
      form.remove();
      resolve();
    };

    const timer = window.setTimeout(finish, SUBMIT_TIMEOUT_MS);
    sink.addEventListener("load", finish);
    form.submit();
  });
}
