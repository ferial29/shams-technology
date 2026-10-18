
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      dir="ltr"
      className="relative isolate overflow-hidden bg-shams-background text-left"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-shams-orange/[0.08] blur-[110px] md:-bottom-64 md:-right-48 md:h-[700px] md:w-[700px]"
      />

      {/* Decorative solar outline */}
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -bottom-[180px] -right-[210px] h-[420px] w-[420px] rounded-full border border-shams-orange/20 md:-bottom-[370px] md:-right-[260px] md:h-[800px] md:w-[800px]"
      >
        <div className="absolute inset-[12%] rounded-full border border-shams-orange/15" />
        <div className="absolute inset-[26%] rounded-full border border-shams-orange/25" />

        <span
          className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-shams-orange shadow-[0_0_25px_rgba(255,106,0,0.7)]"
        />
      </motion.div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36">
        {/* Top line */}
        <div className="border-t border-white/[0.12] pt-8">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />

            <span className="text-[11px] uppercase tracking-[0.2em] text-white/55">
              The next chapter
            </span>
          </div>
        </div>

        {/* Main CTA */}
        <div className="relative z-10 mt-12 max-w-[1000px] md:mt-16">
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="text-[clamp(3.5rem,8vw,9rem)] font-medium leading-[0.92] tracking-[-0.075em] text-white"
          >
            Let&apos;s make
            <br />
            something
            <br />
            <span className="text-shams-orange">
              matter.
            </span>
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease,
            }}
            className="mt-8 max-w-[480px] text-[15px] leading-8 text-white/65 md:mt-10 md:text-[17px]"
          >
            Have an idea, a challenge, or something ambitious
            in mind? We&apos;d love to hear about it and
            explore what we can create together.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease,
            }}
            className="mt-9"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-[56px] items-center justify-between gap-10 rounded-full bg-shams-orange px-7 py-4 text-[14px] font-semibold text-black transition-all duration-300 hover:bg-[#ff8a35] hover:shadow-[0_0_35px_rgba(255,106,0,0.2)]"
            >
              Start a conversation

              <span
                aria-hidden="true"
                className="text-[22px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Animated accent line */}
        <div className="relative mt-20 h-px w-full overflow-hidden bg-white/[0.12] md:mt-28">
          <motion.div
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.3,
              ease,
            }}
            style={{ transformOrigin: "left" }}
            className="absolute inset-0 bg-gradient-to-r from-shams-orange via-shams-orange/50 to-transparent"
          />
        </div>

        {/* Closing signature */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
            SHAMS Technology
          </span>

          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
            Designed in London · Built for everywhere
          </span>
        </div>
      </div>
    </section>
  );
}
