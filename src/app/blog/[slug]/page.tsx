// app/blog/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, CATEGORY_LABELS } from "@/data/blog-posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500 pb-24">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8">
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Home</Link>
            <span className="text-zinc-300 dark:text-zinc-700">→</span>
            <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Blog</Link>
            <span className="text-zinc-300 dark:text-zinc-700">→</span>
            <span className="text-zinc-900 dark:text-white truncate max-w-[200px]">{post.title}</span>
          </div>

          <div className="max-w-4xl space-y-6">
            {/* Category Badges */}
            {post.categories?.length ? (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((c) => (
                  <Link
                    key={c}
                    href={`/blog?k=${c}`}
                    prefetch={false}
                    className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                  >
                    {CATEGORY_LABELS[c]}
                  </Link>
                ))}
              </div>
            ) : null}

            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] font-medium tracking-[-0.04em] text-zinc-950 dark:text-white">
              {post.title}
            </h1>

            <time dateTime={post.date} className="block font-serif italic text-lg text-zinc-400 dark:text-zinc-500">
              {new Date(post.date).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Sidebar */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Back Link */}
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors group"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                  Zur Übersicht
                </Link>

                {/* Meta Info */}
                <div className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-1">Veröffentlicht</div>
                    <time dateTime={post.date} className="text-sm text-zinc-700 dark:text-zinc-300">
                      {new Date(post.date).toLocaleDateString("de-DE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  {post.categories?.length ? (
                    <div>
                      <div className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2">Kategorien</div>
                      <div className="flex flex-wrap gap-2">
                        {post.categories.map((c) => (
                          <Link
                            key={c}
                            href={`/blog?k=${c}`}
                            prefetch={false}
                            className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                          >
                            {CATEGORY_LABELS[c]}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Sources */}
                {post.sources?.length ? (
                  <div className="space-y-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Quellen</div>
                    <ul className="space-y-2">
                      {post.sources.map((s, i) => (
                        <li key={i}>
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-500 transition-colors"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-9 order-1 lg:order-2">
              <div className="prose prose-lg dark:prose-invert prose-zinc max-w-none
                prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-zinc-950 dark:prose-headings:text-white
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-t prose-h2:border-zinc-200 dark:prose-h2:border-zinc-800 prose-h2:pt-8
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-12 prose-h3:mb-4
                prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:font-light
                prose-a:text-zinc-900 dark:prose-a:text-zinc-100 prose-a:underline prose-a:decoration-zinc-300 dark:prose-a:decoration-zinc-700 prose-a:underline-offset-4 hover:prose-a:decoration-zinc-500
                prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100 prose-strong:font-medium
                prose-code:text-zinc-800 dark:prose-code:text-zinc-200 prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-800 prose-pre:rounded-2xl
                prose-blockquote:border-zinc-300 dark:prose-blockquote:border-zinc-700 prose-blockquote:text-zinc-600 dark:prose-blockquote:text-zinc-400
                prose-li:text-zinc-600 dark:prose-li:text-zinc-400 prose-li:font-light
                prose-ul:my-6 prose-ol:my-6
                prose-img:rounded-2xl prose-img:border prose-img:border-zinc-200 dark:prose-img:border-zinc-800
              ">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Back to Blog CTA */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              <span className="font-medium">Alle Beiträge</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              Projekt starten
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}