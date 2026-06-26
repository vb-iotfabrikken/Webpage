import { defaultLang, type Lang } from "../lang";
import { contactReachabilityNote, contactSubmitError } from "../contact";

export interface GetOfferStrings {
  breadcrumb: { home: string; current: string };
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  contactNote: string;
  bullets: [string, string, string];
  form: {
    eyebrow: string;
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    company: string;
    wishes: string;
    productsHeading: string;
    sensorSelect: string;
    addSensor: string;
    removeSensor: string;
    quantity: string;
    comment: string;
    disclaimer: string;
    consent: string;
    submit: string;
    successTitle: string;
    successBody: string;
    emailError: string;
  };
  validation: {
    name_required: string;
    email_invalid: string;
    email_personal: string;
    email_disposable: string;
    phone_invalid: string;
    too_soon: string;
    consent_required: string;
    company_required: string;
    submit_error: string;
  };
}

const getOfferStrings: Record<Lang, GetOfferStrings> = {
  en: {
    breadcrumb: { home: "Home", current: "Get an offer" },
    heroTitle: "Get an offer.",
    heroTitleAccent: "We'll be in touch.",
    heroLead:
      "We'll get in touch as soon as we've seen your enquiry — and we're always happy to drop by, either in person or online.",
    contactNote: "",
    bullets: [
      "A tailored offer built around your case",
      "Advice on the right sensors for your rooms",
      "A fast reply — usually within one business day",
    ],
    form: {
      eyebrow: "Request a quote",
      title: "Tell us what you need",
      subtitle: "Fill out the form and we'll get back to you with a tailored offer.",
      firstName: "First name",
      lastName: "Last name",
      phone: "Telephone",
      email: "E-mail",
      company: "Company",
      wishes: "What are your wishes?",
      productsHeading: "Sensors (optional)",
      sensorSelect: "Select a sensor",
      addSensor: "Add sensor",
      removeSensor: "Remove",
      quantity: "Qty",
      comment: "Comment",
      disclaimer:
        "By submitting you accept our privacy policy. Use your company email — personal addresses are not accepted.",
      consent:
        "I agree that IoT Fabrikken may store and use my details to respond to my enquiry, in line with the privacy policy.",
      submit: "Get an offer",
      successTitle: "Thanks — we've got it.",
      successBody: "We'll be in touch as soon as we've reviewed your enquiry.",
      emailError: "Please enter a valid work email address.",
    },
    validation: {
      name_required: "Please enter your first and last name.",
      email_invalid: "Please enter a valid work email address.",
      email_personal:
        "Please use your work email. Personal addresses (Gmail, Outlook, Yahoo, etc.) are not accepted.",
      email_disposable:
        "Please use a permanent work email. Temporary or disposable addresses are not accepted.",
      phone_invalid: "Please enter a valid phone number, or leave the field empty.",
      too_soon: "Please wait a moment before submitting, then try again.",
      consent_required: "Please accept the privacy policy to continue.",
      company_required: "Please enter your company name.",
      submit_error: "",
    },
  },
  da: {
    breadcrumb: { home: "Hjem", current: "Få et tilbud" },
    heroTitle: "Få et tilbud.",
    heroTitleAccent: "Vi vender tilbage.",
    heroLead:
      "Vi vender tilbage, så snart vi har set din henvendelse — og vi kommer altid gerne forbi, enten fysisk eller online.",
    contactNote: "",
    bullets: [
      "Et skræddersyet tilbud bygget om din case",
      "Rådgivning om de rette sensorer til dine lokaler",
      "Et hurtigt svar — typisk inden for én hverdag",
    ],
    form: {
      eyebrow: "Anmod om tilbud",
      title: "Fortæl os, hvad du har brug for",
      subtitle: "Udfyld formularen, så vender vi tilbage med et skræddersyet tilbud.",
      firstName: "Fornavn",
      lastName: "Efternavn",
      phone: "Telefon",
      email: "E-mail",
      company: "Virksomhed",
      wishes: "Hvad ønsker du?",
      productsHeading: "Sensorer (valgfrit)",
      sensorSelect: "Vælg en sensor",
      addSensor: "Tilføj sensor",
      removeSensor: "Fjern",
      quantity: "Antal",
      comment: "Kommentar",
      disclaimer:
        "Ved at sende accepterer du vores privatlivspolitik. Brug din arbejdsmail — personlige adresser accepteres ikke.",
      consent:
        "Jeg accepterer, at IoT Fabrikken må gemme og bruge mine oplysninger til at besvare min henvendelse i overensstemmelse med privatlivspolitikken.",
      submit: "Få et tilbud",
      successTitle: "Tak — vi har modtaget din henvendelse.",
      successBody: "Vi vender tilbage, så snart vi har gennemgået din forespørgsel.",
      emailError: "Indtast en gyldig arbejdsmail.",
    },
    validation: {
      name_required: "Indtast dit for- og efternavn.",
      email_invalid: "Indtast en gyldig arbejdsmail.",
      email_personal:
        "Brug din arbejdsmail. Personlige adresser (Gmail, Outlook, Yahoo osv.) accepteres ikke.",
      email_disposable:
        "Brug en permanent arbejdsmail. Midlertidige eller engangsadresser accepteres ikke.",
      phone_invalid: "Indtast et gyldigt telefonnummer, eller lad feltet stå tomt.",
      too_soon: "Vent et øjeblik, før du sender, og prøv igen.",
      consent_required: "Accepter privatlivspolitikken for at fortsætte.",
      company_required: "Indtast dit virksomhedsnavn.",
      submit_error: "",
    },
  },
  de: {
    breadcrumb: { home: "Startseite", current: "Angebot anfordern" },
    heroTitle: "Angebot anfordern.",
    heroTitleAccent: "Wir melden uns.",
    heroLead:
      "Wir melden uns, sobald wir Ihre Anfrage gesehen haben — und kommen gern vorbei, persönlich oder online.",
    contactNote: "",
    bullets: [
      "Ein auf Ihren Anwendungsfall zugeschnittenes Angebot",
      "Beratung zu den passenden Sensoren für Ihre Räume",
      "Eine schnelle Rückmeldung — meist innerhalb eines Werktags",
    ],
    form: {
      eyebrow: "Angebot anfragen",
      title: "Sagen Sie uns, was Sie brauchen",
      subtitle: "Füllen Sie das Formular aus und wir melden uns mit einem passenden Angebot.",
      firstName: "Vorname",
      lastName: "Nachname",
      phone: "Telefon",
      email: "E-Mail",
      company: "Unternehmen",
      wishes: "Was wünschen Sie sich?",
      productsHeading: "Sensoren (optional)",
      sensorSelect: "Sensor auswählen",
      addSensor: "Sensor hinzufügen",
      removeSensor: "Entfernen",
      quantity: "Anz.",
      comment: "Kommentar",
      disclaimer:
        "Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung. Verwenden Sie Ihre geschäftliche E-Mail — private Adressen werden nicht akzeptiert.",
      consent:
        "Ich bin damit einverstanden, dass IoT Fabrikken meine Angaben speichert und verwendet, um meine Anfrage gemäß der Datenschutzerklärung zu beantworten.",
      submit: "Angebot anfordern",
      successTitle: "Danke — wir haben Ihre Anfrage erhalten.",
      successBody: "Wir melden uns, sobald wir Ihre Anfrage geprüft haben.",
      emailError: "Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.",
    },
    validation: {
      name_required: "Bitte geben Sie Ihren Vor- und Nachnamen ein.",
      email_invalid: "Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.",
      email_personal:
        "Bitte verwenden Sie Ihre geschäftliche E-Mail. Private Adressen (Gmail, Outlook, Yahoo usw.) werden nicht akzeptiert.",
      email_disposable:
        "Bitte verwenden Sie eine dauerhafte geschäftliche E-Mail. Temporäre oder Wegwerf-Adressen werden nicht akzeptiert.",
      phone_invalid:
        "Bitte geben Sie eine gültige Telefonnummer ein oder lassen Sie das Feld leer.",
      too_soon:
        "Bitte warten Sie einen Moment, bevor Sie absenden, und versuchen Sie es erneut.",
      consent_required:
        "Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren.",
      company_required: "Bitte geben Sie Ihren Firmennamen ein.",
      submit_error: "",
    },
  },
  sv: {
    breadcrumb: { home: "Hem", current: "Få en offert" },
    heroTitle: "Få en offert.",
    heroTitleAccent: "Vi hör av oss.",
    heroLead:
      "Vi hör av oss så snart vi har sett din förfrågan — och kommer gärna förbi, antingen på plats eller online.",
    contactNote: "",
    bullets: [
      "En skräddarsydd offert byggd kring ditt case",
      "Rådgivning om rätt sensorer för dina lokaler",
      "Ett snabbt svar — oftast inom en arbetsdag",
    ],
    form: {
      eyebrow: "Begär offert",
      title: "Berätta vad du behöver",
      subtitle: "Fyll i formuläret så återkommer vi med en skräddarsydd offert.",
      firstName: "Förnamn",
      lastName: "Efternamn",
      phone: "Telefon",
      email: "E-post",
      company: "Företag",
      wishes: "Vad önskar du?",
      productsHeading: "Sensorer (valfritt)",
      sensorSelect: "Välj en sensor",
      addSensor: "Lägg till sensor",
      removeSensor: "Ta bort",
      quantity: "Antal",
      comment: "Kommentar",
      disclaimer:
        "Genom att skicka godkänner du vår integritetspolicy. Använd din jobbmejl — personliga adresser accepteras inte.",
      consent:
        "Jag godkänner att IoT Fabrikken lagrar och använder mina uppgifter för att besvara min förfrågan i enlighet med integritetspolicyn.",
      submit: "Få en offert",
      successTitle: "Tack — vi har tagit emot din förfrågan.",
      successBody: "Vi hör av oss så snart vi har gått igenom din förfrågan.",
      emailError: "Ange en giltig jobbmejladress.",
    },
    validation: {
      name_required: "Ange ditt för- och efternamn.",
      email_invalid: "Ange en giltig jobbmejladress.",
      email_personal:
        "Använd din jobbmejl. Personliga adresser (Gmail, Outlook, Yahoo osv.) accepteras inte.",
      email_disposable:
        "Använd en permanent jobbmejl. Tillfälliga eller engångsadresser accepteras inte.",
      phone_invalid: "Ange ett giltigt telefonnummer, eller lämna fältet tomt.",
      too_soon: "Vänta en stund innan du skickar och försök igen.",
      consent_required: "Godkänn integritetspolicyn för att fortsätta.",
      company_required: "Ange ditt företagsnamn.",
      submit_error: "",
    },
  },
};

export function getGetOffer(lang: Lang = defaultLang): GetOfferStrings {
  const base = getOfferStrings[lang] ?? getOfferStrings[defaultLang];
  return {
    ...base,
    contactNote: contactReachabilityNote(lang),
    validation: {
      ...base.validation,
      submit_error: contactSubmitError(lang),
    },
  };
}
