
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const articles = [
  {
    number: "01",
    category: "DEVELOPMENT",
    date: "INSIGHTS",
    title: "Building Digital Products That Last",
    description:
      "Why performance, scalability, and thoughtful engineering matter more than ever.",
    slug: "building-digital-products-that-last",
  },
  {
    number: "02",
    category: "DESIGN",
    date: "PERSPECTIVES",
    title: "Design Is More Than How It Looks",
    description:
      "Exploring the role of clarity, usability, and intention in modern digital experiences.",
    slug: "design-is-more-than-how-it-looks",
  },
  {
    number: "03",
    category: "TECHNOLOGY",
    date: "IDEAS",
    title: "The Future of Modern Web Experiences",
    description:
      "How emerging technologies are changing the way brands connect with people.",
    slug: "the-future-of-modern-web-experiences",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function BlogPage() {
  return (
    <>
      <Header />

      <main
        dir="ltr"
        className="min-h-screen bg-[#0b0908] text-left text-white"
      >
        {/* Background atmosphere */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute right-[-180px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#ff6a00]/[0.045] blur-[140px]" />
        </div>

        {/* Hero */}
        <section className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44 lg:px-16 lg:pt-52">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-shams-orange" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
              The SHAMS Journal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease,
            }}
            className="max-w-[1150px] text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.88] tracking-[-0.075em]"
          >
            Ideas.
            <br />
            Insights.
            <br />
            <span className="text-shams-orange">
              Perspectives.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.25,
              ease,
            }}
            className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-7 md:flex-row md:items-end"
          >
            <p className="max-w-[520px] text-[15px] leading-8 text-white/55 md:text-[17px]">
              Thoughts on design, development, and the
              technologies shaping tomorrow&apos;s digital
              experiences.
            </p>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Explore what&apos;s next ↓
            </span>
          </motion.div>
        </section>

        {/* Featured article */}
        <section className="relative mx-auto max-w-[1440px] px-6 pb-24 md:px-10 lg:px-16">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
              Featured story
            </span>

            <span className="font-mono text-[10px] text-white/30">
              001 / 003
            </span>
          </div>

          <div className="grid overflow-hidden border border-white/10 bg-[#100d0b] lg:grid-cols-2">
            {/* Editorial artwork */}
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#160d08] md:min-h-[440px]">
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 65,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full border border-shams-orange/25 md:h-[320px] md:w-[320px]"
              >
                <div className="absolute inset-[14%] rounded-full border border-shams-orange/30" />

                <div className="absolute inset-[30%] rounded-full bg-shams-orange/20 blur-[35px]" />

                <div className="h-[42%] w-[42%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#ffb36d,#ff6a00_45%,#7a2600_100%)] shadow-[0_0_70px_rgba(255,106,0,0.25)]" />

                <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-shams-orange" />
              </motion.div>

              <span className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.2em] text-white/35">
                SHAMS / DIGITAL THINKING
              </span>
            </div>

            {/* Featured copy */}
            <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
              <div>
                <div className="mb-10 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />

                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/50">
                    DEVELOPMENT / FEATURED
                  </span>
                </div>

                <h2 className="max-w-[550px] text-[clamp(2.4rem,4vw,4.7rem)] font-medium leading-[1.02] tracking-[-0.06em]">
                  Building Digital Products That Last
                </h2>

                <p className="mt-7 max-w-[440px] text-[14px] leading-8 text-white/55">
                  Why performance, scalability, and
                  thoughtful engineering matter more than
                  ever.
                </p>
              </div>

              <Link
                href="/blog/building-digital-products-that-last"
                className="group mt-12 inline-flex w-fit items-center gap-8 border-b border-shams-orange pb-3 text-[12px] font-medium uppercase tracking-[0.12em] text-shams-orange"
              >
                Read article

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest articles */}
        <section className="relative mx-auto max-w-[1440px] px-6 pb-28 md:px-10 lg:px-16">
          <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-6">
            <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-medium tracking-[-0.06em]">
              Latest{" "}
              <span className="text-shams-orange">
                thinking.
              </span>
            </h2>

            <span className="hidden font-mono text-[10px] tracking-[0.15em] text-white/35 sm:block">
              THE JOURNAL / 2026
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease,
                }}
                className="group flex min-h-[360px] flex-col justify-between border border-white/10 bg-[#100d0b] p-7 transition-colors duration-300 hover:border-shams-orange/35 md:p-8"
              >
                <div>
                  <div className="mb-14 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-shams-orange">
                      {article.category}
                    </span>

                    <span className="font-mono text-[10px] text-white/30">
                      {article.number}
                    </span>
                  </div>

                  <h3 className="text-[clamp(1.7rem,2.5vw,2.6rem)] font-medium leading-[1.1] tracking-[-0.05em]">
                    {article.title}
                  </h3>

                  <p className="mt-5 text-[13px] leading-7 text-white/50">
                    {article.description}
                  </p>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-10 inline-flex items-center justify-between border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.15em] text-white/75 transition-colors hover:text-shams-orange"
                >
                  Read article
                  <span className="text-lg">↗</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
