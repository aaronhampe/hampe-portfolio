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
    <article className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="not-prose mb-4 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Zur Übersicht
      </Link>
      <h1>{post.title}</h1>

      <time dateTime={post.date} className="block text-sm opacity-70">
        {new Date(post.date).toLocaleDateString("de-DE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>

      {/* Kategorie-Badges */}
      {post.categories?.length ? (
        <div className="not-prose flex flex-wrap gap-2 mt-3 mb-8">
          {post.categories.map((c) => (
            <Link
              key={c}
              href={`/blog?k=${c}`}
              prefetch={false}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {CATEGORY_LABELS[c]}
            </Link>
          ))}
        </div>
      ) : (
        <div className="not-prose h-4 mb-6" />
      )}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {post.content}
      </ReactMarkdown>
      {post.sources?.length ? (
        <section className="not-prose mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide opacity-60 mb-3">
            Quellen
          </h2>
          <ul className="space-y-2">
            {post.sources.map((s, i) => (
              <li key={i}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}