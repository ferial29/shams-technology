"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050403] text-white">
      {/* Orange transition line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute left-0 top-0 h-px w-full origin-left
          bg-gradient-to-r
          from-transparent via-shams-orange/70 to-transparent
        "
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-8
            gap-y-10
            py-10
            md:grid-cols-2
            md:gap-12
            md:py-14
            lg:grid-cols-[1.5fr_0.65fr_0.65fr]
            lg:gap-16
            lg:py-16
          "
        >
          {/* BRAND */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <span
                className="
                  h-3 w-3
                  rounded-full
                  bg-shams-orange
                  shadow-[0_0_18px_rgba(255,106,0,0.35)]
                  transition-all
                  duration-500
                  group-hover:shadow-[0_0_30px_rgba(255,106,0,0.65)]
                "
              />

              <span
                className="
                  text-[21px]
                  font-medium
                  tracking-[-0.04em]
                  text-white
                  md:text-[22px]
                "
              >
                SHAMS
              </span>
            </Link>

            <p
              className="
                mt-5
                max-w-[400px]
                text-[13px]
                leading-6
                text-white/55
                md:mt-6
                md:text-[14px]
                md:leading-7
              "
            >
              A London-based digital product studio building websites,
              applications and digital products for ambitious companies
              worldwide.
            </p>

            {/* Status */}
            <div className="mt-6 flex items-center gap-3 md:mt-8">
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-shams-orange
                    opacity-30
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-shams-orange
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-white/45
                  md:text-[10px]
                  md:tracking-[0.24em]
                "
              >
                Available for selected projects
              </span>
            </div>
          </div>

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <div>
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/40
                md:text-[11px]
                md:tracking-[0.26em]
              "
            >
              Navigate
            </span>

            <nav className="mt-4 flex flex-col gap-1 md:mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    py-1
                    text-[14px]
                    text-white/65
                    transition-colors
                    duration-300
                    hover:text-white
                    md:py-1.5
                    md:text-[15px]
                  "
                >
                  <span>{item.label}</span>

                  <span
                    className="
                      -translate-x-1
                      text-sm
                      text-shams-orange
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* =====================================================
              SOCIAL
          ====================================================== */}

          <div>
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/40
                md:text-[11px]
                md:tracking-[0.26em]
              "
            >
              Connect
            </span>

            <div className="mt-4 flex flex-col gap-1 md:mt-6">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    py-1
                    text-[14px]
                    text-white/65
                    transition-colors
                    duration-300
                    hover:text-white
                    md:py-1.5
                    md:text-[15px]
                  "
                >
                  <span>{item.label}</span>

                  <span
                    className="
                      text-xs
                      text-white/30
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-shams-orange
                    "
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            LOCATION STRIP
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            border-y
            border-white/[0.08]
            md:grid-cols-3
          "
        >
          {/* Based */}
          <div
            className="
              border-r
              border-white/[0.08]
              py-5
              pr-4
              md:pr-6
            "
          >
            <span
              className="
                block
                text-[9px]
                uppercase
                tracking-[0.24em]
                text-white/35
                md:text-[10px]
                md:tracking-[0.26em]
              "
            >
              Based
            </span>

            <span
              className="
                mt-2
                block
                text-[12px]
                leading-5
                text-white/65
                md:mt-2.5
                md:text-[13px]
              "
            >
              London, United Kingdom
            </span>
          </div>

          {/* Working */}
          <div
            className="
              py-5
              pl-4
              md:border-r
              md:border-white/[0.08]
              md:px-6
            "
          >
            <span
              className="
                block
                text-[9px]
                uppercase
                tracking-[0.24em]
                text-white/35
                md:text-[10px]
                md:tracking-[0.26em]
              "
            >
              Working
            </span>

            <span
              className="
                mt-2
                block
                text-[12px]
                text-white/65
                md:mt-2.5
                md:text-[13px]
              "
            >
              Worldwide
            </span>
          </div>

          {/* Coordinates */}
          <div
            className="
              col-span-2
              border-t
              border-white/[0.08]
              py-4
              md:col-span-1
              md:border-t-0
              md:py-5
              md:pl-6
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                md:block
              "
            >
              <span
                className="
                  block
                  text-[9px]
                  uppercase
                  tracking-[0.24em]
                  text-white/35
                  md:text-[10px]
                  md:tracking-[0.26em]
                "
              >
                Coordinates
              </span>

              <span
                className="
                  block
                  whitespace-nowrap
                  text-[11px]
                  text-white/65
                  md:mt-2.5
                  md:text-[13px]
                "
              >
                51.5072° N · 0.1276° W
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            BIG SHAMS SIGNATURE
        ====================================================== */}

        <div className="relative overflow-hidden py-7 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end justify-between"
          >
            <span
              className="
                block
                text-[clamp(4rem,20vw,6rem)]
                font-medium
                leading-[0.8]
                tracking-[-0.075em]
                text-white/[0.10]
                transition-colors
                duration-700
                hover:text-white/[0.16]
                md:text-[clamp(4.5rem,10vw,9rem)]
              "
            >
              SHAMS
            </span>

            {/* Mini signature */}
            <div className="mb-1 hidden items-center gap-3 md:flex">
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.26em]
                  text-white/30
                "
              >
                Designed in London
              </span>

              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 12px rgba(255,106,0,0.20)",
                    "0 0 24px rgba(255,106,0,0.50)",
                    "0 0 12px rgba(255,106,0,0.20)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-3 w-3 rounded-full bg-shams-orange"
              />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            LEGAL
        ====================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            border-t
            border-white/[0.08]
            py-5
            text-[9px]
            uppercase
            tracking-[0.14em]
            text-white/35
            md:text-[10px]
            md:tracking-[0.18em]
          "
        >
          <span className="whitespace-nowrap">
            © {new Date().getFullYear()} SHAMS
            <span className="hidden sm:inline"> Technology</span>
          </span>

          <div className="flex shrink-0 gap-4 md:gap-6">
            <Link
              href="/privacy"
              className="
                transition-colors
                duration-300
                hover:text-white/70
              "
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="
                transition-colors
                duration-300
                hover:text-white/70
              "
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}