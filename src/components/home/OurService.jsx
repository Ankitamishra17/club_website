"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Star, Martini, Disc3, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const services = [
  {
    icon: Martini,
    title: "DRINKS & BAR",
    desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.",
  },
  {
    icon: Star,
    title: "VIP ZONE",
    desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.",
  },
  {
    icon: Disc3,
    title: "DANCE FLOOR",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: Calendar,
    title: "SPECIAL EVENTS",
    desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-[var(--color-dark)] text-white py-24 md:py-32 px-6 md:px-16">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[var(--color-primary)] uppercase tracking-widest text-sm md:text-base relative inline-block"
          >
            OUR SERVICES
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
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-extrabold mt-5 leading-[1.05]"
          >
            WHAT WE OFFER <br />
            IN{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              OUR CLUB
            </span>
          </motion.h2>
        </div>

        <MotionLink
          href="/contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover="hover"
          whileTap="hover"
          className="group relative overflow-hidden px-6 py-4 cursor-pointer whitespace-nowrap uppercase text-sm font-bold tracking-wider text-white inline-flex
          bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
          shadow-[var(--shadow-glow)] items-center gap-2 shrink-0"
        >
          <motion.span
            className="absolute inset-0 bg-white z-10 origin-center"
            initial={{ rotate: -90, scale: 0 }}
            variants={{ hover: { rotate: 0, scale: 1 } }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
          <motion.span
            className="relative z-20 flex items-center gap-2"
            variants={{ hover: { color: "#000" } }}
            transition={{ duration: 0.2 }}
          >
            Buy tickets
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.span>
        </MotionLink>
      </div>

      {/* Numbered list */}
      <div className="border-t border-white/10">
        {services.map((item, i) => {
          const Icon = item.icon;
          const isActive = activeIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              onClick={() => setActiveIndex((prev) => (prev === i ? null : i))}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() =>
                setActiveIndex((prev) => (prev === i ? null : prev))
              }
              className="relative border-b border-white/10 py-8 md:py-10 cursor-pointer select-none"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
                {/* Index */}
                <span
                  className={`font-[var(--font-heading)] text-sm tracking-widest shrink-0 w-10 transition-colors duration-300 ${
                    isActive ? "text-[var(--color-primary)]" : "text-gray-500"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon frame */}
                <div className="relative shrink-0 w-16 h-16 flex items-center justify-center border border-white/15 overflow-hidden">
                  <motion.span
                    className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <Icon
                    size={26}
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[var(--color-primary)]"
                    }`}
                  />
                </div>

                {/* Title + desc */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold sm:w-64 shrink-0">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{
                    rotate: isActive ? 45 : 0,
                    color: isActive ? "var(--color-primary)" : "#4b5563",
                  }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ArrowUpRight size={22} />
                </motion.div>
              </div>

              {/* underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-[1px] bg-[var(--color-primary)]"
                initial={{ width: "0%" }}
                animate={{ width: isActive ? "100%" : "0%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
