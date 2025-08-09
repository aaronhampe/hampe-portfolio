/**
 * Types and data for the blog section. Each post contains a slug used in
 * the URL, a title, publication date, summary (teaser) and the full
 * content in Markdown. Feel free to add your own posts by following
 * the same structure.
 */
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'nextjs-15-release',
    title: 'Next.js 15: Neue Features und Verbesserungen',
    date: '2024-10-21',
    summary:
      'Die finale Version von Next.js 15 bringt ein verbessertes Upgrade‑CLI, asynchrone API‑Änderungen, React 19‑Unterstützung und optimierte Caching‑Mechanismen.',
    content: `
### Überblick

Next.js 15 ist stabil und bereit für die Produktion. In dieser Version stehen Stabilität und sinnvolle neue Features im Fokus. Eine zentrale Neuerung ist das **@next/codemod**‑CLI, mit dem sich Projekte automatisch auf die neue Version aktualisieren lassen. Weitere Highlights:

- **Async Request APIs:** Server‑Funktionen wie \`headers\`, \`cookies\` und \`params\` werden asynchron, was den Weg für eine einfachere Rendering‑ und Caching‑Logik ebnet【390879128504044†L40-L60】.
- **Caching‑Semantik:** \`fetch\`‑Aufrufe und \`GET\`‑Route‑Handler werden nicht mehr automatisch im Client‑Cache gespeichert. Entwickler:innen können die vorherige Logik über die Option \`force-static\` erzwingen【390879128504044†L40-L60】.
- **React 19‑Support:** Next.js 15 unterstützt jetzt React 19 und bringt dessen neue Features wie Actions und verbesserte Hydration mit【390879128504044†L40-L60】.
- **Turbopack‑Stabilisierung:** Das experimentelle Turbopack ist jetzt stabiler und sorgt für schnellere Build‑ und Refresh‑Zeiten【390879128504044†L40-L60】.

Die neue Version legt den Grundstein für zukünftige Performance‑Optimierungen und vereinfacht das Upgrade bestehender Projekte erheblich.
`,
  },
  {
    slug: 'tailwindcss-40-release',
    title: 'Tailwind CSS 4.0: Schnelleres Styling mit dem Oxide‑Engine',
    date: '2024-03-17',
    summary:
      'Tailwind CSS 4.0 setzt auf eine komplett neue Engine und bringt neue Tools wie die Lightning CSS‑Integration, composable Variants und eine Zero‑Configuration Content Detection.',
    content: `
### Überblick

Mit Version 4.0 erhält Tailwind CSS die neue **Oxide‑Engine**, die das Framework deutlich schneller macht. Neben dem Performance‑Boost gibt es weitere wichtige Neuerungen:

- **Oxide‑Engine:** Eine in Rust geschriebene Engine sorgt für höhere Geschwindigkeit und eine bessere Nutzung aller CPU‑Kerne【301921118987049†L60-L76】.
- **Unified Toolchain:** Die Integration von Lightning CSS vereinfacht das Handling von \`@import\`, Browser‑Prefixing und Nested‑Styles【301921118987049†L60-L76】.
- **Modern‑Web Features:** Native Cascade Layers, Container Queries und explizite Custom Properties helfen, moderne Layouts zu bauen【301921118987049†L60-L77】.
- **Composable Variants:** Entwickler:innen können Stil‑Varianten einfacher kombinieren, zum Beispiel Hover‑ und Focus‑Effekte【301921118987049†L69-L77】.
- **Zero‑Configuration Content Detection und CSS‑first Configuration:** Tailwind erkennt automatisch, welche Dateien gestylt werden müssen, und setzt stärker auf CSS‑Variablen statt JavaScript【301921118987049†L60-L77】.

Diese Version erleichtert die Entwicklung moderner Websites und sorgt gleichzeitig für eine spürbare Performance‑Verbesserung.
`,
  },
];
