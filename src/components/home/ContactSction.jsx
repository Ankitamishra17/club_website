"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Visit() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-32 px-6 md:px-16 text-white"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1490263.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
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
                CONTACT US
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
            COME & VISIT{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              OUR CLUB
            </span>
          </motion.h2>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <Link href="/contact">
              <motion.button
                className="relative overflow-hidden mt-8 px-8 py-4 cursor-pointer uppercase text-base font-bold tracking-wider  text-white
               bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
                shadow-[var(--shadow-glow)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
              >
                {/* White rotating layer (hidden initially) */}
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

                {/* Text */}
                <motion.span
                  className="relative z-20"
                  variants={{
                    hover: { color: "#000" },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h1> BUY TICKETS</h1>
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d0d0f] p-10 shadow-xl"
        >
          {/* Address */}
          <div className="flex gap-4 items-start mb-6">
            <MapPin className="text-[var(--color-primary)] text-3xl" />
            <p className="text-gray-300">
              MODI MALL, A 205, above MODI MALL, Sector 25, Sector 25A, Noida,
              Uttar Pradesh 201307
            </p>
          </div>

         

          {/* Phone */}
          <div className="flex gap-4 items-center">
            <Phone className="text-[var(--color-primary)]" />
            <a
              href="tel:+919810485884"
              className="text-gray-300 hover:text-[var(--color-primary)] transition"
            >
              +91 9810485884
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
