"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const stats = [
  { label: "Modi Mall, Sector 25A" },
  { label: "Live on Every Screen" },
  { label: "Weekend DJ Sets" },
];

export default function About() {
  return (
    <section className="relative bg-[var(--color-dark)] text-white py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[var(--color-primary)] uppercase tracking-widest text-sm md:text-base relative inline-block"
            >
              Who we are
              <motion.span
                className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
              />
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-extrabold mt-5 leading-[1.05]"
            >
              ABOUT{" "}
              <span className="text-transparent [-webkit-text-stroke:1px_white]">
                US
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 mt-6 leading-relaxed max-w-md"
            >
              Chicane is Noida's premier sports bar and club, located at Modi
              Mall, Sector 25A. From live match screenings and quiz nights to
              electric weekend DJ sets, we bring together great food, curated
              drinks, and unmatched energy under one roof.
            </motion.p>

            {/* Scoreboard-style stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-wrap border-y border-white/10 py-4"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-4 first:pl-0 text-[11px] sm:text-xs uppercase tracking-widest text-gray-400 ${
                    i !== 0 ? "border-l border-white/10" : ""
                  }`}
                >
                  {s.label}
                </div>
              ))}
            </motion.div>

            <MotionLink
              href="/about"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              whileHover="hover"
              className="group relative overflow-hidden mt-9 px-8 py-4 cursor-pointer uppercase text-sm font-bold tracking-wider text-white
              bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
              shadow-[var(--shadow-glow)] flex items-center gap-2 w-fit"
            >
              <motion.span
                className="absolute inset-0 bg-white z-10 origin-center"
                initial={{ rotate: -90, scale: 0 }}
                variants={{ hover: { rotate: 0, scale: 1 } }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <motion.span
                className="relative z-20 flex items-center gap-2"
                variants={{ hover: { color: "#000" } }}
                transition={{ duration: 0.3 }}
              >
                More about us
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.span>
            </MotionLink>
          </motion.div>

          {/* RIGHT SIDE — CHICANE-CUT IMAGE PAIR */}
          <div className="lg:col-span-7 relative mt-10 lg:mt-0">
            <div className="flex items-stretch">
              {/* Main image — angled right edge */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative w-[58%] aspect-[3/4] overflow-hidden
                sm:[clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]"
              >
                <img
                  src="image4.webp"
                  alt="Inside Chicane sports bar"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Racing stripe seam */}
              <div className="relative w-6 sm:w-10 flex-shrink-0 -mx-3 sm:-mx-5 z-10">
                <div className="absolute inset-0 skew-x-[-12deg] bg-[var(--color-primary)]" />
                <div className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 skew-x-[-12deg] bg-white/80" />
              </div>

              {/* Secondary image — angled left edge, offset lower like a track exit */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="relative w-[58%] aspect-[3/4] overflow-hidden mt-10
                sm:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]"
              >
                <img
                  src="https://images.pexels.com/photos/19181777/pexels-photo-19181777.jpeg"
                  alt="Chicane crowd and lighting"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Pennant badge — replaces the glass card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[var(--color-primary)] text-black
              px-5 py-2 [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)] shadow-lg"
            >
              <span className="font-[var(--font-heading)] text-2xl leading-none">5+</span>
              <span className="ml-1 text-[10px] uppercase tracking-widest font-bold">Years Running</span>
            </motion.div>
          </div>
        </div>

        {/* FULL-WIDTH BOTTOM IMAGE — TRACK STRAIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-24 sm:mt-32 lg:mt-40 relative overflow-hidden group
          lg:[clip-path:polygon(0_6%,100%_0,100%_100%,0_100%)]"
        >
          <img
            src="/2.jpeg"
            alt="The Chicane experience"
            className="w-full h-[240px] sm:h-[300px] lg:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Finish-line banner */}
          <div className="absolute bottom-0 left-0 flex items-stretch">
            <div
              className="bg-[var(--color-primary)] text-black px-6 sm:px-10 py-3 sm:py-4 flex items-center
              [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]"
            >
              <span className="font-[var(--font-heading)] text-lg sm:text-2xl tracking-wide">
                A Name Beyond Ordinary
              </span>
            </div>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}