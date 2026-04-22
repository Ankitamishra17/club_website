"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Francois Mercer",
    role: "Club Member",
    text: "I have been coming here for years and every night feels like a new experience. The vibe, music, and energy are unmatched.",
  },
  {
    name: "Emma Lee",
    role: "DJ Artist",
    text: "The best club atmosphere I’ve ever played in. Crowd energy is insane and production quality is top-tier.",
  },
  {
    name: "Pierre Curie",
    role: "Event Guest",
    text: "From lighting to sound, everything is perfectly curated. It’s not just a club, it’s an experience.",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialSection() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16">
      {/* HEADER */}
      <div className="mb-16 max-w-3xl">
        <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
          TESTIMONIALS
        </p>

        <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl font-extrabold mt-6">
          WHAT PEOPLE <br />
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SAY ABOUT US
          </span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group p-8 rounded-2xl
            bg-white/5 backdrop-blur-xl border border-white/10
            hover:border-[var(--color-primary)]
            transition duration-300 overflow-hidden"
          >
            {/* GLOW */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
            bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.2),transparent)] blur-2xl"
            />

            {/* QUOTE ICON */}
            <Quote className="text-[var(--color-primary)] mb-4" />

            {/* TEXT */}
            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>

            {/* USER */}
            <div className="flex items-center gap-4 mt-6">
              {/* INITIAL AVATAR */}
              <div className="relative">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full
                bg-white/10 border border-white/20 font-bold text-sm"
                >
                  {getInitials(item.name)}
                </div>

                {/* glow ring */}
                <div
                  className="absolute inset-0 rounded-full blur-md opacity-60
                bg-[radial-gradient(circle,rgba(255,0,150,0.5),transparent)]"
                />
              </div>

              <div>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </div>

            {/* LINE EFFECT */}
            <div
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-primary)]
            group-hover:w-full transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
