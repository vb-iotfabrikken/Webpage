import type { Lang } from "../lang";
import { defaultLang, langPath } from "../lang";

/**
 * Orientation copy shown at the top of the Articles index. This replaces the
 * old "Welcome to the blog" post: it explains what the catalogue contains
 * without being a searchable article itself.
 *
 * English is canonical; other locales fall back to English until translated.
 */
export interface ArticlesIntro {
  title: string;
  lead: string;
  includes: string[];
  elsewhereLabel: string;
  elsewhere: { label: string; href: string }[];
}

const intros: Record<Lang, Omit<ArticlesIntro, "elsewhere">> = {
  en: {
    title: "What you'll find here",
    lead: "One place for everything we publish, practical how-tos, sector guides, standards explainers and longer reads from the field. Search or filter below, or start from your industry if you know your building type.",
    includes: [
      "How-tos and use cases by topic, indoor climate, preservation, water detection, space management and more.",
      "Sector-specific guidance, or jump straight to Industries to start from your building type.",
      "Standards, compliance and integration deep dives for technical readers.",
      "Longer reads and rollout stories from real customer projects.",
    ],
    elsewhereLabel: "Looking for something else?",
  },
  da: {
    title: "Det finder I her",
    lead: "Ét sted for alt, vi publicerer, praktiske how-tos, brancheguider, standardforklaringer og længere læsning fra feltet. Søg eller filtrer nedenfor, eller start fra jeres branche, hvis I kender jeres bygningstype.",
    includes: [
      "How-tos og use cases efter emne, indeklima, bevaring, vanddetektion, space management og mere.",
      "Branchevejledning, eller spring direkte til Brancher for at starte fra jeres bygningstype.",
      "Standarder, compliance og integrationsdyk for tekniske læsere.",
      "Længere læsning og udrulningshistorier fra rigtige kundeprojekter.",
    ],
    elsewhereLabel: "Leder I efter noget andet?",
  },
  de: {
    title: "Was Sie hier finden",
    lead: "Ein Ort für alles, was wir veröffentlichen, praktische Anleitungen, Branchenguides, Standard-Erklärungen und längere Lektüre aus der Praxis. Suchen oder filtern Sie unten, oder starten Sie von Ihrer Branche, wenn Sie Ihren Gebäudetyp kennen.",
    includes: [
      "Anleitungen und Anwendungsfälle nach Thema: Indoor climate, Preservation, Water detection, Space-Management und mehr.",
      "Branchenspezifische Orientierung, oder springen Sie direkt zu Branchen, um von Ihrem Gebäudetyp zu starten.",
      "Standards, Compliance und Integrations-Tiefenblicke für technische Leser.",
      "Längere Lektüre und Rollout-Geschichten aus echten Kundenprojekten.",
    ],
    elsewhereLabel: "Suchen Sie etwas anderes?",
  },
  sv: {
    title: "Det hittar ni här",
    lead: "Ett ställe för allt vi publicerar, praktiska how-tos, branschguider, standardförklaringar och längre läsning från fältet. Sök eller filtrera nedan, eller börja från er bransch om ni känner till er byggnadstyp.",
    includes: [
      "How-tos och use cases per ämne, inomhusklimat, bevarande, vattendetektering, space management och mer.",
      "Branschspecifik vägledning, eller hoppa direkt till Branscher för att börja från er byggnadstyp.",
      "Standarder, compliance och integrationsdjupdykningar för tekniska läsare.",
      "Längre läsning och utrullningsberättelser från riktiga kundprojekt.",
    ],
    elsewhereLabel: "Letar ni efter något annat?",
  },
};

function elsewhereLinks(lang: Lang): { label: string; href: string }[] {
  const labels: Record<Lang, [string, string, string, string]> = {
    en: ["Industries", "Customer cases", "Glossary", "FAQ"],
    da: ["Brancher", "Kundecases", "Ordliste", "FAQ"],
    de: ["Branchen", "Kundenreferenzen", "Glossar", "FAQ"],
    sv: ["Branscher", "Kundcase", "Ordlista", "FAQ"],
  };
  const [industries, cases, glossary, faq] = labels[lang];
  return [
    { label: industries, href: langPath("industries", lang) },
    { label: cases, href: langPath("case-studies", lang) },
    { label: glossary, href: langPath("glossary", lang) },
    { label: faq, href: langPath("faq", lang) },
  ];
}

/** Articles-index intro copy for a locale, with localised cross-links. */
export function getArticlesIntro(lang: Lang): ArticlesIntro {
  const copy = intros[lang] ?? intros[defaultLang];
  return {
    ...copy,
    elsewhere: elsewhereLinks(lang),
  };
}
