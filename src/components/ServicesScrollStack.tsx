"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const PEEK_HEIGHT = 64; // px each card peeks above the previous
const HEADER_OFFSET = 80; // px to offset from top of viewport (clear the header)
const MAX_SCALE_DOWN = 0.06; // each card in the stack scales down by this much per depth level

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Unternehmensauftritte, die Ihre Marke schärfen. Ultraschnell, responsive und visuell überragend – gebaut für Performance und Eindruck.",
    linkText: "Entdecken",
    linkHref: "/projects",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    accent: "#f4f4f5",
    bg: "bg-zinc-50 dark:bg-zinc-900",
    border: "border-zinc-200 dark:border-zinc-800",
    numberColor: "text-zinc-200 dark:text-zinc-700",
    titleColor: "text-zinc-950 dark:text-white",
    descColor: "text-zinc-500 dark:text-zinc-400",
    tagBg: "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300",
    video: "/videos/website-hampe-animation-one.mp4",
  },
  {
    number: "02",
    title: "Webshops",
    description:
      "Reibungslose E-Commerce-Erlebnisse, optimiert für Konversionen und skalierbares Wachstum. Von der Produktseite bis zum Checkout.",
    linkText: "Erfahren",
    linkHref: "/projects",
    tags: ["Shopify", "WooCommerce", "Stripe", "Analytics"],
    accent: "#18181b",
    bg: "bg-zinc-950 dark:bg-zinc-100",
    border: "border-zinc-800 dark:border-zinc-200",
    numberColor: "text-zinc-800 dark:text-zinc-200",
    titleColor: "text-white dark:text-zinc-950",
    descColor: "text-zinc-400 dark:text-zinc-600",
    tagBg: "bg-zinc-800 dark:bg-zinc-200 text-zinc-300 dark:text-zinc-700",
    video: "/videos/website-hampe-animation-second.mp4",
  },
  {
    number: "03",
    title: "Software & Tools",
    description:
      "Komplexe Datensysteme, SaaS-Anwendungen und maßgeschneiderte Dashboards für smarte Workflows. Skalierbar, wartbar, zukunftssicher.",
    linkText: "Kennenlernen",
    linkHref: "/projects",
    tags: ["Node.js", "PostgreSQL", "REST/GraphQL", "SaaS"],
    accent: "#3f3f46",
    bg: "bg-zinc-800 dark:bg-zinc-200",
    border: "border-zinc-700 dark:border-zinc-300",
    numberColor: "text-zinc-600 dark:text-zinc-400",
    titleColor: "text-white dark:text-zinc-950",
    descColor: "text-zinc-400 dark:text-zinc-600",
    tagBg: "bg-zinc-700 dark:bg-zinc-300 text-zinc-200 dark:text-zinc-800",
    video: "/videos/website-hampe-animation-three.mp4",
  },
];

export default function ServicesScrollStack() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardRefs.current;

    const onScroll = () => {
      cards.forEach((card, i) => {
        if (!card) return;
        const stickyTop = HEADER_OFFSET + i * PEEK_HEIGHT;
        const rect = card.getBoundingClientRect();

        // How far past the sticky point is this card (positive = pinned/past)
        const overscroll = stickyTop - rect.top;

        if (overscroll <= 0) {
          // Card hasn't been pinned yet — full scale
          card.style.transform = "scale(1) translateZ(0)";
          card.style.transformOrigin = "top center";
          return;
        }

        // Find how many cards with higher index are also pinned above us
        let depth = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const otherCard = cards[j];
          if (!otherCard) continue;
          const otherTop = HEADER_OFFSET + j * PEEK_HEIGHT;
          const otherRect = otherCard.getBoundingClientRect();
          const otherOverscroll = otherTop - otherRect.top;
          if (otherOverscroll > 0) depth++;
        }

        const scale = Math.max(0.8, 1 - depth * MAX_SCALE_DOWN);
        card.style.transform = `scale(${scale}) translateZ(0)`;
        card.style.transformOrigin = "top center";
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {services.map((service, i) => (
        <div
          key={service.number}
          ref={(el) => { cardRefs.current[i] = el; }}
          style={{
            position: "sticky",
            top: `${HEADER_OFFSET + i * PEEK_HEIGHT}px`,
            zIndex: i + 1,
            willChange: "transform",
            transition: "transform 0.15s ease-out",
            minHeight: `calc(100vh - ${HEADER_OFFSET + i * PEEK_HEIGHT}px)`,
          }}
          className={`w-full rounded-t-[2.5rem] ${i === 0 ? "rounded-b-[2.5rem]" : ""} border ${service.border} ${service.bg} overflow-hidden relative`}
        >
          <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24 h-full flex flex-col justify-between" style={{ minHeight: `calc(100vh - ${HEADER_OFFSET + i * PEEK_HEIGHT}px)` }}>
            {/* Top row: number + icon */}
            <div className="flex items-start justify-between mb-8 md:mb-12">
              <span className={`text-[10rem] md:text-[14rem] leading-none font-bold select-none ${service.numberColor}`}>
                {service.number}
              </span>
              <div className={`w-14 h-14 rounded-full border flex items-center justify-center mt-4 ${service.border} ${service.titleColor}`}>
                
              </div>
            </div>

            {/* Animation Video */}
            {service.video && (
              <div className="absolute top-8 right-8 md:top-12 md:right-16 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden opacity-80">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src={service.video}
                />
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col md:flex-row items-end justify-between gap-12">
              <div className="max-w-2xl">
                <h3 className={`text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.0] ${service.titleColor}`}>
                  {service.title}
                </h3>
                <p className={`text-xl md:text-2xl leading-relaxed font-light ${service.descColor}`}>
                  {service.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase ${service.tagBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <Link
                  href={service.linkHref}
                  className={`group inline-flex items-center gap-3 text-lg font-medium ${service.titleColor} hover:opacity-70 transition-opacity duration-300`}
                >
                  <span>{service.linkText}</span>
                  <span className={`w-10 h-10 rounded-full border flex items-center justify-center ${service.border} group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
