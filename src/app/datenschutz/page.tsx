export const metadata = {
  title: "Datenschutz – HAMPE",
};

export default function DatenschutzPage() {
  const sections = [
    {
      id: "verantwortlicher",
      title: "1. Verantwortlicher",
      content: (
        <>
          <p className="mb-6">
            Aaron Hampe<br />
            c/o MDC<br />
            Management #2005<br />
            Welserstraße 3<br />
            87463 Dietmannsried<br />
            Deutschland
          </p>
          <h3 className="text-xl font-medium text-zinc-950 dark:text-white mb-2">Kontakt</h3>
          <p>
            <strong className="font-medium text-zinc-900 dark:text-zinc-100">E-Mail:</strong>{" "}
            <a href="mailto:info@aaronhampe.de" className="hover:text-zinc-950 dark:hover:text-white transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">info@aaronhampe.de</a>
            <br />
            <strong className="font-medium text-zinc-900 dark:text-zinc-100">Telefon:</strong>{" "}
            <a href="tel:+4915129574884" className="hover:text-zinc-950 dark:hover:text-white transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">+49 151 29574884</a>
          </p>
        </>
      ),
    },
    {
      id: "begriffe",
      title: "2. Begriffe",
      content: (
        <p>
          Begriffe wie &bdquo;personenbezogene Daten&ldquo;, &bdquo;Verarbeitung&ldquo;, &bdquo;Verantwortlicher&ldquo; und &bdquo;Auftragsverarbeiter&ldquo; entsprechen den Definitionen in Art. 4 DSGVO.
        </p>
      ),
    },
    {
      id: "rechtsgrundlagen",
      title: "3. Rechtsgrundlagen",
      content: (
        <p>
          Soweit unten nicht anders bezeichnet, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an stabiler, sicherer, nutzerfreundlicher Bereitstellung). Bei Kontaktaufnahme per Formular/E-Mail: Art. 6 Abs. 1 lit. b (vorvertragliche Maßnahmen / Vertrag). Bei Einholung von Einwilligungen (z. B. für Analyse / Marketing): Art. 6 Abs. 1 lit. a DSGVO (jederzeit widerrufbar).
        </p>
      ),
    },
    {
      id: "datenarten",
      title: "4. Kategorien verarbeiteter Daten",
      content: (
        <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
          <li>Nutzungsdaten (Logfiles, IP-Adresse, Zeitstempel, User-Agent)</li>
          <li>Kontaktdaten (Name, E-Mail) bei Kontaktanfragen</li>
          <li>Inhaltsdaten der Anfrage (Freitext)</li>
          <li>Meta-/Kommunikationsdaten (Geräteinformationen, Browsertyp)</li>
        </ul>
      ),
    },
    {
      id: "hosting",
      title: "5. Hosting / Infrastruktur",
      content: (
        <p>
          Diese Website wird über Vercel gehostet. Mit dem Hostinganbieter besteht ggf. ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Übermittlungen in Drittländer nur unter geeigneten Garantien (Art. 46 DSGVO) oder auf Basis Angemessenheitsbeschluss.
        </p>
      ),
    },
    {
      id: "logfiles",
      title: "6. Server-Logfiles",
      content: (
        <p>
          Erhobene Daten: abgerufene URL, Datei/Resource, Datum/Uhrzeit, übertragene Datenmenge, Referrer, Browser, Betriebssystem, IP-Adresse (gekürzt falls möglich). Zwecke: Systemsicherheit, Missbrauchsprävention, technische Administration. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Löschung: spätestens nach 14 Tagen; längere Aufbewahrung nur bei Sicherheitsvorfällen.
        </p>
      ),
    },
    {
      id: "kontakt",
      title: "7. Kontaktanfragen",
      content: (
        <p>
          Bei Kontaktaufnahme per Formular oder E-Mail werden Angaben zur Bearbeitung der Anfrage und für Anschlussfragen gespeichert. Pflichtfelder sind als solche gekennzeichnet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b (vorvertraglich) oder lit. f (berechtigtes Interesse an Kommunikation). Löschung: nach abschließender Bearbeitung, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      ),
    },
    {
      id: "cookies",
      title: "8. Cookies / lokale Speicherung",
      content: (
        <p>
          Derzeit werden technisch notwendige Cookies gesetzt. Analyse-/Tracking-Cookies werden nur mit Einwilligung verwendet. Cookie-Einwilligungen können jederzeit im Browser gelöscht oder über ein Consent-Tool widerrufen werden. Laufzeiten / Zwecke sind im Consent-Tool ausgewiesen (falls vorhanden).
        </p>
      ),
    },
    {
      id: "analyse",
      title: "9. Analyse / Tracking",
      content: (
        <p>
          Analyse-Dienst: Plausible zur Reichweitenmessung. IP-Adressen werden pseudonymisiert. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a). Widerruf jederzeit mit Wirkung für die Zukunft möglich. Ohne Einwilligung findet keine Speicherung statt.
        </p>
      ),
    },
    {
      id: "fonts",
      title: "10. Schriftarten / CDN",
      content: (
        <p>
          Verwendete Schriftarten werden geladen. Bei externem Abruf können serverseitig Verbindungsdaten (IP, Browser) an den Anbieter übermittelt werden. Rechtsgrundlage: berechtigtes Interesse an konsistentem Erscheinungsbild (Art. 6 Abs. 1 lit. f). Empfehlung: lokale Einbindung zur Reduktion externer Requests.
        </p>
      ),
    },
    {
      id: "empfaenger",
      title: "11. Empfänger / Weitergabe",
      content: (
        <p>
          Eine Weitergabe personenbezogener Daten findet nur statt, sofern (a) gesetzlich erlaubt, (b) zur Vertragserfüllung erforderlich (z. B. Hostingprovider, E-Mail-Dienst), (c) auf Basis einer Einwilligung oder (d) eine rechtliche Verpflichtung besteht. Auftragsverarbeiter werden vertraglich nach Art. 28 DSGVO verpflichtet.
        </p>
      ),
    },
    {
      id: "drittland",
      title: "12. Drittlandübermittlung",
      content: (
        <p>
          Übermittlungen in Staaten außerhalb des EWR erfolgen nur wenn (i) Angemessenheitsbeschluss, (ii) Standardvertragsklauseln oder (iii) ausdrückliche Einwilligung vorliegt. Details zu einzelnen Diensten siehe entsprechende Abschnitte.
        </p>
      ),
    },
    {
      id: "speicher",
      title: "13. Speicherdauer / Löschung",
      content: (
        <p>
          Daten werden gelöscht, sobald der Zweck entfällt und keine Aufbewahrungsfristen (z. B. handels-/steuerrechtlich) entgegenstehen. Kontaktanfragen: Löschung nach 6 Monaten. Logfiles: siehe oben. Vertragsdaten: Aufbewahrung gem. § 147 AO, § 257 HGB (6–10 Jahre).
        </p>
      ),
    },
    {
      id: "rechte",
      title: "14. Betroffenenrechte",
      content: (
        <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
          <li>Auskunft (Art. 15)</li>
          <li>Berichtigung (Art. 16)</li>
          <li>Löschung (Art. 17)</li>
          <li>Einschränkung (Art. 18)</li>
          <li>Datenübertragbarkeit (Art. 20)</li>
          <li>Widerspruch gegen bestimmte Verarbeitungen (Art. 21)</li>
          <li>Widerruf von Einwilligungen (Art. 7 Abs. 3)</li>
          <li>Beschwerde bei Aufsichtsbehörde (Art. 77) – z. B. Landesdatenschutzbehörde Bayern.</li>
        </ul>
      ),
    },
    {
      id: "pflichten",
      title: "15. Pflicht zur Bereitstellung",
      content: (
        <p>
          Die Bereitstellung von Log- und Nutzungsdaten ist für den Betrieb der Website technisch erforderlich. Kontaktformulardaten sind zur Bearbeitung der Anfrage erforderlich. Eine Nichtbereitstellung kann Funktionseinschränkungen verursachen.
        </p>
      ),
    },
    {
      id: "profiling",
      title: "16. Automatisierte Entscheidungen / Profiling",
      content: (
        <p>
          Es findet kein Profiling oder automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO statt.
        </p>
      ),
    },
    {
      id: "tom",
      title: "17. Technische und organisatorische Maßnahmen",
      content: (
        <p>
          Sicherheitsmaßnahmen umfassen u. a. HTTPS/TLS-Verschlüsselung, Zugriffsbeschränkungen, Bedarfsgerechte Rechtevergabe, regelmäßige Updates. Weitere Maßnahmen können intern dokumentiert sein.
        </p>
      ),
    },
    {
      id: "änderungen",
      title: "18. Änderungen dieser Datenschutzerklärung",
      content: (
        <p>
          Anpassungen erfolgen bei Änderungen von Funktionen oder Rechtslage. Aktueller Stand siehe Datumsangabe. Frühere Versionen können auf Anfrage bereitgestellt werden.
        </p>
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
              Datenschutz
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl leading-relaxed">
              Informationen nach Art. 12 ff. DSGVO über <span className="font-serif italic text-zinc-800 dark:text-zinc-200">Art, Umfang und Zwecke</span> der Verarbeitung personenbezogener Daten.
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
