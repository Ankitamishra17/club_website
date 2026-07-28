"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const events = [
  {
    date: "",
    title: "",
    desc: "",
    image:
      "/4.jpg",
  },
  {
    date: "",
    title: "",
    desc: "",
    image:
      "/3.jpeg",
  },
  {
    date: "",
    title: "",
    desc: "",
    image:
      "/6.png",
  },
];

function EventCard({ event, big }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative overflow-hidden cursor-pointer w-full ${
        big
          ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full"
          : "aspect-[16/10] lg:aspect-auto lg:h-full"
      }`}
    >
      <img
        src={event.image}
        alt=""
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-active:scale-105"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" /> */}

      <div
        className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 ${
          big ? "p-6 lg:p-8" : "p-5"
        }`}
      >
        <div>
          <p
            className={`font-bold text-[var(--color-primary)] tracking-wide ${
              big ? "text-sm" : "text-xs"
            }`}
          >
            {event.date}
          </p>
          <h3
            className={`font-[var(--font-heading)] font-bold mt-2 leading-tight ${
              big ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
            }`}
          >
            {event.title}
          </h3>
          {event.desc && (
            <p className="mt-2 text-sm text-gray-300 max-w-md">{event.desc}</p>
          )}
        </div>

        <span
          className="shrink-0 w-10 h-10 flex items-center justify-center border border-white/25 text-white
          transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] group-hover:rotate-45"
        >
          <ArrowUpRight size={18} />
        </span>
      </div>
    </motion.div>
  );
}

export default function Events() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-20 md:py-28 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-14 md:mb-16 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[var(--color-primary)] uppercase tracking-widest text-sm sm:text-base font-semibold relative inline-block"
        >
          Our Events
          <motion.span
            className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          />
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-extrabold mt-5"
        > EVENTS WHICH MAKES US {""}
       
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            DIFFERENT
          </span>
        </motion.h2>
      </div>

      {/* Layout — natural stacking on mobile/tablet, fixed-height bento on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:h-[640px]">
        <EventCard event={events[0]} big />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-4 md:gap-6 lg:h-full">
          <EventCard event={events[1]} />
          <EventCard event={events[2]} />
        </div>
      </div>
    </section>
  );
}
