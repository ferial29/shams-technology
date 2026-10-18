
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      dir="ltr"
      className="absolute left-0 top-0 z-50 w-full text-left"
    >
      <div
        className="
          relative z-50 mx-auto flex max-w-[1440px]
          items-center justify-between
          px-6 py-6
          md:px-10
          lg:px-16
        "
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="
            text-[1.35rem] font-semibold
            tracking-[-0.055em]
            text-shams-text
          "
        >
          SHAMS<span className="text-shams-orange">.</span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                text-sm transition-colors duration-300
                hover:text-shams-text
                ${
                  pathname === item.href
                    ? "text-shams-orange"
                    : "text-shams-muted"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="
            hidden rounded-full border border-white/15
            px-5 py-2.5
            text-sm text-shams-text
            transition-all duration-300
            hover:border-shams-orange
            hover:bg-shams-orange
            hover:text-black
            md:inline-flex
          "
        >
          Start a project
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            relative z-50 flex h-11 w-11
            items-center justify-center
            rounded-full border border-white/15
            text-white transition-colors
            hover:border-shams-orange
            md:hidden
          "
        >
          <span className="relative block h-5 w-5">
            <motion.span
              animate={
                isOpen
                  ? { rotate: 45, y: 0 }
                  : { rotate: 0, y: -5 }
              }
              transition={{ duration: 0.25 }}
              className="
                absolute left-0 top-[9px]
                h-[1.5px] w-5 bg-white
              "
            />

            <motion.span
              animate={
                isOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              transition={{ duration: 0.2 }}
              className="
                absolute left-0 top-[9px]
                h-[1.5px] w-5 bg-white
              "
            />

            <motion.span
              animate={
                isOpen
                  ? { rotate: -45, y: 0 }
                  : { rotate: 0, y: 5 }
              }
              transition={{ duration: 0.25 }}
              className="
                absolute left-0 top-[9px]
                h-[1.5px] w-5 bg-white
              "
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute left-0 top-0 z-40
              w-full border-b border-white/10
              bg-[#0b0908]/[0.98]
              px-6 pb-10 pt-28
              shadow-[0_30px_80px_rgba(0,0,0,0.5)]
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="mx-auto flex max-w-[1440px] flex-col">
              <span
                className="
                  mb-7 font-mono text-[10px]
                  uppercase tracking-[0.25em]
                  text-white/35
                "
              >
                Explore SHAMS
              </span>

              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      flex items-center justify-between
                      border-b border-white/10
                      py-4 text-[clamp(1.8rem,7vw,2.5rem)]
                      font-medium tracking-[-0.05em]
                      transition-colors
                      hover:text-shams-orange
                      ${
                        pathname === item.href
                          ? "text-shams-orange"
                          : "text-white"
                      }
                    `}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="text-lg text-shams-orange"
                    >
                      ↗
                    </span>
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="
                  mt-9 inline-flex min-h-[52px]
                  items-center justify-between
                  rounded-full bg-shams-orange
                  px-6 py-4 text-sm font-semibold
                  text-black transition-colors
                  hover:bg-[#ff8a35]
                "
              >
                Start a project
                <span aria-hidden="true" className="text-xl">
                  ↗
                </span>
              </Link>

              <span
                className="
                  mt-9 font-mono text-[10px]
                  uppercase tracking-[0.16em]
                  text-white/30
                "
              >
                Designed in London · Built for everywhere
              </span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
