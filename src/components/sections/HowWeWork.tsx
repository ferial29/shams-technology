"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, users and the problem worth solving.",
    visual: "discover",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn insights into a clear product direction, scope and practical roadmap.",
    visual: "define",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Design and engineering move together to create a fast, scalable digital product.",
    visual: "build",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ship, measure and refine — turning the first release into a product built to grow.",
    visual: "launch",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-shams-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-8 md:px-10 lg:px-16 lg:pb-20 lg:pt-10">
        {/* SECTION LABEL */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-shams-orange" />

            <span className="text-[10px] uppercase tracking-[0.28em] text-shams-muted">
              How we work
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
            05 / Process
          </span>
        </div>

        {/* INTRO */}
        <div className="grid gap-8 py-10 lg:grid-cols-2 lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="
              max-w-[650px]
              text-[clamp(3rem,5.5vw,6.2rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.06em]
              text-shams-text
            "
          >
            From idea
            <br />
            <span className="text-white/25">to impact.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md lg:ml-auto lg:pb-2"
          >
            <p className="text-sm leading-7 text-shams-muted">
              A focused process designed to move from uncertainty to a
              high-quality digital product — without unnecessary complexity.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-shams-orange" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                Strategy · Design · Engineering
              </span>
            </div>
          </motion.div>
        </div>

        {/* PROCESS */}
        <div className="relative border-y border-white/[0.08]">
          {/* Animated top line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-0
              top-0
              z-30
              h-px
              w-full
              origin-left
              bg-gradient-to-r
              from-shams-orange
              via-shams-orange
              to-shams-orange/20
            "
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  min-h-[220px]
                  overflow-hidden
                  border-b
                  border-white/[0.08]
                  bg-[#0b0908]
                  p-7

                  md:min-h-[230px]
                  md:border-r
                  md:p-8

                  lg:min-h-[245px]
                  lg:border-b-0
                "
              >
                {/* DISCOVER — RADAR / ORBITS */}
                {step.visual === "discover" && (
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className="
                        absolute
                        -left-20
                        -top-24
                        h-[280px]
                        w-[280px]
                        rounded-full
                        bg-shams-orange/[0.08]
                        blur-[85px]
                        transition-all
                        duration-700
                        group-hover:bg-shams-orange/[0.15]
                      "
                    />

                    <div
                      className="
                        absolute
                        left-12
                        top-7
                        h-[78px]
                        w-[78px]
                        rounded-full
                        border
                        border-shams-orange/[0.12]
                        transition-all
                        duration-700
                        group-hover:scale-110
                        group-hover:border-shams-orange/30
                      "
                    />

                    <div
                      className="
                        absolute
                        left-[66px]
                        top-[44px]
                        h-[45px]
                        w-[45px]
                        rounded-full
                        border
                        border-white/[0.07]
                        transition-all
                        duration-700
                        group-hover:scale-125
                      "
                    />

                    <div
                      className="
                        absolute
                        left-[122px]
                        top-[45px]
                        h-[5px]
                        w-[5px]
                        rounded-full
                        bg-shams-orange
                        opacity-40
                        shadow-[0_0_15px_rgba(255,106,0,0.8)]
                        transition-all
                        duration-700
                        group-hover:left-[112px]
                        group-hover:top-[30px]
                        group-hover:opacity-100
                      "
                    />
                  </div>
                )}

                {/* DEFINE — DIRECTION / PATH */}
                {step.visual === "define" && (
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-[#2a1409]/60
                        via-[#130d09]/35
                        to-transparent
                        opacity-70
                        transition-opacity
                        duration-700
                        group-hover:opacity-100
                      "
                    />

                    <div
                      className="
                        absolute
                        right-8
                        top-8
                        h-[70px]
                        w-[120px]
                        opacity-30
                        transition-opacity
                        duration-500
                        group-hover:opacity-70
                      "
                    >
                      <div className="absolute left-0 top-1 h-2 w-2 rounded-full border border-shams-orange/70" />

                      <div className="absolute left-[7px] top-[5px] h-px w-[42px] rotate-[18deg] origin-left bg-shams-orange/40" />

                      <div className="absolute left-[47px] top-[18px] h-2 w-2 rounded-full bg-shams-orange/70" />

                      <div className="absolute left-[53px] top-[21px] h-px w-[38px] rotate-[25deg] origin-left bg-shams-orange/40" />

                      <div className="absolute right-5 top-[37px] h-2 w-2 rounded-full border border-shams-orange" />

                      <div
                        className="
                          absolute
                          right-0
                          top-[33px]
                          text-xs
                          text-shams-orange
                          transition-transform
                          duration-500
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </div>
                    </div>
                  </div>
                )}

                {/* BUILD — ENGINEERING GRID */}
                {step.visual === "build" && (
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-[0.08]
                        transition-opacity
                        duration-500
                        group-hover:opacity-[0.15]

                        [background-image:linear-gradient(to_right,#ff6a00_1px,transparent_1px),linear-gradient(to_bottom,#ff6a00_1px,transparent_1px)]
                        [background-size:34px_34px]
                      "
                    />

                    <div className="absolute right-[18%] top-[19%] h-[5px] w-[5px] rounded-full bg-shams-orange/50" />

                    <div className="absolute right-[38%] top-[33%] h-[4px] w-[4px] rounded-full bg-white/20" />

                    <div className="absolute right-[25%] top-[48%] h-[4px] w-[4px] rounded-full bg-white/15" />

                    <div
                      className="
                        absolute
                        right-[18%]
                        top-[19%]
                        h-2
                        w-2
                        rounded-full
                        bg-shams-orange
                        opacity-40
                        shadow-[0_0_25px_rgba(255,106,0,0.9)]
                        transition-all
                        duration-700
                        group-hover:right-[38%]
                        group-hover:top-[33%]
                        group-hover:opacity-100
                      "
                    />

                    <span
                      className="
                        absolute
                        right-6
                        top-[86px]
                        font-mono
                        text-[8px]
                        tracking-[0.12em]
                        text-shams-orange/0
                        transition-all
                        duration-500
                        group-hover:text-shams-orange/35
                      "
                    >
                      BUILD_01
                    </span>
                  </div>
                )}

                {/* LAUNCH — SHAMS SOLAR SYSTEM */}
                {step.visual === "launch" && (
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className="
                        absolute
                        -right-20
                        -top-20
                        h-[280px]
                        w-[280px]
                        rounded-full
                        bg-shams-orange/[0.07]
                        blur-[70px]
                        transition-all
                        duration-700
                        group-hover:bg-shams-orange/[0.14]
                      "
                    />

                    <div
                      className="
                        absolute
                        right-[27px]
                        top-[19px]
                        h-[102px]
                        w-[102px]
                        rounded-full
                        border
                        border-shams-orange/[0.08]
                        transition-all
                        duration-700
                        group-hover:scale-110
                        group-hover:border-shams-orange/20
                      "
                    />

                    <div
                      className="
                        absolute
                        right-[42px]
                        top-[34px]
                        h-[72px]
                        w-[72px]
                        rounded-full
                        border
                        border-white/[0.05]
                        transition-all
                        duration-700
                        group-hover:scale-90
                      "
                    />

                    <div
                      className="
                        absolute
                        right-[56px]
                        top-[48px]
                        h-11
                        w-11
                        rounded-full
                        bg-gradient-to-br
                        from-[#ffb36b]
                        via-shams-orange
                        to-[#a83800]
                        opacity-80
                        shadow-[0_0_45px_rgba(255,106,0,0.3)]
                        transition-all
                        duration-700
                        group-hover:scale-110
                        group-hover:opacity-100
                        group-hover:shadow-[0_0_70px_rgba(255,106,0,0.55)]
                      "
                    />

                    <div
                      className="
                        absolute
                        right-[30px]
                        top-[66px]
                        h-[5px]
                        w-[5px]
                        rounded-full
                        bg-[#ffb36b]
                        opacity-40
                        transition-all
                        duration-700
                        group-hover:right-[43px]
                        group-hover:top-[29px]
                        group-hover:opacity-100
                      "
                    />
                  </div>
                )}

                {/* HOVER WASH */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-white/[0.018]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* NUMBER */}
                <div className="relative z-20 flex items-start justify-between">
                  <span
                    className="
                      text-[10px]
                      tracking-[0.25em]
                      text-white/35
                      transition-colors
                      duration-300
                      group-hover:text-shams-orange
                    "
                  >
                    {step.number}
                  </span>

                  <span
                    className="
                      text-lg
                      text-white/15
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-shams-orange
                    "
                  >
                    ↗
                  </span>
                </div>

                {/* CONTENT */}
                <div
                  className="
                    absolute
                    bottom-7
                    left-7
                    right-7
                    z-20

                    md:bottom-8
                    md:left-8
                    md:right-8
                  "
                >
                  <h3
                    className="
                      text-[clamp(1.8rem,2.4vw,2.8rem)]
                      font-medium
                      leading-none
                      tracking-[-0.05em]
                      text-shams-text
                      transition-transform
                      duration-500
                      group-hover:-translate-y-1
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[290px]
                      text-[13px]
                      leading-6
                      text-shams-muted
                      transition-colors
                      duration-500
                      group-hover:text-white/65
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {/* HOVER BOTTOM LINE */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    z-30
                    h-px
                    w-0
                    bg-shams-orange
                    transition-all
                    duration-700
                    ease-out
                    group-hover:w-full
                  "
                />
              </motion.article>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/25">
            Clear process · Better products
          </span>

          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-white/20 md:block">
            SHAMS / Product Process
          </span>
        </div>
      </div>
    </section>
  );
}