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
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero - Apple Style */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-tighter text-slate-900 dark:text-white leading-none">
                Leistungen
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
                Professionelle IT‑Lösungen für Ihren digitalen Erfolg
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Minimalistisch */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter */}
            <div className="group relative bg-white dark:bg-slate-900 rounded-3xl p-12 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-thin text-slate-900 dark:text-white">Starter</h2>
                  <p className="text-slate-600 dark:text-slate-400 font-light">
                    Der perfekte Einstieg in die digitale Welt
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    'One- bis Two-Pager',
                    'Basic SEO',
                    'Modernes Design',
                    'Optimierung & Aktive Zusammenarbeit',
                    'Wartung inklusive'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 pt-8">
                  <div className="text-4xl font-thin text-slate-900 dark:text-white">199,95 €</div>
                  <div className="text-sm text-slate-500 dark:text-slate-500">pro Monat, zzgl. MwSt.</div>
                </div>

                <Link href="/contact" className="block pt-4">
                  <button className="w-full py-4 border border-green-600 text-green-600 rounded-full font-medium hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105">
                    Anfragen
                  </button>
                </Link>
              </div>
            </div>

            {/* Pro - Featured */}
            <div className="group relative bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-3xl p-12 hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                  Beliebt
                </span>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-thin">Pro</h2>
                  <p className="text-slate-300 dark:text-slate-600 font-light">
                    Für wachsende Unternehmen
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    'Multi-Pager',
                    'Professionelles SEO',
                    'Business Seite',
                    'Fortgeschrittene Wartung & Optimierung',
                    'Individuell – für größere und komplexere Projekte'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300 dark:text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 pt-8">
                  <div className="text-4xl font-thin">389,95 €</div>
                  <div className="text-sm text-slate-400 dark:text-slate-500">pro Monat, zzgl. MwSt.</div>
                </div>

                <Link href="/contact" className="block pt-4">
                  <button className="w-full py-4 bg-white text-slate-900 dark:bg-slate-900 dark:text-white rounded-full font-medium hover:scale-105 transition-all duration-300">
                    Anfragen
                  </button>
                </Link>
              </div>
            </div>

            {/* Premium */}
            <div className="group relative bg-white dark:bg-slate-900 rounded-3xl p-12 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-thin text-slate-900 dark:text-white">Premium</h2>
                  <p className="text-slate-600 dark:text-slate-400 font-light">
                    Maßgeschneiderte Lösungen
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    'Individuelle Entwicklung & Architektur',
                    'Maßgeschneiderte Features',
                    'Premium Wartung & Support',
                    'Für komplexe Anforderungen'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 pt-8">
                  <div className="text-4xl font-thin text-slate-900 dark:text-white">Auf Anfrage</div>
                  <div className="text-sm text-slate-500 dark:text-slate-500">individuelle Kalkulation</div>
                </div>

                <Link href="/contact" className="block pt-4">
                  <button className="w-full py-4 border border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105">
                    Beratung
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-thin text-slate-900 dark:text-white tracking-tight">
              Bereit zu starten?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <span>Kostenlose Beratung</span>
              <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-slate-900/20 flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
               

