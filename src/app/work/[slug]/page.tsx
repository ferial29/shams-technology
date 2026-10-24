
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug !== "beauty-hub") {
    return { title: "Project Not Found | SHAMS Technology" };
  }

  return {
    title: "Beauty Hub — Case Study | SHAMS Technology",
    description:
      "Explore Beauty Hub, a modern beauty services booking platform designed to simplify discovery, scheduling, and appointment management.",
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug !== "beauty-hub") {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#080706] text-white">
        {/* Hero */}
        <section className="relative border-b border-white/10">
          <div className="pointer-events-none absolute right-[-15%] top-0 h-[600px] w-[600px] rounded-full bg-[#ff6a00]/[0.07] blur-[130px]" />

          <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-44 md:px-10 md:pb-28 lg:px-16 lg:pt-52">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-[#ff6a00]"
            >
              <span>←</span>
              All projects
            </Link>

            <div className="mt-20 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#ff6a00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
              Case Study / 001
            </div>

            <h1 className="mt-7 text-[clamp(4.5rem,12vw,11rem)] font-medium leading-[0.85] tracking-[-0.075em]">
              Beauty
              <br />
              <span className="text-[#ff6a00]">Hub.</span>
            </h1>

            <div className="mt-14 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1fr_1fr]">
              <p className="max-w-xl text-[clamp(1.4rem,2.7vw,2.5rem)] leading-[1.2] tracking-[-0.04em]">
                Beauty services.
                <br />
                Booked better.
              </p>

              <p className="max-w-lg text-[15px] leading-8 text-white/45">
                A digital booking platform concept designed to bring beauty
                service discovery, appointment scheduling, and business
                management into one intuitive experience.
              </p>
            </div>
          </div>
        </section>

        {/* Project overview */}
        <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_1fr] lg:gap-24">
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#ff6a00]">
                01 / Overview
              </span>
            </div>

            <div>
              <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.06em]">
                A simpler way to connect people with beauty services.
              </h2>

              <p className="mt-9 max-w-2xl text-[16px] leading-8 text-white/45">
                Beauty Hub explores how a unified digital experience can
                simplify the journey from discovering a service to booking an
                appointment, while giving service providers a clearer way to
                manage their schedules.
              </p>

              <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Category
                  </span>
                  <span className="mt-3 block text-sm">SaaS Platform</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Focus
                  </span>
                  <span className="mt-3 block text-sm">Booking Experience</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Discipline
                  </span>
                  <span className="mt-3 block text-sm">
                    Product Design & Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product showcase */}
        <section className="border-y border-white/10 bg-[#eee7dc] text-[#171310]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
            <div className="flex items-center justify-between border-b border-black/10 pb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-black/45">
                The product experience
              </span>
              <span className="text-[10px] text-[#ff6a00]">01 — 03</span>
            </div>

            <div className="grid items-center gap-16 py-20 lg:grid-cols-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                  Designed around simplicity
                </span>

                <h2 className="mt-6 text-[clamp(3.5rem,6vw,7rem)] font-medium leading-[0.9] tracking-[-0.07em]">
                  Discover.
                  <br />
                  Choose.
                  <br />
                  <span className="text-[#ff6a00]">Book.</span>
                </h2>

                <p className="mt-8 max-w-md text-[15px] leading-8 text-black/50">
                  The experience focuses on clear navigation, streamlined
                  booking flows, and accessible service information.
                </p>
              </div>

              <div className="relative border border-black/10 bg-[#faf7f1] p-5 shadow-[0_35px_100px_rgba(56,39,24,0.13)] md:p-8">
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#ff6a00]" />
                    <span className="h-2 w-2 rounded-full bg-black/10" />
                    <span className="h-2 w-2 rounded-full bg-black/10" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/30">
                    Beauty Hub / Preview
                  </span>
                </div>

                <div className="py-12">
                  <div className="mb-10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-black/35">
                        Dashboard
                      </span>
                      <h3 className="mt-2 text-2xl font-medium tracking-tight">
                        Your appointments
                      </h3>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#ff6a00]/20" />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Today", value: "08" },
                      { label: "Upcoming", value: "24" },
                      { label: "Growth", value: "+18%" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="border border-black/10 bg-white p-4"
                      >
                        <span className="block text-[9px] text-black/40">
                          {item.label}
                        </span>
                        <span className="mt-4 block text-2xl font-medium">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border border-black/10 bg-white p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs text-black/45">
                        Next appointment
                      </span>
                      <span className="h-2 w-2 rounded-full bg-[#ff6a00]" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-full bg-[#e6dbcf]" />
                      <div className="flex-1 space-y-2">
                        <div className="h-2 w-2/3 rounded-full bg-black/15" />
                        <div className="h-2 w-1/2 rounded-full bg-black/10" />
                      </div>
                      <span className="text-xs text-black/40">14:30</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-black/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-black/35">
                  Interface concept / Not live data
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design approach */}
        <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.4fr_1fr] lg:gap-24">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#ff6a00]">
              02 / The approach
            </span>

            <div>
              <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.06em]">
                Less friction.
                <br />
                More flow.
              </h2>

              <div className="mt-14 grid gap-10 md:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Service discovery",
                    text: "An organized way to explore available services and make informed choices.",
                  },
                  {
                    number: "02",
                    title: "Booking clarity",
                    text: "A focused appointment flow that makes each next step easy to understand.",
                  },
                  {
                    number: "03",
                    title: "Schedule visibility",
                    text: "A clearer overview of appointments and upcoming activity.",
                  },
                  {
                    number: "04",
                    title: "Scalable foundation",
                    text: "A product direction designed to support future features and growth.",
                  },
                ].map((item) => (
                  <div key={item.number} className="border-t border-white/10 pt-6">
                    <span className="text-[11px] text-[#ff6a00]">
                      {item.number}
                    </span>
                    <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/45">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next step */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#ff6a00]">
              Next / Selected work
            </span>

            <div className="mt-7 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.95] tracking-[-0.065em]">
                More work.
                <br />
                <span className="text-[#ff6a00]">More ideas.</span>
              </h2>

              <Link
                href="/work"
                className="inline-flex items-center gap-4 rounded-full border border-white/20 px-7 py-4 text-sm transition-all duration-300 hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-black"
              >
                Explore all projects <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
