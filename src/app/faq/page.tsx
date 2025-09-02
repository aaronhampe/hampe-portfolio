export const metadata = {
  title: "FAQ – HAMPE",
  description:
    "Antworten auf häufig gestellte Fragen zu Preisen, Inhalten, SEO, Wartung und Eigentumsrechten.",
};

/**
 * FAQ‑Seite mit typischen Einwänden und Antworten. Collapse/expand‑Elemente erleichtern die Navigation.
 */
export default function FAQPage() {
  return (
    <main className="px-6 py-20 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Häufige Fragen
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Services
          und Arbeitsweise.
        </p>
      </div>

      <div className="space-y-4">
        <details className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer text-gray-900 dark:text-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">
                Wie viel kostet eine Website?
              </span>
            </div>
            <svg
              className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </summary>
          <div className="mt-6 pl-14">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Ich verkaufe Websiten grundsätzlich nur auf Relaunch,
              Optimierungs & Wartungsbasis. Wir gehen also immer eine längere
              Zusammenarbeit ein, um langfristig all ihre Sorgen und Probleme
              bezüglich Thema Webentwicklung zu lösen. Ein einfaches Standard
              Paket beginnt bei
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {" "}
                199,95 €
              </span>
              pro Monat. Für die meisten Geschäfte ist das Pro Paket ab
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {" "}
                389,95 €
              </span>
              pro Monat optimal.
            </p>
          </div>
        </details>

        <details className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer text-gray-900 dark:text-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">
                Welche Inhalte muss ich liefern?
              </span>
            </div>
            <svg
              className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </summary>
          <div className="mt-6 pl-14">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Idealerweise liefern Sie Logo, Farbschema und grobe Inhalte. Texte
              und Bildmaterial kann ich bei Bedarf mit Ihnen gemeinsam erstellen –
              unterstützt durch KI‑Tools.
            </p>
          </div>
        </details>

        <details className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer text-gray-900 dark:text-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">Wie sieht es mit SEO aus?</span>
            </div>
            <svg
              className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </summary>
          <div className="mt-6 pl-14">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Alle Seiten werden suchmaschinenfreundlich aufgebaut, inklusive
              semantischer HTML‑Struktur, Schema.org Markup und optimierter
              Ladezeiten. Für lokale Sichtbarkeit biete ich optional ein SEO‑Setup
              an.
            </p>
          </div>
        </details>

        <details className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer text-gray-900 dark:text-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-orange-600 dark:text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">
                Wer kümmert sich um Wartung und Updates?
              </span>
            </div>
            <svg
              className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </summary>
          <div className="mt-6 pl-14">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Wartung, Updates und Optimierungen der Website sind ab heute kein
              Problem mehr. Wenn es ein Problem gibt, melden Sie sich einfach bei
              mir, sofern es nicht bereits gelöst wurde.
            </p>
          </div>
        </details>

        <details className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300">
          <summary className="flex items-center justify-between cursor-pointer text-gray-900 dark:text-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">
                Wem gehören die Rechte an der Website?
              </span>
            </div>
            <svg
              className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </summary>
          <div className="mt-6 pl-14">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Alle erstellten Websites und Quellcodes gehören nach vollständiger
              Zahlung Ihnen. Sie erhalten den kompletten Zugriff auf das
              GitHub‑Repository und können das Projekt jederzeit weiterentwickeln
              lassen.
            </p>
          </div>
        </details>
      </div>

      {/* Call-to-Action Sektion */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Noch Fragen offen?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
          Kontaktieren Sie mich gerne für ein unverbindliches Beratungsgespräch.
          Ich erkläre Ihnen gerne alle Details zu meinen Leistungen.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Kostenlose Beratung
        </a>
      </div>
    </main>
  );
}
