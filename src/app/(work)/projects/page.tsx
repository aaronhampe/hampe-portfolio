"use client";
/* eslint-disable @typescript-eslint/no-namespace */
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Script from "next/script";
import { useMemo, useState } from "react";
import CountUp from "@/blocks/TextAnimations/CountUp/CountUp";

// Add JSX typing for the custom element <iconify-icon>
import "react";
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { icon: string };
    }
  }
}

/* -------------------------------------------
   Kategorien
------------------------------------------- */
const categories = [
  { id: "all", name: "Alle Projekte" },
  { id: "website", name: "Websites" },
  { id: "webshop", name: "Webshops" },
  { id: "software", name: "Software" },
] as const;
type CategoryId = (typeof categories)[number]["id"];

/* -------------------------------------------
   Iconify: Tech-Map (konsistent, sortiert)
------------------------------------------- */
const ALIASES: Record<string, string> = {
  reactjs: "react",
  "react.js": "react",
  reactnative: "react",
  "next.js": "nextjs",
  nextauthjs: "nextjs",
  nodejs: "node",
  "node.js": "node",
  "three.js": "threejs",
  vue3: "vue",
  shopifyliquid: "shopify",
  shopifycli: "shopify",
  muxvideo: "mux",
};

const TECH_MAP: Record<
  string,
  { icon: string; rgb: [number, number, number]; label?: string }
> = {
  /* Frameworks */
  nextjs: { icon: "simple-icons:nextdotjs", rgb: [0, 0, 0], label: "Next.js" },
  nuxt: { icon: "/icons/material-icon-theme--nuxt.svg", rgb: [0, 220, 130], label: "Nuxt" },
  react: { icon: "/icons/logos--react.svg", rgb: [97, 218, 251], label: "React" },
  vue: { icon: "/icons/logos--vue.svg", rgb: [65, 184, 131], label: "Vue" },
  php: { icon: "/icons/logos--php.svg", rgb: [0, 43, 123], label: "PHP" },
  elementor: { icon: "/icons/simple-icons--elementor.svg", rgb: [255, 93, 1], label: "Elementor" },
  threejs: {
    icon: "simple-icons:threedotjs",
    rgb: [0, 0, 0],
    label: "Three.js",
  },
  astro: { icon: "simple-icons:astro", rgb: [255, 93, 1], label: "Astro" },
  wix: { icon: "/icons/logos--wix.svg", rgb: [0, 0, 0], label: "Wix" },
  vite: { icon: "simple-icons:vite", rgb: [100, 108, 255], label: "Vite" },
  googleanalytics: { icon: "/icons/logos--google-analytics.svg", rgb: [227, 115, 0], label: "Google Analytics" },
  liquid: { icon: "/icons/catppuccin--liquid.svg", rgb: [138, 173, 244], label: "Liquid" },
  /* Web Core */
  typescript: {
    icon: "/icons/devicon--typescript.svg",
    rgb: [49, 120, 198],
    label: "TypeScript",
  },
  javascript: {
    icon: "/icons/logos--javascript.svg",
    rgb: [247, 223, 30],
    label: "JavaScript",
  },
  html5: { icon: "simple-icons:html5", rgb: [227, 79, 38], label: "HTML5" },
  css: { icon: "/icons/skill-icons--css.svg", rgb: [38, 77, 228], label: "CSS" },
  tailwind: {
    icon: "/icons/devicon--tailwindcss.svg",
    rgb: [56, 189, 248],
    label: "Tailwind CSS",
  },
  sass: { icon: "/icons/vscode-icons--file-type-scss2.svg", rgb: [204, 102, 153], label: "Sass" },

  /* Backend / Runtime */
  node: {
    icon: "simple-icons:nodedotjs",
    rgb: [51, 153, 51],
    label: "Node.js",
  },
  express: { icon: "simple-icons:express", rgb: [0, 0, 0], label: "Express" },
  graphql: {
    icon: "simple-icons:graphql",
    rgb: [225, 0, 152],
    label: "GraphQL",
  },
  d3: { icon: "simple-icons:d3dotjs", rgb: [241, 101, 41], label: "D3.js" },
  socketio: {
    icon: "simple-icons:socketdotio",
    rgb: [0, 0, 0],
    label: "Socket.io",
  },

  /* Databases & Infra */
  prisma: { icon: "simple-icons:prisma", rgb: [0, 0, 0], label: "Prisma" },
  planetscale: {
    icon: "simple-icons:planetscale",
    rgb: [0, 0, 0],
    label: "PlanetScale",
  },
  mysql: { icon: "simple-icons:mysql", rgb: [68, 121, 161], label: "MySQL" },
  postgresql: {
    icon: "simple-icons:postgresql",
    rgb: [51, 103, 145],
    label: "PostgreSQL",
  },
  mongodb: {
    icon: "simple-icons:mongodb",
    rgb: [88, 171, 96],
    label: "MongoDB",
  },
  redis: { icon: "simple-icons:redis", rgb: [228, 45, 36], label: "Redis" },
  supabase: {
    icon: "simple-icons:supabase",
    rgb: [16, 185, 129],
    label: "Supabase",
  },
  docker: { icon: "simple-icons:docker", rgb: [36, 150, 237], label: "Docker" },

  /* Payments / APIs / Services */
  stripe: { icon: "simple-icons:stripe", rgb: [99, 91, 255], label: "Stripe" },
  twilio: { icon: "simple-icons:twilio", rgb: [224, 39, 67], label: "Twilio" },
  mux: { icon: "simple-icons:mux", rgb: [0, 0, 0], label: "Mux" },
  mapbox: { icon: "simple-icons:mapbox", rgb: [0, 0, 0], label: "Mapbox" },

  /* Commerce & CMS */
  shopify: {
    icon: "/icons/logos--shopify.svg",
    rgb: [96, 189, 99],
    label: "Shopify",
  },
  woocommerce: {
    icon: "/icons/devicon--woocommerce.svg",
    rgb: [146, 86, 145],
    label: "WooCommerce",
  },
  wordpress: {
    icon: "/icons/bi--wordpress.svg",
    rgb: [33, 117, 155],
    label: "WordPress",
  },

  /* Design & Others */
  figma: { icon: "/icons/devicon--figma.svg", rgb: [10, 207, 131], label: "Figma" },
  python: { icon: "/icons/logos--python.svg", rgb: [55, 118, 171], label: "Python" },
};

const norm = (s: string) =>
  (s || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[\._-]/g, "");

type TechBadgeProps = { tech: string };

function resolveTech(tech: string) {
  const raw = norm(tech);
  const key = ALIASES[raw] || raw;
  const fallback = key.replace(/(js|dotjs)$/g, "");
  return (
    TECH_MAP[key] ||
    TECH_MAP[fallback] || {
      icon: "ph:code-bold",
      rgb: [180, 180, 180] as [number, number, number],
    }
  );
}

function TechBadge({ tech }: TechBadgeProps) {
  const conf = resolveTech(tech);
  const [r, g, b] = conf.rgb;
  const glass: React.CSSProperties = {
    background: `linear-gradient(135deg, rgba(${r},${g},${b},0.14) 0%, rgba(${r},${g},${b},0.06) 100%)`,
    border: `1px solid rgba(${r},${g},${b},0.35)`,
    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 18px rgba(${r},${g},${b},0.22)`,
    WebkitBackdropFilter: "blur(8px) saturate(1.2)",
    backdropFilter: "blur(8px) saturate(1.2)",
  };
  const iconStyle: React.CSSProperties = {
    color: `rgb(${r},${g},${b})`,
    filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))",
  };

  const isLocal = typeof conf.icon === "string" && conf.icon.startsWith("/");

  return (
    <span
      className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-slate-800 dark:text-slate-100 transition-all duration-150 hover:-translate-y-0.5"
      style={glass}
    >
      {isLocal ? (
        <Image
          src={conf.icon}
          alt={conf.label ?? tech}
          width={18}
          height={18}
          className="relative z-[1] w-[1.05em] h-[1.05em]"
          // Note: coloring an external SVG via CSS only works if the SVG uses `currentColor`.
          style={iconStyle}
        />
      ) : (
        <iconify-icon
          icon={conf.icon}
          className="relative z-[1] w-[1.05em] h-[1.05em]"
          style={iconStyle}
        />
      )}
      <span className="relative z-[1]">{conf.label ?? tech}</span>
    </span>
  );
}

/* -------------------------------------------
   Filter-Kachel
------------------------------------------- */
type FilterButtonProps = {
  name: string;
  count: number;
  active: boolean;
  onClick: () => void;
};
function FilterButton({ name, count, active, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "group px-6 py-3 rounded-2xl font-medium transition-all duration-300 focus:outline-none",
        "hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-blue-400",
        active
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-2 border-transparent shadow-lg hover:shadow-xl"
          : "bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-300 dark:hover:border-blue-400/60 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg",
      ].join(" ")}
    >
      <span>{name}</span>
      <span
        className={[
          "ml-2 px-2 py-1 rounded-full text-xs transition-colors duration-300 border",
          active
            ? "bg-white/20 text-white border-white/30"
            : "bg-slate-100 dark:bg-slate-800 border-slate-200/60 dark:border-slate-700/60 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/40",
        ].join(" ")}
      >
        {count}
      </span>
    </button>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState<CategoryId>("all");

  // Counts (statisch aus Gesamtliste)
  const counts = useMemo(() => {
    const base = {
      all: projects.length,
      website: 0,
      webshop: 0,
      software: 0,
    } as Record<CategoryId, number>;
    projects.forEach((p) => {
      if (p.category === "website") base.website++;
      if (p.category === "webshop") base.webshop++;
      if (p.category === "software") base.software++;
    });
    return base;
  }, []);

  // Gefilterte Liste
  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Iconify loader for web component <iconify-icon> */}
      <Script
        src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
        strategy="afterInteractive"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-thin tracking-tight text-slate-900 dark:text-white">
                Meine
                <span className="font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Projekte
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            
            <p className="text-md md:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Eine Auswahl meiner bisherigen Arbeiten – von eleganten Websites
              bis hin zu komplexen Anwendungen
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {projects.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Projekte
                </div>
              </div>
              <div className="text-center">
                <CountUp
                  from={0}
                  to={20}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-3xl font-bold text-slate-900 dark:text-white"
                />+
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Zufriedene Kunden
                </div>
              </div>
              <div className="text-center">
                
                <CountUp
                  from={0}
                  to={6}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-3xl font-bold text-slate-900 dark:text-white"
                />+
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Jahre Erfahrung
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-y border-slate-200/50 dark:border-slate-700/50">
        <div className="container mx-auto px-6">
          <div
            className="flex flex-wrap justify-center gap-4"
            role="toolbar"
            aria-label="Projektfilter"
          >
            {categories.map((c) => (
              <FilterButton
                key={c.id}
                name={c.name}
                count={counts[c.id]}
                active={active === c.id}
                onClick={() => setActive(c.id)}
              />
            ))}
          </div>
          {/* Live-Region für Screenreader */}
          <p className="sr-only" aria-live="polite">
            {filtered.length} Projekte angezeigt.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 max-w-7xl mx-auto">
            {filtered.map((project, index) => (
              <div
                key={project.slug}
                className="group animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`flex flex-col ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }
                              gap-12 items-center rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2
                              bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700
                              shadow-lg hover:shadow-2xl`}
                >
                  {/* Bild */}
                  <div className="flex-1 relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={project.cover}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Nummer */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Kategorie-Badge */}
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium
                                    bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm
                                    text-slate-600 dark:text-slate-300
                                    border border-slate-200/50 dark:border-slate-700/60"
                    >
                      {project.category === "website" && "🌐 Website"}
                      {project.category === "webshop" && "🛒 Webshop"}
                      {project.category === "software" && "⚡ Software"}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-4">
                        {project.title}
                      </h2>
                      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {project.teaser}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    {project.technologies && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Technologien
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                          {project.technologies
                            .slice()
                            .sort((a: string, b: string) =>
                              (resolveTech(a).label ?? a).localeCompare(
                                resolveTech(b).label ?? b,
                                "de",
                                { sensitivity: "base" }
                              )
                            )
                            .map((tech: string) => (
                              <TechBadge key={tech} tech={tech} />
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-slate-500 dark:text-slate-400">
                      {project.year && (
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span>{project.year}</span>
                        </div>
                      )}
                      {project.client && (
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z"
                            />
                          </svg>
                          <span>{project.client}</span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-3 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-5 transition-all duration-300">
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
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/20 dark:bg-purple-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
              Haben Sie ein
              <span className="font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Projekt im Kopf?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam Ihre Idee in eine beeindruckende digitale
              Lösung verwandeln.
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
                href="/services"
                className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-medium text-lg transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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
