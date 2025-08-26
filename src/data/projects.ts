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
    slug: "stt-shop",
    title: "STT-Shop",
    teaser: "Deutschlands Nummer 1 Shop für Sicherheitstechnik - Schließanlagen und Gleichschließungen online zusammenstellen",
    cover: "/images/stt-shop-project.png",
    category: "webshop", 
    technologies: ["Wordpress", "WooCommerce","PHP", "Elementor", "Nuxt 4", "Vue", "JavaScript", "CSS"],
    year: "2023 - heute",
    client: "secutimetec GmbH",
    description: "Ein moderner Online-Shop für Sicherheitstechnik mit umfangreichen Funktionen. Konfigurieren Sie Gleichschließungen einfacher denn je. Erstellen Sie komplexe Schließanlagen.",
    features: [
      "Konfigurator für Schließanlagen",
      "Konfigurator für Gleichschließungen direkt im Einzelprodukt",
      "Breit aufgesetztes Shop-CMS in Wordpress",
      "Intuitive Benutzeroberfläche",
      "Mobile-responsive Design"
    ],
    results: [
      "Online-Shop für Sicherheitstechnik gemeinsam veröffentlicht (2023)",
      "SEO-Optimierung, UX-Optimierung, Produkt-Pflege, Funktionalitäten erweitert (2023- heute)",
      "Automatisierte Workflows"
    ],
    liveUrl: "https://stt-shop.de",
    status: "live"
  },
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
    liveUrl: "https://aaronthommy.de",
    status: "live"
  },

];