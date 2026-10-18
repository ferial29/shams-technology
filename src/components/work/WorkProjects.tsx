"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AquakalaProject from "./AquakalaProject";
import DigitalCommerceProject from "./DigitalCommerceProject";

export default function WorkProjects() {
  return (
    <section className="relative overflow-hidden bg-[#070605] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] py-6 md:py-8">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-shams-orange" />

            <span className="text-[9px] uppercase tracking-[0.28em] text-white/40 md:text-[10px]">
              Featured projects
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.24em] text-white/25 md:text-[10px]">
            03 / Selected
          </span>
        </div>

        {/* Project 01 */}
        <article className="relative border-b border-white/[0.08] py-12 md:py-16 lg:py-20">
          {/* Project heading */}
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-shams-orange">
                  01
                </span>

                <span className="h-px w-8 bg-white/15" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  SaaS · Booking Platform
                </span>
              </div>

              <div className="mt-6 hidden items-center gap-2 lg:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />

                <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                  Live product system
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2 className="text-[clamp(3rem,6.5vw,6.7rem)] font-medium leading-[0.86] tracking-[-0.065em]">
                Beauty Hub
              </h2>

              <p className="mt-4 text-[14px] text-white/40 md:text-[16px]">
                Beauty, booked better.
              </p>
            </motion.div>
          </div>

          {/* Main project visual */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative mt-10 overflow-hidden bg-[#eee7dc] md:mt-12 lg:mt-14"
          >
            {/* Tiny visual label */}
            <div className="absolute left-5 top-5 z-20 flex items-center gap-2 md:left-7 md:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />

              <span className="text-[8px] uppercase tracking-[0.24em] text-black/35">
                Product preview
              </span>
            </div>

            {/* Coordinates */}
            <div className="absolute right-5 top-5 z-20 hidden text-[8px] uppercase tracking-[0.22em] text-black/25 md:block md:right-7 md:top-7">
              51.5072° N · 0.1276° W
            </div>

            {/* Background technical lines */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(0,0,0,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.16)_1px,transparent_1px)] [background-size:72px_72px]"
            />

            {/* Orange glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -right-20 h-[320px] w-[320px] rounded-full bg-[#ff6a00]/10 blur-[90px]"
            />

            <div className="relative grid min-h-[460px] items-center gap-12 px-6 py-20 md:min-h-[560px] md:px-12 lg:min-h-[620px] lg:grid-cols-[0.75fr_1.25fr] lg:px-16">
              {/* Visual copy */}
              <div className="relative z-10">
                <span className="text-[9px] uppercase tracking-[0.27em] text-black/35">
                  Beauty services · simplified
                </span>

                <h3 className="mt-5 max-w-[470px] text-[clamp(2.6rem,5vw,5.4rem)] font-medium leading-[0.9] tracking-[-0.065em] text-[#171310]">
                  Beauty,
                  <br />
                  booked
                  <br />
                  <span className="text-[#ff6a00]">better.</span>
                </h3>

                <p className="mt-6 max-w-[330px] text-[12px] leading-6 text-black/45 md:text-[13px]">
                  A streamlined booking experience connecting customers with
                  beauty services through one simple digital platform.
                </p>
              </div>

              {/* Interface mockup */}
              <div className="relative mx-auto w-full max-w-[650px]">
                {/* Back card */}
                <motion.div
                  whileHover={{
                    rotate: -2,
                    x: -6,
                    y: 4,
                  }}
                  transition={{ duration: 0.45 }}
                  className="absolute -left-4 top-8 hidden h-[78%] w-[82%] rotate-[-4deg] border border-black/10 bg-[#d8cdbf] md:block"
                />

                {/* Main browser */}
                <motion.div
                  whileHover={{
                    y: -7,
                    rotate: 0.4,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-10 overflow-hidden border border-black/10 bg-[#faf7f1] shadow-[0_30px_80px_rgba(56,39,24,0.16)]"
                >
                  {/* Browser bar */}
                  <div className="flex h-9 items-center justify-between border-b border-black/[0.08] px-4">
                    <div className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
                      <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]/70" />
                    </div>

                    <span className="text-[7px] uppercase tracking-[0.2em] text-black/25">
                      beautyhub
                    </span>

                    <span className="h-1.5 w-5 rounded-full bg-black/10" />
                  </div>

                  {/* Fake interface */}
                  <div className="grid min-h-[300px] grid-cols-[0.28fr_0.72fr] md:min-h-[370px]">
                    {/* Sidebar */}
                    <div className="border-r border-black/[0.07] bg-[#f3eee7] p-4 md:p-5">
                      <div className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-full bg-[#ff6a00]" />
                        <span className="hidden text-[8px] font-medium uppercase tracking-[0.16em] text-black/65 sm:block">
                          Beauty Hub
                        </span>
                      </div>

                      <div className="mt-8 space-y-3">
                        <div className="h-1.5 w-[72%] rounded-full bg-black/10" />
                        <div className="h-1.5 w-[55%] rounded-full bg-black/[0.07]" />
                        <div className="h-1.5 w-[64%] rounded-full bg-black/[0.07]" />
                        <div className="h-1.5 w-[48%] rounded-full bg-black/[0.07]" />
                      </div>
                    </div>

                    {/* Dashboard */}
                    <div className="p-4 md:p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="block text-[7px] uppercase tracking-[0.18em] text-black/30">
                            Welcome back
                          </span>

                          <span className="mt-1.5 block text-[15px] font-medium tracking-[-0.03em] text-black/75 md:text-[19px]">
                            Your appointments
                          </span>
                        </div>

                        <div className="h-7 w-16 rounded-full bg-[#ff6a00] md:w-20" />
                      </div>

                      <div className="mt-7 grid grid-cols-3 gap-2 md:gap-3">
                        <div className="border border-black/[0.07] bg-white p-3 md:p-4">
                          <span className="block text-[7px] uppercase tracking-[0.14em] text-black/25">
                            Today
                          </span>
                          <span className="mt-2 block text-lg font-medium text-black/70 md:text-2xl">
                            08
                          </span>
                        </div>

                        <div className="border border-black/[0.07] bg-white p-3 md:p-4">
                          <span className="block text-[7px] uppercase tracking-[0.14em] text-black/25">
                            Upcoming
                          </span>
                          <span className="mt-2 block text-lg font-medium text-black/70 md:text-2xl">
                            24
                          </span>
                        </div>

                        <div className="border border-[#ff6a00]/20 bg-[#ff6a00]/[0.06] p-3 md:p-4">
                          <span className="block text-[7px] uppercase tracking-[0.14em] text-[#ff6a00]/70">
                            Growth
                          </span>
                          <span className="mt-2 block text-lg font-medium text-[#ff6a00] md:text-2xl">
                            +18%
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 border border-black/[0.07] bg-white p-3 md:mt-5 md:p-4">
                        <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
                          <span className="text-[7px] uppercase tracking-[0.16em] text-black/30">
                            Next booking
                          </span>

                          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
                        </div>

                        <div className="mt-3 flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-[#ded4c8]" />

                          <div className="flex-1">
                            <div className="h-1.5 w-[45%] rounded-full bg-black/15" />
                            <div className="mt-2 h-1.5 w-[28%] rounded-full bg-black/[0.07]" />
                          </div>

                          <span className="text-[8px] text-black/35">
                            14:30
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Tracking point */}
                <motion.div
                  animate={{
                    x: [0, 18, 18, 0, 0],
                    y: [0, 0, 18, 18, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 -top-2 z-20 hidden md:block"
                >
                  <span className="block h-2 w-2 rounded-full bg-[#ff6a00] shadow-[0_0_18px_rgba(255,106,0,0.55)]" />

                  <span className="absolute left-3 top-0 whitespace-nowrap text-[7px] uppercase tracking-[0.18em] text-black/30">
                    UI / 01
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Visual footer */}
            <div className="relative z-10 flex items-center justify-between border-t border-black/[0.08] px-5 py-4 md:px-7">
              <span className="text-[7px] uppercase tracking-[0.22em] text-black/30">
                Product design · Web application
              </span>

              <span className="text-[7px] uppercase tracking-[0.22em] text-black/30">
                01 / 03
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
              <p className="max-w-[620px] text-[18px] leading-[1.5] tracking-[-0.02em] text-white/75 md:text-[22px]">
                A modern booking platform designed to make discovering,
                managing and booking beauty services feel effortless.
              </p>
            </motion.div>

            <div>
              <div className="grid grid-cols-2 gap-6 border-b border-white/[0.08] pb-6">
                <div>
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Services
                  </span>

                  <span className="mt-2 block text-[13px] leading-6 text-white/70">
                    Product Design
                    <br />
                    Web Development
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Type
                  </span>

                  <span className="mt-2 block text-[13px] leading-6 text-white/70">
                    SaaS
                    <br />
                    Platform
                  </span>
                </div>
              </div>

              <Link
                href="/work/beauty-hub"
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
        <AquakalaProject />
        <DigitalCommerceProject />
      </div>
    </section>
  );
}