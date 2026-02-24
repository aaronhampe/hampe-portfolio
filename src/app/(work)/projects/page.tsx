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
  php: { icon: "/icons/file-icons--php.svg", rgb: [0, 43, 123], label: "PHP" },
  elementor: { icon: "/icons/simple-icons--elementor.svg", rgb: [187, 105, 215], label: "Elementor" },
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
    icon: "/icons/skill-icons--wordpress.svg",
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
  const isLocal = typeof conf.icon === "string" && conf.icon.startsWith("/");

  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 transition-colors duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
    >
      {isLocal ? (
        <Image
          src={conf.icon}
          alt={conf.label ?? tech}
          width={14}
          height={14}
          className="relative z-[1] w-[1em] h-[1em]"
        />
      ) : (
        <iconify-icon
          icon={conf.icon}
          className="relative z-[1] w-[1em] h-[1em]"
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
        "group relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none flex items-center border",
        active
          ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 border-zinc-950 dark:border-white"
          : "bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-500",
      ].join(" ")}
    >
      <span className="relative z-10">{name}</span>
      <span
        className={[
          "ml-2 flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold transition-all duration-300",
          active
            ? "bg-white/20 text-white dark:bg-zinc-950/20 dark:text-zinc-950"
            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700",
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
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      {/* Iconify loader for web component <iconify-icon> */}
      <Script
        src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase uppercase">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Ausgewählte Arbeiten, die <span className="font-serif italic">Standards setzen.</span>
            </p>
          </div>

          {/* Minimalist Stats */}
          <div className="flex gap-8 md:gap-12 pb-2">
            <div>
              <div className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white mb-1">
                {projects.length}
              </div>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Projekte
              </div>
            </div>
            <div className="w-px bg-zinc-300 dark:bg-zinc-700"></div>
            <div>
              <div className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white mb-1">
                <CountUp from={0} to={20} separator="" direction="up" duration={2} />+
              </div>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Kunden
              </div>
            </div>
            <div className="w-px hidden sm:block bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="hidden sm:block">
              <div className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white mb-1">
                <CountUp from={0} to={6} separator="" direction="up" duration={2} />+
              </div>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Jahre
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      

      {/* Projects Feed - Brutalist/Editorial */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="space-y-32 md:space-y-48">
            {filtered.map((project, index) => (
              <div
                key={project.slug}
                className="group animate-[fadeIn_1s_ease_both]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                >
                  {/* Image Container */}
                  <div className={`col-span-1 lg:col-span-8 overflow-hidden rounded-[2rem] bg-zinc-200 dark:bg-zinc-800 aspect-[4/3] md:aspect-[16/10] relative ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <Image
                      src={project.cover}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>

                  {/* Text Container - Editorial */}
                  <div className={`col-span-1 lg:col-span-4 flex flex-col ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                    <div className="mb-8">
                       <span className="text-6xl md:text-8xl font-light text-zinc-200 dark:text-zinc-800 font-serif italic block mb-4">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-zinc-300 dark:border-zinc-700 text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
                        {project.category === "website" && "Website"}
                        {project.category === "webshop" && "E-Commerce"}
                        {project.category === "software" && "Software"}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white tracking-tight leading-[1.1] mb-6">
                        {project.title}
                      </h2>
                      <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mb-8">
                        {project.teaser}
                      </p>
                    </div>

                    {/* Minimal Tech Badges */}
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-8">
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
                          <span className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-500">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 pt-6">
                      <div className="flex items-center gap-4 text-sm text-zinc-500 font-medium">
                        {project.year && <span>{project.year}</span>}
                        {project.client && (
                          <>
                            <div className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
                            <span>{project.client}</span>
                          </>
                        )}
                      </div>
                      <div className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-48 bg-zinc-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center relative z-10">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[1.0] w-full">
              Ein Projekt <br />
              <span className="text-zinc-500 font-serif italic">im Kopf?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-16 max-w-2xl">
              Lassen Sie uns gemeinsam eine digitale Erfahrung schaffen, die Maßstäbe setzt und Ihr Business beschleunigt.
            </p>

            <Link
              href="/contact"
              className="px-10 py-5 rounded-full bg-white text-zinc-950 font-medium text-lg tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300 flex justify-center items-center"
            >
              Projekt starten
            </Link>

          </div>
        </div>
      </section>
      
      {/* Global Animation Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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
