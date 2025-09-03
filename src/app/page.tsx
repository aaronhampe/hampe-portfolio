"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import SplitText from "src/blocks/TextAnimations/SplitText/SplitText";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

// Minimal typing for window.gtag to avoid `any` and keep lint happy
type GtagCommand = "js" | "config" | "consent" | "event";
type GtagFn = (command: GtagCommand, ...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
    updateAnalyticsConsent?: (granted: boolean) => void;
    gaConsentGranted?: boolean;
  }
}

export default function Home() {
  const pathname = usePathname();

  // Send page_view on client-side route changes (after consent is granted)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.gaConsentGranted || !window.gtag) return;
    window.gtag("config", "G-2L6Y8KV74Y", {
      page_path: pathname,
    });
  }, [pathname]);

  return (
    <>
      {/* Google tag (gtag.js) is loaded only after analytics consent is granted */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;

          // Consent Mode: default to denied until user accepts in cookie settings
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted'
          });

          // Helper your cookie UI can call: window.updateAnalyticsConsent(true|false)
          window.updateAnalyticsConsent = function(granted) {
            var status = granted ? 'granted' : 'denied';
            gtag('consent', 'update', { analytics_storage: status });
            window.gaConsentGranted = granted === true;
            if (granted) {
              // Dynamically load GA script only after consent
              if (!document.querySelector('script[data-ga-loader]')) {
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=G-2L6Y8KV74Y';
                s.setAttribute('data-ga-loader', 'true');
                document.head.appendChild(s);
              }
              // Initialize GA4 config when consent is granted
              gtag('js', new Date());
              gtag('config', 'G-2L6Y8KV74Y', {
                anonymize_ip: true
              });
              try {
                localStorage.setItem('analytics_consent', 'granted');
              } catch(e) {}
            } else {
              try {
                localStorage.setItem('analytics_consent', 'denied');
              } catch(e) {}
            }
          };

          // Optional: auto-apply previously saved consent from localStorage
          try {
            var saved = localStorage.getItem('analytics_consent');
            if (saved === 'granted') {
              window.updateAnalyticsConsent(true);
            }
          } catch(e) {}
        `}
      </Script>

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
                  className="w-full sm:flex-1 inline-flex justify-center items-center text-center group relative px-8 py-4 rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:shadow-slate-900/25 dark:hover:shadow-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                >
                  <span className="relative z-10">Projekt starten</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/projects"
                  className="w-full sm:flex-1 inline-flex justify-center items-center text-center px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl font-medium text-lg transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg hover:-translate-y-1 hover:bg-white dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                >
                  Portfolio ansehen
                </Link>
              </div>

              {/* Scroll Indicator */}
              <div className="hidden lg:flex justify-center pt-6 pb-8">
                <div className="flex flex-col items-center animate-bounce">
                  <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-slate-400 dark:bg-slate-300 rounded-full mt-2 animate-pulse"></div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-light">
                    Scrollen
                  </span>
                </div>
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
                Von der Konzeption bis zur Umsetzung – professionelle Lösungen
                für Ihren digitalen Erfolg
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Websites */}
              <div className="group relative text-center p-8 rounded-3xl backdrop-blur-xl border border-slate-200/20 dark:border-slate-700/20 hover:-translate-y-4 transition-all duration-700 hover:rotate-1 bg-gradient-to-br from-white/60 via-white/40 to-white/60 dark:from-slate-800/60 dark:via-slate-800/40 dark:to-slate-800/60 shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>

                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                <div className="relative z-10">
                  <div className="relative w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-blue-500/30 group-hover:shadow-xl">
                    {/* Icon Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <Image
                      src="/icons/flat-color-icons--template.svg"
                      width={100}
                      height={100}
                      className="w-14 h-14 relative z-10 group-hover:drop-shadow-lg transition-all duration-500"
                      alt="Website Icon"
                    />
                  </div>
                  <h3 className="text-2xl font-light text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Websites
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                    Moderne, responsive Unternehmenswebsites die Ihre Marke
                    perfekt repräsentieren und Kunden überzeugen.
                  </p>

                  <Link
                    href="/projects"
                    className="mt-6 inline-flex items-center gap-2 text-sm dark:text-white mb-4 text-blue-600 font-medium"
                  >
                    Mehr erfahren
                    <svg
                      className="w-4 h-4 transform transition-transform"
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

              {/* Webshops */}
              <div className="group relative text-center p-8 rounded-3xl backdrop-blur-xl border border-slate-200/20 dark:border-slate-700/20 hover:-translate-y-4 transition-all duration-700 hover:-rotate-1 bg-gradient-to-br from-white/60 via-white/40 to-white/60 dark:from-slate-800/60 dark:via-slate-800/40 dark:to-slate-800/60 shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>

                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                <div className="relative z-10">
                  <div className="relative w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/40 dark:to-pink-800/40 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-purple-500/30 group-hover:shadow-xl">
                    {/* Icon Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <Image
                      src="/icons/flat-color-icons--shop.svg"
                      width={100}
                      height={100}
                      className="w-14 h-14 relative z-10 group-hover:drop-shadow-lg transition-all duration-500"
                      alt="Webshop Icon"
                    />
                  </div>
                  <h3 className="text-2xl font-light text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    Webshops
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                    Leistungsstarke E-Commerce-Lösungen mit optimierter User
                    Experience für maximalen Online-Umsatz.
                  </p>

                  <Link
                    href="/projects"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 font-medium"
                  >
                    Mehr erfahren
                    <svg
                      className="w-4 h-4 transform transition-transform"
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

              {/* Software */}
              <div className="group relative text-center p-8 rounded-3xl backdrop-blur-xl border border-slate-200/20 dark:border-slate-700/20 hover:-translate-y-4 transition-all duration-700 hover:rotate-1 bg-gradient-to-br from-white/60 via-white/40 to-white/60 dark:from-slate-800/60 dark:via-slate-800/40 dark:to-slate-800/60 shadow-lg hover:shadow-emerald-500/25 hover:shadow-2xl">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>

                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                <div className="relative z-10">
                  <div className="relative w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/40 dark:to-teal-800/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-emerald-500/30 group-hover:shadow-xl">
                    {/* Icon Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <Image
                      src="/icons/flat-color-icons--settings.svg"
                      width={100}
                      height={100}
                      className="w-14 h-14 relative z-10 group-hover:drop-shadow-lg transition-all duration-500 group-hover:animate-spin"
                      alt="Software Icon"
                    />
                  </div>
                  <h3 className="text-2xl font-light text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    Software
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                    Maßgeschneiderte Anwendungen und Tools, die Ihre
                    Geschäftsprozesse optimieren und automatisieren.
                  </p>

                  <Link
                    href="/projects"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    Mehr erfahren
                    <svg
                      className="w-4 h-4 transform transition-transform"
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
                Lassen Sie uns gemeinsam eine digitale Lösung entwickeln, die
                Ihr Unternehmen voranbringt.
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
    </>
  );
}
