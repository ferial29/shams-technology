
"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    id: "01",
    title: "Discover",
    subtitle: "Understand the challenge",
    description:
      "We listen, ask the right questions, and explore your goals, audience, and opportunities before deciding what to build.",
    detail: "Research / Insights",
    icon: "◎",
  },
  {
    id: "02",
    title: "Define",
    subtitle: "Create a clear direction",
    description:
      "We turn insights into a focused plan, aligning the experience, technology, and priorities around what matters most.",
    detail: "Strategy / Planning",
    icon: "⌗",
  },
  {
    id: "03",
    title: "Design & Build",
    subtitle: "Make the vision real",
    description:
      "We bring design and engineering together to create thoughtful interfaces and reliable digital products.",
    detail: "Design / Engineering",
    icon: "◇",
  },
  {
    id: "04",
    title: "Launch & Evolve",
    subtitle: "Keep moving forward",
    description:
      "We prepare for launch, refine the details, and identify opportunities to improve as your business grows.",
    detail: "Launch / Growth",
    icon: "↗",
  },
];

export default function AboutApproach() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-approach"
      className="relative overflow-hidden bg-[#0d0a08] py-20 md:py-28 lg:py-32"
    >
      {/* Technical background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Ambient orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[460px] w-[460px] rounded-full bg-[#ff6a00]/[0.055] blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-8 border-t border-white/[0.12] pt-8 lg:flex-row lg:items-end lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />

              <span className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                Our approach
              </span>
            </div>

            <motion.h2
              initial={
                reduceMotion ? false : { opacity: 0, y: 24 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease }}
              className="text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.065em] text-white"
            >
              From idea
              <br />
              to <span className="text-shams-orange">impact.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={
              reduceMotion ? false : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease,
            }}
            className="max-w-[390px] text-[15px] leading-8 text-white/60 md:text-[17px]"
          >
            A thoughtful process that connects your vision
            with the right strategy, design, and technology.
            Clear at every stage. Built around your goals.
          </motion.p>
        </div>

        {/* Process timeline */}
        <div className="relative mt-16 md:mt-20">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[25px] hidden h-px bg-white/[0.16] lg:block"
          />

          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.6,
              ease,
            }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[25px] hidden h-px bg-gradient-to-r from-[#ff6a00] via-[#ff6a00]/70 to-[#ff6a00]/10 lg:block"
          />

          {/* Mobile vertical timeline */}
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-[23px] top-[24px] w-px bg-white/[0.14] lg:hidden"
          />

          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.5,
              ease,
            }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-10 left-[23px] top-[24px] w-px bg-gradient-to-b from-[#ff6a00] via-[#ff6a00]/60 to-transparent lg:hidden"
          />

          {/* Equal-height steps */}
          <div className="relative grid gap-12 lg:grid-cols-4 lg:items-stretch lg:gap-7">
            {steps.map((step, index) => (
              <motion.article
                key={step.id}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease,
                }}
                className="group relative grid h-full grid-cols-[48px_minmax(0,1fr)] gap-5 lg:flex lg:flex-col lg:gap-0"
              >
                {/* Timeline node */}
                <div className="relative z-10 flex h-[50px] w-[48px] shrink-0 items-center justify-center lg:mb-10">
                  <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#ff6a00]/45 bg-[#1a100b] transition-all duration-500 group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00]">
                    <span className="text-[21px] text-[#ff8a35] transition-colors duration-500 group-hover:text-black">
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Content - grows to fill equal-height column */}
                <div className="flex min-w-0 flex-1 flex-col pt-1 lg:pt-0">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="font-mono text-[11px] tracking-[0.12em] text-shams-orange">
                      {step.id} / 04
                    </span>

                    <span className="h-px w-7 bg-white/20" />
                  </div>

                  {/* Equal title area on desktop */}
                  <div className="lg:min-h-[85px]">
                    <h3 className="max-w-[310px] text-[clamp(1.8rem,2.7vw,2.8rem)] font-medium leading-[1.08] tracking-[-0.05em] text-white transition-colors duration-300 group-hover:text-shams-orange">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-[13px] font-medium text-white/85 md:text-[14px] lg:mt-0">
                    {step.subtitle}
                  </p>

                  <p className="mt-4 max-w-[320px] text-[14px] leading-7 text-white/55 md:text-[15px]">
                    {step.description}
                  </p>

                  {/* Bottom label - always aligned on desktop */}
                  <div className="mt-7 border-t border-white/[0.12] pt-4 lg:mt-auto lg:pt-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/40">
                      {step.detail}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/[0.12] pt-7 md:mt-24 md:flex-row md:items-center">
          <p className="max-w-[600px] text-[17px] leading-7 tracking-[-0.02em] text-white/75 md:text-[21px]">
            No unnecessary complexity. Just a clear path
            from where you are to where you want to go.
          </p>

          <a
            href="/services"
            className="group inline-flex items-center gap-3 self-start text-[13px] font-medium text-shams-orange transition-colors duration-300 hover:text-white"
          >
            Explore our services

            <span
              aria-hidden="true"
              className="text-[20px] transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

