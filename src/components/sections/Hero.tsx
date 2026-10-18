"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-shams-background lg:min-h-screen">
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:48px_48px]
          md:[background-size:56px_56px]
          lg:[background-size:64px_64px]
        "
      />

      {/* Right Ambient Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[-45%] top-[18%]
          h-[420px] w-[420px]
          rounded-full
          bg-shams-orange/[0.045]
          blur-[120px]

          md:right-[-25%]
          md:top-[12%]
          md:h-[560px]
          md:w-[560px]

          lg:right-[-12%]
          lg:top-[8%]
          lg:h-[700px]
          lg:w-[700px]
          lg:bg-shams-orange/[0.07]
          lg:blur-[150px]
        "
      />

      {/* Hero Container */}
      <div
        className="
          relative z-10 mx-auto
          flex w-full
          max-w-[1440px]
          px-6 pb-14 pt-32

          md:min-h-[720px]
          md:items-center
          md:px-10
          md:pb-16
          md:pt-28

          lg:min-h-screen
          lg:items-center
          lg:px-16
          lg:pb-10
          lg:pt-24
        "
      >
        <div
          className="
            grid w-full items-center
            gap-10

            lg:grid-cols-[1.55fr_0.75fr]
            lg:gap-12

            xl:grid-cols-[1.6fr_0.7fr]
            xl:gap-16
          "
        >
          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div className="min-w-0">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-5 flex items-center gap-2.5
                sm:mb-6
                lg:mb-7 lg:gap-3
              "
            >
              <span
                className="
                  h-1.5 w-1.5 shrink-0
                  rounded-full
                  bg-shams-orange
                  shadow-[0_0_16px_#FF6A00]

                  lg:h-2 lg:w-2
                "
              />

              <p
                className="
                  whitespace-nowrap
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-shams-muted

                  sm:text-[9px]
                  sm:tracking-[0.22em]

                  lg:text-[11px]
                  lg:tracking-[0.24em]
                "
              >
                London based · Working worldwide
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[950px]
                text-[clamp(2.75rem,12vw,3.35rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.06em]
                text-shams-text

                sm:text-[clamp(3rem,10vw,4rem)]

                md:text-[clamp(4rem,8vw,5.5rem)]

                lg:text-[clamp(3.2rem,5.25vw,6.4rem)]
                lg:leading-[0.88]
                lg:tracking-[-0.065em]
              "
            >
              {/* Line 1 */}
              <span className="block lg:whitespace-nowrap">
                Digital products,
              </span>

              {/* Line 2 */}
              <span className="block lg:whitespace-nowrap">
                designed in London
              </span>

              {/* Line 3 */}
              <span
                className="
                  block
                  text-shams-orange
                  lg:whitespace-nowrap
                "
              >
                built for the world.
              </span>
            </motion.h1>

            {/* Bottom Content */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mt-7
                flex max-w-[900px]
                flex-col gap-5

                md:mt-8
                md:gap-6

                lg:mt-8

                xl:flex-row
                xl:items-end
                xl:justify-between
              "
            >
              {/* Description */}
              <p
                className="
                  max-w-[510px]
                  text-[13px]
                  leading-6
                  text-shams-muted

                  sm:text-[14px]
                  sm:leading-7

                  lg:text-[15px]
                "
              >
                We design and develop high-performance websites, web
                applications and digital products using modern technologies.
              </p>

              {/* Buttons */}
              <div className="flex shrink-0 flex-wrap gap-2.5 sm:gap-3">
                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    bg-shams-orange
                    px-5 py-2.5
                    text-[12px] font-medium
                    text-black
                    transition-all duration-300

                    hover:-translate-y-0.5
                    hover:bg-shams-glow
                    hover:shadow-[0_10px_35px_rgba(255,106,0,0.25)]

                    sm:px-6
                    sm:py-3
                    sm:text-sm
                  "
                >
                  Start a Project
                </Link>

                <Link
                  href="/work"
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    border border-white/15
                    px-5 py-2.5
                    text-[12px]
                    text-shams-text
                    transition-all duration-300

                    hover:-translate-y-0.5
                    hover:border-white/35
                    hover:bg-white/[0.04]

                    sm:px-6
                    sm:py-3
                    sm:text-sm
                  "
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>

          {/* =========================
              SOLAR OBJECT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
            className="
              relative hidden
              aspect-square
              w-full
              max-w-[430px]
              items-center justify-center
              justify-self-end
              lg:flex
            "
          >
            {/* Outer Circle */}
            <div
              className="
                absolute
                h-[92%] w-[92%]
                rounded-full
                border border-white/[0.055]
              "
            />

            {/* Middle Orbit */}
            <div
              className="
                absolute
                h-[72%] w-[72%]
                rounded-full
                border border-shams-orange/[0.12]
              "
            />

            {/* Inner Orbit */}
            <div
              className="
                absolute
                h-[53%] w-[53%]
                rounded-full
                border border-white/[0.05]
              "
            />

            {/* Solar Glow */}
            <div
              className="
                absolute
                h-[55%] w-[55%]
                rounded-full
                bg-shams-orange/20
                blur-[75px]
              "
            />

            {/* Sun */}
            <motion.div
              animate={{
                scale: [1, 1.025, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                h-[40%] w-[40%]
                rounded-full

                bg-[radial-gradient(circle_at_35%_30%,#FFB15C_0%,#FF7900_27%,#E64B00_55%,#8E2300_78%,#240700_100%)]

                shadow-[
                  0_0_45px_rgba(255,106,0,0.32),
                  0_0_100px_rgba(255,106,0,0.15)
                ]
              "
            >
              {/* Surface */}
              <div
                className="
                  absolute inset-[7%]
                  rounded-full
                  border border-white/[0.10]
                "
              />

              {/* Highlight */}
              <div
                className="
                  absolute
                  left-[28%] top-[22%]
                  h-[15%] w-[15%]
                  rounded-full
                  bg-white/15
                  blur-[8px]
                "
              />
            </motion.div>

            {/* Orbiting Dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 17,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[72%] w-[72%]
                rounded-full
              "
            >
              <span
                className="
                  absolute
                  left-1/2 top-[-4px]
                  h-2 w-2
                  -translate-x-1/2
                  rounded-full
                  bg-shams-glow
                  shadow-[0_0_18px_#FF6A00]
                "
              />
            </motion.div>

            {/* Technical Label */}
            <div
              className="
                absolute
                bottom-[5%]
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-white/25
              "
            >
              SHAMS / DIGITAL SYSTEM 01
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-0 left-0
          h-20 w-full
          bg-gradient-to-b
          from-transparent
          to-shams-background

          lg:h-24
        "
      />
    </section>
  );
}