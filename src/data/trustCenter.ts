/**
 * Trust center content for `/{lang}/about/trust-center/`.
 *
 * The Trust center is the buyer-facing front door for security, privacy and
 * compliance. Most pillars link into the Legal hub; Security links to the
 * Platform hub. The
 * certification block surfaces the Danish D-Label hardware certification.
 */

import { defaultLang, type Lang } from "./lang";

/** A trust pillar that links to an internal page (locale-stripped slug). */
export interface TrustPillar {
  /** Internal route, e.g. `platform/security` or `legal/privacy`. */
  slug: string;
  title: string;
  description: string;
}

export interface TrustCenterContent {
  metaTitle: string;
  metaDescription: string;
  crumb: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  pillars: TrustPillar[];
  certification: {
    eyebrow: string;
    title: string;
    lead: string;
    points: string[];
  };
  ctaTitle: string;
  ctaSubtitle: string;
}

const en: TrustCenterContent = {
  metaTitle: "Trust center | About | IoT Fabrikken",
  metaDescription:
    "Security, privacy, compliance and certifications for RoomAlyzer — everything you need to evaluate IoT Fabrikken with confidence.",
  crumb: "Trust center",
  heroTitle: "Trust center.",
  heroTitleAccent: "Security, privacy and compliance in one place.",
  heroLead:
    "RoomAlyzer is built by a 100% Danish-owned company. Here you'll find our security posture, data-processing terms, service commitments and product certifications — everything you need to evaluate us with confidence.",
  pillars: [
    {
      slug: "platform/security",
      title: "Security.",
      description:
        "Encryption, access controls and the architectural choices behind RoomAlyzer's security posture.",
    },
    {
      slug: "legal/privacy",
      title: "Privacy & GDPR.",
      description:
        "How we process personal data, which subprocessors we use and the rights you have as a registered person.",
    },
    {
      slug: "legal/terms",
      title: "Terms & DPA.",
      description:
        "Our commercial terms and the data-processing agreement that applies to every RoomAlyzer deployment.",
    },
    {
      slug: "legal/sla",
      title: "Service levels.",
      description:
        "Our uptime commitment, support hours and the way we measure and report on service levels.",
    },
  ],
  certification: {
    eyebrow: "Certification",
    title: "D-Label certified hardware.",
    lead: "Our hardware carries the Danish D-Label — a recognition of design, durability and sustainability.",
    points: [
      "An independently assessed Danish design certification.",
      "Built to last, with longevity and repairability in mind.",
      "Sustainable materials and responsible production.",
    ],
  },
  ctaTitle: "Need a deeper security review?",
  ctaSubtitle:
    "We're happy to share documentation, answer your security questionnaire and walk your team through our setup.",
};

const da: TrustCenterContent = {
  metaTitle: "Trust center | Om os | IoT Fabrikken",
  metaDescription:
    "Sikkerhed, privatliv, compliance og certificeringer for RoomAlyzer — alt, hvad du skal bruge for at vurdere IoT Fabrikken med tryghed.",
  crumb: "Trust center",
  heroTitle: "Trust center.",
  heroTitleAccent: "Sikkerhed, privatliv og compliance ét sted.",
  heroLead:
    "RoomAlyzer er bygget af en 100% dansk-ejet virksomhed. Her finder du vores sikkerhed, databehandlingsvilkår, serviceforpligtelser og produktcertificeringer — alt, hvad du skal bruge for at vurdere os med tryghed.",
  pillars: [
    {
      slug: "platform/security",
      title: "Sikkerhed.",
      description:
        "Kryptering, adgangskontroller og de arkitektoniske valg bag RoomAlyzers sikkerhed.",
    },
    {
      slug: "legal/privacy",
      title: "Privatliv & GDPR.",
      description:
        "Hvordan vi behandler personoplysninger, hvilke underdatabehandlere vi bruger, og hvilke rettigheder du har som registreret.",
    },
    {
      slug: "legal/terms",
      title: "Vilkår & databehandleraftale.",
      description:
        "Vores kommercielle vilkår og den databehandleraftale, der gælder for enhver RoomAlyzer-implementering.",
    },
    {
      slug: "legal/sla",
      title: "Serviceniveauer.",
      description:
        "Vores oppetidsgaranti, supporttider og måden, vi måler og rapporterer serviceniveauer på.",
    },
  ],
  certification: {
    eyebrow: "Certificering",
    title: "D-mærket certificeret hardware.",
    lead: "Vores hardware bærer det danske D-mærke — en anerkendelse af design, holdbarhed og bæredygtighed.",
    points: [
      "En uafhængigt vurderet dansk designcertificering.",
      "Bygget til at holde, med fokus på levetid og reparerbarhed.",
      "Bæredygtige materialer og ansvarlig produktion.",
    ],
  },
  ctaTitle: "Brug for en grundigere sikkerhedsgennemgang?",
  ctaSubtitle:
    "Vi deler gerne dokumentation, besvarer dit sikkerhedsspørgeskema og gennemgår vores opsætning med dit team.",
};

const de: TrustCenterContent = {
  metaTitle: "Trust Center | Über uns | IoT Fabrikken",
  metaDescription:
    "Sicherheit, Datenschutz, Compliance und Zertifizierungen für RoomAlyzer — alles, was Sie brauchen, um IoT Fabrikken mit Vertrauen zu bewerten.",
  crumb: "Trust Center",
  heroTitle: "Trust Center.",
  heroTitleAccent: "Sicherheit, Datenschutz und Compliance an einem Ort.",
  heroLead:
    "RoomAlyzer wird von einem zu 100% in dänischem Besitz befindlichen Unternehmen entwickelt. Hier finden Sie unsere Sicherheitslage, Datenverarbeitungsbedingungen, Serviceverpflichtungen und Produktzertifizierungen — alles, was Sie brauchen, um uns mit Vertrauen zu bewerten.",
  pillars: [
    {
      slug: "platform/security",
      title: "Sicherheit.",
      description:
        "Verschlüsselung, Zugriffskontrollen und die architektonischen Entscheidungen hinter der Sicherheit von RoomAlyzer.",
    },
    {
      slug: "legal/privacy",
      title: "Datenschutz & DSGVO.",
      description:
        "Wie wir personenbezogene Daten verarbeiten, welche Auftragsverarbeiter wir einsetzen und welche Rechte Sie als betroffene Person haben.",
    },
    {
      slug: "legal/terms",
      title: "Bedingungen & AVV.",
      description:
        "Unsere Geschäftsbedingungen und der Auftragsverarbeitungsvertrag, der für jede RoomAlyzer-Bereitstellung gilt.",
    },
    {
      slug: "legal/sla",
      title: "Service-Level.",
      description:
        "Unsere Verfügbarkeitszusage, Supportzeiten und die Art, wie wir Service-Level messen und darüber berichten.",
    },
  ],
  certification: {
    eyebrow: "Zertifizierung",
    title: "D-Label-zertifizierte Hardware.",
    lead: "Unsere Hardware trägt das dänische D-Label — eine Anerkennung für Design, Langlebigkeit und Nachhaltigkeit.",
    points: [
      "Eine unabhängig geprüfte dänische Designzertifizierung.",
      "Auf Langlebigkeit und Reparierbarkeit ausgelegt.",
      "Nachhaltige Materialien und verantwortungsvolle Produktion.",
    ],
  },
  ctaTitle: "Brauchen Sie eine tiefergehende Sicherheitsprüfung?",
  ctaSubtitle:
    "Wir teilen gern Dokumentation, beantworten Ihren Sicherheitsfragebogen und führen Ihr Team durch unser Setup.",
};

const sv: TrustCenterContent = {
  metaTitle: "Trust center | Om oss | IoT Fabrikken",
  metaDescription:
    "Säkerhet, integritet, compliance och certifieringar för RoomAlyzer — allt du behöver för att utvärdera IoT Fabrikken med trygghet.",
  crumb: "Trust center",
  heroTitle: "Trust center.",
  heroTitleAccent: "Säkerhet, integritet och compliance på ett ställe.",
  heroLead:
    "RoomAlyzer byggs av ett till 100% danskägt företag. Här hittar du vår säkerhet, databehandlingsvillkor, serviceåtaganden och produktcertifieringar — allt du behöver för att utvärdera oss med trygghet.",
  pillars: [
    {
      slug: "platform/security",
      title: "Säkerhet.",
      description:
        "Kryptering, åtkomstkontroller och de arkitekturval som ligger bakom RoomAlyzers säkerhet.",
    },
    {
      slug: "legal/privacy",
      title: "Integritet & GDPR.",
      description:
        "Hur vi behandlar personuppgifter, vilka underbiträden vi använder och vilka rättigheter du har som registrerad.",
    },
    {
      slug: "legal/terms",
      title: "Villkor & biträdesavtal.",
      description:
        "Våra kommersiella villkor och det personuppgiftsbiträdesavtal som gäller för varje RoomAlyzer-driftsättning.",
    },
    {
      slug: "legal/sla",
      title: "Servicenivåer.",
      description:
        "Vårt drifttidsåtagande, supporttider och hur vi mäter och rapporterar servicenivåer.",
    },
  ],
  certification: {
    eyebrow: "Certifiering",
    title: "D-Label-certifierad hårdvara.",
    lead: "Vår hårdvara bär det danska D-Label — ett erkännande av design, hållbarhet och hållbar utveckling.",
    points: [
      "En oberoende bedömd dansk designcertifiering.",
      "Byggd för att hålla, med fokus på livslängd och reparerbarhet.",
      "Hållbara material och ansvarsfull produktion.",
    ],
  },
  ctaTitle: "Behöver du en djupare säkerhetsgenomgång?",
  ctaSubtitle:
    "Vi delar gärna dokumentation, besvarar ditt säkerhetsformulär och går igenom vår uppsättning med ditt team.",
};

const dictionaries: Record<Lang, TrustCenterContent> = { en, da, de, sv };

export function getTrustCenter(lang: Lang = defaultLang): TrustCenterContent {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}
