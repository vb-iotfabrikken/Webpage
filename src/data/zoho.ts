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
 * honeypot + dwell-time gate instead) so a programmatic POST is accepted.
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
 xnQsjsdp: "387dc32cc7aed2be23cb208cac913cc2909d8acf063ca2067589f20de1ff5397",
 /** Secondary form token (Zoho field name: `xmIwtLD`). */
 xmIwtLD:
 "c7d440154e1992da67015306cae3296253073dab73a64322cc551d880611056bebe79580a9006f5a065142a41e4e6a2f",
 /** base64("Leads"). Copy the exact value from the generated form. */
 actionType: "TGVhZHM=",
} as const;

/**
 * Fallback URL sent as the hidden `returnURL` field. The Zoho form is set to
 * "Splash message", so Zoho ignores this and returns its splash JSON instead of
 * redirecting, and we render our own success UI regardless. We point it at the
 * site root (which always 200s) purely so the value is a valid, real URL.
 */
export const ZOHO_RETURN_URL = "https://iot-fabrikken.com/";

/**
 * Map internal field keys to the exact Zoho field names from the generated web
 * form. Verify each against the generated HTML `name` attributes. The Leads
 * module's organisation field is `Company` and it is mandatory — if this name
 * is wrong the submission is rejected. Custom fields look like `LEADCF6`.
 *
 * Lead source is written into Description only (the Zoho web form has no Lead
 * Source field). Re-enable `ZOHO_FIELDS.leadSource` if that field is added back.
 */
export const ZOHO_FIELDS = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  description: "Description",
} as const;

/**
 * Lead-source labels per form. Written into the Zoho Description field as
 * `Lead source: …` — the web form has no Lead Source picklist field for now.
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
  | "Website - DHBV Verbandstag on-site"
  | "Website - MUTEC on-site"
  | "Website - Pricing enterprise";

/** Fallback for Zoho's mandatory Company field when a form does not collect it. */
export const ZOHO_COMPANY_FALLBACK = "Not provided";
