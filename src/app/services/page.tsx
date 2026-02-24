import Link from 'next/link';

export const metadata = {
  title: 'Leistungen – HAMPE',
  description: 'Unsere Website-Pakete für Ihren digitalen Erfolg: Starter, Pro und Premium – inkl. Wartung und Support.',
};

/**
 * Übersichtsseite über die angebotenen Leistungspakete. Minimalistisches High-Contrast Design.
 */
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase uppercase">
              Leistungen
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl leading-relaxed">
              Professionelle IT‑Lösungen, kompromisslos in <span className="font-serif italic text-zinc-800 dark:text-zinc-200">Design und Skalierung.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Brutalist & Clean */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Starter */}
            <div className="group relative bg-white dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-500 flex flex-col justify-between min-h-[500px]">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white mb-2 tracking-tight">Starter</h2>
                  <p className="text-zinc-500 dark:text-zinc-400 font-light text-lg">
                    Der perfekte Einstieg
                  </p>
                </div>

                <ul className="space-y-4 py-8 border-y border-zinc-100 dark:border-zinc-800/50">
                  {[
                    'One- bis Two-Pager',
                    'Basic SEO',
                    'Modernes Design',
                    'Optimierung & Aktive Zusammenarbeit',
                    'Wartung inklusive'
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 text-lg">
                      <svg className="w-5 h-5 mt-1 shrink-0 text-zinc-950 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 pt-8">
                <div>
                  <div className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white tracking-tight">199,95 €</div>
                  <div className="text-sm text-zinc-500 mt-2 font-medium tracking-wide uppercase">pro Monat, zzgl. MwSt.</div>
                </div>

                <Link href="/contact" className="block">
                  <button className="w-full py-5 rounded-full border border-zinc-300 dark:border-zinc-700 font-medium text-zinc-950 dark:text-white hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-colors duration-300 text-lg">
                    Anfragen
                  </button>
                </Link>
              </div>
            </div>

            {/* Pro - Inverted Brutalist Style */}
            <div className="group relative bg-zinc-950 dark:bg-zinc-100 rounded-3xl p-8 md:p-12 border border-zinc-900 dark:border-zinc-200 hover:scale-[1.02] transition-transform duration-500 flex flex-col justify-between shadow-2xl shadow-zinc-900/10 min-h-[500px]">
              <div className="absolute top-8 right-8">
                <span className="bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                  Beliebt
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-medium text-white dark:text-zinc-950 mb-2 tracking-tight">Pro</h2>
                  <p className="text-zinc-400 dark:text-zinc-600 font-light text-lg">
                    Für wachsende Unternehmen
                  </p>
                </div>

                <ul className="space-y-4 py-8 border-y border-zinc-800 dark:border-zinc-300">
                  {[
                    'Multi-Pager',
                    'Professionelles SEO',
                    'Business Seite',
                    'Fortgeschrittene Wartung & Optimierung',
                    'Individuell – für komplexe Projekte'
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-zinc-300 dark:text-zinc-600 text-lg">
                      <svg className="w-5 h-5 mt-1 shrink-0 text-white dark:text-zinc-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 pt-8">
                <div>
                  <div className="text-4xl md:text-5xl font-medium text-white dark:text-zinc-950 tracking-tight">389,95 €</div>
                  <div className="text-sm text-zinc-400 dark:text-zinc-600 mt-2 font-medium tracking-wide uppercase">pro Monat, zzgl. MwSt.</div>
                </div>

                <Link href="/contact" className="block">
                  <button className="w-full py-5 rounded-full bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white font-medium hover:scale-[1.02] active:scale-95 transition-transform duration-300 text-lg">
                    Anfragen
                  </button>
                </Link>
              </div>
            </div>

            {/* Premium */}
            <div className="group relative bg-white dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-500 flex flex-col justify-between min-h-[500px]">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white mb-2 tracking-tight">Premium</h2>
                  <p className="text-zinc-500 dark:text-zinc-400 font-light text-lg">
                    Maßgeschneiderte Lösungen
                  </p>
                </div>

                <ul className="space-y-4 py-8 border-y border-zinc-100 dark:border-zinc-800/50">
                  {[
                    'Individuelle Entwicklung & Architektur',
                    'Maßgeschneiderte Features',
                    'Premium Wartung & Support',
                    'Für komplexe Anforderungen'
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 text-lg">
                      <svg className="w-5 h-5 mt-1 shrink-0 text-zinc-950 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 pt-8">
                <div>
                  <div className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white tracking-tight">Auf Anfrage</div>
                  <div className="text-sm text-zinc-500 mt-2 font-medium tracking-wide uppercase">individuelle Kalkulation</div>
                </div>

                <Link href="/contact" className="block">
                  <button className="w-full py-5 rounded-full border border-zinc-300 dark:border-zinc-700 font-medium text-zinc-950 dark:text-white hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-colors duration-300 text-lg">
                    Beratung vereinbaren
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 md:py-48 bg-zinc-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center relative z-10">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[1.0] w-full">
              Klingt gut? <br />
              <span className="text-zinc-500 font-serif italic">Lass uns reden.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-16 max-w-2xl">
              Starten Sie mit einer kostenlosen Beratung und lassen Sie uns Ihr Projektpotenzial erkunden.
            </p>

            <Link
              href="/contact"
              className="px-10 py-5 rounded-full bg-white text-zinc-950 font-medium text-lg tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300 flex justify-center items-center gap-3"
            >
              <span>Kostenlose Beratung</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
