
import type { MetadataRoute } from "next";
import { blogArticles } from "@/data/blog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/work",
    "/services",
    "/about",
    "/contact",
    "/blog",
  ];

  const staticPages: MetadataRoute.Sitemap = pages.map(
    (path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    })
  );

  const articlePages: MetadataRoute.Sitemap =
    blogArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticPages, ...articlePages];
}
