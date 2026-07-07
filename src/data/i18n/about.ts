import type { Lang } from "../lang";
import { defaultLang } from "../lang";

/** UI chrome strings for the About section pages. */
export interface AboutStrings {
  common: {
    home: string;
    about: string;
    bookDemo: string;
    contactSales: string;
    contactUs: string;
    readMore: string;
    explore: string;
    imageComingSoon: string;
  };
  placeholder: {
    noticeTitle: string;
    noticeSubtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  hub: {
    metaTitle: string;
    exploreTitle: string;
    exploreLead: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  story: {
    metaTitle: string;
    crumb: string;
    heroPrimary: string;
    heroSecondary: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  team: {
    metaTitle: string;
    metaDescription: string;
    crumb: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroLead: string;
    heroPrimary: string;
    heroSecondary: string;
    viewOpenRoles: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  careers: {
    metaTitle: string;
    crumb: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroPrimary: string;
    heroSecondary: string;
    roleSingular: string;
    rolePlural: string;
    openPositions: string;
    openPositionsIntro: string;
    readMore: string;
    noOpenings: string;
    unsolicitedHeading: string;
    unsolicitedText: string;
    sendApplication: string;
    unsolicitedSubject: string;
    applicationSubjectPrefix: string;
    applyByEmail: string;
    applyOnJobindex: string;
    aboutYou: string;
    whatWeOffer: string;
    aboutCompany: string;
    practicalDetails: string;
    allOpenRoles: string;
    contactInvitePrefix: string;
  };
  partners: {
    metaTitle: string;
    crumb: string;
    heroTitle: string;
    heroPrimary: string;
    heroSecondary: string;
    interestedHeading: string;
    interestedBody: string;
    becomePartner: string;
    viewIntegrations: string;
  };
  press: {
    metaTitle: string;
    metaDescription: string;
    crumb: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroLead: string;
    emailPress: string;
    keyFactsHeading: string;
    pressContactLabel: string;
    releasesHeading: string;
    releasesEmpty: string;
    readFullRelease: string;
    inThePress: string;
    mentionsEmpty: string;
    read: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPrimary: string;
  };
}

const en: AboutStrings = {
  common: { home: "Home", about: "About", bookDemo: "Book a free demo", contactSales: "Contact sales", contactUs: "Contact us", readMore: "Read more", explore: "Explore", imageComingSoon: "Image coming soon" },
  placeholder: {
    noticeTitle: "Content for this page is on its way",
    noticeSubtitle: "We're busy putting together content, cases and screenshots. Reach out now if you'd like to hear more.",
    ctaTitle: "Want to know more right now?",
    ctaSubtitle: "Get in touch, we're always happy to have a no-strings chat.",
  },
  hub: {
    metaTitle: "About IoT Fabrikken | IoT Fabrikken",
    exploreTitle: "Explore the company.",
    exploreLead: "Our story, the people behind the product, open roles, press resources, certification and partners.",
    ctaTitle: "Want a guided walk-through?",
    ctaSubtitle: "Book a demo and we'll tailor it to your building.",
  },
  story: {
    metaTitle: "Our story | About | IoT Fabrikken",
    crumb: "Our story",
    heroPrimary: "Meet the team",
    heroSecondary: "Contact us",
    ctaTitle: "Want to know who builds it?",
    ctaSubtitle: "Meet the leadership, engineering and customer teams behind RoomAlyzer.",
    ctaPrimary: "Meet the team",
    ctaSecondary: "See open roles",
  },
  team: {
    metaTitle: "The team | About | IoT Fabrikken",
    metaDescription: "Meet the IoT Fabrikken team, leadership, sales, engineering, customer success and operations.",
    crumb: "The team",
    heroTitle: "The team.",
    heroTitleAccent: "One product. One team.",
    heroLead: "An experienced team with a passion for space management and indoor climate, we stay close from the first demo through rollout and support.",
    heroPrimary: "See open roles",
    heroSecondary: "Contact us",
    viewOpenRoles: "View open roles",
    ctaTitle: "We are hiring.",
    ctaSubtitle: "Talented engineers, customer success and operations people, we'd love to hear from you.",
    ctaPrimary: "See open roles",
    ctaSecondary: "Contact us",
  },
  careers: {
    metaTitle: "Careers | About | IoT Fabrikken",
    crumb: "Careers",
    heroTitle: "Careers.",
    heroTitleAccent: "Join our team.",
    heroPrimary: "Meet the team",
    heroSecondary: "Contact us",
    roleSingular: "open role",
    rolePlural: "open roles",
    openPositions: "Open positions",
    openPositionsIntro: "Roles we are actively hiring for right now. Click through for the full description and how to apply.",
    readMore: "Read more",
    noOpenings: "We have no listed openings right now, but unsolicited applications are always welcome.",
    unsolicitedHeading: "Unsolicited application",
    unsolicitedText: "No listed role fits? You can apply on spec at any time, even when we have no open positions listed. Send a short introduction, what you would like to work on, and why IoT Fabrikken is the right fit.",
    sendApplication: "Send application",
    unsolicitedSubject: "Unsolicited application",
    applicationSubjectPrefix: "Application:",
    applyByEmail: "Apply by email",
    applyOnJobindex: "Apply on Jobindex",
    aboutYou: "About you",
    whatWeOffer: "What we offer",
    aboutCompany: "About IoT Fabrikken",
    practicalDetails: "Practical details",
    allOpenRoles: "All open roles",
    contactInvitePrefix: "You are also welcome to contact",
  },
  partners: {
    metaTitle: "Partners | About | IoT Fabrikken",
    crumb: "Partners",
    heroTitle: "Partners.",
    heroPrimary: "Become a partner",
    heroSecondary: "Talk to sales",
    interestedHeading: "Interested in partnering?",
    interestedBody: "We work with resellers, integrators, technology vendors and FM specialists who bring RoomAlyzer to new buildings and markets. If you have complementary products or services (or want to sell and support our sensors and platform) we would like to hear from you.",
    becomePartner: "Become a partner",
    viewIntegrations: "View integrations",
  },
  press: {
    metaTitle: "Press | About | IoT Fabrikken",
    metaDescription: "Key facts, press contact and media resources from IoT Fabrikken.",
    crumb: "Press",
    heroTitle: "Press.",
    heroTitleAccent: "Facts and contacts.",
    heroLead: "Everything you need for a story about IoT Fabrikken: key facts, press contact and our latest announcements.",
    emailPress: "Email press",
    keyFactsHeading: "Key facts",
    pressContactLabel: "Press contact",
    releasesHeading: "Press releases",
    releasesEmpty: "Press releases will be published here soon. For immediate enquiries, contact our press team above.",
    readFullRelease: "Read full release →",
    inThePress: "In the press",
    mentionsEmpty: "Summaries of media coverage will be added here soon.",
    read: "Read →",
    ctaTitle: "Writing about us?",
    ctaSubtitle: "We're happy to provide interviews, quotes, data and reference customers.",
    ctaPrimary: "Email press",
  },
};

const da: AboutStrings = {
  common: { home: "Hjem", about: "Om os", bookDemo: "Book en gratis demo", contactSales: "Kontakt salg", contactUs: "Kontakt os", readMore: "Læs mere", explore: "Udforsk", imageComingSoon: "Billede kommer snart" },
  placeholder: {
    noticeTitle: "Indhold til denne side er på vej",
    noticeSubtitle: "Vi er i gang med at samle indhold, cases og skærmbilleder. Tag fat i os allerede nu, hvis du vil høre mere.",
    ctaTitle: "Vil du vide mere allerede nu?",
    ctaSubtitle: "Kontakt os, vi tager altid gerne en uforpligtende snak.",
  },
  hub: {
    metaTitle: "Om IoT Fabrikken | IoT Fabrikken",
    exploreTitle: "Udforsk virksomheden.",
    exploreLead: "Vores historie, menneskene bag produktet, ledige stillinger, pressemateriale, certificering og partnere.",
    ctaTitle: "Vil du have en guidet gennemgang?",
    ctaSubtitle: "Book en demo, så tilpasser vi den til din bygning.",
  },
  story: {
    metaTitle: "Vores historie | Om os | IoT Fabrikken",
    crumb: "Vores historie",
    heroPrimary: "Mød teamet",
    heroSecondary: "Kontakt os",
    ctaTitle: "Vil du vide, hvem der bygger det?",
    ctaSubtitle: "Mød ledelsen, udviklingsteamet og kundeteamene bag RoomAlyzer.",
    ctaPrimary: "Mød teamet",
    ctaSecondary: "Se ledige stillinger",
  },
  team: {
    metaTitle: "Teamet | Om os | IoT Fabrikken",
    metaDescription: "Mød IoT Fabrikken-teamet, ledelse, salg, udvikling, customer success og drift.",
    crumb: "Teamet",
    heroTitle: "Teamet.",
    heroTitleAccent: "Ét produkt. Ét team.",
    heroLead: "Et erfarent team med passion for space management og indeklima — vi er tæt på fra første demo gennem udrulning og support.",
    heroPrimary: "Se ledige stillinger",
    heroSecondary: "Kontakt os",
    viewOpenRoles: "Se ledige stillinger",
    ctaTitle: "Vi søger nye kolleger.",
    ctaSubtitle: "Dygtige udviklere, customer success- og driftsfolk: vi vil meget gerne høre fra dig.",
    ctaPrimary: "Se ledige stillinger",
    ctaSecondary: "Kontakt os",
  },
  careers: {
    metaTitle: "Karriere | Om os | IoT Fabrikken",
    crumb: "Karriere",
    heroTitle: "Karriere.",
    heroTitleAccent: "Bliv en del af teamet.",
    heroPrimary: "Mød teamet",
    heroSecondary: "Kontakt os",
    roleSingular: "ledig stilling",
    rolePlural: "ledige stillinger",
    openPositions: "Ledige stillinger",
    openPositionsIntro: "Roller, vi aktivt søger lige nu. Klik ind for den fulde beskrivelse og hvordan du ansøger.",
    readMore: "Læs mere",
    noOpenings: "Vi har ingen opslåede stillinger lige nu, men uopfordrede ansøgninger er altid velkomne.",
    unsolicitedHeading: "Uopfordret ansøgning",
    unsolicitedText: "Passer ingen opslåede roller? Du kan altid sende en uopfordret ansøgning, også når vi ikke har nogen ledige stillinger opslået. Send en kort introduktion, hvad du gerne vil arbejde med, og hvorfor IoT Fabrikken er det rette match.",
    sendApplication: "Send ansøgning",
    unsolicitedSubject: "Uopfordret ansøgning",
    applicationSubjectPrefix: "Ansøgning:",
    applyByEmail: "Ansøg via e-mail",
    applyOnJobindex: "Ansøg på Jobindex",
    aboutYou: "Om dig",
    whatWeOffer: "Hvad vi tilbyder",
    aboutCompany: "Om IoT Fabrikken",
    practicalDetails: "Praktiske detaljer",
    allOpenRoles: "Alle ledige stillinger",
    contactInvitePrefix: "Du er også velkommen til at kontakte",
  },
  partners: {
    metaTitle: "Partnere | Om os | IoT Fabrikken",
    crumb: "Partnere",
    heroTitle: "Partnere.",
    heroPrimary: "Bliv partner",
    heroSecondary: "Tal med salg",
    interestedHeading: "Interesseret i et partnerskab?",
    interestedBody: "Vi samarbejder med forhandlere, integratorer, teknologileverandører og FM-specialister, der bringer RoomAlyzer ud til nye bygninger og markeder. Hvis du har komplementære produkter eller services (eller vil sælge og supportere vores sensorer og platform) vil vi gerne høre fra dig.",
    becomePartner: "Bliv partner",
    viewIntegrations: "Se integrationer",
  },
  press: {
    metaTitle: "Presse | Om os | IoT Fabrikken",
    metaDescription: "Nøglefakta, pressekontakt og medieressourcer fra IoT Fabrikken.",
    crumb: "Presse",
    heroTitle: "Presse.",
    heroTitleAccent: "Fakta og kontakter.",
    heroLead: "Alt, hvad du har brug for til en historie om IoT Fabrikken: nøglefakta, pressekontakt og vores seneste nyheder.",
    emailPress: "Skriv til pressen",
    keyFactsHeading: "Nøglefakta",
    pressContactLabel: "Pressekontakt",
    releasesHeading: "Pressemeddelelser",
    releasesEmpty: "Pressemeddelelser bliver offentliggjort her snart. For akutte henvendelser, kontakt vores presseteam ovenfor.",
    readFullRelease: "Læs hele meddelelsen →",
    inThePress: "I pressen",
    mentionsEmpty: "Resuméer af medieomtale bliver tilføjet her snart.",
    read: "Læs →",
    ctaTitle: "Skriver du om os?",
    ctaSubtitle: "Vi stiller gerne op til interviews, citater, data og referencekunder.",
    ctaPrimary: "Skriv til pressen",
  },
};

const de: AboutStrings = {
  common: { home: "Startseite", about: "Über uns", bookDemo: "Kostenlose Demo buchen", contactSales: "Vertrieb kontaktieren", contactUs: "Kontakt", readMore: "Mehr erfahren", explore: "Entdecken Sie", imageComingSoon: "Bild folgt in Kürze" },
  placeholder: {
    noticeTitle: "Inhalte für diese Seite sind in Arbeit",
    noticeSubtitle: "Wir stellen gerade Inhalte, Fallstudien und Screenshots zusammen. Melden Sie sich gern schon jetzt, wenn Sie mehr erfahren möchten.",
    ctaTitle: "Möchten Sie schon jetzt mehr erfahren?",
    ctaSubtitle: "Melden Sie sich, wir führen jederzeit gern ein unverbindliches Gespräch.",
  },
  hub: {
    metaTitle: "Über IoT Fabrikken | IoT Fabrikken",
    exploreTitle: "Entdecken Sie das Unternehmen.",
    exploreLead: "Unsere Geschichte, die Menschen hinter dem Produkt, offene Stellen, Presseressourcen, Zertifizierung und Partner.",
    ctaTitle: "Möchten Sie eine geführte Tour?",
    ctaSubtitle: "Buchen Sie eine Demo und wir passen sie an Ihr Gebäude an.",
  },
  story: {
    metaTitle: "Unsere Geschichte | Über uns | IoT Fabrikken",
    crumb: "Unsere Geschichte",
    heroPrimary: "Das Team kennenlernen",
    heroSecondary: "Kontakt",
    ctaTitle: "Möchten Sie wissen, wer es baut?",
    ctaSubtitle: "Lernen Sie die Führung, die Entwicklung und die Kundenteams hinter RoomAlyzer kennen.",
    ctaPrimary: "Das Team kennenlernen",
    ctaSecondary: "Offene Stellen ansehen",
  },
  team: {
    metaTitle: "Das Team | Über uns | IoT Fabrikken",
    metaDescription: "Lernen Sie das IoT Fabrikken-Team kennen: Führung, Vertrieb, Entwicklung, Customer Success und Betrieb.",
    crumb: "Das Team",
    heroTitle: "Das Team.",
    heroTitleAccent: "Ein Produkt. Ein Team.",
    heroLead: "Ein erfahrenes Team mit Leidenschaft für Space-Management und Indoor climate – von der ersten Demo über die Einführung bis zum laufenden Support bleiben wir eng an Ihrer Seite.",
    heroPrimary: "Offene Stellen ansehen",
    heroSecondary: "Kontakt",
    viewOpenRoles: "Offene Stellen ansehen",
    ctaTitle: "Wir stellen ein.",
    ctaSubtitle: "Talentierte Entwickler, Customer-Success- und Betriebsleute, wir würden uns freuen, von Ihnen zu hören.",
    ctaPrimary: "Offene Stellen ansehen",
    ctaSecondary: "Kontakt",
  },
  careers: {
    metaTitle: "Karriere | Über uns | IoT Fabrikken",
    crumb: "Karriere",
    heroTitle: "Karriere.",
    heroTitleAccent: "Werden Sie Teil des Teams.",
    heroPrimary: "Das Team kennenlernen",
    heroSecondary: "Kontakt",
    roleSingular: "offene Stelle",
    rolePlural: "offene Stellen",
    openPositions: "Offene Stellen",
    openPositionsIntro: "Stellen, für die wir gerade aktiv einstellen. Klicken Sie für die vollständige Beschreibung und wie Sie sich bewerben.",
    readMore: "Mehr erfahren",
    noOpenings: "Wir haben derzeit keine ausgeschriebenen Stellen: Initiativbewerbungen sind jedoch jederzeit willkommen.",
    unsolicitedHeading: "Initiativbewerbung",
    unsolicitedText: "Keine ausgeschriebene Stelle passt? Sie können sich jederzeit initiativ bewerben, auch wenn wir keine offenen Stellen ausgeschrieben haben. Senden Sie eine kurze Vorstellung, woran Sie arbeiten möchten und warum IoT Fabrikken der richtige Ort ist.",
    sendApplication: "Bewerbung senden",
    unsolicitedSubject: "Initiativbewerbung",
    applicationSubjectPrefix: "Bewerbung:",
    applyByEmail: "Per E-Mail bewerben",
    applyOnJobindex: "Auf Jobindex bewerben",
    aboutYou: "Über Sie",
    whatWeOffer: "Was wir bieten",
    aboutCompany: "Über IoT Fabrikken",
    practicalDetails: "Praktische Details",
    allOpenRoles: "Alle offenen Stellen",
    contactInvitePrefix: "Sie können sich auch gern wenden an",
  },
  partners: {
    metaTitle: "Partner | Über uns | IoT Fabrikken",
    crumb: "Partner",
    heroTitle: "Partner.",
    heroPrimary: "Partner werden",
    heroSecondary: "Mit dem Vertrieb sprechen",
    interestedHeading: "Interesse an einer Partnerschaft?",
    interestedBody: "Wir arbeiten mit Wiederverkäufern, Integratoren, Technologieanbietern und FM-Spezialisten zusammen, die RoomAlyzer in neue Gebäude und Märkte bringen. Wenn Sie ergänzende Produkte oder Dienstleistungen haben, oder unsere Sensoren und Plattform verkaufen und betreuen möchten, würden wir gern von Ihnen hören.",
    becomePartner: "Partner werden",
    viewIntegrations: "Integrationen ansehen",
  },
  press: {
    metaTitle: "Presse | Über uns | IoT Fabrikken",
    metaDescription: "Eckdaten, Pressekontakt und Medienressourcen von IoT Fabrikken.",
    crumb: "Presse",
    heroTitle: "Presse.",
    heroTitleAccent: "Fakten und Kontakte.",
    heroLead: "Alles, was Sie für eine Geschichte über IoT Fabrikken brauchen: Eckdaten, Pressekontakt und unsere neuesten Ankündigungen.",
    emailPress: "Presse anschreiben",
    keyFactsHeading: "Eckdaten",
    pressContactLabel: "Pressekontakt",
    releasesHeading: "Pressemitteilungen",
    releasesEmpty: "Pressemitteilungen werden hier in Kürze veröffentlicht. Für dringende Anfragen wenden Sie sich an unser Presseteam oben.",
    readFullRelease: "Ganze Mitteilung lesen →",
    inThePress: "In der Presse",
    mentionsEmpty: "Zusammenfassungen der Medienberichterstattung werden hier in Kürze ergänzt.",
    read: "Lesen →",
    ctaTitle: "Schreiben Sie über uns?",
    ctaSubtitle: "Wir stellen gern Interviews, Zitate, Daten und Referenzkunden bereit.",
    ctaPrimary: "Presse anschreiben",
  },
};

const sv: AboutStrings = {
  common: { home: "Hem", about: "Om oss", bookDemo: "Boka en gratis demo", contactSales: "Kontakta försäljning", contactUs: "Kontakta oss", readMore: "Läs mer", explore: "Utforska", imageComingSoon: "Bild kommer snart" },
  placeholder: {
    noticeTitle: "Innehåll till denna sida är på väg",
    noticeSubtitle: "Vi håller på att sätta ihop innehåll, case och skärmbilder. Hör av dig redan nu om du vill veta mer.",
    ctaTitle: "Vill du veta mer redan nu?",
    ctaSubtitle: "Hör av dig, vi tar alltid gärna ett förutsättningslöst samtal.",
  },
  hub: {
    metaTitle: "Om IoT Fabrikken | IoT Fabrikken",
    exploreTitle: "Utforska företaget.",
    exploreLead: "Vår historia, människorna bakom produkten, lediga tjänster, pressmaterial, certifiering och partner.",
    ctaTitle: "Vill du ha en guidad genomgång?",
    ctaSubtitle: "Boka en demo, så anpassar vi den efter din byggnad.",
  },
  story: {
    metaTitle: "Vår historia | Om oss | IoT Fabrikken",
    crumb: "Vår historia",
    heroPrimary: "Möt teamet",
    heroSecondary: "Kontakta oss",
    ctaTitle: "Vill du veta vilka som bygger det?",
    ctaSubtitle: "Möt ledningen, utvecklingsteamet och kundteamen bakom RoomAlyzer.",
    ctaPrimary: "Möt teamet",
    ctaSecondary: "Se lediga tjänster",
  },
  team: {
    metaTitle: "Teamet | Om oss | IoT Fabrikken",
    metaDescription: "Möt IoT Fabrikken-teamet, ledning, försäljning, utveckling, customer success och drift.",
    crumb: "Teamet",
    heroTitle: "Teamet.",
    heroTitleAccent: "En produkt. Ett team.",
    heroLead: "Ett erfaret team med passion för space management och inomhusklimat, vi finns nära från första demo genom driftsättning och support.",
    heroPrimary: "Se lediga tjänster",
    heroSecondary: "Kontakta oss",
    viewOpenRoles: "Se lediga tjänster",
    ctaTitle: "Vi rekryterar.",
    ctaSubtitle: "Skickliga utvecklare, customer success- och driftpersonal, vi vill gärna höra från dig.",
    ctaPrimary: "Se lediga tjänster",
    ctaSecondary: "Kontakta oss",
  },
  careers: {
    metaTitle: "Karriär | Om oss | IoT Fabrikken",
    crumb: "Karriär",
    heroTitle: "Karriär.",
    heroTitleAccent: "Bli en del av teamet.",
    heroPrimary: "Möt teamet",
    heroSecondary: "Kontakta oss",
    roleSingular: "ledig tjänst",
    rolePlural: "lediga tjänster",
    openPositions: "Lediga tjänster",
    openPositionsIntro: "Roller vi aktivt rekryterar till just nu. Klicka in för den fullständiga beskrivningen och hur du ansöker.",
    readMore: "Läs mer",
    noOpenings: "Vi har inga utlysta tjänster just nu, men spontanansökningar är alltid välkomna.",
    unsolicitedHeading: "Spontanansökan",
    unsolicitedText: "Passar ingen utlyst roll? Du kan skicka en spontanansökan när som helst, även när vi inte har några lediga tjänster utlysta. Skicka en kort introduktion, vad du vill arbeta med och varför IoT Fabrikken är rätt match.",
    sendApplication: "Skicka ansökan",
    unsolicitedSubject: "Spontanansökan",
    applicationSubjectPrefix: "Ansökan:",
    applyByEmail: "Ansök via e-post",
    applyOnJobindex: "Ansök på Jobindex",
    aboutYou: "Om dig",
    whatWeOffer: "Vad vi erbjuder",
    aboutCompany: "Om IoT Fabrikken",
    practicalDetails: "Praktiska detaljer",
    allOpenRoles: "Alla lediga tjänster",
    contactInvitePrefix: "Du är också välkommen att kontakta",
  },
  partners: {
    metaTitle: "Partner | Om oss | IoT Fabrikken",
    crumb: "Partner",
    heroTitle: "Partner.",
    heroPrimary: "Bli partner",
    heroSecondary: "Prata med försäljning",
    interestedHeading: "Intresserad av ett partnerskap?",
    interestedBody: "Vi samarbetar med återförsäljare, integratörer, teknikleverantörer och FM-specialister som tar RoomAlyzer till nya byggnader och marknader. Om du har kompletterande produkter eller tjänster (eller vill sälja och supporta våra sensorer och plattform) vill vi gärna höra från dig.",
    becomePartner: "Bli partner",
    viewIntegrations: "Se integrationer",
  },
  press: {
    metaTitle: "Press | Om oss | IoT Fabrikken",
    metaDescription: "Nyckelfakta, presskontakt och medieresurser från IoT Fabrikken.",
    crumb: "Press",
    heroTitle: "Press.",
    heroTitleAccent: "Fakta och kontakter.",
    heroLead: "Allt du behöver för en artikel om IoT Fabrikken: nyckelfakta, presskontakt och våra senaste nyheter.",
    emailPress: "Mejla pressen",
    keyFactsHeading: "Nyckelfakta",
    pressContactLabel: "Presskontakt",
    releasesHeading: "Pressmeddelanden",
    releasesEmpty: "Pressmeddelanden publiceras här inom kort. För brådskande förfrågningar, kontakta vårt pressteam ovan.",
    readFullRelease: "Läs hela meddelandet →",
    inThePress: "I pressen",
    mentionsEmpty: "Sammanfattningar av mediebevakning läggs till här inom kort.",
    read: "Läs →",
    ctaTitle: "Skriver du om oss?",
    ctaSubtitle: "Vi ställer gärna upp med intervjuer, citat, data och referenskunder.",
    ctaPrimary: "Mejla pressen",
  },
};

const dictionaries: Record<Lang, AboutStrings> = { en, da, de, sv };

export function getAbout(lang: Lang): AboutStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}
