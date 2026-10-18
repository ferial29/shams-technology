
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance websites engineered to look exceptional, load fast, and turn visitors into customers.",
    tags: ["Next.js", "React", "Performance"],
    label: "WEB / ENGINEERING",
  },
  {
    title: "Web Applications",
    description:
      "Powerful platforms and custom applications built around the way your business actually works.",
    tags: ["SaaS", "Dashboards", "Platforms"],
    label: "PRODUCT / SYSTEMS",
  },
  {
    title: "E-commerce",
    description:
      "Thoughtful shopping experiences that make discovering, choosing, and buying feel effortless.",
    tags: ["Online Stores", "UX", "Conversion"],
    label: "COMMERCE / GROWTH",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautifully considered interfaces where every interaction has a purpose and every detail matters.",
    tags: ["Product Design", "Prototyping", "Design Systems"],
    label: "DESIGN / EXPERIENCE",
  },
  {
    title: "Digital Strategy",
    description:
      "A clear digital roadmap connecting your business goals with the right technology and opportunities.",
    tags: ["Consulting", "Planning", "Growth"],
    label: "STRATEGY / DIRECTION",
  },
];

function VisualFrame({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div className="relative flex min-h-[270px] w-full flex-col overflow-hidden rounded-xl border border-white/[0.12] bg-[#0e0c0b] sm:min-h-[280px] lg:min-h-[290px]">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Window header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
        <span className="font-mono text-[10px] tracking-[0.12em] text-white/60">
          {label}
        </span>

        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Visual content */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-3 sm:p-5">
        {children}
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#ff6a00]/[0.09] blur-[65px]" />
    </div>
  );
}

function DevelopmentVisual() {
  return (
    <VisualFrame label="SHAMS.DEV / BUILD">
      <div className="w-full max-w-[330px] overflow-hidden rounded-lg border border-white/15 bg-[#14110f] shadow-[0_20px_55px_rgba(0,0,0,.4)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>

          <span className="ml-3 font-mono text-[10px] text-white/50">
            app/page.tsx
          </span>
        </div>

        <div className="space-y-2 p-4 font-mono text-[12px] leading-5">
          <p>
            <span className="text-[#ff8a35]">const</span>
            <span className="text-white/75"> experience = </span>
            <span className="text-[#ff8a35]">{"{"}</span>
          </p>

          <p className="pl-4 text-white/65">
            performance: <span className="text-[#ff9b4b]">"fast"</span>,
          </p>

          <p className="pl-4 text-white/65">
            design: <span className="text-[#ff9b4b]">"precise"</span>,
          </p>

          <p className="pl-4 text-white/65">
            impact: <span className="text-[#ff9b4b]">"real"</span>
          </p>

          <p className="text-[#ff8a35]">{"};"}</p>

          <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
            <span className="text-white/65">Build successful</span>
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

function ApplicationsVisual() {
  const bars = [28, 44, 36, 58, 47, 75, 61, 90, 72, 100, 82, 95];

  return (
    <VisualFrame label="SHAMS.APP / ANALYTICS">
      <div className="w-full max-w-[330px] rounded-lg border border-white/15 bg-[#14110f] p-4 shadow-[0_20px_55px_rgba(0,0,0,.4)]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-white/50">
              Platform overview
            </p>

            <p className="mt-1 text-[18px] font-medium text-white">
              Dashboard
            </p>
          </div>

          <span className="rounded-full border border-[#ff6a00]/30 px-2 py-1 font-mono text-[10px] text-[#ff8a35]">
            ● LIVE
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {["24.8K", "98.9%", "+32%"].map((value, index) => (
            <div
              key={value}
              className="min-w-0 rounded border border-white/10 bg-white/[0.03] p-2"
            >
              <p className="text-[10px] text-white/45">
                {["Users", "Uptime", "Growth"][index]}
              </p>

              <p className="mt-1 text-[14px] font-medium text-white">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex h-16 items-end gap-2 border-b border-white/10 pb-1">
          {bars.map((height, index) => (
            <motion.div
              key={index}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
                duration: 0.5,
              }}
              style={{
                height: `${height}%`,
                transformOrigin: "bottom",
              }}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-[#ff6a00]/30 to-[#ff6a00]"
            />
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}

function CommerceVisual() {
  return (
    <VisualFrame label="SHAMS.STORE / COMMERCE">
      <div className="flex w-full max-w-[330px] items-center gap-3">
        {/* Product card */}
        <div className="min-w-0 flex-1 rounded-lg border border-white/15 bg-[#14110f] p-3 shadow-xl">
          <div className="flex h-24 items-center justify-center rounded bg-gradient-to-br from-[#382114] to-[#17100d]">
            <div className="relative h-14 w-14 rounded-xl border border-[#ff9b4b]/60 bg-gradient-to-br from-[#ff9b4b] via-[#b94c0a] to-[#35180a] shadow-[0_10px_25px_rgba(255,106,0,.2)]">
              <div className="absolute left-1/2 top-[-9px] h-4 w-7 -translate-x-1/2 rounded-t-full border-2 border-[#ffb06c]" />
            </div>
          </div>

          <p className="mt-3 text-[12px] font-medium text-white">
            Essential Collection
          </p>

          <div className="mt-2 flex items-center justify-between gap-1">
            <span className="text-[12px] text-[#ff8a35]">
              $129.00
            </span>

            <span className="rounded bg-[#ff6a00] px-2 py-1 text-[10px] font-semibold text-black">
              ADD +
            </span>
          </div>
        </div>

        {/* Confirmation card */}
        <div className="w-[42%] min-w-0 rounded-lg border border-[#ff6a00]/30 bg-[#1b120d] p-3">
          <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff6a00]/15 text-[#ff8a35]">
            ✓
          </div>

          <p className="text-[12px] font-medium text-white">
            Order confirmed
          </p>

          <p className="mt-2 font-mono text-[10px] text-white/50">
            PAYMENT SUCCESS
          </p>

          <div className="mt-3 h-1 rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-[#ff6a00]" />
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

function DesignVisual() {
  return (
    <VisualFrame label="SHAMS.DESIGN / INTERFACE">
      <div className="w-full max-w-[330px]">
        <div className="rounded-lg border border-white/15 bg-[#14110f] p-3 shadow-xl sm:p-4">
          {/* Interface heading */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[13px] font-medium text-white">
              Interface system
            </span>

            <span className="font-mono text-[10px] text-white/50">
              V 2.0
            </span>
          </div>

          {/* Interface components */}
          <div className="grid grid-cols-[1fr_1.2fr] gap-3">
            {/* Left */}
            <div className="min-w-0 space-y-2">
              <div className="h-16 rounded border border-[#ff6a00]/50 bg-[#ff6a00]/10 p-2">
                <div className="h-2 w-10 rounded-full bg-[#ff6a00]/70" />
                <div className="mt-2 h-1 w-full rounded-full bg-white/20" />
                <div className="mt-1 h-1 w-3/4 rounded-full bg-white/10" />
              </div>

              <div className="h-10 rounded border border-white/10 bg-white/[0.03] p-2">
                <div className="h-1.5 w-12 rounded-full bg-white/30" />
                <div className="mt-2 h-1 w-full rounded-full bg-white/10" />
              </div>
            </div>

            {/* Right */}
            <div className="min-w-0 rounded border border-white/10 bg-white/[0.03] p-3">
              <div className="mb-3 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff6a00]" />
                <span className="h-3 w-3 rounded-full bg-[#ff9c54]" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>

              <div className="h-2 w-4/5 rounded-full bg-white/40" />
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/15" />
              <div className="mt-1 h-1.5 w-3/4 rounded-full bg-white/10" />

              {/* Decorative component */}
              <div className="mt-4 rounded border border-[#ff6a00]/35 bg-[#ff6a00]/10 px-2 py-2 text-center font-mono text-[10px] text-[#ff9b4b]">
                Button component
              </div>
            </div>
          </div>

          {/* Design metadata - inside the card */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3">
            <span className="font-mono text-[10px] tracking-[0.05em] text-white/45">
              DESIGN SYSTEM
            </span>

            <span className="rounded border border-[#ff6a00]/30 bg-[#ff6a00]/[0.08] px-2 py-1 font-mono text-[10px] text-[#ff9b4b]">
              8PX GRID / AUTO LAYOUT
            </span>
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

function StrategyVisual() {
  const steps = ["Discover", "Design", "Build", "Scale"];

  return (
    <VisualFrame label="SHAMS.STRATEGY / ROADMAP">
      <div className="w-full max-w-[330px]">
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[11px] text-white/55">
            GROWTH ROADMAP
          </span>

          <span className="font-mono text-[11px] text-[#ff8a35]">
            NEXT →
          </span>
        </div>

        <div className="relative flex items-center justify-between">
          <div className="absolute left-[12%] right-[12%] top-5 h-px bg-gradient-to-r from-[#ff6a00] via-[#ff9b4b] to-[#ff6a00]/40" />

          {steps.map((label, index) => (
            <div key={label} className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full border text-[15px] ${
                  index === 3
                    ? "border-[#ff6a00] bg-[#ff6a00] text-black"
                    : "border-[#ff6a00]/50 bg-[#21140e] text-[#ff8a35]"
                }`}
              >
                {index === 3 ? "✓" : "●"}
              </motion.div>

              <p className="mt-3 text-[11px] text-white/70">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between rounded border border-white/10 bg-white/[0.03] px-4 py-3">
          <div>
            <p className="text-[11px] text-white/50">
              Direction
            </p>

            <p className="mt-1 text-[13px] text-white">
              From vision to impact
            </p>
          </div>

          <span className="text-[22px] text-[#ff6a00]">
            ↗
          </span>
        </div>
      </div>
    </VisualFrame>
  );
}

const visuals = [
  DevelopmentVisual,
  ApplicationsVisual,
  CommerceVisual,
  DesignVisual,
  StrategyVisual,
];

export default function ServicesList() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-shams-background pb-16 pt-8 md:pb-20 md:pt-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />

              <span className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                Our expertise
              </span>
            </div>

            <h2 className="text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.065em] text-white">
              What we <span className="text-shams-orange">do.</span>
            </h2>
          </div>

          <p className="max-w-[350px] text-[15px] leading-7 text-white/60 md:text-[16px]">
            From the first idea to the final launch, we build digital
            experiences with purpose and precision.
          </p>
        </div>

        {/* Service list */}
        <div className="border-t border-white/[0.12]">
          {services.map((service, index) => {
            const Visual = visuals[index];

            return (
              <motion.article
                key={service.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative grid gap-7 border-b border-white/[0.12] py-10 pl-3 sm:pl-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:py-16 lg:pl-0"
              >
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 top-0 w-[2px] origin-top scale-y-0 bg-shams-orange transition-transform duration-500 group-hover:scale-y-100" />

                {/* Text content */}
                <div className="min-w-0">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />

                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
                      {service.label}
                    </span>
                  </div>

                  <h3 className="max-w-[600px] text-[clamp(2.6rem,4.5vw,5rem)] font-medium leading-[1] tracking-[-0.06em] text-white transition-colors duration-300 group-hover:text-shams-orange">
                    {service.title}
                  </h3>

                  <p className="mt-6 max-w-[480px] text-[15px] leading-7 text-white/65 md:text-[17px] md:leading-8">
                    {service.description}
                  </p>

                  {/* Technology tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.18] bg-white/[0.025] px-4 py-2 text-[12px] font-medium text-white/70 transition-colors duration-300 group-hover:border-shams-orange/40 group-hover:text-white md:text-[13px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service visual */}
                <motion.div
                  whileHover={
                    reduceMotion ? undefined : { y: -5 }
                  }
                  transition={{ duration: 0.35 }}
                  className="min-w-0"
                >
                  <Visual />
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing signature */}
        <div className="mt-8 flex justify-end">
          <span className="text-[11px] uppercase tracking-[0.14em] text-white/45">
            Designed in London · Built for everywhere
          </span>
        </div>
      </div>
    </section>
  );
}
