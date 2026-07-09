/**
 * The IoT Fabrikken team. Rendered at `/{lang}/about/team/`.
 * Photos live in `public/team/` — individual crops plus `team-group.webp` from
 * `Portraits/` via `node scripts/build-team-portraits.mjs`.
 */

import { openPositions } from "./careers";
import { defaultLang, langPath, type Lang } from "./lang";

/** Full team photo shown at the top of `/en/about/team/`. */
export const teamGroupPhoto = {
  src: "/team/team-group.webp",
  alt: "The IoT Fabrikken team",
};

export type TeamDepartment =
  | "leadership"
  | "engineering"
  | "customer-success"
  | "sales"
  | "operations"
  | "communications";

export type TeamMember = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  photo?: string;
  /** Hiring placeholder card — links to `href` instead of showing contact details. */
  placeholder?: boolean;
  href?: string;
  department: TeamDepartment;
};

export const team: TeamMember[] = [
  {
    name: "Jon Wichmann",
    role: "Partner & CEO",
    email: "jkw@iot-fabrikken.com",
    phone: "+45 61 40 30 30",
    photo: "/team/jon-wichmann.webp",
    department: "leadership",
  },
  {
    name: "Mikkel Fischer",
    role: "Partner",
    email: "mf@iot-fabrikken.com",
    phone: "+45 51 90 83 36",
    photo: "/team/mikkel-fischer.webp",
    department: "leadership",
  },
  {
    name: "Lars Qvistgaard",
    role: "CCO",
    email: "lsq@iot-fabrikken.com",
    phone: "+45 93 99 40 60",
    photo: "/team/lars-qvistgaard.webp",
    department: "leadership",
  },
  {
    name: "Dorthe Deleuran",
    role: "Head of sales, East",
    email: "dd@iot-fabrikken.com",
    phone: "+45 71 71 40 70",
    photo: "/team/dorthe-deleuran.webp",
    department: "sales",
  },
  {
    name: "Charlotte Bangsø",
    role: "Internal sales & support",
    email: "cb@iot-fabrikken.com",
    phone: "+45 71 71 40 80",
    photo: "/team/charlotte-bangso.webp",
    department: "sales",
  },
  {
    name: "Lars Wichmann",
    role: "Software developer",
    photo: "/team/lars-wichmann.webp",
    department: "engineering",
  },
  {
    name: "Jeanette Christensen",
    role: "Customer success and implementation",
    email: "jc@iot-fabrikken.com",
    phone: "+45 93 99 16 76",
    photo: "/team/jeanette-christensen.webp",
    department: "customer-success",
  },
  {
    name: "Kaisa Braæ",
    role: "Office coordinator",
    email: "kaisa@iot-fabrikken.com",
    phone: "+45 71 71 80 90",
    photo: "/team/kaisa-braae.webp",
    department: "operations",
  },
  {
    name: "Katja Kafling",
    role: "Communications",
    email: "kaf@iot-fabrikken.com",
    phone: "+45 27 13 10 40",
    photo: "/team/katja-kafling.webp",
    department: "communications",
  },
  {
    name: "Vivian Bodenlosz",
    role: "Marketing coordinator",
    email: "vb@iot-fabrikken.com",
    phone: "+45 93 99 65 45",
    photo: "/team/vivian-bodenlosz.webp",
    department: "communications",
  },
];

export const departments: Record<TeamDepartment, { label: string; blurb: string }> = {
  leadership: {
    label: "Leadership",
    blurb: "Direction, partnerships and the long-term vision behind IoT Fabrikken.",
  },
  engineering: {
    label: "Engineering",
    blurb: "The people who build and maintain the platform, integrations and product experience.",
  },
  "customer-success": {
    label: "Customer success and implementation",
    blurb: "Onboarding, rollout and ongoing support so customers get lasting value from indoor climate and space management.",
  },
  sales: {
    label: "Sales",
    blurb: "First contact for new customers, in Denmark, Sweden and Germany.",
  },
  operations: {
    label: "Operations",
    blurb: "Administration and logistics that keep the company running smoothly.",
  },
  communications: {
    label: "Communications & marketing",
    blurb: "How we tell our story, press, newsletters, website and campaigns.",
  },
};

type DeptMeta = { label: string; blurb: string };

const departmentsI18n: Partial<Record<Lang, Record<TeamDepartment, DeptMeta>>> = {
  da: {
    leadership: { label: "Ledelse", blurb: "Retning, partnerskaber og den langsigtede vision bag IoT Fabrikken." },
    engineering: { label: "Udvikling", blurb: "Dem, der bygger og vedligeholder platformen, integrationerne og produktoplevelsen." },
    "customer-success": { label: "Customer success og implementering", blurb: "Onboarding, udrulning og løbende support, så kunder får varig værdi af indeklima og space management." },
    sales: { label: "Salg", blurb: "Første kontakt for nye kunder, i Danmark, Sverige og Tyskland." },
    operations: { label: "Drift", blurb: "Administration og logistik, der får virksomheden til at køre gnidningsfrit." },
    communications: { label: "Kommunikation & marketing", blurb: "Sådan fortæller vi vores historie, presse, nyhedsbreve, website og kampagner." },
  },
  de: {
    leadership: { label: "Führung", blurb: "Ausrichtung, Partnerschaften und die langfristige Vision hinter IoT Fabrikken." },
    engineering: { label: "Entwicklung", blurb: "Die Menschen, die die Plattform, Integrationen und das Produkterlebnis bauen und pflegen." },
    "customer-success": { label: "Customer Success und Implementierung", blurb: "Onboarding, Rollout und laufender Support, damit Kunden dauerhaften Nutzen aus Raumklima und Space-Management ziehen." },
    sales: { label: "Vertrieb", blurb: "Erster Kontakt für neue Kunden, in Dänemark, Schweden und Deutschland." },
    operations: { label: "Betrieb", blurb: "Verwaltung und Logistik, die das Unternehmen reibungslos am Laufen halten." },
    communications: { label: "Kommunikation & Marketing", blurb: "Wie wir unsere Geschichte erzählen: Presse, Newsletter, Website und Kampagnen." },
  },
  sv: {
    leadership: { label: "Ledning", blurb: "Inriktning, partnerskap och den långsiktiga visionen bakom IoT Fabrikken." },
    engineering: { label: "Utveckling", blurb: "De som bygger och underhåller plattformen, integrationerna och produktupplevelsen." },
    "customer-success": { label: "Customer success och implementering", blurb: "Onboarding, utrullning och löpande support så att kunder får bestående värde av inomhusklimat och space management." },
    sales: { label: "Försäljning", blurb: "Första kontakten för nya kunder, i Danmark, Sverige och Tyskland." },
    operations: { label: "Drift", blurb: "Administration och logistik som får företaget att fungera smidigt." },
    communications: { label: "Kommunikation & marknad", blurb: "Så berättar vi vår historia, press, nyhetsbrev, webbplats och kampanjer." },
  },
};

/** English role line on hiring placeholder cards, keyed by team section. */
const hiringPlaceholderRoles: Record<TeamDepartment, string> = {
  leadership: "Join our leadership team",
  engineering: "Join our engineering team",
  "customer-success": "Join our customer success team",
  sales: "Join our sales team",
  operations: "Join our operations team",
  communications: "Join our communications team",
};

/** English role string → per-locale translation. */
const roleI18n: Record<Lang, Record<string, string>> = {
  en: {},
  da: {
    "Head of sales, East": "Salgschef, Øst",
    "Internal sales & support": "Intern salg & support",
    "Software developer": "Softwareudvikler",
    "Customer success and implementation": "Customer success og implementering",
    "Office coordinator": "Kontorkoordinator",
    Communications: "Kommunikation",
    "Marketing coordinator": "Marketingkoordinator",
    "Join our leadership team": "Bliv en del af vores ledelsesteam",
    "Join our engineering team": "Bliv en del af vores udviklingsteam",
    "Join our customer success team": "Bliv en del af vores customer success-team",
    "Join our sales team": "Bliv en del af vores salgsteam",
    "Join our operations team": "Bliv en del af vores driftsteam",
    "Join our communications team": "Bliv en del af vores kommunikationsteam",
  },
  de: {
    "Head of sales, East": "Vertriebsleiter, Ost",
    "Internal sales & support": "Innendienst & Support",
    "Software developer": "Softwareentwickler",
    "Customer success and implementation": "Customer Success und Implementierung",
    "Office coordinator": "Büromanagement",
    Communications: "Kommunikation",
    "Marketing coordinator": "Marketingkoordination",
    "Join our leadership team": "Werden Sie Teil unseres Führungsteams",
    "Join our engineering team": "Werden Sie Teil unseres Entwicklungsteams",
    "Join our customer success team": "Werden Sie Teil unseres Customer-Success-Teams",
    "Join our sales team": "Werden Sie Teil unseres Vertriebsteams",
    "Join our operations team": "Werden Sie Teil unseres Betriebsteams",
    "Join our communications team": "Werden Sie Teil unseres Kommunikationsteams",
  },
  sv: {
    "Head of sales, East": "Försäljningschef, Öst",
    "Internal sales & support": "Innesälj & support",
    "Software developer": "Mjukvaruutvecklare",
    "Customer success and implementation": "Customer success och implementering",
    "Office coordinator": "Kontorskoordinator",
    Communications: "Kommunikation",
    "Marketing coordinator": "Marknadskoordinator",
    "Join our leadership team": "Bli en del av vårt ledningsteam",
    "Join our engineering team": "Bli en del av vårt utvecklingsteam",
    "Join our customer success team": "Bli en del av vårt customer success-team",
    "Join our sales team": "Bli en del av vårt säljteam",
    "Join our operations team": "Bli en del av vårt driftteam",
    "Join our communications team": "Bli en del av vårt kommunikationsteam",
  },
};

const placeholderNameI18n: Partial<Record<Lang, string>> = {
  da: "Her kunne du stå",
  de: "Hier könnten Sie stehen",
  sv: "Här kan du stå",
};

const PLACEHOLDER_NAME = "This could be you";

/** First open role per department — used for team-page hiring placeholder cards. */
function openRolesByDepartment(): Map<TeamDepartment, string> {
  const byDept = new Map<TeamDepartment, string>();
  for (const job of openPositions) {
    if (!byDept.has(job.department)) {
      byDept.set(job.department, job.slug);
    }
  }
  return byDept;
}

function localizeMember(member: TeamMember, lang: Lang): TeamMember {
  const localized: TeamMember = { ...member };
  if (lang !== defaultLang) {
    localized.role = roleI18n[lang]?.[member.role] ?? member.role;
    if (member.placeholder) {
      localized.name = placeholderNameI18n[lang] ?? member.name;
    }
  }
  if (member.href) {
    localized.href = member.href.startsWith("/")
      ? member.href
      : langPath(member.href, lang);
  }
  return localized;
}

function buildHiringPlaceholder(
  department: TeamDepartment,
  jobSlug: string,
  lang: Lang,
): TeamMember {
  const role = hiringPlaceholderRoles[department];
  return localizeMember(
    {
      name: PLACEHOLDER_NAME,
      role,
      placeholder: true,
      href: langPath(`about/careers/${jobSlug}`, lang),
      department,
    },
    lang,
  );
}

export function getDepartments(
  lang: Lang = defaultLang,
): Record<TeamDepartment, DeptMeta> {
  return departmentsI18n[lang] ?? departments;
}

export function getTeam(lang: Lang = defaultLang): TeamMember[] {
  const members = team.map((m) => localizeMember(m, lang));
  const hiringByDept = openRolesByDepartment();

  for (const [department, jobSlug] of hiringByDept) {
    members.push(buildHiringPlaceholder(department, jobSlug, lang));
  }

  return members;
}
