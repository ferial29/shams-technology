
"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const orbitRings = [110, 155, 200, 245];

export default function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-shams-background">
      {/* Technical background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient orange light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-140px] top-[12%] h-[420px] w-[420px] rounded-full bg-shams-orange/[0.06] blur-[100px] md:right-[-180px] md:h-[600px] md:w-[600px] md:blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-8 pt-28 md:px-10 md:pb-12 md:pt-36 lg:px-16">
        <div className="grid items-center gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          {/* Editorial content */}
          <div className="relative z-10 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                The studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="text-[clamp(3.5rem,7.5vw,8rem)] font-medium leading-[0.9] tracking-[-0.07em] text-white"
            >
              We build
              <br />
              what&apos;s
              <br />
              <span className="text-shams-orange">next.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease }}
              className="mt-7 max-w-[520px] text-[15px] leading-7 text-white/65 md:text-[17px] md:leading-8"
            >
              SHAMS is a London-based digital studio bringing together
              thoughtful design, modern technology, and a clear
              understanding of what businesses need to grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              <a
                href="#our-story"
                className="group inline-flex min-h-[50px] items-center gap-5 rounded-full border border-white/20 px-6 py-3 text-[13px] font-medium text-white transition-all duration-300 hover:border-shams-orange hover:bg-shams-orange hover:text-black"
              >
                Discover our story
                <span
                  aria-hidden="true"
                  className="text-[18px] transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>

              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
                Independent by design
              </span>
            </motion.div>
          </div>

          {/* Solar orbital illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[500px]"
            role="img"
            aria-label="Abstract SHAMS solar system with concentric orbital rings and orange light"
          >
            {/* Coordinate lines */}
            <div className="pointer-events-none absolute left-1/2 top-[5%] h-[90%] w-px bg-gradient-to-b from-transparent via-white/[0.09] to-transparent" />

            <div className="pointer-events-none absolute left-[5%] top-1/2 h-px w-[90%] bg-gradient-to-r from-transparent via-white/[0.09] to-transparent" />

            <svg
              viewBox="0 0 600 600"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="aboutSolarGlow">
                  <stop
                    offset="0%"
                    stopColor="#ff6a00"
                    stopOpacity="0.23"
                  />
                  <stop
                    offset="100%"
                    stopColor="#ff6a00"
                    stopOpacity="0"
                  />
                </radialGradient>

                <linearGradient
                  id="aboutOrbitGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#ff6a00"
                    stopOpacity="0.08"
                  />
                  <stop
                    offset="50%"
                    stopColor="#ff6a00"
                    stopOpacity="0.7"
                  />
                  <stop
                    offset="100%"
                    stopColor="#ffffff"
                    stopOpacity="0.08"
                  />
                </linearGradient>
              </defs>

              <circle
                cx="300"
                cy="300"
                r="285"
                fill="url(#aboutSolarGlow)"
              />

              {orbitRings.map((radius, index) => (
                <circle
                  key={radius}
                  cx="300"
                  cy="300"
                  r={radius}
                  fill="none"
                  stroke={
                    index === 1
                      ? "url(#aboutOrbitGradient)"
                      : "#ffffff"
                  }
                  strokeOpacity={index === 1 ? 0.75 : 0.13}
                  strokeWidth={index === 1 ? 1.5 : 1}
                  strokeDasharray={
                    index === 3 ? "3 8" : undefined
                  }
                />
              ))}

              {/* Central eclipse */}
              <circle
                cx="300"
                cy="300"
                r="76"
                fill="#0b0807"
                stroke="#ff6a00"
                strokeWidth="2"
              />

              <circle
                cx="300"
                cy="300"
                r="69"
                fill="#0b0807"
                stroke="#ff6a00"
                strokeOpacity="0.2"
                strokeWidth="10"
              />

              <circle
                cx="300"
                cy="300"
                r="35"
                fill="#ff6a00"
                opacity="0.06"
              />

              <path
                d="M 300 285 L 300 315 M 285 300 L 315 300"
                stroke="#ff6a00"
                strokeWidth="1"
                strokeOpacity="0.6"
              />
            </svg>

            {/* Animated orbital point */}
            <motion.div
              animate={
                reduceMotion ? undefined : { rotate: 360 }
              }
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[24.2%] rounded-full"
            >
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-shams-orange shadow-[0_0_22px_rgba(255,106,0,0.8)]" />
            </motion.div>

            {/* Secondary orbit */}
            <motion.div
              animate={
                reduceMotion ? undefined : { rotate: -360 }
              }
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[9.2%] rounded-full"
            >
              <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/70" />
            </motion.div>

            {/* Technical annotations */}
            <div className="absolute left-[2%] top-[16%] border-l border-shams-orange/60 pl-2 sm:pl-3">
              <span className="block font-mono text-[9px] uppercase tracking-[0.08em] text-white/70 sm:text-[10px]">
                SHAMS / STUDIO
              </span>
              <span className="mt-1 block font-mono text-[9px] text-white/40 sm:text-[10px]">
                IDEAS INTO IMPACT
              </span>
            </div>

            <div className="absolute bottom-[14%] right-[2%] border-r border-shams-orange/60 pr-2 text-right sm:pr-3">
              <span className="block font-mono text-[9px] uppercase tracking-[0.08em] text-white/70 sm:text-[10px]">
                Digital thinking
              </span>
              <span className="mt-1 block font-mono text-[9px] text-white/40 sm:text-[10px]">
                DESIGN / ENGINEERING
              </span>
            </div>
          </motion.div>
        </div>

        {/* Hero closing signature */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.1] pt-5 md:mt-9">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
            SHAMS Technology
          </span>

          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
            Design · Technology · Purpose
          </span>
        </div>
      </div>
    </section>
  );
}
