/**
 * Technology and commercial partners. Rendered at `/en/about/partners/`.
 *
 * Logo files live under `public/partners/`. Keep entries factual and short.
 */

export type PartnerEntry =
  | {
      kind: "partner";
      name: string;
      logo: string;
      logoAlt: string;
      url: string;
    }
  | {
      kind: "placeholder";
      /** Short line shown in the empty slot */
      label: string;
      /** Optional subline under the label */
      hint?: string;
      href: string;
    };

import { defaultLang, langPath, type Lang } from "./lang";

export const partnersIntro = {
  title: "Cooperation creates solutions.",
  lead:
    "We believe that the best solutions are created collaboratively. That is why we work closely with a number of strong partners, each of whom contributes specialised knowledge, technology and experience.",
};

const partnersIntroI18n: Partial<Record<Lang, { title: string; lead: string }>> = {
  da: { title: "Samarbejde skaber løsninger.", lead: "Vi tror på, at de bedste løsninger skabes i fællesskab. Derfor arbejder vi tæt sammen med en række stærke partnere, der hver især bidrager med specialiseret viden, teknologi og erfaring." },
  de: { title: "Zusammenarbeit schafft Lösungen.", lead: "Wir glauben, dass die besten Lösungen gemeinsam entstehen. Deshalb arbeiten wir eng mit einer Reihe starker Partner zusammen, die jeweils spezialisiertes Wissen, Technologie und Erfahrung einbringen." },
  sv: { title: "Samarbete skapar lösningar.", lead: "Vi tror att de bästa lösningarna skapas tillsammans. Därför arbetar vi nära ett antal starka partner som var och en bidrar med specialiserad kunskap, teknik och erfarenhet." },
};

const placeholderI18n: Partial<Record<Lang, { label: string; hint: string }>> = {
  da: { label: "Din plads her", hint: "Bliv partner" },
  de: { label: "Ihr Platz hier", hint: "Partner werden" },
  sv: { label: "Din plats här", hint: "Bli partner" },
};

export function getPartnersIntro(
  lang: Lang = defaultLang,
): { title: string; lead: string } {
  return partnersIntroI18n[lang] ?? partnersIntro;
}

/** Partners shown on the public partners page (aligned with iot-fabrikken.uk). */
export const partners: PartnerEntry[] = [
  {
    kind: "partner",
    name: "ERIK",
    logo: "/partners/erik.jpg",
    logoAlt: "ERIK logo",
    url: "https://www.erik.dk/",
  },
  {
    kind: "partner",
    name: "ProEnergi",
    logo: "/partners/proenergi.jpg",
    logoAlt: "ProEnergi logo",
    url: "https://proenergi.dk/",
  },
  {
    kind: "partner",
    name: "MyDesk",
    logo: "/partners/mydesk.jpg",
    logoAlt: "MyDesk logo",
    url: "https://mydesk.io/",
  },
  {
    kind: "partner",
    name: "Disruptive Technologies",
    logo: "/partners/disruptive.jpg",
    logoAlt: "Disruptive Technologies logo",
    url: "https://www.disruptive-technologies.com/",
  },
  {
    kind: "partner",
    name: "Sodexo",
    logo: "/partners/sodexo.jpg",
    logoAlt: "Sodexo logo",
    url: "https://www.sodexo.com/",
  },
  {
    kind: "partner",
    name: "CleanManager",
    logo: "/partners/cleanmanager.jpg",
    logoAlt: "CleanManager logo",
    url: "https://cleanmanager.dk/",
  },
  {
    kind: "partner",
    name: "Anderberg Klima",
    logo: "/partners/anderberg-klima.jpg",
    logoAlt: "Anderberg Klima logo",
    url: "https://anderbergklima.dk/",
  },
  {
    kind: "partner",
    name: "Dalux",
    logo: "/partners/dalux.jpg",
    logoAlt: "Dalux logo",
    url: "https://www.dalux.com/",
  },
  {
    kind: "placeholder",
    label: "Your place here",
    hint: "Become a partner",
    href: "/en/contact/become-partner/",
  },
];

export function getPartners(lang: Lang = defaultLang): PartnerEntry[] {
  return partners.map((entry) => {
    if (entry.kind !== "placeholder") return entry;
    const t = placeholderI18n[lang];
    return {
      ...entry,
      label: t?.label ?? entry.label,
      hint: t?.hint ?? entry.hint,
      href: langPath("contact/become-partner", lang),
    };
  });
}
