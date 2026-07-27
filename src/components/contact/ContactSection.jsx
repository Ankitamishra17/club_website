"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function VisitSection() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-28 px-6 md:px-16 text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/9a/93/52/9a9352f75e39576bd0ecaa5be6d06f9b.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* NEON GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.2),transparent)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12">
        {/* LEFT - VISIT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold mb-8">
            VISIT OUR CLUB
          </h2>

          <div className="space-y-6">
            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <MapPin className="text-[var(--color-primary)] mt-1" />
              <p className="text-gray-300">
                Modi Mall, A 205, above Modi Mall, Sector 25, Sector 25A, Noida,
                Uttar Pradesh 201307
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <Mail className="text-[var(--color-primary)]" />
              <p className="text-gray-300">info@chicane.com</p>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4">
              <Phone className="text-[var(--color-primary)]" />
              <p className="text-gray-300">+91 9810485884</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - OPENING HOURS */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold mb-8">
            OPENING HOURS
          </h2>

          <div className="space-y-6">
            {/* ROW */}
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-gray-300">Monday - Sunday</span>
              <span className="font-semibold">11:00 AM - 12:00 AM</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-300">Happy Hours</span>
              <span className="font-semibold">11:00 AM - 11:30 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
