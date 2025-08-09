import Link from 'next/link';

export const metadata = {
  title: 'Leistungen – HAMPE',
  description: 'Unsere Produktpakete für Ihren digitalen Erfolg: AI‑Website‑Sprint, Conversion‑Booster und Service & Growth.',
};

/**
 * Übersichtsseite über die angebotenen Leistungspakete. Jedes Paket hat klare Deliverables und Preisangaben.
 */
export default function ServicesPage() {
  return (
    <main className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100">
        Leistungen
      </h1>
      <p className="mt-4 text-lg md:text-xl text-center text-gray-600 dark:text-gray-400">
        Wählen Sie das passende Paket für Ihr Unternehmen
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Paket: AI‑Website‑Sprint */}
        <div
          id="ai-website-sprint"
          className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">AI‑Website‑Sprint</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Statische Marketing‑Site in nur einer Woche.
          </p>
          <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1 flex-1">
            <li>Kick‑off Workshop &amp; Zieldefinition</li>
            <li>UI/UX‑Design &amp; Content‑Erstellung</li>
            <li>Entwicklung, Testing &amp; Go‑Live in 7 Tagen</li>
            <li>DSGVO‑konformes Tracking (cookielos)</li>
          </ul>
          <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">ab 3.500 €</p>
          <Link href="/contact">
            <div className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors">
              Anfragen
            </div>
          </Link>
        </div>
        {/* Paket: Conversion‑Booster */}
        <div
          id="conversion-booster"
          className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Conversion‑Booster</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Optimierung bestehender Websites &amp; Shops.
          </p>
          <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1 flex-1">
            <li>Analyse von UX, Performance &amp; SEO</li>
            <li>Optimierung für Core Web Vitals</li>
            <li>A/B‑Tests und Conversion‑Tracking</li>
            <li>Content‑Refresh &amp; Micro‑Copy</li>
          </ul>
          <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">ab 2.000 €</p>
          <Link href="/contact">
            <div className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors">
              Anfragen
            </div>
          </Link>
        </div>
        {/* Paket: Service & Growth */}
        <div
          id="service-growth"
          className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Service &amp; Growth</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Laufende Betreuung &amp; Weiterentwicklung.
          </p>
          <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1 flex-1">
            <li>Regelmäßige Updates &amp; Security‑Patches</li>
            <li>Monatliches Reporting &amp; KPI‑Analyse</li>
            <li>Neue Features &amp; Integrationen</li>
            <li>Support via E‑Mail &amp; Slack</li>
          </ul>
          <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">ab 450 € / Monat</p>
          <Link href="/contact">
            <div className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors">
              Anfragen
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}