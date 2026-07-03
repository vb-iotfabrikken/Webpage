import { FORM_MIN_SUBMIT_MS } from "./constants";

/** Consumer / personal email domains — work leads should use a company domain. */
const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.dk",
  "hotmail.com",
  "hotmail.co.uk",
  "hotmail.dk",
  "outlook.com",
  "outlook.dk",
  "live.com",
  "live.dk",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "pm.me",
  "mail.com",
  "gmx.com",
  "gmx.net",
  "web.de",
  "yandex.com",
  "yandex.ru",
  "mail.ru",
  "inbox.ru",
  "list.ru",
  "bk.ru",
  "tutanota.com",
  "tuta.io",
  "fastmail.com",
  "zoho.com",
  "qq.com",
  "163.com",
  "126.com",
  "foxmail.com",
  "hey.com",
  "rocketmail.com",
  "ymail.com",
]);

/** Disposable / one-time inbox providers. */
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com",
  "mailinator.net",
  "mailinator2.com",
  "guerrillamail.com",
  "guerrillamail.biz",
  "guerrillamail.de",
  "guerrillamail.net",
  "guerrillamail.org",
  "guerrillamailblock.com",
  "grr.la",
  "sharklasers.com",
  "10minutemail.com",
  "10minutemail.net",
  "10minmail.com",
  "tempmail.com",
  "temp-mail.org",
  "temp-mail.io",
  "throwaway.email",
  "throwawaymail.com",
  "yopmail.com",
  "yopmail.fr",
  "getnada.com",
  "maildrop.cc",
  "trashmail.com",
  "trashmail.me",
  "trashmail.net",
  "dispostable.com",
  "mailnesia.com",
  "mintemail.com",
  "fakeinbox.com",
  "spamgourmet.com",
  "mailcatch.com",
  "mytemp.email",
  "emailondeck.com",
  "getairmail.com",
  "mail.tm",
  "moakt.com",
  "dropmail.me",
  "inboxkitten.com",
  "tempail.com",
  "burnermail.io",
]);

const EMAIL_FORMAT = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_DIGIT = /[0-9]/g;
const MIN_PHONE_DIGITS = 6;
const MAX_PHONE_DIGITS = 20;

export type LeadFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
};

export type ContactFormFields = {
  name: string;
  email: string;
  phone?: string;
};

/** Stable identifiers for validation failures, so the UI can localize them. */
export type ValidationCode =
  | "name_required"
  | "first_name_required"
  | "last_name_required"
  | "email_required"
  | "email_invalid"
  | "email_personal"
  | "email_disposable"
  | "phone_invalid"
  | "company_required"
  | "consent_required";

export type LeadFormFieldKey = "firstName" | "lastName" | "email" | "phone";

export type FormValidation<T> =
  | { valid: true; data: T }
  | { valid: false; message: string; code: ValidationCode };

export type LeadFormValidation = FormValidation<
  Required<Pick<LeadFormFields, "firstName" | "lastName" | "email">> & {
    phone?: string;
  }
>;

export type ContactFormValidation = FormValidation<{
  name: string;
  email: string;
  phone?: string;
}>;

function emailDomain(email: string): string | null {
  const at = email.lastIndexOf("@");
  if (at < 0) return null;
  return email.slice(at + 1).toLowerCase();
}

function matchesDomainSet(domain: string, blocked: Set<string>): boolean {
  if (blocked.has(domain)) return true;
  for (const entry of blocked) {
    if (domain.endsWith(`.${entry}`)) return true;
  }
  return false;
}

export function isPersonalEmailDomain(email: string): boolean {
  const domain = emailDomain(email);
  if (!domain) return true;
  return matchesDomainSet(domain, PERSONAL_EMAIL_DOMAINS);
}

export function isDisposableEmailDomain(email: string): boolean {
  const domain = emailDomain(email);
  if (!domain) return false;
  return matchesDomainSet(domain, DISPOSABLE_EMAIL_DOMAINS);
}

export function isWorkEmail(email: string): boolean {
  const trimmed = email.trim().toLowerCase();
  if (!EMAIL_FORMAT.test(trimmed)) return false;
  if (isPersonalEmailDomain(trimmed)) return false;
  if (isDisposableEmailDomain(trimmed)) return false;
  return true;
}

export function normalisePhone(raw: string): string {
  return raw.replace(/[^\d+\s-]/g, "").trim();
}

export function isValidPhone(raw: string): boolean {
  if (!raw) return true;
  const digits = raw.match(PHONE_DIGIT);
  if (!digits) return false;
  return digits.length >= MIN_PHONE_DIGITS && digits.length <= MAX_PHONE_DIGITS;
}

function validateWorkEmail(
  email: string,
):
  | { valid: true; email: string }
  | { valid: false; message: string; code: ValidationCode } {
  const normalised = email.trim().toLowerCase();

  if (!EMAIL_FORMAT.test(normalised)) {
    return {
      valid: false,
      code: "email_invalid",
      message: "Please enter a valid work email address.",
    };
  }

  if (isPersonalEmailDomain(normalised)) {
    return {
      valid: false,
      code: "email_personal",
      message:
        "Please use your work email. Personal addresses (Gmail, Outlook, Yahoo, etc.) are not accepted.",
    };
  }

  if (isDisposableEmailDomain(normalised)) {
    return {
      valid: false,
      code: "email_disposable",
      message:
        "Please use a permanent work email. Temporary or disposable addresses are not accepted.",
    };
  }

  return { valid: true, email: normalised };
}

export function collectLeadFormFieldErrors(
  input: LeadFormFields,
): Partial<Record<LeadFormFieldKey, ValidationCode>> {
  const errors: Partial<Record<LeadFormFieldKey, ValidationCode>> = {};
  const firstName = input.firstName.trim();
  const lastName = input.lastName.trim();
  const email = input.email.trim();
  const phoneRaw = (input.phone ?? "").trim();

  if (!firstName) errors.firstName = "first_name_required";
  if (!lastName) errors.lastName = "last_name_required";

  if (!email) {
    errors.email = "email_required";
  } else {
    const emailResult = validateWorkEmail(email);
    if (!emailResult.valid) errors.email = emailResult.code;
  }

  if (phoneRaw) {
    const phone = normalisePhone(phoneRaw);
    if (!isValidPhone(phone)) errors.phone = "phone_invalid";
  }

  return errors;
}

export type LeadFormFieldsValidation =
  | {
      valid: true;
      data: Required<Pick<LeadFormFields, "firstName" | "lastName" | "email">> & {
        phone?: string;
      };
    }
  | { valid: false; fieldErrors: Partial<Record<LeadFormFieldKey, ValidationCode>> };

export function validateLeadFormFields(input: LeadFormFields): LeadFormFieldsValidation {
  const fieldErrors = collectLeadFormFieldErrors(input);
  if (Object.keys(fieldErrors).length > 0) {
    return { valid: false, fieldErrors };
  }

  const firstName = input.firstName.trim();
  const lastName = input.lastName.trim();
  const phoneRaw = (input.phone ?? "").trim();
  const phone = phoneRaw ? normalisePhone(phoneRaw) : "";
  const emailResult = validateWorkEmail(input.email);

  if (!emailResult.valid) {
    return { valid: false, fieldErrors: { email: emailResult.code } };
  }

  return {
    valid: true,
    data: {
      firstName,
      lastName,
      email: emailResult.email,
      phone: phone || undefined,
    },
  };
}

export function validateLeadForm(input: LeadFormFields): LeadFormValidation {
  const fieldResult = validateLeadFormFields(input);
  if (!fieldResult.valid) {
    const firstCode = Object.values(fieldResult.fieldErrors)[0] ?? "name_required";
    const fallbackMessages: Record<ValidationCode, string> = {
      name_required: "Please enter your first and last name.",
      first_name_required: "Please enter your first name.",
      last_name_required: "Please enter your last name.",
      email_required: "Please enter your work email.",
      email_invalid: "Please enter a valid work email address.",
      email_personal:
        "Please use your work email. Personal addresses (Gmail, Outlook, Yahoo, etc.) are not accepted.",
      email_disposable:
        "Please use a permanent work email. Temporary or disposable addresses are not accepted.",
      phone_invalid: "Please enter a valid phone number, or leave the field empty.",
      company_required: "Please enter your company name.",
      consent_required: "Please accept the privacy policy to continue.",
    };
    return {
      valid: false,
      code: firstCode,
      message: fallbackMessages[firstCode],
    };
  }

  return { valid: true, data: fieldResult.data };
}

export function validateContactForm(
  input: ContactFormFields,
): ContactFormValidation {
  const name = input.name.trim();
  const phoneRaw = (input.phone ?? "").trim();
  const phone = phoneRaw ? normalisePhone(phoneRaw) : "";

  if (!name) {
    return {
      valid: false,
      code: "name_required",
      message: "Please enter your name.",
    };
  }

  const emailResult = validateWorkEmail(input.email);
  if (!emailResult.valid) return emailResult;

  if (phone && !isValidPhone(phone)) {
    return {
      valid: false,
      code: "phone_invalid",
      message: "Please enter a valid phone number, or leave the field empty.",
    };
  }

  return {
    valid: true,
    data: { name, email: emailResult.email, phone: phone || undefined },
  };
}

/** Honeypot filled — treat as bot; reject silently in the submit handler. */
export function isHoneypotFilled(value: string): boolean {
  return value.trim().length > 0;
}

/** Submitted before minimum dwell time — likely automated. */
export function isSubmitTooSoon(
  readyAtMs: number,
  minMs: number = FORM_MIN_SUBMIT_MS,
): boolean {
  return Date.now() - readyAtMs < minMs;
}
