export const metadata = {
  title: "KI Ethik & Richtlinien – HAMPE",
  description:
    "Transparenz über den Einsatz von Künstlicher Intelligenz: Automatisierung von Routineaufgaben, Human-Review, Datenschutz und ethische Grundsätze.",
};

export default function AiEthicsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase uppercase">
              Ethik & <br />
              <span className="font-serif italic text-zinc-400">Transparenz</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl leading-relaxed">
              Klare Grundsätze für den sicheren und verantwortungsvollen Einsatz von KI in unserer Zusammenarbeit.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Formatted like a Manifesto */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-24">
          
          {[
            {
              title: "Automatisiert, wo es sinnvoll ist",
              text: "Moderne KI-Werkzeuge beschleunigen Routineaufgaben wie das Generieren erster Layouts, das Erstellen von Code-Snippets und die Optimierung von Bildern. So gewinnen wir Zeit für das Wesentliche: Strategie, Architektur und Design-Systeme."
            },
            {
              title: "Human-Review für jedes Ergebnis",
              text: "Alle KI-Outputs werden sorgfältig geprüft, getestet und an Ihre Anforderungen angepasst. Wir nutzen die Geschwindigkeit der Maschine, sichern aber die Qualität durch jahrelange menschliche Erfahrung in der Entwicklung."
            },
            {
              title: "Datenschutz & Vertraulichkeit",
              text: "DSGVO-konform, sensible Inhalte verbleiben auf europäischen Servern. Alle KI-Tools sind strikt so konfiguriert, dass keine vertraulichen Kundeninformationen für das Training offener Modelle gespeichert oder weitergegeben werden."
            },
            {
              title: "Toolchain",
              text: "Wir nutzen ChatGPT und Claude für effiziente Ideation und Copywriting, GitHub Copilot für intelligente Code-Vervollständigungen, Midjourney/DALL-E für hochauflösende Bildkonzepte sowie automatisierte Skripte für rigorose Tests & Deployments – extrem schnell und verlässlich."
            },
            {
              title: "Grenzen & Ethik",
              text: "KI ist ein Werkzeug, das unterstützt, aber den Menschen nicht ersetzt. Wir nutzen keine diskriminierenden Modelle und wahren absolute Transparenz. Die finalen Entscheidungen zu Inhalt, Layout und Geschäftslogik treffen am Ende immer Sie."
            }
          ].map((block, idx) => (
            <div key={idx} className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                  {block.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {block.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
      
    </main>
  );
}
