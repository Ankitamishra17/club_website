"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    title: "NEON PARTY",
    date: "APR 2026",
    type: "image",
    src: "/image1.jpg",
  },
  {
    title: "EDM NIGHT",
    date: "MAR 2026",
    type: "image",
    src: "/image2.webp",
  },
  {
    title: "DJ FEST",
    date: "FEB 2026",
    type: "image",
    src: "/image3.webp",
  },
  {
    title: "CLUB VIBES",
    date: "JAN 2026",
    type: "image",
    src: "/image4.webp",
  },
  {
    title: "CLUB VIBES",
    date: "JAN 2026",
    type: "image",
    src: "/image5.jpg",
  },
  {
    title: "CLUB VIBES",
    date: "JAN 2026",
    type: "image",
    src: "/image6.webp",
  },
  {
    title: "CLUB VIBES",
    date: "JAN 2026",
    type: "image",
    src: "/image7.wepb",
  },
  {
    title: "CLUB VIBES",
    date: "JAN 2026",
    type: "image",
    src: "/image8.webp",
  },
  {
    title: "CLUB VIBES",
    date: "JAN 2026",
    type: "image",
    src: "/image9.jpg",
  },
  {
    title: "CLUB VIBES",
    date: "JAN 2026",
    type: "image",
    src: "/image10.jpg",
  },
  {
    title: "CLUB VIBES",
    date: "JAN 2026",
    type: "image",
    src: "/image11.jpg",
  },
  {
    title: "CLUB VIBES",
    date: "JAN 2026",
    type: "image",
    src: "/image12.webp",
  },
];

const videos = [
  {
    title: "LIVE DJ SET",
    date: "APR 2026",
    type: "video",
    src: "/video2.mp4",
  },
  {
    title: "CLUB NIGHT",
    date: "MAR 2026",
    type: "video",
    src: "/video3.mp4",
  },
  {
    title: "CLUB NIGHT",
    date: "MAR 2026",
    type: "video",
    src: "/video5.mp4",
  },
];

export default function GallerySection() {
  const [tab, setTab] = useState("photos");

  const data = tab === "photos" ? photos : videos;

  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16">
      {/* HEADER + BUTTONS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <div>
          <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
            OUR GALLERY
          </p>

          <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl font-extrabold mt-6">
            CAPTURED <br />
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              MOMENTS
            </span>
          </h2>
        </div>

        {/* TOGGLE BUTTONS */}
        <div className="flex gap-4">
          {/* Photos Button */}
          <motion.button
            onClick={() => setTab("photos")}
            className={`relative overflow-hidden cursor-pointer px-6 py-3 text-sm font-bold uppercase tracking-wider
      ${
        tab === "photos"
          ? "bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))] text-white"
          : "bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))] text-white"
      }
    `}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
          >
            {/* Hover layer */}
            <motion.span
              className="absolute inset-0 bg-white z-10 origin-center"
              initial={{ rotate: -90, scale: 0 }}
              variants={{
                hover: { rotate: 0, scale: 1 },
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
              Photos
            </motion.span>
          </motion.button>

          {/* Videos Button */}
          <motion.button
            onClick={() => setTab("videos")}
            className={`relative overflow-hidden cursor-pointer px-6 py-3 text-sm font-bold uppercase  tracking-wider
      ${
        tab === "videos"
          ? "bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))] text-black"
          : "bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))] text-white"
      }
    `}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
          >
            {/* Hover layer */}
            <motion.span
              className="absolute inset-0 bg-white z-10 origin-center"
              initial={{ rotate: -90, scale: 0 }}
              variants={{
                hover: { rotate: 0, scale: 1 },
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
              Videos
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* CONTENT SWITCH */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl h-[260px]"
            >
              {/* IMAGE */}
              {item.type === "image" && (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              )}

              {/* VIDEO */}
              {item.type === "video" && (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition" />

              {/* TEXT */}
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-[var(--color-primary)] text-xs">
                  {item.date}
                </p>
                <h3 className="text-sm font-bold">{item.title}</h3>
              </div>

              {/* CTA */}
              <div className="absolute inset-0 flex items-center mt-46 ml-32 justify-center opacity-0 group-hover:opacity-100 transition">
                <button
                  className="px-5 py-2 text-xs font-bold uppercase
                bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
                 cursor-pointer"
                >
                  OPEN
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
