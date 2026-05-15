"use client";

import { motion } from "framer-motion";
import { Calendar, Star, Martini, Disc3 } from "lucide-react";

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
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
        <div>
          <h2 className="text-[var(--color-primary)] uppercase tracking-widest text-xl relative inline-block">
            OUR SERVICES
            <motion.span
              className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </h2>

          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
            WHAT WE OFFER <br />
            IN{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              OUR CLUB
            </span>
          </h2>
        </div>

        {/* Button */}
        <motion.button
          className="relative overflow-hidden mt-8 px-6 py-4 cursor-pointer whitespace-nowrap uppercase text-base font-bold tracking-wider  text-white
                    bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
                     shadow-[var(--shadow-glow)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover="hover"
        >
          {/*  White rotating layer (hidden initially) */}
          <motion.span
            className="absolute inset-0 bg-white z-10 origin-center"
            initial={{ rotate: -90, scale: 0 }}
            variants={{
              hover: {
                rotate: 0,
                scale: 1,
              },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/*  Text */}
          <motion.span
            className="relative z-20"
            variants={{
              hover: { color: "#000" },
            }}
            transition={{ duration: 0.3 }}
          >
            <h2> BUY TICKETS</h2>
          </motion.span>
        </motion.button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="
                relative group p-10 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-[var(--color-primary)]
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* glow background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(255,0,150,0.2),transparent)]" />

              {/* Icon */}
              <div className="mb-6 relative z-10">
                <Icon
                  size={40}
                  className="text-[var(--color-primary)] group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="font-[var(--font-heading)] text-2xl font-bold mb-4 relative z-10">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>

              {/* bottom glow line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-primary)] group-hover:w-full transition-all duration-500" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
