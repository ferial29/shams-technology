
"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FormValues = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
  website: "",
};

const projectTypes = [
  "Website",
  "Web Application",
  "E-commerce",
  "UI/UX Design",
  "Digital Strategy",
  "Something else",
];

const budgets = [
  "Not sure yet",
  "Under £2,000",
  "£2,000 – £5,000",
  "£5,000 – £10,000",
  "£10,000+",
];

const fieldClass =
  "w-full rounded-lg border border-white/[0.14] bg-white/[0.035] px-4 py-3.5 text-left text-[15px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#ff6a00]/70 focus:bg-white/[0.055]";

export default function ContactPage() {
  const reduceMotion = useReducedMotion();

  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  function updateField(key: keyof FormValues, value: string) {
    setValues((previous) => ({
      ...previous,
      [key]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result: { message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong. Please try again."
        );
      }

      setStatus("success");
      setFeedback("Thanks! Your inquiry has been sent successfully.");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send your inquiry. Please try again."
      );
    }
  }

  return (
    <section
      dir="ltr"
      className="relative isolate min-h-screen overflow-hidden bg-shams-background text-left text-white"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      {/* Orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-24 h-[520px] w-[520px] rounded-full bg-shams-orange/[0.055] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40 lg:px-16">
        {/* Section identifier */}
        <div className="mb-12 flex items-center gap-3 md:mb-16">
          <span className="h-1.5 w-1.5 rounded-full bg-shams-orange" />

          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
            Contact / SHAMS Technology
          </span>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left column */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-w-0"
          >
            <h1 className="text-[clamp(3.6rem,6.5vw,7rem)] font-medium leading-[0.94] tracking-[-0.07em]">
              Let&apos;s
              <br />
              make it
              <br />
              <span className="text-shams-orange">happen.</span>
            </h1>

            <p className="mt-9 max-w-[440px] text-[16px] leading-8 text-white/65 md:text-[18px]">
              Have an idea, a challenge, or an ambitious digital
              project? Tell us what you&apos;re imagining.
              We&apos;d love to hear about it.
            </p>

            <div className="mt-14 max-w-[440px] border-t border-white/[0.14] pt-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                Based in London
              </span>

              <p className="mt-3 text-[17px] text-white/80">
                Working with businesses everywhere.
              </p>
            </div>

            {/* Decorative solar mark */}
            <div
              aria-hidden="true"
              className="relative mt-14 hidden h-[170px] w-[170px] items-center justify-center rounded-full border border-shams-orange/25 lg:flex"
            >
              <div className="absolute inset-5 rounded-full border border-shams-orange/20" />
              <div className="absolute inset-12 rounded-full border border-shams-orange/50" />
              <div className="h-3 w-3 rounded-full bg-shams-orange shadow-[0_0_30px_rgba(255,106,0,0.7)]" />
            </div>
          </motion.div>

          {/* Right column: project inquiry */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="min-w-0 rounded-2xl border border-white/[0.12] bg-[#14100e]/95 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.2)] sm:p-8 lg:p-10"
          >
            <div className="mb-9 flex items-center justify-between gap-4 border-b border-white/[0.12] pb-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-shams-orange">
                  Project inquiry
                </p>

                <h2 className="mt-3 text-[25px] font-medium tracking-[-0.04em] text-white sm:text-[30px]">
                  Tell us about your project.
                </h2>
              </div>

              <span
                aria-hidden="true"
                className="shrink-0 text-[25px] text-shams-orange"
              >
                ↗
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot anti-spam field */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
              >
                <label htmlFor="contact-website">
                  Website
                </label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={(event) =>
                    updateField("website", event.target.value)
                  }
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[12px] font-medium text-white/70"
                  >
                    Your name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    className={fieldClass}
                    placeholder="Jane Smith"
                    value={values.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[12px] font-medium text-white/70"
                  >
                    Email address *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    className={fieldClass}
                    placeholder="jane@company.com"
                    value={values.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-project-type"
                  className="mb-2 block text-[12px] font-medium text-white/70"
                >
                  What do you need help with? *
                </label>

                <select
                  id="contact-project-type"
                  name="projectType"
                  required
                  className={`${fieldClass} ${
                    values.projectType ? "" : "text-white/45"
                  }`}
                  value={values.projectType}
                  onChange={(event) =>
                    updateField("projectType", event.target.value)
                  }
                >
                  <option value="" disabled>
                    Select a project type
                  </option>

                  {projectTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-[#14100e] text-white"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-budget"
                  className="mb-2 block text-[12px] font-medium text-white/70"
                >
                  Estimated budget
                </label>

                <select
                  id="contact-budget"
                  name="budget"
                  className={`${fieldClass} ${
                    values.budget ? "" : "text-white/45"
                  }`}
                  value={values.budget}
                  onChange={(event) =>
                    updateField("budget", event.target.value)
                  }
                >
                  <option value="">
                    Select a budget (optional)
                  </option>

                  {budgets.map((budget) => (
                    <option
                      key={budget}
                      value={budget}
                      className="bg-[#14100e] text-white"
                    >
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[12px] font-medium text-white/70"
                >
                  Tell us about your idea *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  className={`${fieldClass} resize-y`}
                  placeholder="What are you looking to build? What goals would you like to achieve?"
                  value={values.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                />
              </div>

              <div aria-live="polite">
                {feedback && (
                  <p
                    role={status === "error" ? "alert" : "status"}
                    className={`text-[13px] leading-6 ${
                      status === "success"
                        ? "text-emerald-400"
                        : "text-orange-300"
                    }`}
                  >
                    {feedback}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex min-h-[56px] w-full items-center justify-between gap-5 rounded-full bg-shams-orange px-7 py-4 text-[14px] font-semibold text-black transition-all duration-300 hover:bg-[#ff8a35] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>
                  {status === "sending"
                    ? "Sending your inquiry..."
                    : "Send your inquiry"}
                </span>

                <span
                  aria-hidden="true"
                  className="text-[21px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </button>

              <p className="text-[11px] leading-5 text-white/40">
                We&apos;ll use the information you provide
                only to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom signature */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.12] pt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
            SHAMS Technology
          </span>

          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
            Designed in London · Built for everywhere
          </span>
        </div>
      </div>
    </section>
  );
}
