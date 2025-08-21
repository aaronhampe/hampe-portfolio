"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { projects } from "../../../data/projects";

export default function NuxtMusicianSitePage() {
  const project = projects.find(p => p.slug === "nuxt-musician-site");

  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Icon icon="ph:caret-right" className="w-4 h-4 text-slate-400" />
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Projekte
                </Link>
              </li>
              <li>
                <Icon icon="ph:caret-right" className="w-4 h-4 text-slate-400" />
              </li>
              <li className="text-slate-900 dark:text-slate-100 font-medium">{project.title}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Project Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
                  <Icon icon="ph:globe-duotone" className="w-4 h-4" />
                  <span>Website</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-thin tracking-tight text-slate-900 dark:text-white">
                  {project.title}
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Meta Information */}
              <div className="grid grid-cols-2 gap-6">
                {project.year && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                      Jahr
                    </h3>
                    <p className="text-lg font-medium text-slate-900 dark:text-white">
                      {project.year}
                    </p>
                  </div>
                )}
                
                {project.client && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                      Kunde
                    </h3>
                    <p className="text-lg font-medium text-slate-900 dark:text-white">
                      {project.client}
                    </p>
                  </div>
                )}
              </div>

              {/* Technologies */}
              {project.technologies && (
                <div>
                  <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                    Technologien
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 font-medium text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Status */}
              {project.status && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    {project.status === "live" && "Live"}
                    {project.status === "development" && "In Entwicklung"}
                    {project.status === "completed" && "Abgeschlossen"}
                  </span>
                </div>
              )}
            </div>

            {/* Project Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <Image
                  src={project.cover}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl opacity-10 dark:opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {project.features && (
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-thin text-slate-900 dark:text-white mb-6">
                  Key <span className="font-light text-blue-600">Features</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Was dieses Projekt besonders macht
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800"
                  >
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon icon="ph:check-bold" className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {project.results && (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-thin text-slate-900 dark:text-white mb-6">
                <span className="font-light text-purple-600">Ergebnisse</span> & Impact
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-16">
                Die messbaren Erfolge dieses Projekts
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon icon="ph:chart-line-up-bold" className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-200 font-medium">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/20 dark:bg-purple-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
              Ähnliches Projekt
              <span className="font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> gewünscht?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <span className="relative z-10">Projekt besprechen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/projects"
                className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-medium text-lg transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Alle Projekte
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
