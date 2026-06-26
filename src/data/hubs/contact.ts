import type { Hub } from "./types";
import { defaultLang, langPath, type Lang } from "../lang";
import { getContact } from "../i18n/contact";

export const contactHub: Hub = {
  slug: "contact",
  title: "Get in touch.",
  titleAccent: "We are happy to help.",
  eyebrow: "Contact",
  lead: "Book a demo, talk to sales, find an existing customer's helpcenter or apply to become a partner.",
  leaves: [
    {
      slug: "book-demo",
      eyebrow: "Contact",
      title: "Book a demo.",
      titleAccent: "30 minutes, no strings.",
      lead: "Pick a slot that fits your calendar. We will show the product, discuss your use case and give you a concrete price estimate.",
      primaryCta: { label: "Book a free demo", href: "/en/contact/book-demo/" },
    },
    {
      slug: "sales",
      eyebrow: "Contact",
      title: "Talk to sales.",
      lead: "A short conversation with our sales team to understand your setup, scope and timeline.",
    },
    {
      slug: "support-info",
      eyebrow: "Contact",
      title: "Support information.",
      titleAccent: "Already a customer?",
      lead: "Use the helpcenter for guides, documentation and service levels. For direct support, call or write to us using the details below.",
      primaryCta: { label: "Go to the helpcenter", href: "https://support.iot-fabrikken.com" },
    },
    {
      slug: "become-partner",
      eyebrow: "Contact",
      title: "Become a partner.",
      titleAccent: "Build on top of RoomAlyzer.",
      lead: "Resell, integrate or co-develop with IoT Fabrikken. Tell us what you have in mind.",
    },
  ],
};

type LeafOverlay = {
  title: string;
  titleAccent?: string;
  lead: string;
  primaryCtaLabel?: string;
};

type ContactHubOverlay = {
  title: string;
  titleAccent: string;
  lead: string;
  leaves: Record<string, LeafOverlay>;
};

const contactHubI18n: Partial<Record<Lang, ContactHubOverlay>> = {
  da: {
    title: "Kom i kontakt.",
    titleAccent: "Vi hjælper gerne.",
    lead: "Book en demo, tal med salg, find en eksisterende kundes helpcenter eller søg om at blive partner.",
    leaves: {
      "book-demo": {
        title: "Book en demo.",
        titleAccent: "30 minutter, helt uforpligtende.",
        lead: "Vælg et tidspunkt, der passer i din kalender. Vi viser produktet, taler om din case og giver dig et konkret prisestimat.",
        primaryCtaLabel: "Book en gratis demo",
      },
      sales: {
        title: "Tal med salg.",
        lead: "En kort samtale med vores salgsteam for at forstå din opsætning, omfang og tidsplan.",
      },
      "support-info": {
        title: "Supportinformation.",
        titleAccent: "Allerede kunde?",
        lead: "Brug helpcenteret til guides, dokumentation og serviceaftaler. Har du brug for direkte support, kan du ringe eller skrive til os via oplysningerne nedenfor.",
        primaryCtaLabel: "Gå til helpcenter",
      },
      "become-partner": {
        title: "Bliv partner.",
        titleAccent: "Byg oven på RoomAlyzer.",
        lead: "Forhandl, integrér eller udvikl sammen med IoT Fabrikken. Fortæl os, hvad du har i tankerne.",
      },
    },
  },
  de: {
    title: "Kontakt aufnehmen.",
    titleAccent: "Wir helfen gern.",
    lead: "Buchen Sie eine Demo, sprechen Sie mit dem Vertrieb, finden Sie das Helpcenter für Bestandskunden oder bewerben Sie sich als Partner.",
    leaves: {
      "book-demo": {
        title: "Demo buchen.",
        titleAccent: "30 Minuten, unverbindlich.",
        lead: "Wählen Sie einen Termin, der in Ihren Kalender passt. Wir zeigen das Produkt, besprechen Ihren Anwendungsfall und geben Ihnen eine konkrete Preisschätzung.",
        primaryCtaLabel: "Kostenlose Demo buchen",
      },
      sales: {
        title: "Mit dem Vertrieb sprechen.",
        lead: "Ein kurzes Gespräch mit unserem Vertriebsteam, um Ihr Setup, den Umfang und den Zeitplan zu verstehen.",
      },
      "support-info": {
        title: "Support-Informationen.",
        titleAccent: "Bereits Kunde?",
        lead: "Im Helpcenter finden Sie Anleitungen, Dokumentation und Service-Level-Agreements. Für direkten Support erreichen Sie uns per Telefon oder E-Mail über die Angaben unten.",
        primaryCtaLabel: "Zum Helpcenter",
      },
      "become-partner": {
        title: "Partner werden.",
        titleAccent: "Bauen Sie auf RoomAlyzer auf.",
        lead: "Wiederverkaufen, integrieren oder gemeinsam entwickeln mit IoT Fabrikken. Sagen Sie uns, was Sie vorhaben.",
      },
    },
  },
  sv: {
    title: "Kom i kontakt.",
    titleAccent: "Vi hjälper gärna till.",
    lead: "Boka en demo, prata med försäljning, hitta en befintlig kunds helpcenter eller ansök om att bli partner.",
    leaves: {
      "book-demo": {
        title: "Boka en demo.",
        titleAccent: "30 minuter, helt förutsättningslöst.",
        lead: "Välj en tid som passar i din kalender. Vi visar produkten, pratar om ditt case och ger dig en konkret prisuppskattning.",
        primaryCtaLabel: "Boka en gratis demo",
      },
      sales: {
        title: "Prata med försäljning.",
        lead: "Ett kort samtal med vårt säljteam för att förstå din uppsättning, omfattning och tidsplan.",
      },
      "support-info": {
        title: "Supportinformation.",
        titleAccent: "Redan kund?",
        lead: "Använd helpcentret för guider, dokumentation och serviceavtal. För direkt support kan du ringa eller mejla oss via uppgifterna nedan.",
        primaryCtaLabel: "Gå till helpcenter",
      },
      "become-partner": {
        title: "Bli partner.",
        titleAccent: "Bygg ovanpå RoomAlyzer.",
        lead: "Återförsälj, integrera eller utveckla tillsammans med IoT Fabrikken. Berätta vad du har i åtanke.",
      },
    },
  },
};

/**
 * Locale-aware contact hub. Hrefs are rewritten to the requested locale and
 * the marketing copy falls back to English where a translation is missing.
 */
export function getContactHub(lang: Lang = defaultLang): Hub {
  const eyebrow = getContact(lang).eyebrow;
  const overlay = lang === defaultLang ? undefined : contactHubI18n[lang];

  const leaves = contactHub.leaves.map((leaf) => {
    const leafOverlay = overlay?.leaves[leaf.slug];
    const isExternalCta = leaf.primaryCta?.href?.startsWith("http");
    const primaryCta = leaf.primaryCta
      ? {
          label: leafOverlay?.primaryCtaLabel ?? leaf.primaryCta.label,
          href: isExternalCta
            ? leaf.primaryCta.href
            : langPath("contact/book-demo", lang),
        }
      : undefined;

    return {
      ...leaf,
      eyebrow,
      title: leafOverlay?.title ?? leaf.title,
      titleAccent: leafOverlay?.titleAccent ?? leaf.titleAccent,
      lead: leafOverlay?.lead ?? leaf.lead,
      ...(primaryCta ? { primaryCta } : {}),
    };
  });

  return {
    ...contactHub,
    eyebrow,
    title: overlay?.title ?? contactHub.title,
    titleAccent: overlay?.titleAccent ?? contactHub.titleAccent,
    lead: overlay?.lead ?? contactHub.lead,
    leaves,
  };
}
