import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { getLatestPosts } from "@/lib/blog";

export default function LatestPosts() {
  const posts = getLatestPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Blog"
          title="Latest Posts"
          description="Guides, tutorials, and updates from the XPR Network ecosystem."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/blog" variant="secondary">
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
