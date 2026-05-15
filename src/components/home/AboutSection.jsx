"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-32 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-[var(--color-primary)] uppercase tracking-widest text-xl relative inline-block">
              Who we are
              <motion.span
                className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </p>

            <h2 className="font-[var(--font-heading)] text-6xl md:text-7xl font-extrabold mt-6 leading-tight">
              ABOUT{" "}
              <span className="text-transparent [-webkit-text-stroke:1px_white]">
                US
              </span>
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat excepteur sint occaecat
              cupidatat non.
            </p>

            <motion.button
              className="relative overflow-hidden mt-8 px-8 py-4 cursor-pointer uppercase text-base font-bold tracking-wider  text-white
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
                <h2>MORE ABOUT US</h2>
              </motion.span>
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE - NEW STACKED DESIGN */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/9588614/pexels-photo-9588614.jpeg"
                alt=""
                className="w-[420px] h-[440px] object-cover shadow-2xl"
              />
            </div>

            {/* Secondary Image (overlapping) */}
            <div className="absolute -left-16 bottom-[-40px] hidden md:block">
              <img
                src="https://images.pexels.com/photos/19181777/pexels-photo-19181777.jpeg"
                className="w-[220px] h-[260px] object-cover shadow-xl"
              />
            </div>

            {/* Floating Glass Card */}
            <div className="absolute -bottom-14 right-0 backdrop-blur-xl bg-white/5 border border-white/10 p-8 max-w-sm shadow-2xl z-20">
              <p className="text-white text-lg leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat excepteur sint
                occaecat cupidatat non proident.
              </p>
            </div>
          </motion.div>
        </div>

        {/* FULL-WIDTH BOTTOM IMAGE (cleaner instead of 2-grid) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-28 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1698188546762-ed56440bdae4"
            className="w-full h-[340px] object-cover hover:scale-105 transition duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
