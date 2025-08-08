/* eslint-disable @typescript-eslint/no-namespace */
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Script from "next/script";

// Add JSX typing for the custom element <iconify-icon>
import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon: string;
      };
    }
  }
}


// Filter und Kategorien für Projekte
const categories = [
  { id: "all", name: "Alle Projekte", count: projects.length },
  { id: "website", name: "Websites", count: projects.filter(p => p.category === "website").length },
  { id: "webshop", name: "Webshops", count: projects.filter(p => p.category === "webshop").length },
  { id: "software", name: "Software", count: projects.filter(p => p.category === "software").length },
];

// Map tech labels to icon + brand RGB
const TECH_MAP: Record<string, { icon: string; rgb: [number, number, number]; label?: string }> = {
  react:       { icon: "simple-icons:react",       rgb: [97, 218, 251] },
  "reactjs":   { icon: "simple-icons:react",       rgb: [97, 218, 251] },
  "reactnative": { icon: "skill-icons:react-dark",     rgb: [97, 218, 251] },

  nextjs:      { icon: "simple-icons:nextdotjs",   rgb: [0, 0, 0] },
  "next.js":   { icon: "simple-icons:nextdotjs",   rgb: [0, 0, 0] },  
  "nextauthjs": { icon: "simple-icons:nextdotjs", rgb: [0, 0, 0] },

  nuxt:       { icon: "simple-icons:nuxtdotjs", rgb: [0, 220, 130] },

  vue:        { icon: "logos:vue",       rgb: [0, 185, 230] },
  "vue3":    { icon: "logos:vue",        rgb: [0, 185, 230] },

  prisma:    { icon: "material-icon-theme:prisma", rgb: [0, 0, 0] },

  stripe:    { icon: "simple-icons:stripe",        rgb: [129, 171, 250] },

  shopify:   { icon: "simple-icons:shopify",       rgb: [96, 189, 99] },
  "shopifyliquid": { icon: "simple-icons:shopify", rgb: [96, 189, 99] },
  "shopifycli": { icon: "simple-icons:shopify", rgb: [96, 189, 99] },

  postgresql: { icon: "simple-icons:postgresql",   rgb: [0, 0, 0] },

  mapbox: { icon: "simple-icons:mapbox", rgb: [0, 0, 0] },

  mongodb: { icon: "simple-icons:mongodb", rgb: [0, 0, 0] },

  socketio: { icon: "simple-icons:socketdotio", rgb: [0, 0, 0] },

  supabase: { icon: "simple-icons:supabase", rgb: [0, 0, 0] },

  d3: { icon: "simple-icons:d3dotjs", rgb: [0, 0, 0] },

  redis: { icon: "simple-icons:redis", rgb: [0, 0, 0] },

  twilio: { icon: "devicon:twilio", rgb: [241, 46, 69] },

  express: { icon: "devicon:express", rgb: [0, 0, 0] },

  planetscale: { icon: "logos:planetscale", rgb: [0, 0, 0] },

  mux: { icon: "devicon:mux", rgb: [0, 0, 0] },
  "muxvideo": { icon: "devicon:mux", rgb: [0, 0, 0] },

  figma: { icon: "devicon:figma" , rgb: [10, 207, 131] },

  woocommerce: { icon: "devicon:woocommerce", rgb: [150, 88, 138] },
  wordpress:   { icon: "simple-icons:wordpress",   rgb: [0, 115, 170] },

  typescript:  { icon: "simple-icons:typescript",  rgb: [49, 120, 198] },
  javascript:  { icon: "simple-icons:javascript",  rgb: [247, 223, 30] },
  node:        { icon: "simple-icons:nodedotjs",   rgb: [51, 153, 51] },
  "nodejs":    { icon: "simple-icons:nodedotjs",   rgb: [51, 153, 51] },
  "node.js":   { icon: "simple-icons:nodedotjs",   rgb: [51, 153, 51] },

  tailwind:    { icon: "simple-icons:tailwindcss", rgb: [56, 189, 248] },
  "tailwindcss": { icon: "simple-icons:tailwindcss", rgb: [56, 189, 248] },

  sass:        { icon: "simple-icons:sass",        rgb: [204, 102, 153] },
  css:         { icon: "simple-icons:css3",        rgb: [38, 77, 228] },
  css3:        { icon: "simple-icons:css3",        rgb: [38, 77, 228] },
  html:        { icon: "simple-icons:html5",       rgb: [227, 79, 38] },
  html5:       { icon: "simple-icons:html5",       rgb: [227, 79, 38] },

  php:         { icon: "simple-icons:php",         rgb: [119, 123, 179] },
  mysql:       { icon: "simple-icons:mysql",       rgb: [68, 121, 161] },

  firebase:    { icon: "simple-icons:firebase",    rgb: [255, 202, 40] },
  vite:        { icon: "simple-icons:vite",        rgb: [100, 108, 255] },
  astro:       { icon: "simple-icons:astro",       rgb: [255, 93, 1] },
  threejs:     { icon: "simple-icons:threedotjs",  rgb: [0, 0, 0] },
  "three.js":  { icon: "simple-icons:threedotjs",  rgb: [0, 0, 0] },
  graphql:     { icon: "simple-icons:graphql",     rgb: [225, 0, 152] },
  docker:      { icon: "simple-icons:docker",      rgb: [36, 150, 237] },
  python:      { icon: "simple-icons:python",      rgb: [55, 118, 171] },
};



const norm = (s: string) =>
  (s || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[\._-]/g, "");

type TechBadgeProps = { tech: string };

function TechBadge({ tech }: TechBadgeProps) {
  const key = norm(tech);
  const conf =
    TECH_MAP[key] ||
    TECH_MAP[key.replace(/(js|dotjs)$/g, "")] || {
      icon: "ph:code-bold",
      rgb: [180, 180, 180] as [number, number, number],
    };
  const [r, g, b] = conf.rgb;
  const glass: React.CSSProperties = {
    background: `linear-gradient(135deg, rgba(${r},${g},${b},0.14) 0%, rgba(${r},${g},${b},0.06) 100%)`,
    border: `1px solid rgba(${r},${g},${b},0.35)`,
    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.15), 0 8px 18px rgba(${r},${g},${b},0.25)`,
    WebkitBackdropFilter: "blur(8px) saturate(1.2)",
    backdropFilter: "blur(8px) saturate(1.2)",
  };
  const iconStyle: React.CSSProperties = { color: `rgb(${r},${g},${b})`, filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))" };

  return (
    <span
      className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-slate-800 transition-all duration-150 hover:-translate-y-0.5"
      style={glass}
    >
      {/* gloss highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-[120%] -left-[60%] w-[220%] h-[220%] z-0"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(255,255,255,0.38), transparent 55%)",
          transform: "rotate(-18deg)",
        }}
      />
      <iconify-icon icon={conf.icon} className="relative z-[1] w-[1.05em] h-[1.05em]" style={iconStyle} />
      <span className="relative z-[1]">{tech}</span>
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Iconify loader for web component <iconify-icon> */}
      <Script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js" strategy="afterInteractive" />
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
                          {project.technologies.map((tech: string) => (
                            <TechBadge key={tech} tech={tech} />
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