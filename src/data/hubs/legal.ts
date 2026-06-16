import type { Hub, HubLeaf } from "./types";
import { defaultLang, type Lang } from "../lang";

export const legalHub: Hub = {
  slug: "legal",
  title: "Legal.",
  titleAccent: "The fine print, in plain language.",
  eyebrow: "Legal",
  lead: "Privacy, cookies, terms, security and the legal pages we are required to publish.",
  leaves: [
    {
      slug: "privacy",
      eyebrow: "Legal",
      title: "Privacy policy.",
      titleAccent: "What we do with data — and what we don't.",
      lead: "How we process personal data, which subprocessors we use and the rights you have as a registered person.",
    },
    {
      slug: "cookies",
      eyebrow: "Legal",
      title: "Cookie policy.",
      titleAccent: "Which cookies, and why.",
      lead: "The cookies we set, the ones we do not and how you can change your preferences at any time.",
    },
    {
      slug: "terms",
      eyebrow: "Legal",
      title: "Terms and DPA.",
      titleAccent: "Commercial terms and data processing.",
      lead: "Our commercial terms and the data-processing agreement that applies to every RoomAlyzer deployment.",
    },
    {
      slug: "impressum",
      eyebrow: "Legal",
      title: "Impressum.",
      titleAccent: "Statutory information.",
      lead: "Company details, registered address and responsible persons — as required under German law.",
    },
    {
      slug: "security",
      eyebrow: "Legal",
      title: "Security.",
      titleAccent: "How we protect your data.",
      lead: "Certifications, controls and the architectural choices behind RoomAlyzer's security posture.",
    },
    {
      slug: "accessibility",
      eyebrow: "Legal",
      title: "Accessibility statement.",
      titleAccent: "A site that everyone can use.",
      lead: "Our current accessibility level, known issues and how to report problems.",
    },
    {
      slug: "sla",
      eyebrow: "Legal",
      title: "Service-level agreement.",
      titleAccent: "What we commit to — and how.",
      lead: "Our uptime commitment, support hours and the way we measure and report on service levels.",
    },
  ],
};

type HubOverlay = {
  title: string;
  titleAccent: string;
  eyebrow: string;
  lead: string;
  leaves: Record<string, { title: string; titleAccent: string; lead: string }>;
};

const legalHubI18n: Partial<Record<Lang, HubOverlay>> = {
  da: {
    title: "Juridisk.",
    titleAccent: "Det med småt — i et klart sprog.",
    eyebrow: "Juridisk",
    lead: "Privatliv, cookies, vilkår, sikkerhed og de juridiske sider, vi er forpligtet til at offentliggøre.",
    leaves: {
      privacy: { title: "Privatlivspolitik.", titleAccent: "Hvad vi gør med data — og hvad vi ikke gør.", lead: "Hvordan vi behandler personoplysninger, hvilke underdatabehandlere vi bruger, og hvilke rettigheder du har som registreret." },
      cookies: { title: "Cookiepolitik.", titleAccent: "Hvilke cookies, og hvorfor.", lead: "De cookies vi sætter, dem vi ikke sætter, og hvordan du til enhver tid kan ændre dine præferencer." },
      terms: { title: "Vilkår og databehandleraftale.", titleAccent: "Kommercielle vilkår og databehandling.", lead: "Vores kommercielle vilkår og den databehandleraftale, der gælder for enhver RoomAlyzer-implementering." },
      impressum: { title: "Impressum.", titleAccent: "Lovpligtige oplysninger.", lead: "Virksomhedsoplysninger, registreret adresse og ansvarlige personer — som krævet efter tysk lov." },
      security: { title: "Sikkerhed.", titleAccent: "Sådan beskytter vi dine data.", lead: "Certificeringer, kontroller og de arkitektoniske valg bag RoomAlyzers sikkerhed." },
      accessibility: { title: "Tilgængelighedserklæring.", titleAccent: "Et website, som alle kan bruge.", lead: "Vores nuværende tilgængelighedsniveau, kendte problemer og hvordan du rapporterer problemer." },
      sla: { title: "Service-level-aftale.", titleAccent: "Hvad vi forpligter os til — og hvordan.", lead: "Vores oppetidsgaranti, supporttider og måden, vi måler og rapporterer serviceniveauer på." },
    },
  },
  de: {
    title: "Rechtliches.",
    titleAccent: "Das Kleingedruckte, in klarer Sprache.",
    eyebrow: "Rechtliches",
    lead: "Datenschutz, Cookies, Bedingungen, Sicherheit und die rechtlichen Seiten, die wir veröffentlichen müssen.",
    leaves: {
      privacy: { title: "Datenschutzerklärung.", titleAccent: "Was wir mit Daten tun — und was nicht.", lead: "Wie wir personenbezogene Daten verarbeiten, welche Auftragsverarbeiter wir einsetzen und welche Rechte Sie als betroffene Person haben." },
      cookies: { title: "Cookie-Richtlinie.", titleAccent: "Welche Cookies und warum.", lead: "Die Cookies, die wir setzen, die, die wir nicht setzen, und wie Sie Ihre Einstellungen jederzeit ändern können." },
      terms: { title: "Bedingungen und AVV.", titleAccent: "Geschäftsbedingungen und Datenverarbeitung.", lead: "Unsere Geschäftsbedingungen und der Auftragsverarbeitungsvertrag, der für jede RoomAlyzer-Bereitstellung gilt." },
      impressum: { title: "Impressum.", titleAccent: "Gesetzliche Angaben.", lead: "Unternehmensangaben, eingetragene Anschrift und verantwortliche Personen — wie nach deutschem Recht vorgeschrieben." },
      security: { title: "Sicherheit.", titleAccent: "Wie wir Ihre Daten schützen.", lead: "Zertifizierungen, Kontrollen und die architektonischen Entscheidungen hinter der Sicherheit von RoomAlyzer." },
      accessibility: { title: "Erklärung zur Barrierefreiheit.", titleAccent: "Eine Website, die alle nutzen können.", lead: "Unser aktuelles Niveau der Barrierefreiheit, bekannte Probleme und wie Sie Probleme melden." },
      sla: { title: "Service-Level-Agreement.", titleAccent: "Wozu wir uns verpflichten — und wie.", lead: "Unsere Verfügbarkeitszusage, Supportzeiten und die Art, wie wir Service-Level messen und darüber berichten." },
    },
  },
  sv: {
    title: "Juridik.",
    titleAccent: "Det finstilta, på ett tydligt språk.",
    eyebrow: "Juridik",
    lead: "Integritet, cookies, villkor, säkerhet och de juridiska sidor vi är skyldiga att publicera.",
    leaves: {
      privacy: { title: "Integritetspolicy.", titleAccent: "Vad vi gör med data — och vad vi inte gör.", lead: "Hur vi behandlar personuppgifter, vilka underbiträden vi använder och vilka rättigheter du har som registrerad." },
      cookies: { title: "Cookiepolicy.", titleAccent: "Vilka cookies, och varför.", lead: "De cookies vi sätter, de vi inte sätter och hur du när som helst kan ändra dina inställningar." },
      terms: { title: "Villkor och personuppgiftsbiträdesavtal.", titleAccent: "Kommersiella villkor och databehandling.", lead: "Våra kommersiella villkor och det personuppgiftsbiträdesavtal som gäller för varje RoomAlyzer-driftsättning." },
      impressum: { title: "Impressum.", titleAccent: "Lagstadgad information.", lead: "Företagsuppgifter, registrerad adress och ansvariga personer — enligt tysk lag." },
      security: { title: "Säkerhet.", titleAccent: "Så skyddar vi dina data.", lead: "Certifieringar, kontroller och de arkitekturval som ligger bakom RoomAlyzers säkerhet." },
      accessibility: { title: "Tillgänglighetsutlåtande.", titleAccent: "En webbplats som alla kan använda.", lead: "Vår nuvarande tillgänglighetsnivå, kända problem och hur du rapporterar problem." },
      sla: { title: "Service-level-avtal.", titleAccent: "Vad vi förbinder oss till — och hur.", lead: "Vårt drifttidsåtagande, supporttider och hur vi mäter och rapporterar servicenivåer." },
    },
  },
};

/** Locale-aware Legal hub. Falls back to English for untranslated locales. */
export function getLegalHub(lang: Lang = defaultLang): Hub {
  if (lang === defaultLang) return legalHub;
  const overlay = legalHubI18n[lang];
  if (!overlay) return legalHub;
  const leaves: HubLeaf[] = legalHub.leaves.map((leaf) => {
    const lo = overlay.leaves[leaf.slug];
    return lo
      ? { ...leaf, title: lo.title, titleAccent: lo.titleAccent, lead: lo.lead }
      : leaf;
  });
  return {
    ...legalHub,
    title: overlay.title,
    titleAccent: overlay.titleAccent,
    eyebrow: overlay.eyebrow,
    lead: overlay.lead,
    leaves,
  };
}
