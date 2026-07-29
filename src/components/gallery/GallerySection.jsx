"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Play, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const photos = [
  { title: "NEON PARTY", date: "APR 2026", type: "image", src: "/image1.jpg" },
  { title: "EDM NIGHT", date: "MAR 2026", type: "image", src: "/Image2.webp" },
  { title: "DJ FEST", date: "FEB 2026", type: "image", src: "/Image3.webp" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image4.webp" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image5.jpg" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image6.webp" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image8.webp" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image9.jpg" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image10.jpg" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image11.jpg" },
  { title: "CLUB VIBES", date: "JAN 2026", type: "image", src: "/image12.webp" },
];

const videos = [
  { title: "LIVE DJ SET", date: "APR 2026", type: "video", src: "/video2.mp4" },
  { title: "CLUB NIGHT", date: "MAR 2026", type: "video", src: "/video3.mp4" },
  { title: "CLUB NIGHT", date: "MAR 2026", type: "video", src: "/video5.mp4" },
];

export default function GallerySection() {
  const [tab, setTab] = useState("photos");
  const [activeIndex, setActiveIndex] = useState(null);
  const thumbRefs = useRef([]);

  const data = tab === "photos" ? photos : videos;
  const lightboxOpen = activeIndex !== null;

  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i === 0 ? data.length - 1 : i - 1));
  const showNext = () => setActiveIndex((i) => (i === data.length - 1 ? 0 : i + 1));

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

  useEffect(() => {
    if (lightboxOpen && thumbRefs.current[activeIndex]) {
      thumbRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex, lightboxOpen]);

  return (
    <section className="bg-[var(--color-dark)] text-white py-24 px-4 sm:px-8 lg:px-16 min-h-screen relative selection:bg-white selection:text-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 mb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400">
              Archive — Est. 2026
            </span>
            <h2 className="font-[var(--font-heading)] text-5xl sm:text-7xl font-extrabold uppercase  leading-[0.9] mt-3">
              Captured
              <br />
              <span className=" font-serif font-light text-transparent [-webkit-text-stroke:1px_white]">
                Moments
              </span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-gray-400 font-mono">
              An index of the nights that shaped the floor, catalogued in the
              order they happened.
            </p>
          </div>

          {/* Simple underline tabs */}
          <div className="flex items-center gap-8 self-start md:self-auto">
            {["photos", "videos"].map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  setActiveIndex(null);
                }}
                className={`relative pb-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                  tab === t ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  {t === "videos" && (
                    <Play size={10} className={tab === t ? "fill-white" : "fill-gray-400"} />
                  )}
                  {t}
                  <span className="text-gray-500">
                    {String(t === "photos" ? photos.length : videos.length).padStart(2, "0")}
                  </span>
                </span>
                {tab === t && (
                  <motion.div
                    layoutId="catalogueTab"
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CATALOGUE — alternating plate rows, numbered like an index rather than a grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {data.map((item, i) => {
              const reversed = i % 2 === 1;
              return (
                <motion.div
                  key={item.src + i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative flex flex-col md:flex-row ${
                    reversed ? "md:flex-row-reverse" : ""
                  } items-stretch gap-6 md:gap-12 py-10 md:py-14 border-b border-white/10 cursor-pointer`}
                >
                  {/* Ghost plate numeral — the archive's own numbering, not decoration */}
                  <span
                    aria-hidden
                    className={`pointer-events-none select-none absolute top-2 hidden lg:block font-[var(--font-heading)] font-black leading-none text-white/5 ${
                      reversed ? "-right-6" : "-left-6"
                    }`}
                    style={{ fontSize: "9rem" }}
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </span>

                  {/* IMAGE */}
                  <div className="relative w-full md:w-3/5 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 group-hover:border-[var(--color-primary)] transition-colors duration-500">
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <video
                          src={item.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 text-[10px] font-mono uppercase text-neutral-200">
                          <Play size={10} className="fill-white" />
                          <span>Video</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* CAPTION */}
                  <div className="relative z-10 flex flex-col justify-center md:w-2/5">
                    <span className="text-xs font-mono tracking-widest text-gray-400">
                      PLATE {(i + 1).toString().padStart(2, "0")} · {item.date}
                    </span>
                    <h3 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                      {item.title}
                    </h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-primary)]">
                      View full frame
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LIGHTBOX */}
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
            <div className="flex items-center justify-between w-full relative z-20">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">
                  {data[activeIndex].date}
                </span>
                <span className="text-white/20">|</span>
                <span className="text-xs font-mono text-white tracking-widest">
                  PLATE {(activeIndex + 1).toString().padStart(2, "0")} / {data.length.toString().padStart(2, "0")}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-1.5">
                {data.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(idx);
                    }}
                    aria-label={`Go to item ${idx + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? "w-6 bg-[var(--color-primary)]" : "w-1 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[var(--color-primary)] transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center my-6">
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
                  {[
                    "top-3 left-3 border-t border-l",
                    "top-3 right-3 border-t border-r",
                    "bottom-3 left-3 border-b border-l",
                    "bottom-3 right-3 border-b border-r",
                  ].map((pos, idx) => (
                    <span
                      key={idx}
                      className={`absolute w-6 h-6 border-white/30 z-20 pointer-events-none ${pos}`}
                    />
                  ))}

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

            <div className="relative z-20 flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                  Plate {(activeIndex + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                  {data[activeIndex].title}
                </h3>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto max-w-full py-2 px-4 no-scrollbar">
                {data.map((item, idx) => (
                  <button
                    key={idx}
                    ref={(el) => (thumbRefs.current[idx] = el)}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeIndex === idx
                        ? "border-[var(--color-primary)] scale-110 opacity-100"
                        : "border-transparent opacity-40 hover:opacity-80"
                    }`}
                  >
                    {item.type === "image" ? (
                      <Image src={item.src} alt={item.title} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full bg-white/10 flex items-center justify-center">
                        <Play size={12} className="fill-white text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <p className="hidden sm:block text-[10px] font-mono uppercase tracking-widest text-gray-500">
                Use ← → to navigate, Esc to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}