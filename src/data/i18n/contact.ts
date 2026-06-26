import { defaultLang, type Lang } from "../lang";
import { contactSubmitError } from "../contact";

export interface ContactStrings {
  breadcrumb: {
    home: string;
    contact: string;
    bookDemo: string;
    sales: string;
    partner: string;
    archivistica: string;
  };
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
  sales: {
    heroTitle: string;
    heroLead: string;
    formTitle: string;
    formSubtitle: string;
  };
  partner: {
    heroTitle: string;
    heroTitleAccent: string;
    heroLead: string;
    formTitle: string;
    formSubtitle: string;
  };
  archivistica: {
    heroTitle: string;
    heroTitleAccent: string;
    heroLead: string;
    formTitle: string;
    formSubtitle: string;
  };
  form: {
    eyebrow: string;
    bullets: [string, string, string];
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
    message: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    emailError: string;
    disclaimer: string;
    consent: string;
    submit: string;
    successTitle: string;
    successBody: string;
  };
  /** Client-side validation messages, keyed by ValidationCode + extras. */
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

const contactStrings: Record<Lang, ContactStrings> = {
  en: {
    breadcrumb: { home: "Home", contact: "Contact", bookDemo: "Book demo", sales: "Sales", partner: "Partner", archivistica: "ARCHIVISTICA" },
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
    sales: {
      heroTitle: "Talk to sales.",
      heroLead:
        "A short conversation with our sales team to understand your setup, scope and timeline.",
      formTitle: "Talk to sales",
      formSubtitle: "Fill out the form and our sales team will get back to you within one business day.",
    },
    partner: {
      heroTitle: "Become a partner.",
      heroTitleAccent: "Build on top of RoomAlyzer.",
      heroLead:
        "Resell, integrate or co-develop with IoT Fabrikken. Tell us what you have in mind.",
      formTitle: "Tell us about your partnership",
      formSubtitle: "Fill out the form and we'll get back to you within one business day.",
    },
    archivistica: {
      heroTitle: "Meet us at ARCHIVISTICA.",
      heroTitleAccent: "Reserve a stand visit.",
      heroLead:
        "Tell us when you plan to visit our stand at ARCHIVISTICA in Hof — we'll reserve time for you on site.",
      formTitle: "Reserve a stand visit",
      formSubtitle: "Fill out the form and we'll confirm a time slot at our stand.",
    },
    form: {
      eyebrow: "Get started",
      bullets: [
        "A demo of the RoomAlyzer platform",
        "A walk-through of the sensors that fit your case",
        "A price estimate and a timeline for getting started",
      ],
      firstName: "First name",
      lastName: "Last name",
      company: "Company",
      email: "Work email",
      phone: "Phone",
      message: "Tell us what you're looking for",
      emailPlaceholder: "you@company.com",
      phonePlaceholder: "+45 12 34 56 78",
      emailError: "Please enter a valid work email address.",
      disclaimer:
        "By submitting you accept our privacy policy. Use your company email — personal addresses are not accepted.",
      consent:
        "I agree that IoT Fabrikken may store and use my details to respond to my enquiry, in line with the privacy policy.",
      submit: "Send",
      successTitle: "Thanks — we've got it.",
      successBody: "We'll be in touch within one business day.",
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
    breadcrumb: { home: "Hjem", contact: "Kontakt", bookDemo: "Book demo", sales: "Salg", partner: "Partner", archivistica: "ARCHIVISTICA" },
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
    sales: {
      heroTitle: "Tal med salg.",
      heroLead:
        "En kort samtale med vores salgsteam for at forstå din opsætning, omfang og tidsplan.",
      formTitle: "Tal med salg",
      formSubtitle: "Udfyld formularen, så vender vores salgsteam tilbage inden for én hverdag.",
    },
    partner: {
      heroTitle: "Bliv partner.",
      heroTitleAccent: "Byg oven på RoomAlyzer.",
      heroLead:
        "Forhandl, integrér eller udvikl sammen med IoT Fabrikken. Fortæl os, hvad du har i tankerne.",
      formTitle: "Fortæl os om jeres partnerskab",
      formSubtitle: "Udfyld formularen, så vender vi tilbage inden for én hverdag.",
    },
    archivistica: {
      heroTitle: "Mød os på ARCHIVISTICA.",
      heroTitleAccent: "Reserver et standbesøg.",
      heroLead:
        "Fortæl os, hvornår du planlægger at besøge vores stand på ARCHIVISTICA i Hof — så reserverer vi tid til dig.",
      formTitle: "Reserver et standbesøg",
      formSubtitle: "Udfyld formularen, så bekræfter vi et tidspunkt ved vores stand.",
    },
    form: {
      eyebrow: "Kom i gang",
      bullets: [
        "En demo af RoomAlyzer-platformen",
        "En gennemgang af de sensorer, der passer til din case",
        "Et prisestimat og en tidsplan for at komme i gang",
      ],
      firstName: "Fornavn",
      lastName: "Efternavn",
      company: "Virksomhed",
      email: "Arbejdsmail",
      phone: "Telefon",
      message: "Fortæl os, hvad du leder efter",
      emailPlaceholder: "dig@virksomhed.dk",
      phonePlaceholder: "+45 12 34 56 78",
      emailError: "Indtast en gyldig arbejdsmail.",
      disclaimer:
        "Ved at sende accepterer du vores privatlivspolitik. Brug din arbejdsmail — personlige adresser accepteres ikke.",
      consent:
        "Jeg accepterer, at IoT Fabrikken må gemme og bruge mine oplysninger til at besvare min henvendelse i overensstemmelse med privatlivspolitikken.",
      submit: "Send",
      successTitle: "Tak — vi har modtaget din besked.",
      successBody: "Vi vender tilbage inden for én hverdag.",
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
    breadcrumb: { home: "Startseite", contact: "Kontakt", bookDemo: "Demo buchen", sales: "Vertrieb", partner: "Partner", archivistica: "ARCHIVISTICA" },
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
    sales: {
      heroTitle: "Mit dem Vertrieb sprechen.",
      heroLead:
        "Ein kurzes Gespräch mit unserem Vertriebsteam, um Ihr Setup, den Umfang und den Zeitplan zu verstehen.",
      formTitle: "Mit dem Vertrieb sprechen",
      formSubtitle: "Füllen Sie das Formular aus und unser Vertriebsteam meldet sich innerhalb eines Werktags.",
    },
    partner: {
      heroTitle: "Partner werden.",
      heroTitleAccent: "Bauen Sie auf RoomAlyzer auf.",
      heroLead:
        "Wiederverkaufen, integrieren oder gemeinsam entwickeln mit IoT Fabrikken. Sagen Sie uns, was Sie vorhaben.",
      formTitle: "Erzählen Sie uns von Ihrer Partnerschaft",
      formSubtitle: "Füllen Sie das Formular aus und wir melden uns innerhalb eines Werktags.",
    },
    archivistica: {
      heroTitle: "Termin am Messestand.",
      heroTitleAccent: "ARCHIVISTICA 2026 in Hof.",
      heroLead:
        "Reservieren Sie einen persönlichen Termin an unserem Stand auf der ARCHIVISTICA vom 29. September bis 1. Oktober 2026 in Hof (Saale). Wir nehmen uns Zeit für Ihre Fragen zu Bewahrung, Raumklima und Energieeinsparung.",
      formTitle: "Termin am Messestand reservieren",
      formSubtitle:
        "Sagen Sie uns, wann Sie uns auf der ARCHIVISTICA besuchen möchten — wir reservieren Zeit für Sie am Stand.",
    },
    form: {
      eyebrow: "Loslegen",
      bullets: [
        "Eine Demo der RoomAlyzer-Plattform",
        "Ein Überblick über die Sensoren, die zu Ihrem Anwendungsfall passen",
        "Eine Preisschätzung und ein Zeitplan für den Start",
      ],
      firstName: "Vorname",
      lastName: "Nachname",
      company: "Unternehmen",
      email: "Geschäftliche E-Mail",
      phone: "Telefon",
      message: "Sagen Sie uns, wonach Sie suchen",
      emailPlaceholder: "sie@unternehmen.de",
      phonePlaceholder: "+49 30 1234567",
      emailError: "Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.",
      disclaimer:
        "Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung. Verwenden Sie Ihre geschäftliche E-Mail — private Adressen werden nicht akzeptiert.",
      consent:
        "Ich bin damit einverstanden, dass IoT Fabrikken meine Angaben speichert und verwendet, um meine Anfrage gemäß der Datenschutzerklärung zu beantworten.",
      submit: "Senden",
      successTitle: "Danke — wir haben Ihre Nachricht erhalten.",
      successBody: "Wir melden uns innerhalb eines Werktags.",
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
    breadcrumb: { home: "Hem", contact: "Kontakt", bookDemo: "Boka demo", sales: "Försäljning", partner: "Partner", archivistica: "ARCHIVISTICA" },
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
    sales: {
      heroTitle: "Prata med försäljning.",
      heroLead:
        "Ett kort samtal med vårt säljteam för att förstå din uppsättning, omfattning och tidsplan.",
      formTitle: "Prata med försäljning",
      formSubtitle: "Fyll i formuläret så återkommer vårt säljteam inom en arbetsdag.",
    },
    partner: {
      heroTitle: "Bli partner.",
      heroTitleAccent: "Bygg ovanpå RoomAlyzer.",
      heroLead:
        "Återförsälj, integrera eller utveckla tillsammans med IoT Fabrikken. Berätta vad du har i åtanke.",
      formTitle: "Berätta om ert partnerskap",
      formSubtitle: "Fyll i formuläret så återkommer vi inom en arbetsdag.",
    },
    archivistica: {
      heroTitle: "Träffa oss på ARCHIVISTICA.",
      heroTitleAccent: "Boka ett standbesök.",
      heroLead:
        "Berätta när du planerar att besöka vår monter på ARCHIVISTICA i Hof — så reserverar vi tid för dig.",
      formTitle: "Boka ett standbesök",
      formSubtitle: "Fyll i formuläret så bekräftar vi en tid vid vår monter.",
    },
    form: {
      eyebrow: "Kom igång",
      bullets: [
        "En demo av RoomAlyzer-plattformen",
        "En genomgång av de sensorer som passar ditt case",
        "En prisuppskattning och en tidsplan för att komma igång",
      ],
      firstName: "Förnamn",
      lastName: "Efternamn",
      company: "Företag",
      email: "Jobbmejl",
      phone: "Telefon",
      message: "Berätta vad du letar efter",
      emailPlaceholder: "du@foretag.se",
      phonePlaceholder: "+46 8 123 456",
      emailError: "Ange en giltig jobbmejladress.",
      disclaimer:
        "Genom att skicka godkänner du vår integritetspolicy. Använd din jobbmejl — personliga adresser accepteras inte.",
      consent:
        "Jag godkänner att IoT Fabrikken lagrar och använder mina uppgifter för att besvara min förfrågan i enlighet med integritetspolicyn.",
      submit: "Skicka",
      successTitle: "Tack — vi har tagit emot ditt meddelande.",
      successBody: "Vi hör av oss inom en arbetsdag.",
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

export function getContact(lang: Lang = defaultLang): ContactStrings {
  const base = contactStrings[lang] ?? contactStrings[defaultLang];
  return {
    ...base,
    validation: {
      ...base.validation,
      submit_error: contactSubmitError(lang),
    },
  };
}
