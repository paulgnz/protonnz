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
