"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, Music2, PartyPopper, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "Nice courteous staff, willing to help you out of the way for a better experience. Prices are reasonable, space is not much and music is loud — fun factor is high for youngsters and office crowds but not for family dinners. Mall location is great with sufficient parking.",
    name: "Vimal Negi",
    location: "Delhi",
    rating: 4,
  },
  {
    text: "Very good ambience, and food. Veg and non veg options both are great. Services are good. Food and snacks taste was delicious. Must try. Good place for parties.",
    name: "Poonam Pathak",
    location: "Greater Noida",
    rating: 5,
  },
  {
    text: "This sports bar has a nice sound system too, but the food isn't excellent, just ok. Overall the staff were good, but the lady manager was very rude.",
    name: "Kuldeep",
    location: "Noida",
    rating: 3,
  },
];

const barHeights = [30, 55, 40, 70, 45, 85, 35, 60, 50, 75, 40, 65, 30, 55, 45, 80, 35, 60, 50, 70];

function Waveform({ active = 0 }) {
  return (
    <div className="flex items-end gap-[3px] h-16">
      {barHeights.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full"
          style={{
            background: i % 4 === active % 4 ? "var(--color-primary)" : "rgba(255,255,255,0.12)",
          }}
          initial={{ height: 6 }}
          whileInView={{ height: h * 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.02 }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section className="relative bg-[var(--color-dark)] text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center gap-3 text-[var(--color-primary)] uppercase tracking-widest text-sm md:text-base font-semibold"
      >
        <span className="w-6 h-px bg-[var(--color-primary)]" />
        Testimonials
      </motion.p>

      {/* BIG TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative font-[var(--font-heading)] text-4xl md:text-6xl font-extrabold mt-4 leading-[0.95]"
      >
        DON&apos;T TAKE{" "}
        <span className="text-transparent [-webkit-text-stroke:1px_white]">
          OUR
        </span>
        <br />
        WORD FOR IT
      </motion.h2>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-8 items-stretch mt-16">
        {/* LEFT — ticket stub card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0d0d0f] border border-white/5 flex flex-col"
        >
          {/* perforated tear line */}
          <div className="flex justify-between px-6 pt-5">
            {Array.from({ length: 26 }).map((_, i) => (
              <span key={i} className="w-[5px] h-[5px] rounded-full bg-[var(--color-dark)] ring-1 ring-white/10" />
            ))}
          </div>

          <div className="p-8 md:p-10 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs tracking-widest text-white/40">
                REVIEW {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < current.rating
                        ? "fill-[var(--color-primary)] text-[var(--color-primary)]"
                        : "text-white/15"
                    }
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="text-gray-300 leading-relaxed min-h-[140px] text-[15px]"
              >
                {current.text}
              </motion.p>
            </AnimatePresence>

            <div className="mt-auto pt-8 flex items-center gap-4 border-t border-white/5 mt-8">
              <div className="w-11 h-11 rounded-full bg-[linear-gradient(135deg,var(--color-gradient-left),var(--color-gradient-right))] flex items-center justify-center font-bold text-base shrink-0">
                {current.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h4 className="font-[var(--font-heading)] font-bold text-base leading-tight">
                  {current.name}
                </h4>
                <p className="text-gray-400 text-xs">{current.location}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 flex items-center justify-center border border-white/15 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-10 h-10 flex items-center justify-center border border-white/15 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* progress track instead of plain dots */}
            <div className="mt-5 h-[2px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[var(--color-primary)]"
                animate={{ width: `${((index + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT — stats panel with waveform motif */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[420px] overflow-hidden bg-[linear-gradient(160deg,#0d0d0f_0%,#1a0d14_55%,#0d0d0f_100%)] border border-white/5 flex flex-col justify-between p-10"
        >
          <div className="relative">
            <p className="uppercase tracking-widest text-xs text-[var(--color-primary)] font-semibold mb-2">
              Voices From The Floor
            </p>
            <div className="flex items-end gap-3">
              <span className="text-6xl font-extrabold font-[var(--font-heading)]">4.1</span>
              <div>
                <div className="flex gap-[2px] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[var(--color-primary)] text-[var(--color-primary)]"
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-400">Average guest rating</p>
              </div>
            </div>
          </div>

          <Waveform active={index} />

          <div className="relative grid grid-cols-3 gap-4 my-10">
            {[
              { icon: Users, value: "10K+", label: "Guests Hosted" },
              { icon: Music2, value: "150+", label: "Nights Live" },
              { icon: PartyPopper, value: "500+", label: "5-Star Reviews" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="border border-white/10 bg-white/5 backdrop-blur-md px-3 py-5 flex flex-col items-center text-center"
              >
                <stat.icon size={20} className="text-[var(--color-primary)] mb-2" />
                <p className="font-[var(--font-heading)] font-bold text-lg">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-wide text-gray-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <p className="relative font-[var(--font-heading)] text-2xl md:text-3xl font-bold leading-tight">
            Real Nights,{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              Real Reviews
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}