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
    cover: "/images/nuxt-musician-cover.jpg",
    category: "website",
    technologies: ["Nuxt.js", "Vue 3", "Tailwind CSS", "TypeScript"],
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
    cover: "/images/react-crm-cover.jpg",
    category: "software",
    technologies: ["Next.js 15", "React", "Prisma", "PlanetScale", "NextAuth.js", "Tailwind CSS"],
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
  {
    slug: "shopify-theme",
    title: "Custom Shopify Theme",
    teaser: "Individuelles Liquid-Theme mit Tailwind, App-Blocks und Section-Rendering.",
    cover: "/images/shopify-cover.jpg",
    category: "webshop",
    technologies: ["Shopify Liquid", "Tailwind CSS", "JavaScript", "Shopify CLI"],
    year: "2024",
    client: "E-Commerce Unternehmen",
    description: "Ein maßgeschneidertes Shopify-Theme, das Performance und Conversion-Optimierung in den Fokus stellt.",
    features: [
      "Custom Liquid-Templates",
      "Tailwind CSS Integration",
      "App-Block Kompatibilität",
      "SEO-optimierte Struktur",
      "Mobile-first Design",
      "Conversion-optimierte Checkout"
    ],
    results: [
      "25% höhere Conversion Rate",
      "Verbesserte Mobile Experience",
      "Schnellere Ladezeiten"
    ],
    status: "live"
  },
  {
    slug: "immobilien-portal",
    title: "Immobilien-Portal",
    teaser: "Vollständige Immobilien-Plattform mit Suchfunktion, Verwaltungsbereich und automatisierten Exposen.",
    cover: "/images/immobilien-portal-cover.jpg",
    category: "website",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "Mapbox", "Tailwind CSS"],
    year: "2024",
    client: "Immobilienmakler GmbH",
    description: "Eine umfassende Immobilien-Plattform mit erweiterten Such- und Filterfunktionen, automatisierter Exposé-Generierung und integriertem CRM.",
    features: [
      "Erweiterte Immobiliensuche mit Filtern",
      "Interaktive Karten-Integration",
      "Automatische Exposé-Generierung",
      "Makler-Dashboard mit Analytics",
      "Lead-Management System",
      "Mobile App (React Native)"
    ],
    results: [
      "300% mehr qualifizierte Anfragen",
      "Automatisierung spart 15h/Woche",
      "Erweiterte Marktabdeckung"
    ],
    liveUrl: "https://immobilien-demo.hampe.dev",
    status: "live"
  },
  {
    slug: "restaurant-pos-system",
    title: "Restaurant POS System",
    teaser: "Modernes Kassensystem für Restaurants mit Bestellmanagement, Inventar-Tracking und Analytics.",
    cover: "/images/restaurant-pos-cover.jpg",
    category: "software",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe"],
    year: "2023",
    client: "Restaurant-Kette",
    description: "Ein vollständiges Point-of-Sale System speziell für die Gastronomie mit Echzeit-Bestellverfolgung und umfassendem Reporting.",
    features: [
      "Touch-optimierte Kassen-Interface",
      "Echtzeit-Bestellsynchronisation",
      "Inventar-Management",
      "Umsatz-Analytics & Reporting",
      "Mitarbeiter-Zeiterfassung",
      "Integration mit Lieferdiensten"
    ],
    results: [
      "50% schnellere Bestellabwicklung",
      "Reduzierte Fehlerquote um 80%",
      "Vollständige Digitalisierung"
    ],
    status: "live"
  },
  {
    slug: "fitness-studio-app",
    title: "Fitness Studio Management",
    teaser: "Komplette Verwaltungssoftware für Fitnessstudios mit Mitgliederverwaltung und Kursplanung.",
    cover: "/images/fitness-app-cover.jpg",
    category: "software",
    technologies: ["Next.js", "Supabase", "React Native", "Stripe", "Tailwind CSS"],
    year: "2023",
    client: "Fitness-Studio Kette",
    description: "Eine umfassende Management-Lösung für Fitnessstudios mit Web-Dashboard und mobiler App für Mitglieder.",
    features: [
      "Mitgliederverwaltung & Check-in System",
      "Kursplanung und Buchungssystem",
      "Zahlungsabwicklung & Rechnungen",
      "Trainer-Verwaltung",
      "Mobile App für Mitglieder",
      "Workout-Tracking & Progress"
    ],
    results: [
      "90% Reduzierung manueller Arbeit",
      "Erhöhte Mitgliederzufriedenheit",
      "Automatisierte Abrechnungen"
    ],
    status: "live"
  },
  {
    slug: "logistik-dashboard",
    title: "Logistik Dashboard",
    teaser: "Real-time Tracking und Analytics Dashboard für Logistikunternehmen mit GPS-Integration.",
    cover: "/images/logistik-dashboard-cover.jpg",
    category: "software",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    year: "2023",
    client: "Logistik AG",
    description: "Ein leistungsstarkes Dashboard für die Echzeit-Überwachung von Lieferungen und Fahrzeugflotten mit umfassendem Analytics.",
    features: [
      "Echtzeit GPS-Tracking",
      "Interactive Data Visualisierung",
      "Route-Optimierung",
      "Lieferzeit-Prognosen",
      "KPI Dashboard & Reporting",
      "Mobile Fahrer-App"
    ],
    results: [
      "20% Reduktion der Lieferzeiten",
      "Vollständige Transparenz",
      "Optimierte Routenplanung"
    ],
    status: "live"
  },
  {
    slug: "healthcare-booking",
    title: "Arztpraxis Buchungssystem",
    teaser: "Online Terminbuchung für Arztpraxen mit Patientenverwaltung und Erinnerungsfunktionen.",
    cover: "/images/healthcare-booking-cover.jpg",
    category: "website",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Twilio", "NextAuth.js"],
    year: "2023",
    client: "Ärztehaus Zentrum",
    description: "Ein DSGVO-konformes Buchungssystem für Arztpraxen mit automatisierten Erinnerungen und Patientenverwaltung.",
    features: [
      "Online Terminbuchung 24/7",
      "Automatische SMS/E-Mail Erinnerungen",
      "Patientenverwaltung (DSGVO-konform)",
      "Kalender-Integration",
      "Wartelisten-Management",
      "Multi-Praxis Unterstützung"
    ],
    results: [
      "60% weniger Telefonanrufe",
      "Reduzierte No-Shows um 40%",
      "Verbesserte Patientenerfahrung"
    ],
    status: "live"
  },
  {
    slug: "elearning-platform",
    title: "E-Learning Plattform",
    teaser: "Moderne Lernplattform für Unternehmen mit Video-Kursen, Quizzes und Fortschrittstracking.",
    cover: "/images/elearning-platform-cover.jpg",
    category: "software",
    technologies: ["Next.js", "Supabase", "Mux Video", "Stripe", "Tailwind CSS"],
    year: "2024",
    client: "Weiterbildungsanbieter",
    description: "Eine skalierbare E-Learning Plattform für Unternehmensschulungen mit interaktiven Inhalten und detailliertem Reporting.",
    features: [
      "Video-basierte Kurse mit Mux",
      "Interaktive Quizzes & Tests",
      "Fortschritts-Tracking",
      "Zertifikat-Generierung",
      "Admin Dashboard",
      "Mobile-responsive Design"
    ],
    results: [
      "500+ aktive Nutzer",
      "95% Kurs-Completion Rate",
      "Skalierbare Lösung"
    ],
    status: "development"
  }
];