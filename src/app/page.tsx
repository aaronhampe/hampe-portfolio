"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import SplitText from "src/blocks/TextAnimations/SplitText/SplitText";
import TextType from "src/blocks/TextAnimations/TextType/TextType";
import SplashCursor from "src/blocks/TextAnimations/SplashCursor/SplashCursor";
import ServicesScrollStack from "@/components/ServicesScrollStack";


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
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 md:pb-32 pt-32">
        {/* Colorful Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/hampe-blurred-background.webm"
        />
        <SplashCursor />

        {/* Dark overlay for white text readability over the colorful video */}
        <div className="absolute inset-0 bg-black/35 z-0 pointer-events-none"></div>

        <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-start text-left">
          <div className="space-y-6 md:space-y-8 w-full max-w-3xl">
            {/* Smaller, stark left-aligned heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium tracking-tight text-white uppercase drop-shadow-lg">
              <span className="block mb-2 overflow-hidden">
                <SplitText
                  text="Digitale"
                  className="text-5xl md:text-6xl lg:text-8xl font-semibold text-center"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </span>
              <span className="block overflow-hidden">
                <SplitText
                  text="Exzellenz."
                  className="text-5xl md:text-6xl lg:text-8xl font-semibold text-center"
                  delay={100}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </span>
            </h1>

            {/* Sub-headline */}
            <div className="max-w-xl">
              <TextType
                text="Die digitale Welt muss funktionieren. Aber sie darf auch schön sein. Ich sorge dafür, dass beides zusammenkommt."
                className="text-base md:text-lg lg:text-lg font-medium text-white/90 drop-shadow-md leading-relaxed"
                typingSpeed={30}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
              />
            </div>

            {/* Service Tags (Pill shaped, minimalist, left aligned) */}
            <div className="flex flex-wrap justify-start gap-3 pt-4 animate-[fadeIn_1.5s_ease_1s_both]">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-white/25 bg-white/10 text-white backdrop-blur-md">
                Next.js / React
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-white/25 bg-white/10 text-white backdrop-blur-md">
                E‑Commerce
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-white/25 bg-white/10 text-white backdrop-blur-md">
                SaaS & Tools
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center pt-6 md:pt-8 w-full animate-[fadeIn_1.5s_ease_1.2s_both]">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-sm md:text-base tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
              >
                <span>Projekt starten</span>
                <span className="text-lg leading-none">&rarr;</span>
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/25 font-medium text-sm md:text-base tracking-wide hover:bg-white/20 transition-colors duration-300 flex items-center justify-center"
              >
                Portfolio ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SERVICES SECTION (Stacking Scroll Cards)
        ========================================
      */}
      <section className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        {/* Section header — sits above the sticky card stack */}
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-24 md:py-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-950 dark:text-white max-w-2xl leading-[1.1]">
              Was ich für Sie{" "}
              <span className="text-zinc-400 dark:text-zinc-600 italic font-serif">
                entwickle.
              </span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md md:text-right">
              Von der ersten Skizze bis zur performanten Umsetzung – digitale
              Lösungen, die konvertieren und begeistern.
            </p>
          </div>
        </div>

        {/* Stacking scroll cards */}
        <ServicesScrollStack />

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
              Projekte, die Standards{" "}
              <span className="text-zinc-400 dark:text-zinc-500 font-serif italic">
                neu definieren.
              </span>
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
                  <div
                    className={`col-span-1 lg:col-span-8 overflow-hidden rounded-[2rem] bg-zinc-200 dark:bg-zinc-800 aspect-[4/3] relative ${index % 2 === 1 ? "lg:order-last" : ""}`}
                  >
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
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
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
              <span className="text-zinc-500 font-serif italic">
                nächsten Schritt?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-16 max-w-2xl">
              Lassen Sie uns gemeinsam eine digitale Erfahrung schaffen, die
              Maßstäbe setzt und Ihr Business beschleunigt.
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
