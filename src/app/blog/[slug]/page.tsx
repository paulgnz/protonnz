import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MdxContent from "@/components/MdxContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Button href="/blog" variant="ghost" size="sm" className="mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Button>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-NZ", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-surface text-zinc-400 border border-zinc-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-dark max-w-none">
          <MdxContent source={post.content} />
        </article>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <Button href="/blog" variant="secondary">
            <ArrowLeft className="w-4 h-4" />
            All Posts
          </Button>
        </div>
      </div>
    </div>
  );
}
