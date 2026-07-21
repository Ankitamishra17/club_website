"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const images = [
  "https://wallpaperaccess.com/full/1490270.jpg",
  "https://images.pexels.com/photos/29079307/pexels-photo-29079307.jpeg",
  "https://images.pexels.com/photos/7271395/pexels-photo-7271395.jpeg",
  "https://images.pexels.com/photos/6968859/pexels-photo-6968859.jpeg",
  "https://images.pexels.com/photos/19923640/pexels-photo-19923640.jpeg",
  "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
];

export default function Gallery() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-20 md:py-28 px-6 md:px-16 overflow-hidden">
      {/* HEADER */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-[var(--color-primary)] uppercase tracking-widest text-sm md:text-base relative inline-block">
            OUR GALLERY
            <motion.span
              className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            />
          </h2>

          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-extrabold mt-5 leading-tight">
            FILL THE{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              EXPERIENCE
            </span>
          </h2>

          <MotionLink
            href="/gallery"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover="hover"
            whileTap="hover"
            className="relative overflow-hidden inline-block mt-8 px-8 py-4 cursor-pointer uppercase text-base font-bold tracking-wider text-white
             bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
              shadow-[var(--shadow-glow)]"
          >
            <motion.span
              className="absolute inset-0 bg-white z-10 origin-center"
              initial={{ rotate: -90, scale: 0 }}
              variants={{ hover: { rotate: 0, scale: 1 } }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
            <motion.span
              className="relative z-20"
              variants={{ hover: { color: "#000" } }}
              transition={{ duration: 0.2 }}
            >
              <h2>VIEW MORE IMAGE</h2>
            </motion.span>
          </MotionLink>
        </motion.div>

        {/* FEATURE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group overflow-hidden rounded-3xl"
        >
          <img
            src={images[0]}
            alt=""
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover transition duration-700 group-hover:scale-110 group-active:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-500
            bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.25),transparent)] blur-2xl"
          />
        </motion.div>
      </div>

      {/* PREMIUM GALLERY LAYOUT */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* LEFT STACK */}
        <div className="flex flex-col gap-6">
          {images.slice(1, 3).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt=""
                className="h-[180px] sm:h-[200px] md:h-[220px] w-full object-cover transition duration-700 group-hover:scale-110 group-active:scale-110"
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition
              bg-[linear-gradient(120deg,transparent,rgba(255,0,150,0.3),transparent)] blur-xl"
              />
            </motion.div>
          ))}
        </div>

        {/* CENTER HERO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="relative group overflow-hidden rounded-3xl"
        >
          <img
            src={images[5]}
            alt=""
            className="h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover transition duration-700 group-hover:scale-110 group-active:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-500
            bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.25),transparent)] blur-2xl"
          />

          <div className="absolute bottom-6 left-6">
            <p className="text-sm text-gray-300">LIVE NIGHT</p>
            <h3 className="text-2xl font-bold">DJ EXPERIENCE</h3>
          </div>
        </motion.div>

        {/* RIGHT STACK */}
        <div className="flex flex-col gap-6">
          {images.slice(3, 5).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt=""
                className="h-[180px] sm:h-[200px] md:h-[220px] w-full object-cover transition duration-700 group-hover:scale-110 group-active:scale-110"
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition
              bg-[linear-gradient(120deg,transparent,rgba(0,255,255,0.3),transparent)] blur-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}