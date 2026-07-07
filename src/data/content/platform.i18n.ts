import type { Lang } from "../lang";
import type { PlatformPageContent } from "./types";

/**
 * Per-locale overlays for platform detail-page body copy. English lives in
 * `platform.ts`; overlays cover all ten platform slugs (da/de/sv).
 */

export type PlatformContentOverlay = Partial<Omit<PlatformPageContent, "slug">>;

const da: Record<string, PlatformContentOverlay> = {
  "how-it-works": {
    heroTitle: "Sådan virker RoomAlyzer.",
    heroTitleAccent: "En komplet bygningsmonitoreringsløsning, der virker fra dag ét.",
    heroLead:
      "RoomAlyzer er en trådløs bygningsmonitoreringsløsning til indeklima, space management og vanddetektion. Den er bygget til at være enkel: når I bestiller en af vores løsninger (RoomAlyzer Air, RoomAlyzer Space eller RoomAlyzer Water), får I alt, hvad I har brug for, i én pakke, klar til brug. Sådan fungerer det, fra bestilling til data på skærmen.",
    sections: [
      {
        heading: "Alt i én komplet løsning",
        paragraphs: [
          "Uanset hvad I vælger, får I altid en komplet, klar-til-brug løsning med alt, hvad I har brug for: trådløse sensorer med indbygget forbindelse, der virker direkte ud af æsken, og RoomAlyzer-softwaren, hvor jeres data bliver til klare analyser, forudsigelser og konkrete anbefalinger. Der er intet at samle og intet at konfigurere. I placerer sensorerne, og data begynder at komme ind.",
        ],
      },
      {
        heading: "Ét dashboard til alle jeres data, på web og mobil",
        paragraphs: [
          "I får både en mobilapp og en udvidet webapp, så I kan samle alle jeres data i ét dashboard og altid have et klart overblik. Det gør ingen forskel, hvordan I sammensætter jeres sensorpakke, eller hvor mange rum, bygninger og lokationer I bruger RoomAlyzer på, og det hele samles i ét enkelt, overskueligt overblik.",
        ],
      },
      {
        heading: "Vi sætter jer i gang og bliver hos jer",
        paragraphs: [
          "Vi holder altid et online kick-off-møde med jer, så I og jeres kolleger får en ordentlig gennemgang af, hvordan appen virker, og en klar fornemmelse af, hvad den kan. Derefter er online support altid tilgængelig på alt, uanset hvor I er.",
        ],
      },
      {
        heading: "Udviklet i Danmark, sammen med dem, der bruger det",
        paragraphs: [
          "Vi udvikler vores software selv, her i Danmark, og vi gør det sammen med de mange brugere, vi arbejder med: facility managers, space planners, driftsmedarbejdere, ingeniører, energirådgivere og konservatorer i kommuner, virksomheder, museer, kirker og boligforeninger. De har fortalt os, hvordan det skal fungere, så det giver mening i deres arbejde, og den viden er bygget ind i software, der er lavet til at være ægte nem at bruge.",
        ],
      },
      {
        heading: "Enkel facility management-software, selv hvis IT ikke er jeres felt",
        paragraphs: [
          "De fleste har kæmpet med et IT-system, der tager uger at lære. RoomAlyzer er anderledes. Hvor store, komplekse systemer kræver lang træning, er vores kendt for at være enkelt. Det er bygget, så I hurtigt og nemt kan finde præcis de data, I har brug for, i en travl arbejdsdag. Systemet er intuitivt og hjælper jer med at få jeres data i den form, der giver mest mening lige nu: rådata, rapporter, analyser, grafer eller en API-viderestilling. I kan hente data selv, få dem leveret i indbakken eller bede systemet sende dem videre til andre uden at løfte en finger. I behøver ikke vide meget om IT-systemer, og vi bygger med klart blik for, at folk i drift, facility management og bevaring har travlt.",
        ],
      },
      {
        heading: "Sikkerhed by design: ingen Wi-Fi, EU-baseret hosting",
        paragraphs: [
          "Jeres data er sikre by design. RoomAlyzer rører aldrig jeres Wi-Fi, så jeres data rejser helt adskilt fra alt følsomt eller fortroligt på jeres eget netværk, og alt lagres i skyen med EU-baseret hosting.",
        ],
      },
    ],
  },
  architecture: {
    heroTitle: "Arkitektur.",
    heroTitleAccent: "Skalerbar, sikker, europæisk.",
    heroLead:
      "En multi-tenant SaaS bygget på EU-infrastruktur med tydelig adskillelse mellem indsamling, lagring og præsentation.",
  },
  dashboards: {
    heroTitle: "Bygningsdashboards.",
    heroTitleAccent: "Jeres data, på jeres måde.",
    heroLead:
      "Et godt dashboard gør sensordata til noget, I kan handle på med ét blik. RoomAlyzer giver alle i organisationen den information, de har brug for, i den form, de har brug for den, fra et personligt overblik på en bærbar til en livevisning på væggen. Og I sætter det op selv, uden at involvere IT.",
    sections: [
      {
        heading: "Byg det selv på få minutter",
        paragraphs: [
          "Der er intet fast layout. I vælger, hvad der skal vises, og hvordan det vises, med fem enkle widgettyper: et stort KPI-tal, en liveaflæsning, en graf, en topliste eller et heatmap. At tilføje én er en guidet firetrinsproces uden træning, og layoutet er drag-and-drop og gemmes automatisk undervejs.",
        ],
      },
      {
        heading: "Hvad I ser, efter løsning",
        paragraphs: [
          "Hver løsning har sit eget færdige driftsoverblik, så I altid ved, hvor I er:",
        ],
        list: [
          "RoomAlyzer Air: indeklima: live temperatur, fugt og CO2 med sensoraktivitetsindikatorer, der pulserer, når målinger kommer ind. En parallel visning til bevaring tilføjer de bevaringsspecifikke mål (Preservation Index (PI/TWPI), skimmelrisiko, EN 15757-svingninger og Bizot Green) til museer, arkiver og kirker.",
          "RoomAlyzer Space: space management: se, hvordan jeres skriveborde, rum og zoner reelt bruges: live belægning og heatmaps, der afslører mønstre over tid. Det er dataene, der viser, hvor der er ledig kapacitet, hvilke mødelokaler står tomme, og hvor der er et frit skrivebord lige nu.",
          "RoomAlyzer Water: vanddetektion: et driftsdashboard med aktive alarmer, tavse sensorer og hele jeres sensorflådes tilstand i realtid, der opdateres automatisk hvert par sekunder, så en lækage aldrig overses.",
          "Der er også en energivisning, hvor spild vises i DKK og CO2, og effektivitet opdeles pr. lokation.",
        ],
      },
      {
        heading: "Dashboards til jer og dashboards til alle",
        paragraphs: [
          "Der er to måder at bruge et dashboard på, og I bestemmer, hvilken der er hvilken.",
          "Til jer og jeres team: byg så mange dashboards, I vil, til forskellige roller (et ledelsesoverblik, teknisk monitorering, en afdelingsvisning) og skift mellem dem på sekunder. Data er altid afgrænset til jeres organisation og respekterer hver brugers adgang, så alle ser præcis det, de skal, og intet, de ikke skal.",
          "Til alle i bygningen: ethvert dashboard eller live plantegning kan deles på en vægskærm via et adgangskodebeskyttet link: ingen login, bare en URL og en adgangskode. Vis kolleger og besøgende, hvor travlt det er i kantinen, hvor der er et frit skrivebord, når de passerer receptionen, eller hvilke mødelokaler der er ledige, så de kan finde vej med ét blik.",
          "Og vigtigst: I vælger, hvad der vises på en offentlig skærm. Måske er spacedata noget, I gerne deler, mens indeklimadata er noget, I hellere beholder i driftsteamet. I kan køre flere skærme fra samme bygning, hver med sin egen adgangskode, så lobbyen og driftscentret viser forskellige views.",
        ],
      },
    ],
  },
  reports: {
    heroTitle: "Rapporter.",
    heroTitleAccent: "Fra rådata til klar, brugbar indsigt.",
    heroLead:
      "RoomAlyzer omdanner jeres kontinuerlige sensordata til klare, strukturerede rapporter, leveret automatisk til de rette personer, i det rette format, på det rette tidspunkt. Uanset om I har brug for en tilbagevendende teambriefing, compliance-dokumentation eller et datasæt til jeres egen analyse, håndterer platformen det uden manuelt arbejde. Og hvis I skal sende rapporter med konkrete anbefalinger til mange brugere på tværs af mange lokationer, kan vi også hjælpe med det: en særlig rapporttype, der kombinerer vores indeklimaekspertise med AI for at fortælle hvert site på klart sprog, hvad de skal gøre for at spare energi og holde klimaet rigtigt.",
    sections: [
      {
        heading: "Planlagte rapporter, direkte i indbakken",
        paragraphs: [
          "Hold jeres team informeret uden at nogen skal logge ind. Indeklimarapporter kører automatisk på daglig, ugentlig eller månedlig tidsplan og lander direkte i e-mailen. Hver rapport kan dække én sensor eller en hel lokation, med så mange modtagere, I vil, og I kan altid sende en test først for at tjekke indhold og format.",
          "Til en rigere, mere visuel briefing kan RoomAlyzer også sende planlagte grafrapporter: et PDF-øjebliksbillede af op til fem sensorer med jeres valgte parametre og tidsvindue (fra de sidste 24 timer til det sidste år). I kan lægge udendørsvejr ovenpå og tilføje en AI-genereret analyse af tendenserne. Frekvens og modtagere kan ændres når som helst uden at genopbygge rapporten.",
        ],
      },
      {
        heading: "Compliance-dokumentation, klar til indsendelse",
        paragraphs: [
          "Mange facility managers er blevet bedt om at dokumentere indeklimaet af ledelsen, ofte som følge af EU-direktiver. RoomAlyzer producerer den dokumentation for jer, direkte fra jeres live sensordata, uden manuel dataindsamling og uden regneark.",
          "Til DGNB-certificering (SOC1.1 / SOC1.2, EN 16798-1) guider en enkel wizard jer igennem: vælg periode og arbejdstid, vælg sensorer, vælg de rette tærskler (DGNB 2020 eller 2023, bygningstype og ventilationstype), og generer en professionel PDF med diagrammer, statistik og plantegningsoverlays. For bygninger under Energy Performance of Buildings Directive (EPBD 2024, EN 16798-1) opretter RoomAlyzer en fuld compliance-rapport på bestilling, med gap-analyse, compliance-procenter pr. parameter, et energioverblik og regelbaserede anbefalinger til forbedring. I inkluderer præcis de sektioner, der er relevante, og en downloadhistorik holder jeres tidligere rapporter tilgængelige. Hvis I er usikre på, hvilken standard der gælder for jer, hjælper vi gerne.",
        ],
      },
      {
        heading: "Eksporter jeres data til jeres egen analyse",
        paragraphs: [
          "Når I vil arbejde med de rå tal i jeres egne værktøjer, er alle sensordata tilgængelige som CSV-download. Vælg sensorer, parametre og datointerval, og få et komplet datasæt: temperatur, fugt, CO2, VOC, lyd, lys, tilstedeværelse, batteriniveau, signalstyrke, dugpunkt, absolut fugt og udendørsvejr.",
        ],
      },
    ],
  },
  notifications: {
    heroTitle: "Notifikationer.",
    heroTitleAccent: "Vid, når noget er galt.",
    heroLead:
      "Hele pointen med monitorering er at fange et problem, før det bliver en katastrofe. RoomAlyzer sender jer en øjeblikkelig e-mail eller SMS, når noget er galt, uanset hvor I er, og uanset hvor bygningen er. Så hvis en affugter svigter i et lager på den anden side af landet, og fugtigheden begynder at stige, finder I ud af det i tide til at køre ud og handle — i stedet for at opdage skaden uger senere.",
    sections: [
      {
        heading: "RoomAlyzer Air: alarmer for indeklima og bevaring",
        paragraphs: [
          "Få en alarm, når temperatur, fugt, CO2 eller skimmelrisiko bevæger sig uden for det interval, I har sat. For et travlt kontor eller en skole kan det betyde at handle på dårlig luftkvalitet, før klagerne kommer. For et museum, en kirke eller et arkiv kan det betyde at beskytte uerstattelige genstande: at fange en svigtende affugter eller et fugtsving, før det skader træ, malerier eller papir. I bestemmer grænserne, og RoomAlyzer overvåger dem døgnet rundt.",
        ],
      },
      {
        heading: "RoomAlyzer Water: lækagealarmer direkte til den rette person",
        paragraphs: [
          "Når vand detekteres, sender RoomAlyzer en besked direkte til e-mail eller SMS. Ikke en alarm, der bipper i en tom kælder, men en notifikation, der når en person, der kan handle. I kan tilføje så mange modtagere, I har brug for, så både drift og sikkerhed informeres på én gang, og en lækage i en skakt, et elskab eller en boligforening fanges, mens den stadig er lille.",
        ],
      },
      {
        heading: "Aldrig taget på sengen: batteri og sensorsundhed",
        paragraphs: [
          "I skal aldrig stå blinde, fordi en sensor stille er holdt op med at virke. RoomAlyzer advarer jer i god tid, før et batteri er fladt, ikke bagefter, så I kan planlægge en udskiftning roligt i stedet for at opdage et hul i jeres data bagefter.",
          "I kan også abonnere på et sensor-sundhedsresumé (dagligt, ugentligt eller månedligt) der kun lister sensorer med et problem, f.eks. dem der er blevet tavse eller har lavt batteri. Der sendes intet, når alt er fint, så når en e-mail kommer, ved I, at noget kræver opmærksomhed.",
        ],
      },
      {
        heading: "Finjusteret for at undgå falske alarmer",
        paragraphs: [
          "Alarmer sættes pr. sensor og pr. parameter, og I kan justere, hvor følsomme de er (hvor mange målinger i træk der skal være uden for intervallet, før en alarm sendes), så et kort, harmløst spike ikke udløser en falsk alarm. Temperatur, fugt, CO2, VOC, lyd, lys, tilstedeværelse og skimmelrisiko understøttes alle, og hver alarm kan testes for sig for at bekræfte, at den når jer, før den går live.",
        ],
      },
    ],
  },
  "maps-floorplans": {
    heroTitle: "Kort og plantegninger.",
    heroTitleAccent: "Se jeres bygning med ét blik.",
    heroLead:
      "Upload plantegninger og placer sensorer på dem. Liveværdier og alarmer farver rummene, når de ændrer sig.",
  },
  "mobile-tv": {
    heroTitle: "Mobil- og TV-visninger.",
    heroTitleAccent: "De rette data på den rette skærm.",
    heroLead:
      "En responsiv mobilapp til facility-teamet og fuldskærms-TV-dashboards til lobbyer og kontrolrum.",
  },
  "ai-analytics": {
    heroTitle: "AI og analyse.",
    heroTitleAccent: "Mønstre, I ellers ville overse.",
    heroLead:
      "Anomalidetektion, forudsigelige alarmer og forespørgsler på naturligt sprog på tværs af hele jeres sensorhistorik.",
  },
  security: {
    heroTitle: "Sikkerhed.",
    heroTitleAccent: "Ingen Wi-Fi, EU-baseret hosting, fuld kryptering.",
    heroLead:
      "Datasikkerhed bør ikke være noget, I skal bekymre jer om. RoomAlyzer er en multi-tenant platform, der bruges af kunder i mange lande og brancher, og den er bygget, så sikkerhed er en del af designet fra start: ingen kan nå data, der ikke er deres, og jeres organisation ved altid præcis, hvem der har adgang til hvad. Sådan fungerer det, og derfor gør det jeres egen risikovurdering enklere.",
    sections: [
      {
        heading: "25 års erfaring med sikre online-løsninger",
        paragraphs: [
          "Sikkerhed er ikke nyt for os. IoT Fabrikkens løsninger er bygget af folk med mere end 25 års erfaring i sikre online-systemer, fra onlinebetalingsløsninger til datalogning, der sikrer fødevaresikkerhed. Det fundament giver os dyb, praktisk viden om, hvordan data transporteres og lagres sikkert, og vi holder vores løsninger opdateret med de nyeste sikkerhedsstandarder. Det er også derfor, vi holder os til strenge regler, så én ting altid gælder: I ejer jeres data, til enhver tid, og ingen anden gør.",
        ],
      },
      {
        heading: "Vi rører aldrig jeres Wi-Fi",
        paragraphs: [
          "Vi har to typer sensorer: nogle har et indbygget NB-IoT SIM-kort, og andre sender deres data til en Cloud Connector, som videresender dem til jeres app via sit eget SIM-kort. Uanset hvordan rejser data over et dedikeret mobilnetværk, aldrig over jeres Wi-Fi. Det betyder, at jeres målinger bevæger sig helt adskilt fra alt følsomt eller fortroligt på jeres eget netværk, og I undgår at give et eksternt system adgang til jeres IT-miljø.",
        ],
      },
      {
        heading: "End-to-end-kryptering og EU-baseret hosting",
        paragraphs: [
          "Alle data beskyttes med fuld end-to-end-kryptering (AES-128), og alt lagres i skyen med 100 % EU-baseret hosting. I beholder fuldt ejerskab af jeres data, og I ved altid, hvor de opbevares. Derudover anvender vi standard produktionshærdning: krypteret trafik (HTTPS/HSTS), beskyttelse mod brute-force-loginforsøg, og ingen credentials eksponeres nogensinde i browseren.",
        ],
      },
      {
        heading: "Login, I kan stole på, med valgfri to-faktor",
        paragraphs: [
          "Hver bruger logger ind via Firebase Authentication, Googles enterprise-identitetsplatform. RoomAlyzer gemmer aldrig jeres adgangskoder selv. Login, nulstilling af adgangskode og kontogendannelse håndteres alle af Firebase. For organisationer, der vil have et ekstra lag af sikkerhed, er to-faktor-godkendelse tilgængelig (den samme sekscifrede kodestandard, banker bruger), og I kan gøre den obligatorisk for alle i organisationen fra sikkerhedsindstillingerne.",
        ],
      },
      {
        heading: "Den rette adgang til hver rolle",
        paragraphs: [
          "Ikke alle har brug for samme adgang, så RoomAlyzer bruger klare, rollebaserede tilladelser: viewers kan se data, men ikke ændre dem, managers har bred operationel adgang, og administratorer kan administrere brugere og sikkerhedsindstillinger, kun inden for deres egen organisation. Vigtigt er, at hver tilladelse tjekkes på serveren ved hver forespørgsel. At skjule en knap i interfacet er aldrig nok alene; serveren bekræfter uafhængigt, at I må gøre noget, før data vises eller ændres.",
        ],
      },
      {
        heading: "Adgang helt ned til den enkelte lokation",
        paragraphs: [
          "Inden for jeres organisation kan adgang indsnævres yderligere. En bruger kan begrænses til bestemte bygninger eller rum, så de kun ser de sensorer, dashboards og alarmer, de er ment til. Det gør det enkelt at give et facility-team adgang til deres egen fløj uden at eksponere resten af bygningen, eller at give en ekstern entreprenør et skrivebeskyttet view af én etage, håndhævet både i interfacet og på serveren.",
        ],
      },
      {
        heading: "Jeres data forbliver jeres: streng tenant-isolation",
        paragraphs: [
          "Alle kunder deler samme platform, men deres data er fuldstændig adskilt. Hver forespørgsel er knyttet til jeres egen organisation, løst fra verificerede server-side credentials, aldrig fra noget, browseren kunne ændre. Det samme gælder integrationer: en API-nøgle er permanent bundet til én organisation og kan ikke nå en andens data, selv hvis et andet ID sendes med i forespørgslen. (Mere om API-nøgler på vores API-side.)",
        ],
      },
      {
        heading: "Et fuldt revisionsspor",
        paragraphs: [
          "Hver ændring af adgang registreres. Når en bruger tilføjes eller fjernes, en rolle ændres, eller en konto oprettes eller slettes, skrives en post, der ikke kan ændres, med hvem der gjorde det, over for hvem, hvad der ændredes, og hvornår. Administratorer kan gennemgå den fulde adgangshistorik for enhver bruger, hvilket gør intern compliance ligetil og besvarer det spørgsmål, alle til sidst stiller: hvem havde adgang til hvad, og hvornår ændredes det?",
        ],
      },
      {
        heading: "Enklere GDPR- og NIS2-vurdering",
        paragraphs: [
          "Fordi RoomAlyzer kun registrerer tekniske måledata (uden personligt identificerbare oplysninger) og kombinerer det med ingen Wi-Fi-afhængighed, EU-baseret hosting og fuld kryptering, gør det jeres egen GDPR- og NIS2-vurdering betydeligt enklere. I får robust databeskyttelse og et klart, forsvarligt setup uden den sædvanlige kompleksitet.",
        ],
      },
    ],
  },
  api: {
    heroTitle: "API.",
    heroTitleAccent: "Forbind jeres systemer til RoomAlyzer.",
    heroLead:
      "Jeres data er jeres at bruge. RoomAlyzer leveres med et veldokumenteret, åbent API, så jeres IoT-sensordata kan flyde direkte ind i jeres egne workflows, dashboards og AI-værktøjer. De fleste kunder bruger simpelthen RoomAlyzer-softwaren, som den er, men når I vil forbinde den til jeres egne systemer, er der to enkle måder: et REST API til udviklere og systemer og en MCP-server til AI-agenter.",
    sections: [
      {
        heading: "REST API: realtids-IoT-data lige ved hånden",
        paragraphs: [
          "RoomAlyzer REST API giver jer programmatisk adgang til live og historiske sensordata på tværs af hele jeres sensornetværk. Uanset om I bygger et tilpasset dashboard, føder data ind i et BI-værktøj eller automatiserer beslutninger baseret på klimatiske forhold, dækker API'et jeres behov.",
        ],
        listIntro: "Hvad I kan tilgå:",
        list: [
          "Indeklima — liveaflæsninger og historiske data for temperatur, fugt, CO2 og mere. Hent tærskelgrænser pr. sensor og afvigelsesresuméer for at se, hvor ofte forholdene falder uden for acceptable intervaller.",
          "Bevaring: bygningsniveaudata for Preservation Index (PI/TWPI), skimmelrisiko (VTT), EN 15757-svingninger og bevaringsopvarmning. Ideelt til museer, arkiver og kulturarvsinstitutioner.",
          "Vanddetektion — aktive alarmer, alarmhistorik og sensorflådestatus for jeres vandlækageovervågningsnetværk.",
          "Space management — månedlige belægningsheatmaps til at analysere, hvordan jeres arealer reelt bruges.",
          "Trykknapper — køstatus, håndteret historik og svarstatistik for service- og alarmknapper.",
        ],
      },
      {
        paragraphs: [
          "Godkendelse er enkel: hver tenant modtager en dedikeret API-nøgle, der afgrænser adgang til kun deres egne data; ingen cross-tenant-adgang. Alle offentlige endpoints er dokumenteret i en ren, interaktiv API-reference på v2.roomalyzer.com/api/docs/public, uden login.",
        ],
      },
      {
        heading: "MCP server: lad AI-agenter arbejde med jeres data",
        paragraphs: [
          "RoomAlyzer er også tilgængelig som en MCP (Model Context Protocol)-server: den fremvoksende standard for at forbinde AI-assistenter og agenter til eksterne datakilder. Med en MCP-nøgle kan AI-agenter forespørge jeres indeklimadata direkte på naturligt sprog. Stil spørgsmål som \"Hvilke rum har haft de højeste CO2-niveauer denne uge?\" eller \"Viser nogen sensorer forhold uden for sommertærsklerne?\" og få strukturerede, tenant-afgrænsede svar.",
          "MCP-serveren er tilgængelig på mcp.roomalyzer.com/sse og godkender med en Bearer-nøgle. Nøgler administreres fra RoomAlyzer-adminpanelet og er knyttet til jeres tenant, så jeres data aldrig blandes med en anden kundes. Det gør RoomAlyzer til en naturlig datakilde til AI-drevne facility-rapporter, automatiserede compliance-tjek og samtalebaserede bygningsstyringsassistenter.",
        ],
      },
      {
        heading: "Kom i gang",
        paragraphs: [
          "Begge integrationstyper administreres fra Administration-sektionen i RoomAlyzer:",
        ],
        list: [
          "API-nøgler: opret og administrer REST API-nøgler under Administration → API Keys. Scopes styrer præcis, hvilke data nøglen kan læse.",
          "MCP-nøgler: opret og administrer AI-agent-nøgler under Administration → MCP Keys. Nøglen vises én gang ved oprettelse.",
        ],
      },
      {
        paragraphs: [
          "Fuld API-dokumentation, inklusive request/response-eksempler og skemadefinitioner, er altid tilgængelig på v2.roomalyzer.com/api/docs/public. Spørgsmål om API-adgang, tilpassede integrationer eller enterprise-datapipelines: kontakt os på info@iot-fabrikken.com.",
        ],
      },
    ],
  },
};

const de: Record<string, PlatformContentOverlay> = {
  "how-it-works": {
    heroTitle: "So funktioniert RoomAlyzer.",
    heroTitleAccent: "Eine vollständige Gebäudeüberwachungslösung, die vom ersten Tag an funktioniert.",
    heroLead:
      "RoomAlyzer ist eine drahtlose Gebäudeüberwachungslösung für Raumklima, Space-Management und Wassererkennung. Sie ist einfach gedacht: Wenn Sie eine unserer Lösungen bestellen (RoomAlyzer Air, RoomAlyzer Space oder RoomAlyzer Water), erhalten Sie alles in einem Paket, einsatzbereit. So funktioniert es — von der Bestellung bis zu den Daten auf dem Bildschirm.",
    sections: [
      {
        heading: "Alles in einer vollständigen Lösung",
        paragraphs: [
          "Was auch immer Sie wählen, Sie erhalten immer eine vollständige, einsatzbereite Lösung mit allem, was Sie brauchen: drahtlose Sensoren mit eingebauter Konnektivität, die sofort funktionieren, und die RoomAlyzer-Software, in der Ihre Daten zu klaren Analysen, Prognosen und konkreten Empfehlungen werden. Nichts muss zusammengesetzt oder konfiguriert werden — Sie platzieren die Sensoren, und die Daten beginnen einzutreffen.",
        ],
      },
      {
        heading: "Ein Dashboard für alle Ihre Daten — Web und Mobil",
        paragraphs: [
          "Sie erhalten sowohl eine Mobile-App als auch eine erweiterte Web-App, damit Sie alle Daten in einem Dashboard bündeln und jederzeit den Überblick behalten. Es spielt keine Rolle, wie Sie Ihr Sensorpaket zusammenstellen oder wie viele Räume, Gebäude und Standorte Sie mit RoomAlyzer abdecken — alles kommt in einer einzigen, einfachen Übersicht zusammen.",
        ],
      },
      {
        heading: "Wir bringen Sie ins Rollen — und bleiben an Ihrer Seite",
        paragraphs: [
          "Wir führen immer ein Online-Kick-off mit Ihnen durch, damit Sie und Ihre Kollegen einen ordentlichen Rundgang durch die App bekommen und klar sehen, was sie leisten kann. Danach ist Online-Support jederzeit für alles verfügbar — egal, wo Sie gerade sind.",
        ],
      },
      {
        heading: "In Dänemark entwickelt — mit den Menschen, die es nutzen",
        paragraphs: [
          "Wir entwickeln unsere Software selbst, hier in Dänemark, und tun das gemeinsam mit den vielen Nutzern, mit denen wir arbeiten: Facility Manager, Space Planner, Betriebspersonal, Ingenieure, Energieberater und Konservatoren in Kommunen, Unternehmen, Museen, Kirchen und Wohnungsgenossenschaften. Sie haben uns gesagt, wie es funktionieren muss, damit es zu ihrer Arbeit passt — und dieses Know-how steckt in Software, die wirklich einfach zu bedienen ist.",
        ],
      },
      {
        heading: "Einfache Facility-Management-Software — auch wenn IT nicht Ihr Fach ist",
        paragraphs: [
          "Die meisten haben schon mit einem IT-System gerungen, dessen Einarbeitung Wochen dauert. RoomAlyzer ist anders. Während große, komplexe Systeme lange Schulungen verlangen, ist unseres dafür bekannt, einfach zu sein. Es ist so aufgebaut, dass Sie genau die Daten finden, die Sie brauchen, schnell und unkompliziert im Arbeitsalltag. Das System ist intuitiv und hilft Ihnen, Daten in der Form zu nutzen, die gerade am meisten Sinn ergibt: Rohdaten, Berichte, Analysen, Grafiken oder eine API-Weiterleitung. Sie können Daten selbst abrufen, in den Posteingang liefern lassen oder das System sie ohne Handgriff an andere weiterleiten. Sie müssen nicht viel über IT-Systeme wissen, und wir entwickeln mit dem klaren Blick darauf, dass Menschen in Betrieb, Facility Management und Denkmalpflege wenig Zeit haben.",
        ],
      },
      {
        heading: "Sicher by Design: kein Wi-Fi, EU-basiertes Hosting",
        paragraphs: [
          "Ihre Daten sind von Anfang an sicher. RoomAlyzer berührt niemals Ihr Wi-Fi, sodass Ihre Daten völlig getrennt von allem Sensiblen oder Vertraulichen in Ihrem eigenen Netzwerk transportiert werden — und alles wird in der Cloud mit EU-basiertem Hosting gespeichert.",
        ],
      },
    ],
  },
  architecture: {
    heroTitle: "Architektur.",
    heroTitleAccent: "Skalierbar, sicher, europäisch.",
    heroLead:
      "Eine Multi-Tenant-SaaS auf EU-Infrastruktur mit klarer Trennung zwischen Erfassung, Speicherung und Darstellung.",
  },
  dashboards: {
    heroTitle: "Gebäude-Dashboards.",
    heroTitleAccent: "Ihre Daten, Ihr Weg.",
    heroLead:
      "Ein gutes Dashboard macht aus Sensordaten etwas, worauf Sie auf einen Blick reagieren können. RoomAlyzer gibt jedem in Ihrer Organisation die Informationen in der Form, die er braucht — vom persönlichen Überblick auf dem Laptop bis zur Live-Anzeige an der Wand. Und Sie richten es selbst ein, ohne IT einzubeziehen.",
    sections: [
      {
        heading: "In Minuten selbst aufbauen",
        paragraphs: [
          "Es gibt kein festes Layout. Sie wählen, was angezeigt wird und wie — mit fünf einfachen Widget-Typen: eine große KPI-Zahl, eine Live-Messung, ein Diagramm, eine Top-Liste oder eine Heatmap. Das Hinzufügen ist ein geführter Vier-Schritte-Prozess ohne Schulung, und das Layout ist per Drag-and-drop aufgebaut und speichert sich automatisch.",
        ],
      },
      {
        heading: "Was Sie sehen — nach Lösung",
        paragraphs: [
          "Jede Lösung hat ihre eigene fertige Betriebsansicht, damit Sie immer wissen, wo Sie stehen:",
        ],
        list: [
          "RoomAlyzer Air: Raumklima: Live-Temperatur, Feuchte und CO2 mit Sensoraktivitätsindikatoren, die bei eingehenden Messungen pulsieren. Eine parallele Bewahrungsansicht ergänzt die konservierungsspezifischen Kennzahlen (Preservation Index (PI/TWPI), Schimmelrisiko, EN 15757-Schwankungen und Bizot Green) für Museen, Archive und Kirchen.",
          "RoomAlyzer Space: Space-Management: sehen Sie, wie Schreibtische, Räume und Zonen wirklich genutzt werden — Live-Belegung und Heatmaps, die Muster über die Zeit zeigen. Das sind die Daten, die zeigen, wo Reservekapazität liegt, welche Meetingräume leer stehen und wo gerade ein freier Schreibtisch ist.",
          "RoomAlyzer Water: Wassererkennung: ein operatives Cockpit mit aktiven Alarmen, stillen Sensoren und dem Zustand Ihrer gesamten Sensorflotte in Echtzeit, automatisch alle paar Sekunden aktualisiert — damit kein Leck übersehen wird.",
          "Es gibt auch eine Energieansicht, in der Verschwendung in DKK und CO2 angezeigt wird und die Effizienz je Standort aufgeschlüsselt ist.",
        ],
      },
      {
        heading: "Dashboards für Sie — und Dashboards für alle",
        paragraphs: [
          "Es gibt zwei Arten, ein Dashboard zu nutzen — und Sie entscheiden, welche welche ist.",
          "Für Sie und Ihr Team: bauen Sie beliebig viele Dashboards für verschiedene Rollen (Management-Überblick, technisches Monitoring, Abteilungsansicht) und wechseln Sie in Sekunden. Daten sind immer auf Ihre Organisation begrenzt und respektieren den Zugriff jedes Nutzers, sodass jeder genau das sieht, was er soll — und nichts, was er nicht soll.",
          "Für alle im Gebäude: jedes Dashboard oder jeder Live-Grundriss kann per passwortgeschütztem Link an einer Wandanzeige geteilt werden — kein Login, nur URL und Passwort. Zeigen Sie Kollegen und Besuchern, wie voll die Kantine ist, wo beim Vorbeigehen an der Rezeption ein freier Schreibtisch ist oder welche Meetingräume frei sind.",
          "Und entscheidend: Sie wählen, was auf einem öffentlichen Bildschirm erscheint. Vielleicht teilen Sie Flächendaten gern, während Raumklimadaten beim Betriebsteam bleiben sollen. Sie können mehrere Bildschirme im selben Gebäude betreiben, jeweils mit eigenem Passwort — Lobby und Leitstand zeigen unterschiedliche Ansichten.",
        ],
      },
    ],
  },
  reports: {
    heroTitle: "Berichte.",
    heroTitleAccent: "Von Rohdaten zu klarer, nutzbarer Erkenntnis.",
    heroLead:
      "RoomAlyzer verwandelt Ihre kontinuierlichen Sensordaten in klare, strukturierte Berichte, automatisch an die richtigen Personen, im richtigen Format, zur richtigen Zeit. Ob wiederkehrendes Team-Briefing, Compliance-Dokumentation oder ein Datensatz für Ihre eigene Analyse: die Plattform erledigt das ohne manuelle Arbeit. Wenn Sie Berichte mit konkreten Empfehlungen an viele Nutzer an vielen Standorten senden müssen, helfen wir auch dabei: ein spezieller Berichtstyp, der unsere Raumklima-Expertise mit KI kombiniert und jedem Standort in klarer Sprache sagt, was zu tun ist, um Energie zu sparen und das Klima richtig zu halten.",
    sections: [
      {
        heading: "Geplante Berichte, direkt ins Postfach",
        paragraphs: [
          "Halten Sie Ihr Team informiert, ohne dass jemand einloggen muss. Raumklima-Berichte laufen automatisch täglich, wöchentlich oder monatlich und kommen direkt per E-Mail. Jeder Bericht kann einen Sensor oder einen ganzen Standort abdecken, mit beliebig vielen Empfängern — und Sie können vorab einen Test senden, um Inhalt und Format zu prüfen.",
          "Für ein reichhaltigeres, visuelleres Briefing kann RoomAlyzer auch geplante Grafikberichte senden — ein PDF-Snapshot von bis zu fünf Sensoren mit Ihren gewählten Parametern und Zeitfenster (von den letzten 24 Stunden bis zum letzten Jahr). Sie können Außenwetter einblenden und eine KI-generierte Trendanalyse hinzufügen. Frequenz und Empfänger lassen sich jederzeit ändern, ohne den Bericht neu aufzubauen.",
        ],
      },
      {
        heading: "Compliance-Dokumentation, abgabefertig",
        paragraphs: [
          "Viele Facility Manager wurden von der Geschäftsführung gebeten, das Raumklima zu dokumentieren, oft infolge von EU-Richtlinien. RoomAlyzer erstellt diese Dokumentation für Sie, direkt aus Ihren Live-Sensordaten, ohne manuelle Datenerhebung und ohne Tabellen.",
          "Für DGNB-Zertifizierung (SOC1.1 / SOC1.2, EN 16798-1) führt ein einfacher Assistent Sie durch: Zeitraum und Arbeitszeiten wählen, Sensoren auswählen, passende Schwellen (DGNB 2020 oder 2023, Gebäude- und Lüftungstyp) und ein professionelles PDF mit Diagrammen, Statistiken und Grundriss-Overlays erzeugen. Für Gebäude unter der Energy Performance of Buildings Directive (EPBD 2024, EN 16798-1) erstellt RoomAlyzer auf Abruf einen vollständigen Compliance-Bericht — mit Gap-Analyse, Compliance-Prozentsätzen je Parameter, Energieüberblick und regelbasierten Verbesserungsempfehlungen. Sie nehmen genau die Abschnitte auf, die relevant sind, und ein Download-Verlauf hält frühere Berichte verfügbar. Wenn Sie unsicher sind, welcher Standard für Sie gilt, helfen wir gern.",
        ],
      },
      {
        heading: "Exportieren Sie Ihre Daten für eigene Analysen",
        paragraphs: [
          "Wenn Sie mit den Rohzahlen in eigenen Tools arbeiten möchten, stehen alle Sensordaten als CSV-Download bereit. Wählen Sie Sensoren, Parameter und Datumsbereich und erhalten Sie einen vollständigen Datensatz — Temperatur, Feuchte, CO2, VOC, Schall, Licht, Anwesenheit, Batteriestand, Signalstärke, Taupunkt, absolute Feuchte und Außenwetter.",
        ],
      },
    ],
  },
  notifications: {
    heroTitle: "Benachrichtigungen.",
    heroTitleAccent: "Wissen, wenn etwas nicht stimmt.",
    heroLead:
      "Der Sinn von Monitoring ist, ein Problem zu erkennen, bevor es zur Katastrophe wird. RoomAlyzer sendet Ihnen sofort eine E-Mail oder SMS, wenn etwas nicht stimmt, egal wo Sie sind und wo das Gebäude steht. Wenn also ein Entfeuchter in einem Lager am anderen Ende des Landes ausfällt und die Feuchte steigt, erfahren Sie das rechtzeitig, statt den Schaden Wochen später zu entdecken.",
    sections: [
      {
        heading: "RoomAlyzer Air: Raumklima- und Konservierungsalarme",
        paragraphs: [
          "Erhalten Sie einen Alarm, wenn Temperatur, Feuchte, CO2 oder Schimmelrisiko außerhalb Ihres eingestellten Bereichs liegen. In einem vollen Büro oder einer Schule kann das bedeuten, schlechte Luftqualität anzugehen, bevor Beschwerden kommen. In Museum, Kirche oder Archiv kann es unersetzliche Objekte schützen — einen ausfallenden Entfeuchter oder Feuchteschwankung erkennen, bevor Holz, Gemälde oder Papier Schaden nehmen. Sie legen die Grenzen fest, RoomAlyzer überwacht sie rund um die Uhr.",
        ],
      },
      {
        heading: "RoomAlyzer Water: Leckalarme direkt an die richtige Person",
        paragraphs: [
          "Wenn Wasser erkannt wird, sendet RoomAlyzer eine Nachricht direkt per E-Mail oder SMS. Kein Alarm, der in einem leeren Keller piept, sondern eine Benachrichtigung, die eine handelnde Person erreicht. Sie können beliebig viele Empfänger hinzufügen, damit Betrieb und Sicherheit gleichzeitig informiert sind, und ein Leck in einem Schacht, Schaltschrank oder einer Wohnanlage erfasst wird, solange es noch klein ist.",
        ],
      },
      {
        heading: "Nie überrascht: Batterie und Sensorzustand",
        paragraphs: [
          "Sie sollten nie blind sein, weil ein Sensor still aufgehört hat zu senden. RoomAlyzer warnt rechtzeitig, bevor eine Batterie leer ist, nicht danach, damit Sie einen Austausch planen können, statt erst später eine Lücke in den Daten zu entdecken.",
          "Sie können auch einen Sensor-Health-Digest abonnieren (täglich, wöchentlich oder monatlich), der nur Sensoren mit Problemen listet, z. B. stille oder schwach batterierte Geräte. Wenn alles in Ordnung ist, wird nichts gesendet — kommt eine E-Mail, wissen Sie, dass Aufmerksamkeit nötig ist.",
        ],
      },
      {
        heading: "Fein abgestimmt gegen Fehlalarme",
        paragraphs: [
          "Alarme werden pro Sensor und Parameter gesetzt, und Sie können die Empfindlichkeit anpassen (wie viele Messungen hintereinander außerhalb des Bereichs liegen müssen, bevor ein Alarm gesendet wird), damit ein kurzer, harmloser Spike keinen Fehlalarm auslöst. Temperatur, Feuchte, CO2, VOC, Schall, Licht, Anwesenheit und Schimmelrisiko werden unterstützt, und jeder Alarm kann einzeln getestet werden, bevor er live geht.",
        ],
      },
    ],
  },
  "maps-floorplans": {
    heroTitle: "Karten und Grundrisse.",
    heroTitleAccent: "Ihr Gebäude auf einen Blick.",
    heroLead:
      "Grundrisse hochladen und Sensoren darauf platzieren. Live-Werte und Alarme färben die Räume, wenn sie sich ändern.",
  },
  "mobile-tv": {
    heroTitle: "Mobile und TV-Ansichten.",
    heroTitleAccent: "Die richtigen Daten auf dem richtigen Bildschirm.",
    heroLead:
      "Eine responsive Mobile-App für das Facility-Team und Vollbild-TV-Dashboards für Lobbys und Leitstände.",
  },
  "ai-analytics": {
    heroTitle: "KI und Analytik.",
    heroTitleAccent: "Muster, die Sie sonst übersehen würden.",
    heroLead:
      "Anomalieerkennung, prädiktive Alarme und Abfragen in natürlicher Sprache über Ihre gesamte Sensorhistorie.",
  },
  security: {
    heroTitle: "Sicherheit.",
    heroTitleAccent: "Kein Wi-Fi, EU-basiertes Hosting, volle Verschlüsselung.",
    heroLead:
      "Datensicherheit sollte keine Sorge sein. RoomAlyzer ist eine Multi-Tenant-Plattform für Kunden in vielen Ländern und Branchen, so aufgebaut, dass Sicherheit von Anfang an im Design steckt: niemand erreicht fremde Daten, und Ihre Organisation weiß immer genau, wer worauf Zugriff hat. So funktioniert es, und warum Ihre eigene Risikobewertung einfacher wird.",
    sections: [
      {
        heading: "25 Jahre Erfahrung mit sicheren Online-Lösungen",
        paragraphs: [
          "Sicherheit ist für uns nicht neu. Die Lösungen von IoT Fabrikken werden von Menschen mit mehr als 25 Jahren Erfahrung in sicheren Online-Systemen gebaut — von Online-Zahlungslösungen bis zur Datenprotokollierung für Lebensmittelsicherheit. Dieses Fundament gibt uns tiefes, praktisches Wissen darüber, wie Daten sicher transportiert und gespeichert werden, und wir halten unsere Lösungen an aktuellen Sicherheitsstandards. Deshalb gelten bei uns strenge Regeln, damit immer gilt: Sie besitzen Ihre Daten (jederzeit) und niemand sonst.",
        ],
      },
      {
        heading: "Wir berühren niemals Ihr Wi-Fi",
        paragraphs: [
          "Wir haben zwei Sensortypen: manche haben eine eingebaute NB-IoT-SIM-Karte, andere senden an einen Cloud Connector, der die Daten über seine eigene SIM-Karte an Ihre App weiterleitet. So oder so reisen die Daten über ein dediziertes Mobilfunknetz — niemals über Ihr Wi-Fi. Ihre Messungen bleiben völlig getrennt von allem Sensiblen oder Vertraulichen in Ihrem Netzwerk, und Sie müssen keinem externen System Zugang zu Ihrer IT-Umgebung geben.",
        ],
      },
      {
        heading: "End-to-End-Verschlüsselung und EU-basiertes Hosting",
        paragraphs: [
          "Alle Daten sind mit vollständiger End-to-End-Verschlüsselung (AES-128) geschützt und werden in der Cloud mit 100 % EU-basiertem Hosting gespeichert. Sie behalten volles Eigentum an Ihren Daten und wissen immer, wo sie liegen. Zusätzlich wenden wir Standard-Hardening an — verschlüsselter Verkehr (HTTPS/HSTS), Schutz gegen Brute-Force-Loginversuche und keine Credentials im Browser.",
        ],
      },
      {
        heading: "Login, dem Sie vertrauen können — mit optionaler Zwei-Faktor-Authentifizierung",
        paragraphs: [
          "Jeder Nutzer meldet sich über Firebase Authentication an, Googles Enterprise-Identitätsplattform. RoomAlyzer speichert Ihre Passwörter nie selbst — Anmeldung, Passwort-Reset und Kontowiederherstellung laufen über Firebase. Für Organisationen mit zusätzlicher Absicherung ist Zwei-Faktor-Authentifizierung verfügbar (derselbe sechsstellige Code-Standard wie bei Banken), und Sie können sie für alle in den Sicherheitseinstellungen verpflichtend machen.",
        ],
      },
      {
        heading: "Der richtige Zugriff für jede Rolle",
        paragraphs: [
          "Nicht jeder braucht denselben Zugriff. RoomAlyzer nutzt klare rollenbasierte Berechtigungen: Viewer sehen Daten, ändern aber nichts; Manager haben breiten operativen Zugriff; Administratoren verwalten Nutzer und Sicherheitseinstellungen, nur innerhalb ihrer eigenen Organisation. Wichtig: jede Berechtigung wird bei jeder Anfrage serverseitig geprüft. Einen Button in der Oberfläche zu verbergen reicht nie allein; der Server bestätigt unabhängig, ob Sie etwas dürfen, bevor Daten angezeigt oder geändert werden.",
        ],
      },
      {
        heading: "Zugriff bis auf einzelne Standorte",
        paragraphs: [
          "Innerhalb Ihrer Organisation kann der Zugriff weiter eingeschränkt werden. Ein Nutzer kann auf bestimmte Gebäude oder Räume begrenzt werden und sieht nur die Sensoren, Dashboards und Alarme, die für ihn bestimmt sind. So geben Sie einem Facility-Team Zugriff auf seinen Flügel, ohne den Rest des Gebäudes freizugeben, oder einem externen Dienstleister eine schreibgeschützte Ansicht einer Etage, durchgesetzt in Oberfläche und Server.",
        ],
      },
      {
        heading: "Ihre Daten bleiben Ihre: strenge Mandantenisolation",
        paragraphs: [
          "Alle Kunden teilen dieselbe Plattform, aber ihre Daten sind vollständig getrennt. Jede Abfrage ist an Ihre Organisation gebunden, aus verifizierten serverseitigen Credentials aufgelöst — nie aus etwas, das der Browser ändern könnte. Dasselbe gilt für Integrationen: ein API-Schlüssel ist dauerhaft an eine Organisation gebunden und erreicht keine fremden Daten, selbst wenn eine andere ID mitgesendet wird. (Mehr zu API-Schlüsseln auf unserer API-Seite.)",
        ],
      },
      {
        heading: "Ein vollständiger Audit-Trail",
        paragraphs: [
          "Jede Zugriffsänderung wird protokolliert. Wenn ein Nutzer hinzugefügt oder entfernt wird, eine Rolle geändert oder ein Konto erstellt oder gelöscht wird, entsteht ein unveränderlicher Eintrag (wer, wen, was, wann). Administratoren können die vollständige Zugriffshistorie jedes Nutzers einsehen, sodass interne Compliance einfach wird, und die Frage ist beantwortet, die irgendwann jeder stellt: wer hatte wann Zugriff auf was?",
        ],
      },
      {
        heading: "Einfachere GDPR- und NIS2-Bewertung",
        paragraphs: [
          "Weil RoomAlyzer nur technische Messdaten erfasst (ohne personenbezogene Informationen) und das mit keiner Wi-Fi-Abhängigkeit, EU-basiertem Hosting und voller Verschlüsselung kombiniert, wird Ihre eigene GDPR- und NIS2-Bewertung deutlich einfacher. Sie erhalten robusten Datenschutz und ein klares, vertretbares Setup ohne die übliche Komplexität.",
        ],
      },
    ],
  },
  api: {
    heroTitle: "API.",
    heroTitleAccent: "Verbinden Sie Ihre Systeme mit RoomAlyzer.",
    heroLead:
      "Ihre Daten gehören Ihnen. RoomAlyzer bietet eine gut dokumentierte, offene API, damit Ihre IoT-Sensordaten direkt in Ihre Workflows, Dashboards und KI-Tools fließen können. Die meisten Kunden nutzen die RoomAlyzer-Software einfach wie sie ist — wenn Sie sie aber mit eigenen Systemen verbinden möchten, gibt es zwei einfache Wege: eine REST-API für Entwickler und Systeme und einen MCP-Server für KI-Agenten.",
    sections: [
      {
        heading: "REST-API — Echtzeit-IoT-Daten griffbereit",
        paragraphs: [
          "Die RoomAlyzer REST-API gibt Ihnen programmatischen Zugriff auf Live- und historische Sensordaten in Ihrem gesamten Sensornetzwerk. Ob Sie ein eigenes Dashboard bauen, Daten in ein BI-Tool einspeisen oder Entscheidungen nach Klimabedingungen automatisieren — die API deckt das ab.",
        ],
        listIntro: "Worauf Sie zugreifen können:",
        list: [
          "Raumklima — Live-Messungen und historische Daten für Temperatur, Feuchte, CO2 und mehr. Schwellenwerte pro Sensor und Abweichungszusammenfassungen abrufen, um zu sehen, wie oft Bedingungen außerhalb akzeptabler Bereiche liegen.",
          "Konservierung: Gebäudedaten für Preservation Index (PI/TWPI), Schimmelrisiko (VTT), EN 15757-Schwankungen und Konservierungsheizung. Ideal für Museen, Archive und Kulturerbe.",
          "Wassererkennung — aktive Alarme, Alarmhistorie und Sensorflottenstatus für Ihr Lecküberwachungsnetzwerk.",
          "Space-Management — monatliche Belegungs-Heatmaps zur Analyse der tatsächlichen Flächennutzung.",
          "Drucktaster — Warteschlangenstatus, Bearbeitungshistorie und Antwortstatistiken für Service- und Alarmtaster.",
        ],
      },
      {
        paragraphs: [
          "Die Authentifizierung ist einfach: jeder Mandant erhält einen dedizierten API-Schlüssel, der den Zugriff auf die eigenen Daten beschränkt; kein mandantenübergreifender Zugriff. Alle öffentlichen Endpunkte sind in einer übersichtlichen, interaktiven API-Referenz unter v2.roomalyzer.com/api/docs/public dokumentiert, ohne Login.",
        ],
      },
      {
        heading: "MCP-Server — KI-Agenten mit Ihren Daten arbeiten lassen",
        paragraphs: [
          "RoomAlyzer ist auch als MCP-Server (Model Context Protocol) verfügbar — der aufkommende Standard, um KI-Assistenten und Agenten mit externen Datenquellen zu verbinden. Mit einem MCP-Schlüssel können KI-Agenten Ihre Raumklimadaten direkt in natürlicher Sprache abfragen. Fragen Sie z. B. „Welche Räume hatten diese Woche die höchsten CO2-Werte?“ oder „Zeigen Sensoren Bedingungen außerhalb der Sommerschwellen?“ und erhalten strukturierte, mandantenspezifische Antworten.",
          "Der MCP-Server ist unter mcp.roomalyzer.com/sse erreichbar und authentifiziert mit einem Bearer-Schlüssel. Schlüssel werden im RoomAlyzer-Adminbereich verwaltet und an Ihren Mandanten gebunden — Ihre Daten vermischen sich nie mit denen eines anderen Kunden. RoomAlyzer wird so zu einer natürlichen Datenquelle für KI-gestützte Facility-Berichte, automatisierte Compliance-Prüfungen und dialogbasierte Gebäude-Assistenten.",
        ],
      },
      {
        heading: "Erste Schritte",
        paragraphs: [
          "Beide Integrationstypen werden im Bereich Administration in RoomAlyzer verwaltet:",
        ],
        list: [
          "API-Schlüssel: REST-API-Schlüssel unter Administration → API Keys erstellen und verwalten. Scopes steuern genau, welche Daten der Schlüssel lesen darf.",
          "MCP-Schlüssel: KI-Agenten-Schlüssel unter Administration → MCP Keys erstellen und verwalten. Der Schlüssel wird einmalig bei der Erstellung angezeigt.",
        ],
      },
      {
        paragraphs: [
          "Die vollständige API-Dokumentation inklusive Request-/Response-Beispielen und Schemadefinitionen ist jederzeit unter v2.roomalyzer.com/api/docs/public verfügbar. Fragen zu API-Zugang, individuellen Integrationen oder Enterprise-Datenpipelines: info@iot-fabrikken.com.",
        ],
      },
    ],
  },
};

const sv: Record<string, PlatformContentOverlay> = {
  "how-it-works": {
    heroTitle: "Så fungerar RoomAlyzer.",
    heroTitleAccent: "En komplett byggnadsövervakningslösning som fungerar från dag ett.",
    heroLead:
      "RoomAlyzer är en trådlös byggnadsövervakningslösning för inomhusklimat, space management och vattendetektering. Den är byggd för att vara enkel: när ni beställer en av våra lösningar (RoomAlyzer Air, RoomAlyzer Space eller RoomAlyzer Water), får ni allt ni behöver i ett paket, redo att använda. Så här fungerar det, från beställning till data på skärmen.",
    sections: [
      {
        heading: "Allt i en komplett lösning",
        paragraphs: [
          "Oavsett vad ni väljer får ni alltid en komplett, färdig lösning med allt ni behöver: trådlösa sensorer med inbyggd uppkoppling som fungerar direkt ur förpackningen, och RoomAlyzer-programvaran där er data blir tydliga analyser, prognoser och konkreta rekommendationer. Inget att montera och inget att konfigurera. Ni placerar sensorerna och datan börjar komma in.",
        ],
      },
      {
        heading: "En instrumentpanel för all er data, på webb och mobil",
        paragraphs: [
          "Ni får både en mobilapp och en utökad webbapp, så ni kan samla all data i en instrumentpanel och alltid ha en tydlig översikt. Det spelar ingen roll hur ni sätter ihop ert sensorpaket, eller hur många rum, byggnader och platser ni använder RoomAlyzer på — allt samlas i en enda, enkel översikt.",
        ],
      },
      {
        heading: "Vi sätter igång er — och stannar kvar",
        paragraphs: [
          "Vi håller alltid ett online kick-off-möte med er, så ni och era kollegor får en ordentlig genomgång av hur appen fungerar och en tydlig bild av vad den kan göra. Därefter finns online-support alltid tillgänglig för allt — var ni än befinner er.",
        ],
      },
      {
        heading: "Utvecklad i Danmark, tillsammans med dem som använder den",
        paragraphs: [
          "Vi utvecklar vår programvara själva, här i Danmark, och gör det tillsammans med de många användare vi arbetar med: facility managers, space planners, driftpersonal, ingenjörer, energirådgivare och konservatorer i kommuner, företag, museer, kyrkor och bostadsföreningar. De har berättat hur den måste fungera för att passa deras arbete — och den kunskapen är inbyggd i programvara som är genuint enkel att använda.",
        ],
      },
      {
        heading: "Enkel facility management-programvara, även om IT inte är ert område",
        paragraphs: [
          "De flesta har kämpat med ett IT-system som tar veckor att lära sig. RoomAlyzer är annorlunda. Där stora, komplexa system kräver lång utbildning är vårt känt för att vara enkelt. Det är byggt så att ni snabbt och lätt hittar exakt den data ni behöver i en hektisk arbetsdag. Systemet är intuitivt och hjälper er få er data i den form som är mest meningsfull just nu — rådata, rapporter, analyser, grafer eller en API-vidarebefordran. Ni kan hämta data själva, få den levererad till inkorgen eller be systemet skicka den vidare till andra utan att lyfta ett finger. Ni behöver inte veta mycket om IT-system, och vi bygger med tydligt fokus på att människor i drift, facility management och bevarande har ont om tid.",
        ],
      },
      {
        heading: "Säkert by design: inget Wi-Fi, EU-baserad hosting",
        paragraphs: [
          "Er data är säker by design. RoomAlyzer rör aldrig ert Wi-Fi, så er data färdas helt separat från allt känsligt eller konfidentiellt i ert eget nätverk, och allt lagras i molnet med EU-baserad hosting.",
        ],
      },
    ],
  },
  architecture: {
    heroTitle: "Arkitektur.",
    heroTitleAccent: "Skalbar, säker, europeisk.",
    heroLead:
      "En multi-tenant SaaS byggd på EU-infrastruktur med tydlig separation mellan insamling, lagring och presentation.",
  },
  dashboards: {
    heroTitle: "Byggnadsinstrumentpaneler.",
    heroTitleAccent: "Er data, på ert sätt.",
    heroLead:
      "En bra instrumentpanel gör sensordata till något ni kan agera på med ett ögonkast. RoomAlyzer ger alla i organisationen den information de behöver, i den form de behöver den — från en personlig översikt på en laptop till en livevisning på väggen. Och ni sätter upp den själva, utan att involvera IT.",
    sections: [
      {
        heading: "Bygg den själva på några minuter",
        paragraphs: [
          "Det finns inget fast layout. Ni väljer vad som ska visas och hur, med fem enkla widgettyper — ett stort KPI-tal, en liveavläsning, en graf, en topplista eller en heatmap. Att lägga till en är en guidad fyrstegsprocess utan utbildning, och layouten är drag-and-drop och sparas automatiskt under tiden.",
        ],
      },
      {
        heading: "Vad ni ser, per lösning",
        paragraphs: [
          "Varje lösning har sin egen färdiga driftsvy, så ni alltid vet var ni är:",
        ],
        list: [
          "RoomAlyzer Air: inomhusklimat: live temperatur, fukt och CO2 med sensoraktivitetsindikatorer som pulserar när avläsningar kommer in. En parallell bevaringsvy lägger till de bevaringsspecifika måtten (Preservation Index (PI/TWPI), mögelrisk, EN 15757-fluktuationer och Bizot Green) för museer, arkiv och kyrkor.",
          "RoomAlyzer Space: space management: se hur era skrivbord, rum och zoner verkligen används — live beläggning och heatmaps som avslöjar mönster över tid. Det är datan som visar var det finns ledig kapacitet, vilka mötesrum som står tomma och var det finns ett fritt skrivbord just nu.",
          "RoomAlyzer Water: vattendetektering: en operativ cockpit med aktiva larm, tysta sensorer och hela er sensorflottas hälsa i realtid, uppdaterad automatiskt varje par sekunder — så ett läckage aldrig missas.",
          "Det finns också en energivy, där spill visas i DKK och CO2 och effektivitet bryts ned per plats.",
        ],
      },
      {
        heading: "Instrumentpaneler för er — och instrumentpaneler för alla",
        paragraphs: [
          "Det finns två sätt att använda en instrumentpanel, och ni bestämmer vilket som är vilket.",
          "För er och ert team: bygg så många instrumentpaneler ni vill för olika roller (en ledningsöversikt, teknisk övervakning, en avdelningsvy) och växla mellan dem på sekunder. Data är alltid avgränsad till er organisation och respekterar varje användares åtkomst, så alla ser exakt det de ska, och inget de inte ska.",
          "För alla i byggnaden: vilken instrumentpanel eller live planritning som helst kan delas på en väggskärm via en lösenordsskyddad länk — ingen inloggning, bara en URL och ett lösenord. Visa kollegor och besökare hur full kantinen är, var det finns ett fritt skrivbord när de passerar receptionen, eller vilka mötesrum som är lediga, så de kan ordna sig med ett ögonkast.",
          "Och avgörande: ni väljer vad som visas på en offentlig skärm. Kanske är spacedata något ni gärna delar, medan inomhusklimatdata är något ni hellre behåller i driftsteamet. Ni kan köra flera skärmar från samma byggnad, var och en med eget lösenord — så lobby och driftscenter visar olika vyer.",
        ],
      },
    ],
  },
  reports: {
    heroTitle: "Rapporter.",
    heroTitleAccent: "Från rådata till tydlig, användbar insikt.",
    heroLead:
      "RoomAlyzer omvandlar er kontinuerliga sensordata till tydliga, strukturerade rapporter, levererade automatiskt till rätt personer, i rätt format, vid rätt tidpunkt. Oavsett om ni behöver en återkommande teambriefing, compliance-dokumentation eller ett dataset för er egen analys hanterar plattformen det utan manuellt arbete. Och om ni behöver skicka rapporter med konkreta rekommendationer till många användare på många platser kan vi hjälpa till med det också — en särskild rapporttyp som kombinerar vår inomhusklimatkompetens med AI för att berätta för varje plats, på klart språk, vad de ska göra för att spara energi och hålla klimatet rätt.",
    sections: [
      {
        heading: "Schemalagda rapporter, direkt till inkorgen",
        paragraphs: [
          "Håll ert team informerat utan att någon behöver logga in. Inomhusklimatrapporter körs automatiskt dagligen, veckovis eller månadsvis och landar direkt i e-posten. Varje rapport kan täcka en sensor eller en hel plats, med så många mottagare ni vill, och ni kan alltid skicka ett test först för att kontrollera innehåll och format.",
          "För en rikare, mer visuell briefing kan RoomAlyzer också skicka schemalagda grafrapporter — en PDF-ögonblicksbild av upp till fem sensorer med era valda parametrar och tidsfönster (från de senaste 24 timmarna till det senaste året). Ni kan lägga utomhusväder ovanpå och lägga till en AI-genererad analys av trenderna. Frekvens och mottagare kan ändras när som helst utan att bygga om rapporten.",
        ],
      },
      {
        heading: "Compliance-dokumentation, redo att lämnas in",
        paragraphs: [
          "Många facility managers har blivit ombedda av ledningen att dokumentera inomhusklimatet, ofta till följd av EU-direktiv. RoomAlyzer producerar den dokumentationen åt er — direkt från er live sensordata, utan manuell datainsamling och utan kalkylark.",
          "För DGNB-certifiering (SOC1.1 / SOC1.2, EN 16798-1) guidar en enkel guide er: välj period och arbetstid, välj sensorer, välj rätt trösklar (DGNB 2020 eller 2023, byggnadstyp och ventilationstyp), och generera en professionell PDF med diagram, statistik och planritningsoverlays. För byggnader under Energy Performance of Buildings Directive (EPBD 2024, EN 16798-1) skapar RoomAlyzer en fullständig compliance-rapport på begäran — med gap-analys, compliance-procent per parameter, en energiöversikt och regelbaserade rekommendationer för förbättring. Ni inkluderar exakt de avsnitt som är relevanta, och en nedladdningshistorik håller era tidigare rapporter tillgängliga. Om ni är osäkra på vilken standard som gäller för er hjälper vi gärna.",
        ],
      },
      {
        heading: "Exportera er data för egen analys",
        paragraphs: [
          "När ni vill arbeta med de råa siffrorna i egna verktyg finns all sensordata tillgänglig som CSV-nedladdning. Välj sensorer, parametrar och datumintervall och få ett komplett dataset — temperatur, fukt, CO2, VOC, ljud, ljus, närvaro, batterinivå, signalstyrka, daggpunkt, absolut fukt och utomhusväder.",
        ],
      },
    ],
  },
  notifications: {
    heroTitle: "Aviseringar.",
    heroTitleAccent: "Veta när något är fel.",
    heroLead:
      "Hela poängen med övervakning är att fånga ett problem innan det blir en katastrof. RoomAlyzer skickar er ett omedelbart e-postmeddelande eller SMS när något är fel, var ni än är, och var byggnaden än står. Så om en avfuktare slutar fungera i ett förråd på andra sidan landet och fuktigheten börjar stiga får ni veta det i tid att åka ut och agera, i stället för att upptäcka skadan veckor senare.",
    sections: [
      {
        heading: "RoomAlyzer Air: larm för inomhusklimat och bevarande",
        paragraphs: [
          "Få ett larm när temperatur, fukt, CO2 eller mögelrisk rör sig utanför det intervall ni satt. För ett upptaget kontor eller en skola kan det innebära att agera på dålig luftkvalitet innan klagomålen kommer. För ett museum, en kyrka eller ett arkiv kan det innebära att skydda oersättliga föremål — fånga en trasig avfuktare eller ett fuktväxling innan det skadar trä, målningar eller papper. Ni bestämmer gränserna, och RoomAlyzer övervakar dem dygnet runt.",
        ],
      },
      {
        heading: "RoomAlyzer Water: läckagelarm direkt till rätt person",
        paragraphs: [
          "När vatten detekteras skickar RoomAlyzer ett meddelande direkt till e-post eller SMS. Inte ett larm som piper i en tom källare, utan en avisering som når en person som kan agera. Ni kan lägga till så många mottagare ni behöver, så både drift och säkerhet informeras på en gång, och ett läckage i en schakt, ett elskåp eller en bostadsförening fångas medan det fortfarande är litet.",
        ],
      },
      {
        heading: "Aldrig tagen på sängen: batteri och sensorhälsa",
        paragraphs: [
          "Ni ska aldrig stå blinda för att en sensor tyst slutat fungera. RoomAlyzer varnar er i god tid innan ett batteri tar slut, inte efteråt, så ni kan planera ett byte lugnt i stället för att upptäcka ett hål i er data i efterhand.",
          "Ni kan också prenumerera på en sensorhälsosammanfattning (dagligen, veckovis eller månadsvis) som bara listar sensorer med problem, till exempel de som blivit tysta eller har lågt batteri. Inget skickas när allt är fint, så när ett e-postmeddelande kommer vet ni att något behöver uppmärksamhet.",
        ],
      },
      {
        heading: "Finjusterat för att undvika falsklarm",
        paragraphs: [
          "Larm sätts per sensor och parameter, och ni kan justera hur känsliga de är (hur många avläsningar i rad som måste ligga utanför intervallet innan ett larm skickas), så att en kort, ofarlig topp inte utlöser ett falsklarm. Temperatur, fukt, CO2, VOC, ljud, ljus, närvaro och mögelrisk stöds alla, och varje larm kan testas för sig för att bekräfta att det når er innan det går live.",
        ],
      },
    ],
  },
  "maps-floorplans": {
    heroTitle: "Kartor och planritningar.",
    heroTitleAccent: "Se er byggnad med ett ögonkast.",
    heroLead:
      "Ladda upp planritningar och placera sensorer på dem. Livevärden och larm färgar rummen när de ändras.",
  },
  "mobile-tv": {
    heroTitle: "Mobil- och TV-vyer.",
    heroTitleAccent: "Rätt data på rätt skärm.",
    heroLead:
      "En responsiv mobilapp för facility-teamet och helskärms-TV-instrumentpaneler för lobbyer och kontrollrum.",
  },
  "ai-analytics": {
    heroTitle: "AI och analys.",
    heroTitleAccent: "Mönster ni annars skulle missa.",
    heroLead:
      "Anomalidetektering, prediktiva larm och frågor på naturligt språk över hela er sensorhistorik.",
  },
  security: {
    heroTitle: "Säkerhet.",
    heroTitleAccent: "Inget Wi-Fi, EU-baserad hosting, full kryptering.",
    heroLead:
      "Datasäkerhet ska inte vara något ni behöver oroa er för. RoomAlyzer är en multi-tenant-plattform som används av kunder i många länder och branscher, och den är byggd så att säkerhet är en del av designen från start — ingen kan nå data som inte är deras, och er organisation vet alltid exakt vem som har åtkomst till vad. Så fungerar det, och därför gör det er egen riskbedömning enklare.",
    sections: [
      {
        heading: "25 års erfarenhet av säkra onlinelösningar",
        paragraphs: [
          "Säkerhet är inte nytt för oss. IoT Fabrikkens lösningar byggs av människor med mer än 25 års erfarenhet av säkra onlinesystem — från onlinebetalningslösningar till dataloggning som säkrar livsmedelssäkerhet. Den grunden ger oss djup, praktisk kunskap om hur data transporteras och lagras säkert, och vi håller våra lösningar uppdaterade med de senaste säkerhetsstandarderna. Det är också därför vi följer strikta regler så att en sak alltid gäller: ni äger er data, hela tiden, och ingen annan gör det.",
        ],
      },
      {
        heading: "Vi rör aldrig ert Wi-Fi",
        paragraphs: [
          "Vi har två typer av sensorer: vissa har ett inbyggt NB-IoT SIM-kort, och andra skickar sin data till en Cloud Connector som vidarebefordrar den till er app via sitt eget SIM-kort. Hur som helst färdas datan över ett dedikerat mobilnät — aldrig över ert Wi-Fi. Det betyder att era mätningar rör sig helt separat från allt känsligt eller konfidentiellt i ert eget nätverk, och ni undviker att ge ett externt system åtkomst till er IT-miljö.",
        ],
      },
      {
        heading: "End-to-end-kryptering och EU-baserad hosting",
        paragraphs: [
          "All data skyddas med full end-to-end-kryptering (AES-128), och allt lagras i molnet med 100 % EU-baserad hosting. Ni behåller fullt ägande av er data och vet alltid var den förvaras. Utöver detta tillämpar vi standard produktionshärdning — krypterad trafik (HTTPS/HSTS), skydd mot brute force-inloggningsförsök och inga credentials exponeras någonsin i webbläsaren.",
        ],
      },
      {
        heading: "Inloggning ni kan lita på, med valfri tvåfaktorsautentisering",
        paragraphs: [
          "Varje användare loggar in via Firebase Authentication, Googles enterprise-identitetsplattform. RoomAlyzer lagrar aldrig era lösenord själv — inloggning, återställning av lösenord och kontåterställning hanteras alla av Firebase. För organisationer som vill ha ett extra säkerhetslager finns tvåfaktorsautentisering tillgänglig (samma sexsiffriga kodstandard som banker använder), och ni kan göra den obligatorisk för alla i organisationen från säkerhetsinställningarna.",
        ],
      },
      {
        heading: "Rätt åtkomst för varje roll",
        paragraphs: [
          "Inte alla behöver samma åtkomst, så RoomAlyzer använder tydliga, rollbaserade behörigheter: viewers kan se data men inte ändra dem, managers har bred operativ åtkomst, och administratörer kan hantera användare och säkerhetsinställningar — endast inom sin egen organisation. Viktigt är att varje behörighet kontrolleras på servern vid varje förfrågan. Att dölja en knapp i gränssnittet räcker aldrig ensamt; servern bekräftar oberoende att ni får göra något innan data visas eller ändras.",
        ],
      },
      {
        heading: "Åtkomst ända ner till enskild plats",
        paragraphs: [
          "Inom er organisation kan åtkomsten begränsas ytterligare. En användare kan begränsas till specifika byggnader eller rum, så de bara ser de sensorer, instrumentpaneler och larm de är avsedda för. Det gör det enkelt att ge ett facility-team åtkomst till sin egen flygel utan att exponera resten av byggnaden, eller att ge en extern entreprenör en skrivskyddad vy av en våning — verkställd både i gränssnittet och på servern.",
        ],
      },
      {
        heading: "Er data förblir er: strikt tenant-isolering",
        paragraphs: [
          "Alla kunder delar samma plattform, men deras data är helt separata. Varje förfrågan är kopplad till er egen organisation, löst från verifierade server-side credentials — aldrig från något webbläsaren kunde ändra. Detsamma gäller integrationer: en API-nyckel är permanent bunden till en organisation och kan inte nå en annans data, även om ett annat ID skickas med i förfrågan. (Mer om API-nycklar på vår API-sida.)",
        ],
      },
      {
        heading: "En fullständig revisionsspår",
        paragraphs: [
          "Varje ändring av åtkomst registreras. När en användare läggs till eller tas bort, en roll ändras, eller ett konto skapas eller raderas, skrivs en post som inte kan ändras — med vem som gjorde det, mot vem, vad som ändrades och när. Administratörer kan granska hela åtkomsthistoriken för varje användare, vilket gör intern compliance enkelt och besvarar frågan alla till slut ställer: vem hade åtkomst till vad, och när ändrades det?",
        ],
      },
      {
        heading: "Enklare GDPR- och NIS2-bedömning",
        paragraphs: [
          "Eftersom RoomAlyzer bara registrerar tekniska mätdata (utan personligt identifierbar information) och kombinerar det med inget Wi-Fi-beroende, EU-baserad hosting och full kryptering, gör det er egen GDPR- och NIS2-bedömning betydligt enklare. Ni får robust dataskydd och en tydlig, försvarbar uppsättning utan den vanliga komplexiteten.",
        ],
      },
    ],
  },
  api: {
    heroTitle: "API.",
    heroTitleAccent: "Koppla era system till RoomAlyzer.",
    heroLead:
      "Er data är er att använda. RoomAlyzer levereras med ett väldokumenterat, öppet API, så er IoT-sensordata kan flöda direkt in i era egna arbetsflöden, instrumentpaneler och AI-verktyg. De flesta kunder använder helt enkelt RoomAlyzer-programvaran som den är — men när ni vill koppla den till egna system finns det två enkla sätt: ett REST API för utvecklare och system, och en MCP-server för AI-agenter.",
    sections: [
      {
        heading: "REST API: realtids-IoT-data inom räckhåll",
        paragraphs: [
          "RoomAlyzer REST API ger er programmatisk åtkomst till live och historisk sensordata över hela ert sensornätverk. Oavsett om ni bygger en anpassad instrumentpanel, matar in data i ett BI-verktyg eller automatiserar beslut baserade på klimatförhållanden täcker API:et era behov.",
        ],
        listIntro: "Vad ni kan komma åt:",
        list: [
          "Inomhusklimat — liveavläsningar och historisk data för temperatur, fukt, CO2 och mer. Hämta tröskelgränser per sensor och avvikelsesammanfattningar för att se hur ofta förhållanden faller utanför acceptabla intervall.",
          "Bevarande: byggnadsnivådata för Preservation Index (PI/TWPI), mögelrisk (VTT), EN 15757-fluktuationer och bevaringsuppvärmning. Idealiskt för museer, arkiv och kulturarvsinstitutioner.",
          "Vattendetektering — aktiva larm, larmhistorik och sensorflottstatus för ert vattenläckageövervakningsnätverk.",
          "Space management — månatliga beläggningsheatmaps för att analysera hur era utrymmen faktiskt används.",
          "Tryckknappar — köstatus, hanterad historik och svarsstatistik för service- och larmlknappar.",
        ],
      },
      {
        paragraphs: [
          "Autentisering är enkel: varje tenant får en dedikerad API-nyckel som avgränsar åtkomst till endast deras egna data — ingen cross-tenant-åtkomst. Alla offentliga endpoints dokumenteras i en ren, interaktiv API-referens på v2.roomalyzer.com/api/docs/public, utan inloggning.",
        ],
      },
      {
        heading: "MCP server: låt AI-agenter arbeta med er data",
        paragraphs: [
          "RoomAlyzer finns också som en MCP (Model Context Protocol)-server — den framväxande standarden för att koppla AI-assistenter och agenter till externa datakällor. Med en MCP-nyckel kan AI-agenter fråga er inomhusklimatdata direkt på naturligt språk. Ställ frågor som \"Vilka rum har haft de högsta CO2-nivåerna den här veckan?\" eller \"Visar några sensorer förhållanden utanför sommartrösklarna?\" och få strukturerade, tenant-avgränsade svar.",
          "MCP-servern finns på mcp.roomalyzer.com/sse och autentiserar med en Bearer-nyckel. Nycklar hanteras från RoomAlyzer-adminpanelen och är kopplade till er tenant, så er data blandas aldrig med en annan kunds. Det gör RoomAlyzer till en naturlig datakälla för AI-drivna facility-rapporter, automatiserade compliance-kontroller och konversationsbaserade byggnadsstyrningsassistenter.",
        ],
      },
      {
        heading: "Kom igång",
        paragraphs: [
          "Båda integrationstyperna hanteras från Administration-sektionen i RoomAlyzer:",
        ],
        list: [
          "API-nycklar — skapa och hantera REST API-nycklar under Administration → API Keys. Scopes styr exakt vilken data nyckeln kan läsa.",
          "MCP-nycklar — skapa och hantera AI-agentnycklar under Administration → MCP Keys. Nyckeln visas en gång vid skapandet.",
        ],
      },
      {
        paragraphs: [
          "Fullständig API-dokumentation, inklusive request/response-exempel och schemadefinitioner, finns alltid på v2.roomalyzer.com/api/docs/public. Frågor om API-åtkomst, anpassade integrationer eller enterprise-datapipelines: kontakta oss på info@iot-fabrikken.com.",
        ],
      },
    ],
  },
};

export const platformContentI18n: Partial<
  Record<Lang, Record<string, PlatformContentOverlay>>
> = { da, de, sv };