import { Provider, BlogPost } from "@/types";

export const mockProviders: Provider[] = [
  {
    id: "1",
    name: "AVL List GmbH",
    slug: "avl-list",
    description:
      "AVL ist das weltweit größte unabhängige Unternehmen für die Entwicklung, Simulation und das Testen von Antriebssystemen. Mit KI-gestützten Lösungen optimieren wir Entwicklungsprozesse für die Mobilität der Zukunft.",
    short_description: "Weltmarktführer in KI-gestützter Antriebssystementwicklung",
    website: "https://www.avl.com",
    email: "ki@avl.com",
    categories: ["KI-Entwicklung", "Machine Learning", "Datenanalyse"],
    tags: ["Automotive", "Simulation", "F&E"],
    verified: true,
    featured: true,
    rating: 4.8,
    review_count: 24,
    created_at: "2024-01-01",
  },
  {
    id: "2",
    name: "Anton Paar GmbH",
    slug: "anton-paar",
    description:
      "Anton Paar entwickelt und produziert hochpräzise Labor- und Prozessmesstechnik sowie Rheometer. Unsere KI-Lösungen automatisieren Messprozesse und steigern die Qualitätssicherung in der Industrie.",
    short_description: "Präzisionsmesstechnik mit KI-gestützter Prozessoptimierung",
    website: "https://www.anton-paar.com",
    email: "ki@anton-paar.com",
    categories: ["Prozessautomatisierung", "Datenanalyse"],
    tags: ["Messtechnik", "Qualitätssicherung", "Labor"],
    verified: true,
    featured: true,
    rating: 4.7,
    review_count: 18,
    created_at: "2024-01-15",
  },
  {
    id: "3",
    name: "DataMind Graz",
    slug: "datamind-graz",
    description:
      "DataMind Graz ist ein spezialisiertes KI-Beratungsunternehmen, das KMUs in der Steiermark bei der digitalen Transformation unterstützt. Von der Strategie bis zur Implementierung – wir begleiten Sie auf Ihrem KI-Weg.",
    short_description: "KI-Beratung für KMUs in der Steiermark",
    website: "https://datamind-graz.at",
    email: "info@datamind-graz.at",
    phone: "+43 316 123 456",
    categories: ["KI-Beratung", "Machine Learning"],
    tags: ["KMU", "Beratung", "Digitalisierung"],
    verified: true,
    featured: false,
    rating: 4.9,
    review_count: 31,
    created_at: "2024-02-01",
  },
  {
    id: "4",
    name: "VisionAI Steiermark",
    slug: "visionai-steiermark",
    description:
      "Spezialisiert auf Computer Vision und Bildverarbeitung für die Industrie. Wir entwickeln maßgeschneiderte Lösungen für Qualitätskontrolle, Sicherheitssysteme und automatisierte Inspektion.",
    short_description: "Computer Vision & Bildverarbeitung für die Industrie",
    email: "office@visionai-stmk.at",
    categories: ["Computer Vision", "KI-Entwicklung"],
    tags: ["Bildverarbeitung", "Qualitätskontrolle", "Industrie"],
    verified: true,
    featured: false,
    rating: 4.6,
    review_count: 12,
    created_at: "2024-02-15",
  },
  {
    id: "5",
    name: "NLP Solutions Austria",
    slug: "nlp-solutions-austria",
    description:
      "Wir entwickeln intelligente Sprachverarbeitungslösungen für den deutschsprachigen Raum. Chatbots, Dokumentenanalyse und automatisierte Textverarbeitung – immer auf Deutsch optimiert.",
    short_description: "Deutsche NLP-Lösungen: Chatbots & Dokumentenanalyse",
    email: "kontakt@nlp-austria.at",
    website: "https://nlp-austria.at",
    categories: ["Natural Language Processing", "KI-Entwicklung"],
    tags: ["Chatbot", "Deutsch", "Dokumentenanalyse"],
    verified: true,
    featured: false,
    rating: 4.5,
    review_count: 9,
    created_at: "2024-03-01",
  },
  {
    id: "6",
    name: "AutomateGraz",
    slug: "automate-graz",
    description:
      "AutomateGraz hilft Unternehmen dabei, repetitive Geschäftsprozesse durch KI zu automatisieren. Von der Rechnungsverarbeitung bis zur Kundenkorrespondenz – wir sparen Ihnen Zeit und Kosten.",
    short_description: "KI-Prozessautomatisierung für Ihr Unternehmen",
    email: "hallo@automategraz.at",
    phone: "+43 316 789 012",
    categories: ["Prozessautomatisierung", "KI-Tools & Software"],
    tags: ["Automatisierung", "RPA", "Effizienz"],
    verified: false,
    featured: false,
    rating: 4.3,
    review_count: 7,
    created_at: "2024-03-15",
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Wie du deinen ersten KI-Chatbot für deine Website baust",
    slug: "ersten-ki-chatbot-website",
    excerpt:
      "Ein Schritt-für-Schritt-Guide für KMUs in der Steiermark, die KI-Chatbots ohne großes Budget einsetzen möchten.",
    content: `
<h2>Was ist ein KI-Chatbot und warum brauchen Sie einen?</h2>
<p>Ein KI-Chatbot kann rund um die Uhr Fragen Ihrer Kunden beantworten, Leads qualifizieren und einfache Anfragen automatisch bearbeiten. Für KMUs in der Steiermark bedeutet das: weniger manueller Aufwand, mehr Zeit für das Wesentliche.</p>
<h2>Schritt 1: Den richtigen Anbieter wählen</h2>
<p>Für den Einstieg empfehlen wir eine der folgenden Plattformen:</p>
<ul>
  <li><strong>Tidio</strong> – einfach zu bedienen, kostenlose Basisversion verfügbar</li>
  <li><strong>Chatbase</strong> – trainierbar auf Ihre eigenen Dokumente und FAQs</li>
  <li><strong>ManyChat</strong> – ideal für WhatsApp und Social-Media-Kanäle</li>
</ul>
<h2>Schritt 2: Inhalte definieren</h2>
<p>Bevor Sie loslegen, notieren Sie die 20 häufigsten Fragen Ihrer Kunden. Das ist die Grundlage für Ihren Chatbot. Typische Themen für ein Grazer KMU:</p>
<ul>
  <li>Öffnungszeiten und Standort</li>
  <li>Preise und Angebote</li>
  <li>Wie funktioniert die Bestellung oder das Buchungssystem?</li>
  <li>Rückgabe- und Reklamationsregelungen</li>
</ul>
<h2>Schritt 3: Den Chatbot einrichten</h2>
<p>Bei den meisten Plattformen binden Sie lediglich ein JavaScript-Snippet in Ihre Website ein. Bei WordPress-Seiten gibt es oft direkte Plugins. Der gesamte Einrichtungsprozess dauert ca. 2–4 Stunden.</p>
<h2>Schritt 4: Testen und verbessern</h2>
<p>Testen Sie Ihren Chatbot mindestens zwei Wochen lang intensiv. Welche Fragen kann er noch nicht beantworten? Fügen Sie diese schrittweise hinzu. Ein guter Chatbot wird mit der Zeit immer besser.</p>
<h2>Förderungsmöglichkeiten</h2>
<p>Wussten Sie, dass die Implementierung eines KI-Chatbots in vielen Fällen über österreichische Förderprogramme (FFG, AWS) bis zu 50 % gefördert werden kann? <a href="/contact" class="text-blue-600 hover:underline">Kontaktieren Sie uns</a> für eine kostenlose Förderberatung.</p>
<h2>Fazit</h2>
<p>Ein KI-Chatbot ist eine der kosteneffektivsten Möglichkeiten, KI in Ihrem Unternehmen einzusetzen. Mit den richtigen Tools und einer guten Vorbereitung können Sie innerhalb eines Tages live gehen.</p>
    `.trim(),
    author: "KI Graz Team",
    category: "Praxis-Guide",
    published_at: "2024-03-10",
    read_time: 8,
  },
  {
    id: "2",
    title: "75% Förderung für KI-Projekte: So beantragst du die Fördermittel",
    slug: "foerderung-ki-projekte-beantragen",
    excerpt:
      "Österreichische KMUs können bis zu 75% ihrer KI-Investitionen gefördert bekommen. Wir erklären wie.",
    content: `
<h2>Welche Förderungen gibt es für KI-Projekte in Österreich?</h2>
<p>Österreichische KMUs haben Zugang zu einer Vielzahl von Förderprogrammen. Die wichtigsten sind:</p>
<ul>
  <li><strong>FFG Basisprogramm</strong> – bis zu 55 % für Forschungs- und Entwicklungsprojekte</li>
  <li><strong>AWS Digitalisierungsbonus</strong> – bis zu 30 % für Digitalisierungsinvestitionen</li>
  <li><strong>SFG (Steirische Wirtschaftsförderung)</strong> – regionale Förderungen bis 40 %</li>
  <li><strong>EU Horizont Europa</strong> – bis zu 75 % für innovative KI-Projekte</li>
</ul>
<h2>Wer ist förderberechtigt?</h2>
<p>Grundvoraussetzungen für die meisten Programme:</p>
<ul>
  <li>Unternehmenssitz oder Betriebsstätte in Österreich</li>
  <li>Weniger als 250 Mitarbeiter (KMU-Definition der EU)</li>
  <li>Das Projekt muss innovativen Charakter haben</li>
  <li>Eigenanteil von mindestens 25–45 % je nach Programm</li>
</ul>
<h2>Schritt-für-Schritt: Der Förderantrag</h2>
<h3>1. Projektbeschreibung erstellen</h3>
<p>Beschreiben Sie Ihr KI-Projekt in max. 5 Seiten: Ausgangssituation, Ziele, Methodik, Zeitplan und Kosten.</p>
<h3>2. Den richtigen Fördertopf wählen</h3>
<p>Nutzen Sie den offiziellen Förderfinder der WKO oder kontaktieren Sie uns – wir helfen Ihnen kostenlos dabei, das passende Programm zu identifizieren.</p>
<h3>3. Antrag einreichen</h3>
<p>Die meisten Anträge werden online über die jeweiligen Portale (FFG eCall, AWS Förderportal) eingereicht. Beachten Sie die Deadlines!</p>
<h3>4. Wartezeit und Bewilligung</h3>
<p>Die Bearbeitungszeit beträgt je nach Programm 6–12 Wochen. Nach Bewilligung können Sie mit dem Projekt beginnen und die Kosten abrechnen.</p>
<h2>Häufige Fehler bei der Förderbeantragung</h2>
<ul>
  <li>Zu spät mit der Planung beginnen – mindestens 8 Wochen vor Projektstart einplanen</li>
  <li>Kosten zu grob schätzen – detaillierte Budgetplanung ist Pflicht</li>
  <li>Den innovativen Charakter nicht ausreichend herausarbeiten</li>
</ul>
<h2>Kostenlose Beratung durch KI Graz</h2>
<p>Unsere Förderexperten helfen Ihnen kostenlos dabei, die richtigen Programme zu identifizieren und den Antrag optimal aufzustellen. <a href="/contact" class="text-blue-600 hover:underline">Nehmen Sie einfach Kontakt auf.</a></p>
    `.trim(),
    author: "Förderexperte",
    category: "Förderungen",
    published_at: "2024-03-05",
    read_time: 6,
  },
  {
    id: "3",
    title: "KI in der steirischen Industrie: 5 Erfolgsgeschichten",
    slug: "ki-steirische-industrie-erfolgsgeschichten",
    excerpt:
      "Wie Grazer Unternehmen durch den Einsatz von KI ihre Produktivität um bis zu 40% steigern konnten.",
    content: `
<h2>KI verändert die steirische Wirtschaft – fünf Beispiele</h2>
<p>Die Steiermark ist eine der innovativsten Industrieregionen Österreichs. Immer mehr Unternehmen setzen erfolgreich KI ein – mit messbaren Ergebnissen.</p>
<h2>1. Maschinenbau: Predictive Maintenance spart 40 % Ausfallkosten</h2>
<p>Ein mittelständischer Maschinenbauer aus dem Großraum Graz hat KI-gestützte Wartungsvorhersage eingeführt. Sensordaten aus 80 Maschinen werden in Echtzeit analysiert. Ergebnis: ungeplante Stillstände sanken um 40 %, die Wartungskosten um 28 %.</p>
<h2>2. Handel: KI-Chatbot verdreifacht Conversion Rate</h2>
<p>Ein Grazer Online-Händler implementierte einen KI-Chatbot für Kaufberatung. Innerhalb von 6 Monaten stieg die Conversion Rate von 2,1 % auf 6,3 %. Der Chatbot beantwortet täglich über 300 Anfragen ohne menschlichen Eingriff.</p>
<h2>3. Gastronomie: Automatisierte Nachfrageprognosen</h2>
<p>Eine Restaurantkette mit 5 Standorten in Graz nutzt KI zur Vorhersage der täglichen Nachfrage. Lebensmittelabfall wurde um 35 % reduziert, die Personalplanung ist deutlich effizienter geworden. Jährliche Einsparung: ca. 80.000 Euro.</p>
<h2>4. Gesundheitswesen: KI unterstützt die Diagnose</h2>
<p>Ein Grazer Medizintechnikunternehmen entwickelte eine KI-Lösung zur Bildanalyse in der Radiologie. Das System unterstützt Radiologen bei der Befundung und reduziert die Durchlaufzeit um 60 %. Die Lösung ist mittlerweile in mehreren steirischen Krankenhäusern im Einsatz.</p>
<h2>5. Logistik: Routenoptimierung mit Machine Learning</h2>
<p>Ein Logistikunternehmen aus der Steiermark setzt Machine Learning für die Routenoptimierung seiner 120 Fahrzeuge ein. Kraftstoffverbrauch sank um 18 %, pünktliche Lieferungen stiegen auf 97 %. Die KI-Lösung amortisierte sich innerhalb von 14 Monaten vollständig.</p>
<h2>Was diese Erfolgsgeschichten gemeinsam haben</h2>
<p>In allen Fällen war der Erfolg das Ergebnis von klarer Zielsetzung, schrittweiser Implementierung und der Bereitschaft, Prozesse zu hinterfragen. KI ist kein Allheilmittel – aber ein mächtiges Werkzeug, wenn es richtig eingesetzt wird.</p>
<p>Möchten Sie Ihre eigene Erfolgsgeschichte schreiben? <a href="/contact" class="text-blue-600 hover:underline">Sprechen Sie mit uns</a> über die Möglichkeiten für Ihr Unternehmen.</p>
    `.trim(),
    author: "KI Graz Redaktion",
    category: "Erfolgsgeschichten",
    published_at: "2024-02-28",
    read_time: 10,
  },
  {
    id: "4",
    title: "Die 5 häufigsten KI-Fehler, die KMUs machen – und wie Sie sie vermeiden",
    slug: "ki-fehler-kmus-vermeiden",
    excerpt:
      "Viele Unternehmen scheitern bei der KI-Einführung an denselben Problemen. Diese fünf Fehler kosten am meisten Zeit und Geld.",
    content: `
<h2>Warum scheitern KI-Projekte?</h2>
<p>Laut einer Studie von McKinsey scheitern über 70 % aller KI-Projekte in Unternehmen – nicht wegen der Technologie, sondern wegen mangelhafter Planung und Umsetzung. Diese fünf Fehler sind die häufigsten.</p>
<h2>Fehler 1: Keine klaren Ziele definieren</h2>
<p>„Wir wollen KI einsetzen" ist kein Ziel. Ein Ziel ist: „Wir wollen die Bearbeitungszeit von Kundenanfragen um 50 % reduzieren." Ohne messbare Ziele wissen Sie nicht, ob Ihr Projekt erfolgreich war – und können keine richtigen Anbieter auswählen.</p>
<p><strong>Lösung:</strong> Definieren Sie vor dem Start konkrete KPIs (Key Performance Indicators) und legen Sie einen Basewert fest, gegen den Sie messen können.</p>
<h2>Fehler 2: Zu groß anfangen</h2>
<p>Viele Unternehmen wollen gleich die gesamte Prozesskette automatisieren. Das führt zu hohem Aufwand, langen Projektzeiträumen und oft zum Scheitern. Kleine, erfolgreiche Pilotprojekte bauen das nötige interne Wissen auf.</p>
<p><strong>Lösung:</strong> Beginnen Sie mit einem einzelnen Prozess oder einer klar abgegrenzten Aufgabe. Sammeln Sie Erfahrung, bevor Sie skalieren.</p>
<h2>Fehler 3: Datenqualität unterschätzen</h2>
<p>KI ist nur so gut wie die Daten, mit denen sie trainiert wird. Viele Unternehmen starten ein KI-Projekt und stellen erst dann fest, dass ihre Daten unvollständig, inkonsistent oder veraltet sind.</p>
<p><strong>Lösung:</strong> Führen Sie vor dem KI-Projekt ein Daten-Audit durch. Wie vollständig sind Ihre Daten? In welchem Format liegen sie vor? Sind sie aktuell?</p>
<h2>Fehler 4: Mitarbeiter nicht einbeziehen</h2>
<p>KI verändert Arbeitsprozesse. Wenn Mitarbeiter nicht frühzeitig eingebunden werden, entsteht Widerstand. Das beste KI-System nützt nichts, wenn es im Alltag nicht akzeptiert und genutzt wird.</p>
<p><strong>Lösung:</strong> Kommunizieren Sie offen über die geplante Einführung. Schulen Sie Ihre Mitarbeiter und zeigen Sie, wie KI ihre Arbeit erleichtert – nicht ersetzt.</p>
<h2>Fehler 5: Kein Budget für Betrieb und Wartung</h2>
<p>KI-Systeme müssen gewartet, aktualisiert und gelegentlich neu trainiert werden. Viele Unternehmen planen nur die Implementierungskosten – und sind dann überrascht, wenn laufende Kosten entstehen.</p>
<p><strong>Lösung:</strong> Kalkulieren Sie von Anfang an mindestens 20 % des Implementierungsbudgets als jährliches Wartungsbudget ein.</p>
<h2>Fazit</h2>
<p>Mit der richtigen Vorbereitung lassen sich diese Fehler vermeiden. KI Graz begleitet Sie von der Strategieentwicklung bis zur erfolgreichen Umsetzung. <a href="/contact" class="text-blue-600 hover:underline">Vereinbaren Sie ein kostenloses Erstgespräch.</a></p>
    `.trim(),
    author: "KI Graz Redaktion",
    category: "Praxis-Guide",
    published_at: "2024-04-02",
    read_time: 7,
  },
  {
    id: "5",
    title: "KI-Tools im Vergleich: ChatGPT, Copilot & Co. für Ihr Unternehmen",
    slug: "ki-tools-vergleich-chatgpt-copilot",
    excerpt:
      "Welches KI-Tool passt zu welchem Anwendungsfall? Ein praxisnaher Vergleich der wichtigsten Tools für österreichische KMUs.",
    content: `
<h2>Der KI-Tool-Dschungel</h2>
<p>ChatGPT, Microsoft Copilot, Google Gemini, Claude – die Auswahl an KI-Assistenten wächst täglich. Wir vergleichen die wichtigsten Tools anhand der Anforderungen österreichischer KMUs.</p>
<h2>ChatGPT (OpenAI)</h2>
<p><strong>Stärken:</strong> Sehr vielseitig, starke Texterstellung, Code-Generierung, breite API-Integration möglich.</p>
<p><strong>Schwächen:</strong> Datenschutz bei sensiblen Unternehmensdaten beachten; Kosten können bei intensiver Nutzung steigen.</p>
<p><strong>Am besten geeignet für:</strong> Texterstellung, Brainstorming, Kundenkommunikation, einfache Analysen.</p>
<p><strong>Preis:</strong> Kostenlose Basisversion; ChatGPT Plus ab ca. 20 €/Monat; API-Nutzung nach Verbrauch.</p>
<h2>Microsoft Copilot</h2>
<p><strong>Stärken:</strong> Tief in Microsoft 365 integriert (Word, Excel, Outlook, Teams). Ideal, wenn Sie bereits Microsoft-Produkte nutzen.</p>
<p><strong>Schwächen:</strong> Funktioniert am besten innerhalb des Microsoft-Ökosystems; weniger flexibel für andere Plattformen.</p>
<p><strong>Am besten geeignet für:</strong> Unternehmen mit Microsoft 365 – automatische E-Mail-Zusammenfassungen, Excel-Analysen, Meeting-Protokolle.</p>
<p><strong>Preis:</strong> Ab ca. 30 €/Nutzer/Monat als Add-on zu Microsoft 365.</p>
<h2>Google Gemini</h2>
<p><strong>Stärken:</strong> Starke Integration mit Google Workspace (Gmail, Docs, Drive). Multimodal – verarbeitet Text, Bilder und Daten.</p>
<p><strong>Schwächen:</strong> Abhängigkeit vom Google-Ökosystem; Datenschutz für EU-Unternehmen kritisch prüfen.</p>
<p><strong>Am besten geeignet für:</strong> Unternehmen, die intensiv Google Workspace nutzen.</p>
<p><strong>Preis:</strong> Kostenlos verfügbar; Gemini Advanced ab ca. 22 €/Monat.</p>
<h2>Lokale / On-Premise-Lösungen</h2>
<p>Für Unternehmen mit hohen Datenschutzanforderungen (z. B. Gesundheitswesen, Rechtsanwälte, Steuerberater) gibt es lokale KI-Modelle, die auf eigenen Servern betrieben werden. Diese sind aufwändiger einzurichten, aber DSGVO-konform ohne Cloud-Risiken.</p>
<h2>Unsere Empfehlung für den Einstieg</h2>
<p>Starten Sie mit dem Tool, das zu Ihrer bestehenden Infrastruktur passt. Microsoft-Nutzer sollten Copilot testen; alle anderen beginnen gut mit ChatGPT Plus. Wichtig: Legen Sie interne Richtlinien fest, welche Daten in KI-Tools eingegeben werden dürfen.</p>
<p>Haben Sie Fragen zur Auswahl des richtigen KI-Tools für Ihr Unternehmen? <a href="/contact" class="text-blue-600 hover:underline">Wir beraten Sie kostenlos.</a></p>
    `.trim(),
    author: "KI Graz Team",
    category: "KI-Tools",
    published_at: "2024-04-15",
    read_time: 9,
  },
  {
    id: "6",
    title: "Datenschutz und KI in Österreich: Der EU AI Act einfach erklärt",
    slug: "datenschutz-ki-eu-ai-act-oesterreich",
    excerpt:
      "Der EU AI Act ist in Kraft – was bedeutet das konkret für Ihr Unternehmen in Graz und der Steiermark?",
    content: `
<h2>Was ist der EU AI Act?</h2>
<p>Der EU AI Act (Verordnung über künstliche Intelligenz) ist das weltweit erste umfassende Gesetz zur Regulierung von KI. Er trat im August 2024 in Kraft und gilt für alle Unternehmen, die in der EU KI-Systeme einsetzen oder entwickeln – also auch für Sie.</p>
<h2>Das Risikoklassen-Modell</h2>
<p>Der AI Act teilt KI-Systeme in vier Risikoklassen ein:</p>
<ul>
  <li><strong>Inakzeptables Risiko (verboten):</strong> Soziales Scoring, manipulative KI, Gesichtserkennung im öffentlichen Raum (mit Ausnahmen). Diese Systeme sind komplett verboten.</li>
  <li><strong>Hohes Risiko:</strong> KI in kritischer Infrastruktur, Bildung, Personalentscheidungen, Kreditvergabe. Strenge Anforderungen an Transparenz, Dokumentation und menschliche Aufsicht.</li>
  <li><strong>Begrenztes Risiko:</strong> Chatbots, KI-generierte Inhalte. Transparenzpflicht: Nutzer müssen wissen, dass sie mit KI interagieren.</li>
  <li><strong>Minimales Risiko:</strong> Spamfilter, KI in Spielen. Keine besonderen Anforderungen.</li>
</ul>
<h2>Was bedeutet das konkret für KMUs?</h2>
<p>Die meisten KMUs in Graz betreiben KI im Bereich <strong>begrenztes oder minimales Risiko</strong>. Konkrete Pflichten:</p>
<ul>
  <li>Chatbots müssen als KI gekennzeichnet sein</li>
  <li>KI-generierte Texte und Bilder müssen entsprechend markiert werden</li>
  <li>Bei HR-Entscheidungen (z. B. Bewerbungsscreening) gelten strengere Regeln</li>
</ul>
<h2>Zeitplan der Umsetzung</h2>
<ul>
  <li><strong>Februar 2025:</strong> Verbotene KI-Praktiken gelten</li>
  <li><strong>August 2025:</strong> Regeln für allgemeine KI-Modelle (wie GPT) gelten</li>
  <li><strong>August 2026:</strong> Alle Hochrisiko-KI-Anforderungen vollständig in Kraft</li>
</ul>
<h2>Unser Rat</h2>
<p>Erstellen Sie eine einfache KI-Inventarliste: Welche KI-Tools nutzen Sie? In welche Risikoklasse fallen diese? In den meisten Fällen reicht eine transparente Kommunikation gegenüber Kunden und Mitarbeitern aus. Bei spezifischen Fragen – etwa zu KI im HR-Bereich – empfehlen wir rechtliche Beratung.</p>
<p><a href="/contact" class="text-blue-600 hover:underline">Sprechen Sie uns an</a>, wenn Sie Unterstützung bei der KI-Compliance benötigen.</p>
    `.trim(),
    author: "KI Graz Redaktion",
    category: "Datenschutz & Recht",
    published_at: "2024-05-10",
    read_time: 8,
  },
  {
    id: "7",
    title: "KI-Strategie in 5 Schritten: Von der Idee zur Umsetzung",
    slug: "ki-strategie-5-schritte",
    excerpt:
      "Wie entwickeln Sie eine realistische KI-Strategie für Ihr Unternehmen? Dieser praxisnahe Leitfaden zeigt den Weg.",
    content: `
<h2>Warum braucht Ihr Unternehmen eine KI-Strategie?</h2>
<p>Viele Unternehmen kaufen KI-Tools, ohne eine klare Strategie zu haben. Das Ergebnis: isolierte Einzellösungen, die sich nicht rechnen. Eine KI-Strategie sorgt dafür, dass jeder Euro investiert ist – nicht ausgegeben.</p>
<h2>Schritt 1: Den Ist-Zustand analysieren</h2>
<p>Bevor Sie in KI investieren, analysieren Sie Ihre aktuellen Prozesse:</p>
<ul>
  <li>Welche Tätigkeiten nehmen am meisten Zeit in Anspruch?</li>
  <li>Wo entstehen die meisten Fehler?</li>
  <li>Welche Daten sammeln Sie bereits?</li>
  <li>Wie digital sind Ihre Prozesse heute?</li>
</ul>
<p>Nutzen Sie dafür interne Workshops mit Mitarbeitern aus verschiedenen Abteilungen – sie kennen die Schmerzpunkte am besten.</p>
<h2>Schritt 2: Anwendungsfälle priorisieren</h2>
<p>Erstellen Sie eine Liste potenzieller KI-Anwendungsfälle und bewerten Sie diese nach zwei Kriterien:</p>
<ul>
  <li><strong>Wertpotenzial:</strong> Wie viel Zeit/Geld spart dieser Anwendungsfall?</li>
  <li><strong>Umsetzbarkeit:</strong> Wie einfach ist die technische Umsetzung?</li>
</ul>
<p>Beginnen Sie mit Anwendungsfällen, die hohes Wertpotenzial und einfache Umsetzbarkeit kombinieren.</p>
<h2>Schritt 3: Pilotprojekt auswählen und starten</h2>
<p>Wählen Sie einen einzigen Anwendungsfall für Ihr erstes KI-Pilotprojekt. Definieren Sie klare Erfolgskriterien und einen Zeitrahmen von 8–12 Wochen. Begrenzen Sie den Ressourceneinsatz – ein Pilotprojekt soll Erkenntnisse liefern, nicht das ganze Unternehmen transformieren.</p>
<h2>Schritt 4: Lernen, messen, anpassen</h2>
<p>Nach dem Pilotprojekt: Messen Sie die Ergebnisse gegen Ihre definierten KPIs. Was hat funktioniert? Was nicht? Dokumentieren Sie die Learnings für das nächste Projekt. Ein gescheitertes Pilotprojekt ist immer noch wertvoll – wenn Sie die richtigen Schlüsse ziehen.</p>
<h2>Schritt 5: Skalieren und ausweiten</h2>
<p>Wenn das Pilotprojekt erfolgreich war, rollen Sie die Lösung unternehmensweit aus. Gleichzeitig starten Sie das nächste Pilotprojekt für einen neuen Anwendungsfall. So entsteht schrittweise eine KI-kompetente Organisation.</p>
<h2>Unterstützung durch KI Graz</h2>
<p>Wir begleiten Grazer Unternehmen durch alle fünf Schritte – von der ersten Analyse bis zur Skalierung. <a href="/contact" class="text-blue-600 hover:underline">Vereinbaren Sie ein kostenloses Erstgespräch.</a></p>
    `.trim(),
    author: "KI Graz Team",
    category: "Strategie",
    published_at: "2024-05-28",
    read_time: 6,
  },
  {
    id: "8",
    title: "Welche Büroaufgaben eignen sich für KI-Automatisierung?",
    slug: "buro-aufgaben-ki-automatisierung",
    excerpt:
      "Nicht jede Aufgabe lässt sich sinnvoll automatisieren. Wir zeigen Ihnen, welche Tätigkeiten sich am meisten lohnen.",
    content: `
<h2>Das Automatisierungspotenzial im Büro</h2>
<p>Studien zeigen, dass Büromitarbeiter durchschnittlich 30–40 % ihrer Arbeitszeit mit repetitiven, regelbasierten Aufgaben verbringen. Genau hier kann KI-Automatisierung ansetzen.</p>
<h2>Aufgaben mit hohem Automatisierungspotenzial</h2>
<h3>E-Mail-Management</h3>
<p>KI kann eingehende E-Mails kategorisieren, priorisieren und Standardantworten vorschlagen. Für Unternehmen mit hohem E-Mail-Aufkommen (Support, Vertrieb) ist das besonders wertvoll. Tools: Microsoft Copilot, Superhuman, HubSpot AI.</p>
<h3>Dokumentenverarbeitung</h3>
<p>Rechnungen, Angebote, Verträge – KI kann diese automatisch auslesen, kategorisieren und in Ihre Systeme übertragen. Zeitersparnis: bis zu 80 % im Vergleich zur manuellen Bearbeitung.</p>
<h3>Terminplanung und Kalenderverwaltung</h3>
<p>KI-Assistenten können Termine koordinieren, Besprechungen vorbereiten und Protokolle automatisch erstellen. Microsoft Copilot und Google Gemini integrieren sich direkt in Outlook bzw. Google Calendar.</p>
<h3>Datenerfassung und Berichte</h3>
<p>Wiederkehrende Reports (Wochenbericht, Monatsabschluss, Vertriebsanalyse) lassen sich vollständig automatisieren, sobald die Datenquellen angebunden sind.</p>
<h3>Kundenanfragen und Support</h3>
<p>Standardanfragen (Öffnungszeiten, Status, FAQ) können zu 60–80 % automatisch beantwortet werden – durch Chatbots oder KI-gestützte E-Mail-Antworten.</p>
<h2>Aufgaben, die NICHT automatisiert werden sollten</h2>
<p>Nicht alles lässt sich sinnvoll automatisieren:</p>
<ul>
  <li>Komplexe Verhandlungen und Kundenbeziehungen</li>
  <li>Kreative Strategieentwicklung</li>
  <li>Empathische Kommunikation in Problemsituationen</li>
  <li>Entscheidungen mit hohem Risiko oder ethischen Implikationen</li>
</ul>
<h2>Wie Sie anfangen</h2>
<p>Beginnen Sie mit einer einfachen Analyse: Welche Aufgaben wiederholen sich täglich oder wöchentlich? Schätzen Sie den Zeitaufwand. Priorisieren Sie die drei zeitintensivsten, repetitiven Aufgaben – und suchen Sie für jede nach einer passenden KI-Lösung.</p>
<p>Benötigen Sie Unterstützung bei der Auswahl und Implementierung? <a href="/contact" class="text-blue-600 hover:underline">Kontaktieren Sie uns für eine kostenlose Erstberatung.</a></p>
    `.trim(),
    author: "KI Graz Redaktion",
    category: "Automatisierung",
    published_at: "2024-06-12",
    read_time: 5,
  },
];
