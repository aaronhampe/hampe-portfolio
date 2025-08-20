
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
      <section
        aria-labelledby="collab-title"
        className="mx-auto max-w-3xl"
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
              Moderne KI-Werkzeuge beschleunigen Routineaufgaben wie das
              Generieren erster Layouts, das Erstellen von Code-Snippets und die
              Optimierung von Bildern. So gewinnen wir Zeit für das Wesentliche.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Human-Review für jedes Ergebnis
            </h3>
            <p className="mt-2 leading-relaxed">
              Alle KI-Outputs werden sorgfältig geprüft, getestet und an Ihre
              Anforderungen angepasst. Geschwindigkeit der Maschine, Qualität
              durch Erfahrung.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Datenschutz &amp; Vertraulichkeit
            </h3>
            <p className="mt-2 leading-relaxed">
              DSGVO-konform, sensible Inhalte auf EU-Servern. KI-Tools so
              konfiguriert, dass keine vertraulichen Informationen gespeichert
              oder weitergegeben werden.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Toolchain
            </h3>
            <p className="mt-2 leading-relaxed">
              ChatGPT und Claude für Ideation, GitHub Copilot für
              Code-Vervollständigungen, Midjourney/DALL-E für Bildkonzepte sowie
              Skripte für Tests & Deployments – schnell und verlässlich.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Grenzen &amp; Ethik
            </h3>
            <p className="mt-2 leading-relaxed">
              KI unterstützt, ersetzt nicht. Keine diskriminierenden Modelle,
              transparente Kommunikation. Entscheidungen zu Inhalt & Design
              treffen am Ende Sie.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
