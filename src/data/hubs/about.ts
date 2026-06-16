import type { Hub, HubLeaf } from "./types";
import { defaultLang, type Lang } from "../lang";

export const aboutHub: Hub = {
  slug: "about",
  title: "About IoT Fabrikken.",
  titleAccent: "Built in Denmark. Used across Europe.",
  eyebrow: "About",
  lead: "A 100% Danish-owned SaaS and IoT company, founded by people with 25 years of experience in measurement, SaaS and facility management.",
  leaves: [
    {
      slug: "story",
      eyebrow: "About",
      title: "Our story.",
      titleAccent: "25 years in the making.",
      lead: "From DIBS and eSmiley to IoT Fabrikken — the track record behind the company.",
    },
    {
      slug: "team",
      eyebrow: "About",
      title: "The team.",
      titleAccent: "Meet the people behind the product.",
      lead: "Leadership, sales, engineering, customer success and operations — meet the people behind the product.",
    },
    {
      slug: "careers",
      eyebrow: "About",
      title: "Careers.",
      titleAccent: "We are hiring.",
      lead: "Open positions, our hiring process and what it looks like to work at IoT Fabrikken.",
    },
    {
      slug: "press",
      eyebrow: "About",
      title: "Press.",
      titleAccent: "Logos, screenshots and background.",
      lead: "Assets and key facts for journalists, analysts and partners.",
    },
    {
      slug: "d-label",
      eyebrow: "About",
      title: "D-Label certified.",
      titleAccent: "Danish design, certified.",
      lead: "Our hardware is certified with the Danish D-Label — a recognition of design, durability and sustainability.",
    },
    {
      slug: "partners",
      eyebrow: "About",
      title: "Partners.",
      titleAccent: "Cooperation creates solutions.",
      lead: "Strong partners contribute specialised knowledge, technology and experience — together we build better outcomes for buildings and the people in them.",
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

const aboutHubI18n: Partial<Record<Lang, HubOverlay>> = {
  da: {
    title: "Om IoT Fabrikken.",
    titleAccent: "Bygget i Danmark. Brugt i hele Europa.",
    eyebrow: "Om os",
    lead: "En 100% dansk-ejet SaaS- og IoT-virksomhed, grundlagt af folk med 25 års erfaring inden for måling, SaaS og facility management.",
    leaves: {
      story: { title: "Vores historie.", titleAccent: "25 år i støbeskeen.", lead: "Fra DIBS og eSmiley til IoT Fabrikken — historikken bag virksomheden." },
      team: { title: "Teamet.", titleAccent: "Mød menneskene bag produktet.", lead: "Ledelse, salg, udvikling, customer success og drift — mød menneskene bag produktet." },
      careers: { title: "Karriere.", titleAccent: "Vi søger nye kolleger.", lead: "Ledige stillinger, vores ansættelsesproces og hvordan det er at arbejde hos IoT Fabrikken." },
      press: { title: "Presse.", titleAccent: "Logoer, skærmbilleder og baggrund.", lead: "Materialer og nøglefakta til journalister, analytikere og partnere." },
      "d-label": { title: "D-Mærket certificeret.", titleAccent: "Dansk design, certificeret.", lead: "Vores hardware er certificeret med det danske D-Mærke — en anerkendelse af design, holdbarhed og bæredygtighed." },
      partners: { title: "Partnere.", titleAccent: "Samarbejde skaber løsninger.", lead: "Stærke partnere bidrager med specialiseret viden, teknologi og erfaring — sammen skaber vi bedre resultater for bygninger og menneskene i dem." },
    },
  },
  de: {
    title: "Über IoT Fabrikken.",
    titleAccent: "In Dänemark gebaut. In ganz Europa im Einsatz.",
    eyebrow: "Über uns",
    lead: "Ein zu 100% in dänischem Besitz befindliches SaaS- und IoT-Unternehmen, gegründet von Menschen mit 25 Jahren Erfahrung in Messtechnik, SaaS und Facility Management.",
    leaves: {
      story: { title: "Unsere Geschichte.", titleAccent: "25 Jahre in der Entstehung.", lead: "Von DIBS und eSmiley zu IoT Fabrikken — die Erfolgsbilanz hinter dem Unternehmen." },
      team: { title: "Das Team.", titleAccent: "Lernen Sie die Menschen hinter dem Produkt kennen.", lead: "Führung, Vertrieb, Entwicklung, Customer Success und Betrieb — lernen Sie die Menschen hinter dem Produkt kennen." },
      careers: { title: "Karriere.", titleAccent: "Wir stellen ein.", lead: "Offene Stellen, unser Einstellungsprozess und wie es ist, bei IoT Fabrikken zu arbeiten." },
      press: { title: "Presse.", titleAccent: "Logos, Screenshots und Hintergründe.", lead: "Materialien und Eckdaten für Journalisten, Analysten und Partner." },
      "d-label": { title: "D-Label zertifiziert.", titleAccent: "Dänisches Design, zertifiziert.", lead: "Unsere Hardware ist mit dem dänischen D-Label zertifiziert — eine Anerkennung für Design, Langlebigkeit und Nachhaltigkeit." },
      partners: { title: "Partner.", titleAccent: "Zusammenarbeit schafft Lösungen.", lead: "Starke Partner bringen spezialisiertes Wissen, Technologie und Erfahrung ein — gemeinsam erzielen wir bessere Ergebnisse für Gebäude und die Menschen darin." },
    },
  },
  sv: {
    title: "Om IoT Fabrikken.",
    titleAccent: "Byggt i Danmark. Använt i hela Europa.",
    eyebrow: "Om oss",
    lead: "Ett till 100% danskägt SaaS- och IoT-företag, grundat av personer med 25 års erfarenhet inom mätning, SaaS och facility management.",
    leaves: {
      story: { title: "Vår historia.", titleAccent: "25 år i vardande.", lead: "Från DIBS och eSmiley till IoT Fabrikken — meritlistan bakom företaget." },
      team: { title: "Teamet.", titleAccent: "Möt människorna bakom produkten.", lead: "Ledning, försäljning, utveckling, customer success och drift — möt människorna bakom produkten." },
      careers: { title: "Karriär.", titleAccent: "Vi rekryterar.", lead: "Lediga tjänster, vår rekryteringsprocess och hur det är att arbeta på IoT Fabrikken." },
      press: { title: "Press.", titleAccent: "Logotyper, skärmbilder och bakgrund.", lead: "Material och nyckelfakta för journalister, analytiker och partner." },
      "d-label": { title: "D-Label-certifierad.", titleAccent: "Dansk design, certifierad.", lead: "Vår hårdvara är certifierad med det danska D-Label — ett erkännande av design, hållbarhet och hållbar utveckling." },
      partners: { title: "Partner.", titleAccent: "Samarbete skapar lösningar.", lead: "Starka partner bidrar med specialiserad kunskap, teknik och erfarenhet — tillsammans skapar vi bättre resultat för byggnader och människorna i dem." },
    },
  },
};

/** Locale-aware About hub. Falls back to English for untranslated locales. */
export function getAboutHub(lang: Lang = defaultLang): Hub {
  if (lang === defaultLang) return aboutHub;
  const overlay = aboutHubI18n[lang];
  if (!overlay) return aboutHub;
  const leaves: HubLeaf[] = aboutHub.leaves.map((leaf) => {
    const lo = overlay.leaves[leaf.slug];
    return lo
      ? { ...leaf, title: lo.title, titleAccent: lo.titleAccent, lead: lo.lead }
      : leaf;
  });
  return {
    ...aboutHub,
    title: overlay.title,
    titleAccent: overlay.titleAccent,
    eyebrow: overlay.eyebrow,
    lead: overlay.lead,
    leaves,
  };
}
