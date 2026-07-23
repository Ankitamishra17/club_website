"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

export default function MapSection() {
  return (
    <section className="relative bg-black py-28 px-6 md:px-16 text-white overflow-hidden">
      {/* NEON GLOW */}

      <div className="relative z-10 max-w-7xl mx-auto -mt-16">
        <p className="text-[var(--color-primary)] mb-8  uppercase tracking-widest text-sm relative inline-block">
          MAP
          <motion.span
            className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          />
        </p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left mb-12"
        >
          <h2 className="font-[var(--font-heading)] text-3xl md:text-6xl font-extrabold mb-4">
            FIND US{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              HERE
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" overflow-hidden border border-white/10 shadow-[var(--shadow-glow)]"
        >
          <iframe
            title="Club Location Map"
            src="https://www.google.com/maps?q=28.5861175,77.3412808&z=16&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
