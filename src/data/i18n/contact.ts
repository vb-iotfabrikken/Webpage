import { defaultLang, type Lang } from "../lang";

export interface ContactStrings {
  breadcrumb: { home: string; contact: string; bookDemo: string };
  eyebrow: string;
  index: {
    heroTitle: string;
    heroTitleAccent: string;
    heroLead: string;
    primaryCta: string;
    secondaryCta: string;
    formTitle: string;
    formSubtitle: string;
  };
  bookDemo: {
    heroTitle: string;
    heroTitleAccent: string;
    heroLead: string;
    formTitle: string;
    formSubtitle: string;
  };
  form: {
    eyebrow: string;
    bullets: [string, string, string];
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    emailError: string;
    disclaimer: string;
    submit: string;
  };
  /** Client-side validation messages, keyed by ValidationCode + tooSoon. */
  validation: {
    name_required: string;
    email_invalid: string;
    email_personal: string;
    email_disposable: string;
    phone_invalid: string;
    too_soon: string;
  };
}

const contactStrings: Record<Lang, ContactStrings> = {
  en: {
    breadcrumb: { home: "Home", contact: "Contact", bookDemo: "Book demo" },
    eyebrow: "Contact",
    index: {
      heroTitle: "Let's have",
      heroTitleAccent: "a chat.",
      heroLead:
        "Got questions, or just curious about our solution? We're always happy to have an expert, no-strings chat — online or in person.",
      primaryCta: "Book a free demo",
      secondaryCta: "Talk to sales",
      formTitle: "Write to us",
      formSubtitle: "Fill out the form and we'll get back to you within one business day.",
    },
    bookDemo: {
      heroTitle: "See the platform.",
      heroTitleAccent: "Ask the questions.",
      heroLead:
        "30 minutes. No commitments. We'll walk through the platform, talk about your case and give a concrete estimate for a setup.",
      formTitle: "Book a meeting",
      formSubtitle: "Fill out the form and we'll reach out to find a time that works for you.",
    },
    form: {
      eyebrow: "Get started",
      bullets: [
        "A demo of the RoomAlyzer platform",
        "A walk-through of the sensors that fit your case",
        "A price estimate and a timeline for getting started",
      ],
      name: "Name",
      company: "Company",
      email: "Work email",
      phone: "Phone",
      message: "Tell us what you're looking for",
      emailPlaceholder: "you@company.com",
      phonePlaceholder: "+45 12 34 56 78",
      emailError: "Please enter a valid work email address.",
      disclaimer:
        "By submitting you accept our privacy policy. Use your company email — personal addresses are not accepted.",
      submit: "Send",
    },
    validation: {
      name_required: "Please enter your name.",
      email_invalid: "Please enter a valid work email address.",
      email_personal:
        "Please use your work email. Personal addresses (Gmail, Outlook, Yahoo, etc.) are not accepted.",
      email_disposable:
        "Please use a permanent work email. Temporary or disposable addresses are not accepted.",
      phone_invalid: "Please enter a valid phone number, or leave the field empty.",
      too_soon: "Please wait a moment before submitting, then try again.",
    },
  },
  da: {
    breadcrumb: { home: "Hjem", contact: "Kontakt", bookDemo: "Book demo" },
    eyebrow: "Kontakt",
    index: {
      heroTitle: "Lad os tage",
      heroTitleAccent: "en snak.",
      heroLead:
        "Har du spørgsmål eller er du bare nysgerrig på vores løsning? Vi tager altid gerne en uforpligtende snak med en ekspert — online eller fysisk.",
      primaryCta: "Book en gratis demo",
      secondaryCta: "Tal med salg",
      formTitle: "Skriv til os",
      formSubtitle: "Udfyld formularen, så vender vi tilbage inden for én hverdag.",
    },
    bookDemo: {
      heroTitle: "Se platformen.",
      heroTitleAccent: "Stil spørgsmålene.",
      heroLead:
        "30 minutter. Ingen forpligtelser. Vi gennemgår platformen, taler om din case og giver et konkret estimat for en opsætning.",
      formTitle: "Book et møde",
      formSubtitle: "Udfyld formularen, så finder vi et tidspunkt, der passer dig.",
    },
    form: {
      eyebrow: "Kom i gang",
      bullets: [
        "En demo af RoomAlyzer-platformen",
        "En gennemgang af de sensorer, der passer til din case",
        "Et prisestimat og en tidsplan for at komme i gang",
      ],
      name: "Navn",
      company: "Virksomhed",
      email: "Arbejdsmail",
      phone: "Telefon",
      message: "Fortæl os, hvad du leder efter",
      emailPlaceholder: "dig@virksomhed.dk",
      phonePlaceholder: "+45 12 34 56 78",
      emailError: "Indtast en gyldig arbejdsmail.",
      disclaimer:
        "Ved at sende accepterer du vores privatlivspolitik. Brug din arbejdsmail — personlige adresser accepteres ikke.",
      submit: "Send",
    },
    validation: {
      name_required: "Indtast dit navn.",
      email_invalid: "Indtast en gyldig arbejdsmail.",
      email_personal:
        "Brug din arbejdsmail. Personlige adresser (Gmail, Outlook, Yahoo osv.) accepteres ikke.",
      email_disposable:
        "Brug en permanent arbejdsmail. Midlertidige eller engangsadresser accepteres ikke.",
      phone_invalid: "Indtast et gyldigt telefonnummer, eller lad feltet stå tomt.",
      too_soon: "Vent et øjeblik, før du sender, og prøv igen.",
    },
  },
  de: {
    breadcrumb: { home: "Startseite", contact: "Kontakt", bookDemo: "Demo buchen" },
    eyebrow: "Kontakt",
    index: {
      heroTitle: "Lassen Sie uns",
      heroTitleAccent: "reden.",
      heroLead:
        "Haben Sie Fragen oder sind Sie einfach neugierig auf unsere Lösung? Wir führen jederzeit gern ein unverbindliches Expertengespräch — online oder persönlich.",
      primaryCta: "Kostenlose Demo buchen",
      secondaryCta: "Mit dem Vertrieb sprechen",
      formTitle: "Schreiben Sie uns",
      formSubtitle: "Füllen Sie das Formular aus und wir melden uns innerhalb eines Werktags.",
    },
    bookDemo: {
      heroTitle: "Sehen Sie die Plattform.",
      heroTitleAccent: "Stellen Sie Ihre Fragen.",
      heroLead:
        "30 Minuten. Keine Verpflichtungen. Wir gehen die Plattform durch, sprechen über Ihren Anwendungsfall und geben eine konkrete Einschätzung für ein Setup.",
      formTitle: "Termin buchen",
      formSubtitle: "Füllen Sie das Formular aus und wir finden einen passenden Termin für Sie.",
    },
    form: {
      eyebrow: "Loslegen",
      bullets: [
        "Eine Demo der RoomAlyzer-Plattform",
        "Ein Überblick über die Sensoren, die zu Ihrem Anwendungsfall passen",
        "Eine Preisschätzung und ein Zeitplan für den Start",
      ],
      name: "Name",
      company: "Unternehmen",
      email: "Geschäftliche E-Mail",
      phone: "Telefon",
      message: "Sagen Sie uns, wonach Sie suchen",
      emailPlaceholder: "sie@unternehmen.de",
      phonePlaceholder: "+49 30 1234567",
      emailError: "Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.",
      disclaimer:
        "Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung. Verwenden Sie Ihre geschäftliche E-Mail — private Adressen werden nicht akzeptiert.",
      submit: "Senden",
    },
    validation: {
      name_required: "Bitte geben Sie Ihren Namen ein.",
      email_invalid: "Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.",
      email_personal:
        "Bitte verwenden Sie Ihre geschäftliche E-Mail. Private Adressen (Gmail, Outlook, Yahoo usw.) werden nicht akzeptiert.",
      email_disposable:
        "Bitte verwenden Sie eine dauerhafte geschäftliche E-Mail. Temporäre oder Wegwerf-Adressen werden nicht akzeptiert.",
      phone_invalid:
        "Bitte geben Sie eine gültige Telefonnummer ein oder lassen Sie das Feld leer.",
      too_soon:
        "Bitte warten Sie einen Moment, bevor Sie absenden, und versuchen Sie es erneut.",
    },
  },
  sv: {
    breadcrumb: { home: "Hem", contact: "Kontakt", bookDemo: "Boka demo" },
    eyebrow: "Kontakt",
    index: {
      heroTitle: "Låt oss ta",
      heroTitleAccent: "ett snack.",
      heroLead:
        "Har du frågor eller är du bara nyfiken på vår lösning? Vi tar alltid gärna ett förutsättningslöst expertsamtal — online eller på plats.",
      primaryCta: "Boka en gratis demo",
      secondaryCta: "Prata med försäljning",
      formTitle: "Skriv till oss",
      formSubtitle: "Fyll i formuläret så återkommer vi inom en arbetsdag.",
    },
    bookDemo: {
      heroTitle: "Se plattformen.",
      heroTitleAccent: "Ställ frågorna.",
      heroLead:
        "30 minuter. Inga åtaganden. Vi går igenom plattformen, pratar om ditt case och ger en konkret uppskattning för en uppsättning.",
      formTitle: "Boka ett möte",
      formSubtitle: "Fyll i formuläret så hittar vi en tid som passar dig.",
    },
    form: {
      eyebrow: "Kom igång",
      bullets: [
        "En demo av RoomAlyzer-plattformen",
        "En genomgång av de sensorer som passar ditt case",
        "En prisuppskattning och en tidsplan för att komma igång",
      ],
      name: "Namn",
      company: "Företag",
      email: "Jobbmejl",
      phone: "Telefon",
      message: "Berätta vad du letar efter",
      emailPlaceholder: "du@foretag.se",
      phonePlaceholder: "+46 8 123 456",
      emailError: "Ange en giltig jobbmejladress.",
      disclaimer:
        "Genom att skicka godkänner du vår integritetspolicy. Använd din jobbmejl — personliga adresser accepteras inte.",
      submit: "Skicka",
    },
    validation: {
      name_required: "Ange ditt namn.",
      email_invalid: "Ange en giltig jobbmejladress.",
      email_personal:
        "Använd din jobbmejl. Personliga adresser (Gmail, Outlook, Yahoo osv.) accepteras inte.",
      email_disposable:
        "Använd en permanent jobbmejl. Tillfälliga eller engångsadresser accepteras inte.",
      phone_invalid: "Ange ett giltigt telefonnummer, eller lämna fältet tomt.",
      too_soon: "Vänta en stund innan du skickar och försök igen.",
    },
  },
};

export function getContact(lang: Lang = defaultLang): ContactStrings {
  return contactStrings[lang] ?? contactStrings[defaultLang];
}
