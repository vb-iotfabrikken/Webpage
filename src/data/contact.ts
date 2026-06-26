import { defaultLang, type Lang } from "./lang";

export interface LocaleContact {
  /** Display-formatted phone number */
  phone: string;
  email: string;
  /** `tel:` hyperlink target */
  telHref: string;
}

const contacts: Record<Lang, LocaleContact> = {
  en: {
    phone: "+45 71 71 80 90",
    email: "info@iot-fabrikken.com",
    telHref: "tel:+4571718090",
  },
  da: {
    phone: "+45 71 71 80 90",
    email: "info@iot-fabrikken.com",
    telHref: "tel:+4571718090",
  },
  de: {
    phone: "+49 (0) 177 1406 859",
    email: "info@iot-fabrikken.de",
    telHref: "tel:+491771406859",
  },
  sv: {
    phone: "+45 71 71 80 90",
    email: "info@iot-fabrikken.se",
    telHref: "tel:+4571718090",
  },
};

export function getLocaleContact(lang: Lang = defaultLang): LocaleContact {
  return contacts[lang] ?? contacts[defaultLang];
}

/** Default contact for SEO/schema (canonical English site). */
export const defaultContact = contacts.en;

export function contactReachabilityNote(lang: Lang): string {
  const { phone, email } = getLocaleContact(lang);
  const notes: Record<Lang, string> = {
    en: `You are always welcome to contact us on ${phone} or ${email}.`,
    da: `Du er altid velkommen til at kontakte os på ${phone} eller ${email}.`,
    de: `Sie erreichen uns jederzeit unter ${phone} oder ${email}.`,
    sv: `Du är alltid välkommen att kontakta oss på ${phone} eller ${email}.`,
  };
  return notes[lang] ?? notes.en;
}

export function contactSubmitError(lang: Lang): string {
  const { email } = getLocaleContact(lang);
  const errors: Record<Lang, string> = {
    en: `Something went wrong sending your message. Please try again, or email ${email}.`,
    da: `Noget gik galt under afsendelsen. Prøv igen, eller skriv til ${email}.`,
    de: `Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie an ${email}.`,
    sv: `Något gick fel när meddelandet skulle skickas. Försök igen, eller mejla ${email}.`,
  };
  return errors[lang] ?? errors.en;
}

const INFO_EMAIL_PATTERN = /info@iot-fabrikken\.(com|de|se)/g;

/** Substitute locale-specific sales contact details in HTML prose (e.g. legal pages). */
export function applyLocaleContactToHtml(html: string, lang: Lang): string {
  const { phone, email, telHref } = getLocaleContact(lang);
  return html
    .replace(INFO_EMAIL_PATTERN, email)
    .replace(/tel:\+4571718090/g, telHref)
    .replace(/tel:\+491771406859/g, telHref)
    .replace(/\+45 71 71 80 90/g, phone)
    .replace(/\+49 \(0\) 177 1406 859/g, phone);
}

/** Whether a value is a locale-specific general enquiry email. */
export function isLocaleContactEmail(value: string): boolean {
  return /^info@iot-fabrikken\.(com|de|se)$/.test(value);
}
