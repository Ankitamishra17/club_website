"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "LILY WOODS",
    location: "MIAMI, FL",
    image:
      "https://images.pexels.com/photos/29650433/pexels-photo-29650433.jpeg",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "JAMES SMITH",
    location: "NEW YORK, NY",
    image:
      "https://images.pexels.com/photos/19641136/pexels-photo-19641136.jpeg",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "SOPHIA LEE",
    location: "LOS ANGELES, CA",
    image:
      "https://images.pexels.com/photos/29068093/pexels-photo-29068093.jpeg",
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
    <section className="bg-[var(--color-dark)] text-white py-24 px-6 md:px-16">
      {/* Heading */}
      {/* <div className="text-center mb-16">
        <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
          TESTIMONIALS
        </p>

        <h2 className="font-[var(--font-heading)]  text-4xl md:text-6xl font-extrabold mt-4">
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            DON'T TAKE
          </span>{" "}
          OUR <br /> WORD FOR IT
        </h2>
      </div> */}

      <div className="flex items-center gap-4">
        {/* TEXT */}
        <h2 className="text-[var(--color-primary)] uppercase tracking-widest text-xl relative inline-block">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            // viewport={{ once: false }}
            className="text-[var(--color-primary)] uppercase tracking-widest text-xl font-semibold"
          >
            TESTIMONIALS
          </motion.p>
          <motion.span
            className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </h2>
      </div>

      {/* BIG TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        // viewport={{ once: false }}
        className="font-[var(--font-heading)] text-4xl md:text-6xl font-extrabold mt-4"
      >
        DON'T TAKE{" "}
        <span className="text-transparent [-webkit-text-stroke:1px_white]">
          OUR <br />
          WORD FOR IT
        </span>
      </motion.h2>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT TEXT */}
        <div className="bg-[#0d0d0f] p-10 relative">
          {/* Quote */}
          <div className="text-[var(--color-primary)] text-4xl mb-6">“</div>

          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-gray-300 leading-relaxed"
            >
              {testimonials[index].text}
            </motion.p>
          </AnimatePresence>

          {/* Name */}
          <div className="mt-8">
            <h4 className="font-[var(--font-heading)] font-bold text-lg">
              {testimonials[index].name}
            </h4>
            <p className="text-gray-400 text-sm">
              {testimonials[index].location}
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prev}
              className="border border-gray-600 w-12 h-12 flex items-center justify-center hover:border-[var(--color-primary)] transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="border border-gray-600 w-12 h-12 flex items-center justify-center hover:border-[var(--color-primary)] transition"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={testimonials[index].image}
              alt=""
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[550px] object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
