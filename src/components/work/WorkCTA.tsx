"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WorkCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0b0908] text-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[350px] w-[350px] rounded-full bg-shams-orange/[0.07] blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center justify-between border-b border-white/[0.09] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-shams-orange" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              The next chapter
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.22em] text-white/25">
            04 / Connect
          </span>
        </div>

        <div className="grid gap-12 pb-12 pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16 lg:pb-16 lg:pt-16">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="mb-6 block text-[9px] uppercase tracking-[0.25em] text-shams-orange/80">
              Seen what we can build?
            </span>

            <h2 className="text-[clamp(3.1rem,6.8vw,7.2rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Your project
              <br />
              could be
              <br />
              <span className="text-shams-orange">next.</span>
            </h2>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[360px] lg:mb-2 lg:justify-self-end"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-shams-orange/70" />
              <span className="text-[8px] uppercase tracking-[0.23em] text-white/35">
                From idea to impact
              </span>
            </div>

            <p className="text-[13px] leading-7 text-white/55 md:text-[14px]">
              Have an idea worth building? Let&apos;s turn it into a digital
              experience that moves your business forward.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-8 border border-shams-orange bg-shams-orange px-6 py-4 text-[11px] font-medium text-black transition-all duration-300 hover:bg-transparent hover:text-shams-orange"
            >
              Start a project
              <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Animated project path */}
        <div className="relative border-t border-white/[0.09] py-7">
          <div className="flex items-center justify-between gap-3">
            {["YOUR IDEA", "STRATEGY", "DESIGN", "BUILD", "LAUNCH"].map(
              (step, index) => (
                <div
                  key={step}
                  className="relative z-10 flex flex-col items-center gap-3"
                >
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0.4 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className={`h-2 w-2 rounded-full ${
                      index === 0 || index === 4
                        ? "bg-shams-orange"
                        : "bg-white/30"
                    }`}
                  />
                  <span className="text-center text-[7px] uppercase tracking-[0.12em] text-white/30 sm:text-[9px] sm:tracking-[0.2em]">
                    {step}
                  </span>
                </div>
              )
            )}
          </div>

          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[5%] right-[5%] top-[31px] h-px bg-white/[0.12]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full origin-left bg-gradient-to-r from-shams-orange via-shams-orange/70 to-shams-orange"
            />
          </div>
        </div>

        {/* Bottom signature */}
        <div className="mt-3 flex items-center justify-between border-t border-white/[0.09] pt-5">
          <span className="text-[8px] uppercase tracking-[0.23em] text-white/25">
            SHAMS Technology
          </span>
          <span className="text-[8px] uppercase tracking-[0.23em] text-white/25">
            London · Worldwide
          </span>
        </div>
      </div>
    </section>
  );
}