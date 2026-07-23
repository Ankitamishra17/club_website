"use client";

import { motion } from "framer-motion";
import { Calendar, Star, Martini, Disc3 } from "lucide-react";

const services = [
  {
    icon: Martini,
    title: "DRINKS & BAR",
    desc: "Premium cocktails and signature drinks crafted by expert mixologists.",
  },
  {
    icon: Star,
    title: "VIP ZONE",
    desc: "Exclusive VIP lounge with luxury seating and personalized service.",
  },
  {
    icon: Disc3,
    title: "DANCE FLOOR",
    desc: "High-energy dance floor with world-class DJs and lighting.",
  },
  {
    icon: Calendar,
    title: "SPECIAL EVENTS",
    desc: "Themed nights, live performances, and unforgettable experiences.",
  },
];

export default function Services() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-6">
        <div>
          <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
            WE CARE ABOUT YOU
          </p>

          <h2 className="font-[var(--font-heading)] text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
            YOUR SECURITY <br />
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              COME FIRST
            </span>
          </h2>
        </div>

       
      </div>

      {/* SERVICES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = -(y / rect.height - 0.5) * 10;
                const rotateY = (x / rect.width - 0.5) * 10;

                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
              }}
              className="relative group p-8
  bg-white/5 backdrop-blur-lg border border-white/10
  hover:border-[var(--color-primary)]
  shadow-[0_10px_30px_rgba(0,0,0,0.3)]
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
  transition duration-300 overflow-hidden"
            >
              {/* Reflection */}
              <div className="absolute inset-0 overflow-hidden ">
                <div
                  className="absolute -left-full top-0 w-full h-full 
      bg-gradient-to-r from-transparent via-white/10 to-transparent 
      group-hover:left-full transition-all duration-700"
                />
              </div>

              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
    bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.2),transparent)] blur-2xl"
              />

              {/* Icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6 relative z-10"
              >
                <Icon
                  size={40}
                  className="text-[var(--color-primary)] drop-shadow-[0_0_10px_rgba(255,0,150,0.7)]"
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 group-hover:translate-y-[-2px] transition-all duration-300">
                <h3 className="text-xl font-bold tracking-wide mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Bottom line */}
              <div
                className="absolute bottom-0 left-0 w-0 h-[2px]
    bg-[var(--color-primary)] group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
