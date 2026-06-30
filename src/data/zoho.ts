/**
 * Public Zoho Web-to-Lead configuration.
 *
 * None of these values are secrets — they are the same identifiers Zoho embeds
 * in a public web form's HTML. The site is statically hosted (no backend), so
 * submissions are posted straight from the browser to Zoho's Web-to-Lead
 * endpoint, the same browser-to-Zoho flow the old WordPress/Elementor site used.
 *
 * All three website forms (Get an offer, Contact sales, Book a free demo) share
 * this ONE form / token set; they only differ by the `Lead source: ...` line in
 * the Description. Do not split into multiple Zoho forms without adding multiple
 * token sets here.
 *
 * HOW TO POPULATE:
 *   Zoho CRM -> Setup -> Developer Hub -> Web Forms -> Leads module -> create
 *   a form. From the generated HTML copy the hidden token values, the `action`
 *   URL, the `actionType` value, and the exact field names, then replace the
 *   REPLACE_WITH_* placeholders below. Disable the form's reCAPTCHA (we keep the
 *   honeypot + dwell-time gate instead) so a programmatic POST is accepted.
 */

/**
 * Web-to-Lead endpoint. EU data centre for GDPR residency (Danish account).
 * Copy the exact `action` URL from the generated Leads form (expected
 * `https://crm.zoho.eu/crm/WebToLeadForm`). Other data centres swap the host
 * (crm.zoho.com US, crm.zoho.in IN, crm.zoho.com.au AU).
 */
export const ZOHO_WEBTOLEAD_ENDPOINT = "https://crm.zoho.eu/crm/WebToLeadForm";

/** Hidden form tokens, copied verbatim from the generated Zoho web form. */
export const ZOHO_TOKENS = {
  /** Encrypted form identifier (Zoho field name: `xnQsjsdp`). */
  xnQsjsdp: "6efbefda98a45779432bd8ccc5c073aa152b671740ab0fe11dfc9157df3c19fa",
  /** Secondary form token (Zoho field name: `xmIwtLD`). */
  xmIwtLD:
    "149b386108a877dbe7e64912b5ab5fb4623c6951a58ce8f3d3448a68835d738b21836c47e86ef9c2930200b100ee09ec",
  /** base64("Leads"). Copy the exact value from the generated form. */
  actionType: "TGVhZHM=",
} as const;

/**
 * Fallback URL sent as the hidden `returnURL` field. The Zoho form is set to
 * "Splash message", so Zoho ignores this and returns its splash JSON instead of
 * redirecting — and we render our own success UI regardless. We point it at the
 * site root (which always 200s) purely so the value is a valid, real URL.
 */
export const ZOHO_RETURN_URL = "https://iot-fabrikken.com/";

/**
 * Map internal field keys to the exact Zoho field names from the generated web
 * form. Verify each against the generated HTML `name` attributes. The Leads
 * module's organisation field is `Company` and it is mandatory — if this name
 * is wrong the submission is rejected. Custom fields look like `LEADCF6`.
 *
 * `leadSource` maps to the Leads module's standard Lead Source picklist; the
 * source is also written into the Description, so it is never lost even if the
 * exact picklist option does not exist.
 */
export const ZOHO_FIELDS = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  description: "Description",
  leadSource: "Lead Source",
} as const;

/**
 * Lead-source labels per form. If you map these to the Zoho "Lead Source"
 * picklist, the exact strings must already exist as picklist options, otherwise
 * Zoho ignores the value. The source is also prepended to the Description, so
 * it is never lost regardless of picklist configuration.
 */
export type ZohoLeadSource =
  | "Website - Book demo"
  | "Website - Contact"
  | "Website - Sales"
  | "Website - Partner"
  | "Website - Get offer"
  | "Website - ROI report"
  | "Website - ROI consult"
  | "Website - Archivistica on-site"
  | "Website - WORKTECH26 Stockholm on-site"
  | "Website - Pricing enterprise";

/** Fallback for Zoho's mandatory Company field when a form does not collect it. */
export const ZOHO_COMPANY_FALLBACK = "Not provided";
