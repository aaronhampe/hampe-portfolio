import Link from "next/link";

export const metadata = {
  title: "KI in der Zusammenarbeit – HAMPE",
  description:
    "Transparenz über den Einsatz von Künstlicher Intelligenz: Automatisierung von Routineaufgaben, Human-Review, Datenschutz und ethische Grundsätze.",
};

/**
 * KI-Seite: klare Struktur, einheitliche Container & Typografie,
 * Hero → Prozess → Inhalte → Abschluss-CTA
 */
export default function AiPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden rounded-3xl border border-gray-200/60 bg-gradient-to-b from-white to-gray-50 p-10 text-center shadow-sm dark:border-gray-800/60 dark:from-black dark:to-gray-900 md:p-16"
      >
        <h1
          id="hero-title"
          className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl"
        >
          AI-gestützte Webentwicklung für KMU
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700 dark:text-gray-300 md:text-2xl">
          In 1 Woche live, DSGVO-sauber, messbar mehr Leads.
        </p>

        {/* Kennzahlen */}
        <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-1 divide-y divide-gray-200/70 dark:divide-gray-800/70 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          <div className="px-6 py-4">
            <dt className="text-sm text-gray-600 dark:text-gray-400">Time-to-Launch</dt>
            <dd className="mt-2 text-4xl font-bold text-blue-600 dark:text-blue-400">7 Tage</dd>
          </div>
          <div className="px-6 py-4">
            <dt className="text-sm text-gray-600 dark:text-gray-400">Core Web Vitals</dt>
            <dd className="mt-2 text-4xl font-bold text-blue-600 dark:text-blue-400">100 / 100</dd>
          </div>
          <div className="px-6 py-4">
            <dt className="text-sm text-gray-600 dark:text-gray-400">Mehr Leads</dt>
            <dd className="mt-2 text-4xl font-bold text-blue-600 dark:text-blue-400">+30%</dd>
          </div>
        </dl>

        {/* Call to action */}
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          >
            Kostenlosen Website-Check buchen
          </Link>
        </div>
      </section>

      {/* Prozess */}
      <section
        aria-labelledby="process-title"
        className="mx-auto mt-24 max-w-6xl"
      >
        <h2
          id="process-title"
          className="text-center text-3xl font-semibold text-gray-900 dark:text-gray-100 md:text-4xl"
        >
          Ihr Weg zur performanten Website
        </h2>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "Anforderungsanalyse",
              text:
                "Kurzer Workshop zur Definition von Zielen, Zielgruppe und Inhalten.",
            },
            {
              step: "2",
              title: "KI-gestützter Entwurf",
              text:
                "Wireframes, Texte und visuelle Konzepte werden per KI generiert und gemeinsam abgestimmt.",
            },
            {
              step: "3",
              title: "Entwicklung & Review",
              text:
                "Umsetzung mit modernen Frameworks, Tests und Human-Review für Qualität und DSGVO-Compliance.",
            },
            {
              step: "4",
              title: "Launch & Optimierung",
              text:
                "Go-Live innerhalb einer Woche, inklusive Tracking, Schulung und weiterer Optimierung.",
            },
          ].map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900"
            >
              <div className="mb-4 text-4xl font-bold text-blue-600 dark:text-blue-400">
                {item.step}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Inhalte: KI in der Zusammenarbeit */}
      <section
        aria-labelledby="collab-title"
        className="mx-auto mt-24 max-w-3xl"
      >
        <h2
          id="collab-title"
          className="text-3xl font-semibold text-gray-900 dark:text-gray-100 md:text-4xl"
        >
          KI in der Zusammenarbeit
        </h2>

        <div className="mt-8 space-y-10 text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Automatisiert, wo es sinnvoll ist
            </h3>
            <p className="mt-2 leading-relaxed">
              Moderne KI-Werkzeuge beschleunigen Routineaufgaben wie das Generieren
              erster Layouts, das Erstellen von Code-Snippets und die Optimierung von Bildern.
              So gewinnen wir Zeit für das Wesentliche.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Human-Review für jedes Ergebnis
            </h3>
            <p className="mt-2 leading-relaxed">
              Alle KI-Outputs werden sorgfältig geprüft, getestet und an Ihre Anforderungen
              angepasst. Geschwindigkeit der Maschine, Qualität durch Erfahrung.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Datenschutz &amp; Vertraulichkeit
            </h3>
            <p className="mt-2 leading-relaxed">
              DSGVO-konform, sensible Inhalte auf EU-Servern. KI-Tools so konfiguriert,
              dass keine vertraulichen Informationen gespeichert oder weitergegeben werden.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Toolchain
            </h3>
            <p className="mt-2 leading-relaxed">
              ChatGPT und Claude für Ideation, GitHub Copilot für Code-Vervollständigungen, Midjourney/DALL-E
              für Bildkonzepte sowie Skripte für Tests & Deployments – schnell und verlässlich.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Grenzen &amp; Ethik
            </h3>
            <p className="mt-2 leading-relaxed">
              KI unterstützt, ersetzt nicht. Keine diskriminierenden Modelle, transparente
              Kommunikation. Entscheidungen zu Inhalt & Design treffen am Ende Sie.
            </p>
          </div>
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section
        aria-labelledby="final-cta-title"
        className="mt-24 rounded-3xl bg-blue-600 p-10 text-center text-white shadow-sm md:p-16"
      >
        <h2 id="final-cta-title" className="text-3xl font-semibold md:text-4xl">
          Bereit für den nächsten Schritt?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg">
          Buchen Sie Ihren kostenlosen Website-Check und erfahren Sie, wie KI und modernes
          Webdesign Ihr Geschäft voranbringen.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-white px-8 py-4 font-medium text-blue-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
          >
            Kostenlosen Website-Check buchen
          </Link>
        </div>
      </section>
    </main>
  );
}
