// app/blog/page.tsx
import Link from 'next/link';
import { blogPosts, CATEGORY_LABELS, type Category } from '@/data/blog-posts';

export default async function BlogIndex({
  searchParams,
}: {
  searchParams?: Promise<{ k?: string }>;
}) {
  const { k } = (await searchParams) ?? {};
  const selectedRaw = (k ?? '') as Category | '';

  const categoriesAll = Object.keys(CATEGORY_LABELS) as Category[];
  const isValidCat = (c: string): c is Category => categoriesAll.includes(c as Category);
  const selected = isValidCat(selectedRaw) ? selectedRaw : undefined;

  const sortedPosts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const visiblePosts = selected ? sortedPosts.filter(p => p.categories?.includes(selected)) : sortedPosts;

  const counts: Record<Category, number> = categoriesAll.reduce((acc, c) => {
    acc[c] = blogPosts.filter(p => p.categories?.includes(c)).length;
    return acc;
  }, {} as Record<Category, number>);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white uppercase uppercase">
              Tech-Blog
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Insights, Gedanken und Neuigkeiten rund um <span className="font-serif italic text-zinc-800 dark:text-zinc-200">moderne Softwarearchitektur.</span>
            </p>
          </div>
        </div>
      </section>

      

      {/* Blog Listing - Brutalist/Editorial Feed */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-32">
            
            {visiblePosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col items-start"
              >
                {/* Visual Category Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.categories?.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900"
                    >
                      {CATEGORY_LABELS[c]}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-950 dark:text-white leading-[1.2] mb-4 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <time
                  dateTime={post.date}
                  className="font-serif italic text-lg text-zinc-400 dark:text-zinc-500 mb-6"
                >
                  {new Date(post.date).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>

                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">
                  {post.summary}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-2 font-medium hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors uppercase tracking-widest text-sm"
                >
                  Weiterlesen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </article>
            ))}

          </div>

          {/* Empty State */}
          {visiblePosts.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-2xl font-light text-zinc-500 dark:text-zinc-400">
                Keine Beiträge in dieser Kategorie gefunden.
              </p>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
