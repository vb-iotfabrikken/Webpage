import type { Lang } from "../lang";
import type { IndustryPageContent } from "./types";

/**
 * Per-locale overlays for industry detail-page body copy. English lives in
 * `industries.ts`; overlays cover all 15 sectors (da/de/sv).
 */

export type IndustryContentOverlay = Partial<
  Omit<IndustryPageContent, "slug" | "featuredCaseStudySlugs" | "featuredArticleSlugs" | "relevantModuleSlugs">
>;

const da: Record<string, IndustryContentOverlay> = {
  offices: {
    cardTitle: "Kontorer og arbejdspladser",
    cardSummary:
      "Balanceér arealudnyttelse i hybride arbejdspladser med medarbejdernes produktivitet og komfort.",
    focus:
      "Moderne kontorer skal balancere hybrid fremmøde, mødelokalebehov og indeklima — ofte uden data til at understøtte leje, HVAC eller layoutbeslutninger.",
    challenges: [
      "I betaler for skriveborde og etager, der står tomme: hybrid arbejde har ændret fremmødemønstre, men mange organisationer dimensionerer stadig arealer efter headcount — ikke målt brug.",
      "Spøgelsesbookinger af mødelokaler: lokaler reserveret til ti og brugt af to blokerer areal, andre har brug for — uden objektiv indsigt i gapet.",
      "Komfortklager, I ikke kan verificere: 'for tung luft' eller 'for koldt' debatterer videre, fordi ventilation og varme følger faste planer — ikke faktisk belægning.",
      "HVAC kører i blinde: systemer varmer og ventilerer tomme zoner, mens de underpræsterer, når lokaler er fyldte — energispild uden bedre trivsel.",
    ],
    solution: [
      "RoomAlyzer Space management giver jer anonymiseret skrivebords- og lokalebelægning i realtid og over tid, så I kan rette størrelsen på etager, se booking kontra faktisk brug og frigive spøgelsesbookede mødelokaler (herunder via Google Calendar, Microsoft 365 eller Pronestor). Konteksten er tydelig: UK Workspace Survey viser, at kontorfremmøde faldt fra 83 % af arbejdstiden i 2016 til 46 % i 2023, et fald på 37 procentpoint på syv år.",
      "RoomAlyzer Indeklima tilføjer kontinuerlig overvågning af CO2, temperatur, fugt og TVOC, så eftermiddagstræthed og ventilationsklager besvares med fakta, ikke indtryk. Trådløse sensorer installeres på minutter uden Wi-Fi-projekt, og samme platform viser arealbrug og luftkvalitet side om side.",
    ],
    smarterTogether:
      "Kombineret lader RoomAlyzer Space management og Indeklima jer matche ventilation og varme til de personer, der faktisk er til stede, og skære energispild uden at ofre komfort på travle dage.",
    closing:
      "Hvor kontorsensorudrulninger normalt er dyre og forstyrrende, er RoomAlyzer klar på minutter, tilpasser sig, når jeres arbejdsplads ændrer sig, og koster en brøkdel af den sædvanlige pris.",
  },
  churches: {
    cardTitle: "Kirker og kulturarv",
    cardSummary:
      "Beskyt historiske interiører med præcis fugt- og temperaturkontrol i store, ujævnt opvarmede bygninger.",
    focus:
      "Kirker kombinerer uvurderlige interiører med bygninger, der aldrig var designet til moderne opvarmning — store volumener, ujævne temperaturer og sæsonbestemte fugtsvingninger truer orgler, træværk og fresker.",
    challenges: [
      "Usynlig, gradvis skade: ugunstig fugt og temperatur skader uerstattelige inventarstykker længe før synlige tegn.",
      "Ujævn opvarmning i store volumener: skib, kor og sakristier opfører sig forskelligt — håndholdte målinger er upålidelige.",
      "Udendørs vejr driver indendørs svingninger: massive murstensbygninger reagerer langsomt — indendørs data uden udendørs reference er svære at fortolke.",
      "Bevaring versus energiregning: opvarmning af en historisk bygning for at beskytte indholdet er dyrt — uden data finder I ikke balancen.",
    ],
    solution: [
      "RoomAlyzer Bevaring overvåger temperatur og fugt kontinuerligt (±0,1 °C · ±1 % RH) og omsætter aflæsninger til klar dokumentation af de præcise forhold, jeres interiører holdes i. Trådløse Mini+ og Full+ sensorer er diskrete nok til hellige rum og præcise nok til konservatorer, med alarmer når tærskler overskrides.",
      "En udendørssensor adskiller indendørs tendenser fra vejrsvingninger, mens EN 15757-tilpasset rapportering giver stifter, forsikring og myndigheder den dokumentation, de forventer. Én platform kan dække alle kirker i en stift med rollebaseret adgang for kirkeværger, præster og rådgivere.",
    ],
    smarterTogether:
      "RoomAlyzer Bevaring giver konservatorer, der beskytter inventaret, og driftsteams, der driver bygningen, det samme datasæt, en balance man sjældent finder i ét værktøj.",
    closing:
      "Klimamåling i kirker er normalt dyrt og besværligt at installere. RoomAlyzer er klar på minutter, fleksibelt nok til enhver bygning, og koster en brøkdel af det forventede.",
  },
  "museums-galleries": {
    cardTitle: "Museer og kultur",
    cardSummary:
      "Reducer risiko og bevar følsomme samlinger med kontinuerlig klimamåling i tråd med bevaringsstandarder.",
    focus:
      "Museer og gallerier skal beskytte udlånsobjekter, lagersamlinger og udstillingsrum — ofte med dokumentation over for forsikring, udlångivere og fonde, samtidig med at besøgsdrevne fugtspidser håndteres.",
    challenges: [
      "Udlåns- og lagringskrav: udlångivere forventer dokumenterede, stabile forhold — men off-display lagring får ofte mindre overvågning end hovedgallerierne.",
      "Besøgsdrevne klimaspidser: grupper og events skubber fugt og temperatur hurtigt op — uden tilstedeværelsesdata kan I ikke koble årsag og virkning.",
      "Forsikrings- og ansøgningsdokumentation: når noget går galt, skal I have manipulationssikre optegnelser — ikke en mappe med manuelle aflæsninger.",
      "Trådløs installation i følsomme rum: kabler gennem historisk stof eller travle gallerier er sjældent acceptabelt.",
    ],
    solution: [
      "RoomAlyzer Bevaring leverer kontinuerlig trådløs temperatur- og fugtlogning i EN 15757-bånd i gallerier, lagre og transportkasser. Konservatorer får alarmer, før forholdene driver, og revisionsklare PDF-rapporter til forsikring og udlånsaftaler.",
      "Bevægelsessensorer kortlægger besøgstrafik, så fugtspidser kan knyttes til åbningstider og kapacitet planlægges derefter. En udendørssensor lader HVAC reagere på rigtigt vejr i stedet for gætværk og beskytter samlinger, mens energien holdes nede.",
    ],
    closing:
      "Museumsniveau klimamåling er normalt dyrt og langsomt at udrulle. RoomAlyzer installeres på minutter, skalerer på tværs af alle rum og koster en brøkdel af traditionelle systemer.",
  },
  municipalities: {
    cardTitle: "Skoler og kommuner",
    cardSummary:
      "Prioritér elevers sundhed, koncentration og energitilbagetrækning på tværs af skoler, administration og kulturbygninger.",
    focus:
      "Kommuner driver dusinvis af bygningstyper (skoler, daginstitutioner, rådhuse og kulturhuse) og har brug for ét platformoverblik plus bevis for, at indeklima og energi faktisk matcher, hvordan bygningerne bruges.",
    challenges: [
      "CO2 og koncentration i klasselokaler: elever mister fokus, når ventilation halter efter belægning — men de fleste skoler stoler stadig på subjektive 'hvordan føles luften?'-tjek.",
      "Porteføljeskala: udrulning på tværs af alle skoler og administrationsbygninger føles som et flerårigt IT-projekt — medmindre sensorer er ægte plug-and-play.",
      "Energitilbagetrækning uden bevis: varme og ventilation kører efter skemaer, fordi ingen stoler på, at haller og klasselokaler faktisk er tomme efter skoletid.",
      "Svar til forældre og lærere: når luftkvaliteten udfordres, skal kommunen have dokumenterede data — ikke en engangsmåling.",
    ],
    solution: [
      "RoomAlyzer Indeklima sætter CO2-, temperatur-, fugt- og TVOC-sensorer i hvert klasselokale og fællesrum med alarmer før niveauer passerer retningslinjer og dashboards, som pedeller faktisk bruger. Varde Kommune udrullede 1.400 sensorer på 36 skoler på ni uger; gennemsnitlig CO2 over 1.200 ppm i undervisningstiden faldt fra 23 % til 6 % på ti måneder.",
      "RoomAlyzer Space management kortlægger reel belægning i sportshaller, auditorier og fælleslokaler, så varme og ventilation kan trække sig tilbage, når rum er tomme. Ét kommunalt dashboard samler alle bygninger (skoler, administration og kultur) uden separat system pr. lokation.",
    ],
    smarterTogether:
      "RoomAlyzer Indeklima og Space management sammen lader kommuner finjustere ventilation efter faktisk headcount og skære energi i bygninger, der står tomme uden for skoletid.",
    closing:
      "Kommunale sensorprogrammer er normalt dyre og langsomme. RoomAlyzer installeres på minutter pr. lokale, kræver ikke Wi-Fi pr. bygning, og skalerer fra én skole til en hel kommune.",
  },
  schools: {
    cardTitle: "Skoler",
    cardSummary:
      "Dokumentér CO2, temperatur og fugt i hvert klasseværelse for at beskytte elevernes fokus og sundhed.",
    focus:
      "Skoler har brug for objektive indeklimadata i hvert læringsrum — ikke kun for at opfylde retningslinjer, men for at bevise, at ventilation og opvarmning faktisk understøtter koncentration, når lokalerne er fyldte. Lærere og pedeller træffer daglige udluftningsbeslutninger uden et fælles billede af CO2, fugt eller om lokaler faktisk er i brug efter skoletid.",
    challenges: [
      "CO2 over 1.000 ppm i fyldte klasseværelser: forskning knytter forhøjet CO2 til reduceret koncentration — alligevel reagerer de fleste skoler først, når nogen klager.",
      "Ventilation efter vane, ikke data: rutiner med vinduesudluftning og mekaniske systemer afspejler sjældent faktisk belægning eller udendørs forhold.",
      "Energi brugt på tomme bygninger: sportshaller, auditorier og fløje opvarmes om natten, fordi skemaer antager, at lokaler er i brug.",
      "Ingen sporbarhed for forældre eller inspektører: når luftkvaliteten udfordres, har skoler brug for kontinuerlige logfiler — ikke et konsulentbesøg én gang om året.",
    ],
    solution: [
      "RoomAlyzer Indeklima giver live CO2-, temperatur-, fugt- og TVOC-data i hvert klasseværelse med alarmer før retningslinjer overskrides, så lærere får et klart signal til at udlufte, og ledelsen har dokumentation for, at forholdene håndteres.",
      "RoomAlyzer Space management kortlægger reel brug i haller og specialrum, så varme og ventilation kan trække sig tilbage, når bygninger er tomme. En outdoor-sensor giver en vejrreference, så beslutninger om naturlig ventilation matcher forholdene udenfor.",
    ],
    smarterTogether:
      "RoomAlyzer Indeklima og Space management sammen viser ikke kun, hvornår luftkvaliteten falder, men også hvornår energi spildes på at opvarme lokaler, ingen bruger.",
    closing:
      "Klasseværelsesovervågning behøver ikke betyde kabler, gateways eller måneders planlægning. RoomAlyzer-sensorer installeres på minutter og skalerer fra én skole til et helt skoledistrikt.",
    sensorRecommendations: [
      {
        name: "CO2-sensor",
        badge: "Klasseværelsesbaseline",
        body: "Live CO2-niveauer med alarmer før klasseværelser passerer retningslinjen på 1.000 ppm — den hurtigste måde at vide, hvornår det er tid til at udlufte.",
        sensorSlugs: ["co2"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Det fulde billede",
        body: "Tilføjer temperatur, fugt og TVOC til CO2-billedet i én diskret enhed pr. klasseværelse eller specialrum.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Mini+ PIR / Motion-sensor",
        badge: "Besparelser uden for skoletid",
        body: "Kortlægger reel belægning i klasseværelser, sportshaller og auditorier, så varme og ventilation kan trække sig tilbage, når lokaler er tomme.",
        sensorSlugs: ["mini-plus-pir", "motion"],
      },
      {
        name: "Outdoor-sensor",
        badge: "Smartere udluftning",
        body: "Giver lærere og pedeller en udendørs reference, så vinduesudluftningsrutiner afspejler faktiske vejrforhold.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  hospitals: {
    cardTitle: "Hospitaler",
    cardSummary:
      "Overvåg afdelinger, lager og laboratorier med revisionsklare klimadata, hvor hver grad tæller.",
    focus:
      "Hospitaler skal balancere patientkomfort, infektionskontrol og strenge lagerforhold — ofte på tværs af afdelinger, apoteker, laboratorier og kølerum, der hver især har egne tærskler. Et enkelt udsving i et apotekskøleskab eller en vedvarende tør afdeling kan få kliniske, regulatoriske og omdømmemæssige konsekvenser.",
    challenges: [
      "Snævre temperaturbånd uden kontinuerlig dokumentation: medicinlager, blodbanker og kølerum har brug for revisionsklare logfiler — clipboard-runder er huller, der venter på at blive hændelser.",
      "Tvister om luftkvalitet på afdelinger: patienter og personale rapporterer tung luft eller tørhed, men driftsteams mangler data på lokale-niveau til at finjustere ventilation.",
      "Fugt, der påvirker både patienter og udstyr: for tør eller for fugtig luft i behandlingsområder har kliniske og tekniske følgevirkninger.",
      "Vandindtrængning nær kritiske zoner: maskinrum og servicekanaler kan oversvømme kliniske eller elektriske områder, før nogen opdager det.",
    ],
    solution: [
      "RoomAlyzer Indeklima overvåger CO2, temperatur, fugt og TVOC i patientvendte områder med kontinuerlig historik, så diskussioner om luftkvalitet bygger på data, ikke indtryk.",
      "Dedikerede temperature-sensor og humidity-sensor dækker apoteker, laboratorier og kølelager med alarmer, før lager er i fare. RoomAlyzer Vanddetektering sender SMS- og e-mailalarmer fra maskin- og serviceområder med tidsstemplet hændelseslog, før en lækage når kliniske zoner.",
    ],
    smarterTogether:
      "RoomAlyzer Indeklima og Vanddetektering på én platform giver ejendomsteams ét overblik over komfort, compliance og infrastrukturrisk på tværs af hospitalets arealer.",
    closing:
      "Hospitalers ejendomme har brug for pålidelig, lavforstyrrende overvågning. RoomAlyzer installeres uden at trække kabler gennem kliniske områder og holder revisionslogfiler klar, når inspektører spørger.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Afdelinger og klinikker",
        body: "Kontinuerlig overvågning af CO2, temperatur, fugt og TVOC i patientvendte områder for at dokumentere luftkvalitet og komfort.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature-sensor",
        badge: "Kritisk lager",
        body: "Dedikerede loggere til medicinskabe, blodbanker og kølerum, hvor snævre temperaturbånd kræver dokumentation på anmodning.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Humidity-sensor",
        badge: "Infektionskontrol",
        body: "Sporer relativ fugt på afdelinger og i behandlingsrum, hvor tør eller fugtig luft påvirker både patienter og udstyr.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Water Detector",
        badge: "Tidlig advarsel",
        body: "SMS- og e-mailalarmer i maskinrum, kanaler og serviceområder, før en lækage når kliniske eller elektriske zoner.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  "elderly-care": {
    cardTitle: "Ældrepleje",
    cardSummary:
      "Stabilt indeklima og enkle servicekald, der gør den daglige pleje tryggere og roligere.",
    focus:
      "Plejehjem og plejefaciliteter betjener sårbare beboere døgnet rundt — stabil temperatur og fugt reducerer ubehag og sundhedsrisiko, mens personalet har brug for hurtige måder at reagere på, når noget kræver opmærksomhed. Familier forventer rolige, komfortable værelser; operatører har brug for tidlig advarsel, når forholdene driver, eller vand opdages.",
    challenges: [
      "Langsom reaktion på komfortproblemer: beboere rapporterer måske ikke, at de er for varme eller kolde, før problemer har varet i timer.",
      "Køkkener, vaskerier og maskinrum, der kører varmt: sekundære zoner driver ofte uden for det interval, der overvåges på beboerværelser.",
      "Servicekald, der afhænger af at finde en telefon: personalet spilder tid på at viderestille simple anmodninger fra toiletter og spisesale.",
      "Lækager i badeværelser og køkkener: fugt spreder sig til beboerområder, før en natrunde opdager det.",
    ],
    solution: [
      "RoomAlyzer Indeklima holder temperatur, fugt, CO2 og TVOC stabile i fællesområder og beboerværelser med alarmer, når forholdene bevæger sig uden for aftalte bånd.",
      "RoomAlyzer Trykknapper giver servicekald med ét tryk fra toiletter og spisesale, viderestillet via e-mail eller SMS, før problemer bliver klager. temperature-sensor tilføjer præcision i køkkener og vaskerier, mens RoomAlyzer Vanddetektering alarmerer personalet i vådrum og maskinområder tidligt.",
    ],
    smarterTogether:
      "RoomAlyzer Indeklima og Trykknapper på én platform hjælper personalet med at prioritere både komfort og responstid uden at tilføje kompleksitet til daglige runder.",
    closing:
      "Plejeindstillinger har brug for diskret, pålidelig overvågning, som personalet stoler på. RoomAlyzer installeres hurtigt, undgår Wi-Fi-afhængighed og skalerer på tværs af fløje og lokationer.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Beboerkomfort",
        body: "Overvåger CO2, temperatur, fugt og TVOC i fællesområder og beboerværelser for at holde forholdene stabile dag og nat.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature-sensor",
        badge: "Spotcheck-zoner",
        body: "Nyttig i vaskerier, køkkener og dårligt isolerede fløje, hvor en dedikeret logger tilføjer præcision.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Touch-sensor",
        badge: "Personale og beboere",
        body: "Servicekald med ét tryk fra toiletter, spisesale eller beboerværelser — ingen telefoner, ingen jagt på den rigtige lokal.",
        sensorSlugs: ["touch"],
      },
      {
        name: "Water Detector",
        badge: "Beskyt bygningen",
        body: "SMS- og e-mailalarmer i badeværelser, køkkener og maskinområder, før fugt spreder sig til beboerområder.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  retail: {
    cardTitle: "Detailhandel",
    cardSummary:
      "Overvåg butikskomfort, kølekædeudstyr og kundestrømsmønstre i enkelte butikker eller kæder.",
    focus:
      "Detailhandel balancerer shopperkomfort, medarbejdertrivsel og udstyrsoppetid — køleskabe, der fejler stille, butikker der overophedes på travle lørdage, og energi brugt på at opvarme tomme etager efter lukketid. Kædeoperatører har brug for sammenlignelige data på tværs af lokationer, ikke butikschefer, der gætter ud fra termostater alene.",
    challenges: [
      "Kølekædefejl opdaget for sent: udstillingskøleskabe og baglokale-køleskabe kan drive uden for intervallet natten over uden at nogen ved det, før varer er tabt.",
      "Butikskomfort versus energi: lange åbningstider betyder, at HVAC kører hårdt — men uden belægningsdata kan den ikke følge reel kundestrøm.",
      "Døde zoner og myldretid: samme plantegning føles forskelligt time for time og sæson for sæson, men klimastyring tilpasser sig sjældent.",
      "Sikkerhed uden for åbningstid uden gennemgang: lastbryggere og indvendige døre, der står åbne, spilder energi og skaber risiko.",
    ],
    solution: [
      "temperature-sensor leverer kontinuerlig logning og alarmer for køleskabe, fryser og udstillingskøleskabe med historik klar til fødevaresikkerhed og forsikringsgennemgange.",
      "RoomAlyzer Indeklima sporer butiksgulvets CO2, temperatur, fugt og TVOC, så komfort og energi kan balanceres på tværs af lange åbningstider. motion-sensor kortlægger kundestrøm; RoomAlyzer Skabe og døre bekræfter, at døre og bryggere er lukket, når butikken lukker, uden natlige gennemgange.",
    ],
    smarterTogether:
      "Kundestrøm og indeklimadata sammen viser, hvor der skal ventileres i myldretid, og hvor der kan skæres ned, når zoner er tomme.",
    closing:
      "Detailhandel med flere lokationer har brug for overvågning, der rulles hurtigt ud og sammenlignes konsekvent. RoomAlyzer skalerer på tværs af butikker uden et separat IT-projekt pr. lokation.",
    sensorRecommendations: [
      {
        name: "Temperature-sensor",
        badge: "Kølekæde",
        body: "Kontinuerlig overvågning af køleskabe, fryser og udstillingskøleskabe med alarmer, før varer er tabt.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Butiksklima",
        body: "Sporer CO2, temperatur, fugt og TVOC på salgsgulvet for at balancere komfort med energiforbrug på tværs af lange åbningstider.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion-sensor",
        badge: "Kundestrømsmønstre",
        body: "Kortlægger tilstedeværelse på lokale-niveau for at forstå myldretid, døde zoner og hvor klimastyring bør følge faktisk trafik.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Open/Close-sensor",
        badge: "Sikkerhed uden for åbningstid",
        body: "Bekræfter, at døre, lastbryggere og skabe er lukket, når butikken lukker — uden natlige gennemgange.",
        sensorSlugs: ["open-close"],
      },
    ],
  },
  hotels: {
    cardTitle: "Hoteller",
    cardSummary:
      "Belægningsstyret klima og service i gæsteværelser, mødelokaler og fællesarealer.",
    focus:
      "Hoteller har brug for gæstekomfort uden spild — værelser opvarmet til udeblivelser, mødesuiter ventileret til aflyste bookinger, og housekeeping udsendt kun, hvor det faktisk er nødvendigt. Anmeldelser og genbookinger afhænger af lobbyer og konferencelokaler, der føles friske, men baglokaleområder kører ofte efter faste skemaer.",
    challenges: [
      "Gæsteværelser konditioneret til tomme nætter: HVAC kører til udeblivelser og tidlige afrejser, fordi PMS ikke fortæller maskinrum, hvem der faktisk er i bygningen.",
      "CO2-spidser i konferencelokaler: halvdagsarrangementer kan presse mødelokaler forbi komfortgrænser, før personalet opdager det.",
      "Energiblindhed i baglokalet: vaskeri, køkkener og personaleområder ventileres og opvarmes efter timere uden relation til reel brug.",
      "Langsomme gæstefeedback-loops: problemer på toiletter eller i receptionen dukker op på anmeldelsessider, før driften hører om dem.",
    ],
    solution: [
      "Mini+ PIR sensorer kombinerer klima og belægning i gæsteværelser, ideelt til setback-strategier, når værelser er tomme, uden at gå på kompromis med komfort ved ankomst.",
      "RoomAlyzer Indeklima overvåger lobbyer, restauranter og konferencelokaler, hvor luftkvalitet driver gæsteoplevelsen. RoomAlyzer Brug og rengøring tilpasser housekeeping til faktisk værelsesbrug; RoomAlyzer Trykknapper giver øjeblikkelig servicefeedback på toiletter og i reception, før problemer når anmeldelsessider.",
    ],
    smarterTogether:
      "Belægning på værelsesniveau, indeklima og efterspørgselsstyret rengøring lader hoteller trimme energi i tomme værelser, mens ventilation og housekeeping prioriteres, hvor gæster er samlet.",
    closing:
      "Hotelporteføljer har brug for overvågning, der respekterer gæsternes privatliv, installeres uden forstyrrelse og virker uden gæste-Wi-Fi. RoomAlyzer passer til den profil på tværs af ejendomme.",
    sensorRecommendations: [
      {
        name: "Mini+ PIR",
        badge: "Gæsteværelser",
        body: "Kombinerer klimaovervågning med belægning i én enhed — ideelt til setback-strategier, når værelser er tomme.",
        sensorSlugs: ["mini-plus-pir"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Møde- og fællesarealer",
        body: "Overvåger CO2, temperatur, fugt og TVOC i lobbyer, restauranter og konferencelokaler, hvor komfort driver anmeldelser.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion-sensor",
        badge: "Baglokale",
        body: "Sporer brug i personaleområder, vaskeri og mødelokaler for at tilpasse ventilation og rengøring til reel aktivitet.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Touch-sensor",
        badge: "Gæstefeedback",
        body: "Enkle tilfredsheds- eller serviceknapper på toiletter og i reception for øjeblikkelig respons, når noget skal rettes.",
        sensorSlugs: ["touch"],
      },
    ],
  },
  "warehouses-logistics": {
    cardTitle: "Lagre og logistik",
    cardSummary:
      "Beskyt lager med temperatur-, fugt- og vanddetektion på tværs af lager- og lasteområder.",
    focus:
      "Lagre og logistiksteder opbevarer varer, der fordærves, korroderer eller vrides, når forholdene driver — ofte på tværs af store gulvflader, kølerum og lastbryggere, hvor en enkelt uopdaget lækage kan stoppe driften. Compliance og forsikring forventer i stigende grad kontinuerlige logfiler, ikke stikprøvekontrol på clipboard.",
    challenges: [
      "Kølerum, der driver uden for intervallet: kølelager kan fejle stille, indtil produkt kasseres.",
      "Fugt, der skader lager: pap, elektronik og hygroskopiske varer har brug for stabil RH på tværs af store, ujævnt konditionerede rum.",
      "Lækager langs lange stræk: rør, fodlister og lastbryggere har brug for linjedækning, som en enkelt punktsensor ikke kan levere.",
      "Maskinudstyr og kondensbakker: lokale vandkilder spreder sig hurtigt på tværs af åbne gulvflader.",
    ],
    solution: [
      "temperature-sensor giver revisionsklar logning for kølerum, fryser og følsomme varer med alarmer, før tærskler overskrides.",
      "humidity-sensor sporer RH i lagerzoner, hvor materialer er fugtfølsomme. RoomAlyzer Vanddetektering dækker lineær risiko med water rope langs rør og bryggegulve og punktsensorer under vask, bakker og maskinudstyr, med SMS- og e-mailalarmer og tidsstemplet hændelseslog til forsikring.",
    ],
    smarterTogether:
      "Temperatur, fugt og RoomAlyzer Vanddetektering på én platform giver drift og QA ét dashboard til lagerbeskyttelse og hændelseshåndtering.",
    closing:
      "Industrielle sites har brug for robust, lavvedligeholdelses-overvågning uden at kable kilometer af gulvplade. RoomAlyzer udrulles hurtigt og skalerer med faciliteten.",
    sensorRecommendations: [
      {
        name: "Temperature-sensor",
        badge: "Kølelager",
        body: "Pålidelig logning for kølerum, fryser og temperaturfølsomme varer med revisionsklar historik.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Humidity-sensor",
        badge: "Lagerbeskyttelse",
        body: "Sporer relativ fugt i lagerzoner, hvor pap, elektronik eller hygroskopiske materialer har brug for stabile forhold.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Water Rope",
        badge: "Linjedækning",
        body: "Sensorkabel langs rør, fodlister og lastbryggegulve, hvor en punktsensor ikke rækker.",
        sensorSlugs: ["water-rope"],
      },
      {
        name: "Water Detector",
        badge: "Punktbeskyttelse",
        body: "SMS- og e-mailalarmer under vask, kondensbakker og maskinudstyr, før vand spreder sig over gulvet.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  "archives-libraries": {
    cardTitle: "Arkiver og biblioteker",
    cardSummary:
      "Kontinuerlig klimaprotokollering og alarmer for sjældne bøger, manuskripter og papirarkiver.",
    focus:
      "Arkiver og biblioteker opbevarer papirsamlinger, der forringes, når temperatur og fugt svinger — ofte på tværs af læsesale, magasiner og kølelager, der hver især har brug for dokumenterede, stabile forhold. Udlångivere og fondsmodtagere forventer dokumentation; konservatorer har brug for tidlig advarsel, før bindinger, film eller manuskripter er i fare.",
    challenges: [
      "RH-svingninger i magasinområder: relativ fugt er den første forsvarslinje for papir — alligevel kontrolleres mange lagre højst månedligt.",
      "Læsesale versus lager: komfort for besøgende må ikke kompromittere samlingens forhold i nærheden.",
      "Kølelager til film og fotografier: samlinger under rumtemperatur har brug for dedikeret, kontinuerlig logning.",
      "HVAC reagerer på vejrgætteri: befugtning og affugtning uden udendørs reference over- eller underskyder.",
    ],
    solution: [
      "RoomAlyzer Bevaring leverer kontinuerlig RH-logning for magasiner, manuskriptlager og sjældne-bogrum med alarmer, før forholdene forlader bevaringsbånd.",
      "RoomAlyzer Indeklima overvåger læsesale diskret. temperature-sensor dækker kølelager; en outdoor-sensor adskiller indendørstendenser fra vejr, så HVAC reagerer på reel behov.",
    ],
    smarterTogether:
      "Kontinuerlig logning på tværs af offentlige og lagerzoner giver konservatorer og driftsteams det samme datasæt til bevaringsbeslutninger og daglig drift.",
    closing:
      "Arkivniveau klimamåling bør ikke kræve invasiv installation. RoomAlyzer er trådløst, diskret og producerer rapporter klar til udlångivere og forsikring.",
    sensorRecommendations: [
      {
        name: "Humidity-sensor",
        badge: "Papirbevaring",
        body: "Konservator-kvalitet relativ-fugt-logging, den første forsvarslinje for bindinger, manuskripter og historiske magasiner.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Læsesale",
        body: "Diskret klimaovervågning, hvor personale og besøgende har brug for komfort uden at kompromittere samlingens forhold i nærheden.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature-sensor",
        badge: "Kølelager",
        body: "Dedikerede loggere til film, fotografiske og særlige samlinger opbevaret under rumtemperatur.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Outdoor-sensor",
        badge: "HVAC-reference",
        body: "Adskiller indendørstendenser fra udendørs vejr, så befugtning og affugtning reagerer på reel behov, ikke gætværk.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  "manors-castles": {
    cardTitle: "Herregårde og slotte",
    cardSummary:
      "Overvåg fugt og temperatur i uopvarmede sale, kældre og lager uden at skade overflader.",
    focus:
      "Herregårde og slotte kombinerer uvurderlige interiører med bygninger, der aldrig var designet til moderne opvarmning — sporadisk brug, turistbølger og uopvarmede fløje stresser træ, tekstiler og overflader. Massivt murværk bremser den indendørs reaktion på vejret, så indendørs aflæsninger uden udendørs baseline er lette at misfortolke.",
    challenges: [
      "Sæsonbestemt RH, der skader paneler og forgyldning: sale og trapper svinger med besøgssæsoner og opvarmningsmønstre.",
      "Eventdrevne varme- og fugtbelastninger: turistgrupper og bryllupper presser forholdene hurtigere, end HVAC kan kompensere.",
      "Trådløs overvågning uden historisk skade: kabler gennem panelerede rum og gobeliner er sjældent acceptable.",
      "Uopvarmede fløje, der driver ukontrolleret: fjerne rum kan forringes, mens personalet fokuserer på hovedruter for besøgende.",
    ],
    solution: [
      "RoomAlyzer Bevaring sporer RH i sale, trapper og panelerede rum med alarmer, før sæsonbestemte svingninger forårsager revner, forvridning eller tab af forgyldning.",
      "Mini+ og Full+ sensorer logger trådløst i udstillingsrum åbne for besøgende. motion-sensor korrelerer fugt- og varmebelastninger med turplaner; en outdoor-sensor er essentiel, hvor indeklima halter timer bag vejret.",
    ],
    smarterTogether:
      "Besøgertilstedeværelse og klimadata sammen forklarer pludselige fugtstigninger — så teams kan udlufte eller justere opvarmning, før interiører lider skade.",
    closing:
      "Kulturarvshuse har brug for overvågning, der respekterer bygningsstof og installeres uden forstyrrelse. RoomAlyzer passer diskret ind i rum, besøgende aldrig bemærker.",
    sensorRecommendations: [
      {
        name: "Humidity-sensor",
        badge: "Interiørbeskyttelse",
        body: "Konservator-kvalitet RH-logging i sale, trapper og panelerede rum, hvor sæsonbestemte svingninger forårsager revner, forvridning og tab af forgyldning.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Udstillingsrum",
        body: "Trådløs temperatur- og fugtlogning i rum åbne for besøgende uden at trække kabler gennem historisk stof.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion-sensor",
        badge: "Besøgspåvirkning",
        body: "Kortlægger tilstedeværelse, så driftsteams kan korrelere fugt- og varmebelastninger med turistgrupper og eventplaner.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Outdoor-sensor",
        badge: "Vejrbaseline",
        body: "Essentiel reference for massive murstensbygninger, hvor indeklima halter timer bag udendørs ændringer.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  "property-management": {
    cardTitle: "Ejendomsadministration",
    cardSummary:
      "Dokumentér indeklima for lejere og fang lækager tidligt på tværs af en bolig- eller erhvervsportefølje.",
    focus:
      "Ejendomsadministratorer besvarer komfortklager med begrænset indsigt — og en enkelt uopdaget lækage kan blive til forsikringssager på tværs af flere enheder, før nogen opdager det. Porteføljeteams har brug for sammenlignelige data på tværs af bygninger, ikke ad-hoc-aflæsninger, når en lejer eskalerer.",
    challenges: [
      "'For varmt' eller 'for tung luft' uden dokumentation: lejertvister trækker ud, fordi HVAC-indstillinger ikke kan knyttes til målte forhold i enheden.",
      "Lækager, der rejser mellem enheder: stigledninger, kedler og badeværelser kan skade nabolejligheder, før kilden findes.",
      "Kældre og maskinrum med linerisiko: en punktsensor overser vand, der følger rør på tværs af en hel blok.",
      "Tekniske rum overvåget reaktivt: kedelrum og varmevekslere får først opmærksomhed efter et nedbrud.",
    ],
    solution: [
      "RoomAlyzer Indeklima leverer objektive CO2-, temperatur-, fugt- og TVOC-data i lejerarealer og løser komfortklager med dokumentation i stedet for debat.",
      "RoomAlyzer Vanddetektering sender SMS- og e-mailalarmer fra sensorer under vask, kedler og stigledninger, med water rope til kældre og maskinområder og tidsstemplet hændelseslog til forsikring. temperature-sensor overvåger tekniske rum på tværs af porteføljen fra ét dashboard.",
    ],
    smarterTogether:
      "RoomAlyzer Indeklima og Vanddetektering sammen reducerer både lejeromsætning og akutte udkald, de to omkostningsdrivere, ejendomsteams mærker mest.",
    closing:
      "Porteføljeovervågning bør ikke betyde et skræddersyet projekt pr. bygning. RoomAlyzer rulles ud bygning for bygning på cellulær forbindelse uden lejer-Wi-Fi.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Lejerarealer",
        body: "Objektive CO2-, temperatur-, fugt- og TVOC-data til at løse 'for varmt' eller 'for tung luft'-klager med dokumentation.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Water Detector",
        badge: "Lækageforebyggelse",
        body: "SMS- og e-mailalarmer under vask, kedler og stigledninger, før vand når naboenheder.",
        sensorSlugs: ["water-detector"],
      },
      {
        name: "Water Rope",
        badge: "Maskinrum og kælder",
        body: "Linjedækning langs rør og kældergulve i større blokke, hvor en punktsensor ikke er nok.",
        sensorSlugs: ["water-rope"],
      },
      {
        name: "Temperature-sensor",
        badge: "Tekniske rum",
        body: "Overvåger kedelrum, varmevekslere og sekundære HVAC-zoner på tværs af porteføljen.",
        sensorSlugs: ["temperature"],
      },
    ],
  },
  "fm-companies": {
    cardTitle: "FM-virksomheder",
    cardSummary:
      "Tilføj et målbart, datadrevet IoT-lag oven på jeres eksisterende facility-management-tjenester.",
    focus:
      "FM-udbydere vinder og beholder kontrakter med målbare resultater — men sensorudrulning på tværs af forskellige kundelokationer kræver en platform, der skalerer, white-labels rent og dækker klima, areal og vand ét sted. Kunder forventer dokumentation for besparelser og komfort, ikke præsentationer om, hvad der måske er muligt.",
    challenges: [
      "Hver kundelokation er forskellig: skoler, kontorer og offentlige bygninger beder om forskellige parametre — men FM-teams kan ikke køre en separat stack pr. kontrakt.",
      "Påstande om arealudnyttelse har brug for data: konsolidering, rengøringsskemaer og energitilbagetrækning kræver belægningsdokumentation, kunder stoler på.",
      "Lækagedetektion som lav-friktion upsell: vandskade er en top forsikringsdriver, men traditionelle systemer er langsomme at tilbyde og installere.",
      "Forbindelse uden kunde-IT-projekter: gæste-Wi-Fi og virksomheds-firewalls blokerer mange IoT-udrulninger, før de starter.",
    ],
    solution: [
      "RoomAlyzer Indeklima er standardudrulningen: Mini+ og Full+ sensorer dækker CO2, temperatur, fugt og TVOC i én enhed, med dashboards FM-teams kan brande pr. kontrakt.",
      "RoomAlyzer Space management understøtter udnyttelsesanbefalinger med anonymiserede skrivebords- og lokaledata. RoomAlyzer Brug og rengøring retter indsatsen mod rum, der faktisk bruges. RoomAlyzer Vanddetektering tilføjer SMS- og e-mail-lækagealarmer til lav marginalomkostning. Cloud Connector bringer data til platformen over cellulær, uden kunde-Wi-Fi pr. bygning.",
    ],
    smarterTogether:
      "RoomAlyzer Indeklima, Space management, Brug og rengøring og Vanddetektering på én platform lader FM-udbydere mersælge tjenester med ét installationsbesøg og ét løbende dataforhold.",
    closing:
      "FM-marginer afhænger af hurtig udrulning og dokumenterbare resultater. RoomAlyzer er designet til multi-site-udrulninger uden gateway-sprawl eller IT-tickets pr. bygning.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Indeklima",
        body: "Standardudrulningssensoren til kontorer, skoler og offentlige bygninger, der dækker CO2, temperatur, fugt og TVOC i én enhed.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion / Desk-sensor",
        badge: "Arealudnyttelse",
        body: "Belægning på lokale- og skrivebordsniveau, der understøtter konsolidering, rengøringsskemaer og energitilbagetrækning med fakta.",
        sensorSlugs: ["motion", "desk"],
      },
      {
        name: "Water Detector",
        badge: "Risikoreduktion",
        body: "Et lavpris-upsell med SMS- og e-mailalarmer, der fanger lækager, før de bliver akutte udkald og forsikringshændelser.",
        sensorSlugs: ["water-detector"],
      },
      {
        name: "Cloud Connector",
        badge: "Lokationsforbindelse",
        body: "Bringer sensordata til platformen over cellulær uplink — intet kunde-Wi-Fi, intet IT-projekt pr. bygning.",
        sensorSlugs: ["cloud-connector"],
      },
    ],
  },
  "consulting-engineers": {
    cardTitle: "Rådgivende ingeniører",
    cardSummary:
      "Midlertidige og permanente målinger, der understøtter commissioning, audits og renoveringsrådgivning.",
    focus:
      "Rådgivende ingeniører har brug for forsvarlige måledata til commissioning-rapporter, energiaudits og renoveringsforslag — ofte over et kort projektvindue, derefter eventuelt efterladt til kunden. Håndholdte stikprøvemålinger overlever sjældent granskning, når belægning, vejr og HVAC-cyklusser er i spil.",
    challenges: [
      "Post-occupancy-studier uden kontinuerlige logfiler: en uge med stikprøvekontrol overser, hvordan lokaler opfører sig på tværs af sæsoner og belastningsmønstre.",
      "Indendørstendenser forvekslet med vejr: rapporter uden udendørs reference er svære at forsvare i peer review eller kundegodkendelse.",
      "Problemzoner, der har brug for målrettede loggere: krybekældre og klimaskalsundersøgelser retfærdiggør ikke altid en fuld multi-sensorsenhed.",
      "Belægningsantagelser indbygget i ventilationsdesign: skemaer og headcount-estimater har brug for validering mod reel tilstedeværelse.",
    ],
    solution: [
      "RoomAlyzer Indeklima giver multi-parameter-logning (CO2, temperatur, fugt, TVOC) til post-occupancy-evaluering, ventilationsverifikation og indeklimastudier med eksporterbar historik til rapporter.",
      "En outdoor-sensor giver den baseline, seriøse audits forventer. Dedikerede Temperature og humidity-sensor dækker problemzoner; RoomAlyzer Space management validerer belægningsantagelser bag ventilations- og opvarmningsskemaer.",
    ],
    smarterTogether:
      "Udendørs reference, indendørs multi-parameter-logning og kortsigtet belægningskortlægning giver ingeniører et komplet evidensgrundlag i én udrulning.",
    closing:
      "Midlertidige studier og permanent overvågning bør bruge samme hardware. RoomAlyzer installeres på minutter og forbliver på plads, når kunden ønsker løbende tilsyn.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Baseline-undersøgelser",
        body: "Multi-parameter-logning (CO2, temperatur, fugt, TVOC) til post-occupancy-evaluering, ventilationsverifikation og indeklimastudier.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Outdoor-sensor",
        badge: "Referenceenhed",
        body: "Udendørs baseline, så indendørstendenser i rapporter adskilles fra vejr — forventet i enhver seriøs audit.",
        sensorSlugs: ["outdoor"],
      },
      {
        name: "Temperature / Humidity-sensor",
        badge: "Målrettet logning",
        body: "Dedikerede loggere til problemzoner, krybekældre og klimaskalsundersøgelser, hvor en fuld multi-sensorsenhed er overkill.",
        sensorSlugs: ["temperature", "humidity"],
      },
      {
        name: "Motion-sensor",
        badge: "Belægningsstudier",
        body: "Kortsigtet tilstedeværelseskortlægning til at validere ventilationshastigheder, opvarmningsskemaer og rumprogrammeringsantagelser.",
        sensorSlugs: ["motion"],
      },
    ],
  },
};

const de: Record<string, IndustryContentOverlay> = {
  offices: {
    cardTitle: "Büros und Arbeitsplätze",
    cardSummary:
      "Flächennutzung in hybriden Arbeitswelten mit Produktivität und Komfort der Mitarbeitenden in Einklang bringen.",
    focus:
      "Moderne Büros müssen hybride Anwesenheit, Meetingraumbedarf und Raumklima ausbalancieren, oft ohne Daten für Miete, HVAC oder Layoutentscheidungen.",
    challenges: [
      "Bezahlung für leere Schreibtische und Etagen: Hybrides Arbeiten hat Anwesenheitsmuster verändert, doch viele Organisationen dimensionieren Flächen noch nach Kopfzahl, nicht nach gemessener Nutzung.",
      "Geisterbuchungen in Meetingräumen: für zehn reserviert, von zwei genutzt, blockieren Räume, die andere brauchen, ohne objektive Sicht auf die Lücke.",
      "Komfortbeschwerden ohne Beleg: 'stickige Luft' oder 'zu kalt' ohne Ende, weil Lüftung und Heizung festen Plänen folgen, nicht der tatsächlichen Belegung.",
      "HVAC im Blindflug: Systeme heizen und lüften leere Zonen und unterliefern, wenn Räume voll sind, Energieverschwendung ohne besseres Wohlbefinden.",
    ],
    solution: [
      "RoomAlyzer Space-Management liefert anonymisierte Schreibtisch- und Raumbelegung in Echtzeit und über die Zeit, damit Sie Etagen richtig dimensionieren, Buchung versus tatsächliche Nutzung sehen und Geisterbuchungen freigeben (einschließlich über Google Calendar, Microsoft 365 oder Pronestor). Der Kontext ist deutlich: die UK Workspace Survey zeigt Büroanwesenheit von 83 % der Arbeitszeit 2016 auf 46 % 2023, ein Rückgang um 37 Prozentpunkte in sieben Jahren.",
      "RoomAlyzer Raumklima ergänzt kontinuierliches CO2-, Temperatur-, Feuchte- und TVOC-Monitoring, damit Nachmittagsmüdigkeit und Lüftungsbeschwerden mit Fakten beantwortet werden, nicht Eindrücken. Drahtlose Sensoren sind in Minuten installiert (ohne Wi-Fi-Projekt), und dieselbe Plattform zeigt Flächennutzung und Luftqualität nebeneinander.",
    ],
    smarterTogether:
      "Kombiniert lassen RoomAlyzer Space-Management und Raumklima Sie Lüftung und Heizung an die tatsächlich anwesenden Personen anpassen und Energieeinsparung ohne Komfortverlust an vollen Tagen erreichen.",
    closing:
      "Büro-Sensor-Rollouts sind normalerweise teuer und störend. RoomAlyzer ist in Minuten einsatzbereit, passt sich an veränderte Arbeitswelten an und kostet einen Bruchteil des Üblichen.",
  },
  churches: {
    cardTitle: "Kirchen und Kulturerbe",
    cardSummary:
      "Historische Innenräume mit präziser Feuchte- und Temperaturkontrolle in großen, ungleichmäßig beheizten Gebäuden schützen.",
    focus:
      "Kirchen verbinden unschätzbare Innenausstattung mit Gebäuden, die nie für moderne Heizung konzipiert wurden — große Volumina, ungleichmäßige Temperaturen und saisonale Feuchteschwankungen bedrohen Orgeln, Holzarbeiten und Fresken.",
    challenges: [
      "Unsichtbarer, gradueller Schaden: ungünstige Feuchte und Temperatur schädigen unersetzliche Ausstattung lange vor sichtbaren Zeichen.",
      "Ungleichmäßige Heizung in riesigen Volumina: Schiff, Chor und Sakristeien verhalten sich unterschiedlich — Handmessgeräte sind unzuverlässig.",
      "Außenwetter treibt Innenschwankungen: massive Mauerwerkgebäude reagieren langsam — Innendaten ohne Außenreferenz sind schwer zu deuten.",
      "Erhaltung versus Energiekosten: ein historisches Gebäude zum Schutz des Inventars zu heizen ist teuer — ohne Daten finden Sie kein Gleichgewicht.",
    ],
    solution: [
      "RoomAlyzer Konservierung überwacht Temperatur und Luftfeuchtigkeit kontinuierlich (±0,1 °C · ±1 % RH) und liefert klare Dokumentation der Bedingungen Ihrer Innenräume. Drahtlose Mini+ und Full+ Sensoren sind diskret genug für Kirchenräume und präzise genug für Konservatoren, mit Alarmen bei Grenzwertüberschreitung.",
      "Ein Außen Sensor trennt Innentrends von Wetterschwankungen; EN-15757-konforme Berichte liefern Diözesen, Versicherern und Denkmalschutzbehörden die erwarteten Nachweise. Eine Plattform kann jede Kirche einer Diözese abdecken, mit rollenbasierem Zugang für Küster, Pfarrer und Berater.",
    ],
    smarterTogether:
      "RoomAlyzer Konservierung gibt Konservatoren, die das Inventar schützen, und Gebäudeteams, die den Betrieb steuern, denselben Datensatz, ein Gleichgewicht, das selten in einem Werkzeug zu finden ist.",
    closing:
      "Klimamonitoring in Kirchen ist normalerweise teuer und aufwendig. RoomAlyzer ist in Minuten einsatzbereit, flexibel für jedes Gebäude und kostet einen Bruchteil des Erwarteten.",
  },
  "museums-galleries": {
    cardTitle: "Museen und Kultur",
    cardSummary:
      "Risiken mindern und empfindliche Sammlungen mit kontinuierlichem Klimamonitoring nach Erhaltungsstandards bewahren.",
    focus:
      "Museen und Galerien müssen Leihgaben, Lagermaterial und Ausstellungsräume schützen, oft mit Nachweis gegenüber Versicherern, Leihgebern und Förderern, während besuchergetriebene Feuchtespitzen gemanagt werden.",
    challenges: [
      "Leih- und Lageranforderungen: Leihgeber erwarten dokumentierte, stabile Bedingungen — Off-Display-Lager wird oft weniger überwacht als Hauptgalerien.",
      "Besuchergetriebene Klimaspitzen: Gruppen und Events treiben Feuchte und Temperatur schnell hoch — ohne Präsenzdaten fehlt die Kausalität.",
      "Versicherungs- und Förderdokumentation: bei Schäden brauchen Sie manipulationssichere Aufzeichnungen — keinen Ordner mit Handmessungen.",
      "Drahtlose Installation in sensiblen Räumen: Kabel durch historisches Gewebe oder voll besuchte Galerien sind selten akzeptabel.",
    ],
    solution: [
      "RoomAlyzer Konservierung liefert kontinuierliche drahtlose Temperatur- und Feuchtigkeitsprotokollierung in EN-15757-Bändern in Galerien, Lagern und Transportkisten. Kuratoren erhalten Alarme vor Abweichungen und prüffähige PDF-Berichte für Versicherung und Leihverträge.",
      "Bewegungssensoren kartieren Besucherströme, damit Feuchtespitzen mit Öffnungszeiten korreliert werden können und Kapazität entsprechend geplant wird. Ein Außen Sensor lässt HVAC auf echtes Wetter reagieren, schützt Sammlungen und hält Energie im Griff.",
    ],
    closing:
      "Museumsreifes Klimamonitoring ist normalerweise teuer und langsam. RoomAlyzer installiert sich in Minuten, skaliert über alle Räume und kostet einen Bruchteil traditioneller Systeme.",
  },
  municipalities: {
    cardTitle: "Schulen und Kommunen",
    cardSummary:
      "Gesundheit, Konzentration und Energierücknahme in Schulen, Verwaltung und Kulturgebäuden priorisieren.",
    focus:
      "Kommunen betreiben Dutzende Gebäudetypen (Schulen, Kitas, Rathäuser und Kulturhäuser) brauchen eine Plattformsicht plus Nachweis, dass Raumklima und Energie tatsächlich zur Nutzung passen.",
    challenges: [
      "CO2 und Konzentration im Unterricht: Schüler verlieren Fokus, wenn Lüftung der Belegung hinterherhinkt — doch die meisten Schulen verlassen sich auf subjektive Luftgefühl-Checks.",
      "Portfolioskala: Monitoring über alle Schulen und Verwaltungsgebäude wirkt wie ein mehrjähriges IT-Projekt — es sei denn, Sensoren sind wirklich Plug-and-Play.",
      "Energierücknahme ohne Beleg: Heizung und Lüftung laufen nach Zeitplänen, weil niemand darauf vertraut, dass Hallen und Klassen nach Unterricht wirklich leer sind.",
      "Antworten an Eltern und Lehrkräfte: bei Luftqualitätsfragen brauchen Kommunen dokumentierte Daten — keine Einzelmessung.",
    ],
    solution: [
      "RoomAlyzer Raumklima setzt CO2-, Temperatur-, Feuchte- und TVOC-Sensoren in jedes Klassenzimmer und Gemeinschaftsgebäude mit Alarmen vor Richtlinienüberschreitung und Dashboards, die Hausmeister wirklich nutzen. Varde Kommune rollte 1.400 Sensoren auf 36 Schulen in neun Wochen aus; durchschnittliches CO2 über 1.200 ppm in Unterrichtszeiten sank von 23 % auf 6 % in zehn Monaten.",
      "RoomAlyzer Space-Management kartiert echte Belegung in Sporthallen, Aula und Gemeinschaftsräumen, damit Heizung und Lüftung zurückfahren, wenn Räume leer sind. Ein kommunales Dashboard bündelt alle Gebäude (Schulen, Verwaltung und Kultur) ohne separates System pro Standort.",
    ],
    smarterTogether:
      "RoomAlyzer Raumklima und Space-Management zusammen ermöglichen Lüftung nach tatsächlicher Kopfzahl und Energieeinsparung in Gebäuden, die außerhalb der Schulzeit leer stehen.",
    closing:
      "Kommunale Sensorprogramme sind normalerweise teuer und langsam. RoomAlyzer installiert sich in Minuten pro Raum, braucht kein Wi-Fi pro Gebäude und skaliert von einer Schule bis zur ganzen Kommune.",
  },
  schools: {
    cardTitle: "Schulen",
    cardSummary:
      "CO2, Temperatur und Feuchte in jedem Klassenzimmer dokumentieren — für Konzentration und Gesundheit der Schüler.",
    focus:
      "Schulen brauchen objektive Raumklimadaten in jedem Lernraum — nicht nur zur Einhaltung von Richtlinien, sondern um zu belegen, dass Lüftung und Heizung die Konzentration tatsächlich unterstützen, wenn Räume voll sind. Lehrkräfte und Hausmeister treffen tägliche Lüftungsentscheidungen ohne ein gemeinsames Bild von CO2, Feuchte oder ob Räume nach Unterricht wirklich genutzt werden.",
    challenges: [
      "CO2 über 1.000 ppm in vollen Klassenzimmern: Forschung verbindet erhöhtes CO2 mit reduzierter Konzentration — doch die meisten Schulen reagieren erst, wenn jemand sich beschwert.",
      "Lüftung nach Gewohnheit, nicht nach Daten: Fensterlüftungsroutinen und mechanische Systeme spiegeln selten tatsächliche Belegung oder Außenbedingungen wider.",
      "Energie für leere Gebäude: Sporthallen, Aula und Flügel werden über Nacht beheizt, weil Zeitpläne Nutzung voraussetzen.",
      "Keine Nachverfolgung für Eltern oder Prüfer: wenn die Luftqualität infrage gestellt wird, brauchen Schulen kontinuierliche Protokolle — keinen Beraterbesuch einmal im Jahr.",
    ],
    solution: [
      "RoomAlyzer Raumklima liefert Live-CO2-, Temperatur-, Feuchte- und TVOC-Daten in jedem Klassenzimmer mit Alarmen vor Richtlinienüberschreitung, damit Lehrkräfte ein klares Signal zum Lüften erhalten und die Leitung Nachweise hat, dass Bedingungen gemanagt werden.",
      "RoomAlyzer Space-Management kartiert echte Nutzung in Hallen und Fachräumen, damit Heizung und Lüftung zurückfahren, wenn Gebäude leer sind. Ein Außen Sensor liefert eine Wetterreferenz, damit natürliche Lüftung zu den Bedingungen draußen passt.",
    ],
    smarterTogether:
      "RoomAlyzer Raumklima und Space-Management zusammen zeigen nicht nur, wann die Luftqualität nachlässt, sondern auch, wann Energie verschwendet wird, leere Räume zu heizen.",
    closing:
      "Klassenzimmer-Monitoring muss kein Verkabelungs-, Gateway- oder Monatsplanungsprojekt sein. RoomAlyzer-Sensoren installieren sich in Minuten und skalieren von einer Schule bis zum ganzen Schulbezirk.",
    sensorRecommendations: [
      {
        name: "CO2-Sensor",
        badge: "Klassenzimmer-Baseline",
        body: "Live-CO2-Werte mit Alarmen, bevor Klassenzimmer die 1.000-ppm-Richtlinie überschreiten — der schnellste Weg zu wissen, wann gelüftet werden muss.",
        sensorSlugs: ["co2"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Vollständiges Bild",
        body: "Ergänzt Temperatur, Feuchte und TVOC zum CO2-Bild in einer diskreten Einheit pro Klassenzimmer oder Fachraum.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Mini+ PIR / Motion-Sensor",
        badge: "Einsparung außerhalb der Schulzeit",
        body: "Kartiert echte Belegung in Klassenzimmern, Sporthallen und Aula, damit Heizung und Lüftung zurückfahren, wenn Räume leer sind.",
        sensorSlugs: ["mini-plus-pir", "motion"],
      },
      {
        name: "Außen Sensor",
        badge: "Intelligenteres Lüften",
        body: "Gibt Lehrkräften und Hausmeistern eine Außenreferenz, damit Fensterlüftungsroutinen echte Wetterbedingungen widerspiegeln.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  hospitals: {
    cardTitle: "Krankenhäuser",
    cardSummary:
      "Stationen, Lager und Labore mit prüffähigen Klimadaten überwachen — wo jeder Grad zählt.",
    focus:
      "Krankenhäuser müssen Patientenkomfort, Infektionskontrolle und strenge Lagerbedingungen ausbalancieren — oft über Stationen, Apotheken, Labore und Kühlräume mit jeweils eigenen Schwellenwerten. Ein einzelner Ausreißer in einer Apothekenkühlung oder eine dauerhaft trockene Station kann klinische, regulatorische und reputative Folgen haben.",
    challenges: [
      "Enge Temperaturbänder ohne kontinuierlichen Nachweis: Medikamentenlager, Blutbanken und Kühlräume brauchen prüffähige Protokolle — Klemmbrett-Runden sind Lücken, die zu Vorfällen werden.",
      "Streit um Luftqualität auf Stationen: Patienten und Personal melden stickige oder trockene Luft, doch Gebäudeteams fehlen Raumdaten zur Lüftungsoptimierung.",
      "Feuchte, die Patienten und Geräte betrifft: zu trockene oder zu feuchte Luft in Behandlungsbereichen hat klinische und technische Folgen.",
      "Wassereintritt nahe kritischer Zonen: Technikräume und Schächte können klinische oder elektrische Bereiche überfluten, bevor jemand es bemerkt.",
    ],
    solution: [
      "RoomAlyzer Raumklima überwacht CO2, Temperatur, Feuchte und TVOC in patientennahen Bereichen mit kontinuierlicher Historie, damit Luftqualitätsdiskussionen auf Daten basieren, nicht Eindrücken.",
      "Dedizierte Temperature-Sensor und Humidity-Sensor decken Apotheken, Labore und Kühlung mit Alarmen ab, bevor Bestände gefährdet sind. RoomAlyzer Wassererkennung sendet SMS- und E-Mail-Alarme aus Technik- und Servicebereichen mit zeitgestempeltem Vorfallprotokoll, bevor ein Leck klinische Zonen erreicht.",
    ],
    smarterTogether:
      "RoomAlyzer Raumklima und Wassererkennung auf einer Plattform geben Gebäudeteams eine Gesamtsicht auf Komfort, Compliance und Infrastrukturrisiko im Krankenhaus.",
    closing:
      "Krankenhaus-Gebäude brauchen zuverlässiges, störungsarmes Monitoring. RoomAlyzer installiert sich ohne Kabel durch klinische Bereiche und hält Prüfprotokolle bereit, wenn Inspektoren fragen.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Stationen und Kliniken",
        body: "Kontinuierliches CO2-, Temperatur-, Feuchte- und TVOC-Monitoring in patientennahen Bereichen zur Dokumentation von Luftqualität und Komfort.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature-Sensor",
        badge: "Kritische Lagerung",
        body: "Dedizierte Logger für Medikamentenschränke, Blutbanken und Kühlräume, wo enge Temperaturbänder Nachweis auf Abruf erfordern.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Humidity-Sensor",
        badge: "Infektionskontrolle",
        body: "Erfasst relative Feuchte auf Stationen und in Behandlungsräumen, wo trockene oder feuchte Luft Patienten und Geräte betrifft.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Water Detector",
        badge: "Frühwarnung",
        body: "SMS- und E-Mail-Alarme in Technikräumen, Schächten und Servicebereichen, bevor ein Leck klinische oder elektrische Zonen erreicht.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  "elderly-care": {
    cardTitle: "Altenpflege",
    cardSummary:
      "Stabiles Raumklima und einfache Serviceanfragen für einen sichereren, ruhigeren Pflegealltag.",
    focus:
      "Pflegeheime und Einrichtungen betreuen vulnerable Bewohner rund um die Uhr — stabile Temperatur und Feuchte reduzieren Unbehagen und Gesundheitsrisiken, während Personal schnell reagieren muss, wenn etwas Aufmerksamkeit braucht. Familien erwarten ruhige, komfortable Zimmer; Betreiber brauchen Frühwarnung, wenn Bedingungen abweichen oder Wasser auftaucht.",
    challenges: [
      "Langsame Reaktion auf Komfortprobleme: Bewohner melden vielleicht nicht, dass ihnen zu heiß oder kalt ist, bis Probleme stundenlang bestanden haben.",
      "Küchen, Wäschereien und Technikräume laufen heiß: Nebenzonen driften oft außerhalb des in Bewohnerzimmern überwachten Bereichs.",
      "Serviceanfragen hängen vom Telefon ab: Personal verschwendet Zeit, einfache Anfragen aus Sanitärräumen und Speisesälen weiterzuleiten.",
      "Lecks in Bädern und Küchen: Feuchtigkeit breitet sich in Bewohnerbereiche aus, bevor eine Nachtrunde es entdeckt.",
    ],
    solution: [
      "RoomAlyzer Raumklima hält Temperatur, Feuchte, CO2 und TVOC in Gemeinschaftsbereichen und Bewohnerzimmern stabil, mit Alarmen bei Abweichung von vereinbarten Bändern.",
      "RoomAlyzer Drucktasten ermöglichen Serviceanfragen mit einem Tipp aus Sanitärräumen und Speisesälen, weitergeleitet per E-Mail oder SMS, bevor Probleme zu Beschwerden werden. Temperature-Sensor ergänzt Präzision in Küchen und Wäschereien; RoomAlyzer Wassererkennung warnt Personal in Nassräumen und Technikbereichen früh.",
    ],
    smarterTogether:
      "RoomAlyzer Raumklima und Drucktasten auf einer Plattform helfen dem Personal, Komfort und Reaktionszeit zu priorisieren, ohne die täglichen Runden zu verkomplizieren.",
    closing:
      "Pflegeeinrichtungen brauchen diskretes, zuverlässiges Monitoring, dem Personal vertraut. RoomAlyzer installiert sich schnell, vermeidet Wi-Fi-Abhängigkeit und skaliert über Flügel und Standorte.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Bewohnerkomfort",
        body: "Überwacht CO2, Temperatur, Feuchte und TVOC in Gemeinschaftsbereichen und Bewohnerzimmern für stabile Bedingungen Tag und Nacht.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature-Sensor",
        badge: "Spot-Check-Zonen",
        body: "Nützlich in Wäschereien, Küchen und schlecht isolierten Flügeln, wo ein dedizierter Logger Präzision ergänzt.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Touch-Sensor",
        badge: "Personal und Bewohner",
        body: "Serviceanfragen mit einem Tipp aus Sanitärräumen, Speisesälen oder Bewohnerzimmern — kein Telefon, keine Suche nach der richtigen Durchwahl.",
        sensorSlugs: ["touch"],
      },
      {
        name: "Water Detector",
        badge: "Gebäudeschutz",
        body: "SMS- und E-Mail-Alarme in Bädern, Küchen und Technikbereichen, bevor Feuchtigkeit Bewohnerbereiche erreicht.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  retail: {
    cardTitle: "Einzelhandel",
    cardSummary:
      "Shop-Komfort, Kühlkette und Kundenfrequenz in Einzelgeschäften oder Ketten überwachen.",
    focus:
      "Einzelhandel jongliert mit Einkaufskomfort, Mitarbeiterwohlbefinden und Geräteverfügbarkeit: Kühlschränke, die leise ausfallen, Geschäfte, die an vollen Samstagen überhitzen, und Energie für leere Etagen nach Ladenschluss. Kettenbetreiber brauchen vergleichbare Daten über Standorte, nicht Filialleiter, die allein nach Thermostaten raten.",
    challenges: [
      "Kühlkettenausfälle zu spät entdeckt: Kühltheken und Hinterhaus-Kühlschränke können über Nacht aus dem Bereich driften, ohne dass jemand es merkt, bis Ware verloren ist.",
      "Shop-Komfort versus Energie: lange Öffnungszeiten bedeuten harte HVAC-Last — ohne Belegungsdaten folgt sie nicht der echten Kundenfrequenz.",
      "Tote Zonen und Stoßzeiten: derselbe Grundriss fühlt sich stündlich und saisonal anders an, doch Klimaregelung passt sich selten an.",
      "Sicherheit nach Ladenschluss ohne Rundgänge: offene Laderampen und Innentüren verschwenden Energie und schaffen Risiko.",
    ],
    solution: [
      "Temperature-Sensor liefert kontinuierliche Protokollierung und Alarme für Kühlschränke, Gefrierschränke und Kühltheken mit Historie für Lebensmittelsicherheit und Versicherungsprüfungen.",
      "RoomAlyzer Raumklima erfasst CO2, Temperatur, Feuchte und TVOC im Verkaufsbereich, damit Komfort und Energie über lange Öffnungszeiten ausbalanciert werden. Motion-Sensor kartiert Kundenfrequenz; RoomAlyzer Schließfächer und Türen bestätigt, dass Türen und Rampen bei Ladenschluss geschlossen sind, ohne nächtliche Rundgänge.",
    ],
    smarterTogether:
      "Kundenfrequenz und Raumklimadaten zeigen, wo in Stoßzeiten gelüftet werden muss und wo zurückgefahren werden kann, wenn Zonen leer sind.",
    closing:
      "Multi-Site-Einzelhandel braucht Monitoring, das schnell ausgerollt und konsistent verglichen wird. RoomAlyzer skaliert über Filialen ohne separates IT-Projekt pro Standort.",
    sensorRecommendations: [
      {
        name: "Temperature-Sensor",
        badge: "Kühlkette",
        body: "Kontinuierliches Monitoring von Kühlschränken, Gefrierschränken und Kühltheken mit Alarmen, bevor Ware verloren geht.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Shop-Klima",
        body: "Erfasst CO2, Temperatur, Feuchte und TVOC im Verkaufsbereich, um Komfort und Energie über lange Öffnungszeiten auszubalancieren.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion-Sensor",
        badge: "Kundenfrequenz",
        body: "Kartiert Präsenz auf Raumebene, um Stoßzeiten, tote Zonen und wo Klimaregelung der tatsächlichen Frequenz folgen sollte zu verstehen.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Open/Close-Sensor",
        badge: "Sicherheit nach Ladenschluss",
        body: "Bestätigt, dass Türen, Laderampen und Schränke bei Ladenschluss geschlossen sind — ohne nächtliche Rundgänge.",
        sensorSlugs: ["open-close"],
      },
    ],
  },
  hotels: {
    cardTitle: "Hotels",
    cardSummary:
      "Belegungsgesteuertes Klima und Service in Gästezimmern, Tagungsräumen und öffentlichen Bereichen.",
    focus:
      "Hotels brauchen Gästekomfort ohne Verschwendung — Zimmer beheizt für No-Shows, Tagungssuiten belüftet für abgesagte Buchungen, Housekeeping nur dort eingesetzt, wo es wirklich nötig ist. Bewertungen und Wiederbuchungen hängen an Lobby und Konferenzräumen, die frisch wirken, während Hinterhaus-Bereiche laufen oft nach festen Zeitplänen.",
    challenges: [
      "Gästezimmer konditioniert für leere Nächte: HVAC läuft für No-Shows und frühe Abreisen, weil das PMS dem Technikraum nicht sagt, wer tatsächlich im Haus ist.",
      "CO2-Spitzen in Konferenzräumen: Halbtages-Events können Tagungsräume über Komfortgrenzen drücken, bevor Personal es bemerkt.",
      "Energie-Blindspots im Hinterhaus: Wäscherei, Küchen und Personalbereiche lüften und heizen nach Timern ohne Bezug zur echten Nutzung.",
      "Langsame Gäste-Feedback-Schleifen: Probleme in Sanitärräumen oder an der Rezeption erscheinen auf Bewertungsportalen, bevor der Betrieb davon hört.",
    ],
    solution: [
      "Mini+ PIR Sensoren kombinieren Klima und Belegung in Gästezimmern, ideal für Absenkstrategien bei leeren Zimmern ohne Kompromiss beim Ankunftskomfort.",
      "RoomAlyzer Raumklima überwacht Lobby, Restaurants und Konferenzräume, wo Luftqualität die Gästewahrnehmung prägt. RoomAlyzer Nutzung und Reinigung richtet Housekeeping nach tatsächlicher Zimmernutzung aus; RoomAlyzer Drucktasten liefern sofortiges Service-Feedback in Sanitärräumen und an der Rezeption, bevor Probleme Bewertungsportale erreichen.",
    ],
    smarterTogether:
      "Zimmerbelegung, Raumklima und bedarfsgesteuerte Reinigung ermöglichen Energieeinsparung in leeren Zimmern bei priorisierter Lüftung und Housekeeping dort, wo Gäste versammelt sind.",
    closing:
      "Hotelportfolios brauchen Monitoring, das Gästeprivatsphäre respektiert, störungsarm installiert und ohne Gäste-Wi-Fi funktioniert. RoomAlyzer passt über Objekte hinweg.",
    sensorRecommendations: [
      {
        name: "Mini+ PIR",
        badge: "Gästezimmer",
        body: "Kombiniert Klimamonitoring mit Belegung in einer Einheit — ideal für Absenkstrategien bei leeren Zimmern.",
        sensorSlugs: ["mini-plus-pir"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Tagungs- und öffentliche Bereiche",
        body: "Überwacht CO2, Temperatur, Feuchte und TVOC in Lobby, Restaurants und Konferenzräumen, wo Komfort Bewertungen prägt.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion-Sensor",
        badge: "Hinterhaus",
        body: "Erfasst Nutzung in Personalbereichen, Wäscherei und Tagungsräumen, um Lüftung und Reinigung an echte Aktivität anzupassen.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Touch-Sensor",
        badge: "Gäste-Feedback",
        body: "Einfache Zufriedenheits- oder Service-Tasten in Sanitärräumen und an der Rezeption für sofortige Reaktion bei Reparaturbedarf.",
        sensorSlugs: ["touch"],
      },
    ],
  },
  "warehouses-logistics": {
    cardTitle: "Lager und Logistik",
    cardSummary:
      "Bestand mit Temperatur-, Feuchte- und Wassererkennung in Lager- und Ladebereichen schützen.",
    focus:
      "Lager und Logistikstandorte bewahren Güter, die bei abweichenden Bedingungen verderben, korrodieren oder verziehen — oft über große Flächen, Kühlräume und Laderampen, wo ein unentdecktes Leck den Betrieb stoppen kann. Compliance und Versicherung erwarten zunehmend kontinuierliche Protokolle, keine Klemmbrett-Stichproben.",
    challenges: [
      "Kühlräume driften aus dem Bereich: gekühlte Lagerung kann leise ausfallen, bis Ware vernichtet wird.",
      "Feuchte schädigt Bestand: Karton, Elektronik und hygroskopische Güter brauchen stabile RH über große, ungleichmäßig konditionierte Flächen.",
      "Lecks entlang langer Strecken: Rohre, Sockelleisten und Laderampen brauchen Linienabdeckung, die ein Punktsensor nicht leisten kann.",
      "Anlagentechnik und Kondensattropfen: lokale Wasserquellen breiten sich schnell über offene Flächen aus.",
    ],
    solution: [
      "Temperature-Sensor liefert prüffähige Protokollierung für Kühlräume, Gefrierschränke und empfindliche Güter mit Alarmen vor Schwellenüberschreitung.",
      "Humidity-Sensor erfasst RH in Lagerzonen mit feuchteempfindlichen Materialien. RoomAlyzer Wassererkennung deckt Linienrisiko mit Water Rope entlang Rohre und Rampenböden sowie Punktsensoren unter Spülen, Tropfen und Anlagentechnik ab, mit SMS- und E-Mail-Alarmen und zeitgestempeltem Vorfallprotokoll für Versicherungen.",
    ],
    smarterTogether:
      "Temperatur, Feuchte und RoomAlyzer Wassererkennung auf einer Plattform geben Betrieb und QA ein Dashboard für Bestandsschutz und Incident Response.",
    closing:
      "Industriestandorte brauchen robustes, wartungsarmes Monitoring ohne Kilometer Kabelverlegung. RoomAlyzer deployt schnell und skaliert mit der Anlage.",
    sensorRecommendations: [
      {
        name: "Temperature-Sensor",
        badge: "Kühlung",
        body: "Zuverlässige Protokollierung für Kühlräume, Gefrierschränke und temperaturempfindliche Güter mit prüffähiger Historie.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Humidity-Sensor",
        badge: "Bestandsschutz",
        body: "Erfasst relative Feuchte in Lagerzonen, wo Karton, Elektronik oder hygroskopische Materialien stabile Bedingungen brauchen.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Water Rope",
        badge: "Linienabdeckung",
        body: "Sensorkabel entlang Rohre, Sockelleisten und Laderampenböden, wo ein Punktsensor nicht reicht.",
        sensorSlugs: ["water-rope"],
      },
      {
        name: "Water Detector",
        badge: "Punktschutz",
        body: "SMS- und E-Mail-Alarme unter Spülen, Kondensattropfen und Anlagentechnik, bevor Wasser sich über den Boden ausbreitet.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  "archives-libraries": {
    cardTitle: "Archive und Bibliotheken",
    cardSummary:
      "Kontinuierliche Klimaprotokollierung und Alarme für seltene Bücher, Manuskripte und Papierarchive.",
    focus:
      "Archive und Bibliotheken bewahren Papierbestände, die bei Temperatur- und Feuchteschwankungen verfallen — oft über Lesesäle, Magazine und Kühlräume mit jeweils dokumentierten, stabilen Bedingungen. Leihgeber und Förderer erwarten Nachweise; Konservatoren brauchen Frühwarnung, bevor Einbände, Film oder Manuskripte gefährdet sind.",
    challenges: [
      "RH-Schwankungen in Magazinbereichen: relative Feuchte ist die erste Verteidigungslinie für Papier — doch viele Lager werden höchstens monatlich geprüft.",
      "Lesesäle versus Lager: Besucherkomfort darf nahegelegene Bestandsbedingungen nicht gefährden.",
      "Kühlung für Film und Fotografie: unter Raumtemperatur gelagerte Bestände brauchen dedizierte, kontinuierliche Protokollierung.",
      "HVAC reagiert auf Wetterschätzung: Befeuchtung und Entfeuchtung ohne Außenreferenz über- oder unterschießen.",
    ],
    solution: [
      "RoomAlyzer Konservierung liefert kontinuierliche RH-Protokollierung für Magazine, Manuskriptlager und Seltenheitenräume mit Alarmen vor Verlassen der Erhaltungsbänder.",
      "RoomAlyzer Raumklima überwacht Lesesäle diskret. Temperature-Sensor deckt Kühlräume; ein Außen Sensor trennt Innentrends vom Wetter, damit HVAC auf echten Bedarf reagiert.",
    ],
    smarterTogether:
      "Kontinuierliche Protokollierung über öffentliche und Lagerzonen gibt Konservatoren und Gebäudeteams denselben Datensatz für Erhaltungsentscheidungen und Tagesbetrieb.",
    closing:
      "Archivreifes Monitoring sollte keine invasive Installation erfordern. RoomAlyzer ist drahtlos, diskret und erzeugt Berichte für Leihgeber und Versicherer.",
    sensorRecommendations: [
      {
        name: "Humidity-Sensor",
        badge: "Papiererhaltung",
        body: "Konservatorische RH-Protokollierung, die erste Verteidigungslinie für Einbände, Manuskripte und historische Magazine.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Lesesäle",
        body: "Diskretes Klimamonitoring, wo Personal und Besucher Komfort brauchen, ohne nahegelegene Bestandsbedingungen zu gefährden.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature-Sensor",
        badge: "Kühlung",
        body: "Dedizierte Logger für Film-, Foto- und Sonderbestände unter Raumtemperatur.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Außen Sensor",
        badge: "HVAC-Referenz",
        body: "Trennt Innentrends von Außenwetter, damit Befeuchtung und Entfeuchtung auf echten Bedarf reagieren — nicht auf Schätzung.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  "manors-castles": {
    cardTitle: "Herrenhäuser und Schlösser",
    cardSummary:
      "Feuchte und Temperatur in unbeheizten Sälen, Kellern und Lagern überwachen — ohne Oberflächenschäden.",
    focus:
      "Herrenhäuser und Schlösser verbinden unschätzbare Innenräume mit Gebäuden, die nie für moderne Heizung konzipiert wurden — sporadische Nutzung, Besucherwellen und unbeheizte Flügel belasten Holz, Textilien und Oberflächen. Massives Mauerwerk verlangsamt die Innenreaktion auf Wetter. Innenmessungen ohne Außenbaseline sind leicht falsch zu deuten.",
    challenges: [
      "Saisonale RH schädigt Vertäfelung und Vergoldung: Säle und Treppen schwanken mit Besuchersaisons und Heizmuster.",
      "Eventgetriebene Wärme- und Feuchtelasten: Tourgruppen und Hochzeiten treiben Bedingungen schneller, als HVAC kompensieren kann.",
      "Drahtloses Monitoring ohne historischen Schaden: Kabel durch vertäfelte Räume und Wandteppiche sind selten akzeptabel.",
      "Unbeheizte Flügel driften unbeaufsichtigt: entfernte Räume verfallen, während Personal sich auf Hauptbesucherrouten konzentriert.",
    ],
    solution: [
      "RoomAlyzer Konservierung erfasst RH in Sälen, Treppen und vertäfelten Räumen mit Alarmen vor saisonalen Schwankungen, die Risse, Verwerfungen oder Vergoldungsverlust verursachen.",
      "Mini+ und Full+ Sensoren protokollieren drahtlos in für Besucher geöffneten Ausstellungsräumen. Motion-Sensor korreliert Feuchte- und Wärmelasten mit Tourplänen; ein Außen Sensor ist essenziell, wo Raumklima stundenlang dem Wetter hinterherhinkt.",
    ],
    smarterTogether:
      "Besucherpräsenz und Klimadaten erklären plötzliche Feuchteanstiege, damit Teams lüften oder heizen anpassen können, bevor Innenräume Schaden nehmen.",
    closing:
      "Denkmalhäuser brauchen Monitoring, das Baustoff respektiert und störungsarm installiert. RoomAlyzer fügt sich diskret in Räume ein, die Besucher nie bemerken.",
    sensorRecommendations: [
      {
        name: "Humidity-Sensor",
        badge: "Innenschutz",
        body: "Konservatorische RH-Protokollierung in Sälen, Treppen und vertäfelten Räumen, wo saisonale Schwankungen Risse, Verwerfungen und Vergoldungsverlust verursachen.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Ausstellungsräume",
        body: "Drahtlose Temperatur- und Feuchteprotokollierung in für Besucher geöffneten Räumen ohne Kabel durch historisches Gewebe.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion-Sensor",
        badge: "Besuchereinfluss",
        body: "Kartiert Präsenz, damit Gebäudeteams Feuchte- und Wärmelasten mit Tourgruppen und Eventplänen korrelieren können.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Außen Sensor",
        badge: "Wetter-Baseline",
        body: "Essenzielle Referenz für massive Mauerwerkgebäude, wo Raumklima stundenlang hinter Außenänderungen zurückbleibt.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  "property-management": {
    cardTitle: "Immobilienverwaltung",
    cardSummary:
      "Raumklima für Mieter dokumentieren und Lecks früh in Wohn- oder Gewerbeportfolios erkennen.",
    focus:
      "Immobilienverwalter beantworten Komfortbeschwerden mit begrenzter Sicht — ein unentdecktes Leck kann zu Versicherungsfällen über mehrere Einheiten werden, bevor jemand es bemerkt. Portfolioteams brauchen vergleichbare Daten über Gebäude, keine Ad-hoc-Messungen bei Mietereskalation.",
    challenges: [
      "'Zu heiß' oder 'zu stickig' ohne Beleg: Mieterstreitigkeiten ziehen sich hin, weil HVAC-Einstellungen nicht an gemessene Bedingungen in der Einheit geknüpft werden können.",
      "Lecks wandern zwischen Einheiten: Steigleitungen, Boiler und Bäder können Nachbarwohnungen schädigen, bevor die Quelle gefunden wird.",
      "Keller und Technikräume mit Linienrisiko: ein Punktsensor übersieht Wasser entlang Rohre durch einen ganzen Block.",
      "Technikräume reaktiv überwacht: Heizungsräume und Wärmetauscher bekommen erst nach Ausfall Aufmerksamkeit.",
    ],
    solution: [
      "RoomAlyzer Raumklima liefert objektive CO2-, Temperatur-, Feuchte- und TVOC-Daten in Mieterbereichen und löst Komfortbeschwerden mit Nachweis statt Debatte.",
      "RoomAlyzer Wassererkennung sendet SMS- und E-Mail-Alarme von Sensoren unter Spülen, Boilern und Steigleitungen, mit Water Rope für Keller und Technikbereiche und zeitgestempeltem Vorfallprotokoll für Versicherungen. Temperature-Sensor überwacht Technikräume im Portfolio von einem Dashboard.",
    ],
    smarterTogether:
      "RoomAlyzer Raumklima und Wassererkennung reduzieren Mieterfluktuation und Notfalleinsätze, die zwei Kostentreiber, die Immobilienteams am stärksten spüren.",
    closing:
      "Portfolio-Monitoring sollte kein Maßprojekt pro Gebäude bedeuten. RoomAlyzer rollt gebäudeweise über Mobilfunk aus — ohne Mieter-Wi-Fi.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Mieterbereiche",
        body: "Objektive CO2-, Temperatur-, Feuchte- und TVOC-Daten zur Klärung von 'zu heiß' oder 'zu stickig' mit Nachweis.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Water Detector",
        badge: "Leckprävention",
        body: "SMS- und E-Mail-Alarme unter Spülen, Boilern und Steigleitungen, bevor Wasser Nachbareinheiten erreicht.",
        sensorSlugs: ["water-detector"],
      },
      {
        name: "Water Rope",
        badge: "Technik und Keller",
        body: "Linienabdeckung entlang Rohre und Kellerböden in größeren Blöcken, wo ein Punktsensor nicht reicht.",
        sensorSlugs: ["water-rope"],
      },
      {
        name: "Temperature-Sensor",
        badge: "Technikräume",
        body: "Überwacht Heizungsräume, Wärmetauscher und sekundäre HVAC-Zonen im Portfolio.",
        sensorSlugs: ["temperature"],
      },
    ],
  },
  "fm-companies": {
    cardTitle: "FM-Unternehmen",
    cardSummary:
      "Eine messbare, datengetriebene IoT-Schicht auf bestehende Facility-Management-Leistungen legen.",
    focus:
      "FM-Anbieter gewinnen und halten Verträge mit messbaren Ergebnissen — doch Sensor-Rollouts über diverse Kundenstandorte brauchen eine Plattform, die skaliert, sauber white-labelt und Klima, Fläche und Wasser an einem Ort abdeckt. Kunden erwarten Nachweis von Einsparungen und Komfort, keine Folien über Möglichkeiten.",
    challenges: [
      "Jeder Kundenstandort ist anders: Schulen, Büros und öffentliche Gebäude verlangen unterschiedliche Parameter — FM-Teams können keinen separaten Stack pro Vertrag betreiben.",
      "Flächennutzungsbehauptungen brauchen Daten: Konsolidierung, Reinigungspläne und Energierücknahme erfordern Belegungsnachweise, denen Kunden vertrauen.",
      "Leckerkennung als Low-Friction-Upsell: Wasserschaden ist ein Top-Versicherungstreiber, doch traditionelle Systeme sind langsam zu kalkulieren und zu installieren.",
      "Konnektivität ohne Kunden-IT-Projekte: Gast-Wi-Fi und Unternehmens-Firewalls blockieren viele IoT-Rollouts, bevor sie starten.",
    ],
    solution: [
      "RoomAlyzer Raumklima ist der Standard-Rollout: Mini+ und Full+ Sensoren decken CO2, Temperatur, Feuchte und TVOC in einer Einheit ab, mit Dashboards, die FM-Teams pro Vertrag branden können.",
      "RoomAlyzer Space-Management untermauert Nutzungsempfehlungen mit anonymisierten Schreibtisch- und Raumdaten. RoomAlyzer Nutzung und Reinigung richtet den Aufwand auf tatsächlich genutzte Flächen. RoomAlyzer Wassererkennung ergänzt SMS- und E-Mail-Leckalarme zu geringen Grenzkosten. Cloud Connector bringt Daten über Mobilfunk zur Plattform, ohne Kunden-Wi-Fi pro Gebäude.",
    ],
    smarterTogether:
      "RoomAlyzer Raumklima, Space-Management, Nutzung und Reinigung sowie Wassererkennung auf einer Plattform ermöglichen FM-Anbietern Cross-Selling mit einem Installationsbesuch und einer laufenden Datenbeziehung.",
    closing:
      "FM-Margen hängen an schnellem Deployment und nachweisbaren Ergebnissen. RoomAlyzer ist für Multi-Site-Rollouts ohne Gateway-Sprawl oder IT-Tickets pro Gebäude konzipiert.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Raumklima",
        body: "Der Standard-Rollout-Sensor für Büros, Schulen und öffentliche Gebäude, der CO2, Temperatur, Feuchte und TVOC in einer Einheit abdeckt.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion / Desk-Sensor",
        badge: "Flächennutzung",
        body: "Raum- und Schreibtischbelegung, die Konsolidierung, Reinigungspläne und Energierücknahme mit Fakten untermauert.",
        sensorSlugs: ["motion", "desk"],
      },
      {
        name: "Water Detector",
        badge: "Risikominderung",
        body: "Ein günstiges Upsell mit SMS- und E-Mail-Alarmen, das Lecks erkennt, bevor sie zu Notfalleinsätzen und Versicherungsfällen werden.",
        sensorSlugs: ["water-detector"],
      },
      {
        name: "Cloud Connector",
        badge: "Standort-Konnektivität",
        body: "Bringt Sensordaten über Mobilfunk-Uplink zur Plattform — kein Kunden-Wi-Fi, kein IT-Projekt pro Gebäude.",
        sensorSlugs: ["cloud-connector"],
      },
    ],
  },
  "consulting-engineers": {
    cardTitle: "Beratende Ingenieure",
    cardSummary:
      "Temporäre und permanente Messungen für Inbetriebnahme, Audits und Sanierungsberatung.",
    focus:
      "Beratende Ingenieure brauchen belastbare Messdaten für Inbetriebnahmeberichte, Energieaudits und Sanierungsvorschläge — oft in einem kurzen Projektfenster, optional dauerhaft beim Kunden verbleibend. Handmessungen überstehen selten Prüfung, wenn Belegung, Wetter und HVAC-Zyklen eine Rolle spielen.",
    challenges: [
      "Post-Occupancy-Studien ohne kontinuierliche Protokolle: eine Woche Stichproben verpasst, wie Räume über Saisons und Lastmuster reagieren.",
      "Innentrends verwechselt mit Wetter: Berichte ohne Außenreferenz sind in Peer Review oder Kundenfreigabe schwer zu verteidigen.",
      "Problemzonen brauchen gezielte Logger: Kriechkeller und Hülluntersuchungen rechtfertigen nicht immer eine volle Multi-Sensor-Einheit.",
      "Belegungsannahmen in Lüftungsdesign: Zeitpläne und Kopfzahl-Schätzungen brauchen Validierung gegen echte Präsenz.",
    ],
    solution: [
      "RoomAlyzer Raumklima liefert Multi-Parameter-Protokollierung (CO2, Temperatur, Feuchte, TVOC) für Post-Occupancy-Bewertung, Lüftungsverifikation und Raumklimastudien mit exportierbarer Historie für Berichte.",
      "Ein Außen Sensor liefert die Baseline, die seriöse Audits erwarten. Dedizierte Temperature und Humidity-Sensor decken Problemzonen; RoomAlyzer Space-Management validiert Belegungsannahmen hinter Lüftungs- und Heizplänen.",
    ],
    smarterTogether:
      "Außenreferenz, innere Multi-Parameter-Protokollierung und kurzfristige Belegungskartierung geben Ingenieuren eine vollständige Evidenzbasis in einem Deployment.",
    closing:
      "Temporäre Studien und dauerhaftes Monitoring sollten dieselbe Hardware nutzen. RoomAlyzer installiert sich in Minuten und bleibt, wenn der Kunde laufende Überwachung wünscht.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Baseline-Erhebungen",
        body: "Multi-Parameter-Protokollierung (CO2, Temperatur, Feuchte, TVOC) für Post-Occupancy-Bewertung, Lüftungsverifikation und Raumklimastudien.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Außen Sensor",
        badge: "Referenzeinheit",
        body: "Außen-Baseline, damit Innentrends in Berichten vom Wetter getrennt werden — in jedem seriösen Audit erwartet.",
        sensorSlugs: ["outdoor"],
      },
      {
        name: "Temperature / Humidity-Sensor",
        badge: "Gezielte Protokollierung",
        body: "Dedizierte Logger für Problemzonen, Kriechkeller und Hülluntersuchungen, wo eine volle Multi-Sensor-Einheit Overkill ist.",
        sensorSlugs: ["temperature", "humidity"],
      },
      {
        name: "Motion-Sensor",
        badge: "Belegungsstudien",
        body: "Kurzfristige Präsenzkartierung zur Validierung von Lüftungsraten, Heizplänen und Raumprogrammierungsannahmen.",
        sensorSlugs: ["motion"],
      },
    ],
  },
};

const sv: Record<string, IndustryContentOverlay> = {
  offices: {
    cardTitle: "Kontor och arbetsplatser",
    cardSummary:
      "Balansera utnyttjandet av ytor i hybridarbete med medarbetarnas produktivitet och komfort.",
    focus:
      "Moderna kontor måste balansera hybrid närvaro, mötesrumsbehov och inomhusklimat, ofta utan data för hyra, HVAC eller layoutbeslut.",
    challenges: [
      "Ni betalar för skrivbord och våningar som står tomma: hybridarbete har förändrat närvaromönster, men många organisationer dimensionerar fortfarande ytor efter headcount, inte uppmätt användning.",
      "Spökbokningar av mötesrum: rum bokade för tio och använda av två blockerar yta andra behöver, utan objektiv insikt i gapet.",
      "Komfortklagomål ni inte kan verifiera: 'tung luft' eller 'för kallt' utan slut, eftersom ventilation och värme följer fasta scheman, inte faktisk beläggning.",
      "HVAC i blindo: system värmer och ventilerar tomma zoner medan de underpresterar när rum är fulla, energislöseri utan bättre välmående.",
    ],
    solution: [
      "RoomAlyzer Space management ger anonymiserad skrivbords- och rumsbeläggning i realtid och över tid, så ni kan rätt dimensionera våningar, se bokning kontra faktisk användning och frigöra spökbokade mötesrum (inklusive via Google Calendar, Microsoft 365 eller Pronestor). Kontexten är tydlig: UK Workspace Survey visar att kontorsnärvaro sjönk från 83 % av arbetstiden 2016 till 46 % 2023, en minskning med 37 procentenheter på sju år.",
      "RoomAlyzer Inomhusklimat tillför kontinuerlig övervakning av CO2, temperatur, fukt och TVOC så eftermiddagströtthet och ventilationsklagomål besvaras med fakta, inte intryck. Trådlösa sensorer installeras på minuter utan Wi-Fi-projekt, och samma plattform visar ytanvändning och luftkvalitet sida vid sida.",
    ],
    smarterTogether:
      "Kombinerat låter RoomAlyzer Space management och Inomhusklimat er matcha ventilation och värme till de personer som faktiskt är närvarande och minska energislöseri utan att offra komfort på hektiska dagar.",
    closing:
      "Kontorssensorutrullningar är normalt dyra och störande. RoomAlyzer är igång på minuter, anpassar sig när arbetsplatsen förändras och kostar en bråkdel av det vanliga priset.",
  },
  churches: {
    cardTitle: "Kyrkor och kulturarv",
    cardSummary:
      "Skydda historiska interiörer med exakt fukt- och temperaturkontroll i stora, ojämnt uppvärmda byggnader.",
    focus:
      "Kyrkor kombinerar ovärderliga interiörer med byggnader som aldrig designades för modern uppvärmning — stora volymer, ojämna temperaturer och säsongsbetonade fuktvariationer hotar orglar, träarbeten och fresker.",
    challenges: [
      "Osynlig, gradvis skada: ogynnsam fukt och temperatur skadar oersättliga inventarier långt innan synliga tecken.",
      "Ojämn uppvärmning i stora volymer: långhus, kor och sakristior beter sig olika — handhållna mätningar är opålitliga.",
      "Utomhusväder driver inomhusvariationer: massiva murverksbyggnader reagerar långsamt — inomhusdata utan utomhusreferens är svåra att tolka.",
      "Bevaring versus energiräkning: att värma en historisk byggnad för att skydda innehållet är dyrt — utan data hittar ni inte balansen.",
    ],
    solution: [
      "RoomAlyzer Bevarande övervakar temperatur och fukt kontinuerligt (±0,1 °C · ±1 % RH) och omvandlar avläsningar till tydlig dokumentation av de exakta förhållanden era interiörer hålls i. Trådlösa Mini+ och Full+ sensorer är diskreta nog för heliga rum och precisa nog för konservatorer, med larm när trösklar överskrids.",
      "En utomhussensor separerar inomhustrender från vädersvängningar, medan EN 15757-anpassad rapportering ger stift, försäkringsbolag och myndigheter den dokumentation de förväntar sig. En plattform kan täcka varje kyrka i ett stift med rollbaserad åtkomst för kyrkvärdar, präster och rådgivare.",
    ],
    smarterTogether:
      "RoomAlyzer Bevarande ger konservatorer som skyddar inventariet och driftteam som driver byggnaden samma dataset, en balans man sällan hittar i ett verktyg.",
    closing:
      "Klimamätning i kyrkor är normalt dyr och besvärlig att installera. RoomAlyzer är redo på minuter, flexibel nog för vilken byggnad som helst och kostar en bråkdel av det förväntade.",
  },
  "museums-galleries": {
    cardTitle: "Museer och kultur",
    cardSummary:
      "Minska risk och bevara känsliga samlingar med kontinuerlig klimatövervakning enligt bevarandestandarder.",
    focus:
      "Museer och gallerier måste skydda låneföremål, lagersamlingar och utställningsrum, ofta med dokumentation för försäkringsbolag, långivare och bidragsgivare, samtidigt som besöksdrivna fuktspikar hanteras.",
    challenges: [
      "Låne- och lagerkrav: långivare förväntar sig dokumenterade, stabila förhållanden — men off-display-lager får ofta mindre övervakning än huvudgallerierna.",
      "Besöksdrivna klimatspikar: grupper och evenemang driver fukt och temperatur snabbt upp — utan närvarodata saknas orsak och verkan.",
      "Försäkrings- och ansökningsdokumentation: vid skador behöver ni manipulationssäkra register — inte en mapp med manuella avläsningar.",
      "Trådlös installation i känsliga rum: kablar genom historiskt tyg eller fulla gallerier är sällan acceptabelt.",
    ],
    solution: [
      "RoomAlyzer Bevarande levererar kontinuerlig trådlös temperatur- och fuktloggning i EN 15757-band i gallerier, lager och transportlådor. Kuratorer får larm innan förhållanden driver, och revisionsklara PDF-rapporter för försäkring och låneavtal.",
      "Rörelsesensorer kartlägger besökstrafik så fuktspikar kan kopplas till öppettider och kapacitet planeras därefter. En utomhussensor låter HVAC reagera på verkligt väder i stället för gissningar och skyddar samlingar medan energin hålls nere.",
    ],
    closing:
      "Museumsnivå klimatövervakning är normalt dyr och långsam att rulla ut. RoomAlyzer installeras på minuter, skalar över alla rum och kostar en bråkdel av traditionella system.",
  },
  municipalities: {
    cardTitle: "Skolor och kommuner",
    cardSummary:
      "Prioritera elevers hälsa, koncentration och energiåterställning i skolor, förvaltning och kulturbyggnader.",
    focus:
      "Kommuner driver dussintals byggnadstyper (skolor, förskolor, stadshus och kulturhus) och behöver en plattformsöversikt plus bevis att inomhusklimat och energi faktiskt matchar hur byggnaderna används.",
    challenges: [
      "CO2 och koncentration i klassrum: elever tappar fokus när ventilation halkar efter beläggning — men de flesta skolor förlitar sig fortfarande på subjektiva 'hur känns luften?'-kontroller.",
      "Portföljskala: utrullning över alla skolor och förvaltningsbyggnader känns som ett flerårigt IT-projekt — om sensorer inte är äkta plug-and-play.",
      "Energiåterställning utan bevis: värme och ventilation körs efter scheman eftersom ingen litar på att hallar och klassrum faktiskt är tomma efter skoldagens slut.",
      "Svar till föräldrar och lärare: när luftkvalitet ifrågasätts behöver kommunen dokumenterad data — inte en engångsmätning.",
    ],
    solution: [
      "RoomAlyzer Inomhusklimat sätter CO2-, temperatur-, fukt- och TVOC-sensorer i varje klassrum och gemensamt utrymme med larm innan nivåer passerar riktlinjer och instrumentpaneler som vaktmästare faktiskt använder. Varde kommun rullade ut 1 400 sensorer på 36 skolor på nio veckor; genomsnittlig CO2 över 1 200 ppm under lektionstid sjönk från 23 % till 6 % på tio månader.",
      "RoomAlyzer Space management kartlägger verklig beläggning i idrottshallar, aula och gemensamma lokaler så värme och ventilation kan dra tillbaka när rum är tomma. En kommunal instrumentpanel samlar alla byggnader (skolor, förvaltning och kultur) utan separat system per plats.",
    ],
    smarterTogether:
      "RoomAlyzer Inomhusklimat och Space management tillsammans låter kommuner finjustera ventilation efter faktisk headcount och minska energi i byggnader som står tomma utanför skoltid.",
    closing:
      "Kommunala sensorprogram är normalt dyra och långsamma. RoomAlyzer installeras på minuter per rum, kräver inget Wi-Fi per byggnad och skalar från en skola till en hel kommun.",
  },
  schools: {
    cardTitle: "Skolor",
    cardSummary:
      "Dokumentera CO2, temperatur och fukt i varje klassrum för att skydda elevers fokus och hälsa.",
    focus:
      "Skolor behöver objektiva inomhusklimatdata i varje lärmiljö — inte bara för att uppfylla riktlinjer, utan för att bevisa att ventilation och värme faktiskt stödjer koncentration när rum är fulla. Lärare och vaktmästare fattar dagliga ventilationsbeslut utan en gemensam bild av CO2, fukt eller om rum faktiskt används efter skoltid.",
    challenges: [
      "CO2 över 1 000 ppm i fulla klassrum: forskning kopplar förhöjt CO2 till minskad koncentration — ändå reagerar de flesta skolor först när någon klagar.",
      "Ventilation efter vana, inte data: rutiner med fönstervädring och mekaniska system speglar sällan faktisk beläggning eller utomhusförhållanden.",
      "Energi spenderad på tomma byggnader: idrottshallar, aula och flyglar värms över natten eftersom scheman antar att rum används.",
      "Ingen spårbarhet för föräldrar eller inspektörer: när luftkvalitet ifrågasätts behöver skolor kontinuerliga loggar — inte ett konsultbesök en gång om året.",
    ],
    solution: [
      "RoomAlyzer Inomhusklimat ger live CO2-, temperatur-, fukt- och TVOC-data i varje klassrum med larm innan riktlinjer överskrids, så lärare får en tydlig signal att vädra och ledningen bevis att förhållanden hanteras.",
      "RoomAlyzer Space management kartlägger verklig användning i hallar och specialrum så värme och ventilation kan dra tillbaka när byggnader är tomma. En outdoor-sensor ger en väderreferens så beslut om naturlig ventilation matchar förhållanden utomhus.",
    ],
    smarterTogether:
      "RoomAlyzer Inomhusklimat och Space management tillsammans visar inte bara när luftkvaliteten sjunker, utan när energi slösas på att värma rum ingen använder.",
    closing:
      "Klassrumsövervakning behöver inte innebära kablar, gateways eller månaders planering. RoomAlyzer-sensorer installeras på minuter och skalar från en skola till ett helt skolområde.",
    sensorRecommendations: [
      {
        name: "CO2-sensor",
        badge: "Klassrumsbaslinje",
        body: "Live CO2-nivåer med larm innan klassrum passerar riktlinjen på 1 000 ppm — det snabbaste sättet att veta när det är dags att vädra.",
        sensorSlugs: ["co2"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Hela bilden",
        body: "Lägger till temperatur, fukt och TVOC till CO2-bilden i en diskret enhet per klassrum eller specialrum.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Mini+ PIR / Motion-sensor",
        badge: "Besparingar utanför skoltid",
        body: "Kartlägger verklig beläggning i klassrum, idrottshallar och aula så värme och ventilation kan dra tillbaka när rum är tomma.",
        sensorSlugs: ["mini-plus-pir", "motion"],
      },
      {
        name: "Outdoor-sensor",
        badge: "Smartare vädring",
        body: "Ger lärare och vaktmästare en utomhusreferens så fönstervädringsrutiner speglar faktiska väderförhållanden.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  hospitals: {
    cardTitle: "Sjukhus",
    cardSummary:
      "Övervaka avdelningar, lager och laboratorier med revisionsklara klimatdata där varje grad räknas.",
    focus:
      "Sjukhus måste balansera patientkomfort, infektionskontroll och strikta lagringsförhållanden — ofta över avdelningar, apotek, laboratorier och kylrum som var och en har egna trösklar. Ett enda avvikelse i ett apotekskylskåp eller en ihållande torr avdelning kan få kliniska, regulatoriska och ryktesmässiga konsekvenser.",
    challenges: [
      "Smala temperaturband utan kontinuerligt bevis: medicinlager, blodbanker och kylrum behöver revisionsklara loggar — clipboard-rundor är luckor som väntar på att bli incidenter.",
      "Tvister om luftkvalitet på avdelningar: patienter och personal rapporterar tung luft eller torrhet, men fastighetsteam saknar data på rumsnivå för att finjustera ventilation.",
      "Fukt som påverkar både patienter och utrustning: för torr eller för fuktig luft i behandlingsområden har kliniska och tekniska följdeffekter.",
      "Vatteninträngning nära kritiska zoner: maskinrum och servicekanaler kan översvämma kliniska eller elektriska områden innan någon märker det.",
    ],
    solution: [
      "RoomAlyzer Inomhusklimat övervakar CO2, temperatur, fukt och TVOC i patientnära områden med kontinuerlig historik, så luftkvalitetsdiskussioner bygger på data, inte intryck.",
      "Dedikerade temperature-sensor och humidity-sensor täcker apotek, laboratorier och kyllager med larm innan lager är i fara. RoomAlyzer Vattendetektering skickar SMS- och e-postlarm från maskin- och serviceområden med tidsstämplad incidentlogg, innan en läcka når kliniska zoner.",
    ],
    smarterTogether:
      "RoomAlyzer Inomhusklimat och Vattendetektering på en plattform ger fastighetsteam en samlad bild av komfort, efterlevnad och infrastrukturrisk över sjukhusets lokaler.",
    closing:
      "Sjukhusfastigheter behöver pålitlig, lågstörande övervakning. RoomAlyzer installeras utan att dra kablar genom kliniska områden och håller revisionsloggar redo när inspektörer frågar.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Avdelningar och kliniker",
        body: "Kontinuerlig övervakning av CO2, temperatur, fukt och TVOC i patientnära områden för att dokumentera luftkvalitet och komfort.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature-sensor",
        badge: "Kritiskt lager",
        body: "Dedikerade loggare för medicinskåp, blodbanker och kylrum där smala temperaturband kräver bevis på begäran.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Humidity-sensor",
        badge: "Infektionskontroll",
        body: "Spårar relativ fukt på avdelningar och i behandlingsrum där torr eller fuktig luft påverkar både patienter och utrustning.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Water Detector",
        badge: "Tidig varning",
        body: "SMS- och e-postlarm i maskinrum, schakt och serviceområden innan en läcka når kliniska eller elektriska zoner.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  "elderly-care": {
    cardTitle: "Äldreomsorg",
    cardSummary:
      "Stabilt inomhusklimat och enkla serviceanrop som gör den dagliga omsorgen tryggare och lugnare.",
    focus:
      "Vårdhem och omsorgsboenden betjänar sårbara boende dygnet runt — stabil temperatur och fukt minskar obehag och hälsorisker, medan personal behöver snabba sätt att reagera när något kräver uppmärksamhet. Familjer förväntar sig lugna, bekväma rum; operatörer behöver tidig varning när förhållanden avviker eller vatten upptäcks.",
    challenges: [
      "Långsam reaktion på komfortproblem: boende kanske inte rapporterar att de är för varma eller kalla förrän problem pågått i timmar.",
      "Kök, tvätterier och maskinrum som kör varmt: sekundära zoner driver ofta utanför det intervall som övervakas i boenderum.",
      "Serviceanrop som kräver att hitta en telefon: personal slösar tid på att vidarebefordra enkla förfrågningar från toaletter och matsalar.",
      "Läckor i badrum och kök: fukt sprider sig till boendeutrymmen innan en nattrunda upptäcker det.",
    ],
    solution: [
      "RoomAlyzer Inomhusklimat håller temperatur, fukt, CO2 och TVOC stabila i gemensamma utrymmen och boenderum med larm när förhållanden rör sig utanför överenskomna band.",
      "RoomAlyzer Tryckknappar ger serviceanrop med ett tryck från toaletter och matsalar, vidarebefordrade via e-post eller SMS innan problem blir klagomål. temperature-sensor tillför precision i kök och tvätterier; RoomAlyzer Vattendetektering varnar personal i våtutrymmen och maskinområden tidigt.",
    ],
    smarterTogether:
      "RoomAlyzer Inomhusklimat och Tryckknappar på en plattform hjälper personal prioritera både komfort och svarstid utan att lägga till komplexitet i dagliga rundor.",
    closing:
      "Vårdmiljöer behöver diskret, pålitlig övervakning som personalen litar på. RoomAlyzer installeras snabbt, undviker Wi-Fi-beroende och skalar över flyglar och platser.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Boendekomfort",
        body: "Övervakar CO2, temperatur, fukt och TVOC i gemensamma utrymmen och boenderum för att hålla förhållanden stabila dag och natt.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature-sensor",
        badge: "Spotkontrollzoner",
        body: "Användbar i tvätterier, kök och dåligt isolerade flyglar där en dedikerad loggare tillför precision.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Touch-sensor",
        badge: "Personal och boende",
        body: "Serviceanrop med ett tryck från toaletter, matsalar eller boenderum — inga telefoner, ingen jakt på rätt anknytning.",
        sensorSlugs: ["touch"],
      },
      {
        name: "Water Detector",
        badge: "Skydda byggnaden",
        body: "SMS- och e-postlarm i badrum, kök och maskinområden innan fukt sprider sig till boendeutrymmen.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  retail: {
    cardTitle: "Detaljhandel",
    cardSummary:
      "Övervaka butikskomfort, kylkedjeutrustning och kundflödesmönster i enskilda butiker eller kedjor.",
    focus:
      "Detaljhandel balanserar shopparkomfort, medarbetarvälmående och utrustningsdrift — kylskåp som tyst misslyckas, butiker som överhettas på hektiska lördagar och energi spenderad på att värma tomma våningar efter stängning. Kedjeoperatörer behöver jämförbar data över platser, inte butikschefer som gissar utifrån termostater ensamma.",
    challenges: [
      "Kylkedjefel upptäckta för sent: displykyl och bakrums-kylskåp kan driva utanför intervallet över natten utan att någon vet det förrän varor är förlorade.",
      "Butikskomfort versus energi: långa öppettider innebär att HVAC kör hårt — men utan beläggningsdata kan den inte följa verkligt kundflöde.",
      "Döda zoner och rusningstid: samma planlösning känns olika timme för timme och säsong för säsong, men klimatstyrning anpassar sig sällan.",
      "Säkerhet efter stängning utan rundgångar: lastkajer och innert dörrar lämnade öppna slösar energi och skapar risk.",
    ],
    solution: [
      "temperature-sensor levererar kontinuerlig loggning och larm för kylskåp, frysar och displykyl med historik redo för livsmedelssäkerhet och försäkringsgranskningar.",
      "RoomAlyzer Inomhusklimat spårar butiksgolvets CO2, temperatur, fukt och TVOC så komfort och energi kan balanseras över långa öppettider. motion-sensor kartlägger kundflöde; RoomAlyzer Skåp och dörrar bekräftar att dörrar och kajer är stängda när butiken stänger, utan nattliga rundgångar.",
    ],
    smarterTogether:
      "Kundflöde och inomhusklimatdata visar var ventilation behövs under rusningstid och var det kan skäras ned när zoner är tomma.",
    closing:
      "Detaljhandel med flera platser behöver övervakning som rullas ut snabbt och jämförs konsekvent. RoomAlyzer skalar över butiker utan ett separat IT-projekt per plats.",
    sensorRecommendations: [
      {
        name: "Temperature-sensor",
        badge: "Kylkedja",
        body: "Kontinuerlig övervakning av kylskåp, frysar och displykyl med larm innan varor går förlorade.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Butiksklimat",
        body: "Spårar CO2, temperatur, fukt och TVOC på försäljningsgolvet för att balansera komfort med energianvändning över långa öppettider.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion-sensor",
        badge: "Kundflödesmönster",
        body: "Kartlägger närvaro på rumsnivå för att förstå rusningstid, döda zoner och var klimatstyrning bör följa faktisk trafik.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Open/Close-sensor",
        badge: "Säkerhet efter stängning",
        body: "Bekräftar att dörrar, lastkajer och skåp är stängda när butiken stänger — utan nattliga rundgångar.",
        sensorSlugs: ["open-close"],
      },
    ],
  },
  hotels: {
    cardTitle: "Hotell",
    cardSummary:
      "Beläggningsstyrt klimat och service i gästrum, möteslokaler och allmänna utrymmen.",
    focus:
      "Hotell behöver gästkomfort utan slöseri — rum uppvärmda för uteblivna gäster, konferensvåningar ventilerade för inställda bokningar och städning utskickad bara där det faktiskt behövs. Recensioner och återbokningar hänger på lobbyer och konferensrum som känns fräscha, men bakom kulisserna körs områden ofta efter fasta scheman.",
    challenges: [
      "Gästrum konditionerade för tomma nätter: HVAC kör för uteblivna gäster och tidiga avresor eftersom PMS inte berättar för maskinrummet vem som faktiskt är i byggnaden.",
      "CO2-toppar i konferensrum: halvdagsevent kan pressa möteslokaler förbi komfortgränser innan personal märker det.",
      "Energiblinda fläckar bakom kulisserna: tvätt, kök och personalutrymmen ventileras och värms efter timers utan koppling till verklig användning.",
      "Långsamma gästfeedback-loopar: problem på toaletter eller i receptionen dyker upp på recensionssajter innan driften hör om dem.",
    ],
    solution: [
      "Mini+ PIR sensorer kombinerar klimat och beläggning i gästrum, idealiskt för setback-strategier när rum är tomma utan att kompromissa med komfort vid ankomst.",
      "RoomAlyzer Inomhusklimat övervakar lobbyer, restauranger och konferensrum där luftkvalitet driver gästupplevelsen. RoomAlyzer Användning och städning anpassar städning efter faktisk rumsanvändning; RoomAlyzer Tryckknappar ger omedelbar servicefeedback på toaletter och i reception innan problem når recensionssajter.",
    ],
    smarterTogether:
      "Beläggning på rumsnivå, inomhusklimat och efterfrågestyrd städning låter hotell trimma energi i tomma rum samtidigt som ventilation och städning prioriteras där gäster samlas.",
    closing:
      "Hotellportföljer behöver övervakning som respekterar gästintegritet, installeras utan störning och fungerar utan gäst-Wi-Fi. RoomAlyzer passar den profilen över fastigheter.",
    sensorRecommendations: [
      {
        name: "Mini+ PIR",
        badge: "Gästrum",
        body: "Kombinerar klimatövervakning med beläggning i en enhet — idealiskt för setback-strategier när rum är tomma.",
        sensorSlugs: ["mini-plus-pir"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Mötes- och allmänna utrymmen",
        body: "Övervakar CO2, temperatur, fukt och TVOC i lobbyer, restauranger och konferensrum där komfort driver recensioner.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion-sensor",
        badge: "Bakom kulisserna",
        body: "Spårar användning i personalutrymmen, tvätt och möteslokaler för att anpassa ventilation och städning till verklig aktivitet.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Touch-sensor",
        badge: "Gästfeedback",
        body: "Enkla nöjdhets- eller serviceknappar på toaletter och i reception för omedelbar respons när något behöver åtgärdas.",
        sensorSlugs: ["touch"],
      },
    ],
  },
  "warehouses-logistics": {
    cardTitle: "Lager och logistik",
    cardSummary:
      "Skydda lager med temperatur-, fukt- och vattendetektion över lager- och lastområden.",
    focus:
      "Lager och logistikplatser förvarar varor som förstörs, korroderar eller vrider sig när förhållanden avviker, ofta över stora golvytor, kylrum och lastkajer där en enda oupptäckt läcka kan stoppa driften. Efterlevnad och försäkring förväntar sig allt oftare kontinuerliga loggar, inte stickprovskontroll på clipboard.",
    challenges: [
      "Kylrum som driver utanför intervallet: kyld lagring kan misslyckas tyst tills produkt kasseras.",
      "Fukt som skadar lager: kartong, elektronik och hygroskopiska varor behöver stabil RH över stora, ojämnt konditionerade ytor.",
      "Läckor längs långa sträckor: rör, golvlister och lastkajer behöver linjetäckning som en enskild punktsensor inte kan ge.",
      "Maskinutrustning och kondensbrickor: lokala vattenkällor sprider sig snabbt över öppna golvytor.",
    ],
    solution: [
      "temperature-sensor ger revisionsklar loggning för kylrum, frysar och känsliga varor med larm innan trösklar överskrids.",
      "humidity-sensor spårar RH i lagerzoner där material är fuktkänsliga. RoomAlyzer Vattendetektering täcker linjär risk med water rope längs rör och kajgolv och punktsensorer under handfat, brickor och maskinutrustning, med SMS- och e-postlarm och tidsstämplad incidentlogg för försäkring.",
    ],
    smarterTogether:
      "Temperatur, fukt och RoomAlyzer Vattendetektering på en plattform ger drift och QA en instrumentpanel för lagerskydd och incidenthantering.",
    closing:
      "Industriella anläggningar behöver robust, lågunderhållsövervakning utan att kabela kilometer av golv. RoomAlyzer driftsätts snabbt och skalar med anläggningen.",
    sensorRecommendations: [
      {
        name: "Temperature-sensor",
        badge: "Kyllagring",
        body: "Pålitlig loggning för kylrum, frysar och temperaturkänsliga varor med revisionsklar historik.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Humidity-sensor",
        badge: "Lagerskydd",
        body: "Spårar relativ fukt i lagerzoner där kartong, elektronik eller hygroskopiska material behöver stabila förhållanden.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Water Rope",
        badge: "Linjetäckning",
        body: "Sensorkabel längs rör, golvlister och lastkajgolv där en punktsensor inte räcker.",
        sensorSlugs: ["water-rope"],
      },
      {
        name: "Water Detector",
        badge: "Punktskydd",
        body: "SMS- och e-postlarm under handfat, kondensbrickor och maskinutrustning innan vatten sprider sig över golvet.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  "archives-libraries": {
    cardTitle: "Arkiv och bibliotek",
    cardSummary:
      "Kontinuerlig klimatloggning och larm för sällsynta böcker, manuskript och pappersarkiv.",
    focus:
      "Arkiv och bibliotek förvarar papperssamlingar som försämras när temperatur och fukt svänger — ofta över läsesalar, magasin och kylförvaring som var och en behöver dokumenterade, stabila förhållanden. Långivare och bidragsgivare förväntar sig bevis; konservatorer behöver tidig varning innan bindningar, film eller manuskript är i fara.",
    challenges: [
      "RH-svängningar i magasinområden: relativ fukt är den första försvarslinjen för papper — ändå kontrolleras många lager högst månadsvis.",
      "Läsesalar versus lager: komfort för besökare får inte kompromissa samlingens förhållanden i närheten.",
      "Kylförvaring för film och fotografier: samlingar under rumstemperatur behöver dedikerad, kontinuerlig loggning.",
      "HVAC reagerar på vädergissning: fuktning och avfuktning utan utomhusreferens över- eller underskjuter.",
    ],
    solution: [
      "RoomAlyzer Bevarande levererar kontinuerlig RH-loggning för magasin, manuskriptlager och sällsynta bokrum med larm innan förhållanden lämnar bevarandeband.",
      "RoomAlyzer Inomhusklimat övervakar läsesalar diskret. temperature-sensor täcker kylförvaring; en outdoor-sensor separerar inomhustrender från väder så HVAC svarar på verkligt behov.",
    ],
    smarterTogether:
      "Kontinuerlig loggning över offentliga och lagerzoner ger konservatorer och driftteam samma dataset för bevarandebeslut och daglig drift.",
    closing:
      "Arkivnivå klimatövervakning bör inte kräva invasiv installation. RoomAlyzer är trådlöst, diskret och producerar rapporter redo för långivare och försäkringsbolag.",
    sensorRecommendations: [
      {
        name: "Humidity-sensor",
        badge: "Pappersbevaring",
        body: "Konservatorisk relativ-fukt-loggning, den första försvarslinjen för bindningar, manuskript och historiska magasin.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Läsesalar",
        body: "Diskret klimatövervakning där personal och besökare behöver komfort utan att kompromissa samlingens förhållanden i närheten.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature-sensor",
        badge: "Kylförvaring",
        body: "Dedikerade loggare för film, fotografiska och specialsamlingar förvarade under rumstemperatur.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Outdoor-sensor",
        badge: "HVAC-referens",
        body: "Separerar inomhustrender från utomhusväder så fuktning och avfuktning svarar på verkligt behov, inte gissning.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  "manors-castles": {
    cardTitle: "Herrgårdar och slott",
    cardSummary:
      "Övervaka fukt och temperatur i ouppvärmda salar, källare och lager utan att skada ytor.",
    focus:
      "Herrgårdar och slott kombinerar ovärderliga interiörer med byggnader som aldrig designades för modern uppvärmning — sporadisk användning, turisttoppar och ouppvärmda flyglar stressar trä, textilier och ytor. Massivt murverk bromsar den inomhus reaktion på väder. Inomhusavläsningar utan utomhusbaslinje är lätta att misstolka.",
    challenges: [
      "Säsongsbetonad RH som skadar paneler och förgyllning: salar och trappor svänger med besökssäsonger och uppvärmningsmönster.",
      "Eventdrivna värme- och fuktbelastningar: turistgrupper och bröllop pressar förhållanden snabbare än HVAC kan kompensera.",
      "Trådlös övervakning utan historisk skada: kablar genom panelerade rum och gobelänger är sällan acceptabla.",
      "Ouppvärmda flyglar som driver okontrollerat: avlägsna rum kan försämras medan personal fokuserar på huvudbesöksrutter.",
    ],
    solution: [
      "RoomAlyzer Bevarande spårar RH i salar, trappor och panelerade rum med larm innan säsongsbetonade svängningar orsakar sprickor, vridning eller förlust av förgyllning.",
      "Mini+ och Full+ sensorer loggar trådlöst i utställningsrum öppna för besökare. motion-sensor korrelerar fukt- och värmebelastningar med turscheman; en outdoor-sensor är essentiell där inomhusklimat släpar timmar efter vädret.",
    ],
    smarterTogether:
      "Besökarnärvaro och klimatdata förklarar plötsliga fuktökningar, så team kan vädra eller justera värme innan interiörer skadas.",
    closing:
      "Kulturarvshus behöver övervakning som respekterar byggnadsstoff och installeras utan störning. RoomAlyzer passar diskret in i rum besökare aldrig märker.",
    sensorRecommendations: [
      {
        name: "Humidity-sensor",
        badge: "Interiörskydd",
        body: "Konservatorisk RH-loggning i salar, trappor och panelerade rum där säsongsbetonade svängningar orsakar sprickor, vridning och förlust av förgyllning.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Utställningsrum",
        body: "Trådlös temperatur- och fuktloggning i rum öppna för besökare utan att dra kablar genom historiskt tyg.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion-sensor",
        badge: "Besökarpåverkan",
        body: "Kartlägger närvaro så driftteam kan korrelera fukt- och värmebelastningar med turistgrupper och eventscheman.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Outdoor-sensor",
        badge: "Väderbaslinje",
        body: "Essentiell referens för massiva murverksbyggnader där inomhusklimat släpar timmar efter utomhusförändringar.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  "property-management": {
    cardTitle: "Fastighetsförvaltning",
    cardSummary:
      "Dokumentera inomhusklimat för hyresgäster och fånga läckor tidigt över en bostads- eller kommersiell portfölj.",
    focus:
      "Fastighetsförvaltare besvarar komfortklagomål med begränsad insyn — och en enda oupptäckt läcka kan bli försäkringsärenden över flera enheter innan någon märker det. Portföljteam behöver jämförbar data över byggnader, inte ad-hoc-avläsningar när en hyresgäst eskalerar.",
    challenges: [
      "'För varmt' eller 'för tung luft' utan bevis: hyresgästtvister drar ut eftersom HVAC-inställningar inte kan kopplas till uppmätta förhållanden i enheten.",
      "Läckor som rör sig mellan enheter: stigledningar, pannor och badrum kan skada grannlägenheter innan källan hittas.",
      "Källare och maskinrum med linjerisk: en punktsensor missar vatten som följer rör genom en hel block.",
      "Tekniska rum övervakade reaktivt: pannrum och värmeväxlare får uppmärksamhet först efter ett fel.",
    ],
    solution: [
      "RoomAlyzer Inomhusklimat levererar objektiva CO2-, temperatur-, fukt- och TVOC-data i hyresgästutrymmen och löser komfortklagomål med bevis i stället för debatt.",
      "RoomAlyzer Vattendetektering skickar SMS- och e-postlarm från sensorer under handfat, pannor och stigledningar, med water rope för källare och maskinområden och tidsstämplad incidentlogg för försäkring. temperature-sensor övervakar tekniska rum över portföljen från en instrumentpanel.",
    ],
    smarterTogether:
      "RoomAlyzer Inomhusklimat och Vattendetektering minskar både hyresgästomsättning och akuta utryckningar, de två kostnadsdrivarna fastighetsteam känner mest.",
    closing:
      "Portföljövervakning bör inte innebära ett skräddarsytt projekt per byggnad. RoomAlyzer rullas ut byggnad för byggnad på cellulär uppkoppling utan hyresgäst-Wi-Fi.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Hyresgästutrymmen",
        body: "Objektiva CO2-, temperatur-, fukt- och TVOC-data för att lösa 'för varmt' eller 'för tung luft'-klagomål med bevis.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Water Detector",
        badge: "Läckageförebyggande",
        body: "SMS- och e-postlarm under handfat, pannor och stigledningar innan vatten når grannlägenheter.",
        sensorSlugs: ["water-detector"],
      },
      {
        name: "Water Rope",
        badge: "Maskinrum och källare",
        body: "Linjetäckning längs rör och källargolv i större block där en punktsensor inte räcker.",
        sensorSlugs: ["water-rope"],
      },
      {
        name: "Temperature-sensor",
        badge: "Tekniska rum",
        body: "Övervakar pannrum, värmeväxlare och sekundära HVAC-zoner över portföljen.",
        sensorSlugs: ["temperature"],
      },
    ],
  },
  "fm-companies": {
    cardTitle: "FM-företag",
    cardSummary:
      "Lägg till ett mätbart, datadrivet IoT-lager ovanpå era befintliga facility management-tjänster.",
    focus:
      "FM-leverantörer vinner och behåller kontrakt med mätbara resultat — men sensorutrullning över olika kundplatser kräver en plattform som skalar, white-labelar rent och täcker klimat, yta och vatten på ett ställe. Kunder förväntar sig bevis på besparingar och komfort, inte presentationer om vad som kanske är möjligt.",
    challenges: [
      "Varje kundplats är annorlunda: skolor, kontor och offentliga byggnader begär olika parametrar — men FM-team kan inte köra en separat stack per kontrakt.",
      "Påståenden om ytanvändning behöver data: konsolidering, städscheman och energiåterställning kräver beläggningsbevis kunder litar på.",
      "Läckagedetektering som låg-friktion-upsell: vattenskada är en topp försäkringsdrivare, men traditionella system är långsamma att offerera och installera.",
      "Uppkoppling utan kund-IT-projekt: gäst-Wi-Fi och företagsbrandväggar blockerar många IoT-utrullningar innan de startar.",
    ],
    solution: [
      "RoomAlyzer Inomhusklimat är standardutrullningen: Mini+ och Full+ sensorer täcker CO2, temperatur, fukt och TVOC i en enhet, med instrumentpaneler FM-team kan branda per kontrakt.",
      "RoomAlyzer Space management stödjer utnyttjningsrekommendationer med anonymiserade skrivbords- och rumsdata. RoomAlyzer Användning och städning riktar insatsen mot utrymmen som faktiskt används. RoomAlyzer Vattendetektering tillför SMS- och e-postläckagelarm till låg marginalkostnad. Cloud Connector för data till plattformen över cellulär, utan kund-Wi-Fi per byggnad.",
    ],
    smarterTogether:
      "RoomAlyzer Inomhusklimat, Space management, Användning och städning samt Vattendetektering på en plattform låter FM-leverantörer merförsälja tjänster med ett installationsbesök och ett pågående dataförhållande.",
    closing:
      "FM-marginaler beror på snabb driftsättning och påvisbara resultat. RoomAlyzer är designad för multi-site-utrullningar utan gateway-spridning eller IT-ärenden per byggnad.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Inomhusklimat",
        body: "Standardutrullningssensorn för kontor, skolor och offentliga byggnader som täcker CO2, temperatur, fukt och TVOC i en enhet.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion / Desk-sensor",
        badge: "Ytanvändning",
        body: "Beläggning på rums- och skrivbordsnivå som stödjer konsolidering, städscheman och energiåterställning med fakta.",
        sensorSlugs: ["motion", "desk"],
      },
      {
        name: "Water Detector",
        badge: "Riskreducering",
        body: "Ett lågpris-upsell med SMS- och e-postlarm som fångar läckor innan de blir akuta utryckningar och försäkringshändelser.",
        sensorSlugs: ["water-detector"],
      },
      {
        name: "Cloud Connector",
        badge: "Platsuppkoppling",
        body: "För sensordata till plattformen över cellulär uppkoppling — inget kund-Wi-Fi, inget IT-projekt per byggnad.",
        sensorSlugs: ["cloud-connector"],
      },
    ],
  },
  "consulting-engineers": {
    cardTitle: "Konsultingingenjörer",
    cardSummary:
      "Tillfälliga och permanenta mätningar som stödjer commissioning, revisioner och renoveringsrådgivning.",
    focus:
      "Konsultingingenjörer behöver försvarbara mätdata för commissioning-rapporter, energirevisioner och renoveringsförslag — ofta under ett kort projektfönster, sedan eventuellt kvar hos kunden. Handhållna stickprovsmätningar överlever sällan granskning när beläggning, väder och HVAC-cykler spelar in.",
    challenges: [
      "Post-occupancy-studier utan kontinuerliga loggar: en vecka med stickprov missar hur rum beter sig över säsonger och belastningsmönster.",
      "Inomhustrender förväxlas med väder: rapporter utan utomhusreferens är svåra att försvara i peer review eller kundgodkännande.",
      "Problemzoner som behöver riktade loggare: kryputrymmen och klimatskalundersökningar motiverar inte alltid en full multi-sensorenhet.",
      "Beläggningsantaganden inbyggda i ventilationsdesign: scheman och headcount-uppskattningar behöver validering mot verklig närvaro.",
    ],
    solution: [
      "RoomAlyzer Inomhusklimat ger multi-parameter-loggning (CO2, temperatur, fukt, TVOC) för post-occupancy-utvärdering, ventilationsverifiering och inomhusklimatstudier med exporterbar historik för rapporter.",
      "En outdoor-sensor ger den baslinje seriösa revisioner förväntar sig. Dedikerade Temperature och humidity-sensor täcker problemzoner; RoomAlyzer Space management validerar beläggningsantaganden bakom ventilations- och värmescheman.",
    ],
    smarterTogether:
      "Utomhusreferens, inomhus multi-parameter-loggning och kortsiktig beläggningskartläggning ger ingenjörer en komplett evidensbas i en utrullning.",
    closing:
      "Tillfälliga studier och permanent övervakning bör använda samma hårdvara. RoomAlyzer installeras på minuter och stannar kvar när kunden vill ha löpande tillsyn.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Baslinjeundersökningar",
        body: "Multi-parameter-loggning (CO2, temperatur, fukt, TVOC) för post-occupancy-utvärdering, ventilationsverifiering och inomhusklimatstudier.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Outdoor-sensor",
        badge: "Referensenhet",
        body: "Utomhusbaslinje så inomhustrender i rapporter separeras från väder — förväntat i varje seriös revision.",
        sensorSlugs: ["outdoor"],
      },
      {
        name: "Temperature / Humidity-sensor",
        badge: "Riktad loggning",
        body: "Dedikerade loggare för problemzoner, kryputrymmen och klimatskalundersökningar där en full multi-sensorenhet är overkill.",
        sensorSlugs: ["temperature", "humidity"],
      },
      {
        name: "Motion-sensor",
        badge: "Beläggningsstudier",
        body: "Kortsiktig närvarokartläggning för att validera ventilationshastigheter, värmescheman och rumsprogrammeringsantaganden.",
        sensorSlugs: ["motion"],
      },
    ],
  },
};

export const industryContentI18n: Partial<
  Record<Lang, Record<string, IndustryContentOverlay>>
> = { da, de, sv };
