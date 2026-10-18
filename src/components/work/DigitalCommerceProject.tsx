
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const bars = [38, 62, 48, 76, 58, 88, 70, 94, 72, 82, 66, 91];

const stream = [
  "ORDER_1284",
  "PAYMENT_OK",
  "SYNC_COMPLETE",
  "STOCK_042",
  "SESSION_ACTIVE",
  "ORDER_1285",
  "PAYMENT_OK",
  "SYNC_COMPLETE",
];

function Dashboard({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      whileHover={compact ? undefined : { y: -7, rotate: 0.25 }}
      transition={{ duration: 0.45 }}
      className="relative z-10 w-full min-w-0 overflow-hidden border border-white/[0.1] bg-[#0b0a09] shadow-[0_35px_90px_rgba(0,0,0,0.5)]"
    >
      {/* Browser bar */}
      <div
        className={`flex items-center justify-between border-b border-white/[0.07] ${
          compact ? "h-8 px-2" : "h-10 px-4"
        }`}
      >
        <div className="flex shrink-0 items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
        </div>

        <span
          className={`uppercase text-white/45 ${
            compact
              ? "text-[7px] tracking-[0.04em]"
              : "text-[10px] tracking-[0.12em]"
          }`}
        >
          Commerce / Overview
        </span>

        <span
          className={`flex shrink-0 items-center gap-1 uppercase text-white/50 ${
            compact ? "text-[7px]" : "text-[10px]"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
          Live
        </span>
      </div>

      <div
        className={`grid min-w-0 ${
          compact
            ? "grid-cols-[24px_minmax(0,1fr)]"
            : "min-h-[390px] grid-cols-[0.22fr_0.78fr]"
        }`}
      >
        {/* Sidebar */}
        <div
          className={`min-w-0 border-r border-white/[0.07] bg-[#0e0d0c] ${
            compact ? "px-1.5 py-4" : "p-4 md:p-5"
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`flex shrink-0 items-center justify-center rounded-full bg-shams-orange ${
                compact ? "h-3 w-3" : "h-6 w-6"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
            </span>

            {!compact && (
              <span className="hidden text-[10px] uppercase tracking-[0.12em] text-white/55 sm:block">
                SHAMS
              </span>
            )}
          </div>

          <div className="mt-7 space-y-4">
            {[70, 52, 64, 46, 58].map((width, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    index === 0 ? "bg-shams-orange" : "bg-white/10"
                  }`}
                />

                {!compact && (
                  <div
                    style={{ width: `${width}%` }}
                    className={`hidden h-1 rounded-full sm:block ${
                      index === 0 ? "bg-white/25" : "bg-white/[0.08]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard content */}
        <div className={`min-w-0 ${compact ? "p-2.5" : "p-4 md:p-6"}`}>
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <span
                className={`block uppercase text-white/45 ${
                  compact
                    ? "text-[8px] tracking-[0.03em]"
                    : "text-[10px] tracking-[0.12em]"
                }`}
              >
                Commerce overview
              </span>

              <span
                className={`mt-1.5 block font-medium tracking-[-0.03em] text-white/90 ${
                  compact
                    ? "text-[16px]"
                    : "text-[19px] md:text-[22px]"
                }`}
              >
                Performance
              </span>
            </div>

            {!compact && (
              <span className="rounded-full border border-shams-orange/20 bg-shams-orange/[0.08] px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-shams-orange">
                Live data
              </span>
            )}
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 ${
              compact ? "mt-4 gap-1" : "mt-6 gap-2 md:gap-3"
            }`}
          >
            {[
              { label: "Revenue", value: "84.2k" },
              { label: "Growth", value: "+24%", accent: true },
              { label: "Orders", value: "1,284" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`min-w-0 border ${
                  stat.accent
                    ? "border-shams-orange/15 bg-shams-orange/[0.04]"
                    : "border-white/[0.07] bg-white/[0.025]"
                } ${
                  compact ? "px-1 py-2.5" : "p-3 md:p-4"
                }`}
              >
                <span
                  className={`block uppercase ${
                    compact
                      ? "text-[7px] tracking-normal"
                      : "text-[10px] tracking-[0.1em]"
                  } ${
                    stat.accent
                      ? "text-shams-orange/80"
                      : "text-white/50"
                  }`}
                >
                  {stat.label}
                </span>

                <span
                  className={`mt-2 block whitespace-nowrap font-medium ${
                    compact
                      ? "text-[11px]"
                      : "text-[17px] md:text-[21px]"
                  } ${
                    stat.accent
                      ? "text-shams-orange"
                      : "text-white/85"
                  }`}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div
            className={`border border-white/[0.07] bg-white/[0.02] ${
              compact ? "mt-3 p-2.5" : "mt-4 p-4 md:mt-5"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`uppercase text-white/50 ${
                  compact
                    ? "text-[8px] tracking-[0.08em]"
                    : "text-[10px] tracking-[0.14em]"
                }`}
              >
                Activity
              </span>

              <span
                className={`text-shams-orange/85 ${
                  compact ? "text-[8px]" : "text-[10px]"
                }`}
              >
                +18.4%
              </span>
            </div>

            <div
              className={`flex items-end ${
                compact
                  ? "mt-4 h-[75px] gap-[3px]"
                  : "mt-5 h-[95px] gap-1.5 md:h-[120px] md:gap-2"
              }`}
            >
              {bars.map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.035,
                  }}
                  className={`min-w-0 flex-1 ${
                    index === 7 || index === 11
                      ? "bg-shams-orange"
                      : "bg-white/[0.12]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Data stream */}
          <div className="relative mt-4 overflow-hidden border-t border-white/[0.06] pt-3">
            <motion.div
              animate={{ x: ["0%", "-45%"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max items-center gap-7 whitespace-nowrap"
            >
              {stream.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className={`font-mono uppercase tracking-[0.1em] text-white/40 ${
                    compact ? "text-[8px]" : "text-[10px]"
                  }`}
                >
                  <span className="mr-2 text-shams-orange/70">
                    ●
                  </span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DigitalCommerceProject() {
  return (
    <article className="relative min-w-0 border-b border-white/[0.08] py-12 md:py-16 lg:py-20">
      {/* Project heading */}
      <div className="grid min-w-0 gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-shams-orange">
              03
            </span>
            <span className="h-px w-8 bg-white/15" />
            <span className="text-[10px] uppercase tracking-[0.16em] text-white/50 md:text-[11px]">
              Product Design · Development
            </span>
          </div>

          <div className="mt-6 hidden items-center gap-2 lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">
              Commerce infrastructure
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="min-w-0"
        >
          <h2 className="text-[clamp(2.8rem,6.5vw,6.7rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white">
            Digital Commerce
          </h2>

          <p className="mt-4 text-[15px] text-white/55 md:text-[16px]">
            Commerce, built to move.
          </p>
        </motion.div>
      </div>

      {/* Project preview */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="relative mt-10 min-w-0 overflow-hidden border border-white/[0.07] bg-[#11100f] md:mt-12 lg:mt-14"
      >
        {/* Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px]"
        />

        {/* Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-[10%] h-[430px] w-[430px] rounded-full bg-shams-orange/[0.09] blur-[120px]"
        />

        {/* Preview label */}
        <div className="absolute left-5 top-5 z-20 flex items-center gap-2 md:left-7 md:top-7">
          <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
          <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
            System preview
          </span>
        </div>

        <span className="absolute right-7 top-7 z-20 hidden text-[10px] uppercase tracking-[0.16em] text-white/40 md:block">
          Commerce OS · 03 / 03
        </span>

        <div className="relative grid min-w-0 gap-10 px-4 pb-12 pt-20 sm:px-6 md:min-h-[600px] md:gap-12 md:px-12 md:py-20 lg:min-h-[650px] lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-16">
          {/* Left content */}
          <div className="relative z-10 min-w-0">
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/50 md:text-[11px]">
              Connected commerce
            </span>

            <h3 className="mt-5 text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white">
              One system.
              <br />
              Every
              <br />
              <span className="text-shams-orange">
                signal.
              </span>
            </h3>

            <p className="mt-6 max-w-[340px] text-[14px] leading-7 text-white/65 md:text-[15px]">
              A connected digital commerce experience bringing
              products, customers and performance data into one
              clear interface.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 6px rgba(255,106,0,0.2)",
                    "0 0 20px rgba(255,106,0,0.7)",
                    "0 0 6px rgba(255,106,0,0.2)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 shrink-0 rounded-full bg-shams-orange"
              />

              <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                Data flowing · Live
              </span>
            </div>
          </div>

          {/* Dashboard */}
          <div className="relative mx-auto w-full min-w-0 max-w-[690px]">
            <motion.div
              whileHover={{ rotate: 1.5, x: 6, y: 4 }}
              transition={{ duration: 0.45 }}
              className="absolute -right-4 top-7 hidden h-[86%] w-[93%] rotate-[2deg] border border-shams-orange/10 bg-[#1a1714] md:block"
            />

            {/* Mobile dashboard */}
            <div className="block md:hidden">
              <Dashboard compact />
            </div>

            {/* Desktop dashboard */}
            <div className="hidden md:block">
              <Dashboard />
            </div>

            <motion.div
              animate={{
                x: [0, 18, 18, 0, 0],
                y: [0, 0, -18, -18, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-3 -right-3 z-20 hidden items-center gap-2 md:flex"
            >
              <span className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                Signal / 03
              </span>

              <span className="h-2 w-2 rounded-full bg-shams-orange shadow-[0_0_18px_rgba(255,106,0,0.6)]" />
            </motion.div>
          </div>
        </div>

        {/* Preview footer */}
        <div className="relative z-10 flex items-center justify-between gap-3 border-t border-white/[0.07] px-4 py-4 md:px-7">
          <span className="text-[9px] uppercase tracking-[0.08em] text-white/45 md:text-[10px] md:tracking-[0.14em]">
            Product design · Engineering · Commerce
          </span>

          <span className="shrink-0 text-[9px] uppercase tracking-[0.12em] text-white/45 md:text-[10px]">
            03 / 03
          </span>
        </div>
      </motion.div>

      {/* Project details */}
      <div className="grid min-w-0 gap-8 pt-8 md:grid-cols-[1.25fr_0.75fr] md:gap-12 md:pt-10 lg:grid-cols-[1.4fr_0.6fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="max-w-[620px] text-[18px] leading-[1.5] tracking-[-0.02em] text-white/80 md:text-[22px]">
            A scalable digital commerce system designed to connect
            products, operations and customer experiences through
            one cohesive platform.
          </p>
        </motion.div>

        <div>
          <div className="grid grid-cols-2 gap-6 border-b border-white/[0.08] pb-6">
            {/* Services */}
            <div>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">
                Services
              </span>

              <span className="mt-2 block text-[13px] leading-6 text-white/70">
                Product Design
                <br />
                Development
              </span>
            </div>

            {/* Type */}
            <div>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">
                Type
              </span>

              <span className="mt-2 block text-[13px] leading-6 text-white/70">
                Commerce
                <br />
                Platform
              </span>
            </div>
          </div>

          {/* Case study link */}
          <Link
            href="/work/digital-commerce"
            className="group mt-6 flex items-center justify-between border-b border-white/[0.08] pb-4"
          >
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/80 transition-colors duration-300 group-hover:text-white">
              View case study
            </span>

            <span className="text-lg text-shams-orange transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
