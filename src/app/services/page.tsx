export const metadata = {
  title: 'Leistungen – HAMPE',
  description: 'Websites, Webshops und Software für Unternehmen – individuell entwickelt, mit Fokus auf Design, Verkaufsoptimierung und Prozesseffizienz.',
};

/* ───────────────────────────────────────────────
   TODO: Ersetze die Platzhalter-URL unten durch
   deinen echten Google Calendar Appointment
   Scheduling Link.
   ─────────────────────────────────────────────── */
const BOOKING_URL = 'https://calendar.google.com/calendar/appointments/TODO_REPLACE_WITH_YOUR_LINK';

/**
 * Leistungen – Übersichtsseite. Erklärt die Kernleistungen
 * und leitet Besucher zum kostenlosen Erstgespräch.
 */
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">

      {/* ── Hero ───────────────────────────────── */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase">
              Leistungen
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl leading-relaxed">
              Digitale Lösungen, die auf Ihr Unternehmen <span className="font-serif italic text-zinc-800 dark:text-zinc-200">zugeschnitten</span> sind&nbsp;– von der Website bis zur individuellen Software.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Overview ─────────────────── */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          {/* Intro Text */}
          <div className="max-w-3xl mb-20 md:mb-28 space-y-6">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
              Websites, Webshops &amp;&nbsp;Software&nbsp;– <span className="text-zinc-400 dark:text-zinc-500 font-serif italic">alles aus einer Hand.</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Ich unterstütze Unternehmen dabei, online sichtbar zu werden und interne Prozesse zu vereinfachen. Dabei setze ich auf einen persönlichen, unkomplizierten Ansatz&nbsp;– damit am Ende genau das entsteht, was wirklich gebraucht wird.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            {/* Websites & Webshops */}
            <div className="group relative bg-white dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-500 flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center mb-6 text-zinc-950 dark:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-zinc-950 dark:text-white mb-4 tracking-tight">Websites &amp; Webshops</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                  Modernes, ansprechendes Design trifft auf verkaufsoptimierte Struktur. Ob Unternehmensauftritt oder E‑Commerce&nbsp;– Ihre Seite soll nicht nur gut aussehen, sondern auch Ergebnisse liefern.
                </p>
              </div>
            </div>

            {/* Software & KI */}
            <div className="group relative bg-zinc-950 dark:bg-zinc-100 rounded-3xl p-8 md:p-12 border border-zinc-900 dark:border-zinc-200 hover:scale-[1.02] transition-transform duration-500 flex flex-col justify-between min-h-[380px] shadow-2xl shadow-zinc-900/10">
              <div>
                <div className="w-12 h-12 rounded-full border border-zinc-800 dark:border-zinc-300 flex items-center justify-center mb-6 text-white dark:text-zinc-950">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-white dark:text-zinc-950 mb-4 tracking-tight">Software &amp; KI</h3>
                <p className="text-zinc-400 dark:text-zinc-600 leading-relaxed text-lg">
                  Individuelle Tools und Anwendungen, die Ihre Prozesse effizienter machen. Wo es Sinn ergibt, kommt KI zum Einsatz&nbsp;– für smartere Workflows und echten Mehrwert im Alltag.
                </p>
              </div>
            </div>

            {/* Wartung & Betreuung */}
            <div className="group relative bg-white dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-500 flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center mb-6 text-zinc-950 dark:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-zinc-950 dark:text-white mb-4 tracking-tight">Wartung &amp; Betreuung</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                  Auch nach dem Launch lasse ich Sie nicht allein. Für viele meiner Kunden übernehme ich die laufende Wartung, Updates und Weiterentwicklung&nbsp;– damit alles stabil und aktuell bleibt.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Pricing Philosophy ────────────────── */}
      <section className="py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
                Faire Preise, <span className="font-serif italic text-zinc-400 dark:text-zinc-500">transparent kalkuliert.</span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Meine Arbeit berechne ich auf Stundenbasis. Das bedeutet: kein starres Paket, sondern ein Preis, der sich nach dem tatsächlichen Aufwand Ihres Projekts richtet. So zahlen Sie nur für das, was Sie wirklich brauchen&nbsp;– nicht mehr.
              </p>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Jedes Projekt ist anders, deshalb unterscheiden sich auch die Kosten. In einem kurzen Gespräch kläre ich gerne alle Fragen und gebe Ihnen eine realistische Einschätzung.
              </p>
            </div>

            {/* Visual accent card */}
            <div className="relative bg-zinc-950 dark:bg-zinc-100 rounded-3xl p-10 md:p-14 text-white dark:text-zinc-950">
              <div className="space-y-6">
                <div className="text-sm font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-600">So starten wir</div>
                <div className="space-y-5">
                  {[
                    { step: '01', text: 'Kostenloses 10‑Minuten‑Gespräch – wir lernen uns kennen.' },
                    { step: '02', text: 'Ich verstehe Ihr Vorhaben und gebe eine erste Einschätzung.' },
                    { step: '03', text: 'Sie erhalten ein individuelles Angebot – unverbindlich.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-5">
                      <span className="text-2xl font-light font-serif italic text-zinc-500 dark:text-zinc-400 shrink-0">{item.step}</span>
                      <p className="text-lg leading-relaxed text-zinc-300 dark:text-zinc-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA: Gespräch buchen ─────────────── */}
      <section className="py-32 md:py-48 bg-zinc-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center relative z-10">
          <div className="flex flex-col items-center max-w-4xl mx-auto">

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[1.0] w-full">
              Lassen Sie uns <br />
              <span className="text-zinc-500 font-serif italic">kurz sprechen.</span>
            </h2>

            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-16 max-w-2xl">
              Buchen Sie sich ein kostenloses, unverbindliches 10‑Minuten‑Gespräch per Google Meet&nbsp;– und wir finden gemeinsam heraus, wie ich Sie unterstützen kann.
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full bg-white text-zinc-950 font-medium text-lg tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300 flex justify-center items-center gap-3"
            >
              {/* Google Meet / Calendar icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              <span>Gespräch vereinbaren</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <p className="text-sm text-zinc-600 mt-6 max-w-md">
              10 Minuten, kostenlos, per Google Meet. Kein Verkaufsgespräch&nbsp;– einfach ein ehrlicher Austausch.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}
