"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Ticket } from "lucide-react";

const faqs = [
  {
    id: "hours",
    question: "What are the club opening hours?",
    answer:
      "We are open from 8 PM till late night, depending on the event schedule.",
  },
  {
    id: "dress-code",
    question: "Is there a dress code?",
    answer: "Yes, smart casual or party wear is recommended. Avoid sportswear.",
  },
  {
    id: "vip",
    question: "Do you offer VIP reservations?",
    answer: "Yes, VIP tables can be booked online or directly at the club.",
  },
  {
    id: "refunds",
    question: "Are tickets refundable?",
    answer:
      "Tickets are non-refundable but can be transferred to another person.",
  },
  {
    id: "parking",
    question: "Is parking available?",
    answer: "Yes, we provide valet parking for all guests.",
  },
];

// Decorative barcode made of bars with pseudo-random-but-stable widths.
function Barcode() {
  const widths = [2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 1, 3, 2, 1, 4, 1, 2, 2, 1, 3];
  return (
    <div
      aria-hidden="true"
      className="flex items-end gap-[2px] h-8 opacity-70"
    >
      {widths.map((w, i) => (
        <span
          key={i}
          className="bg-current"
          style={{ width: `${w}px`, height: "100%" }}
        />
      ))}
    </div>
  );
}

export default function FAQSection() {
  const [active, setActive] = useState(0);
  const buttonRefs = useRef([]);

  const openAt = (i) => setActive(i === active ? active : i);
  const toggleAt = (i) => setActive(i === active ? -1 : i);

  const focusIndex = (i) => {
    const next = (i + faqs.length) % faqs.length;
    buttonRefs.current[next]?.focus();
    openAt(next);
  };

  const handleKeyDown = (e, i) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusIndex(i + 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusIndex(i - 1);
        break;
      case "Home":
        e.preventDefault();
        focusIndex(0);
        break;
      case "End":
        e.preventDefault();
        focusIndex(faqs.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <section className="bg-[var(--color-dark)] text-white py-20 md:py-32 px-6 md:px-16">
      <div className="relative z-10 max-w-7xl mx-auto -mt-16">
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
        <div className="grid md:grid-cols-2 gap-4 md:gap-16 items-start">
          {/* LEFT SIDE — QUESTIONS LIST */}
          <div
            className="relative space-y-3"
            role="tablist"
            aria-label="Frequently asked questions"
            aria-orientation="vertical"
          >
            {/* Spotlight that tracks the active row */}
            <motion.div
              aria-hidden="true"
              className="hidden md:block absolute -left-6 w-1.5 rounded-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(var(--color-primary), color-mix(in srgb, var(--color-primary) 40%, transparent))",
                // boxShadow: "0 0 18px 2px color-mix(in srgb, var(--color-primary) 70%, transparent)",
                height: 64,
              }}
              animate={{ top: active >= 0 ? active * 68 + 6 : -999 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {faqs.map((faq, i) => {
              const isActive = active === i;
              const panelId = `faq-panel-${faq.id}`;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative border transition-colors duration-300 overflow-hidden ${
                    isActive
                      ? "bg-white/10 border-[var(--color-primary)]/50"
                      : "bg-white/5 border-white/10 hover:border-[var(--color-primary)]/40"
                  }`}
                >
                  <button
                    ref={(el) => (buttonRefs.current[i] = el)}
                    id={`faq-tab-${faq.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => toggleAt(i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    className="w-full flex items-center gap-4 text-left p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]"
                  >
                    <span
                      className={`font-[var(--font-heading)] text-sm shrink-0 transition-colors duration-300 tabular-nums ${
                        isActive ? "text-[var(--color-primary)]" : "text-gray-500"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 font-semibold text-base sm:text-lg transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-300"
                      }`}
                    >
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

                  {/* Mobile inline accordion — desktop uses the ticket panel instead */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        id={panelId}
                        role="tabpanel"
                        aria-labelledby={`faq-tab-${faq.id}`}
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

          {/* RIGHT SIDE — TICKET-STYLE ANSWER PANEL, desktop only */}
          <div className="relative hidden md:block">
            <AnimatePresence mode="wait">
              {active >= 0 && (
                <motion.div
                  key={active}
                  id={`faq-panel-${faqs[active].id}-desktop`}
                  role="tabpanel"
                  aria-labelledby={`faq-tab-${faqs[active].id}`}
                  initial={{ opacity: 0, y: 24, rotate: -1 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -18, rotate: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative min-h-[340px] bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
                  }}
                >
                  {/* ambient glow anchored to the clipped corner */}
                  {/* <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-40 bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-primary)_35%,transparent),transparent)] blur-2xl pointer-events-none" /> */}

                  <div className="relative z-10 flex-1 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6 text-[var(--color-primary)]">
                      <Ticket size={28} strokeWidth={1.5} />
                      <span className="font-[var(--font-heading)] text-xs tracking-[0.25em] uppercase text-gray-500">
                        Admit one · answer
                      </span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-4">
                      {faqs[active].question}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {faqs[active].answer}
                    </p>
                  </div>

                  {/* perforated tear line */}
                  <div
                    aria-hidden="true"
                    className="relative z-10 mx-8 lg:mx-10 border-t border-dashed border-white/20"
                  />

                  {/* stub footer with barcode + progress */}
                  <div className="relative z-10 flex items-center justify-between px-8 lg:px-10 py-5 text-gray-600">
                    <Barcode />
                    <span className="font-[var(--font-heading)] text-xs tracking-widest">
                      {String(active + 1).padStart(2, "0")} / {String(faqs.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}