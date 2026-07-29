"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Navigation, Phone } from "lucide-react";

export default function MapSection() {
  const lat = 28.5861175;
  const lng = 77.3412808;

  const details = [
    {
      icon: MapPin,
      label: "ADDRESS",
      value: "MODI MALL, A 205, above MODI MALL, Sector 25, Sector 25A, Noida, Uttar Pradesh 201307",
    },
    {
      icon: Clock,
      label: "OPEN",
      value: " All Days From 11 am–12 am",
    },
    {
      icon: Phone,
      label: "RESERVE",
      value: "+91 9990806427",
    },
    {
      icon: Mail,
      label: "EMAIL",
      value: "info@chicane.com",
    },
  ];

  return (
    <section className="relative bg-black py-28 px-6 md:px-16 text-white overflow-hidden">
      {/* AMBIENT GLOW */}
      {/* <div
        className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20"
        style={{ background: "var(--color-primary)" }}
      /> */}

      <div className="relative z-10 max-w-7xl mx-auto -mt-16">
        <p className="text-[var(--color-primary)] mb-8 uppercase tracking-widest text-sm relative inline-block">
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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <h2 className="font-[var(--font-heading)] text-3xl md:text-6xl font-extrabold">
            FIND US{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              HERE
            </span>
          </h2>

          {/* Coordinate readout — signature detail */}
          {/* <div className="flex items-center gap-2 font-mono text-xs md:text-sm text-white/50 tracking-wider">
            <Navigation
              size={14}
              className="text-[var(--color-primary)]"
              style={{ transform: "rotate(20deg)" }}
            />
            <span>
              {lat.toFixed(4)}° N, {lng.toFixed(4)}° E
            </span>
          </div> */}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.5fr] gap-6 lg:gap-8">
          {/* INFO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative border border-white/10 bg-white/[0.02] p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="space-y-8">
              {details.map(({ icon: Icon, label, value }, i) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-9 h-9 rounded-full border border-[var(--color-primary)]/40 flex items-center justify-center">
                    <Icon size={15} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-white/40 mb-1">
                      {label}
                    </p>
                    <p className="text-sm md:text-base text-white/90">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://www.google.com/maps/place/CHICANE+SPORTS+BAR/@28.5862368,77.3414755,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce51b52478e4d:0x9a1a210b9869ff98!8m2!3d28.5862368!4d77.3414755!16s%2Fg%2F11vlh7l39w?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center justify-between border border-white/15 px-5 py-3 text-xs uppercase tracking-widest text-white/80 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-300"
            >
              Get Directions
              <Navigation
                size={14}
                className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* MAP WITH SCANNER-STYLE CORNER BRACKETS */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden border border-white/10 min-h-[360px] lg:min-h-full"
          >
            <iframe
              title="Club Location Map"
              src={`https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.8) invert(0.92) contrast(0.9)",
                position: "absolute",
                inset: 0,
                minHeight: "360px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* corner brackets */}
            {/* {[
              "top-3 left-3 border-t border-l",
              "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l",
              "bottom-3 right-3 border-b border-r",
            ].map((pos) => (
              <div
                key={pos}
                className={`pointer-events-none absolute w-6 h-6 ${pos}`}
                style={{ borderColor: "var(--color-primary)" }}
              />
            ))} */}

            {/* pulsing pin, centered */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="relative flex h-4 w-4">
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping"
                  style={{ background: "var(--color-primary)" }}
                />
                <span
                  className="relative inline-flex rounded-full h-4 w-4 border-2 border-black"
                  style={{ background: "var(--color-primary)" }}
                />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}