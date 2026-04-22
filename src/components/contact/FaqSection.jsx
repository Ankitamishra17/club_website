"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are the club opening hours?",
    answer:
      "We are open from 8 PM till late night, depending on the event schedule.",
  },
  {
    question: "Is there a dress code?",
    answer: "Yes, smart casual or party wear is recommended. Avoid sportswear.Yes, smart casual or party wear is recommended. Avoid sportswear",
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
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16">
      {/* HEADER */}
      <div className="mb-20 max-w-3xl">
        <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
          FAQ
        </p>

        <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl font-extrabold mt-6">
          GOT QUESTIONS? <br />
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            WE HAVE ANSWERS
          </span>
        </h2>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE (QUESTIONS LIST) */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-full text-left p-5 rounded-xl transition
              ${
                active === i
                  ? "bg-white/10 border border-white/20"
                  : "bg-white/5 border border-white/10 hover:border-[var(--color-primary)]"
              }`}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
            </button>
          ))}
        </div>

        {/* RIGHT SIDE (ANSWER PANEL) */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="p-8 h-[410px] bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden"
            >
              {/* glow */}
              <div
                className="absolute inset-0 opacity-50
              bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.2),transparent)] blur-2xl"
              />

              <h3 className="text-xl font-bold mb-4 mt-24">
                {faqs[active].question}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {faqs[active].answer}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
