import Link from 'next/link';

export const metadata = {
  title: 'Leistungen – HAMPE',
  description: 'Unsere Website-Pakete für Ihren digitalen Erfolg: Starter, Pro und Premium – inkl. Wartung und Support.',
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
        Wählen Sie das passende Website-Paket für Ihr Unternehmen
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Paket: Starter */}
        <div
          id="starter"
          className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Starter</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            One- bis max. Two-Pager Website inkl. Wartung.
          </p>
          <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1 flex-1">
            <li>One- bis Two-Pager</li>
            <li>Basic SEO</li>
            <li>Modernes Design</li>
            <li>Einfache Wartung und Änderungen</li>
          </ul>
          <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">ab 79,95 € / Monat</p>
          <Link href="/contact">
            <div className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors">
              Anfragen
            </div>
          </Link>
        </div>
        {/* Paket: Pro */}
        <div
          id="pro"
          className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Pro</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Multi-Pager Business Website für wachsende Unternehmen.
          </p>
          <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1 flex-1">
            <li>Multi-Pager</li>
            <li>Professionelles SEO</li>
            <li>Business Seite</li>
            <li>Fortgeschrittene Wartung</li>
            <li>Individuell – für größere und komplexere Projekte</li>
          </ul>
          <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">ab 189,95 € / Monat</p>
          <Link href="/contact">
            <div className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors">
              Anfragen
            </div>
          </Link>
        </div>
        {/* Paket: Premium */}
        <div
          id="premium"
          className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Premium</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Individuelle Website-Lösungen &amp; Rundum-Service.
          </p>
          <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1 flex-1">
            <li>Individuelle Entwicklung &amp; Architektur</li>
            <li>Maßgeschneiderte Features</li>
            <li>Premium Wartung &amp; Support</li>
            <li>Für komplexe Anforderungen</li>
          </ul>
          <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Preis auf Anfrage</p>
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