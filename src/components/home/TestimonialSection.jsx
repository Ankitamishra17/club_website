"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, Music2, PartyPopper } from "lucide-react";

const testimonials = [
  {
    text: "Nice courteous staff ,willing to help you out of the way for better experience. Prices are reasonable , space is not much and music is loud - fun factor is high for youngsters and office crowd but not for family dinners. Mall location is great and sufficient parking space.",
    name: "Vimal Negi",
    location: "Delhi",
  },
  {
    text: "Very good Ambience,enviy and food. Veg and non veg options both are great. Services are good. Food n snacks Taste was delicious . Must try. Good place for parties.",
    name: "Poonam Pathak",
    location: "Greater Noida",
  },
  {
    text: "This sports bar nice and sound system also good but food not excellent but ok and over all staff good but lady manager very rude",
    name: "Kuldeep",
    location: "Noida",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[var(--color-dark)] text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* AMBIENT NEON GLOW */}

      {/* Eyebrow */}
      <div className="relative flex items-center gap-4">
        <h2 className="text-[var(--color-primary)] uppercase tracking-widest text-xl relative inline-block">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[var(--color-primary)] uppercase tracking-widest text-xl font-semibold"
          >
            TESTIMONIALS
          </motion.p>
          <motion.span
            className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </h2>
      </div>

      {/* BIG TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative font-[var(--font-heading)] text-4xl md:text-6xl font-extrabold mt-4"
      >
        DON'T TAKE{" "}
        <span className="text-transparent [-webkit-text-stroke:1px_white]">
          OUR <br />
          WORD FOR IT
        </span>
      </motion.h2>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-8 items-stretch mt-16">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d0d0f] p-10 relative border border-white/5"
        >
          {/* Quote */}
          <div className="text-[var(--color-primary)] text-6xl leading-none mb-4">
            &ldquo;
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-[var(--color-primary)] text-[var(--color-primary)]"
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-gray-300 leading-relaxed min-h-[140px]"
            >
              {testimonials[index].text}
            </motion.p>
          </AnimatePresence>

          {/* Name */}
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,var(--color-gradient-left),var(--color-gradient-right))] flex items-center justify-center font-bold text-lg">
              {testimonials[index].name.charAt(0)}
            </div>
            <div>
              <h4 className="font-[var(--font-heading)] font-bold text-lg">
                {testimonials[index].name}
              </h4>
              <p className="text-gray-400 text-sm">
                {testimonials[index].location}
              </p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="border border-gray-600 w-12 h-12 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
            >
              ←
            </button>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="border border-gray-600 w-12 h-12 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
            >
              →
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-[3px] transition-all ${
                  i === index
                    ? "w-8 bg-[var(--color-primary)]"
                    : "w-4 bg-gray-700"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT VISUAL PANEL — no image, pure gradient/neon */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[420px] overflow-hidden bg-[linear-gradient(160deg,#0d0d0f_0%,#1a0d14_55%,#0d0d0f_100%)] border border-white/5 flex flex-col justify-between p-10"
        >
          
         
         
         

          {/* Top: big rating */}
          <div className="relative">
            <p className="uppercase tracking-widest text-xs text-[var(--color-primary)] font-semibold mb-2">
              Voices From The Floor
            </p>
            <div className="flex items-end gap-3">
              <span className="text-6xl font-extrabold font-[var(--font-heading)]">
                4.1
              </span>
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

          {/* Middle: stat pills */}
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
                <stat.icon
                  size={20}
                  className="text-[var(--color-primary)] mb-2"
                />
                <p className="font-[var(--font-heading)] font-bold text-lg">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-wide text-gray-400 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom caption */}
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
