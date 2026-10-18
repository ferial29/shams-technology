
"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const solarMarks = Array.from({ length: 48 }, (_, index) => index);

export default function ServicesHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-shams-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:80px_80px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[10%] h-[650px] w-[650px] rounded-full bg-[#ff6a00]/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-10 pt-32 md:px-10 md:pb-14 md:pt-40 lg:px-16">
        <div className="grid items-center gap-3 md:gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-4">
          <div className="relative z-10 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                What we do
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease }}
              className="text-[clamp(3.15rem,6.1vw,6.7rem)] font-medium leading-[0.92] tracking-[-0.065em] text-white"
            >
              Digital
              <br />
              experiences.
              <br />
              <span className="text-shams-orange">
                Built to perform.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-8 max-w-[510px] text-[15px] leading-7 text-white/65 md:text-[17px]"
            >
              We design and develop digital products that help ambitious
              businesses grow, connect with their customers, and move
              forward with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 md:gap-5"
            >
              <a
                href="#services-list"
                className="group inline-flex items-center gap-5 rounded-full bg-shams-orange px-6 py-3.5 text-[13px] font-semibold text-black transition-colors duration-300 hover:bg-white"
              >
                Explore services
                <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                Designed in London
              </span>
            </motion.div>
          </div>

          {/* SHAMS solar visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative mx-auto aspect-square w-full max-w-[490px]"
            role="img"
            aria-label="SHAMS solar eclipse with orange corona and digital orbital graphics"
          >
            <div className="absolute inset-[4%] rounded-full border border-white/[0.08]" />
            <div className="absolute inset-[12%] rounded-full border border-dashed border-white/[0.12]" />
            <div className="absolute inset-[22%] rounded-full border border-white/[0.06]" />

            <div className="absolute left-1/2 top-[3%] h-[94%] w-px bg-gradient-to-b from-transparent via-white/[0.09] to-transparent" />
            <div className="absolute left-[3%] top-1/2 h-px w-[94%] bg-gradient-to-r from-transparent via-white/[0.09] to-transparent" />

            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 100,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[7%] rounded-full"
            >
              {solarMarks.map((index) => (
                <span
                  key={index}
                  className="absolute left-1/2 top-1/2 h-[44%] w-px origin-bottom"
                  style={{
                    transform: `translate(-50%, -100%) rotate(${index * 7.5}deg)`,
                  }}
                >
                  <span
                    className={`absolute left-0 top-0 block w-px ${
                      index % 4 === 0
                        ? "h-3 bg-shams-orange/45"
                        : "h-1.5 bg-white/15"
                    }`}
                  />
                </span>
              ))}
            </motion.div>

            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[4%] rounded-full"
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-shams-orange shadow-[0_0_20px_rgba(255,106,0,0.9)]" />
              <span className="absolute bottom-[14%] right-[14%] h-1.5 w-1.5 rounded-full bg-white/60" />
            </motion.div>

            <motion.div
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[18%] rounded-full border border-shams-orange/[0.18]"
            />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -9, 0], rotate: [-2, 2, -2] }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[24%] flex items-center justify-center"
            >
              <div className="absolute -inset-[24%] rounded-full bg-shams-orange/[0.12] blur-[55px]" />

              <div
                className="absolute inset-[-10%] rounded-full blur-[18px]"
                style={{
                  background:
                    "conic-gradient(from 15deg, transparent, rgba(255,106,0,0.35), rgba(255,158,62,0.9), rgba(255,106,0,0.22), transparent, rgba(255,106,0,0.75), transparent)",
                }}
              />

              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #ff6a00, #ffb15c, #ff6a00, #59250b, #ff8a1e, #ffd09b, #ff6a00, #31170b, #ff6a00)",
                  boxShadow:
                    "0 0 25px rgba(255,106,0,0.4), 0 0 75px rgba(255,106,0,0.22), inset 0 0 25px rgba(255,210,140,0.4)",
                }}
              />

              <div className="absolute inset-[3%] rounded-full bg-[#ff8b28] blur-[5px]" />

              <div
                className="absolute inset-[7%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 28% 24%, #28201b 0%, #100d0b 35%, #060505 78%, #000000 100%)",
                  boxShadow:
                    "inset -15px -18px 35px rgba(0,0,0,0.95), inset 8px 8px 20px rgba(255,150,70,0.06), 0 0 14px rgba(0,0,0,0.9)",
                }}
              />

              <div className="absolute left-[22%] top-[17%] h-[23%] w-[30%] rotate-[-35deg] rounded-full bg-white/[0.035] blur-[20px]" />
              <div className="absolute -right-[4%] top-[30%] h-[22%] w-[12%] rounded-full bg-[#ff9b36]/65 blur-[16px]" />
            </motion.div>

            <div className="absolute left-0 top-[17%] border-l border-shams-orange/70 pl-3">
              <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-white/75">
                SHAMS / CORE
              </span>
              <span className="mt-1 block font-mono text-[10px] text-white/40">
                SYSTEM ACTIVE
              </span>
            </div>

            <div className="absolute bottom-[13%] right-0 border-r border-shams-orange/70 pr-3 text-right">
              <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-white/75">
                Digital energy
              </span>
              <span className="mt-1 block font-mono text-[10px] text-white/40">
                51°30&apos; N / LONDON
              </span>
            </div>

            <span className="absolute right-[4%] top-[18%] font-mono text-[10px] text-white/35">
              SHAMS / S
            </span>

            <span className="absolute bottom-[9%] left-[10%] font-mono text-[10px] text-shams-orange/70">
              ● LIVE
            </span>
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-end border-t border-white/[0.1] pt-5 md:mt-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
            Strategy · Design · Engineering
          </span>
        </div>
      </div>
    </section>
  );
}
