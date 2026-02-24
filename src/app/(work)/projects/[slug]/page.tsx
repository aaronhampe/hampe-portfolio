"use client";
/* eslint-disable @typescript-eslint/no-namespace */
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Script from "next/script";
import { notFound } from "next/navigation";
import { use, useMemo } from "react";

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
   Tech Icons Configuration (reused from projects page)
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
  nuxt: {
    icon: "/icons/material-icon-theme--nuxt.svg",
    rgb: [0, 220, 130],
    label: "Nuxt",
  },
  react: {
    icon: "/icons/logos--react.svg",
    rgb: [97, 218, 251],
    label: "React",
  },
  vue: { icon: "/icons/logos--vue.svg", rgb: [65, 184, 131], label: "Vue" },
  php: { icon: "/icons/file-icons--php.svg", rgb: [0, 43, 123], label: "PHP" },
  elementor: {
    icon: "/icons/simple-icons--elementor.svg",
    rgb: [187, 105, 215],
    label: "Elementor",
  },
  wix: { icon: "/icons/logos--wix.svg", rgb: [0, 0, 0], label: "Wix" },
  threejs: {
    icon: "simple-icons:threedotjs",
    rgb: [0, 0, 0],
    label: "Three.js",
  },
  astro: { icon: "simple-icons:astro", rgb: [255, 93, 1], label: "Astro" },
  vite: { icon: "simple-icons:vite", rgb: [100, 108, 255], label: "Vite" },
  googleanalytics: {
    icon: "/icons/logos--google-analytics.svg",
    rgb: [227, 115, 0],
    label: "Google Analytics",
  },
  liquid: {
    icon: "/icons/catppuccin--liquid.svg",
    rgb: [138, 173, 244],
    label: "Liquid",
  },
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
  css: {
    icon: "/icons/skill-icons--css.svg",
    rgb: [38, 77, 228],
    label: "CSS",
  },
  tailwind: {
    icon: "/icons/devicon--tailwindcss.svg",
    rgb: [56, 189, 248],
    label: "Tailwind CSS",
  },
  sass: {
    icon: "/icons/vscode-icons--file-type-scss2.svg",
    rgb: [204, 102, 153],
    label: "Sass",
  },

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
  figma: {
    icon: "/icons/devicon--figma.svg",
    rgb: [10, 207, 131],
    label: "Figma",
  },
  python: {
    icon: "/icons/logos--python.svg",
    rgb: [55, 118, 171],
    label: "Python",
  },
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
      className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-zinc-800 dark:text-zinc-100 transition-all duration-150 hover:-translate-y-0.5"
      style={glass}
    >
      {isLocal ? (
        <Image
          src={conf.icon}
          alt={conf.label ?? tech}
          width={18}
          height={18}
          className="relative z-[1] w-[1.05em] h-[1.05em]"
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
   Page Component
------------------------------------------- */
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  if (!project) {
    notFound();
  }

  const relatedProjects = useMemo(
    () =>
      projects
        .filter(
          (p) => p.slug !== project.slug && p.category === project.category
        )
        .slice(0, 2),
    [project]
  );

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      {/* Iconify loader */}
      <Script
        src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Home</Link>
            <span className="text-zinc-300 dark:text-zinc-700">→</span>
            <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projekte</Link>
            <span className="text-zinc-300 dark:text-zinc-700">→</span>
            <span className="text-zinc-900 dark:text-white truncate max-w-[200px]">{project.title}</span>
          </div>

          <div className="max-w-4xl space-y-6">
            {/* Category & Status */}
            <div className="flex flex-wrap items-center gap-3">
              {project.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900">
                  {project.category === "website" && "Website"}
                  {project.category === "webshop" && "E-Commerce"}
                  {project.category === "software" && "Software"}
                </span>
              )}
              {project.status && (
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest ${
                  project.status === "live"
                    ? "bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                    : project.status === "development"
                    ? "bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    project.status === "live" ? "bg-green-500" : project.status === "development" ? "bg-yellow-500" : "bg-zinc-400"
                  }`} />
                  {project.status}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl">
              {project.teaser}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 font-medium pt-2">
              {project.year && <span>{project.year}</span>}
              {project.client && (
                <>
                  <div className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
                  <span>{project.client}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-zinc-200 dark:bg-zinc-800 aspect-[16/10] relative">
            <Image
              src={project.cover}
              alt={project.title}
              width={1200}
              height={750}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-24">

          {/* Description */}
          {project.description && (
            <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                  Projektbeschreibung
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && (
            <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                  Technologien
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="flex flex-wrap gap-3">
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
            </div>
          )}

          {/* Features & Results */}
          {(project.features || project.results) && (
            <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
              {/* Features */}
              {project.features && (
                <div className={`${project.results ? 'md:col-span-6' : 'md:col-span-12'} space-y-6`}>
                  <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 text-lg">
                        <svg className="w-5 h-5 mt-1 shrink-0 text-zinc-950 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                        <span className="leading-snug font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              {project.results && (
                <div className={`${project.features ? 'md:col-span-6' : 'md:col-span-12'} space-y-6`}>
                  <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                    Erfolge & Resultate
                  </h2>
                  <ul className="space-y-4">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 text-lg">
                        <svg className="w-5 h-5 mt-1 shrink-0 text-zinc-950 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                        <span className="leading-snug font-light">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Live Demo Button */}
          {project.liveUrl && (
            <div className="grid md:grid-cols-12 gap-8 items-start border-t border-zinc-200 dark:border-zinc-800 pt-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-medium text-zinc-950 dark:text-white leading-snug">
                  Live ansehen
                </h2>
              </div>
              <div className="md:col-span-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Live Demo ansehen</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 md:py-40 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex flex-col mb-16 md:mb-24">
              <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
                Ähnliche Projekte
              </h2>
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
                Weiter <span className="text-zinc-400 dark:text-zinc-600 font-serif italic">entdecken.</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/projects/${relatedProject.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[2rem] bg-zinc-200 dark:bg-zinc-800 aspect-[16/10] relative mb-6">
                    <Image
                      src={relatedProject.cover}
                      alt={relatedProject.title}
                      width={1200}
                      height={750}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-medium text-zinc-950 dark:text-white mb-3 tracking-tight">
                    {relatedProject.title}
                  </h4>
                  <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mb-4">
                    {relatedProject.teaser}
                  </p>
                  <div className="inline-flex items-center gap-2 text-zinc-950 dark:text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Fallstudie ansehen</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Projects + CTA */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              <span className="font-medium">Alle Projekte</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Projekt starten
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
