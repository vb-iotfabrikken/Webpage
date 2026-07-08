import type { Lang } from "../lang";
import type { ModulePageContent } from "./types";

/**
 * Per-locale overlays for module detail-page body copy. English lives in
 * `modules.ts`; any field omitted here falls back to English. `challenges` and
 * `solution` arrays are replaced wholesale when provided.
 */

export type ModuleContentOverlay = Partial<Omit<ModulePageContent, "slug">>;

const da: Record<string, ModuleContentOverlay> = {
  "indoor-climate": {
    heroTitle: "Indeklimaovervågning",
    heroTitleAccent: "der gør klager til fakta.",
    heroLead:
      "Indeklimaovervågning giver dig data til at besvare et spørgsmål, enhver, der arbejder med drift, kender: er klagen reel, eller er det en fornemmelse? Én har det for varmt, en anden har det for koldt, og en tredje synes, at luften føles tung midt på eftermiddagen. Uden data på temperatur, fugt og CO2 ender du med at styre efter følelser, justere ventilation på gætværk og forsvare beslutninger, du ikke kan dokumentere.",
    challenges: [
      "Klager, du ikke kan verificere: en bruger melder om dårlig luftkvalitet, og du har ingen mulighed for at bekræfte, om der skal handles, eller om det er et spørgsmål om oplevelse.",
      "Systemer, der kører i blinde: varme og ventilation følger faste tidsplaner i stedet for faktiske forhold og spilder energi, når rum er tomme, og underpræsterer, når de er fyldte.",
      "Ingen dokumentation til samtalen: når ledelse, medarbejdere eller myndigheder spørger til indeklimaet på kontoret eller skolen, har du intet konkret at vise.",
    ],
    solution: [
      "RoomAlyzer måler temperatur, fugt, CO2 og TVOC løbende og omsætter det til klar dokumentation, så du kan besvare enhver klage med fakta i stedet for fornemmelser. Du ser præcis, hvornår CO2-niveauet stiger, hvornår fugten indbyder til skimmel, og om et rum reelt kræver handling eller bare en beroligelse.",
      "RoomAlyzer gør mere end at vise dig tallene: Platformen advarer dig, når skimmel bliver en risiko, og foreslår konkrete justeringer, så du kan tilpasse varme og ventilation til den faktiske brug og sænke energiomkostningerne uden at miste komfort. Bruges i både kontorer, skoler og kommuner.",
    ],
    smarterTogether:
      "Kombineret med Space management kan RoomAlyzer tilpasse energiforbrug og indeklima til antallet af personer, der faktisk er til stede, og vise det hele i ét overblik.",
    closing:
      "Løsninger som denne er normalt dyre og besværlige at installere. RoomAlyzer er klar på minutter, er fleksibel, når dine behov ændrer sig, og koster en brøkdel af prisen.",
  },
  "space-management": {
    heroTitle: "Space management-data",
    heroTitleAccent: "der erstatter mavefornemmelse med fakta.",
    heroLead:
      "Space management starter med et enkelt, men dyrt spørgsmål: hvor meget af jeres areal bruger I faktisk? Når medarbejdere møder ind og forventer at finde et ledigt skrivebord og det rette mødelokale, og ledelsen skal beslutte, om der skal lejes, ombygges eller bygges nyt, kan I ikke styre efter følelser. I har brug for at vide, hvilke skriveborde og lokaler der er i brug, hvornår belægningen topper, og hvor I betaler for arealer, der står tomme.",
    challenges: [
      "I betaler for areal, I ikke bruger: Skriveborde og mødelokaler står tomme, mens I lejer eller bygger mere — uden data til at vise, hvad der kan frigives eller bruges anderledes.",
      "Mødelokaler, der ikke hænger sammen: lokaler booket til ti og brugt af to, og møder, der aflyses, men aldrig afbookes, så kalenderen ser fuld ud, mens lokalerne står tomme.",
      "Intet overblik på tværs af etager og lokationer: du kan ikke i realtid se, hvad der er ledigt, hvad der er optaget, eller hvilke zoner der er mest efterspurgte.",
      "Beslutninger, der er svære at forsvare: at fordele areal mellem afdelinger eller planlægge nyansættelser bliver en forhandling baseret på holdninger frem for brug.",
    ],
    solution: [
      "RoomAlyzer Space management giver jer et live, anonymiseret overblik over belægningen af skriveborde og lokaler – i realtid og over tid. I ser, hvilke skriveborde der er ledige lige nu, hvordan zonerne bruges hen over dagen og ugen, hvornår belægningen topper, og præcis hvor I har ledig kapacitet.",
      "Mødelokaler er et fokus i sig selv: Du kan se, hvordan de reelt bruges (booket til mange, brugt af få) og få lokaler frigivet automatisk, når en booking ikke benyttes, så et aflyst møde ikke længere blokerer et lokale, der faktisk er ledigt. Den indbyggede økonomiberegner omsætter det hele til konkrete besparelser på husleje og energi, mens heatmaps og rapporter giver dig et objektivt grundlag for at træffe fair beslutninger. Fordi den er udviklet i Danmark og bygget til at være let at bruge for enhver, er den relevant for facility management, arealplanlæggere, drift og kommuner.",
    ],
    smarterTogether:
      "RoomAlyzer kan vise arealudnyttelse og indeklima side om side, så du kan tilpasse energiforbrug og ventilation til antallet af personer, der faktisk er til stede – og ramme den rette balance mellem trivsel og energioptimering.",
    closing:
      "Hvor space management-systemer normalt er dyre og forstyrrende at rulle ud, installeres RoomAlyzer på minutter, tilpasser sig, når arbejdspladsen ændrer sig, og koster en brøkdel af det sædvanlige.",
  },
  "water-detection": {
    heroTitle: "Detektion af vandlækager",
    heroTitleAccent: "der advarer dig, før skaden spreder sig.",
    heroLead:
      "Vanddetektion handler om én ting: at få beskeden, før et lille læk bliver til en dyr katastrofe. Et sprængt rør i en skakt, et læk i et el-skab eller vand under en vask i en boligforening kan løbe uopdaget i timer eller dage – og når nogen endelig opdager det, er regningen og generne allerede store.",
    challenges: [
      "Læk opdaget for sent: vand når servere, el-installationer eller bygningens konstruktion, før nogen er opmærksom, og en mindre hændelse bliver til en stor.",
      "Alarmer, ingen hører: en traditionel sensor sidder og bipper for sig selv i en kælder eller skakt, hvor der ikke er nogen til at bemærke den.",
      "Svært tilgængelige risikopunkter: skakte, kældre og teknikrum er præcis dér, hvor læk opstår, og præcis dér, hvor ingen kigger regelmæssigt.",
      "Ingen dokumentation bagefter: når forsikringssamtalen kommer, har du ingen objektiv registrering af, hvornår og hvor det skete.",
    ],
    solution: [
      "RoomAlyzer sender en advarsel direkte på e-mail eller SMS, når der registreres vand, så du kan handle, før skaden spreder sig. I stedet for en alarm, der bipper i et tomt rum, går beskeden direkte til rette person – og du kan tilføje så mange modtagere, du har brug for, så den altid når frem til nogen, der kan handle.",
      "Sensorerne kører på et mobilnetværk, der fungerer uafhængigt af lokalt Wi-Fi og når dybe kældre, skakte og lukkede skabe, og en detaljeret hændelseslog giver dig en objektiv registrering til forsikringen. Det er enkelt, driftsnært og et reelt effektivt tidligt varslingssystem til facility management, drift og boligforeninger.",
    ],
    closing:
      "Lækdetektionssystemer er normalt dyre og komplicerede at installere. Dette tager minutter at sætte op, går derhen, hvor risikoen er, og koster en brøkdel af prisen.",
  },
  preservation: {
    heroTitle: "Klimaovervågning af kulturarv",
    heroTitleAccent: "der beskytter samlinger og sparer energi.",
    heroLead:
      "Bevaring handler om ét spørgsmål, som de fleste kirker, museer, arkiver og fredede bygninger står med: I hvilket klima opbevarer I egentlig jeres genstande? Hvad enten det er et højalter, et orgel, et maleri eller en montre med gammelt træ, gør den forkerte luftfugtighed eller temperatur langsom, uoprettelig skade – og man ser det sjældent, før det er for sent.",
    challenges: [
      "Usynlig, gradvis skade: ugunstig luftfugtighed og temperatur skader uerstattelige genstande længe før, der viser sig et synligt tegn.",
      "Ingen dokumentation af forholdene: du kan ikke bevise, hvilket klima jeres samling har været opbevaret i – over for forsikringsselskaber, fonde eller bevaringskrav.",
      "Bevaring kontra energiregninger: at opvarme en historisk bygning for at beskytte dens indhold er dyrt, og uden data kan du ikke finde balancen.",
    ],
    solution: [
      "RoomAlyzer overvåger temperatur og luftfugtighed og omsætter det til klar dokumentation af de præcise forhold, jeres genstande opbevares under. Vores sensorer er kendt for deres høje præcision – noget konservatorer med rette lægger vægt på – så I kan stole på de tal, I bevarer jeres samling efter.",
      "Du kan holde øje med enhver form for samling, fra altre og orgler til malerier og montrer, og afveje bevaring mod energiforbrug i stedet for at gætte. En af de reelle styrker her er, at de samme data kan bruges af to forskellige roller, der sjældent deler værktøj: Konservatoren, der beskytter samlingen, og facility manageren, der driver bygningen, arbejder ud fra de samme fakta. Det er ikke tilfældigt – konservatorer har været med til at forme, hvordan det fungerer. Ideel til museer, kirker, arkiver og bevaring af kulturarv.",
    ],
    closing:
      "Klimaovervågning af samlinger er normalt dyr og besværlig at installere. RoomAlyzer er klar på minutter, fleksibel nok til enhver bygning og koster en brøkdel af det forventede.",
  },
  "usage-cleaning": {
    heroTitle: "Datadrevet rengøring",
    heroTitleAccent: "der følger faktisk brug, ikke en fast plan.",
    heroLead:
      "Behovsbaseret rengøring besvarer et spørgsmål, ethvert driftsteam kender: hvorfor gøre et rum rent, som ingen har brugt, mens et stærkt benyttet lokale venter på tur? Faste rengøringsplaner behandler alle rum ens, og det betyder indsats, hvor der ikke er behov, og for lidt, hvor der er.",
    challenges: [
      "Rengøring efter plan, ikke efter behov: rum, der står ubrugte hen, gøres rene efter skema, mens travle områder og offentlige toiletter venter på deres tur.",
      "Spildte ressourcer: personaletimer og rengøringsomkostninger går til rum, der ikke er rørt siden sidste runde.",
      "Intet grundlag for samtalen: du kan ikke vise et rengøringsfirma eller en budgetansvarlig, hvor indsatsen reelt skal lægges.",
    ],
    solution: [
      "RoomAlyzer viser dig, hvilke rum der faktisk er blevet brugt, så rengøringen kan følge reel efterspørgsel i stedet for et fast skema. Gør de travle områder bedre rene, og spring det over, der allerede er rent og urørt, fra kontorer til offentlige toiletter.",
      "Resultatet er bedre hygiejne dér, hvor det betyder noget, lavere omkostninger og et klart grundlag for planlægning. Bygget til rengøringsteams og facility management deler den sine data direkte med Space management.",
    ],
    closing:
      "Sammenlignet med de sædvanlige omkostninger og det sædvanlige besvær ved systemer som dette installeres RoomAlyzer på minutter, tilpasser sig din bygning og koster en brøkdel af prisen.",
  },
  "push-buttons": {
    heroTitle: "Brugerfeedback i realtid",
    heroTitleAccent: "der gør problemer til øjeblikkelige servicekald.",
    heroLead:
      "Brugerfeedback kommer som regel for sent, som en klage, efter at kaffemaskinen har været i stykker hele formiddagen, eller toilettet har manglet papir i timevis. Når du hører om det, er skaden på oplevelsen allerede sket.",
    challenges: [
      "Du hører om problemer for sent: en tom sæbedispenser eller en defekt maskine bliver til en klage i stedet for en hurtig løsning.",
      "Ingen direkte linje fra bruger til service: de, der opdager problemet, har ingen nem måde at sige det til dem, der kan løse det.",
      "Bemanding på gætværk: uden feedbackdata kan du ikke se, hvor der reelt er behov for service.",
    ],
    solution: [
      "RoomAlyzer lader brugerne fortælle dig, når noget kræver opmærksomhed: et enkelt tryk melder en manglende forsyning, en fejl eller et servicebehov, og en automatisk e-mail eller SMS når den ansvarlige med det samme.",
      "Du reagerer, før problemer bliver til klager, og historikken over alle interaktioner viser dig, hvor behovet reelt er, så bemandingen følger fakta frem for gætværk. Et enkelt, behovsdrevet værktøj til facility management og serviceteams.",
    ],
    closing:
      "Hvor sammenlignelige systemer er dyre og besværlige at sætte op, er disse knapper klar på sekunder, kan placeres hvor som helst og koster en brøkdel af prisen.",
  },
  "lockers-doors": {
    heroTitle: "Åbn/luk-overvågning",
    heroTitleAccent: "der skaber gennemsigtighed for skabe, vinduer og døre.",
    heroLead:
      "Åbn/luk-overvågning gør hverdagens usikkerhed til fakta: hvilke skabe der faktisk er i brug, om vinduer står åbne uden for åbningstid, og hvordan adgangspunkter i hele bygningen reelt bruges. Uden det styrer du skabe på gætværk og tjekker vinduer til fods.",
    challenges: [
      "Skabe tildelt i blinde: du kan ikke se, hvilke der reelt er i brug, så kapacitet spildes, og nye medarbejdere er svære at placere.",
      "Vinduer og døre, der står åbne: åbne adgangspunkter uden for åbningstid betyder spildt energi og nedsat sikkerhed, opdaget kun ved et tilfælde.",
      "Ingen brugsmønstre at planlægge ud fra: du har ingen data om, hvordan skabe, kabinetter eller adgangsveje bruges over tid.",
    ],
    solution: [
      "RoomAlyzer giver dig et realtidsoverblik over, hvilke skabe, vinduer og døre der er åbne eller lukkede, og omsætter det til brugsmønstre, du kan planlægge ud fra. Tildel ledig skabskapacitet effektivt, understøt shared desk- og clean desk-koncepter, og tjek med et enkelt klik uden for åbningstid, om alt er lukket, så du beskytter både bygningen og energiregningen.",
      "Relevant for facility management og arbejdspladsplanlægning.",
    ],
    closing:
      "Løsninger som denne er normalt dyre og langsomme at installere. RoomAlyzer er klar på minutter, forbliver fleksibel og koster en brøkdel af prisen.",
  },
};

const de: Record<string, ModuleContentOverlay> = {
  "indoor-climate": {
    heroTitle: "Raumklima-Monitoring,",
    heroTitleAccent: "das Beschwerden zu Fakten macht.",
    heroLead:
      "Raumklima-Monitoring liefert die Antwort auf eine Frage, die jeder Facility Manager kennt: Ist die Beschwerde berechtigt oder nur ein Gefühl? Dem einen ist zu warm, der anderen zu kalt und nachmittags wird die Luft stickig. Ohne präzise Daten zu Temperatur, Luftfeuchtigkeit und  verwalten Sie jedoch nur Eindrücke. Sie regeln die Lüftung nach Bauchgefühl – und müssen am Ende Entscheidungen verteidigen, die Sie nicht belegen können.",
    challenges: [
      "Beschwerden, die Sie nicht überprüfen können: Jemand meldet schlechte Luftqualität und Sie können nicht bestätigen, ob Handlungsbedarf besteht oder ob es nur eine Frage der Wahrnehmung ist.",
      "Systeme, die blind laufen: Heizung und Lüftung folgen festen Zeitplänen statt den tatsächlichen Bedingungen, verschwenden Energie in leeren Räumen und liefern zu wenig, wenn sie voll sind.",
      "Kein Nachweis für das Gespräch: Wenn Geschäftsführung, Mitarbeitende oder Behörden nach dem Raumklima in Ihren Büros oder Schulen fragen, haben Sie nichts Konkretes in der Hand.",
    ],
    solution: [
      "RoomAlyzer misst Temperatur, Luftfeuchtigkeit, CO2 und TVOC kontinuierlich und macht daraus klare Dokumentation, damit Sie jede Beschwerde mit Fakten statt mit Gefühlen beantworten können. Sie sehen genau, wann die CO2-Werte steigen, wann die Feuchtigkeit Schimmel begünstigt und ob wirklich Handlungsbedarf besteht oder sich das Problem von selbst löst.",
      "Und es zeigt Ihnen mehr als nur die Zahlen: Es warnt Sie, wenn Schimmel zum Risiko wird und gibt konkrete Anpassungsvorschläge. Das Ergebnis: Sie steuern Heizung und Lüftung bedarfsgerecht, senken Ihre Energiekosten und bewahren den vollen Komfort. Bewährt im Einsatz in Büros, Schulen und Kommunen.",
    ],
    smarterTogether:
      "In Kombination mit Space-Management kann RoomAlyzer Energieverbrauch und Raumklima an die Zahl der tatsächlich anwesenden Personen anpassen.",
    closing:
      "Lösungen wie diese sind normalerweise teuer und mühsam zu installieren. RoomAlyzer ist in Minuten einsatzbereit, bleibt flexibel selbst wenn sich Ihre Anforderungen ändern und kostet einen Bruchteil des Preises von herkömmlichen Systemen.",
  },
  "space-management": {
    heroTitle: "Space-Management-Daten,",
    heroTitleAccent: "die Bauchgefühl durch Fakten ersetzen.",
    heroLead:
      "Space-Management beginnt mit einer einfachen Frage, deren falsche Beantwortung teuer werden kann: Wie viel Fläche nutzen Sie tatsächlich? Wenn Mitarbeitende einen freien Arbeitsplatz erwarten und die Geschäftsführung zeitgleich über Anmietung, Umnutzung oder Neubau entscheiden muss, reicht Bauchgefühl nicht aus. Sie müssen genau wissen, welche Räume ausgelastet sind, wann die Spitzenzeiten liegen und wo Sie für Leerstand bezahlen.",
    challenges: [
      "Sie zahlen für ungenutzte Flächen: Während Arbeitsplätze und Besprechungsräume leer stehen, mieten oder bauen Sie bereits neu. Es fehlt die Datenbasis, um zu sehen, was eigentlich freigegeben oder umgenutzt werden könnte.",
      "Wenn die Raumplanung nicht aufgeht: Räume werden für zehn Personen blockiert, aber am Ende nur zu zweit genutzt. Noch schlimmer: Abgesagte Termine werden nicht storniert. Das Ergebnis? Der Kalender ist voll, die Räume bleiben leer und andere Teams finden keinen Platz.",
      "Kein Überblick über Etagen und Standorte: Sie sehen nicht in Echtzeit, was frei ist, was belegt ist und welche Zonen am stärksten gefragt sind.",
      "Schwer zu rechtfertigende Entscheidungen: Die Flächenverteilung zwischen Abteilungen oder die Planung neuer Stellen wird zur Verhandlung auf Basis von Meinungen statt auf Basis der tatsächlichen Nutzung.",
    ],
    solution: [
      "RoomAlyzer Space-Management gibt Ihnen einen anonymisierten Überblick über die Belegung von Arbeitsplätzen und Räumen, in Echtzeit. Sie sehen, welche Arbeitsplätze gerade frei sind, wie Zonen über Tag und Woche genutzt werden, wann die Belegung ihren Höhepunkt erreicht und wo genau Sie freie Kapazität haben.",
      "Besprechungsräume sind ein eigener Schwerpunkt: Sie sehen, wie sie wirklich genutzt werden (für viele gebucht, von wenigen besucht) und lassen Räume automatisch freigeben, wenn eine Buchung ungenutzt bleibt, sodass ein abgesagtes Meeting keinen tatsächlich freien Raum mehr blockiert. Der integrierte Wirtschaftlichkeitsrechner verwandelt all das in klare Einsparungen bei Miete und Energie, während Heatmaps und Berichte eine objektive Grundlage für faire Entscheidungen liefern. In Dänemark entwickelt und für jeden Anwendertyp einfach gestaltet, ist es relevant für Facility Management, Flächenplaner, den Betrieb und Kommunen.",
    ],
    smarterTogether:
      "RoomAlyzer kann Flächennutzung und Raumklima simultan darstellen, sodass Sie Energieverbrauch und Lüftung an die Zahl der tatsächlich anwesenden Personen anpassen können — für die richtige Balance zwischen Wohlbefinden und Energieoptimierung.",
    closing:
      "Während Space-Management-Systeme normalerweise kostspielig und aufwendig einzuführen sind, ist RoomAlyzer in Minuten installiert, passt sich an, wenn sich Ihr Arbeitsplatz verändert und kostet einen Bruchteil des Preises von herkömmlichen Systemen.",
  },
  "water-detection": {
    heroTitle: "Wasserleckerkennung,",
    heroTitleAccent: "die warnt, bevor sich der Schaden ausbreitet.",
    heroLead:
      "Bei der Wasserleckerkennung geht es um eine Sache: die Meldung zu erhalten, bevor aus einem kleinen Leck eine teure Katastrophe wird. Ein geplatztes Rohr in einem Schacht, ein Leck in einem Schaltschrank oder Wasser unter einem Waschbecken in einer Wohnungsgenossenschaft kann stunden- oder tagelang unbemerkt bleiben. Wenn der Schaden schließlich entdeckt wird, sind die Reparaturkosten bereits astronomisch und die Beeinträchtigungen massiv.",
    challenges: [
      "Zu spät entdeckte Lecks: Wasser erreicht Server, Elektroinstallationen oder die Bausubstanz, bevor jemand es bemerkt und macht aus einem kleinen Vorfall einen großen.",
      "Alarme, die niemand hört: Ein herkömmlicher Sensor piept einsam in einem Keller oder Schacht vor sich hin – weitab von jedem, der ihn rechtzeitig hören könnte.",
      "Schwer erreichbare Risikopunkte: Schächte, Keller und Technikräume sind genau dort, wo Lecks entstehen und genau dort, wo niemand regelmäßig nachsieht.",
      "Keine Dokumentation im Nachhinein: Wenn das Gespräch mit der Versicherung ansteht, fehlt Ihnen der objektive Nachweis, wann und wo es passiert ist.",
    ],
    solution: [
      "RoomAlyzer schlägt sofort per E-Mail oder SMS Alarm, wenn Wasser austritt. So stoppen Sie das Leck, bevor eine Katastrophe entsteht. Die Meldung geht direkt an die richtige Person, statt unbemerkt im Keller zu piepen. Dank flexibler Empfänger-Listen erreicht die Warnung immer jemanden, der sofort handeln kann – rund um die Uhr.",
      "Die Sensoren laufen über ein Mobilfunknetz, das unabhängig vom lokalen WLAN funktioniert. So erreicht das Signal selbst tiefe Keller, Schächte und geschlossene Schränke. Zusätzlich liefert Ihnen ein detailliertes Ereignisprotokoll den objektiven Nachweis für Ihre Versicherung. Es ist eine einfache, praxisnahe und wirksame Frühwarnlösung für das Facility Management, den Betrieb und Wohnungsgenossenschaften.",
    ],
    closing:
      "Lecksuche-Systeme sind in der Regel teuer und kompliziert zu installieren. Dieses ist in Minuten eingerichtet, geht dorthin, wo das Risiko ist und kostet einen Bruchteil des Preises herkömmlicher Systeme.",
  },
  preservation: {
    heroTitle: "Klimaüberwachung für Kulturgut,",
    heroTitleAccent: "die Sammlungen schützt und Energie spart.",
    heroLead:
      "Präventive Erhaltung beginnt mit einer entscheidenden Frage, vor der jede Kirche, jedes Museum, jedes Archiv und jedes denkmalgeschützte Gebäude steht: Wie steht es tatsächlich um das Klima in Ihren Räumen? Ob Hochaltar, Orgel, Gemälde oder eine Vitrine mit altem Holz — die falsche Luftfeuchtigkeit oder Temperatur richtet langsamen, irreversiblen Schaden an den man erst bemerkt, bevor es zu spät ist.",
    challenges: [
      "Unsichtbare, schleichende Schäden: Ungünstige Luftfeuchtigkeit und Temperatur schädigen unersetzliche Objekte, lange bevor ein sichtbares Zeichen erscheint.",
      "Lückenhafte Dokumentation: Sie können das Klima, in dem Ihre Sammlung aufbewahrt wurde, nicht lückenlos belegen – weder gegenüber Versicherern und Fördergebern noch zur Erfüllung strenger Erhaltungsanforderungen.",
      "Erhaltung versus Energiekosten: ein historisches Gebäude zu beheizen, um seinen Inhalt zu schützen, ist extrem teuer. Ohne präzise Daten ist es fast unmöglich, die richtige Balance zu finden.",
    ],
    solution: [
      "RoomAlyzer überwacht Temperatur und Luftfeuchtigkeit kontinuierlich und erstellt eine lückenlose Dokumentationder genauen Lagerbedingungen. Unsere Sensoren erfüllen die hohe Präzision, auf die Restauratoren zu Recht bestehen damit Sie jederzeit eine verlässliche Entscheidungsgrundlage für den Erhalt Ihrer Sammlung haben.",
      "Vom Hochaltar über historische Orgeln bis hin zu Gemälden und empfindlichen Exponaten: Überwachen Sie jede Art von Sammlung und wägen Sie Erhaltung und Energieverbrauch präzise ab, statt nur zu raten. Die wahre Stärke des Systems liegt darin, dass es die perfekte Schnittstelle für zwei Bereiche bildet, die sonst selten mit demselben Werkzeug arbeiten: Restauratoren, die die Sammlung schützen und Facility Manager, die das Gebäude betreiben, nutzen hier ein und dieselbe Datenbasis. Das ist kein Zufall, denn RoomAlyzer wurde in enger Zusammenarbeit mit Restauratoren entwickelt. Ideal für Museen, Kirchen, Archive und die Denkmalpflege.",
    ],
    closing:
      "Klimaüberwachung für Sammlungen ist normalerweise teuer und umständlich zu installieren. RoomAlyzer ist in Minuten einsatzbereit, flexibel genug für jedes Gebäude und kostet einen Bruchteil der herkömmlichen Systeme.",
  },
  "usage-cleaning": {
    heroTitle: "Datengestützte Reinigung,",
    heroTitleAccent: "die der tatsächlichen Nutzung folgt, nicht einem festen Plan.",
    heroLead:
      "Bedarfsgerechte Reinigung beantwortet eine Frage, die jedes Betriebsteam kennt: Warum einen Raum reinigen, den niemand genutzt hat, während ein stark frequentierter Bereich auf seinen Turnus wartet? Feste Reinigungspläne behandeln jeden Raum gleich, was bedeutet: Aufwand dort, wo er nicht nötig ist und zu wenig dort, wo er gebraucht wird.",
    challenges: [
      "Reinigung nach Plan, nicht nach Bedarf: ungenutzte Räume werden planmäßig gereinigt, während stark genutzte Bereiche und öffentliche Sanitärräume auf ihren Turnus warten.",
      "Verschwendete Ressourcen: Personalzeit und Reinigungskosten fließen in Räume, die seit der letzten Runde nicht betreten wurden.",
      "Keine Grundlage für das Gespräch: Sie können einem Reinigungsdienstleister oder Budgetverantwortlichen nicht zeigen, wo der Aufwand tatsächlich hingehört.",
    ],
    solution: [
      "RoomAlyzer zeigt Ihnen, welche Räume tatsächlich genutzt wurden, sodass die Reinigung dem realen Bedarf statt einem festen Zeitplan folgen kann. Reinigen Sie die stark genutzten Bereiche besser und überspringen Sie, was bereits sauber und unberührt ist — von Büros bis zu öffentlichen Sanitärräumen.",
      "Das Ergebnis: bessere Hygiene dort, wo es zählt, niedrigere Kosten und eine klare Planungsgrundlage. Entwickelt für Reinigungsteams und Facility Management, teilt es seine Daten direkt mit Space-Management.",
    ],
    closing:
      "Im Vergleich zum üblichen Aufwand und den üblichen Kosten solcher Systeme ist RoomAlyzer in Minuten installiert, passt sich Ihrem Gebäude an und kostet einen Bruchteil des Preises.",
  },
  "push-buttons": {
    heroTitle: "Nutzerfeedback in Echtzeit,",
    heroTitleAccent: "das Probleme in sofortige Serviceanfragen verwandelt.",
    heroLead:
      "Nutzerfeedback kommt meist zu spät — als Beschwerde, nachdem die Kaffeemaschine den ganzen Vormittag defekt war oder im Waschraum stundenlang das Papier fehlte. Wenn Sie davon erfahren, ist der Schaden für das Erlebnis bereits angerichtet.",
    challenges: [
      "Sie erfahren zu spät von Problemen: ein leerer Seifenspender oder eine defekte Maschine wird zur Beschwerde statt zur schnellen Lösung.",
      "Keine direkte Verbindung von Nutzer zu Service: Wer das Problem bemerkt, hat keine einfache Möglichkeit, es denen mitzuteilen, die es lösen können.",
      "Personaleinsatz nach Bauchgefühl: ohne Feedbackdaten können Sie nicht erkennen, wo Service wirklich gebraucht wird.",
    ],
    solution: [
      "RoomAlyzer lässt Nutzer melden, wenn etwas Aufmerksamkeit braucht — ein einziger Tastendruck meldet eine fehlende Versorgung, eine Störung oder einen Servicebedarf und eine automatische E-Mail oder SMS erreicht sofort die verantwortliche Person.",
      "Sie reagieren, bevor aus Problemen Beschwerden werden und der Verlauf aller Interaktionen zeigt Ihnen, wo der Bedarf wirklich liegt, sodass der Personaleinsatz Fakten statt Vermutungen folgt. Ein einfaches, bedarfsgesteuertes Werkzeug für Facility Management und Serviceteams.",
    ],
    closing:
      "Während vergleichbare Systeme teuer und umständlich einzurichten sind, sind diese Tasten in Sekunden bereit, lassen sich überall anbringen und kosten einen Bruchteil des Preises.",
  },
  "lockers-doors": {
    heroTitle: "Open/Close monitoring,",
    heroTitleAccent: "das Transparenz für Schließfächer, Fenster und Türen schafft.",
    heroLead:
      "Open/Close monitoring macht alltägliche Unsicherheit zu Fakten: welche Schließfächer tatsächlich genutzt werden, ob Fenster nach Feierabend offen bleiben und wie Zugangspunkte im gesamten Gebäude wirklich genutzt werden. Ohne das verwalten Sie Schließfächer nach Bauchgefühl und kontrollieren Fenster zu Fuß.",
    challenges: [
      "Schließfächer blind zugeteilt: Sie können nicht sehen, welche wirklich genutzt werden, sodass Kapazität verschwendet wird und neue Mitarbeitende schwer unterzubringen sind.",
      "Offen gelassene Fenster und Türen: offene Zugangspunkte nach Feierabend bedeuten verschwendete Energie und verringerte Sicherheit — nur zufällig entdeckt.",
      "Keine Nutzungsmuster zur Planung: Sie haben keine Daten darüber, wie Schließfächer, Schränke oder Zugangswege im Zeitverlauf genutzt werden.",
    ],
    solution: [
      "RoomAlyzer gibt Ihnen einen Echtzeit-Überblick darüber, welche Schließfächer, Fenster und Türen offen oder geschlossen sind und macht daraus Nutzungsmuster, nach denen Sie planen können. Teilen Sie freie Schließfachkapazität effizient zu, unterstützen Sie Shared-Desk- und Clean-Desk-Konzepte und prüfen Sie nach Feierabend mit einem einzigen Klick, ob alles geschlossen ist — zum Schutz des Gebäudes und der Energiekosten.",
      "Relevant für Facility Management und Arbeitsplatzplanung.",
    ],
    closing:
      "Lösungen wie diese sind normalerweise teuer und langsam zu installieren. RoomAlyzer ist in Minuten einsatzbereit, bleibt flexibel und kostet einen Bruchteil des Preises.",
  },
};

const sv: Record<string, ModuleContentOverlay> = {
  "indoor-climate": {
    heroTitle: "Inomhusklimatövervakning",
    heroTitleAccent: "som gör klagomål till fakta.",
    heroLead:
      "Inomhusklimatövervakning ger dig data för att besvara en fråga som varje facility manager känner till: är klagomålet verkligt eller bara en känsla? Någon är för varm, någon annan för kall, och luften känns tung mitt på eftermiddagen, men utan data om temperatur, fukt och CO2 styr du på intryck, justerar ventilationen på gissningar och försvarar beslut du inte kan belägga.",
    challenges: [
      "Klagomål du inte kan verifiera: en användare rapporterar dålig luftkvalitet, och du har inget sätt att bekräfta om åtgärder behövs eller om det handlar om upplevelse.",
      "System som kör i blindo: värme och ventilation följer fasta scheman i stället för faktiska förhållanden, slösar energi när rum är tomma och underpresterar när de är fulla.",
      "Inget underlag för samtalet: när ledning, medarbetare eller myndigheter frågar om inomhusklimatet på era kontor eller skolor har du inget konkret att visa.",
    ],
    solution: [
      "RoomAlyzer mäter temperatur, fukt, CO2 och TVOC kontinuerligt och omvandlar det till tydlig dokumentation, så att du kan bemöta varje klagomål med fakta i stället för känslor. Du ser exakt när CO2-nivåerna stiger, när fukten bjuder in till mögel och om ett rum verkligen behöver åtgärdas eller bara en lugnande förklaring.",
      "RoomAlyzer gör mer än att visa siffrorna: Plattformen varnar dig när mögel blir en risk och föreslår konkreta justeringar, så att du kan anpassa värme och ventilation efter den faktiska användningen och sänka energikostnaderna utan att förlora komfort. Används på kontor, i skolor och i kommuner.",
    ],
    smarterTogether:
      "Kombinerat med Space management kan RoomAlyzer anpassa energianvändning och inomhusklimat efter antalet personer som faktiskt är på plats, och visa allt i en och samma vy.",
    closing:
      "Lösningar som denna är normalt dyra och krångliga att installera. RoomAlyzer är igång på minuter, förblir flexibel när dina behov förändras och kostar en bråkdel av priset.",
  },
  "space-management": {
    heroTitle: "Space management-data",
    heroTitleAccent: "som ersätter magkänsla med fakta.",
    heroLead:
      "Space management börjar med en enkel men dyr fråga: hur mycket av era ytor använder ni faktiskt? När medarbetare kommer in och förväntar sig ett ledigt skrivbord och rätt mötesrum, och ledningen ska besluta om att hyra, bygga om eller bygga nytt, kan ni inte styra på intryck. Ni behöver veta vilka skrivbord och rum som används, när beläggningen toppar och var ni betalar för ytor som står tomma.",
    challenges: [
      "Ni betalar för ytor ni inte använder: skrivbord och mötesrum står tomma medan ni hyr eller bygger mer — utan data som visar vad som kan frigöras eller användas annorlunda.",
      "Mötesrum som inte går ihop: rum bokade för tio och använda av två, och möten som ställs in men aldrig avbokas, så att kalendern ser full ut medan rummen står tomma.",
      "Ingen överblick över våningar och platser: du kan inte i realtid se vad som är ledigt, vad som är upptaget eller vilka zoner som är mest efterfrågade.",
      "Beslut som är svåra att försvara: att fördela ytor mellan avdelningar eller planera nyanställningar blir en förhandling baserad på åsikter snarare än användning.",
    ],
    solution: [
      "RoomAlyzer Space management ger er en live, anonymiserad överblick över beläggningen av skrivbord och rum, i realtid och över tid. Ni ser vilka skrivbord som är lediga just nu, hur zoner används under dagen och veckan, när beläggningen toppar och exakt var ni har ledig kapacitet.",
      "Mötesrum är ett fokus i sig: Du kan se hur de verkligen används (bokade för många, använda av få) och låta rum frigöras automatiskt när en bokning inte används, så att ett inställt möte inte längre blockerar ett rum som faktiskt är ledigt. Den inbyggda ekonomikalkylatorn omvandlar allt detta till tydliga besparingar på hyra och energi, medan heatmaps och rapporter ger dig ett objektivt underlag för rättvisa beslut. Eftersom den är utvecklad i Danmark och byggd för att vara enkel att använda för alla är den relevant för facility management, ytplanerare, drift och kommuner.",
    ],
    smarterTogether:
      "RoomAlyzer kan visa ytanvändning och inomhusklimat sida vid sida, så att ni kan anpassa energianvändning och ventilation efter antalet personer som faktiskt är på plats — och hitta rätt balans mellan välbefinnande och energioptimering.",
    closing:
      "Där space management-system normalt är kostsamma och störande att rulla ut installeras RoomAlyzer på minuter, anpassar sig när arbetsplatsen förändras och kostar en bråkdel av det vanliga.",
  },
  "water-detection": {
    heroTitle: "Detektering av vattenläckor",
    heroTitleAccent: "som varnar dig innan skadan sprider sig.",
    heroLead:
      "Detektering av vattenläckor handlar om en sak: att få meddelandet innan en liten läcka blir en dyr katastrof. Ett sprucket rör i ett schakt, en läcka i ett elskåp eller vatten under en diskbänk i en bostadsrättsförening kan rinna oupptäckt i timmar eller dagar — och när någon väl märker det är reparationsräkningen och störningen redan stora.",
    challenges: [
      "Läckor som upptäcks för sent: vatten når servrar, elinstallationer eller byggnadens stomme innan någon är medveten om det, och en mindre händelse blir en stor.",
      "Larm som ingen hör: en traditionell sensor sitter och piper för sig själv i en källare eller ett schakt, där det inte finns någon i närheten som lägger märke till det.",
      "Svåråtkomliga riskpunkter: schakt, källare och tekniska rum är precis där läckor uppstår och precis där ingen tittar regelbundet.",
      "Ingen dokumentation i efterhand: när försäkringssamtalet kommer har du ingen objektiv registrering av när och var det hände.",
    ],
    solution: [
      "RoomAlyzer skickar en varning direkt till e-post eller SMS när vatten upptäcks, så att du kan agera innan skadan sprider sig. I stället för ett larm som piper i ett tomt rum går meddelandet direkt till rätt person, och du kan lägga upp så många mottagare du behöver, så att det alltid når någon som kan agera.",
      "Sensorerna körs på ett mobilnät som fungerar oberoende av lokalt wifi och når djupa källare, schakt och stängda skåp, och en detaljerad händelselogg ger dig en objektiv registrering för försäkringen. Det är enkelt, driftsnära och ett verkligt effektivt tidigt varningssystem för facility management, drift och bostadsrättsföreningar.",
    ],
    closing:
      "Läckdetekteringssystem är vanligtvis dyra och komplicerade att installera. Detta tar minuter att ställa in, går dit risken finns och kostar en bråkdel av priset.",
  },
  preservation: {
    heroTitle: "Klimatövervakning för kulturarv",
    heroTitleAccent: "som skyddar samlingar och sparar energi.",
    heroLead:
      "Bevarande handlar om en fråga som varje kyrka, museum, arkiv och kulturhistorisk byggnad står inför: i vilket klimat förvarar ni egentligen era föremål? Oavsett om det är ett högaltare, en orgel, en målning eller en monter med gammalt trä gör fel luftfuktighet eller temperatur långsam, oåterkallelig skada — och man ser det sällan förrän det är för sent.",
    challenges: [
      "Osynlig, gradvis skada: ogynnsam luftfuktighet och temperatur skadar oersättliga föremål långt innan något synligt tecken visar sig.",
      "Ingen dokumentation av förhållandena: ni kan inte bevisa vilket klimat er samling har förvarats i — för försäkringsbolag, finansiärer eller bevarandekrav.",
      "Bevarande kontra energiräkningar: att värma upp en historisk byggnad för att skydda dess innehåll är dyrt, och utan data kan ni inte hitta balansen.",
    ],
    solution: [
      "RoomAlyzer övervakar temperatur och luftfuktighet och omvandlar det till tydlig dokumentation av de exakta förhållanden era föremål förvaras i. Våra sensorer är kända för sin höga precision (något konservatorer med rätta insisterar på) så att ni kan lita på de siffror ni bevarar er samling efter.",
      "Du kan hålla koll på alla slags samlingar, från altaren och orglar till målningar och montrar, och väga bevarande mot energianvändning i stället för att gissa. En av de verkliga styrkorna här är att samma data kan användas av två olika roller som sällan delar verktyg: Konservatorn som skyddar samlingen och facility managern som driver byggnaden arbetar utifrån samma fakta. Det är ingen slump – konservatorer har varit med och format hur det fungerar. Idealisk för museer, kyrkor, arkiv och kulturarvsvård.",
    ],
    closing:
      "Klimatövervakning för samlingar är normalt dyr och krånglig att installera. RoomAlyzer är klar på minuter, flexibel nog för alla byggnader och kostar en bråkdel av vad man förväntar sig.",
  },
  "usage-cleaning": {
    heroTitle: "Datadriven städning",
    heroTitleAccent: "som följer faktisk användning, inte ett fast schema.",
    heroLead:
      "Behovsstyrd städning besvarar en fråga som varje driftteam känner igen: varför städa ett rum som ingen har använt, medan en hårt nyttjad yta får vänta på sin tur? Fasta städscheman behandlar alla rum lika, vilket innebär insats där den inte behövs och för lite där den behövs.",
    challenges: [
      "Städning efter schema, inte efter behov: rum som står oanvända städas enligt schema medan upptagna ytor och offentliga toaletter väntar på sin tur.",
      "Slösade resurser: personaltid och städkostnader går till rum som inte rörts sedan förra rundan.",
      "Inget underlag för samtalet: du kan inte visa en städentreprenör eller budgetansvarig var insatsen faktiskt behövs.",
    ],
    solution: [
      "RoomAlyzer visar vilka ytor som faktiskt har använts, så att städningen kan följa verklig efterfrågan i stället för ett fast schema. Städa de upptagna områdena bättre och hoppa över det som redan är rent och orört — från kontor till offentliga toaletter.",
      "Resultatet är bättre hygien där det betyder något, lägre kostnader och ett tydligt underlag för planering. Byggd för städteam och facility management delar den sina data direkt med Space management.",
    ],
    closing:
      "Jämfört med den vanliga kostnaden och insatsen för system som detta installeras RoomAlyzer på minuter, anpassar sig efter din byggnad och kostar en bråkdel av priset.",
  },
  "push-buttons": {
    heroTitle: "Användarfeedback i realtid",
    heroTitleAccent: "som gör problem till omedelbara serviceärenden.",
    heroLead:
      "Användarfeedback kommer oftast för sent — som ett klagomål, efter att kaffemaskinen varit trasig hela förmiddagen eller toaletten varit utan papper i timmar. När du väl hör om det är skadan på upplevelsen redan skedd.",
    challenges: [
      "Du hör om problem för sent: en tom tvålbehållare eller en trasig maskin blir ett klagomål i stället för en snabb åtgärd.",
      "Ingen direkt länk från användare till service: de som märker problemet har inget enkelt sätt att berätta det för dem som kan lösa det.",
      "Bemanning på gissningar: utan feedbackdata kan du inte se var service verkligen behövs.",
    ],
    solution: [
      "RoomAlyzer låter användarna berätta när något behöver åtgärdas — ett enda tryck rapporterar en saknad förbrukningsvara, ett fel eller ett servicebehov, och ett automatiskt e-postmeddelande eller SMS når den ansvariga direkt.",
      "Du reagerar innan problem blir klagomål, och historiken över alla interaktioner visar dig var behovet verkligen finns, så att bemanningen följer fakta i stället för gissningar. Ett enkelt, behovsstyrt verktyg för facility management och serviceteam.",
    ],
    closing:
      "Där jämförbara system är dyra och krångliga att installera är dessa knappar klara på sekunder, kan placeras var som helst och kostar en bråkdel av priset.",
  },
  "lockers-doors": {
    heroTitle: "Öppna/stäng-övervakning",
    heroTitleAccent: "som skapar transparens för skåp, fönster och dörrar.",
    heroLead:
      "Öppna/stäng-övervakning gör vardagens osäkerhet till fakta: vilka skåp som faktiskt används, om fönster lämnas öppna efter stängning och hur entrépunkter i hela byggnaden verkligen används. Utan det styr du skåp på gissningar och kontrollerar fönster till fots.",
    challenges: [
      "Skåp tilldelade i blindo: du kan inte se vilka som verkligen används, så kapacitet slösas och nya medarbetare är svåra att placera.",
      "Fönster och dörrar som lämnas öppna: öppna entrépunkter efter stängning innebär slösad energi och sämre säkerhet, upptäckt bara av en slump.",
      "Inga användningsmönster att planera utifrån: du har ingen data om hur skåp, kabinett eller passagevägar används över tid.",
    ],
    solution: [
      "RoomAlyzer ger dig en realtidsöverblick över vilka skåp, fönster och dörrar som är öppna eller stängda och omvandlar det till användningsmönster du kan planera utifrån. Tilldela ledig skåpkapacitet effektivt, stöd shared desk- och clean desk-koncept och kontrollera med ett enda klick efter stängning om allt är stängt, så att du skyddar både byggnaden och energiräkningen.",
      "Relevant för facility management och arbetsplatsplanering.",
    ],
    closing:
      "Lösningar som denna är normalt dyra och långsamma att installera. RoomAlyzer är igång på minuter, förblir flexibel och kostar en bråkdel av priset.",
  },
};

export const moduleContentI18n: Partial<Record<Lang, Record<string, ModuleContentOverlay>>> = {
  da,
  de,
  sv,
};
