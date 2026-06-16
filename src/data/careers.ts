/**
 * Careers content for `/{lang}/about/careers/` and individual role pages.
 */

import { defaultLang, type Lang } from "./lang";

export const careersContact = {
  email: "info@iot-fabrikken.com",
  phone: "+45 71 71 80 90",
};

/** Hero lead for `/en/about/careers/` (title and accent are set inline on the page). */
export const careersIntro = {
  lead: "Demand for our indoor climate and building solutions is growing rapidly. We are continually looking for passionate people to join our expanding team.",
};

export type JobOpening = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  tagline: string;
  intro: string;
  roleTitle: string;
  responsibilities: string[];
  aboutYouIntro: string;
  aboutYou: string[];
  weOffer: string[];
  aboutCompany: string[];
  practical: { label: string; value: string }[];
  hiringContact?: {
    name: string;
    role: string;
    phone: string;
  };
  externalApplyUrl?: string;
};

export const openPositions: JobOpening[] = [
  {
    slug: "business-development-manager-germany",
    title: "Business Development Manager – Germany",
    location: "Germany & Jutland (flexible)",
    summary:
      "Drive sales and partnerships in Germany for our sensor and software platform. Fluent German required.",
    tagline:
      "Are you sharp at sales, fluent in German and ready to take a growing market by storm?",
    intro:
      "IoT Fabrikken is scaling our business in Germany — and we are looking for a strong sales profile to help build on that success. We work with intelligent sensors and software that document and optimise indoor climate, mould prevention, water damage and space management across industries. Data is our foundation — and the solution already makes a difference for customers in Germany.",
    roleTitle: "The role",
    responsibilities: [
      "You have experience building and running your own pipeline and customer base — and closing deals.",
      "You identify and contact the right decision-makers in selected niche industries.",
      "You run demos and drive sales processes — from first meeting to signed contract.",
      "You work closely with our head of sales and commercial leadership in Denmark (our office in Hørning).",
      "You take responsibility for winning new customers and developing existing relationships.",
      "You join an ambitious, energetic team in Denmark, and you will spend a large part of your time in Germany.",
      "The market has only just opened — there is plenty of potential to unlock and new customers to win.",
    ],
    aboutYouIntro:
      "You have a strong sales profile and thrive on opening doors and building relationships — including in a market that is still growing. You are tactical and strategic, and you understand how to turn technical solutions into concrete value for customers.",
    aboutYou: [
      "You speak and write fluent German — and can also work comfortably in English.",
      "You have B2B sales experience.",
      "You are good at explaining complex products in a simple, convincing way.",
      "You may have worked with technical solutions for property operations and proptech before.",
      "You can work flexibly between Germany and Jutland.",
      "You have a natural ability to build trust and long-term relationships.",
    ],
    weOffer: [
      "A strong, dedicated team — you are never on your own.",
      "A role with a high degree of freedom and significant responsibility.",
      "Good development opportunities in a scale-up with ambition and momentum.",
      "Fixed salary plus attractive commission.",
    ],
    aboutCompany: [
      "We are a Danish tech company with head office in Roskilde and a hub office in Hørning, founded in 2018. We are established in Denmark and have expanded across Europe — not least in Germany.",
      "Our solutions make it easy for customers to measure, analyse and document how their buildings are used — and to make decisions based on data, not gut feeling. Data prevents energy waste and damage.",
      "You get more than a job — you join a small, close and ambitious team that hits goals through structure, collaboration and good energy. We aim high, laugh a lot in everyday work and share a strong drive to do things properly.",
    ],
    practical: [
      { label: "Start date", value: "Q1 2026" },
      { label: "Location", value: "Flexible between Germany and Jutland" },
      { label: "Employment type", value: "Full-time" },
      {
        label: "Application deadline",
        value: "As soon as possible — we hire when we find the right person",
      },
      { label: "Apply by email", value: careersContact.email },
    ],
    hiringContact: {
      name: "Lars Qvistgaard",
      role: "Commercial director",
      phone: careersContact.phone,
    },
    externalApplyUrl: "https://www.jobindex.dk/vis-job/h1607083",
  },
];

const careersIntroI18n: Partial<Record<Lang, { lead: string }>> = {
  da: { lead: "Efterspørgslen efter vores indeklima- og bygningsløsninger vokser hurtigt. Vi leder løbende efter passionerede mennesker til vores voksende team." },
  de: { lead: "Die Nachfrage nach unseren Raumklima- und Gebäudelösungen wächst rasant. Wir suchen laufend leidenschaftliche Menschen für unser wachsendes Team." },
  sv: { lead: "Efterfrågan på våra inomhusklimat- och byggnadslösningar växer snabbt. Vi söker löpande passionerade människor till vårt växande team." },
};

type JobOverlay = Partial<
  Pick<
    JobOpening,
    | "title"
    | "location"
    | "summary"
    | "tagline"
    | "intro"
    | "roleTitle"
    | "responsibilities"
    | "aboutYouIntro"
    | "aboutYou"
    | "weOffer"
    | "aboutCompany"
    | "practical"
  >
> & { hiringContactRole?: string };

const jobsI18n: Partial<Record<Lang, Record<string, JobOverlay>>> = {
  da: {
    "business-development-manager-germany": {
      title: "Business Development Manager – Tyskland",
      location: "Tyskland & Jylland (fleksibelt)",
      summary: "Driv salg og partnerskaber i Tyskland for vores sensor- og softwareplatform. Flydende tysk er et krav.",
      tagline: "Er du skarp til salg, taler flydende tysk og klar til at erobre et marked i vækst?",
      intro: "IoT Fabrikken skalerer vores forretning i Tyskland — og vi leder efter en stærk salgsprofil, der kan være med til at bygge videre på den succes. Vi arbejder med intelligente sensorer og software, der dokumenterer og optimerer indeklima, skimmelforebyggelse, vandskade og space management på tværs af brancher. Data er vores fundament — og løsningen gør allerede en forskel for kunder i Tyskland.",
      roleTitle: "Rollen",
      responsibilities: [
        "Du har erfaring med at opbygge og drive din egen pipeline og kundebase — og med at lukke aftaler.",
        "Du identificerer og kontakter de rette beslutningstagere i udvalgte nichebrancher.",
        "Du afholder demoer og driver salgsprocesser — fra første møde til underskrevet kontrakt.",
        "Du arbejder tæt sammen med vores salgschef og kommercielle ledelse i Danmark (vores kontor i Hørning).",
        "Du tager ansvar for at vinde nye kunder og udvikle eksisterende relationer.",
        "Du bliver en del af et ambitiøst, energisk team i Danmark, og du vil tilbringe en stor del af din tid i Tyskland.",
        "Markedet er lige åbnet — der er masser af potentiale at frigøre og nye kunder at vinde.",
      ],
      aboutYouIntro: "Du har en stærk salgsprofil og trives med at åbne døre og opbygge relationer — også på et marked, der stadig er i vækst. Du er taktisk og strategisk, og du forstår at omsætte tekniske løsninger til konkret værdi for kunderne.",
      aboutYou: [
        "Du taler og skriver flydende tysk — og kan også arbejde ubesværet på engelsk.",
        "Du har erfaring med B2B-salg.",
        "Du er god til at forklare komplekse produkter på en enkel og overbevisende måde.",
        "Du har måske tidligere arbejdet med tekniske løsninger til ejendomsdrift og proptech.",
        "Du kan arbejde fleksibelt mellem Tyskland og Jylland.",
        "Du har en naturlig evne til at opbygge tillid og langvarige relationer.",
      ],
      weOffer: [
        "Et stærkt, dedikeret team — du står aldrig alene.",
        "En rolle med høj grad af frihed og stort ansvar.",
        "Gode udviklingsmuligheder i en scale-up med ambitioner og momentum.",
        "Fast løn plus attraktiv provision.",
      ],
      aboutCompany: [
        "Vi er en dansk tech-virksomhed med hovedkontor i Roskilde og et hub-kontor i Hørning, grundlagt i 2018. Vi er etableret i Danmark og er ekspanderet i hele Europa — ikke mindst i Tyskland.",
        "Vores løsninger gør det nemt for kunderne at måle, analysere og dokumentere, hvordan deres bygninger bruges — og at træffe beslutninger baseret på data, ikke mavefornemmelser. Data forhindrer energispild og skader.",
        "Du får mere end et job — du bliver en del af et lille, tæt og ambitiøst team, der når mål gennem struktur, samarbejde og god energi. Vi sigter højt, griner meget i hverdagen og deler en stærk drivkraft for at gøre tingene ordentligt.",
      ],
      practical: [
        { label: "Startdato", value: "1. kvartal 2026" },
        { label: "Lokation", value: "Fleksibelt mellem Tyskland og Jylland" },
        { label: "Ansættelsestype", value: "Fuldtid" },
        { label: "Ansøgningsfrist", value: "Hurtigst muligt — vi ansætter, når vi finder den rette" },
        { label: "Ansøg via e-mail", value: careersContact.email },
      ],
      hiringContactRole: "Kommerciel direktør",
    },
  },
  de: {
    "business-development-manager-germany": {
      title: "Business Development Manager – Deutschland",
      location: "Deutschland & Jütland (flexibel)",
      summary: "Treiben Sie Vertrieb und Partnerschaften in Deutschland für unsere Sensor- und Softwareplattform voran. Fließendes Deutsch erforderlich.",
      tagline: "Sind Sie ein Verkaufstalent, sprechen fließend Deutsch und bereit, einen wachsenden Markt im Sturm zu erobern?",
      intro: "IoT Fabrikken skaliert unser Geschäft in Deutschland — und wir suchen ein starkes Vertriebsprofil, das auf diesem Erfolg aufbaut. Wir arbeiten mit intelligenten Sensoren und Software, die Raumklima, Schimmelprävention, Wasserschäden und Space-Management branchenübergreifend dokumentieren und optimieren. Daten sind unser Fundament — und die Lösung macht für Kunden in Deutschland bereits einen Unterschied.",
      roleTitle: "Die Rolle",
      responsibilities: [
        "Sie haben Erfahrung darin, eine eigene Pipeline und einen Kundenstamm aufzubauen und zu führen — und Abschlüsse zu erzielen.",
        "Sie identifizieren und kontaktieren die richtigen Entscheidungsträger in ausgewählten Nischenbranchen.",
        "Sie führen Demos durch und treiben Verkaufsprozesse voran — vom ersten Treffen bis zum unterzeichneten Vertrag.",
        "Sie arbeiten eng mit unserem Vertriebsleiter und der kommerziellen Leitung in Dänemark (unser Büro in Hørning) zusammen.",
        "Sie übernehmen Verantwortung dafür, neue Kunden zu gewinnen und bestehende Beziehungen auszubauen.",
        "Sie werden Teil eines ehrgeizigen, energiegeladenen Teams in Dänemark und verbringen einen großen Teil Ihrer Zeit in Deutschland.",
        "Der Markt hat sich gerade erst geöffnet — es gibt viel Potenzial zu heben und neue Kunden zu gewinnen.",
      ],
      aboutYouIntro: "Sie haben ein starkes Vertriebsprofil und es macht Ihnen Freude, Türen zu öffnen und Beziehungen aufzubauen — auch in einem Markt, der noch wächst. Sie sind taktisch und strategisch und verstehen es, technische Lösungen in konkreten Kundennutzen zu verwandeln.",
      aboutYou: [
        "Sie sprechen und schreiben fließend Deutsch — und können auch problemlos auf Englisch arbeiten.",
        "Sie haben Erfahrung im B2B-Vertrieb.",
        "Sie können komplexe Produkte einfach und überzeugend erklären.",
        "Vielleicht haben Sie schon mit technischen Lösungen für den Gebäudebetrieb und Proptech gearbeitet.",
        "Sie können flexibel zwischen Deutschland und Jütland arbeiten.",
        "Sie haben eine natürliche Fähigkeit, Vertrauen und langfristige Beziehungen aufzubauen.",
      ],
      weOffer: [
        "Ein starkes, engagiertes Team — Sie sind nie auf sich allein gestellt.",
        "Eine Rolle mit hohem Maß an Freiheit und großer Verantwortung.",
        "Gute Entwicklungsmöglichkeiten in einem Scale-up mit Ehrgeiz und Schwung.",
        "Festgehalt plus attraktive Provision.",
      ],
      aboutCompany: [
        "Wir sind ein dänisches Tech-Unternehmen mit Hauptsitz in Roskilde und einem Hub-Büro in Hørning, gegründet 2018. Wir sind in Dänemark etabliert und in ganz Europa expandiert — nicht zuletzt in Deutschland.",
        "Unsere Lösungen machen es Kunden leicht, zu messen, zu analysieren und zu dokumentieren, wie ihre Gebäude genutzt werden — und Entscheidungen auf Basis von Daten statt Bauchgefühl zu treffen. Daten verhindern Energieverschwendung und Schäden.",
        "Sie bekommen mehr als einen Job — Sie werden Teil eines kleinen, eng verbundenen und ehrgeizigen Teams, das Ziele durch Struktur, Zusammenarbeit und gute Energie erreicht. Wir zielen hoch, lachen viel im Arbeitsalltag und teilen einen starken Antrieb, Dinge richtig zu machen.",
      ],
      practical: [
        { label: "Startdatum", value: "Q1 2026" },
        { label: "Standort", value: "Flexibel zwischen Deutschland und Jütland" },
        { label: "Beschäftigungsart", value: "Vollzeit" },
        { label: "Bewerbungsfrist", value: "So bald wie möglich — wir stellen ein, wenn wir die richtige Person finden" },
        { label: "Per E-Mail bewerben", value: careersContact.email },
      ],
      hiringContactRole: "Kommerzieller Leiter",
    },
  },
  sv: {
    "business-development-manager-germany": {
      title: "Business Development Manager – Tyskland",
      location: "Tyskland & Jylland (flexibelt)",
      summary: "Driv försäljning och partnerskap i Tyskland för vår sensor- och mjukvaruplattform. Flytande tyska krävs.",
      tagline: "Är du vass på försäljning, talar flytande tyska och redo att ta en växande marknad med storm?",
      intro: "IoT Fabrikken skalar upp vår verksamhet i Tyskland — och vi söker en stark säljprofil som kan vara med och bygga vidare på den framgången. Vi arbetar med intelligenta sensorer och mjukvara som dokumenterar och optimerar inomhusklimat, mögelförebyggande, vattenskador och space management över olika branscher. Data är vår grund — och lösningen gör redan skillnad för kunder i Tyskland.",
      roleTitle: "Rollen",
      responsibilities: [
        "Du har erfarenhet av att bygga och driva din egen pipeline och kundbas — och av att stänga affärer.",
        "Du identifierar och kontaktar rätt beslutsfattare i utvalda nischbranscher.",
        "Du håller demos och driver säljprocesser — från första mötet till signerat avtal.",
        "Du arbetar nära vår försäljningschef och kommersiella ledning i Danmark (vårt kontor i Hørning).",
        "Du tar ansvar för att vinna nya kunder och utveckla befintliga relationer.",
        "Du blir en del av ett ambitiöst, energiskt team i Danmark, och du kommer att tillbringa en stor del av din tid i Tyskland.",
        "Marknaden har precis öppnat — det finns gott om potential att frigöra och nya kunder att vinna.",
      ],
      aboutYouIntro: "Du har en stark säljprofil och trivs med att öppna dörrar och bygga relationer — även på en marknad som fortfarande växer. Du är taktisk och strategisk och förstår hur man omvandlar tekniska lösningar till konkret värde för kunderna.",
      aboutYou: [
        "Du talar och skriver flytande tyska — och kan även arbeta obehindrat på engelska.",
        "Du har erfarenhet av B2B-försäljning.",
        "Du är bra på att förklara komplexa produkter på ett enkelt och övertygande sätt.",
        "Du kan ha arbetat med tekniska lösningar för fastighetsdrift och proptech tidigare.",
        "Du kan arbeta flexibelt mellan Tyskland och Jylland.",
        "Du har en naturlig förmåga att bygga förtroende och långsiktiga relationer.",
      ],
      weOffer: [
        "Ett starkt, engagerat team — du står aldrig ensam.",
        "En roll med hög grad av frihet och stort ansvar.",
        "Goda utvecklingsmöjligheter i en scale-up med ambition och momentum.",
        "Fast lön plus attraktiv provision.",
      ],
      aboutCompany: [
        "Vi är ett danskt teknikföretag med huvudkontor i Roskilde och ett hubbkontor i Hørning, grundat 2018. Vi är etablerade i Danmark och har expanderat i hela Europa — inte minst i Tyskland.",
        "Våra lösningar gör det enkelt för kunderna att mäta, analysera och dokumentera hur deras byggnader används — och att fatta beslut baserat på data, inte magkänsla. Data förhindrar energislöseri och skador.",
        "Du får mer än ett jobb — du blir en del av ett litet, tätt och ambitiöst team som når mål genom struktur, samarbete och god energi. Vi siktar högt, skrattar mycket i vardagen och delar en stark drivkraft att göra saker ordentligt.",
      ],
      practical: [
        { label: "Startdatum", value: "Q1 2026" },
        { label: "Plats", value: "Flexibelt mellan Tyskland och Jylland" },
        { label: "Anställningsform", value: "Heltid" },
        { label: "Sista ansökningsdag", value: "Så snart som möjligt — vi anställer när vi hittar rätt person" },
        { label: "Ansök via e-post", value: careersContact.email },
      ],
      hiringContactRole: "Kommersiell direktör",
    },
  },
};

export function getCareersIntro(lang: Lang = defaultLang): { lead: string } {
  return careersIntroI18n[lang] ?? careersIntro;
}

export function getOpenPositions(lang: Lang = defaultLang): JobOpening[] {
  if (lang === defaultLang) return openPositions;
  const overlay = jobsI18n[lang];
  if (!overlay) return openPositions;
  return openPositions.map((job) => {
    const o = overlay[job.slug];
    if (!o) return job;
    const { hiringContactRole, ...fields } = o;
    return {
      ...job,
      ...fields,
      hiringContact:
        job.hiringContact && hiringContactRole
          ? { ...job.hiringContact, role: hiringContactRole }
          : job.hiringContact,
    };
  });
}
