import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Über mich – HAMPE",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase">
                Über mich
              </h1>
              <p className="text-xl md:text-3xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl">
                Hallo. Ich bin <span className="text-zinc-950 dark:text-white font-medium">Aaron Hampe</span>, ein leidenschaftlicher Full‑Stack‑Entwickler aus Hannover. Ich baue Webanwendungen, die <span className="font-serif italic text-zinc-800 dark:text-zinc-200">funktionieren und faszinieren.</span>
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-start lg:justify-end pb-2">
              <div className="relative group overflow-hidden w-48 h-48 md:w-64 md:h-64 rounded-full border border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/images/aaron-hampe-profile.webp"
                  alt="Aaron Hampe - Full-Stack Entwickler"
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)] grayscale group-hover:grayscale-0"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content (Editorial layout) */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
            
            <div className="lg:col-span-4">
              <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4 sticky top-32">
                Hintergrund
              </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg dark:prose-invert prose-zinc max-w-none">
                <p className="text-2xl md:text-3xl font-light text-zinc-800 dark:text-zinc-200 leading-snug tracking-tight mb-8">
                  Seit mehreren Jahren helfe ich Unternehmen dabei, ihre digitale Präsenz zu stärken und maßgeschneiderte Software‑Lösungen zu realisieren. 
                </p>
                <div className="w-24 h-px bg-zinc-300 dark:bg-zinc-700 mb-8 w-full max-w-[100px]"></div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Neben meinem Studium der Informatik habe ich durch zahlreiche Projekte ein tiefes Verständnis für performante Frontend‑Architekturen, skalierbare Backends und benutzerfreundliche Oberflächen entwickelt.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Meine technische Arbeit wird von einem Engagement für Open Source flankiert. Ich halte mich kontinuierlich über modernste Paradigmen in der Webentwicklung auf dem Laufenden, um stets skalierbare, wartbare und hochmoderne Stacks auszuliefern.
                </p>
                
                <div className="mt-12 p-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50">
                  <p className="text-xl font-medium text-zinc-950 dark:text-white leading-snug m-0">
                    Suchen Sie Unterstützung bei Ihrem nächsten Projekt oder möchten einfach über Architektur fachsimpeln?{" "}
                    <Link
                      href="/contact"
                      className="inline-block mt-2 font-medium text-zinc-950 dark:text-white underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-zinc-950 dark:hover:decoration-white transition-all"
                    >
                      Kontaktieren Sie mich
                    </Link>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ghana Project Section (Immersive & Bold) */}
      <section className="py-24 md:py-40 bg-zinc-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            
            <div className="lg:col-span-5 space-y-8 lg:order-last">
              <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
                Soziales Engagement
              </h2>
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-none">
                Zusammen <br />
                <span className="font-serif italic text-zinc-400">für Ghana.</span>
              </h3>
              
              <p className="text-lg text-zinc-400 leading-relaxed">
                Neben der digitalen Arbeit engagiere ich mich mit engen Freunden in einer gemeinnützigen Organisation. Unser Schulbauprojekt in Hobor, Ghana, wurde erfolgreich abgeschlossen. Die Schule steht, und wir sind motivierter denn je, diesen Weg weiterzugehen.
              </p>

              <Link
                href="https://www.zusammenfuerghana.de"
                target="_blank"
                className="inline-flex items-center gap-3 mt-4 text-white hover:text-zinc-300 font-medium tracking-wide transition-colors group"
              >
                <span>www.zusammenfuerghana.de</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </Link>
            </div>

            <div className="lg:col-span-7 lg:order-first">
              <div className="relative group overflow-hidden rounded-[2rem] bg-zinc-800 aspect-[4/3]">
                <Image
                  src="/images/ghana-school-project.avif"
                  alt="Schulbau Projekt in Ghana, Hobor - Zusammen für Ghana"
                  fill
                  className="object-cover w-full scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.2,1,0.3,1)] grayscale group-hover:grayscale-0"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
