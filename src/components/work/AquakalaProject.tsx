
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AquakalaProject() {
  return (
    <article className="relative border-b border-white/[0.08] py-12 md:py-16 lg:py-20">
      {/* Project heading */}
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="text-[clamp(3rem,6.5vw,6.7rem)] font-medium leading-[0.86] tracking-[-0.065em] text-white">
            Aquakala
          </h2>
          <p className="mt-4 text-[15px] text-white/55 md:text-[16px]">
            Better water. Better living.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="lg:justify-self-end"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-shams-orange">
              02
            </span>
            <span className="h-px w-8 bg-white/15" />
            <span className="text-[10px] uppercase tracking-[0.16em] text-white/50 md:text-[11px]">
              E-commerce · Digital Experience
            </span>
          </div>
          <div className="mt-6 hidden items-center justify-end gap-2 lg:flex">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">
              Commerce system
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
          </div>
        </motion.div>
      </div>

      {/* Main visual */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
        className="group relative mt-10 overflow-hidden bg-[#eaf6fa] md:mt-12 lg:mt-14"
      >
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(27,86,108,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(27,86,108,0.12)_1px,transparent_1px)] [background-size:72px_72px]"
        />

        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-[360px] w-[360px] rounded-full bg-[#73c9e8]/20 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 right-[5%] h-[380px] w-[380px] rounded-full bg-[#91d9ef]/25 blur-[110px]"
        />

        {/* Top metadata */}
        <div className="absolute left-5 top-5 z-20 flex items-center gap-2 md:left-7 md:top-7">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1688b0]" />
          <span className="text-[9px] uppercase tracking-[0.18em] text-[#123c4c]/55 md:text-[10px]">
            Commerce preview
          </span>
        </div>

        <div className="absolute right-7 top-7 z-20 hidden text-[10px] uppercase tracking-[0.16em] text-[#123c4c]/45 md:block">
          Pure systems · 02 / 03
        </div>

        <div className="relative grid min-h-[500px] gap-12 px-6 py-20 md:min-h-[590px] md:px-12 lg:min-h-[640px] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-16">
          {/* Storefront */}
          <div className="relative order-2 mx-auto w-full min-w-0 max-w-[720px] lg:order-1">
            {/* Back panel */}
            <motion.div
              whileHover={{ x: -5, y: 4, rotate: -1.5 }}
              transition={{ duration: 0.45 }}
              className="absolute -left-4 top-7 hidden h-[84%] w-[94%] rotate-[-2deg] border border-[#174c60]/10 bg-[#cfe9f2] md:block"
            />

            {/* Main browser */}
            <motion.div
              whileHover={{ y: -7, rotate: -0.3 }}
              transition={{ duration: 0.45, ease }}
              className="relative z-10 overflow-hidden border border-[#174c60]/10 bg-white shadow-[0_30px_80px_rgba(25,91,115,0.14)]"
            >
              {/* Browser bar */}
              <div className="flex h-9 items-center justify-between border-b border-[#174c60]/[0.08] px-4">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#174c60]/15" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#174c60]/15" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1688b0]/70" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.15em] text-[#174c60]/45">
                  aquakala
                </span>
                <span className="h-1.5 w-5 rounded-full bg-[#174c60]/10" />
              </div>

              {/* Shop */}
              <div className="min-h-[360px] bg-[#fbfdfe] p-5 md:min-h-[410px] md:p-7">
                {/* Shop navigation */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1688b0]/20">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#1688b0]" />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#153c4b]">
                      AQUAKALA
                    </span>
                  </div>

                  <div className="hidden items-center gap-5 md:flex">
                    {["Products", "Filters", "Support"].map((item) => (
                      <span
                        key={item}
                        className="text-[9px] uppercase tracking-[0.12em] text-[#153c4b]/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="h-6 w-12 shrink-0 rounded-full bg-[#1688b0]" />
                </div>

                {/* Store hero */}
                <div className="mt-7 grid grid-cols-[1.05fr_0.95fr] gap-4 md:mt-9 md:gap-7">
                  <div className="min-w-0">
                    <span className="text-[9px] uppercase leading-5 tracking-[0.12em] text-[#1688b0]/85">
                      Cleaner water · everyday
                    </span>
                    <h3 className="mt-3 text-[20px] font-medium leading-[0.95] tracking-[-0.05em] text-[#123542] md:text-[32px]">
                      Pure water.
                      <br />
                      Simple choice.
                    </h3>
                    <div className="mt-5 h-6 w-20 rounded-full bg-[#1688b0] md:h-7 md:w-24" />
                  </div>

                  {/* Water purifier */}
                  <div className="relative flex min-h-[120px] items-center justify-center md:min-h-[155px]">
                    <div className="absolute h-28 w-28 rounded-full bg-[#8ed8ed]/25 blur-2xl md:h-36 md:w-36" />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative h-[105px] w-[72px] rounded-[8px] border border-[#174c60]/10 bg-white shadow-[0_15px_30px_rgba(30,98,122,0.12)] md:h-[140px] md:w-[94px]"
                    >
                      <div className="absolute left-1/2 top-3 h-2 w-7 -translate-x-1/2 rounded-full bg-[#153c4b]/10" />
                      <div className="absolute left-1/2 top-8 h-[46px] w-[44px] -translate-x-1/2 rounded-sm bg-[#e9f6fa] md:top-10 md:h-[62px] md:w-[58px]">
                        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1688b0]/25">
                          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1688b0]" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-[#153c4b]/10" />
                    </motion.div>
                  </div>
                </div>

                {/* Products */}
                <div className="mt-7 grid grid-cols-3 gap-2 md:mt-8 md:gap-3">
                  {["Home", "Compact", "Premium"].map((product, index) => (
                    <div
                      key={product}
                      className={`min-w-0 border p-3 md:p-4 ${
                        index === 1
                          ? "border-[#1688b0]/25 bg-[#eaf7fb]"
                          : "border-[#174c60]/[0.08] bg-white"
                      }`}
                    >
                      <div className="flex h-14 items-center justify-center md:h-20">
                        <div
                          className={`relative rounded-sm border border-[#174c60]/10 bg-white ${
                            index === 0
                              ? "h-10 w-7"
                              : index === 1
                                ? "h-12 w-8"
                                : "h-11 w-9"
                          }`}
                        >
                          <span className="absolute left-1/2 top-2 h-1 w-3 -translate-x-1/2 rounded-full bg-[#1688b0]/40" />
                        </div>
                      </div>
                      <span className="mt-2 block text-[9px] uppercase tracking-[0.06em] text-[#153c4b]/60">
                        {product}
                      </span>
                      <div className="mt-2 h-1 w-[55%] rounded-full bg-[#153c4b]/10" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tracking marker */}
            <motion.div
              animate={{
                x: [0, 15, 15, 0, 0],
                y: [0, 0, 15, 15, 0],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-3 -left-3 z-20 hidden md:flex md:items-center md:gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#1688b0] shadow-[0_0_18px_rgba(22,136,176,0.45)]" />
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#123c4c]/50">
                Commerce / 02
              </span>
            </motion.div>
          </div>

          {/* Main visual copy */}
          <div className="relative order-1 z-10 min-w-0 lg:order-2 lg:pl-8">
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#123c4c]/60 md:text-[11px]">
              E-commerce · reimagined
            </span>

            <h3 className="mt-5 max-w-[420px] text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.065em] text-[#123542]">
              Better water.
              <br />
              Better
              <br />
              <span className="text-[#1688b0]">living.</span>
            </h3>

            <p className="mt-6 max-w-[330px] text-[14px] leading-[1.7] text-[#123c4c]/75 md:text-[15px]">
              A cleaner digital shopping experience designed to make water
              purification products easier to discover, compare and choose.
            </p>

            {/* Water detail */}
            <div className="mt-8 flex items-center gap-4">
              <div className="relative flex h-9 w-9 items-center justify-center">
                <motion.span
                  animate={{
                    scale: [0.7, 1.35],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute h-7 w-7 rounded-full border border-[#1688b0]/30"
                />
                <span className="h-2 w-2 rounded-full bg-[#1688b0]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#123c4c]/55">
                Clear · simple · useful
              </span>
            </div>
          </div>
        </div>

        {/* Visual footer */}
        <div className="relative z-10 flex items-center justify-between gap-3 border-t border-[#174c60]/[0.08] px-5 py-4 md:px-7">
          <span className="text-[9px] uppercase tracking-[0.12em] text-[#123c4c]/55 md:text-[10px]">
            E-commerce · UX/UI · Development
          </span>
          <span className="shrink-0 text-[9px] uppercase tracking-[0.12em] text-[#123c4c]/55 md:text-[10px]">
            02 / 03
          </span>
        </div>
      </motion.div>

      {/* Project information */}
      <div className="grid gap-8 pt-8 md:grid-cols-[1.25fr_0.75fr] md:gap-12 md:pt-10 lg:grid-cols-[1.4fr_0.6fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="max-w-[620px] text-[18px] leading-[1.5] tracking-[-0.02em] text-white/80 md:text-[22px]">
            A focused commerce experience that makes complex water
            purification products easier to understand, compare and purchase.
          </p>
        </motion.div>

        <div>
          <div className="grid grid-cols-2 gap-6 border-b border-white/[0.08] pb-6">
            <div>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">
                Services
              </span>
              <span className="mt-2 block text-[13px] leading-6 text-white/70">
                UX / UI
                <br />
                Web Development
              </span>
            </div>

            <div>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">
                Type
              </span>
              <span className="mt-2 block text-[13px] leading-6 text-white/70">
                E-commerce
                <br />
                Experience
              </span>
            </div>
          </div>

          <Link
            href="/work/aquakala"
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
