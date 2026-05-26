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

export const partnersIntro = {
  title: "Cooperation creates solutions.",
  lead:
    "We believe that the best solutions are created collaboratively. That is why we work closely with a number of strong partners, each of whom contributes specialised knowledge, technology and experience.",
};

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
