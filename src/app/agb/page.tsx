/**
 * Allgemeine Geschäftsbedingungen (AGB). Diese Vorlage bietet eine
 * grundlegende Struktur für AGB. Ergänze die Inhalte entsprechend deiner
 * rechtlichen Anforderungen und Produkte bzw. Dienstleistungen.
 */
export default function AgbPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Vorliegende AGB bilden den Rahmen für Verträge über Konzeption, Design, Entwicklung und ggf. Wartung von Websites, Web‑Anwendungen und sonstiger Softwareleistungen zwischen <strong>Aaron Hampe</strong> (Anbieter) und seinen Auftraggebern. Diese Fassung enthält Platzhalter und muss final rechtlich geprüft werden. {/* Kein Rechtsrat. */}
        </p>
      </header>

      <section className="space-y-4" aria-labelledby="geltungsbereich">
        <h2 id="geltungsbereich" className="text-2xl font-semibold">1. Geltungsbereich / Begriffe</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Diese AGB gelten ausschließlich gegenüber Unternehmern (§ 14 BGB), juristischen Personen des öffentlichen Rechts oder öffentlich‑rechtlichen Sondervermögen. Sofern Leistungen an Verbraucher erfolgen sollen, ist eine entsprechende Anpassung erforderlich. Abweichende AGB des Kunden finden keine Anwendung, es sei denn, der Anbieter stimmt schriftlich zu.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="vertrag">
        <h2 id="vertrag" className="text-2xl font-semibold">2. Vertragsschluss</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Anfrage des Kunden &rarr; individuelles Angebot des Anbieters &rarr; Annahme durch Bestätigung (E-Mail) oder Gegenzeichnung. Mündliche Nebenabreden werden erst wirksam, wenn sie schriftlich (Textform ausreichend) bestätigt sind. Angebote sind – sofern nicht anders angegeben – 14 Tage gültig.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="leistung">
        <h2 id="leistung" className="text-2xl font-semibold">3. Leistungsumfang / Mitwirkung</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li>Leistungsbeschreibung ergibt sich aus Angebot / Leistungsanhang / Pflichtenheft.</li>
          <li>Kunde stellt notwendige Inhalte (Texte, Bilder, Markenzeichen) fristgerecht, frei von Rechten Dritter bereit.</li>
          <li>Verzögerungen durch ausbleibende Mitwirkung verlängern Fristen angemessen; Mehraufwand kann berechnet werden.</li>
          <li>Technische Fremdleistungen (z. B. Hosting, Domains, Lizenzen) werden nur vermittelt, sofern ausdrücklich vereinbart.</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="change">
        <h2 id="change" className="text-2xl font-semibold">4. Change Requests</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Änderungs- oder Erweiterungswünsche nach Angebotsannahme werden als Change Request bewertet. Der Anbieter erstellt bei Aufwandserhöhung ein Nachtragsangebot; ohne Freigabe besteht keine Verpflichtung zur Umsetzung. Kleinere Korrekturen innerhalb der vereinbarten Revisionen sind abgegolten (Standard: {/* TODO: */} Revisionen inkl.).
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="vergütung">
        <h2 id="vergütung" className="text-2xl font-semibold">5. Vergütung / Zahlungsbedingungen</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li>Preise netto zzgl. gesetzlicher USt.</li>
          <li>Zahlungsplan (Beispiel): 40% Anzahlung bei Auftrag, 40% nach Fertigstellung Hauptfunktionen, 20% bei Abnahme. {/* TODO anpassen */}</li>
          <li>Zahlungsziel: {/* TODO z.B. 14 Tage netto */} ab Rechnungsdatum.</li>
          <li>Verzug: Verzugszinsen gem. § 288 BGB; Mahnkosten pauschal {/* TODO */} EUR.</li>
          <li>Aufrechnung nur mit unbestrittenen oder rechtskräftigen Forderungen.</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="abnahme">
        <h2 id="abnahme" className="text-2xl font-semibold">6. Abnahme</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Nach Fertigstellung wird eine Abnahmeversion bereitgestellt. Kunde prüft innerhalb von {/* TODO: z.B. 7 */} Werktagen und meldet dokumentierte Mängel. Erfolgt keine formale Abnahme innerhalb dieser Frist und liegt kein wesentlicher Mangel vor, gilt die Leistung als abgenommen (Abnahmefiktion). Unerhebliche Mängel berechtigen nicht zur Verweigerung der Abnahme.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="rechte">
        <h2 id="rechte" className="text-2xl font-semibold">7. Nutzungsrechte</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Mit vollständiger Zahlung erhält der Kunde ein einfaches, nicht exklusives, zeitlich und räumlich unbeschränktes Nutzungsrecht an den speziell entwickelten Arbeitsergebnissen für den im Vertrag definierten Zweck. Rechte an verwendeten Open‑Source‑Komponenten verbleiben beim jeweiligen Rechteinhaber und richten sich nach deren Lizenzen. Vor vollständiger Zahlung verbleiben sämtliche Rechte beim Anbieter. Eine Weiterlizenzierung oder Veräußerung an Dritte nur mit Zustimmung.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="opensource">
        <h2 id="opensource" className="text-2xl font-semibold">8. Open-Source / Drittsoftware</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Es können Open‑Source‑Bibliotheken (z. B. MIT, Apache 2.0, GPL) eingesetzt werden. Lizenztexte werden auf Anfrage bereitgestellt oder im Quellcode dokumentiert. Für Lizenzkonflikte durch nachträgliche Fremdänderungen des Kunden übernimmt der Anbieter keine Haftung.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="gewährleistung">
        <h2 id="gewährleistung" className="text-2xl font-semibold">9. Gewährleistung</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Es gilt das Werkvertragsrecht (§§ 631 ff. BGB), sofern individuelle Softwareentwicklung vorliegt. Mängel sind nachvollziehbar zu dokumentieren. Anspruch zunächst auf Nachbesserung; schlägt diese fehl, bestehen die gesetzlichen Rechte. Keine Gewähr bei unsachgemäßer Nutzung, Änderungen durch Dritte oder Fremd-Hosting-Konfigurationen außerhalb Einflussbereichs.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="haftung">
        <h2 id="haftung" className="text-2xl font-semibold">10. Haftung</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Haftung für Vorsatz und grobe Fahrlässigkeit uneingeschränkt. Bei einfacher Fahrlässigkeit nur für Schäden aus Verletzung des Lebens, Körpers oder Gesundheit sowie für Kardinalpflichten (Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht). In diesen Fällen ist die Haftung auf den typischen, vorhersehbaren Schaden begrenzt. Keine Haftung für entgangenen Gewinn, ausgebliebene Einsparungen, mittelbare oder Folgeschäden, es sei denn Vorsatz / grobe Fahrlässigkeit.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="vertraulichkeit">
        <h2 id="vertraulichkeit" className="text-2xl font-semibold">11. Vertraulichkeit / Referenzen</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Beide Parteien behandeln nicht offenkundige Informationen vertraulich. Der Anbieter darf den Namen / das Logo und eine neutrale Projektbeschreibung zu Referenzzwecken (Website, Pitch Deck, Portfolio) nutzen, sofern der Kunde nicht widerspricht. Geheimhaltungsvereinbarungen (NDAs) haben Vorrang.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="datenschutz">
        <h2 id="datenschutz" className="text-2xl font-semibold">12. Datenschutz</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Verarbeitung personenbezogener Daten erfolgt gemäß separat abrufbarer Datenschutzerklärung. Soweit der Anbieter als Auftragsverarbeiter handelt, wird ein separater Auftragsverarbeitungsvertrag (AVV) geschlossen. Kunde ist für Rechtmäßigkeit eigener Inhalte verantwortlich.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="laufzeit">
        <h2 id="laufzeit" className="text-2xl font-semibold">13. Laufzeit / Kündigung (Wartung)</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Für optionale Wartungs- oder Service-Level-Vereinbarungen (SLA) gilt – sofern vereinbart – eine anfängliche Laufzeit von {/* TODO */} Monaten mit automatischer Verlängerung um jeweils {/* TODO */} Monate, kündbar mit Frist von {/* TODO: z.B. 1 Monat */} zum Laufzeitende.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="schluß">
        <h2 id="schluß" className="text-2xl font-semibold">14. Schlussbestimmungen</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</li>
          <li>Gerichtsstand (sofern zulässig): {/* TODO: z.B. Sitz des Anbieters */}</li>
          <li>Änderungen / Ergänzungen bedürfen Textform. Individuelle Abreden gehen vor.</li>
          <li>Salvatorische Klausel: Unwirksame Bestimmungen werden durch wirksame ersetzt, die dem wirtschaftlichen Zweck am nächsten kommen.</li>
        </ul>
      </section>

      <footer className="pt-4 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
          Stand: {/* TODO Datum */} – Diese AGB sind eine unverbindliche Arbeitsgrundlage und müssen vor Produktiveinsatz rechtlich geprüft und angepasst werden.
        </p>
      </footer>
    </main>
  );
}