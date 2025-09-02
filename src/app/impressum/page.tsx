/**
 * Impressum Seite. Enthält gemäß § 5 TMG die Pflichtangaben für die
 * Anbieterkennzeichnung. Bitte ergänze die persönlichen Daten wie
 * Name, Anschrift und Kontaktmöglichkeiten.
 */
export default function ImpressumPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Impressum
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Gesetzliche Anbieterkennzeichnung nach § 5 TMG und
          Informationspflichten nach § 18 Abs. 2 MStV. Die folgenden Angaben
          bitte final prüfen und ggf. ergänzen / anpassen.{" "}
          <span className="font-medium">
            Kein Ersatz für individuelle Rechtsberatung.
          </span>
        </p>
      </header>

      {/* 1. Anbieter */}
      <section className="space-y-4" aria-labelledby="anbieter">
        <h2 id="anbieter" className="text-2xl font-semibold">
          Angaben gemäß § 5 TMG
        </h2>
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Aaron Hampe
            <br />
            c/o MDC <br />
            Management #2005
            <br />
            Welserstraße 3<br />
            87463 Dietmannsried
            <br />
            Deutschland
          </p>

          <p className="mt-4">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
            <br />
            DE454283895
          </p>
        </div>
      </section>

      {/* 2. Vertretung / Verantwortlich */}
      <section className="space-y-4" aria-labelledby="verantwortlich">
        <h2 id="verantwortlich" className="text-2xl font-semibold">
          Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Aaron Hampe, Anschrift wie oben. Bei inhaltlichen oder
          journalistisch-redaktionellen Beiträgen bitte final Abgrenzung prüfen.
        </p>
      </section>

      {/* 3. Kontakt / schnelle elektronische Kontaktaufnahme */}
      <section className="space-y-4" aria-labelledby="kontakt">
        <h2 id="kontakt" className="text-2xl font-semibold">
          Kontakt
        </h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            <p className="mt-4">
              Telefon:{" "}
              <a
                href="tel:+4915129574884"
                className="underline decoration-dotted"
              >
                +49 151 29574884
              </a>
            </p>
          </li>
          <li>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@aaronhampe.de"
                className="underline decoration-dotted hover:text-blue-600 dark:hover:text-blue-400"
              >
                info@aaronhampe.de
              </a>
            </p>
          </li>
        </ul>
      </section>

      {/* 4. Berufsrechtliche Angaben (falls relevant) */}
      <section className="space-y-2" aria-labelledby="beruf">
        <h2 id="beruf" className="text-2xl font-semibold">
          Berufsrechtliche Angaben
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {/* Falls kein reglementierter Beruf: */}
          Nicht einschlägig – es liegt kein reglementierter Beruf im Sinne
          spezieller Kammer- oder Zulassungspflichten vor. Falls doch, hier
          Kammer, Berufsbezeichnung, Verleihungsstaat und berufsrechtliche
          Regelungen ergänzen.
        </p>
      </section>

      {/* 5. Haftung für Inhalte */}
      <section className="space-y-3" aria-labelledby="haftung-inhalte">
        <h2 id="haftung-inhalte" className="text-2xl font-semibold">
          Haftung für Inhalte
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG besteht jedoch keine Verpflichtung, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben unberührt. Eine
          diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
          einer konkreten Rechtsverletzung möglich.
        </p>
      </section>

      {/* 6. Haftung für Links */}
      <section className="space-y-3" aria-labelledby="haftung-links">
        <h2 id="haftung-links" className="text-2xl font-semibold">
          Haftung für Links
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Diese Website enthält ggf. Links zu externen Webseiten Dritter, auf
          deren Inhalte kein Einfluss besteht. Deshalb kann für diese fremden
          Inhalte auch keine Gewähr übernommen werden. Für Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar.
        </p>
      </section>

      {/* 7. Urheberrecht */}
      <section className="space-y-3" aria-labelledby="urheberrecht">
        <h2 id="urheberrecht" className="text-2xl font-semibold">
          Urheberrecht
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet. Jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
      </section>

      {/* 8. Streitbeilegung */}
      <section className="space-y-3" aria-labelledby="streitbeilegung">
        <h2 id="streitbeilegung" className="text-2xl font-semibold">
          Verbraucherstreitbeilegung / OS-Plattform
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Ich bin nicht bereit und nicht verpflichtet an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>

      {/* 9. Bildnachweise / Quellen (falls nötig) */}
      <section className="space-y-3" aria-labelledby="quellen">
        <h2 id="quellen" className="text-2xl font-semibold">
          Bild- & Quellenhinweise
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Eigene Grafiken und Renderings. Logos teilweise von Iconify und
          anderen Quellen. Alles nur lokale Ressourcen, keine externen
          Inhalte.
        </p>
      </section>

      {/* 10. Hosting */}
      <section className="space-y-3" aria-labelledby="hosting">
        <h2 id="hosting" className="text-2xl font-semibold">
          Hosting
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Hosting / Infrastruktur über Vercel. Details zur Datenverarbeitung siehe Datenschutzerklärung.
        </p>
      </section>

      <footer className="pt-4 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
          Stand: 20.09.2025
        </p>
      </footer>
    </main>
  );
}
