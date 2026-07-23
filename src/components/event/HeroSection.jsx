"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* GRADIENT LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.2),transparent)]"></div>

        {/* CONTENT */}
        <div className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen pt-20 md:pt-24">
          
          {/* SMALL TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm text-[var(--color-primary)]"
          >
            CLUB EXPERIENCE
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mt-3 md:mt-4 lg:mt-6 leading-tight font-[var(--font-heading)]"
          >
            OUR {" "}
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              EVENTS
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-3 md:mt-4 lg:mt-6 text-gray-300 max-w-md sm:max-w-xl text-sm sm:text-base lg:text-lg"
          >
            Learn more about our club story, electrifying nights, premium
            facilities, and unforgettable experiences.
          </motion.p>

         

          {/* SCROLL INDICATOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-white mt-4 rounded-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}