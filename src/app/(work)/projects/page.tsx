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
        "group relative px-8 py-4 rounded-full font-medium transition-all duration-500 focus:outline-none",
        "hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-4",
        active
          ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl"
          : "bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 hover:border-slate-300/50 dark:hover:border-slate-600/50",
      ].join(" ")}
    >
      <span className="relative z-10">{name}</span>
      <span
        className={[
          "ml-3 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500",
          active
            ? "bg-white/20 text-white/90 dark:bg-slate-900/20 dark:text-slate-900/90"
            : "bg-slate-100/80 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400",
        ].join(" ")}
      >
        {count}
      </span>
      {active && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-xl"></div>
      )}
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
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Iconify loader for web component <iconify-icon> */}
      <Script
        src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
        strategy="afterInteractive"
      />

      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-tighter text-slate-900 dark:text-white leading-none">
                Projekte
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                Ausgewählte Arbeiten, die Geschichten erzählen
              </p>
            </div>

            {/* Stats - Minimalistisch wie Apple */}
            <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 pt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-slate-900 dark:text-white mb-2">
                  {projects.length}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                  Projekte
                </div>
              </div>
              <div className="w-px h-12 sm:h-14 md:h-16 bg-slate-200 dark:bg-slate-800"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-slate-900 dark:text-white mb-2">
                  <CountUp
                    from={0}
                    to={20}
                    separator=""
                    direction="up"
                    duration={2}
                  />+
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                  Kunden
                </div>
              </div>
              <div className="w-px h-12 sm:h-14 md:h-16 bg-slate-200 dark:bg-slate-800"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-slate-900 dark:text-white mb-2">
                  <CountUp
                    from={0}
                    to={6}
                    separator=""
                    direction="up"
                    duration={2}
                  />+
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                  Jahre
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter - Apple-Style */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
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
          <p className="sr-only" aria-live="polite">
            {filtered.length} Projekte angezeigt.
          </p>
        </div>
      </section>

      {/* Projects Grid - Minimalistisch und elegant */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="space-y-32 max-w-7xl mx-auto">
            {filtered.map((project, index) => (
              <div
                key={project.slug}
                className="group animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`grid ${
                    index % 2 === 1 ? "lg:grid-cols-[1fr,1.2fr]" : "lg:grid-cols-[1.2fr,1fr]"
                  } gap-16 lg:gap-20 items-center transition-all duration-700 hover:-translate-y-4 group`}
                >
                  {/* Bild */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-2xl group-hover:shadow-3xl transition-shadow duration-700">
                      <Image
                        src={project.cover}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Subtiler Badge statt Nummer */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content - Apple-Style Clean */}
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="space-y-6">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100/80 dark:bg-slate-800/60 backdrop-blur-sm">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                          {project.category === "website" && "Website"}
                          {project.category === "webshop" && "E-Commerce"}
                          {project.category === "software" && "Software"}
                        </span>
                      </div>

                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-slate-900 dark:text-white tracking-tight leading-none">
                        {project.title}
                      </h2>
                      
                      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                        {project.teaser}
                      </p>
                    </div>

                    {/* Tech Stack - Minimal */}
                    {project.technologies && (
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 4)
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
                          {project.technologies.length > 4 && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-slate-500 dark:text-slate-500 bg-slate-100/50 dark:bg-slate-800/50">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Meta Information */}
                    <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-500">
                      {project.year && <span>{project.year}</span>}
                      {project.client && (
                        <>
                          <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                          <span>{project.client}</span>
                        </>
                      )}
                    </div>

                    {/* CTA - Apple Style */}
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-3 text-blue-600 dark:text-blue-400 font-medium text-lg group-hover:gap-5 transition-all duration-500">
                        <span>Ansehen</span>
                        <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-400 dark:group-hover:text-slate-900 transition-all duration-300">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Minimalism */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-thin text-white tracking-tight leading-none">
              Ein Projekt<br />im Kopf?
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Verwandeln wir Ihre Vision in digitale Realität.
            </p>
            
            <div className="pt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-slate-900 rounded-full font-medium text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <span>Projekt starten</span>
                <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
