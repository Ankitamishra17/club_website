"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Regular Customer",
    text: "CHICANE SPORTS BAR has become my go-to place for every cricket and football match. The giant screens, delicious food, and energetic crowd make every game feel like a stadium experience.",
  },
  {
    name: "Priya Verma",
    role: "Weekend Visitor",
    text: "I visited with my friends on a Saturday evening and had an amazing time. The ambience, music, and cocktails were excellent, and the staff made us feel truly welcome. We'll definitely be back.",
  },
  
  {
    name: "Sneha Kapoor",
    role: "Corporate Guest",
    text: "Our office team celebrated here after work, and everything was perfectly organized. The hospitality, food quality, and lively atmosphere exceeded our expectations.",
  },
 
  {
    name: "Neha Gupta",
    role: "Food & Drinks Lover",
    text: "The food is absolutely delicious and the cocktails are fantastic. Whether you're here for a match or just a night out with friends, CHICANE SPORTS BAR never disappoints.",
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group p-8 
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
                  className="w-12 h-12 flex items-center justify-center 
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
