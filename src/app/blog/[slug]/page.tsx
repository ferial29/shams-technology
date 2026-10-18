
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  blogArticles,
  getBlogArticle,
} from "@/data/blog";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found | SHAMS Technology",
    };
  }

  return {
    title: `${article.title} | SHAMS Technology`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = blogArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <Header />

      <main
        dir="ltr"
        className="min-h-screen bg-[#0b0908] text-left text-white"
      >
        {/* Article hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute right-[-140px] top-20 h-[440px] w-[440px] rounded-full bg-shams-orange/[0.07] blur-[120px]" />

          <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-48 lg:px-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-shams-orange"
            >
              <span className="text-lg">←</span>
              Back to journal
            </Link>

            <div className="mt-16 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
              <span className="h-2 w-2 rounded-full bg-shams-orange" />
              <span className="text-shams-orange">
                {article.category}
              </span>
              <span className="text-white/20">/</span>
              <span>{article.readingTime}</span>
            </div>

            <h1 className="mt-8 max-w-[1120px] text-[clamp(3.2rem,8vw,8.5rem)] font-medium leading-[0.98] tracking-[-0.075em]">
              {article.title}
            </h1>

            <p className="mt-10 max-w-[700px] text-[clamp(1rem,2vw,1.4rem)] leading-[1.7] text-white/55">
              {article.description}
            </p>

            <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                SHAMS / Journal
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                Digital perspectives
              </span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="relative mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_2fr] lg:gap-24 lg:px-16">
          <aside>
            <div className="lg:sticky lg:top-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-shams-orange">
                The SHAMS Journal
              </span>

              <p className="mt-5 max-w-[230px] text-sm leading-7 text-white/40">
                Ideas and perspectives on building better
                digital experiences.
              </p>

              <div className="mt-8 h-px w-16 bg-shams-orange/60" />
            </div>
          </aside>

          <article className="max-w-[780px]">
            {article.sections.map((section, index) => (
              <section
                key={section.heading}
                className={
                  index === 0
                    ? "pb-14"
                    : "border-t border-white/10 py-14"
                }
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-mono text-[10px] text-shams-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-8 bg-shams-orange/40" />
                </div>

                <h2 className="mb-8 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.055em]">
                  {section.heading}
                </h2>

                <div className="space-y-6">
                  {section.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[16px] leading-[1.95] text-white/60 md:text-[17px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </section>

        {/* Related articles */}
        <section className="border-t border-white/10 bg-[#100d0b]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
            <div className="mb-12 flex items-end justify-between">
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-medium tracking-[-0.06em]">
                Keep{" "}
                <span className="text-shams-orange">
                  exploring.
                </span>
              </h2>

              <Link
                href="/blog"
                className="hidden text-xs text-white/50 transition-colors hover:text-shams-orange sm:inline"
              >
                All articles ↗
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex min-h-[270px] flex-col justify-between border border-white/10 bg-[#0b0908] p-8 transition-colors duration-300 hover:border-shams-orange/40 md:p-10"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-shams-orange">
                    {related.category}
                  </span>

                  <div>
                    <h3 className="max-w-[450px] text-[clamp(1.7rem,3vw,2.8rem)] font-medium leading-[1.1] tracking-[-0.05em]">
                      {related.title}
                    </h3>

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.15em] text-white/50">
                      Read article
                      <span className="text-lg text-shams-orange transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
