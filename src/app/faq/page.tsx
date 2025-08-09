export const metadata = {
  title: 'FAQ – HAMPE',
  description:
    'Antworten auf häufig gestellte Fragen zu Preisen, Inhalten, SEO, Wartung und Eigentumsrechten.',
};

/**
 * FAQ‑Seite mit typischen Einwänden und Antworten. Collapse/expand‑Elemente erleichtern die Navigation.
 */
export default function FAQPage() {
  return (
    <main className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">Häufige Fragen</h1>
      <div className="space-y-6">
        <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
            Wie viel kostet eine Website?
          </summary>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Der Preis hängt vom Umfang ab. Das Paket „AI‑Website‑Sprint“ startet ab 3.500 €. Für
            komplexere Projekte erstelle ich gerne ein individuelles Angebot.
          </p>
        </details>
        <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
            Welche Inhalte muss ich liefern?
          </summary>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Idealerweise liefern Sie Logo, Farbschema und grobe Inhalte. Texte und Bildmaterial kann ich
            bei Bedarf mit Ihnen gemeinsam erstellen – unterstützt durch KI‑Tools.
          </p>
        </details>
        <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
            Wie sieht es mit SEO aus?
          </summary>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Alle Seiten werden suchmaschinenfreundlich aufgebaut, inklusive semantischer
            HTML‑Struktur, Schema.org Markup und optimierter Ladezeiten. Für lokale Sichtbarkeit biete
            ich optional ein SEO‑Setup an.
          </p>
        </details>
        <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
            Wer kümmert sich um Wartung und Updates?
          </summary>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Im Rahmen des Pakets „Service &amp; Growth“ übernehme ich Updates, Monitoring und
            kontinuierliche Optimierung. Alternativ erhalten Sie eine Übergabe mit Dokumentation, so
            dass Ihre interne IT die Wartung übernehmen kann.
          </p>
        </details>
        <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100">
            Wem gehören die Rechte an der Website?
          </summary>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Alle erstellten Websites und Quellcodes gehören nach vollständiger Zahlung Ihnen. Sie
            erhalten den kompletten Zugriff auf das GitHub‑Repository und können das Projekt jederzeit
            weiterentwickeln lassen.
          </p>
        </details>
      </div>
    </main>
  );
}