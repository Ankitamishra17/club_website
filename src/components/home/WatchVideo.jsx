"use client";

import { motion } from "framer-motion";

export default function WatchVideo() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-24 px-6 md:px-16">
      {/* Heading */}
      {/* <div className="text-center mb-16 max-w-4xl mx-auto">
        <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold">
          WATCH OUR VIDEO
        </p>

        <h2 className="font-[var(--font-heading)] text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
          A NIGHT AT{" "}
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            CLUB X
          </span>
        </h2>

        <p className="font-[var(--font-body)] text-sm md:text-lg text-gray-400 mt-6 leading-relaxed">
          Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat excepteur sint occaecat cupidatat
          non.
        </p>
      </div> */}

      <div className="text-center mb-16 flex flex-col items-center">
        <div className="flex items-center gap-4">
          {/* TEXT */}
          <h2 className="text-[var(--color-primary)] uppercase tracking-widest text-xl relative inline-block">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              // viewport={{ once: false }}
              className="text-[var(--color-primary)] uppercase tracking-widest text-xl font-semibold"
            >
              WATCH OUR VIDEO
            </motion.p>
            <motion.span
              className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </h2>
        </div>

        {/* BIG TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // viewport={{ once: false }}
          className="font-[var(--font-heading)] text-4xl md:text-6xl font-extrabold mt-4"
        >
          A NIGHT AT{" "}
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            CLUB X
          </span>
        </motion.h2>
        
      </div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto overflow-hidden"
      >
        <iframe
          className="w-full h-[250px] md:h-[450px] rounded-none"
          src="/party-video.mp4"
          title="Club Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <motion.button
          className="relative overflow-hidden mt-8 px-6 py-4 cursor-pointer uppercase text-md font-bold tracking-wider  text-white
             bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
              shadow-[var(--shadow-glow)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover="hover"
        >
          {/* ⚪ White rotating layer (hidden initially) */}
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
            <h2>BUY TICKETS</h2>
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
