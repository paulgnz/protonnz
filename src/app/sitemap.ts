import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticPages = [
    { url: siteConfig.url, priority: 1.0 },
    { url: `${siteConfig.url}/about`, priority: 0.8 },
    { url: `${siteConfig.url}/projects`, priority: 0.9 },
    { url: `${siteConfig.url}/blog`, priority: 0.8 },
    { url: `${siteConfig.url}/developers`, priority: 0.7 },
    { url: `${siteConfig.url}/contact`, priority: 0.6 },
    { url: `${siteConfig.url}/privacy`, priority: 0.3 },
    { url: `${siteConfig.url}/terms`, priority: 0.3 },
    { url: `${siteConfig.url}/ownership`, priority: 0.3 },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));

  return [...staticPages, ...blogUrls];
}
