
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      dir="ltr"
      className="relative isolate overflow-hidden border-t border-white/[0.1] bg-[#0c0907] text-left"
    >
      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.055) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Ambient orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-12 h-[380px] w-[380px] rounded-full bg-[#ff6a00]/[0.07] blur-[100px] md:-right-20 md:bottom-0 md:h-[650px] md:w-[650px]"
      />

      {/* Solar signature - mobile and desktop positions */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.035, 1],
                opacity: [0.7, 0.95, 0.7],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-[225px] bottom-[85px] h-[420px] w-[420px] md:-right-[170px] md:-bottom-[300px] md:h-[760px] md:w-[760px]"
      >
        <div className="absolute inset-0 rounded-full bg-[#ff6a00]/[0.08] blur-[65px]" />

        <div
          className="absolute inset-[14%] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #ff6a00, #ffb16d, #ff6a00, #5e2407, #ff8a22, #ff6a00)",
            boxShadow:
              "0 0 60px rgba(255,106,0,0.2), 0 0 130px rgba(255,106,0,0.12)",
          }}
        />

        <div className="absolute inset-[17%] rounded-full bg-[#0c0907]" />

        <div className="absolute inset-[5%] rounded-full border border-white/[0.07]" />
        <div className="absolute inset-[1%] rounded-full border border-dashed border-[#ff6a00]/20" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-14 pt-20 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease }}
          className="relative max-w-[950px]"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/65">
              Your next move
            </span>
          </div>

          <h2 className="text-[clamp(3.1rem,8vw,8.5rem)] font-medium leading-[0.95] tracking-[-0.065em] text-white">
            Have a project
            <br />
            <span className="text-shams-orange">in mind?</span>
          </h2>

          <p className="mt-7 max-w-[490px] text-[15px] leading-7 text-white/70 md:mt-8 md:text-[17px]">
            Great ideas deserve exceptional execution. Tell us what
            you&apos;re building, and let&apos;s make it happen.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5 md:mt-10">
            <Link
              href="/contact"
              className="group inline-flex min-h-[52px] items-center justify-between gap-10 rounded-full bg-shams-orange px-6 py-4 text-[13px] font-semibold text-black transition-all duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shams-orange"
            >
              Start a project

              <span
                aria-hidden="true"
                className="text-[19px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </Link>

            <span className="max-w-[280px] font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-white/60">
              Let&apos;s create something remarkable
            </span>
          </div>
        </motion.div>

        {/* Footer signature */}
        <div className="relative mt-28 flex flex-col gap-3 border-t border-white/[0.15] pt-5 sm:flex-row sm:items-center sm:justify-between md:mt-28">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white/75">
            SHAMS Technology
          </span>

          <span className="font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-white/60">
            Designed in London · Built for everywhere
          </span>
        </div>
      </div>
    </section>
  );
}
