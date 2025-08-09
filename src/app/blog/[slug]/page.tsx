import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';

/**
 * Renders einen einzelnen Blogpost basierend auf dem Slug. Die Markdown‑ähnliche
 * Struktur in den Postinhalten wird hier vereinfacht gerendert, indem
 * Überschriften, Listenpunkte und Absätze anhand der Zeilenanfänge
 * identifiziert werden. Für komplexere Markdown sollten Sie eine
 * dedizierte Bibliothek wie `react-markdown` installieren.
 */
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  /**
   * Hilfsfunktion zum Rendern des Postinhalts.
   * Sie zerlegt den Inhalt in Zeilen und rendert anhand der
   * Markdown‑Syntax einfache Überschriften und Listen.
   */
  function renderContent(content: string) {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let listBuffer: string[] = [];

    const flushList = () => {
      if (listBuffer.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc ml-6 mb-4">
            {listBuffer.map((item, i) => (
              <li key={i} className="mb-1">
                {item}
              </li>
            ))}
          </ul>,
        );
        listBuffer = [];
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('### ')) {
        // Überschrift der dritten Ebene
        flushList();
        elements.push(
          <h3 key={`h3-${elements.length}`} className="text-2xl font-bold mt-6 mb-3">
            {trimmed.replace(/^###\s+/, '')}
          </h3>,
        );
      } else if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${elements.length}`} className="text-3xl font-bold mt-8 mb-4">
            {trimmed.replace(/^##\s+/, '')}
          </h2>,
        );
      } else if (trimmed.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={`h1-${elements.length}`} className="text-4xl font-bold mt-10 mb-5">
            {trimmed.replace(/^#\s+/, '')}
          </h1>,
        );
      } else if (trimmed.startsWith('- ')) {
        // Listenpunkte sammeln
        listBuffer.push(trimmed.replace(/^-\s+/, ''));
      } else if (trimmed === '') {
        // Leerzeile — schließe evtl. Liste und füge Absatzabstand hinzu
        flushList();
        elements.push(<div key={`br-${elements.length}`} className="h-4" />);
      } else {
        // Normaler Absatz
        flushList();
        elements.push(
          <p key={`p-${elements.length}`} className="mb-4 text-gray-800 dark:text-gray-200">
            {trimmed}
          </p>,
        );
      }
    });
    // eventuell offenes Listenelement ausgeben
    flushList();
    return elements;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-3">
        {post.title}
      </h1>
      <time
        dateTime={post.date}
        className="block text-sm text-gray-500 dark:text-gray-400 mb-8"
      >
        {new Date(post.date).toLocaleDateString('de-DE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      <div>
        {renderContent(post.content)}
      </div>
    </article>
  );
}