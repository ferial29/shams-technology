"use client";

import { motion } from "framer-motion";

const technologies = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "AI",
  "SANITY",
  "VERCEL",
];

/* =========================================
   LONDON VISUAL
========================================= */

function LondonVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        right-7
        top-7
        hidden
        h-[125px]
        w-[155px]
        md:block
      "
    >
      {/* Technical grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.055]
          transition-opacity
          duration-500
          group-hover:opacity-[0.11]

          [background-image:linear-gradient(to_right,#ff6a00_1px,transparent_1px),linear-gradient(to_bottom,#ff6a00_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      {/* Crosshair */}
      <div className="absolute left-1/2 top-[10%] h-[80%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />

      <div className="absolute left-[12%] top-1/2 h-px w-[76%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Outer radar */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[78px]
          w-[78px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-white/[0.07]
          transition-all
          duration-700
          group-hover:scale-110
          group-hover:border-shams-orange/20
        "
      />

      {/* Inner radar */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[42px]
          w-[42px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-shams-orange/[0.14]
          transition-all
          duration-700
          group-hover:scale-90
          group-hover:border-shams-orange/30
        "
      />

      {/* London point */}
      <motion.span
        animate={{
          boxShadow: [
            "0 0 0 rgba(255,106,0,0)",
            "0 0 18px rgba(255,106,0,0.65)",
            "0 0 0 rgba(255,106,0,0)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-shams-orange
        "
      />

      {/* Location line */}
      <div className="absolute bottom-[15px] left-1/2 h-[18px] w-px bg-shams-orange/25" />

      {/* Coordinates */}
      <span
        className="
          absolute
          bottom-[-6px]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[7px]
          uppercase
          tracking-[0.2em]
          text-white/25
        "
      >
        51.5072° N · 0.1276° W
      </span>
    </div>
  );
}

/* =========================================
   WORLDWIDE VISUAL
========================================= */

function WorldwideVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        right-7
        top-7
        hidden
        h-[125px]
        w-[170px]
        md:block
      "
    >
      {/* Ambient glow */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[120px]
          w-[120px]
          rounded-full
          bg-shams-orange/[0.025]
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-shams-orange/[0.07]
        "
      />

      {/* Connections */}
      <div className="absolute left-[24px] top-[31px] h-px w-[55px] rotate-[13deg] origin-left bg-white/[0.08] transition-colors duration-500 group-hover:bg-shams-orange/20" />

      <div className="absolute left-[77px] top-[44px] h-px w-[54px] rotate-[-17deg] origin-left bg-white/[0.08] transition-colors duration-500 group-hover:bg-shams-orange/20" />

      <div className="absolute left-[44px] top-[79px] h-px w-[72px] rotate-[-29deg] origin-left bg-white/[0.07] transition-colors duration-500 group-hover:bg-shams-orange/15" />

      <div className="absolute left-[28px] top-[34px] h-[49px] w-px rotate-[-20deg] origin-top bg-white/[0.07] transition-colors duration-500 group-hover:bg-shams-orange/15" />

      <div className="absolute left-[82px] top-[46px] h-[49px] w-px rotate-[34deg] origin-top bg-white/[0.07] transition-colors duration-500 group-hover:bg-shams-orange/15" />

      {/* London origin */}
      <motion.span
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[20px]
          top-[27px]
          h-2
          w-2
          rounded-full
          bg-shams-orange
          shadow-[0_0_15px_rgba(255,106,0,0.6)]
        "
      />

      {/* Global nodes */}
      <span className="absolute left-[75px] top-[40px] h-1.5 w-1.5 rounded-full bg-white/30 transition-all duration-500 group-hover:bg-shams-orange/70" />

      <span className="absolute right-[34px] top-[22px] h-1.5 w-1.5 rounded-full bg-white/25 transition-all duration-500 group-hover:bg-white/50" />

      <span className="absolute left-[39px] bottom-[35px] h-1.5 w-1.5 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-white/45" />

      <span className="absolute right-[43px] bottom-[25px] h-1.5 w-1.5 rounded-full bg-shams-orange/45 transition-all duration-500 group-hover:bg-shams-orange" />

      <span className="absolute right-[12px] top-[56px] h-1 w-1 rounded-full bg-white/20" />

      {/* Moving signal */}
      <motion.span
        animate={{
          x: [0, 50, 102],
          y: [0, 12, -4],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
        className="
          absolute
          left-[26px]
          top-[30px]
          h-1
          w-1
          rounded-full
          bg-shams-orange
          shadow-[0_0_10px_rgba(255,106,0,0.8)]
        "
      />

      {/* Label */}
      <div
        className="
          absolute
          bottom-[-5px]
          right-0
          flex
          items-center
          gap-2
        "
      >
        <span className="h-px w-5 bg-shams-orange/35" />

        <span className="text-[7px] uppercase tracking-[0.22em] text-white/25">
          Connected worldwide
        </span>
      </div>
    </div>
  );
}

/* =========================================
   TRUST SECTION
========================================= */

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-shams-background">
      {/* Top border */}
      <div className="absolute left-0 top-0 h-px w-full bg-white/[0.08]" />

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          pb-8
          pt-16
          md:px-10
          lg:px-16
          lg:pb-10
          lg:pt-20
        "
      >
        {/* =====================================
            SMALL LABEL
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-shams-orange" />

          <span className="text-[10px] uppercase tracking-[0.28em] text-shams-muted">
            Built for ambitious companies
          </span>
        </motion.div>

        {/* =====================================
            MAIN TRUST CONTENT
        ====================================== */}

        <div className="grid border-y border-white/[0.08] lg:grid-cols-2">
          {/* =====================================
              LONDON
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="
              group
              relative
              overflow-hidden
              border-b
              border-white/[0.08]
              py-10
              transition-colors
              duration-500
              hover:bg-white/[0.015]
              lg:border-b-0
              lg:border-r
              lg:py-12
              lg:pr-16
            "
          >
            {/* Warm corner glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-56
                w-56
                rounded-full
                bg-shams-orange/[0.025]
                opacity-0
                blur-3xl
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
            />

            <LondonVisual />

            <div className="relative z-10">
              <span className="mb-6 block text-[10px] uppercase tracking-[0.25em] text-shams-orange">
                01 / London
              </span>

              <h2
                className="
                  max-w-[520px]
                  text-[clamp(2.3rem,4vw,4.8rem)]
                  font-medium
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-shams-text
                "
              >
                London based.
                <br />

                <span className="text-white/35">
                  Global by design.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-shams-muted">
                Strategy and product thinking from London, with the flexibility
                to collaborate with ambitious teams anywhere in the world.
              </p>

              {/* London micro meta */}
              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-6 bg-shams-orange/50" />

                <span className="text-[8px] uppercase tracking-[0.23em] text-white/25">
                  51.5072° N · London
                </span>
              </div>
            </div>

            {/* Hover line */}
            <div
              className="
                absolute
                bottom-0
                left-0
                z-20
                h-px
                w-0
                bg-shams-orange
                transition-all
                duration-700
                group-hover:w-full
              "
            />
          </motion.div>

          {/* =====================================
              WORLDWIDE
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              group
              relative
              overflow-hidden
              py-10
              transition-colors
              duration-500
              hover:bg-white/[0.015]
              lg:py-12
              lg:pl-16
            "
          >
            <WorldwideVisual />

            <div className="relative z-10">
              <span className="mb-6 block text-[10px] uppercase tracking-[0.25em] text-shams-orange">
                02 / Worldwide
              </span>

              <h2
                className="
                  max-w-[540px]
                  text-[clamp(2.3rem,4vw,4.8rem)]
                  font-medium
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-shams-text
                "
              >
                Built with modern
                <br />

                <span className="text-white/35">
                  technology.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-shams-muted">
                We combine product design, engineering and modern technologies
                to build fast, scalable and high-quality digital experiences.
              </p>

              {/* Worldwide micro meta */}
              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-6 bg-shams-orange/50" />

                <span className="text-[8px] uppercase tracking-[0.23em] text-white/25">
                  London → Worldwide
                </span>
              </div>
            </div>

            {/* Hover line */}
            <div
              className="
                absolute
                bottom-0
                left-0
                z-20
                h-px
                w-0
                bg-shams-orange
                transition-all
                duration-700
                group-hover:w-full
              "
            />
          </motion.div>
        </div>

        {/* =====================================
            TECHNOLOGY STRIP
        ====================================== */}

        <div className="relative mt-8 overflow-hidden md:mt-10">
          {/* Fade left */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-7
              bg-gradient-to-r
              from-shams-background
              to-transparent
              md:w-16
            "
          />

          {/* Fade right */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-7
              bg-gradient-to-l
              from-shams-background
              to-transparent
              md:w-16
            "
          />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center"
          >
            {[...technologies, ...technologies].map(
              (technology, index) => (
                <div
                  key={`${technology}-${index}`}
                  className="flex shrink-0 items-center"
                >
                  <span
                    className="
                      whitespace-nowrap
                      px-5
                      text-[10px]
                      font-medium
                      tracking-[0.18em]
                      text-white/45
                      transition-colors
                      duration-300
                      hover:text-shams-orange
                      sm:px-6
                      sm:text-[11px]
                      sm:tracking-[0.2em]
                      md:px-12
                      md:text-xs
                      md:tracking-[0.22em]
                    "
                  >
                    {technology}
                  </span>

                  <span className="h-1 w-1 shrink-0 rounded-full bg-shams-orange/60" />
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* =====================================
            BOTTOM STATEMENT
        ====================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-10
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.08]
            pt-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-sm text-shams-muted">
            From early-stage MVPs to scalable digital products.
          </p>

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            SHAMS / London · Worldwide
          </span>
        </motion.div>
      </div>
    </section>
  );
}