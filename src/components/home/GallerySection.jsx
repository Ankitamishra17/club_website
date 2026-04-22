"use client";

import { motion } from "framer-motion";

const images = [
  "https://wallpaperaccess.com/full/1490270.jpg",
  "https://images.pexels.com/photos/29079307/pexels-photo-29079307.jpeg",
  "https://images.pexels.com/photos/7271395/pexels-photo-7271395.jpeg",
  "https://images.pexels.com/photos/6968859/pexels-photo-6968859.jpeg",
  "https://images.pexels.com/photos/19923640/pexels-photo-19923640.jpeg",
];

export default function Gallery() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16 overflow-hidden">
      {/* HEADER */}
      <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[var(--color-primary)] uppercase tracking-widest text-xl relative inline-block">
            OUR GALLERY
            <motion.span
              className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </h2>

          <h2 className="font-[var(--font-heading)] text-5xl md:text-5xl font-extrabold mt-4 leading-tight">
            FILL THE{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              EXPERIENCE
            </span>
          </h2>

          {/* {button} */}
          <motion.button
            className="relative overflow-hidden mt-8 px-8 py-4 cursor-pointer uppercase text-sm font-bold tracking-wider  text-white
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
              BUY TICKETS
            </motion.span>
          </motion.button>
        </motion.div>

        {/* FEATURE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative group overflow-hidden rounded-3xl"
        >
          <img
            src={images[0]}
            className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
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
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* neon glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
              bg-[linear-gradient(120deg,transparent,rgba(255,0,150,0.3),transparent)] blur-xl"
              />

              {/* glass overlay */}
              {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition" /> */}
            </motion.div>
          ))}
        </div>

        {/* CENTER HERO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="relative group overflow-hidden rounded-3xl"
        >
          <img
            src={images[0]}
            className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* strong overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
            bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.25),transparent)] blur-2xl"
          />

          {/* content */}
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
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* neon glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
              bg-[linear-gradient(120deg,transparent,rgba(0,255,255,0.3),transparent)] blur-xl"
              />

              {/* blur overlay */}
              {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
