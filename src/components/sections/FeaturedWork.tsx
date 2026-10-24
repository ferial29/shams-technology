"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Beauty Hub",
    category: "SaaS · Booking Platform",
    year: "2026",
    description:
      "A modern booking experience designed to connect beauty businesses with their customers.",
    href: "/work/beauty-hub",
    visual: "beauty",
  },
  {
    number: "02",
    title: "Aquakala",
    category: "E-commerce · Digital Experience",
    year: "2026",
    description:
      "A refined e-commerce experience built around clarity, product discovery and conversion.",
    href: "/work/aquakala",
    visual: "aqua",
  },
  {
    number: "03",
    title: "Digital Commerce",
    category: "Product Design · Development",
    year: "2026",
    description:
      "A scalable commerce experience built around performance, usability and modern technology.",
    href: "/work/digital-commerce",
    visual: "commerce",
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-shams-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-10 pt-14 md:px-10 md:pb-12 lg:px-16 lg:pb-14 lg:pt-20">
        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="mb-12 md:mb-16 lg:mb-24">
          <div className="mb-7 flex items-center justify-between md:mb-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-shams-orange" />

              <span className="text-[10px] uppercase tracking-[0.28em] text-shams-muted">
                Selected Work
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/25 sm:text-[10px] sm:tracking-[0.25em]">
              03 / Projects
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="
              max-w-[850px]
              text-[2.65rem]
              font-medium
              leading-[0.92]
              tracking-[-0.05em]
              text-shams-text

              sm:text-[3rem]

              md:text-[clamp(3.5rem,6vw,6.4rem)]
              md:leading-[0.9]
              md:tracking-[-0.06em]
            "
          >
            <span className="block">Products built to</span>

            <span className="block text-white/25">
              move businesses
            </span>

            <span className="block text-white/25">
              forward.
            </span>
          </motion.h2>
        </div>

        {/* =========================
            PROJECTS
        ========================== */}

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   PROJECT CARD
====================================================== */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay: 0.05,
      }}
      className={`
        group
        border-t
        border-white/[0.1]
        ${index === projects.length - 1 ? "border-b" : ""}
      `}
    >
      {/* =========================
          PROJECT VISUAL
      ========================== */}

      <Link
        href={project.href}
        className="
          relative
          block
          overflow-hidden
          py-8
          md:py-12
          lg:py-16
        "
      >
        {/* Number */}
        <span
          className="
            absolute
            left-3
            top-5
            z-20
            text-[9px]
            tracking-[0.2em]
            text-white/30
            sm:left-5
            sm:top-6
            sm:text-[10px]
            md:left-7
            md:top-8
          "
        >
          {project.number}
        </span>

        {/* Year */}
        <span
          className="
            absolute
            right-3
            top-5
            z-20
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-white/20
            sm:right-5
            sm:top-6
            sm:text-[9px]
            sm:tracking-[0.22em]
            md:right-7
            md:top-8
          "
        >
          SHAMS / {project.year}
        </span>

        {/* Visual container */}
        <div
          className="
            relative
            min-h-[340px]
            overflow-hidden
            border
            border-white/[0.08]
            bg-[#080808]
            transition-colors
            duration-700
            group-hover:border-white/[0.16]
            sm:min-h-[380px]
            md:min-h-[520px]
          "
        >
          {/* Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.08]
              [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)]
              [background-size:52px_52px]
            "
          />

          {/* Orange glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-shams-orange/[0.035]
              blur-[100px]
              transition-all
              duration-700
              group-hover:bg-shams-orange/[0.07]
            "
          />

          {/* Mockup */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-5 sm:p-8 md:p-14 lg:p-20"
            whileHover={{
              scale: 1.015,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {project.visual === "beauty" && (
  <div className="relative aspect-[2.4/1] w-full max-w-[1250px] overflow-hidden rounded-xl">
    <Image
      src="/images/projects/beauty-hub.png"
      alt="Beauty Hub booking platform showcase"
      fill
      sizes="(max-width: 768px) 100vw, 1100px"
      className="object-cover"
      priority
    />
  </div>
)}

           {project.visual === "aqua" && (
  <div className="relative aspect-[2.4/1] w-full max-w-[1250px] overflow-hidden rounded-xl">
    <Image
      src="/images/projects/aquakala.png"
      alt="Aquakala aquatic e-commerce website showcase"
      fill
      sizes="(max-width: 768px) 100vw, 1100px"
      className="object-cover"
    />
  </div>
)}

{project.visual === "commerce" && (
  <div className="relative aspect-[2.4/1] w-full max-w-[1250px] overflow-hidden rounded-xl">
    <Image
      src="/images/projects/digital-commerce.png"
      alt="Digital Commerce e-commerce dashboard and storefront showcase"
      fill
      sizes="(max-width: 768px) 100vw, 1100px"
      className="object-cover"
    />
  </div>
)}          </motion.div>
        </div>
      </Link>

      {/* =========================
          PROJECT INFORMATION
      ========================== */}

      <div
        className="
          grid
          gap-5
          pb-12
          pt-3
          md:grid-cols-[1.1fr_1fr_auto]
          md:items-end
          md:gap-7
          md:pb-14
          lg:pb-20
        "
      >
        <div>
          <span
            className="
              mb-3
              block
              text-[9px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-shams-orange
              sm:mb-4
              sm:text-[10px]
              sm:tracking-[0.22em]
            "
          >
            {project.category}
          </span>

          <h3
            className="
              text-[2.25rem]
              font-medium
              leading-none
              tracking-[-0.05em]
              text-shams-text
              sm:text-[2.4rem]
              md:text-[clamp(2.4rem,4vw,5rem)]
            "
          >
            {project.title}
          </h3>
        </div>

        <p
          className="
            max-w-md
            text-[13px]
            leading-6
            text-shams-muted
            sm:text-sm
            sm:leading-7
          "
        >
          {project.description}
        </p>

        <Link
          href={project.href}
          className="
            group/link
            flex
            w-fit
            items-center
            gap-4
            whitespace-nowrap
            pb-1
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-shams-text
          "
        >
          View Project

          <span
            className="
              text-lg
              text-shams-orange
              transition-transform
              duration-300
              group-hover/link:translate-x-2
            "
          >
            →
          </span>
        </Link>
      </div>
    </motion.article>
  );
}

/* ======================================================
   BEAUTY HUB VISUAL
====================================================== */

function BeautyVisual() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[1000px]
        overflow-hidden
        rounded-[18px]
        border
        border-white/[0.12]
        bg-[#171717]
        p-2
        shadow-2xl
        transition-transform
        duration-700
        group-hover:-rotate-[0.5deg]
        sm:rounded-[26px]
        sm:p-3
      "
    >
      <div className="overflow-hidden rounded-[13px] bg-[#eee8df] sm:rounded-[18px]">
        {/* Browser bar */}
        <div
          className="
            flex
            h-10
            items-center
            justify-between
            border-b
            border-black/[0.08]
            px-4
            sm:h-12
            sm:px-5
          "
        >
          <span className="text-[7px] font-semibold tracking-[0.2em] text-black sm:text-[8px]">
            BEAUTY HUB
          </span>

          <div className="flex gap-1">
            <span className="h-1 w-1 rounded-full bg-black/25" />
            <span className="h-1 w-1 rounded-full bg-black/25" />
            <span className="h-1 w-1 rounded-full bg-black/25" />
          </div>
        </div>

        <div className="grid min-h-[280px] grid-cols-2 sm:min-h-[330px] md:min-h-[400px]">
          <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12">
            <span className="mb-3 text-[6px] uppercase tracking-[0.2em] text-black/30 sm:mb-4 sm:text-[7px] sm:tracking-[0.25em]">
              Discover · Book · Enjoy
            </span>

            <h4 className="text-[1.65rem] font-medium leading-[0.9] tracking-[-0.05em] text-black sm:text-3xl sm:tracking-[-0.06em] md:text-5xl">
              Beauty,
              <br />
              booked
              <br />
              better.
            </h4>

            <span className="mt-5 h-6 w-16 rounded-full bg-black sm:mt-7 sm:h-7 sm:w-20" />
          </div>

          <div className="m-2 flex items-end justify-center overflow-hidden rounded-lg bg-[#d9b99f] sm:m-3 sm:rounded-xl">
            <div
              className="
                h-[70%]
                w-[65%]
                rounded-t-[100px]
                bg-[#bd8f70]
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   AQUAKALA VISUAL
====================================================== */

function AquaVisual() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[1000px]
        rotate-[-2deg]
        overflow-hidden
        rounded-[18px]
        bg-[#eaf7fb]
        shadow-2xl
        transition-transform
        duration-700
        group-hover:rotate-0
        group-hover:scale-[1.01]
        sm:rounded-[24px]
      "
    >
      <div
        className="
          flex
          h-10
          items-center
          justify-between
          border-b
          border-[#0e7295]/10
          px-4
          sm:h-12
          sm:px-5
        "
      >
        <span className="text-[7px] font-semibold tracking-[0.2em] text-[#125b75] sm:text-[8px]">
          AQUAKALA
        </span>

        <span className="text-[6px] uppercase tracking-[0.18em] text-[#125b75]/40 sm:text-[7px] sm:tracking-[0.2em]">
          Pure Water
        </span>
      </div>

      <div className="grid min-h-[290px] grid-cols-2 sm:min-h-[360px]">
        <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12">
          <span className="mb-3 text-[6px] uppercase tracking-[0.2em] text-[#125b75]/45 sm:mb-4 sm:text-[7px] sm:tracking-[0.25em]">
            Clean · Pure · Simple
          </span>

          <h4 className="text-[1.65rem] font-medium leading-[0.95] tracking-[-0.05em] text-[#123f4f] sm:text-3xl sm:tracking-[-0.06em] md:text-5xl">
            Better water.
            <br />
            Better living.
          </h4>

          <span className="mt-5 h-6 w-16 rounded-full bg-[#2783a4] sm:mt-7 sm:h-7 sm:w-20" />
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="
              relative
              h-36
              w-24
              rounded-xl
              border-[3px]
              border-white
              bg-[#cfeaf2]
              shadow-xl
              transition-transform
              duration-700
              group-hover:-translate-y-3
              sm:h-48
              sm:w-36
              sm:border-4
            "
          >
            <div className="absolute left-1/2 top-4 h-14 w-14 -translate-x-1/2 rounded-lg bg-white sm:top-5 sm:h-20 sm:w-20" />

            <div className="absolute bottom-12 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-[#5da2b7]/60 sm:bottom-16 sm:w-16" />
          </div>

          <div className="absolute bottom-8 right-5 h-9 w-9 rounded-full border border-[#2783a4]/30 sm:bottom-12 sm:right-12 sm:h-14 sm:w-14" />
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   DIGITAL COMMERCE VISUAL
====================================================== */

function CommerceVisual() {
  return (
    <div className="relative h-[290px] w-full max-w-[900px] sm:h-[360px] md:h-[430px]">
      {/* Back card */}
      <div
        className="
          absolute
          left-[8%]
          top-[10%]
          h-[65%]
          w-[58%]
          -rotate-6
          rounded-[14px]
          border
          border-white/[0.12]
          bg-[#11100f]
          transition-transform
          duration-700
          group-hover:-rotate-3
          group-hover:-translate-x-3
          sm:rounded-[20px]
        "
      />

      {/* Main card */}
      <div
        className="
          absolute
          right-[8%]
          top-[18%]
          flex
          h-[65%]
          w-[60%]
          rotate-6
          flex-col
          justify-between
          rounded-[14px]
          border
          border-white/[0.12]
          bg-[#191410]
          p-5
          shadow-2xl
          transition-transform
          duration-700
          group-hover:rotate-2
          group-hover:-translate-y-4
          sm:rounded-[20px]
          sm:p-7
        "
      >
        <span className="text-[7px] uppercase tracking-[0.2em] text-shams-orange sm:text-[8px] sm:tracking-[0.25em]">
          Digital Commerce
        </span>

        <div>
          <div className="mb-3 h-2 w-[45%] rounded-full bg-white/80" />
          <div className="mb-3 h-2 w-[70%] rounded-full bg-white/15" />
          <div className="h-2 w-[55%] rounded-full bg-white/10" />
        </div>
      </div>

      {/* Orange accent */}
      <div
        className="
          absolute
          bottom-[10%]
          left-[20%]
          h-2
          w-2
          rounded-full
          bg-shams-orange
          shadow-[0_0_30px_rgba(255,106,0,0.8)]
        "
      />
    </div>
  );
}