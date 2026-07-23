"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";

const photos = [
  { title: "NEON PARTY", date: "APR 2026", type: "image", src: "/image1.jpg" },
  { title: "EDM NIGHT", date: "MAR 2026", type: "image", src: "/image2.webp" },
  { title: "DJ FEST", date: "FEB 2026", type: "image", src: "/image3.webp" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image4.webp" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image5.jpg" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image6.webp" },
  // { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image7.wepb" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image8.webp" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image9.jpg" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image10.jpg" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image11.jpg" },
  {
    title: "CLUB VIBES",
    date: "JAN 2026",
    type: "image",
    src: "/image12.webp",
  },
];

const videos = [
  { title: "LIVE DJ SET", date: "APR 2026", type: "video", src: "/video2.mp4" },
  { title: "CLUB NIGHT", date: "MAR 2026", type: "video", src: "/video3.mp4" },
  { title: "CLUB NIGHT", date: "MAR 2026", type: "video", src: "/video5.mp4" },
];

export default function GallerySection() {
  const [tab, setTab] = useState("photos");
  const [activeIndex, setActiveIndex] = useState(null);

  const data = tab === "photos" ? photos : videos;
  const lightboxOpen = activeIndex !== null;

  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === 0 ? data.length - 1 : i - 1));
  const showNext = () =>
    setActiveIndex((i) => (i === data.length - 1 ? 0 : i + 1));

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, data.length]);

  return (
    <section className="bg-[var(--color-dark)] text-white py-24 px-4 sm:px-8 lg:px-16 min-h-screen relative selection:bg-white selection:text-black">
      {/* BACKGROUND GRAPHIC LINES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <div className="border-b border-white/10 pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase mb-3">
              <Sparkles size={12} className="text-[var(--color-primary)]" />
              <span>[ Archive 2026 ]</span>
            </div>

            <h2 className="font-[var(--font-heading)] text-5xl sm:text-7xl font-extrabold uppercase tracking-tighter leading-none">
              Captured <br />
              <span className="italic font-serif font-light text-transparent [-webkit-text-stroke:1px_white]">
                Moments
              </span>
            </h2>
          </div>

          {/* MINIMALIST TAB SWITCHER */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1.5  backdrop-blur-md self-start md:self-auto">
            {["photos", "videos"].map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  setActiveIndex(null);
                }}
                className={`relative px-6 py-2.5  text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  tab === t
                    ? "text-black font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab === t && (
                  <motion.div
                    layoutId="editorialTab"
                    className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))] shadow-[var(--shadow-glow)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {t}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      tab === t
                        ? "bg-black/10 text-black"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {t === "photos" ? photos.length : videos.length}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* MEDIA GALLERY GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {data.map((item, i) => (
              <motion.div
                key={item.src + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setActiveIndex(i)}
                className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--color-primary)] cursor-pointer aspect-[4/5] flex flex-col justify-between transition-all duration-500"
              >
                {/* MEDIA */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:filter group-hover:brightness-110"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 text-[10px] font-mono uppercase text-neutral-200">
                        <Play size={10} className="fill-white" />
                        <span>VIDEO</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                {/* CARD TOP INFO */}
                <div className="relative z-10 p-5 flex justify-between items-start">
                  <span className="text-[10px] font-mono tracking-widest text-gray-300 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {item.date}
                  </span>
                  <span className="text-xs font-mono text-gray-400 group-hover:text-[var(--color-primary)] transition-colors">
                    /{(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                {/* CARD BOTTOM INFO */}
                <div className="relative z-10 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:tracking-wider transition-all">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-0 group-hover:w-full bg-[var(--color-primary)] transition-all duration-300 mt-2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* EDITORIAL LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[var(--color-dark)]/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-12"
            onClick={closeLightbox}
          >
            {/* TOP BAR */}
            <div className="flex items-center justify-between w-full relative z-20">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">
                  {data[activeIndex].date}
                </span>
                <span className="text-white/20">|</span>
                <span className="text-xs font-mono text-white tracking-widest">
                  {activeIndex + 1} OF {data.length}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="relative flex-1 flex items-center justify-center my-6">
              {/* NAVIGATION BUTTONS */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous Item"
                className="absolute left-0 lg:left-4 z-30 w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 hover:border-[var(--color-primary)] active:scale-95 transition-all"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next Item"
                className="absolute right-0 lg:right-4 z-30 w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 hover:border-[var(--color-primary)] active:scale-95 transition-all"
              >
                <ArrowRight size={20} />
              </button>

              {/* ACTIVE MEDIA DISPLAY */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[68vh] w-full h-full flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[var(--shadow-glow)]">
                  {data[activeIndex].type === "image" ? (
                    <Image
                      src={data[activeIndex].src}
                      alt={data[activeIndex].title}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <video
                      src={data[activeIndex].src}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </motion.div>
            </div>

            {/* BOTTOM FILMSTRIP THUMBNAILS */}
            <div
              className="relative z-20 flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                {data[activeIndex].title}
              </h3>

              <div className="flex items-center gap-2 overflow-x-auto max-w-full py-2 px-4 no-scrollbar">
                {data.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeIndex === idx
                        ? "border-[var(--color-primary)] scale-110 opacity-100"
                        : "border-transparent opacity-40 hover:opacity-80"
                    }`}
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/10 flex items-center justify-center">
                        <Play size={12} className="fill-white text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
