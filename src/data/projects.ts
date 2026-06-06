export type Project = {
  slug: string; // URL-Teil
  title: string; // Überschrift
  teaser: string; // Kurzbeschreibung
  cover: string; // Bildpfad relativ zu /public
  category?: "website" | "webshop" | "software";
  technologies?: string[];
  year?: string;
  client?: string;
  description?: string; // Längere Beschreibung für Detail-Seite
  features?: string[]; // Key Features
  results?: string[]; // Erfolge/Resultate
  liveUrl?: string; // Live-Demo URL
  status?: "live" | "development" | "completed";
};

export const projects: Project[] = [
  {
    slug: "stt-shop",
    title: "STT-Shop",
    teaser:
      "Deutschlands Nummer 1 Shop für Sicherheitstechnik - Schließanlagen und Gleichschließungen online zusammenstellen",
    cover: "/images/stt-shop-site.svg",
    category: "webshop",
    technologies: [
      "Wordpress",
      "WooCommerce",
      "PHP",
      "Elementor",
      "Nuxt",
      "Vue",
      "JavaScript",
      "CSS",
      "Sass",
      "Google Analytics",
    ],
    year: "2023 - heute",
    client: "secutimetec GmbH",
    description:
      "Ein moderner Online-Shop für Sicherheitstechnik mit umfangreichen Funktionen. Konfigurieren Sie Gleichschließungen einfacher denn je. Erstellen Sie komplexe Schließanlagen.",
    features: [
      "Konfigurator für Schließanlagen",
      "Konfigurator für Gleichschließungen direkt im Einzelprodukt",
      "Breit aufgesetztes Shop-CMS in Wordpress",
      "Intuitive Benutzeroberfläche",
      "Mobile-responsive Design",
    ],
    results: [
      "Online-Shop für Sicherheitstechnik gemeinsam veröffentlicht (2023)",
      "SEO-Optimierung, UX-Optimierung, Produkt-Pflege, Funktionalitäten erweitert (2023- heute)",
      "Ads und Analytics eingerichtet",
      "6-Stellige Shopumsätze",
    ],
    liveUrl: "https://stt-shop.de",
    status: "live",
  },
  {
    slug: "chirurgie-garbsen-langenhagen",
    title: "Chirurgische Garbsen & Langenhagen",
    teaser:
      "Homepage für die chirurgische und orthopädische Gemeinschaftspraxis mit zwei Standorten.",
    cover: "/images/aaronthommy-music-site.svg",
    category: "website",
    technologies: ["React", "Canva", "NextJS", "Tailwind", "TypeScript", "Figma", "Google Analytics,"],
    year: "2024",
    client: "Chirurgische & Orthopädische Gemeinschaftspraxis",
    description:
      "Eine moderne, performante Portfolio-Website für das Musikprojekt mit Fokus auf User Experience und schnelle Ladezeiten. Außerdem ist ein Gitarren-Tabulatur Generator enthalten + Mehrsprachigkeit.",
    features: [
      "Responsive Design für alle Endgeräte",
      "Audio-Player Integration",
      "Gitarren-Tabulatur Generator",
      "Mehrsprachigkeit",
    ],
    results: [
      "50% bessere Core Web Vitals",
      "Erhöhte Streaming-Zahlen",
      "Professionelle Online-Präsenz",
    ],
    liveUrl: "https://aaronthommy.com",
    status: "live",
  },
  {
    slug: "lelia",
    title: "Klavierunterricht Lelia Hernández",
    teaser:
      "Klavierunterricht in Hannover List bei Lelia Hernández.",
    cover: "/images/lelia.jpeg",
    category: "website",
    technologies: ["Tailwind", "Nextjs", "React", "Cloudflare"],
    year: "2026",
    client: "Lelia Hernández",
    description:
      "Ich kannte Lelia schon lange, da sie mir Klavierunterricht gegeben hat. Als ich ihr erzählt habe, dass ich mich als Web-Entwickler selbstständig gemacht habe, ist sie auf mich zugekommen. Ihre neue Website ist schneller, moderner und für zukunftige Hobby-Pianisten angenehmer zu lesen und einfacher zu finden.",
    features: [
      "Künstlerisches und einzigartiges Web-Design",
      "Einfache Kontaktaufnahme",
      "SEO-optimiert für bessere Sichtbarkeit",
      "Gute Geschwindigkeit"
    ],
    results: [
      "Professionelle Online-Präsenz",
      "Deutlich gesteigerte Klick-Zahlen"
    ],
    liveUrl: "https://lelias-klavier-hannover.de",
    status: "live",
  },
  {
    slug: "trisight",
    title: "Trisight",
    teaser: "Ein Online-Sehtest für Kameras und das menschliche Auge.",
    cover: "/images/trisight-site.svg",
    category: "software",
    technologies: ["Nuxt", "Vue", "Tailwind", "Javascript", "Python", "Sass"],
    year: "2024",
    client: "Hobbyprojekt",
    description:
      "Eine moderne, performante Portfolio-Website für das Musikprojekt mit Fokus auf User Experience und schnelle Ladezeiten.",
    features: [
      "Eigene Sehtest erstellen",
      "Konfiguration der Testobjekte",
      "Benutzerprofile, Ranglisten und Ergebnisdaten"
    ],
    results: [
      "Funktionierende Seh-Test",
    ],
    status: "completed",
  },
  {
    slug: "secutimetec-site",
    title: "Secutimetec Website",
    teaser:
      "Eine moderne Website für die Secutimetec GmbH mit umfangreichen Informationen und Funktionen.",
    cover: "/images/secutimetec-site.svg",
    category: "website",
    technologies: ["WordPress", "PHP", "JavaScript"],
    year: "2022",
    client: "secutimetec GmbH",
    description:
      "Eine moderne Website für die Secutimetec GmbH mit umfangreichen Informationen und Funktionen.",
    features: [
      "Responsive Design für alle Endgeräte",
      "Individuelle PHP-Templates",
      "SEO-optimiert für bessere Sichtbarkeit",
    ],
    results: [
      "50% bessere Core Web Vitals",
      "Erhöhte Streaming-Zahlen",
      "Professionelle Online-Präsenz",
    ],
    liveUrl: "https://secutimetec.de",
    status: "live",
  },
  
];
