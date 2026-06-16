/**
 * Our story content for `/{lang}/about/story/`.
 */

import { defaultLang, type Lang } from "./lang";

export const storyIntro = {
  title: "Our story.",
  titleAccent: "25 years in the making.",
  lead: "From DIBS and eSmiley to IoT Fabrikken — the track record behind the company.",
};

export const storyParagraphs: string[] = [
  "IoT Fabrikken was founded in 2018 by Mikkel Fischer and Jon Wichmann. However, the foundation of the company was laid long before that. The founding partners brought with them a strong track record, having previously built two highly successful tech enterprises: DIBS, a pioneer in secure online payments which is today owned by Nets, and eSmiley, the leading provider of digital food safety solutions for professional kitchens, canteens, and hospitals across the Nordic region.",
  "Together, they share more than 25 years of in-depth expertise in developing software designed to make daily operations simpler. This experience forms the very core of IoT Fabrikken. As our name suggests, we harness the power of the Internet of Things (IoT) to remove complexity. We believe that securing vital data should be as simple as mounting a sensor that automatically finds the network and starts delivering insights. Our guiding principle is that technology must always support your daily work – it should be precise, entirely dependable, and accessible to everyone, regardless of their level of IT proficiency.",
  "Today, IoT Fabrikken operates from two offices in Denmark, located in Roskilde in the east and Hørning in the west. We also collaborate closely with dedicated partners across several countries, with Germany and Sweden standing out as two of our most significant growth markets.",
  "What started as a vision between two men has grown into a highly successful enterprise that makes a tangible difference every day. Currently, we deliver our solutions to 70 Danish municipalities, alongside a wealth of private businesses, housing associations, museums, churches, and industry advisors. We are incredibly proud that thousands of customers now rely on our system daily to support and elevate their work within facility management, space management, and cultural preservation.",
];

type StoryIntro = { title: string; titleAccent: string; lead: string };

const storyIntroI18n: Partial<Record<Lang, StoryIntro>> = {
  da: { title: "Vores historie.", titleAccent: "25 år i støbeskeen.", lead: "Fra DIBS og eSmiley til IoT Fabrikken — historikken bag virksomheden." },
  de: { title: "Unsere Geschichte.", titleAccent: "25 Jahre in der Entstehung.", lead: "Von DIBS und eSmiley zu IoT Fabrikken — die Erfolgsbilanz hinter dem Unternehmen." },
  sv: { title: "Vår historia.", titleAccent: "25 år i vardande.", lead: "Från DIBS och eSmiley till IoT Fabrikken — meritlistan bakom företaget." },
};

const storyParagraphsI18n: Partial<Record<Lang, string[]>> = {
  da: [
    "IoT Fabrikken blev grundlagt i 2018 af Mikkel Fischer og Jon Wichmann. Fundamentet for virksomheden blev dog lagt længe før. De stiftende partnere bragte en stærk historik med sig, efter tidligere at have opbygget to yderst succesfulde tech-virksomheder: DIBS, en pioner inden for sikre onlinebetalinger, som i dag ejes af Nets, og eSmiley, den førende leverandør af digitale fødevaresikkerhedsløsninger til professionelle køkkener, kantiner og hospitaler i hele Norden.",
    "Tilsammen har de mere end 25 års dybdegående erfaring med at udvikle software, der gør den daglige drift enklere. Den erfaring udgør selve kernen i IoT Fabrikken. Som vores navn antyder, udnytter vi styrken i Internet of Things (IoT) til at fjerne kompleksitet. Vi mener, at det at sikre vigtige data bør være lige så enkelt som at montere en sensor, der automatisk finder netværket og begynder at levere indsigt. Vores grundprincip er, at teknologi altid skal understøtte dit daglige arbejde – den skal være præcis, fuldstændig pålidelig og tilgængelig for alle, uanset deres it-kundskaber.",
    "I dag opererer IoT Fabrikken fra to kontorer i Danmark, beliggende i Roskilde mod øst og Hørning mod vest. Vi samarbejder også tæt med dedikerede partnere i flere lande, hvor Tyskland og Sverige skiller sig ud som to af vores vigtigste vækstmarkeder.",
    "Det, der startede som en vision mellem to mænd, er vokset til en yderst succesfuld virksomhed, der gør en mærkbar forskel hver dag. I dag leverer vi vores løsninger til 70 danske kommuner samt en lang række private virksomheder, boligforeninger, museer, kirker og brancherådgivere. Vi er utroligt stolte af, at tusindvis af kunder nu dagligt bruger vores system til at understøtte og løfte deres arbejde inden for facility management, space management og kulturbevaring.",
  ],
  de: [
    "IoT Fabrikken wurde 2018 von Mikkel Fischer und Jon Wichmann gegründet. Das Fundament des Unternehmens wurde jedoch lange zuvor gelegt. Die Gründungspartner brachten eine starke Erfolgsbilanz mit, hatten sie doch zuvor zwei äußerst erfolgreiche Tech-Unternehmen aufgebaut: DIBS, einen Pionier für sichere Online-Zahlungen, der heute Nets gehört, und eSmiley, den führenden Anbieter digitaler Lebensmittelsicherheitslösungen für Großküchen, Kantinen und Krankenhäuser in ganz Nordeuropa.",
    "Zusammen verfügen sie über mehr als 25 Jahre fundierte Erfahrung in der Entwicklung von Software, die den Arbeitsalltag einfacher macht. Diese Erfahrung bildet den eigentlichen Kern von IoT Fabrikken. Wie unser Name andeutet, nutzen wir die Kraft des Internets der Dinge (IoT), um Komplexität zu beseitigen. Wir sind überzeugt, dass das Sichern wichtiger Daten so einfach sein sollte wie das Anbringen eines Sensors, der automatisch das Netzwerk findet und Erkenntnisse liefert. Unser Leitprinzip lautet: Technik muss Ihre tägliche Arbeit immer unterstützen – sie sollte präzise, absolut zuverlässig und für alle zugänglich sein, unabhängig von ihren IT-Kenntnissen.",
    "Heute arbeitet IoT Fabrikken von zwei Büros in Dänemark aus, in Roskilde im Osten und Hørning im Westen. Außerdem arbeiten wir eng mit engagierten Partnern in mehreren Ländern zusammen, wobei Deutschland und Schweden zu unseren bedeutendsten Wachstumsmärkten zählen.",
    "Was als Vision zwischen zwei Männern begann, ist zu einem äußerst erfolgreichen Unternehmen herangewachsen, das jeden Tag einen spürbaren Unterschied macht. Derzeit liefern wir unsere Lösungen an 70 dänische Kommunen sowie an zahlreiche private Unternehmen, Wohnungsbaugesellschaften, Museen, Kirchen und Branchenberater. Wir sind unglaublich stolz, dass sich heute Tausende von Kunden täglich auf unser System verlassen, um ihre Arbeit im Facility Management, Space-Management und in der Kulturerhaltung zu unterstützen und zu verbessern.",
  ],
  sv: [
    "IoT Fabrikken grundades 2018 av Mikkel Fischer och Jon Wichmann. Grunden för företaget lades dock långt tidigare. De grundande partnerna hade med sig en stark meritlista efter att tidigare ha byggt upp två mycket framgångsrika teknikföretag: DIBS, en pionjär inom säkra onlinebetalningar som i dag ägs av Nets, och eSmiley, den ledande leverantören av digitala livsmedelssäkerhetslösningar för professionella kök, matsalar och sjukhus i hela Norden.",
    "Tillsammans har de mer än 25 års djupgående erfarenhet av att utveckla mjukvara som gör den dagliga driften enklare. Den erfarenheten utgör själva kärnan i IoT Fabrikken. Som vårt namn antyder utnyttjar vi kraften i Internet of Things (IoT) för att ta bort komplexitet. Vi anser att säkrandet av viktiga data bör vara lika enkelt som att montera en sensor som automatiskt hittar nätverket och börjar leverera insikter. Vår grundprincip är att tekniken alltid ska stödja ditt dagliga arbete – den ska vara exakt, helt pålitlig och tillgänglig för alla, oavsett deras it-kunskaper.",
    "I dag verkar IoT Fabrikken från två kontor i Danmark, i Roskilde i öster och Hørning i väster. Vi samarbetar också nära med engagerade partner i flera länder, där Tyskland och Sverige utmärker sig som två av våra viktigaste tillväxtmarknader.",
    "Det som började som en vision mellan två män har vuxit till ett mycket framgångsrikt företag som gör en påtaglig skillnad varje dag. I dag levererar vi våra lösningar till 70 danska kommuner, tillsammans med en mängd privata företag, bostadsföreningar, museer, kyrkor och branschrådgivare. Vi är otroligt stolta över att tusentals kunder nu dagligen förlitar sig på vårt system för att stödja och lyfta sitt arbete inom facility management, space management och kulturbevarande.",
  ],
};

export function getStory(lang: Lang = defaultLang): {
  intro: StoryIntro;
  paragraphs: string[];
} {
  return {
    intro: storyIntroI18n[lang] ?? storyIntro,
    paragraphs: storyParagraphsI18n[lang] ?? storyParagraphs,
  };
}
