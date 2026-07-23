"use client";

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
  return (
    <section className="relative bg-[var(--color-dark)] text-white py-16 sm:py-24 md:py-32 px-5 sm:px-6 md:px-16 overflow-hidden">
      {/* AMBIENT GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Heading */}
      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">
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
            className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-6xl font-extrabold mt-4 sm:mt-5 leading-[1.1] sm:leading-[1.05]"
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
          className="group relative overflow-hidden px-6 py-3.5 sm:py-4 cursor-pointer whitespace-nowrap uppercase text-sm font-bold tracking-wider text-white inline-flex w-full sm:w-auto justify-center
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

      {/* CARD GRID */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {services.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-[var(--color-primary)]/50"
            >
              {/* Corner index */}
              <span className="absolute top-6 right-6 font-[var(--font-heading)] text-xs tracking-widest text-gray-600 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_left,rgba(255,0,150,0.15),transparent_70%)] pointer-events-none" />

              {/* Icon */}
              <div className="relative w-16 h-16 flex items-center justify-center border border-white/15 mb-8 overflow-hidden">
                <motion.span
                  className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
                />
                <Icon
                  size={26}
                  className="relative z-10 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="relative font-[var(--font-heading)] text-2xl font-bold mb-3">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="relative text-gray-400 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>

              

              {/* Bottom underline */}
              <motion.span className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-primary)] w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}