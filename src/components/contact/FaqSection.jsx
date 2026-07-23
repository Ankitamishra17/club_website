"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Quote } from "lucide-react";

const faqs = [
  {
    question: "What are the club opening hours?",
    answer:
      "We are open from 8 PM till late night, depending on the event schedule.",
  },
  {
    question: "Is there a dress code?",
    answer: "Yes, smart casual or party wear is recommended. Avoid sportswear.",
  },
  {
    question: "Do you offer VIP reservations?",
    answer: "Yes, VIP tables can be booked online or directly at the club.",
  },
  {
    question: "Are tickets refundable?",
    answer:
      "Tickets are non-refundable but can be transferred to another person.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we provide valet parking for all guests.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[var(--color-dark)] text-white py-24 md:py-32 px-6 md:px-16">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 md:mb-20 max-w-3xl"
      >
        <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm relative inline-block">
          FAQ
          <motion.span
            className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          />
        </p>

        <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-7xl font-extrabold mt-6 leading-[1.05]">
          GOT QUESTIONS? <br />
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            WE HAVE ANSWERS
          </span>
        </h2>
      </motion.div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-start">
        {/* LEFT SIDE — QUESTIONS LIST */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isActive = active === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={` border transition-colors duration-300 overflow-hidden ${
                  isActive
                    ? "bg-white/10 border-white/20"
                    : "bg-white/5 border-white/10 hover:border-[var(--color-primary)]/60"
                }`}
              >
                <button
                  onClick={() => setActive(isActive ? -1 : i)}
                  className="w-full flex items-center gap-4 text-left p-5"
                >
                  <span
                    className={`font-[var(--font-heading)] text-sm shrink-0 transition-colors duration-300 ${
                      isActive ? "text-[var(--color-primary)]" : "text-gray-500"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 font-semibold text-base sm:text-lg">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 ${
                      isActive ? "text-[var(--color-primary)]" : "text-gray-500"
                    }`}
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>

                {/* Mobile / tablet inline accordion — hidden on desktop where the right panel handles it */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="md:hidden overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm leading-relaxed px-5 pb-5 pl-14">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT SIDE — ANSWER PANEL, desktop only */}
        <div className="relative hidden md:block">
          <AnimatePresence mode="wait">
            {active >= 0 && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative min-h-[320px] p-8 lg:p-10 bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col justify-center"
              >
                <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--color-primary)_28%,transparent),transparent)] blur-2xl" />

                <Quote
                  size={44}
                  className="relative z-10 text-[var(--color-primary)]/40 mb-6"
                />

                <h3 className="relative z-10 text-xl lg:text-2xl font-bold mb-4">
                  {faqs[active].question}
                </h3>

                <p className="relative z-10 text-gray-400 leading-relaxed">
                  {faqs[active].answer}
                </p>

                <span className="relative z-10 mt-8 font-[var(--font-heading)] text-xs tracking-widest text-gray-600">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(faqs.length).padStart(2, "0")}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
