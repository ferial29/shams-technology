
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog | SHAMS Technology",
  description:
    "Explore insights on web development, digital design, software engineering, and emerging technologies from SHAMS Technology.",

  keywords: [
    "SHAMS Technology",
    "SHAMS Blog",
    "Web Development",
    "Software Engineering",
    "Digital Design",
    "Technology Insights",
    "Next.js",
    "Digital Experiences",
  ],

  openGraph: {
    title: "The SHAMS Journal | Ideas, Insights & Perspectives",
    description:
      "Thoughts on design, development, and the technologies shaping tomorrow's digital experiences.",
    type: "website",
    siteName: "SHAMS Technology",
  },

  twitter: {
    card: "summary",
    title: "The SHAMS Journal",
    description:
      "Ideas and insights on design, development, and modern technology.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
