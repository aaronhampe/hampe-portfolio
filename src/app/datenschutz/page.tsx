/**
 * Datenschutz‑Erklärung. Diese Seite enthält generische Abschnitte zur
 * Erhebung und Verarbeitung personenbezogener Daten. Ergänze oder
 * ändere den Text entsprechend deinen tatsächlichen Prozessen und
 * rechtlichen Anforderungen.
 */
export default function DatenschutzPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Datenschutzerklärung</h1>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Diese Datenschutzerklärung informiert nach Art. 12 ff. DSGVO über Art, Umfang und Zwecke der Verarbeitung personenbezogener Daten auf dieser Website. Platzhalter müssen anhand der tatsächlich eingesetzten Dienste ergänzt werden. {/* Kein Rechtsrat. */}
        </p>
      </header>

      <section className="space-y-3" aria-labelledby="verantwortlicher">
        <h2 id="verantwortlicher" className="text-2xl font-semibold">1. Verantwortlicher</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Aaron Hampe<br /> 
          c/o MDC <br />
          Management #2005<br />
          Welserstraße 3<br />
          87463 Dietmannsried<br />
          Deutschland<br /> <br />
          <h3  className="text-xl font-semibold">Kontakt</h3>
          E-Mail: <a href="mailto:info@aaronhampe.de" className="underline decoration-dotted">info@aaronhampe.de</a> <br />
          Telefon: <a href="tel:+4915129574884" className="underline decoration-dotted">+49 151 29574884</a>
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="begriffe">
        <h2 id="begriffe" className="text-2xl font-semibold">2. Begriffe</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Begriffe wie &bdquo;personenbezogene Daten&ldquo;, &bdquo;Verarbeitung&ldquo;, &bdquo;Verantwortlicher&ldquo; und &bdquo;Auftragsverarbeiter&ldquo; entsprechen den Definitionen in Art. 4 DSGVO.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="rechtsgrundlagen">
        <h2 id="rechtsgrundlagen" className="text-2xl font-semibold">3. Rechtsgrundlagen</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Soweit unten nicht anders bezeichnet, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an stabiler, sicherer, nutzerfreundlicher Bereitstellung). Bei Kontaktaufnahme per Formular/E-Mail: Art. 6 Abs. 1 lit. b (vorvertragliche Maßnahmen / Vertrag). Bei Einholung von Einwilligungen (z. B. für Analyse / Marketing): Art. 6 Abs. 1 lit. a DSGVO (jederzeit widerrufbar).
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="datenarten">
        <h2 id="datenarten" className="text-2xl font-semibold">4. Kategorien verarbeiteter Daten</h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
          <li>Nutzungsdaten (Logfiles, IP-Adresse, Zeitstempel, User-Agent)</li>
          <li>Kontaktdaten (Name, E-Mail) bei Kontaktanfragen</li>
          <li>Inhaltsdaten der Anfrage (Freitext)</li>
          <li>Meta-/Kommunikationsdaten (Geräteinformationen, Browsertyp)</li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="hosting">
        <h2 id="hosting" className="text-2xl font-semibold">5. Hosting / Infrastruktur</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Diese Website wird über Vercel gehostet. Mit dem Hostinganbieter besteht ggf. ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Serverstandorte: {/* TODO */}. Übermittlungen in Drittländer nur unter geeigneten Garantien (Art. 46 DSGVO) oder auf Basis Angemessenheitsbeschluss.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="logfiles">
        <h2 id="logfiles" className="text-2xl font-semibold">6. Server-Logfiles</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Erhobene Daten: abgerufene URL, Datei/Resource, Datum/Uhrzeit, übertragene Datenmenge, Referrer, Browser, Betriebssystem, IP-Adresse (gekürzt falls möglich). Zwecke: Systemsicherheit, Missbrauchsprävention, technische Administration. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Löschung: spätestens nach {/* TODO: z.B. 14 */} Tagen; längere Aufbewahrung nur bei Sicherheitsvorfällen.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="kontakt">
        <h2 id="kontakt" className="text-2xl font-semibold">7. Kontaktanfragen</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Bei Kontaktaufnahme per Formular oder E-Mail werden Angaben zur Bearbeitung der Anfrage und für Anschlussfragen gespeichert. Pflichtfelder sind als solche gekennzeichnet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b (vorvertraglich) oder lit. f (berechtigtes Interesse an Kommunikation). Löschung: nach abschließender Bearbeitung, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="cookies">
        <h2 id="cookies" className="text-2xl font-semibold">8. Cookies / lokale Speicherung</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Derzeit werden technisch notwendige Cookies gesetzt. Analyse-/Tracking-Cookies werden nur mit Einwilligung verwendet. Cookie-Einwilligungen können jederzeit im Browser gelöscht oder über ein Consent-Tool widerrufen werden. Laufzeiten / Zwecke sind im Consent-Tool ausgewiesen (falls vorhanden).
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="analyse">
        <h2 id="analyse" className="text-2xl font-semibold">9. Analyse / Tracking</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Analyse-Dienst: Plausible zur Reichweitenmessung. IP-Adressen werden pseudonymisiert. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a). Widerruf jederzeit mit Wirkung für die Zukunft möglich. Ohne Einwilligung findet keine Speicherung statt.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="fonts">
        <h2 id="fonts" className="text-2xl font-semibold">10. Schriftarten / CDN</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Verwendete Schriftarten werden geladen. Bei externem Abruf können serverseitig Verbindungsdaten (IP, Browser) an den Anbieter übermittelt werden. Rechtsgrundlage: berechtigtes Interesse an konsistentem Erscheinungsbild (Art. 6 Abs. 1 lit. f). Empfehlung: lokale Einbindung zur Reduktion externer Requests.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="empfaenger">
        <h2 id="empfaenger" className="text-2xl font-semibold">11. Empfänger / Weitergabe</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Eine Weitergabe personenbezogener Daten findet nur statt, sofern (a) gesetzlich erlaubt, (b) zur Vertragserfüllung erforderlich (z. B. Hostingprovider, E-Mail-Dienst), (c) auf Basis einer Einwilligung oder (d) eine rechtliche Verpflichtung besteht. Auftragsverarbeiter werden vertraglich nach Art. 28 DSGVO verpflichtet.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="drittland">
        <h2 id="drittland" className="text-2xl font-semibold">12. Drittlandübermittlung</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Übermittlungen in Staaten außerhalb des EWR erfolgen nur wenn (i) Angemessenheitsbeschluss, (ii) Standardvertragsklauseln oder (iii) ausdrückliche Einwilligung vorliegt. Details zu einzelnen Diensten siehe entsprechende Abschnitte.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="speicher">
        <h2 id="speicher" className="text-2xl font-semibold">13. Speicherdauer / Löschung</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Daten werden gelöscht, sobald der Zweck entfällt und keine Aufbewahrungsfristen (z. B. handels-/steuerrechtlich) entgegenstehen. Kontaktanfragen: Löschung nach {/* TODO: z.B. 6 */} Monaten. Logfiles: siehe oben. Vertragsdaten: Aufbewahrung gem. § 147 AO, § 257 HGB (6–10 Jahre).
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="rechte">
        <h2 id="rechte" className="text-2xl font-semibold">14. Betroffenenrechte</h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
          <li>Auskunft (Art. 15)</li>
          <li>Berichtigung (Art. 16)</li>
          <li>Löschung (Art. 17)</li>
          <li>Einschränkung (Art. 18)</li>
          <li>Datenübertragbarkeit (Art. 20)</li>
          <li>Widerspruch gegen bestimmte Verarbeitungen (Art. 21)</li>
          <li>Widerruf von Einwilligungen (Art. 7 Abs. 3)</li>
          <li>Beschwerde bei Aufsichtsbehörde (Art. 77) – z. B. Landesdatenschutzbehörde Bayern.</li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="pflichten">
        <h2 id="pflichten" className="text-2xl font-semibold">15. Pflicht zur Bereitstellung</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Die Bereitstellung von Log- und Nutzungsdaten ist für den Betrieb der Website technisch erforderlich. Kontaktformulardaten sind zur Bearbeitung der Anfrage erforderlich. Eine Nichtbereitstellung kann Funktionseinschränkungen verursachen.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="profiling">
        <h2 id="profiling" className="text-2xl font-semibold">16. Automatisierte Entscheidungen / Profiling</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Es findet kein Profiling oder automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO statt.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="tom">
        <h2 id="tom" className="text-2xl font-semibold">17. Technische und organisatorische Maßnahmen</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Sicherheitsmaßnahmen umfassen u. a. HTTPS/TLS-Verschlüsselung, Zugriffsbeschränkungen, Bedarfsgerechte Rechtevergabe, regelmäßige Updates. Weitere Maßnahmen können intern dokumentiert sein.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="änderungen">
        <h2 id="änderungen" className="text-2xl font-semibold">18. Änderungen dieser Datenschutzerklärung</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Anpassungen erfolgen bei Änderungen von Funktionen oder Rechtslage. Aktueller Stand siehe Datumsangabe. Frühere Versionen können auf Anfrage bereitgestellt werden.
        </p>
      </section>

      <footer className="pt-4 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
          Stand: 22.08.2025 – Diese Erklärung enthält Platzhalter und muss auf tatsächliche Dienste (Analytics, Fonts, CDN, Hosting) abgestimmt werden.
        </p>
      </footer>
    </main>
  );
}
