
"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const principles = [
  {
    title: "Think clearly.",
    description:
      "We begin by understanding the challenge, not jumping straight into the solution.",
    code: "01 / THINK",
  },
  {
    title: "Design intentionally.",
    description:
      "Every detail should serve a purpose, from the first interaction to the final pixel.",
    code: "02 / DESIGN",
  },
  {
    title: "Build for tomorrow.",
    description:
      "We create flexible digital foundations designed to grow alongside ambitious businesses.",
    code: "03 / BUILD",
  },
];

function ArchitectureVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-[350px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.12] bg-[#100d0b] sm:min-h-[430px] lg:min-h-[500px]">
      {/* Fine grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* Background ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6a00]/[0.08] blur-[85px]" />

      {/* Technical labels */}
      <div className="absolute left-5 top-5 z-20 flex items-center gap-2 sm:left-7 sm:top-7">
        <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">
          SHAMS / PHILOSOPHY
        </span>
      </div>

      <span className="absolute right-5 top-5 z-20 font-mono text-[10px] text-white/40 sm:right-7 sm:top-7">
        FORM + FUNCTION
      </span>

      {/* Architectural composition */}
      <div className="relative flex h-[235px] w-[235px] items-center justify-center sm:h-[300px] sm:w-[300px]">
        {/* Rotating technical square */}
        <motion.div
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[6%] border border-[#ff6a00]/30"
        />

        {/* Counter rotating square */}
        <motion.div
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[18%] border border-white/20"
        />

        {/* Perspective architecture */}
        <svg
          viewBox="0 0 300 300"
          className="relative z-10 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="storySurfaceGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff9a3d" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ff6a00" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Outer architectural wireframe */}
          <path
            d="M150 30 L255 90 L255 210 L150 270 L45 210 L45 90 Z"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.17"
            strokeWidth="1"
          />

          {/* Isometric construction */}
          <motion.g
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease }}
            style={{ transformOrigin: "150px 150px" }}
          >
            {/* Top */}
            <path
              d="M150 64 L232 111 L150 158 L68 111 Z"
              fill="#ff6a00"
              fillOpacity="0.12"
              stroke="#ff8a35"
              strokeWidth="1.5"
            />

            {/* Left */}
            <path
              d="M68 111 L150 158 L150 249 L68 202 Z"
              fill="#ff6a00"
              fillOpacity="0.035"
              stroke="#ff8a35"
              strokeOpacity="0.75"
              strokeWidth="1.2"
            />

            {/* Right */}
            <path
              d="M232 111 L150 158 L150 249 L232 202 Z"
              fill="url(#storySurfaceGradient)"
              fillOpacity="0.3"
              stroke="#ff8a35"
              strokeOpacity="0.85"
              strokeWidth="1.2"
            />

            {/* Inner structure */}
            <path
              d="M150 91 L208 124 L150 157 L92 124 Z"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.4"
              strokeWidth="1"
            />

            <path
              d="M92 124 V188 L150 221 L208 188 V124"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            <path
              d="M150 157 V221 M150 91 V157"
              stroke="#ff6a00"
              strokeOpacity="0.7"
              strokeDasharray="4 5"
            />

            {/* Structural guides */}
            <path
              d="M45 90 L150 150 L255 90 M45 210 L150 150 L255 210"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.08"
              strokeDasharray="3 6"
            />
          </motion.g>

          {/* Coordinate points */}
          {[
            [150, 30],
            [255, 90],
            [255, 210],
            [150, 270],
            [45, 210],
            [45, 90],
          ].map(([cx, cy], index) => (
            <circle
              key={index}
              cx={cx}
              cy={cy}
              r="2.5"
              fill="#ff6a00"
              opacity="0.8"
            />
          ))}
        </svg>

        {/* Corner coordinates */}
        <div className="absolute -left-2 top-1/2 h-px w-8 bg-[#ff6a00]/60" />
        <div className="absolute -right-2 top-1/2 h-px w-8 bg-[#ff6a00]/60" />
      </div>

      {/* Bottom technical caption */}
      <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between gap-3 border-t border-white/10 pt-4 sm:bottom-7 sm:left-7 sm:right-7">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/45">
            Digital architecture
          </p>
          <p className="mt-1 text-[12px] text-white/75">
            Built with intention.
          </p>
        </div>

        <span className="font-mono text-[10px] text-shams-orange">
          S / 001 ↗
        </span>
      </div>
    </div>
  );
}

export default function AboutStory() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-story"
      className="relative scroll-mt-24 overflow-hidden bg-shams-background pb-20 pt-8 md:pb-28 md:pt-12"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Section intro */}
        <div className="border-t border-white/[0.12] pt-8 md:pt-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/55">
              Our story
            </span>
          </div>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-[1000px] text-[clamp(3rem,6.6vw,7rem)] font-medium leading-[0.98] tracking-[-0.065em] text-white"
          >
            Built on ideas.
            <br />
            <span className="text-shams-orange">
              Driven by purpose.
            </span>
          </motion.h2>

          <div className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
              A different way of thinking
            </span>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease }}
              className="max-w-[700px]"
            >
              <p className="text-[19px] leading-[1.65] tracking-[-0.02em] text-white/90 md:text-[25px] md:leading-[1.55]">
                Great digital experiences don&apos;t begin with
                technology. They begin with understanding what
                matters.
              </p>

              <p className="mt-6 max-w-[620px] text-[15px] leading-8 text-white/60 md:text-[17px]">
                At SHAMS, we bring together design thinking,
                practical engineering, and a genuine curiosity
                about how businesses work. We believe every
                digital product should solve a real problem,
                feel effortless to use, and create lasting value.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Philosophy / visual composition */}
        <div className="mt-14 grid items-center gap-10 border-t border-white/[0.12] pt-12 md:mt-20 md:pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Architectural illustration */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -25 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease }}
            className="min-w-0"
          >
            <ArchitectureVisual />
          </motion.div>

          {/* Philosophy */}
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                The philosophy
              </span>
            </div>

            <motion.h3
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease }}
              className="max-w-[600px] text-[clamp(2.6rem,4.5vw,5.2rem)] font-medium leading-[1.02] tracking-[-0.06em] text-white"
            >
              Good design
              <br />
              is never
              <br />
              <span className="text-shams-orange">
                accidental.
              </span>
            </motion.h3>

            <p className="mt-7 max-w-[480px] text-[15px] leading-8 text-white/60 md:text-[17px]">
              The strongest digital products are shaped by clear
              decisions, thoughtful details, and technology that
              works quietly in the background.
            </p>

            <div className="mt-9 flex flex-wrap gap-2">
              {["Clarity", "Craft", "Performance"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.16] px-4 py-2 text-[12px] text-white/70 md:text-[13px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Core principles */}
        <div className="mt-16 border-t border-white/[0.12] md:mt-24">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease,
              }}
              className="group grid gap-4 border-b border-white/[0.12] py-8 md:grid-cols-[0.35fr_1fr_1fr] md:items-start md:gap-10 md:py-10"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-shams-orange">
                {item.code}
              </span>

              <h4 className="text-[clamp(1.8rem,3vw,3rem)] font-medium leading-[1.1] tracking-[-0.045em] text-white transition-colors duration-300 group-hover:text-shams-orange">
                {item.title}
              </h4>

              <p className="max-w-[390px] text-[14px] leading-7 text-white/60 md:text-[16px] md:leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing signature */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
            Thoughtful by design
          </span>

          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
            Built for what&apos;s next
          </span>
        </div>
      </div>
    </section>
  );
}
