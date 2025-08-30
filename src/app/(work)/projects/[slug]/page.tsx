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
  php: { icon: "/icons/logos--php.svg", rgb: [0, 43, 123], label: "PHP" },
  elementor: {
    icon: "/icons/simple-icons--elementor.svg",
    rgb: [255, 93, 1],
    label: "Elementor",
  },
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
    icon: "/icons/bi--wordpress.svg",
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Iconify loader */}
      <Script
        src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-8">
            <Link
              href="/"
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Home
            </Link>
            <span>→</span>
            <Link
              href="/projects"
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Projekte
            </Link>
            <span>→</span>
            <span className="text-slate-900 dark:text-slate-100">
              {project.title}
            </span>
          </div>

          {/* Project Header */}
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-thin tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              {project.teaser}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              {project.year && (
                <div className="flex items-center gap-2">
                  <iconify-icon icon="ph:calendar" className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.client && (
                <div className="flex items-center gap-2">
                  <iconify-icon icon="ph:user" className="w-4 h-4" />
                  <span>{project.client}</span>
                </div>
              )}
              {project.category && (
                <div className="flex items-center gap-2">
                  <iconify-icon icon="ph:tag" className="w-4 h-4" />
                  <span className="capitalize">{project.category}</span>
                </div>
              )}
              {project.status && (
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "live"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : project.status === "development"
                      ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                      : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      project.status === "live"
                        ? "bg-green-500"
                        : project.status === "development"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <span className="capitalize">{project.status}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl">
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
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Description */}
            {project.description && (
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white mb-6">
                  Projektbeschreibung
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}

            {/* Technologies */}
            {project.technologies && (
              <div className="text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white">
                  Verwendete Technologien
                </h2>
                <div className="flex flex-wrap gap-3 justify-center">
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

            {/* Features & Results Grid */}
            {(project.features || project.results) && (
              <div className="grid md:grid-cols-2 gap-12">
                {/* Features */}
                {project.features && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-light text-slate-900 dark:text-white flex items-center gap-3">
                      <iconify-icon
                        icon="ph:list-checks"
                        className="w-6 h-6 text-blue-600"
                      />
                      Key Features
                    </h2>
                    <ul className="space-y-4">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Results */}
                {project.results && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-light text-slate-900 dark:text-white flex items-center gap-3">
                      <iconify-icon
                        icon="ph:chart-line-up"
                        className="w-6 h-6 text-green-600"
                      />
                      Erfolge & Resultate
                    </h2>
                    <ul className="space-y-4">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-300">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Live Demo Button */}
            {project.liveUrl && (
              <div className="text-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Image
                    src="/icons/iconoir--arrow-right.svg"
                    alt="Arrow Right"
                    width={20}
                    height={20}
                    className="w-5 h-5 bg-white border border-white rounded-full"
                  />
                  <span>Live Demo ansehen</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-4">
                  Ähnliche Projekte
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    href={`/projects/${relatedProject.slug}`}
                    className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-700">
                      <Image
                        src={relatedProject.cover}
                        alt={relatedProject.title}
                        width={600}
                        height={375}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">
                        {relatedProject.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                        {relatedProject.teaser}
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                        <span>Mehr erfahren</span>
                        <iconify-icon
                          icon="ph:arrow-right"
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <iconify-icon icon="ph:arrow-left" className="w-5 h-5" />
            <span>Zurück zu allen Projekten</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
