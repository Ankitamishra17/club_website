"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link"

const MotionLink = motion(Link)

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
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat excepteur sint occaecat
              cupidatat non.
            </motion.p>

            <MotionLink
              href="/about"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover="hover"
              
              className="group relative overflow-hidden mt-9 px-8 py-4 cursor-pointer uppercase text-sm font-bold tracking-wider text-white
              bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
              shadow-[var(--shadow-glow)] flex items-center gap-2"
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

          {/* RIGHT SIDE — RESPONSIVE COLLAGE */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="col-span-2 sm:col-span-1 relative aspect-[4/5] overflow-hidden"
              >
                <motion.img
                  src="https://images.pexels.com/photos/9588614/pexels-photo-9588614.jpeg"
                  alt=""
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Secondary image — stacks under main on mobile, sits beside on sm+ */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="hidden sm:block relative aspect-[4/5] overflow-hidden self-end sm:mt-16"
              >
                <img
                  src="https://images.pexels.com/photos/19181777/pexels-photo-19181777.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Glass card — inline on mobile, overlapping on desktop */}
            {/* <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-5 sm:mt-6 lg:mt-0 lg:absolute lg:-bottom-10 lg:left-6 backdrop-blur-xl bg-white/5 border border-white/10 p-6 sm:p-8 max-w-sm shadow-2xl"
            >
              <p className="text-white text-base sm:text-lg leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat excepteur sint
                occaecat cupidatat non proident.
              </p>
            </motion.div> */}
          </div>
        </div>

        {/* FULL-WIDTH BOTTOM IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-20 sm:mt-28 lg:mt-32 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1698188546762-ed56440bdae4"
            alt=""
            className="w-full h-[220px] sm:h-[280px] lg:h-[340px] object-cover hover:scale-105 transition duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
