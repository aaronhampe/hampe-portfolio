import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

/**
 * Übersichtseite für den Blog.
 *
 * Diese Seite listet alle verfügbaren Blogposts mit Titel, Datum und
 * Teaser auf. Sie verwendet die Daten aus `src/data/blog-posts.ts`.
 */
export default function BlogIndex() {
  // Sortiere die Posts absteigend nach Datum
  const sortedPosts = [...blogPosts].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
  );

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Tech‑Blog</h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Aktuelle Neuigkeiten und Insights rund um Webentwicklung, JavaScript und
        moderne Technologien.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {sortedPosts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <time
              dateTime={post.date}
              className="block text-sm text-gray-500 dark:text-gray-400 mb-3"
            >
              {new Date(post.date).toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {post.summary}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Weiterlesen →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}