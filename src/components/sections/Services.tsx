"use client";

import { motion } from "framer-motion";

type VisualProps = {
  type: string;
};

/* =========================================
   MICRO VISUALS
========================================= */

function ServiceVisual({ type }: VisualProps) {
  if (type === "web") {
    return (
      <div className="relative h-[82px] w-[120px]">
        <div
          className="
            absolute inset-0
            rounded-[4px]
            border border-white/[0.08]
            bg-black/10
            transition-all duration-500
            group-hover:border-shams-orange/25
          "
        >
          <div className="flex h-5 items-center gap-1 border-b border-white/[0.06] px-2">
            <span className="h-1 w-1 rounded-full bg-shams-orange/70" />
            <span className="h-1 w-1 rounded-full bg-white/15" />
            <span className="h-1 w-1 rounded-full bg-white/15" />
          </div>

          <div className="space-y-2 p-3">
            <div className="h-px w-[55%] bg-white/20" />
            <div className="h-px w-[80%] bg-white/10" />
            <div className="h-px w-[65%] bg-white/10" />

            <div className="mt-3 flex gap-1">
              <div className="h-3 flex-1 border border-white/[0.05]" />
              <div className="h-3 flex-1 border border-white/[0.05]" />
            </div>
          </div>
        </div>

        <motion.span
          className="
            absolute
            -right-1
            top-[28px]
            h-1.5
            w-1.5
            rounded-full
            bg-shams-orange
            opacity-40
            shadow-[0_0_10px_rgba(255,106,0,0.5)]
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div className="relative flex h-[82px] w-[120px] items-center justify-center">
        <div
          className="
            relative
            h-[78px]
            w-[40px]
            rounded-[9px]
            border border-white/[0.14]
            bg-black/10
            transition-all duration-500
            group-hover:-translate-y-1
            group-hover:border-shams-orange/40
          "
        >
          <div className="absolute left-1/2 top-1.5 h-[2px] w-3 -translate-x-1/2 rounded-full bg-white/15" />

          <div className="absolute left-2 right-2 top-5 space-y-1.5">
            <div className="h-2 rounded-[2px] bg-shams-orange/20 transition-colors duration-500 group-hover:bg-shams-orange/25" />
            <div className="h-px bg-white/15" />
            <div className="h-px w-[70%] bg-white/10" />
          </div>

          <div className="absolute bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full border border-white/15" />
        </div>

        <div
          className="
            absolute
            right-[20px]
            top-[20px]
            h-5
            w-5
            rounded-full
            border border-shams-orange/25
            transition-all duration-500
            group-hover:scale-125
            group-hover:border-shams-orange/35
          "
        />

        <div className="absolute right-[28px] top-[28px] h-1 w-1 rounded-full bg-shams-orange/70" />
      </div>
    );
  }

  if (type === "saas") {
    return (
      <div className="relative h-[82px] w-[120px]">
        {/* Connectors */}
        <div className="absolute left-[30px] top-[27px] h-px w-[58px] rotate-[12deg] bg-white/[0.13] transition-colors duration-500 group-hover:bg-shams-orange/35" />

        <div className="absolute left-[31px] top-[28px] h-[35px] w-px rotate-[-38deg] bg-white/[0.13] transition-colors duration-500 group-hover:bg-shams-orange/35" />

        <div className="absolute left-[83px] top-[30px] h-[30px] w-px rotate-[38deg] bg-white/[0.13] transition-colors duration-500 group-hover:bg-shams-orange/35" />

        {/* Modules */}
        <div className="absolute left-[12px] top-[16px] h-7 w-9 rounded-[3px] border border-white/[0.13] bg-[#080706] transition-all duration-500 group-hover:border-shams-orange/20">
          <div className="m-2 h-px bg-white/15" />
        </div>

        <div className="absolute right-[10px] top-[22px] h-7 w-9 rounded-[3px] border border-white/[0.13] bg-[#080706] transition-all duration-500 group-hover:border-shams-orange/20">
          <div className="m-2 h-px bg-white/15" />
        </div>

        <div
          className="
            absolute
            bottom-[4px]
            left-1/2
            h-7
            w-9
            -translate-x-1/2
            rounded-[3px]
            border border-white/[0.08]
            bg-[#080706]
            transition-all duration-500
            group-hover:border-shams-orange/30
          "
        >
          <div className="m-2 h-px bg-shams-orange/40" />
        </div>

        <span className="absolute left-[56px] top-[28px] h-1.5 w-1.5 rounded-full bg-shams-orange/80 shadow-[0_0_10px_rgba(255,106,0,0.3)]" />
      </div>
    );
  }

  if (type === "ai") {
    const dots = [
      ["18%", "24%"],
      ["48%", "15%"],
      ["78%", "28%"],
      ["28%", "57%"],
      ["57%", "48%"],
      ["85%", "68%"],
      ["47%", "82%"],
    ];

    return (
      <div className="relative h-[82px] w-[120px]">
        {/* Network lines */}
        <div className="absolute left-[25px] top-[27px] h-px w-[70px] rotate-[5deg] bg-white/[0.11]" />
        <div className="absolute left-[32px] top-[47px] h-px w-[58px] -rotate-[20deg] bg-white/[0.11]" />
        <div className="absolute left-[48px] top-[20px] h-[52px] w-px rotate-[18deg] bg-white/[0.11]" />

        {dots.map(([left, top], index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.25, 0.8, 0.25],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 2.5 + index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            className={`
              absolute
              h-1.5
              w-1.5
              rounded-full
              ${
                index === 4
                  ? "bg-shams-orange shadow-[0_0_12px_rgba(255,106,0,0.7)]"
                  : "bg-white/45"
              }
            `}
            style={{
              left,
              top,
            }}
          />
        ))}

        <div
          className="
            absolute
            left-[50%]
            top-[50%]
            h-12
            w-12
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-shams-orange/[0.025]
            blur-xl
            transition-all duration-500
            group-hover:bg-shams-orange/[0.08]
          "
        />
      </div>
    );
  }

  /* Product Strategy */

  return (
    <div className="relative h-[80px] w-full max-w-[260px]">
      {/* Main roadmap */}
      <div
        className="
          absolute
          left-0
          top-1/2
          h-px
          w-full
          -translate-y-1/2
          bg-gradient-to-r
          from-white/[0.05]
          via-white/[0.14]
          to-shams-orange/35
        "
      />

      {/* Nodes */}
      <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-white/20 bg-[#080706]" />

      <div className="absolute left-[32%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-white/25 bg-[#080706]" />

      <div className="absolute left-[65%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-shams-orange/40 bg-[#080706]" />

      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          boxShadow: [
            "0 0 0 rgba(255,106,0,0)",
            "0 0 14px rgba(255,106,0,0.65)",
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
          right-0
          top-1/2
          h-2
          w-2
          -translate-y-1/2
          rounded-full
          bg-shams-orange
        "
      />

      {/* Labels */}
      <span className="absolute left-0 top-[52px] text-[7px] uppercase tracking-[0.2em] text-white/20">
        Idea
      </span>

      <span className="absolute left-[29%] top-[18px] text-[7px] uppercase tracking-[0.2em] text-white/20">
        Define
      </span>

      <span className="absolute left-[61%] top-[52px] text-[7px] uppercase tracking-[0.2em] text-white/20">
        Build
      </span>

      <span className="absolute right-0 top-[18px] text-[7px] uppercase tracking-[0.2em] text-shams-orange/60">
        Grow
      </span>
    </div>
  );
}

/* =========================================
   SERVICES
========================================= */

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built for speed, scalability and growth.",
    technologies: ["NEXT.JS", "REACT", "TYPESCRIPT"],
    visual: "web",
  },
  {
    number: "02",
    title: "Mobile Applications",
    description:
      "Thoughtful mobile experiences designed around real users and measurable outcomes.",
    technologies: ["IOS", "ANDROID", "CROSS-PLATFORM"],
    visual: "mobile",
  },
  {
    number: "03",
    title: "SaaS Products",
    description:
      "From early MVPs to scalable platforms, we design and engineer digital products built to evolve.",
    technologies: ["MVP", "PLATFORMS", "PRODUCT"],
    visual: "saas",
  },
  {
    number: "04",
    title: "AI Solutions",
    description:
      "Practical AI products and intelligent automation designed around real business needs.",
    technologies: ["AI", "AUTOMATION", "INTEGRATION"],
    visual: "ai",
  },
  {
    number: "05",
    title: "Product Strategy",
    description:
      "Turning ambitious ideas into clear product direction, thoughtful experiences and actionable roadmaps.",
    technologies: ["STRATEGY", "UX", "DISCOVERY"],
    visual: "strategy",
    featured: true,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-shams-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-6 md:px-10 md:pt-8 lg:px-16 lg:pb-20 lg:pt-8">
        {/* SECTION HEADER */}

        <div className="mb-12 flex items-center justify-between border-b border-white/[0.08] pb-7">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-shams-orange" />

            <span className="text-[10px] uppercase tracking-[0.28em] text-shams-muted">
              What we do
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.18em] text-white/25 sm:text-[10px] sm:tracking-[0.25em]">
            04 / Capabilities
          </span>
        </div>

        {/* INTRO */}

        <div className="mb-12 grid gap-7 md:mb-14 lg:grid-cols-2 lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="
              max-w-[620px]
              text-[2.8rem]
              font-medium
              leading-[0.9]
              tracking-[-0.055em]
              text-shams-text

              sm:text-[3.2rem]

              md:text-[clamp(3.2rem,6vw,6.8rem)]
              md:leading-[0.88]
              md:tracking-[-0.06em]
            "
          >
            What we
            <br />
            <span className="text-white/25">build.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md lg:ml-auto lg:pb-2"
          >
            <p className="text-[13px] leading-6 text-shams-muted sm:text-sm sm:leading-7">
              From the first idea to a product in people&apos;s hands, we
              combine strategy, design and engineering to create digital
              experiences built for real-world growth.
            </p>

            <div className="mt-5 flex items-center gap-3 sm:mt-6">
              <span className="h-px w-8 bg-shams-orange" />

              <span className="text-[8px] uppercase tracking-[0.22em] text-white/35 sm:text-[9px] sm:tracking-[0.25em]">
                London / Worldwide
              </span>
            </div>
          </motion.div>
        </div>

        {/* SERVICES GRID */}

        <div className="grid border-l border-t border-white/[0.08] lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className={`
                group
                relative
                overflow-hidden
                border-b
                border-r
                border-white/[0.08]
                transition-colors
                duration-500
                hover:bg-white/[0.025]

                ${service.featured ? "lg:col-span-2" : ""}
              `}
            >
              {/* Hover orange bottom line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-shams-orange
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* Hover glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-shams-orange/[0.045]
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div
                className={`
                  relative
                  p-6
                  sm:p-7
                  md:p-9
                  lg:p-10

                  ${
                    service.featured
                      ? "lg:grid lg:grid-cols-[100px_1fr_0.8fr_260px] lg:items-center lg:gap-8"
                      : ""
                  }
                `}
              >
                {/* MOBILE VISUAL
                    Only normal cards.
                    Hidden from md upward because desktop visual takes over.
                */}

                {!service.featured && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-3
                      origin-top-right
                      scale-[0.58]
                      opacity-55
                      sm:right-4
                      sm:top-4
                      sm:scale-[0.64]
                      md:hidden
                    "
                  >
                    <ServiceVisual type={service.visual} />
                  </div>
                )}

                {/* Number */}

                <span
                  className={`
                    block
                    text-[9px]
                    tracking-[0.25em]
                    text-white/25
                    transition-colors
                    duration-300
                    group-hover:text-shams-orange
                    sm:text-[10px]

                    ${
                      service.featured
                        ? "mb-7 lg:mb-0"
                        : "mb-5 sm:mb-6"
                    }
                  `}
                >
                  {service.number}
                </span>

                {/* Main content */}

                <div className={!service.featured ? "pr-8 sm:pr-10 md:pr-0" : ""}>
                  <h3
                    className="
                      max-w-[520px]
                      text-[1.75rem]
                      font-medium
                      leading-[0.97]
                      tracking-[-0.05em]
                      text-shams-text
                      transition-transform
                      duration-500
                      group-hover:translate-x-1

                      sm:text-[2rem]

                      md:text-[clamp(2rem,3vw,3.7rem)]
                      md:leading-[0.95]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`
                      mt-4
                      max-w-md
                      text-[13px]
                      leading-6
                      text-shams-muted

                      sm:mt-5
                      sm:text-sm
                      sm:leading-7

                      ${service.featured ? "lg:hidden" : ""}
                    `}
                  >
                    {service.description}
                  </p>
                </div>

                {/* DESKTOP VISUAL FOR NORMAL CARDS */}

                {!service.featured && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-8
                      top-7
                      hidden
                      opacity-75
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      md:block
                    "
                  >
                    <ServiceVisual type={service.visual} />
                  </div>
                )}

                {/* FEATURED DESCRIPTION */}

                {service.featured && (
                  <div className="mt-6 lg:mt-0">
                    <p className="hidden max-w-md text-sm leading-7 text-shams-muted lg:block">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {service.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-white/30
                            transition-colors
                            duration-300
                            group-hover:text-white/55

                            sm:text-[9px]
                            sm:tracking-[0.22em]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* FEATURED VISUAL */}

                {service.featured && (
                  <div className="mt-6 max-w-[240px] sm:mt-8 sm:max-w-[260px] lg:mt-0">
                    <ServiceVisual type={service.visual} />
                  </div>
                )}

                {/* NORMAL CARDS BOTTOM */}

                {!service.featured && (
                  <div className="mt-6 flex items-end justify-between gap-4 sm:mt-7 sm:gap-6">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-5">
                      {service.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.18em]
                            text-white/30
                            transition-colors
                            duration-300
                            group-hover:text-white/55

                            sm:text-[9px]
                            sm:tracking-[0.22em]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <span
                      className="
                        shrink-0
                        text-base
                        text-white/20
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-shams-orange
                        sm:text-lg
                      "
                    >
                      ↗
                    </span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM META */}

        <div className="mt-7 flex items-center justify-between sm:mt-8">
          <span className="text-[8px] uppercase tracking-[0.18em] text-white/25 sm:text-[10px] sm:tracking-[0.22em]">
            Design · Engineering · Strategy
          </span>

          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-white/20 md:block">
            SHAMS / Digital Products
          </span>
        </div>
      </div>
    </section>
  );
}