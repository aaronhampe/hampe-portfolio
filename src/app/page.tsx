"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { projects } from "@/data/projects";
import SplitText from "src/blocks/TextAnimations/SplitText/SplitText";
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-12 lg:mt-0">
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-slate-900 dark:text-slate-100">
                Digitale
                <br />
                <span className="font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Exzellenz
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <SplitText
              text="Ihr Partner für erstklassige Websites, innovative
              Webshops und maßgeschneiderte Software-Lösungen"
              className="md:text-2xl text-slate-600 dark:text-slate-300 font-light max-w-3xl mx-auto leading-relaxed"
              delay={20}
              duration={0.2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />

            {/* Services Tags */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-full text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-white/10">
                Next.js | Nuxt 4 Development
              </span>
              <span className="px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-full text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-white/10">
                E-Commerce Lösungen
              </span>
              <span className="px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-full text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-white/10">
                Custom Software
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:pt-8 mt-[-14] lg:mt-0">
              <Link
                href="/contact"
                className="group relative px-8 py-4 rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:shadow-slate-900/25 dark:hover:shadow-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              >
                <span className="relative z-10">Projekt starten</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl font-medium text-lg transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1 hover:bg-white dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              >
                Portfolio ansehen
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-[-4em] left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 dark:bg-slate-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-white dark:bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin text-slate-900 dark:text-white mb-6">
              Was ich für Sie
              <span className="font-light text-blue-600"> entwickle</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Von der Konzeption bis zur Umsetzung – professionelle Lösungen für
              Ihren digitalen Erfolg
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Websites */}
            <div className="group text-center p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon
                  icon="ph:browser-duotone"
                  className="w-10 h-10 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Websites
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Moderne, responsive Unternehmenswebsites die Ihre Marke perfekt
                repräsentieren und Kunden überzeugen.
              </p>
            </div>

            {/* Webshops */}
            <div className="group text-center p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-500">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon
                  icon="ph:storefront-duotone"
                  className="w-10 h-10 text-purple-600 dark:text-purple-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Webshops
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Leistungsstarke E-Commerce-Lösungen mit optimierter User
                Experience für maximalen Online-Umsatz.
              </p>
            </div>

            {/* Software */}
            <div className="group text-center p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-500">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon
                  icon="ph:code-duotone"
                  className="w-10 h-10 text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Software
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Maßgeschneiderte Anwendungen und Tools, die Ihre
                Geschäftsprozesse optimieren und automatisieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin text-slate-900 dark:text-white mb-6">
              Ausgewählte
              <span className="font-light text-blue-600"> Projekte</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Ein Einblick in meine Arbeit – von eleganten Websites bis hin zu
              komplexen Anwendungen
            </p>
          </div>

          <div className="grid gap-12 max-w-7xl mx-auto">
            {projects.slice(0, 3).map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center hover:-translate-y-2 transition-all duration-500`}
              >
                <div className="flex-1 relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 p-4 border border-transparent dark:border-white/10">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Project Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-slate-100 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {project.teaser}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Projekt ansehen</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-transparent border-2 border-slate-200 dark:border-slate-700 rounded-2xl font-medium text-lg text-slate-900 dark:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-white dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              <span>Alle Projekte entdecken</span>
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
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden dark:bg-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/20 dark:bg-purple-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
              Bereit für Ihr
              <span className="font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                nächstes Projekt?
              </span>
            </h2>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam eine digitale Lösung entwickeln, die Ihr
              Unternehmen voranbringt.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <span className="relative z-10">Kostenlose Beratung</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/about"
                className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-medium text-lg transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Mehr über mich
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

