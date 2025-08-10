// app/blog/page.tsx
import Link from 'next/link';
import { blogPosts, CATEGORY_LABELS, type Category } from '@/data/blog-posts';

type Props = { searchParams?: { k?: string } };

export default function BlogIndex({ searchParams }: Props) {
  const selectedRaw = (searchParams?.k ?? '') as Category | '';
  const categoriesAll = Object.keys(CATEGORY_LABELS) as Category[];

  const isValidCat = (c: string): c is Category =>
    categoriesAll.includes(c as Category);

  const selected = isValidCat(selectedRaw) ? selectedRaw : undefined;

  // Sortierung
  const sortedPosts = [...blogPosts].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );

  // Filter
  const visiblePosts = selected
    ? sortedPosts.filter((p) => p.categories?.includes(selected))
    : sortedPosts;

  // Counts für Badges
  const counts: Record<Category, number> = categoriesAll.reduce((acc, c) => {
    acc[c] = blogPosts.filter((p) => p.categories?.includes(c)).length;
    return acc;
  }, {} as Record<Category, number>);

  const badgeBase =
    'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition';
  const badgeInactive =
    'text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800';
  const badgeActive = 'bg-blue-600 text-white border-blue-600';

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Tech-Blog</h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Aktuelle Neuigkeiten und Insights rund um KI, Webentwicklung, JavaScript und moderne Technologien.
      </p>

      {/* Filter-Leiste */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <Link
          href="/blog"
          className={`${badgeBase} ${!selected ? badgeActive : badgeInactive}`}
        >
          Alle
          <span className="text-xs opacity-75">({blogPosts.length})</span>
        </Link>

        {categoriesAll.map((cat) => (
          <Link
            key={cat}
            href={`/blog?k=${cat}`}
            className={`${badgeBase} ${
              selected === cat ? badgeActive : badgeInactive
            }`}
            prefetch={false}
          >
            {CATEGORY_LABELS[cat]}
            <span className="text-xs opacity-75">({counts[cat]})</span>
          </Link>
        ))}
      </div>

      {/* Liste */}
      <div className="grid gap-8 md:grid-cols-2">
        {visiblePosts.map((post) => (
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

            {/* kleine Post-Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories?.map((c) => (
                <Link
                  key={c}
                  href={`/blog?k=${c}`}
                  className="rounded-full border border-gray-200 dark:border-gray-700 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  {CATEGORY_LABELS[c]}
                </Link>
              ))}
            </div>

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

      {/* Empty State */}
      {visiblePosts.length === 0 && (
        <p className="mt-8 text-gray-600 dark:text-gray-300">
          Keine Beiträge in dieser Kategorie.
        </p>
      )}
    </section>
  );
}
