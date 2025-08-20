export type Project = {
  slug: string;           // URL-Teil
  title: string;          // Überschrift
  teaser: string;         // Kurzbeschreibung
  cover: string;          // Bildpfad relativ zu /public
  category?: "website" | "webshop" | "software";
  technologies?: string[];
  year?: string;
  client?: string;
  description?: string;   // Längere Beschreibung für Detail-Seite
  features?: string[];    // Key Features
  results?: string[];     // Erfolge/Resultate
  liveUrl?: string;       // Live-Demo URL
  status?: "live" | "development" | "completed";
};

export const projects: Project[] = [
  {
    slug: "nuxt-musician-site",
    title: "Musician Portfolio",
    teaser: "Eine schlanke Portfolio-Site für mein Musikprojekt – gebaut mit Nuxt 4 und Tailwind.",
    cover: "/images/aaronthommy-project.png",
    category: "website",
    technologies: ["Nuxt.js", "Vue 3", "Tailwind CSS", "TypeScript", "Figma"],
    year: "2024",
    client: "Eigenprojekt",
    description: "Eine moderne, performante Portfolio-Website für mein Musikprojekt mit fokus auf User Experience und schnelle Ladezeiten.",
    features: [
      "Responsive Design für alle Endgeräte",
      "Audio-Player Integration",
      "Optimierte Performance (95+ Lighthouse Score)",
      "SEO-optimiert für bessere Sichtbarkeit"
    ],
    results: [
      "50% bessere Core Web Vitals",
      "Erhöhte Streaming-Zahlen",
      "Professionelle Online-Präsenz"
    ],
    status: "live"
  },
  {
    slug: "react-crm",
    title: "Mini-CRM System",
    teaser: "Kleine SaaS-App für Kontakt- und Deal-Management – Next.js 15 + Prisma + PlanetScale.",
    cover: "/images/stt-shop-project.png",
    category: "software",
    technologies: ["Next.js", "React", "Prisma", "PlanetScale", "NextAuth.js", "Tailwind CSS", "WooCommerce"],
    year: "2024",
    client: "Startup Kunde",
    description: "Eine vollständige CRM-Lösung für kleine bis mittlere Unternehmen mit modernem Tech-Stack und intuitiver Benutzeroberfläche.",
    features: [
      "Kontakt- und Lead-Management",
      "Deal-Pipeline Verwaltung",
      "Benutzer-Authentifizierung",
      "Real-time Updates",
      "Export-Funktionen",
      "Mobile-responsive Design"
    ],
    results: [
      "40% Effizienzsteigerung im Vertrieb",
      "Zentrale Kundendatenverwaltung",
      "Automatisierte Workflows"
    ],
    status: "live"
  },

];