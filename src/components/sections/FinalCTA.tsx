"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080706]">
      {/* Top divider */}
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="h-px w-full bg-white/[0.08]" />
      </div>

      {/* Huge background SHAMS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-3vw]
          left-1/2
          -translate-x-1/2
          select-none
          whitespace-nowrap
          text-[clamp(8rem,22vw,22rem)]
          font-medium
          leading-none
          tracking-[-0.08em]
          text-white/[0.018]
        "
      >
        SHAMS
      </div>

      {/* Global ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-8%]
          top-[52%]
          h-[600px]
          w-[760px]
          rounded-full
          bg-shams-orange/[0.04]
          blur-[150px]
        "
      />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1440px]
          items-center
          gap-10
          px-6
          pb-20
          pt-12
          md:px-10
          lg:grid-cols-[1.08fr_0.92fr]
          lg:px-16
          lg:pb-24
          lg:pt-14
        "
      >
        {/* =====================================
            LEFT / COPY
        ====================================== */}

        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-shams-orange" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
              Have an idea?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[850px]
              text-[clamp(3.7rem,7.2vw,7.8rem)]
              font-medium
              leading-[0.84]
              tracking-[-0.065em]
              text-shams-text
            "
          >
            Let&apos;s build
            <br />

            <span className="text-white/25">
              something worth
            </span>

            <br />

            <span className="text-shams-orange">
              remembering.
            </span>
          </motion.h2>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              mt-9
              flex
              flex-col
              gap-7
              sm:flex-row
              sm:items-center
            "
          >
            <Link
              href="/contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-8
                rounded-full
                bg-shams-orange
                px-7
                py-4
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-[#ff7a1a]
              "
            >
              <span>Start a project</span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </Link>

            <span className="max-w-[280px] text-xs leading-6 text-white/35">
              Tell us what you&apos;re building.
              <br />
              We&apos;ll help shape what comes next.
            </span>
          </motion.div>
        </div>

        {/* =====================================
            MOBILE / SOLAR HORIZON
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            -mt-3
            h-[150px]
            w-full
            overflow-hidden
            lg:hidden
          "
        >
          {/* Ambient mobile glow */}

          <motion.div
            animate={{
              opacity: [0.35, 0.65, 0.35],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[25px]
              right-[-48px]
              h-[120px]
              w-[230px]
              rounded-[50%]
              bg-shams-orange/[0.11]
              blur-[45px]
            "
          />

          {/* Tracking point */}

          <motion.span
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[24%]
              top-[22px]
              h-1
              w-1
              rounded-full
              bg-shams-orange
              shadow-[0_0_14px_rgba(255,106,0,0.8)]
            "
          />

          {/* Mobile rising sun */}

          <div
            className="
              absolute
              bottom-[30px]
              right-[-18px]
              h-[92px]
              w-[170px]
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-[48px]
                h-[118px]
                w-[118px]
                -translate-x-1/2
                rounded-full
                bg-gradient-to-b
                from-[#ffb66f]
                via-shams-orange
                to-[#922900]
                shadow-[0_-18px_55px_rgba(255,106,0,0.28)]
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-[53px]
                h-[88px]
                w-[88px]
                -translate-x-1/2
                rounded-full
                bg-gradient-to-br
                from-white/[0.08]
                to-transparent
                blur-sm
              "
            />
          </div>

          {/* Mobile horizon */}

          <div
            className="
              absolute
              bottom-[29px]
              left-0
              right-[-10%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-shams-orange/80
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-[27px]
              left-[35%]
              right-[-5%]
              h-[3px]
              bg-shams-orange/15
              blur-md
            "
          />

          {/* Mobile horizon labels */}

          <div
            className="
              absolute
              bottom-[8px]
              left-0
              flex
              items-center
              gap-2
            "
          >
            <span className="h-px w-5 bg-shams-orange/50" />

            <span className="text-[7px] uppercase tracking-[0.24em] text-white/20">
              New ideas rise here
            </span>
          </div>

          <span
            className="
              absolute
              bottom-[8px]
              right-0
              text-[7px]
              uppercase
              tracking-[0.22em]
              text-white/15
            "
          >
            London · Worldwide
          </span>
        </motion.div>

        {/* =====================================
            RIGHT / SOLAR HORIZON — DESKTOP
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            hidden
            h-[450px]
            w-full
            max-w-[560px]
            lg:-translate-y-8
            lg:block
          "
        >
          {/* Coordinates */}

          <div
            className="
              absolute
              right-3
              top-7
              flex
              items-center
              gap-3
            "
          >
            <span className="text-[8px] uppercase tracking-[0.28em] text-white/20">
              51.5072° N
            </span>

            <span className="h-1 w-1 rounded-full bg-shams-orange/70" />

            <span className="text-[8px] uppercase tracking-[0.28em] text-white/20">
              London
            </span>
          </div>

          {/* Vertical guide */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-[14%]
              h-[60%]
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-white/[0.07]
              to-transparent
            "
          />

          {/* Tracking point */}

          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-[20%]
              h-1.5
              w-1.5
              -translate-x-1/2
              rounded-full
              bg-shams-orange
              shadow-[0_0_20px_rgba(255,106,0,0.9)]
            "
          />

          {/* Wide sunrise glow */}

          <motion.div
            animate={{
              opacity: [0.45, 0.75, 0.45],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[68px]
              left-1/2
              h-[210px]
              w-[440px]
              -translate-x-1/2
              rounded-[50%]
              bg-shams-orange/[0.12]
              blur-[85px]
            "
          />

          {/* Secondary horizon glow */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[76px]
              left-1/2
              h-[80px]
              w-[90%]
              -translate-x-1/2
              bg-shams-orange/[0.035]
              blur-[50px]
            "
          />

          {/* Rising sun window */}

          <motion.div
            initial={{
              y: 40,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.3,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-[79px]
              left-1/2
              h-[175px]
              w-[380px]
              -translate-x-1/2
              overflow-hidden
            "
          >
            {/* Sun */}

            <div
              className="
                absolute
                left-1/2
                top-[82px]
                h-[230px]
                w-[230px]
                -translate-x-1/2
                rounded-full
                bg-gradient-to-b
                from-[#ffb66f]
                via-shams-orange
                to-[#922900]
                shadow-[0_-25px_85px_rgba(255,106,0,0.3)]
              "
            />

            {/* Sun highlight */}

            <div
              className="
                absolute
                left-1/2
                top-[92px]
                h-[175px]
                w-[175px]
                -translate-x-1/2
                rounded-full
                bg-gradient-to-br
                from-white/[0.09]
                to-transparent
                blur-sm
              "
            />
          </motion.div>

          {/* Horizon */}

          <div
            className="
              absolute
              bottom-[78px]
              left-[-4%]
              right-[-4%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-shams-orange/90
              to-transparent
            "
          />

          {/* Horizon bloom */}

          <div
            className="
              absolute
              bottom-[76px]
              left-[5%]
              right-[5%]
              h-[3px]
              bg-shams-orange/20
              blur-md
            "
          />

          {/* Dark ground */}

          <div
            className="
              absolute
              bottom-0
              left-[-5%]
              right-[-5%]
              h-[78px]
              bg-gradient-to-b
              from-[#080706]
              to-[#050403]
            "
          />

          {/* Left horizon label */}

          <div
            className="
              absolute
              bottom-[42px]
              left-0
              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-shams-orange/60" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              New ideas rise here
            </span>
          </div>

          {/* Right horizon label */}

          <span
            className="
              absolute
              bottom-[42px]
              right-0
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            London · Worldwide
          </span>
        </motion.div>
      </div>

      {/* =====================================
          BOTTOM META
      ====================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-white/[0.08]
            py-6
          "
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
            Digital products · Designed to move
          </span>

          <span className="hidden text-[9px] uppercase tracking-[0.25em] text-white/20 sm:block">
            SHAMS / London
          </span>
        </div>
      </div>
    </section>
  );
}