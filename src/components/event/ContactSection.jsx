"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Visit() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-32 px-6 md:px-16 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/2.jpeg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* NEON GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.2),transparent)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-[var(--font-heading)] text-4xl md:text-6xl font-extrabold leading-tight"
        >
          NEVER MISS YOUR <br />
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            FAVORITE ARTIST
          </span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-300"
        >
          Get notifications delivered to your email weekly
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <Link href="/contact">
            <motion.button
              className="relative overflow-hidden px-8 py-4 cursor-pointer uppercase text-sm font-bold tracking-wider text-white
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
                CONTACT US
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* EXTRA SMALL TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-xs text-gray-400"
        >
          No spam. Only the best events.
        </motion.p>
      </div>
    </section>
  );
}
