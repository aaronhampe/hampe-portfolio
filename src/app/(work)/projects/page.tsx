import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

// Filter und Kategorien für Projekte
const categories = [
  { id: "all", name: "Alle Projekte", count: projects.length },
  { id: "website", name: "Websites", count: projects.filter(p => p.category === "website").length },
  { id: "webshop", name: "Webshops", count: projects.filter(p => p.category === "webshop").length },
  { id: "software", name: "Software", count: projects.filter(p => p.category === "software").length },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-thin tracking-tight text-slate-900">
                Meine
                <span className="font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Projekte</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Eine Auswahl meiner bisherigen Arbeiten – von eleganten Websites bis hin zu komplexen Anwendungen
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">{projects.length}+</div>
                <div className="text-sm text-slate-600">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-600">Zufriedene Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">3+</div>
                <div className="text-sm text-slate-600">Jahre Erfahrung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm border-y border-slate-200/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="group px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl font-medium text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span>{category.name}</span>
                <span className="ml-2 px-2 py-1 bg-slate-100 group-hover:bg-blue-100 rounded-full text-xs transition-colors duration-300">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="group animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`flex flex-col ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } gap-12 items-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100`}
                >
                  {/* Project Image */}
                  <div className="flex-1 relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src={project.cover}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Project Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-600 border border-slate-200/50">
                      {project.category === 'website' && '🌐 Website'}
                      {project.category === 'webshop' && '🛒 Webshop'}
                      {project.category === 'software' && '⚡ Software'}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
                        {project.title}
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        {project.teaser}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    {project.technologies && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                          Technologien
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Project Meta */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-slate-500">
                      {project.year && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{project.year}</span>
                        </div>
                      )}
                      
                      {project.client && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                          </svg>
                          <span>{project.client}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* CTA */}
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-3 text-blue-600 font-medium group-hover:gap-5 transition-all duration-300">
                        <span>Projekt ansehen</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
              Haben Sie ein
              <span className="font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Projekt im Kopf?</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam Ihre Idee in eine beeindruckende digitale Lösung verwandeln.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
              >
                <span className="relative z-10">Projekt besprechen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href="/services"
                className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-medium text-lg transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:-translate-y-1"
              >
                Services ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}