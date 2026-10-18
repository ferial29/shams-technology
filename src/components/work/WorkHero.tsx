
"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects", value: "03 Selected" },
  { label: "Reach", value: "Worldwide" },
  { label: "Focus", value: "Digital" },
];

export default function WorkHero() {
  return (
    <section className="relative overflow-hidden bg-shams-background">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      {/* Orange ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[12%] h-[420px] w-[420px] rounded-full bg-shams-orange/[0.035] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-12 pt-20 md:px-10 md:pb-16 md:pt-28 lg:px-16 lg:pb-20 lg:pt-32">
        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between gap-4 border-b border-white/[0.1] pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-shams-orange" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 md:text-[12px] md:tracking-[0.22em]">
              Selected work
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.16em] text-white/45 md:text-[11px] md:tracking-[0.2em]">
            01 / Work
          </span>
        </motion.div>

        {/* Main hero */}
        <div className="grid gap-9 pb-11 pt-10 md:gap-12 md:pt-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-w-0"
          >
            <h1 className="max-w-[900px] text-[clamp(3.1rem,6.6vw,7rem)] font-medium leading-[0.91] tracking-[-0.065em] text-shams-text">
              Digital products
              <br />
              built for
              <br />
              <span className="text-white/40">real-world</span>{" "}
              <span className="text-shams-orange">impact.</span>
            </h1>
          </motion.div>

          {/* Right copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative max-w-[460px] lg:mb-2 lg:justify-self-end"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-shams-orange/80" />
              <span className="text-[10px] uppercase tracking-[0.16em] text-white/55 md:text-[11px] md:tracking-[0.2em]">
                Strategy · Design · Engineering
              </span>
            </div>

            <p className="text-[15px] leading-[1.8] text-white/70 md:text-[16px]">
              We design and build digital products that turn ambitious ideas
              into useful, scalable experiences — from early product thinking
              to launch and beyond.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/45 md:text-[11px]">
              <span>London</span>
              <span className="h-1 w-1 rounded-full bg-shams-orange" />
              <span>Worldwide</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid grid-cols-3 border-y border-white/[0.1]"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`min-w-0 py-5 md:py-6 ${
                index === 0
                  ? "pr-2 md:pr-6"
                  : index === 1
                    ? "border-x border-white/[0.1] px-2 md:px-6"
                    : "pl-2 md:pl-6"
              }`}
            >
              <span className="block text-[10px] uppercase tracking-[0.12em] text-white/45 md:text-[11px] md:tracking-[0.2em]">
                {stat.label}
              </span>
              <span className="mt-2 block text-[12px] font-medium leading-5 tracking-[-0.02em] text-white/85 min-[380px]:text-[14px] md:text-[16px]">
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 md:text-[11px] md:tracking-[0.2em]">
            Explore selected projects
          </span>

          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-lg text-shams-orange"
          >
            ↓
          </motion.span>
        </div>
      </div>
    </section>
  );
}
