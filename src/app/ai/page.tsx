import Link from "next/link";

export const metadata = {
  title: "KI in der Zusammenarbeit – HAMPE",
  description:
    "Transparenz über den Einsatz von Künstlicher Intelligenz: Automatisierung von Routineaufgaben, Human-Review, Datenschutz und ethische Grundsätze.",
};

export default function AiPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase uppercase">
              Künstliche <br />
              Intelligenz
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl leading-relaxed">
              AI-gestützte Entwicklung für messbare Ergebnisse. In 1 Woche live, DSGVO-sauber.
            </p>
          </div>
          
          {/* Key Metrics - Brutalist style */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-y-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">
            <div className="sm:border-r border-zinc-200 dark:border-zinc-800 pr-8">
              <div className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2">Time-to-Launch</div>
              <div className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white">7 Tage</div>
            </div>
            <div className="sm:border-r border-zinc-200 dark:border-zinc-800 px-0 sm:px-8">
              <div className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2">Core Web Vitals</div>
              <div className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white">100/100</div>
            </div>
            <div className="pl-0 sm:pl-8">
              <div className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2">Mehr Leads</div>
              <div className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white">+30%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Editorial & Sharp */}
      <section className="py-24 md:py-40 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
            
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-950 dark:text-white sticky top-32">
                Ihr Weg zur performanten Website
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    title: "Anforderungsanalyse",
                    text: "Kurzer Workshop zur Definition von Zielen, Zielgruppe und Inhalten.",
                  },
                  {
                    step: "02",
                    title: "KI-gestützter Entwurf",
                    text: "Wireframes, Texte und visuelle Konzepte werden per KI generiert und gemeinsam abgestimmt.",
                  },
                  {
                    step: "03",
                    title: "Entwicklung & Review",
                    text: "Umsetzung mit modernen Frameworks, Tests und Human-Review für Qualität und DSGVO-Compliance.",
                  },
                  {
                    step: "04",
                    title: "Launch & Optimierung",
                    text: "Go-Live innerhalb einer Woche, inklusive Tracking, Schulung und weiterer Optimierung.",
                  },
                ].map((item) => (
                  <div key={item.step} className="grid sm:grid-cols-12 gap-8 items-baseline group">
                    <div className="sm:col-span-2">
                       <span className="text-4xl md:text-5xl font-serif italic text-zinc-300 dark:text-zinc-700 transition-colors duration-500 group-hover:text-zinc-950 dark:group-hover:text-white">
                        {item.step}
                       </span>
                    </div>
                    <div className="sm:col-span-10 space-y-4">
                      <h3 className="text-2xl font-medium text-zinc-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 bg-zinc-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center relative z-10">
          <div className="flex flex-col items-center max-w-4xl mx-auto space-y-8">
            
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.0] text-white">
              Bereit für den <span className="font-serif italic text-zinc-400">nächsten Schritt?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-zinc-500 font-light mb-8 max-w-2xl leading-relaxed">
              Buchen Sie Ihren kostenlosen Website-Check und erfahren Sie, wie KI und modernes Webdesign Ihr Geschäft voranbringen.
            </p>

            <Link
              href="/contact"
              className="px-8 py-5 rounded-full bg-white text-zinc-950 font-medium text-lg tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300 inline-block mt-8"
            >
              Kostenlosen Website-Check buchen
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
