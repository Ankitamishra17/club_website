"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaWineGlassAlt,
  FaHeadphones,
  FaCrown,
  FaGlassCheers,
} from "react-icons/fa";

const MotionLink = motion(Link);

const slides = ["/banner3.png", "/banner.png", "/banner2.png"];

const features = [
  {
    icon: FaWineGlassAlt,
    title: "Signature Drinks",
    desc: "Crafted to perfection by expert mixologists.",
  },
  {
    icon: FaHeadphones,
    title: "Live DJ Nights",
    desc: "Top DJs spinning the best of the beats.",
  },
  {
    icon: FaCrown,
    title: "VIP Experience",
    desc: "Premium service for an elevated night.",
  },
  {
    icon: FaGlassCheers,
    title: "Exclusive Events",
    desc: "Themed parties, guest lists and special nights.",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    // flex-col + min-h-screen means the feature strip sits in normal
    // document flow below the hero content instead of being pinned with
    // `absolute`, so nothing overlaps on short / small viewports.
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black text-white font-body">
      {/* BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={active}
            src={slides[active]}
            alt="Nightclub atmosphere"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* LEFT NUMBERED RAIL (tablet and up only — too cramped on phones) */}
      <div className="absolute left-3 top-0 z-20 hidden h-full flex-col items-center justify-center gap-4 md:flex md:left-5 lg:left-8 lg:gap-6">
        {slides.map((_, i) => {
          const num = String(i + 1).padStart(2, "0");
          const isActive = i === active;
          return (
            <motion.button
              key={num}
              layout
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-pink,#ec1a63)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label={`Go to slide ${num}`}
            >
              <motion.span
                animate={{
                  color: isActive ? "#ec1a63" : "rgba(255,255,255,0.4)",
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[10px] font-semibold tracking-widest lg:text-xs"
              >
                {num}
              </motion.span>

              {/* Progress line only under the active number */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.span
                    key={`line-${active}`}
                    layout
                    className="relative block h-6 w-[2px] origin-top overflow-hidden bg-white/15 lg:h-8"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <motion.span
                      className="absolute left-0 top-0 w-full origin-top bg-[var(--color-brand-pink,#ec1a63)]"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 4, ease: "linear" }}
                      style={{ height: "100%" }}
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {/* MAIN CONTENT — flex-1 fills remaining space above the feature strip */}
      <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-5 pt-28 pb-12 sm:px-8 sm:pt-32 md:px-16 md:pt-24 lg:px-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-brand-pink,#ec1a63)] sm:text-xs"
        >
          Night Begins Here
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display mt-3 break-words text-[13vw] uppercase leading-[0.95] tracking-wide xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem]"
        >
          Drink. Dance.
          <br />
          <span className="text-[var(--color-brand-pink,#ec1a63)]">Unwind.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-md text-sm text-gray-300 md:text-base"
        >
          Premium drinks, electrifying music and unforgettable nights.
        </motion.p>

        {/* Buttons — stack and go full width on phones so they stay easy to tap */}
        <div className="mt-8 flex w-full flex-col gap-3 xs:max-w-xs sm:max-w-none sm:flex-row sm:gap-4">
          <MotionLink
            href="/contact"
            className="relative inline-flex items-center justify-center gap-2 overflow-hidden bg-[var(--color-brand-pink,#ec1a63)] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white"
            whileHover={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Book a Table
            <span aria-hidden>→</span>
          </MotionLink>

          <MotionLink
            href="/event"
            className="relative inline-flex items-center justify-center gap-2 overflow-hidden border border-white/40 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white"
            whileHover={{ scale: 0.97, borderColor: "rgba(255,255,255,0.9)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            View Events
          </MotionLink>
        </div>
      </div>

      {/* BOTTOM FEATURE STRIP — in normal flow, wraps cleanly at every width */}
      <div className="relative z-20 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-6 xs:grid-cols-2 sm:grid-cols-2 xs:gap-y-8 sm:px-8 sm:py-8 md:grid-cols-4 md:gap-0 md:px-16 lg:px-24">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex items-start gap-3 px-0 xs:px-2 ${
                i !== 0 ? "md:border-l md:border-white/10 md:pl-6" : ""
              }`}
            >
              <f.icon className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-brand-pink,#ec1a63)]" />
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest">{f.title}</h3>
                <p className="mt-1 text-xs text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}