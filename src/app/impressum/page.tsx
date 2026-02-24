export const metadata = {
  title: "Impressum – HAMPE",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500 pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase uppercase">
              Impressum
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl leading-relaxed">
              Gesetzliche <span className="font-serif italic text-zinc-800 dark:text-zinc-200">Anbieterkennzeichnung</span> nach § 5 TMG.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Formatted like a Manifesto */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-16">
          
          <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                Angaben gemäß § 5 TMG
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Aaron Hampe<br />
                c/o MDC<br />
                Management #2005<br />
                Welserstraße 3<br />
                87463 Dietmannsried<br />
                Deutschland
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mt-6">
                <strong className="font-medium text-zinc-900 dark:text-zinc-100">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</strong><br />
                DE454283895
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                Verantwortlich für den Inhalt
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                (§ 18 Abs. 2 MStV) <br />
                Aaron Hampe, Anschrift wie oben.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                Kontakt
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                <strong className="font-medium text-zinc-900 dark:text-zinc-100">Telefon:</strong>{" "}
                <a href="tel:+4915129574884" className="hover:text-zinc-900 dark:hover:text-white transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">+49 151 29574884</a>
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mt-2">
                <strong className="font-medium text-zinc-900 dark:text-zinc-100">E-Mail:</strong>{" "}
                <a href="mailto:info@aaronhampe.de" className="hover:text-zinc-900 dark:hover:text-white transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">info@aaronhampe.de</a>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                Haftung für Inhalte
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                §§ 8 bis 10 TMG besteht jedoch keine Verpflichtung, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                einer konkreten Rechtsverletzung möglich.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                Haftung für Links
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Diese Website enthält ggf. Links zu externen Webseiten Dritter, auf
                deren Inhalte kein Einfluss besteht. Deshalb kann für diese fremden
                Inhalte auch keine Gewähr übernommen werden. Für Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                Urheberrecht
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
                als solche gekennzeichnet. Jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
                sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                Bild- & Quellenhinweise
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Eigene Grafiken und Renderings. Logos teilweise von Iconify und
                anderen Quellen. Alles nur lokale Ressourcen, keine externen
                Inhalte.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                Hosting
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Hosting / Infrastruktur über Vercel. Details zur Datenverarbeitung siehe Datenschutzerklärung.
              </p>
            </div>
          </div>

          <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800 mt-24">
            <p className="text-xs text-zinc-500 font-semibold tracking-widest uppercase">
              Stand: 25.09.2025
            </p>
          </footer>
        </div>
      </section>
      
    </main>
  );
}
