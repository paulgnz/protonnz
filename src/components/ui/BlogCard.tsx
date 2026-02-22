import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl glass hover-lift overflow-hidden"
    >
      {/* Gradient placeholder thumbnail */}
      <div className="h-40 bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex items-center justify-center">
        <span className="text-4xl opacity-30">
          {post.tags[0] === "Guide" ? "📖" : "📝"}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-foreground group-hover:text-brand-purple-light transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-zinc-400 mb-3 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString("en-NZ", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-md bg-surface-light/50 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
