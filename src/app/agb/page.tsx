export const metadata = {
  title: "AGB – HAMPE",
};

export default function AgbPage() {
  const sections = [
    {
      id: "geltungsbereich",
      title: "1. Geltungsbereich / Begriffe",
      content: (
        <p>
          Diese AGB gelten ausschließlich gegenüber Unternehmern (§ 14 BGB), juristischen Personen des öffentlichen Rechts oder öffentlich‑rechtlichen Sondervermögen. Sofern Leistungen an Verbraucher erfolgen sollen, ist eine entsprechende Anpassung erforderlich. Abweichende AGB des Kunden finden keine Anwendung, es sei denn, der Anbieter stimmt schriftlich zu.
        </p>
      ),
    },
    {
      id: "vertrag",
      title: "2. Vertragsschluss",
      content: (
        <p>
          Anfrage des Kunden &rarr; individuelles Angebot des Anbieters &rarr; Annahme durch Bestätigung (E-Mail) oder Gegenzeichnung. Mündliche Nebenabreden werden erst wirksam, wenn sie schriftlich (Textform ausreichend) bestätigt sind. Angebote sind – sofern nicht anders angegeben – 14 Tage gültig.
        </p>
      ),
    },
    {
      id: "leistung",
      title: "3. Leistungsumfang / Mitwirkung",
      content: (
        <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
          <li>Leistungsbeschreibung ergibt sich aus Angebot / Leistungsanhang / Pflichtenheft.</li>
          <li>Kunde stellt notwendige Inhalte (Texte, Bilder, Markenzeichen) fristgerecht, frei von Rechten Dritter bereit.</li>
          <li>Verzögerungen durch ausbleibende Mitwirkung verlängern Fristen angemessen; Mehraufwand kann berechnet werden.</li>
          <li>Technische Fremdleistungen (z. B. Hosting, Domains, Lizenzen) werden nur vermittelt, sofern ausdrücklich vereinbart.</li>
        </ul>
      ),
    },
    {
      id: "change",
      title: "4. Change Requests",
      content: (
        <p>
          Änderungs- oder Erweiterungswünsche nach Angebotsannahme werden als Change Request bewertet. Der Anbieter erstellt bei Aufwandserhöhung ein Nachtragsangebot; ohne Freigabe besteht keine Verpflichtung zur Umsetzung. Kleinere Korrekturen innerhalb der vereinbarten Revisionen sind abgegolten (Standard: 2 Revisionen inkl.).
        </p>
      ),
    },
    {
      id: "vergütung",
      title: "5. Vergütung / Zahlungsbedingungen",
      content: (
        <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
          <li>Preise netto zzgl. gesetzlicher USt.</li>
          <li>Zahlungsplan (Beispiel): 40% Anzahlung bei Auftrag, 40% nach Fertigstellung Hauptfunktionen, 20% bei Abnahme.</li>
          <li>Zahlungsziel: 14 Tage netto ab Rechnungsdatum.</li>
          <li>Verzug: Verzugszinsen gem. § 288 BGB; Mahnkosten pauschal 40,00 EUR.</li>
          <li>Aufrechnung nur mit unbestrittenen oder rechtskräftigen Forderungen.</li>
        </ul>
      ),
    },
    {
      id: "abnahme",
      title: "6. Abnahme",
      content: (
        <p>
          Nach Fertigstellung wird eine Abnahmeversion bereitgestellt. Kunde prüft innerhalb von 7 Werktagen und meldet dokumentierte Mängel. Erfolgt keine formale Abnahme innerhalb dieser Frist und liegt kein wesentlicher Mangel vor, gilt die Leistung als abgenommen (Abnahmefiktion). Unerhebliche Mängel berechtigen nicht zur Verweigerung der Abnahme.
        </p>
      ),
    },
    {
      id: "rechte",
      title: "7. Nutzungsrechte",
      content: (
        <p>
          Mit vollständiger Zahlung erhält der Kunde ein einfaches, nicht exklusives, zeitlich und räumlich unbeschränktes Nutzungsrecht an den speziell entwickelten Arbeitsergebnissen für den im Vertrag definierten Zweck. Rechte an verwendeten Open‑Source‑Komponenten verbleiben beim jeweiligen Rechteinhaber und richten sich nach deren Lizenzen. Vor vollständiger Zahlung verbleiben sämtliche Rechte beim Anbieter. Eine Weiterlizenzierung oder Veräußerung an Dritte nur mit Zustimmung.
        </p>
      ),
    },
    {
      id: "opensource",
      title: "8. Open-Source / Drittsoftware",
      content: (
        <p>
          Es können Open‑Source‑Bibliotheken (z. B. MIT, Apache 2.0, GPL) eingesetzt werden. Lizenztexte werden auf Anfrage bereitgestellt oder im Quellcode dokumentiert. Für Lizenzkonflikte durch nachträgliche Fremdänderungen des Kunden übernimmt der Anbieter keine Haftung.
        </p>
      ),
    },
    {
      id: "gewährleistung",
      title: "9. Gewährleistung",
      content: (
        <p>
          Es gilt das Werkvertragsrecht (§§ 631 ff. BGB), sofern individuelle Softwareentwicklung vorliegt. Mängel sind nachvollziehbar zu dokumentieren. Anspruch zunächst auf Nachbesserung; schlägt diese fehl, bestehen die gesetzlichen Rechte. Keine Gewähr bei unsachgemäßer Nutzung, Änderungen durch Dritte oder Fremd-Hosting-Konfigurationen außerhalb Einflussbereichs.
        </p>
      ),
    },
    {
      id: "haftung",
      title: "10. Haftung",
      content: (
        <p>
          Haftung für Vorsatz und grobe Fahrlässigkeit uneingeschränkt. Bei einfacher Fahrlässigkeit nur für Schäden aus Verletzung des Lebens, Körpers oder Gesundheit sowie für Kardinalpflichten (Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht). In diesen Fällen ist die Haftung auf den typischen, vorhersehbaren Schaden begrenzt. Keine Haftung für entgangenen Gewinn, ausgebliebene Einsparungen, mittelbare oder Folgeschäden, es sei denn Vorsatz / grobe Fahrlässigkeit.
        </p>
      ),
    },
    {
      id: "vertraulichkeit",
      title: "11. Vertraulichkeit / Referenzen",
      content: (
        <p>
          Beide Parteien behandeln nicht offenkundige Informationen vertraulich. Der Anbieter darf den Namen / das Logo und eine neutrale Projektbeschreibung zu Referenzzwecken (Website, Pitch Deck, Portfolio) nutzen, sofern der Kunde nicht widerspricht. Geheimhaltungsvereinbarungen (NDAs) haben Vorrang.
        </p>
      ),
    },
    {
      id: "datenschutz",
      title: "12. Datenschutz",
      content: (
        <p>
          Verarbeitung personenbezogener Daten erfolgt gemäß separat abrufbarer Datenschutzerklärung. Soweit der Anbieter als Auftragsverarbeiter handelt, wird ein separater Auftragsverarbeitungsvertrag (AVV) geschlossen. Kunde ist für Rechtmäßigkeit eigener Inhalte verantwortlich.
        </p>
      ),
    },
    {
      id: "laufzeit",
      title: "13. Laufzeit / Kündigung (Wartung)",
      content: (
        <p>
          Für optionale Wartungs- oder Service-Level-Vereinbarungen (SLA) gilt – sofern vereinbart – eine anfängliche Laufzeit von 12 Monaten mit automatischer Verlängerung um jeweils 12 Monate, kündbar mit Frist von 3 Monaten zum Laufzeitende.
        </p>
      ),
    },
    {
      id: "schluß",
      title: "14. Schlussbestimmungen",
      content: (
        <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
          <li>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</li>
          <li>Gerichtsstand: Hannover</li>
          <li>Änderungen / Ergänzungen bedürfen Textform. Individuelle Abreden gehen vor.</li>
          <li>Salvatorische Klausel: Unwirksame Bestimmungen werden durch wirksame ersetzt, die dem wirtschaftlichen Zweck am nächsten kommen.</li>
        </ul>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500 pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase uppercase">
              AGB
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl leading-relaxed">
              Allgemeine Geschäftsbedingungen als Rahmen für <span className="font-serif italic text-zinc-800 dark:text-zinc-200">moderne Softwareprojekte.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Formatted like a Manifesto */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-16">
          
          {sections.map((section, idx) => (
             <div key={section.id} id={section.id} className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                  {section.title}
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {section.content}
                </div>
              </div>
            </div>
          ))}

          <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800 mt-24">
            <p className="text-xs text-zinc-500 font-semibold tracking-widest uppercase">
              Stand: 22.08.2025
            </p>
          </footer>
        </div>
      </section>
      
    </main>
  );
}