import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, tutorials, and updates from ProtonNZ about XPR Network, blockchain development, and DeFi.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Blog"
          title="Guides & Updates"
          description="Tutorials, how-to guides, and updates from the XPR Network ecosystem."
        />

        <div className="flex justify-center mb-8 -mt-4">
          <a
            href="/feed.xml"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-brand-purple-light transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4 4a16 16 0 0116 16h-3A13 13 0 004 7V4zm0 6a10 10 0 0110 10h-3a7 7 0 00-7-7v-3zm2 6a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
            RSS feed
          </a>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-zinc-400">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
