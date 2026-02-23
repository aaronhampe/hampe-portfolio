"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import SplitText from "src/blocks/TextAnimations/SplitText/SplitText";

const handleAnimationComplete = () => {
  console.log("Hero animation complete.");
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      
      {/* 
        ========================================
        HERO SECTION
        ========================================
      */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-12">
        {/* Subtle, sharp grid background instead of soft blobs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          
          <div className="space-y-6 md:space-y-10 w-full">
            {/* Massive Heading */}
            <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase">
              <span className="block mb-2 overflow-hidden">
                <span className="block animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards] translate-y-full">
                  Digitale
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards] translate-y-full text-zinc-400 dark:text-zinc-500">
                  Exzellenz.
                </span>
              </span>
            </h1>

            {/* Sub-headline */}
            <div className="max-w-2xl mx-auto mt-8 md:mt-12">
              <SplitText
                text="Ihr Partner für erstklassige IT‑Lösungen: High‑End Websites, skalierbare Webshops und maßgeschneiderte Software. Von der Vision bis zum Launch – kompromisslos in Design und Technik."
                className="text-lg md:text-xl lg:text-2xl font-light text-zinc-600 dark:text-zinc-400 leading-relaxed md:leading-snug"
                delay={10}
                duration={0.3}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-50px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

            {/* Service Tags (Pill shaped, minimalist) */}
            <div className="flex flex-wrap justify-center gap-3 pt-6 animate-[fadeIn_1.5s_ease_1s_both]">
              <span className="px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                Next.js / React
              </span>
              <span className="px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                E‑Commerce
              </span>
              <span className="px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                SaaS & Tools
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 md:pt-16 w-full animate-[fadeIn_1.5s_ease_1.2s_both]">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-medium text-lg tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
              >
                <span>Projekt starten</span>
                <span className="text-xl leading-none">&rarr;</span>
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-zinc-950 dark:text-white border border-zinc-300 dark:border-zinc-700 font-medium text-lg tracking-wide hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-300 flex items-center justify-center"
              >
                Portfolio ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SERVICES SECTION (Bento Grid Style)
        ========================================
      */}
      <section className="py-24 md:py-40 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-950 dark:text-white max-w-2xl leading-[1.1]">
              Was ich für Sie <span className="text-zinc-400 dark:text-zinc-600 italic font-serif">entwickle.</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md md:text-right">
              Von der ersten Skizze bis zur performanten Umsetzung – digitale Lösungen, die konvertieren und begeistern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1: Websites */}
            <div className="group relative bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-500 overflow-hidden min-h-[400px] flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-medium text-zinc-950 dark:text-white mb-4 tracking-tight">Websites</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                  Unternehmensauftritte, die Ihre Marke schärfen. Ultraschnell, responsive und visuell überragend.
                </p>
              </div>
              <div className="flex justify-between items-end mt-12 w-full">
                <Link
                  href="/projects"
                  className="font-medium text-zinc-950 dark:text-white group-hover:underline underline-offset-4 decoration-zinc-300 transition-all"
                >
                  Entdecken
                </Link>
                {/* Minimal Icon */}
                <div className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
              </div>
            </div>

            {/* Service 2: Webshops */}
            <div className="group relative bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-500 overflow-hidden min-h-[400px] flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-medium text-zinc-950 dark:text-white mb-4 tracking-tight">Webshops</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                  Reibungslose E-Commerce Erlebnisse, optimiert für Konversionen und skalierbares Wachstum.
                </p>
              </div>
              <div className="flex justify-between items-end mt-12 w-full">
                <Link
                  href="/projects"
                  className="font-medium text-zinc-950 dark:text-white group-hover:underline underline-offset-4 decoration-zinc-300 transition-all"
                >
                  Erfahren
                </Link>
                <div className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                </div>
              </div>
            </div>

            {/* Service 3: Software */}
            <div className="group relative bg-zinc-950 dark:bg-zinc-100 rounded-3xl p-8 md:p-12 border border-zinc-900 dark:border-zinc-200 hover:scale-[1.02] transition-transform duration-500 overflow-hidden min-h-[400px] flex flex-col justify-between shadow-2xl shadow-zinc-900/10">
              <div>
                <h3 className="text-3xl font-medium text-white dark:text-zinc-950 mb-4 tracking-tight">Software & Tools</h3>
                <p className="text-zinc-400 dark:text-zinc-600 leading-relaxed text-lg">
                  Komplexe Datensysteme, SaaS-Anwendungen und maßgeschneiderte Dashboards für smarte Workflows.
                </p>
              </div>
              <div className="flex justify-between items-end mt-12 w-full">
                <Link
                  href="/projects"
                  className="font-medium text-white dark:text-zinc-950 opacity-80 group-hover:opacity-100 transition-opacity"
                >
                  Kennenlernen
                </Link>
                <div className="w-12 h-12 rounded-full border border-zinc-800 dark:border-zinc-300 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 dark:group-hover:bg-zinc-950 dark:group-hover:text-white transition-colors duration-300 text-white dark:text-zinc-900">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        FEATURED PROJECTS (Massive Immersive Layout)
        ========================================
      */}
      <section className="py-24 md:py-40 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="flex flex-col mb-16 md:mb-24">
            <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">
              Ausgewählte Arbeiten
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-950 dark:text-white leading-[1.1] max-w-3xl">
              Projekte, die Standards <span className="text-zinc-400 dark:text-zinc-500 font-serif italic">neu definieren.</span>
            </h3>
          </div>

          <div className="space-y-24 md:space-y-40">
            {projects.slice(0, 3).map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  
                  {/* Image Container */}
                  <div className={`col-span-1 lg:col-span-8 overflow-hidden rounded-[2rem] bg-zinc-200 dark:bg-zinc-800 aspect-[4/3] relative ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <Image
                      src={project.cover}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>

                  {/* Text Description */}
                  <div className="col-span-1 lg:col-span-4 flex flex-col">
                    <span className="text-5xl md:text-6xl font-light text-zinc-300 dark:text-zinc-700 mb-6 font-serif italic">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-3xl md:text-4xl font-medium text-zinc-950 dark:text-white mb-4 tracking-tight">
                      {project.title}
                    </h4>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                      {project.teaser}
                    </p>
                    
                    <div className="inline-flex items-center gap-4 text-zinc-950 dark:text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>Fallstudie ansehen</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-32 md:mt-48 flex justify-center">
            <Link
              href="/projects"
              className="px-10 py-5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium text-lg tracking-wide hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-colors duration-500"
            >
              Alle Projekte entdecken
            </Link>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        FINAL CTA SECTION (Stark & Minimal)
        ========================================
      */}
      <section className="py-32 md:py-48 bg-zinc-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center relative z-10">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[1.0] w-full">
              Bereit für den <br />
              <span className="text-zinc-500 font-serif italic">nächsten Schritt?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-16 max-w-2xl">
              Lassen Sie uns gemeinsam eine digitale Erfahrung schaffen, die Maßstäbe setzt und Ihr Business beschleunigt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <Link
                href="/contact"
                className="px-10 py-5 rounded-full bg-white text-zinc-950 font-medium text-lg tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300 flex justify-center items-center"
               >
                Lass uns reden
              </Link>
              <Link
                href="/about"
                className="px-10 py-5 rounded-full border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 font-medium text-lg tracking-wide transition-colors duration-300 flex justify-center items-center"
              >
                Meine Arbeitsweise
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Global Style for Keyframes */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
