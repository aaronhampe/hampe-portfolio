import Link from "next/link";

export const metadata = {
  title: "FAQ – HAMPE",
  description:
    "Antworten zu IT‑Leistungen: Preise, Inhalte, SEO, Wartung und Eigentumsrechte – kompakt erklärt.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase uppercase">
              FAQ
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Häufige Fragen zu unseren <span className="font-serif italic text-zinc-800 dark:text-zinc-200">Arbeitsweisen.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section - Brutalist Minimalist */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="space-y-0 border-t border-zinc-200 dark:border-zinc-800">
            
            {[
              {
                question: "Wie viel kostet eine Website?",
                answer: "Ich verkaufe Websiten grundsätzlich nur auf Relaunch, Optimierungs & Wartungsbasis. Wir gehen also immer eine längere Zusammenarbeit ein, um langfristig all ihre Sorgen und Probleme bezüglich Thema Webentwicklung zu lösen. Ein einfaches Standard Paket beginnt bei 199,95€ pro Monat. Für die meisten Geschäfte ist das Pro Paket ab 389,95€ pro Monat optimal."
              },
              {
                question: "Welche Inhalte muss ich liefern?",
                answer: "Idealerweise liefern Sie Logo, Farbschema und grobe Inhalte. Texte und Bildmaterial kann ich bei Bedarf mit Ihnen gemeinsam erstellen – unterstützt durch KI‑Tools."
              },
              {
                question: "Wie sieht es mit SEO aus?",
                answer: "Alle Seiten werden suchmaschinenfreundlich aufgebaut, inklusive semantischer HTML‑Struktur, Schema.org Markup und optimierter Ladezeiten. Für lokale Sichtbarkeit biete ich optional ein SEO‑Setup an."
              },
              {
                question: "Wer kümmert sich um Wartung und Updates?",
                answer: "Wartung, Updates und Optimierungen der Website sind ab heute kein Problem mehr. Wenn es ein Problem gibt, melden Sie sich einfach bei mir, sofern es nicht bereits gelöst wurde."
              },
              {
                question: "Wem gehören die Rechte an der Website?",
                answer: "Alle erstellten Websites und Quellcodes gehören nach vollständiger Zahlung Ihnen. Sie erhalten den kompletten Zugriff auf das GitHub‑Repository und können das Projekt jederzeit weiterentwickeln lassen."
              }
            ].map((faq, i) => (
              <details key={i} className="group border-b border-zinc-200 dark:border-zinc-800 py-8 transition-colors duration-300">
                <summary className="flex items-center justify-between cursor-pointer list-none text-zinc-950 dark:text-white outline-none">
                  <div className="flex items-center space-x-6 w-full pr-8">
                    <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase w-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-zinc-500 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-colors shrink-0">
                    <svg className="w-4 h-4 text-current transform group-open:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  </span>
                </summary>
                <div className="mt-8 pl-14 pr-8">
                  <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}

          </div>
        </div>
      </section>

      {/* Call-to-Action Sektion */}
      <section className="py-32 md:py-48 bg-white dark:bg-zinc-950 relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center relative z-10">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[1.0] w-full text-zinc-950 dark:text-white">
              Noch Fragen <span className="font-serif italic text-zinc-400">offen?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-zinc-500 font-light mb-16 max-w-2xl">
              Kontaktieren Sie mich gerne für ein unverbindliches Beratungsgespräch. Ich erkläre Ihnen gerne alle Details zu meinen Leistungen.
            </p>

            <Link
              href="/contact"
              className="px-10 py-5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-lg tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300 flex justify-center items-center"
            >
              Kostenlose Beratung
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
