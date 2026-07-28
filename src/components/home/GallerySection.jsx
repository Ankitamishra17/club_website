"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

// Each frame: { src, n, eyebrow, title, span } — span is the tailwind grid col/row classes
const frames = [
  {
    src: "https://wallpaperaccess.com/full/1490270.jpg",
    n: "01",
    eyebrow: "Opening set",
    title: "First hour, low light",
    span: "col-span-2 row-span-3",
  },
  {
    src: "https://images.pexels.com/photos/29079307/pexels-photo-29079307.jpeg",
    n: "02",
    eyebrow: "Crowd",
    title: "Midnight",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/7271395/pexels-photo-7271395.jpeg",
    n: "03",
    eyebrow: "Laser line",
    title: "Second drop",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    n: "04",
    eyebrow: "Live night",
    title: "DJ experience",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/6968859/pexels-photo-6968859.jpeg",
    n: "05",
    eyebrow: "Last call",
    title: "Close to sunrise",
    span: "col-span-1 row-span-3",
  },
  {
    src: "https://images.pexels.com/photos/19923640/pexels-photo-19923640.jpeg",
    n: "06",
    eyebrow: "Encore",
    title: "One more round",
    span: "col-span-1 row-span-3",
  },
];

function Sprocket() {
  return (
    <div className="flex justify-between opacity-40 px-1">
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="w-[6px] h-[6px] bg-white/40" />
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="bg-[var(--color-dark,#0B0B10)] text-white py-16 md:py-24 px-6 md:px-16 overflow-hidden font-[var(--font-body,sans-serif)]">
      {/* <Sprocket /> */}

      {/* HEADER */}
  <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center my-10 md:my-14">
  {/* Left Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-[#FF3E7F] flex items-center gap-2">
      <span className="w-5 h-px bg-[#FF3E7F]" />
      Our Gallery
    </p>

    <h2 className="font-[var(--font-heading,'Bebas_Neue',sans-serif)] font-normal text-[13vw] sm:text-6xl md:text-7xl leading-[0.92] tracking-wide mt-4">
      WHAT THE
      <br />
      <span className="text-transparent [-webkit-text-stroke:1.5px_white]">
        NIGHT LOOKS
      </span>{" "}
      LIKE
    </h2>

    {/* <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-white/60">
      Six frames pulled off last weekend&apos;s contact sheet. Every set leaves
      a trace on the floor — this is ours.
    </p> */}
  </motion.div>

  {/* Right Button */}
  <div className="flex md:justify-end md:items-end h-full">
    <MotionLink
      href="/gallery"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      whileHover="hover"
      whileTap="hover"
      className="relative inline-flex items-center gap-2 overflow-hidden isolate px-7 py-4 uppercase text-[13px] font-medium tracking-wider bg-white text-[#0B0B10] cursor-pointer"
    >
      <motion.span
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,#FF3E7F,#7A6BC9)]"
        initial={{ x: "-101%" }}
        variants={{ hover: { x: 0 } }}
        transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
      />

      <motion.span
        variants={{ hover: { color: "#F5F3EE" } }}
        transition={{ duration: 0.2 }}
      >
        Enter the Gallery
      </motion.span>
    </MotionLink>
  </div>
</div>

      {/* TICKER */}
      <div className="border-y border-white/[0.14] py-3.5 mb-14 overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="font-mono text-[12px] tracking-[0.12em] uppercase text-white/55 pr-9">
              <b className="text-[#33FFE0] font-medium">Tonight</b> — live sets &nbsp;•&nbsp;
              <b className="text-[#33FFE0] font-medium">Doors</b> at 22:00 &nbsp;•&nbsp;
              DJ experience &nbsp;•&nbsp; Full gallery — 240 frames &nbsp;•&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[90px] md:auto-rows-[110px] gap-3.5">
        {frames.map((f, i) => (
          <motion.figure
            key={f.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            whileHover="hover"
            whileTap="hover"
            className={`relative overflow-hidden bg-[#141319] group ${f.span}`}
          >
            <motion.img
              src={f.src}
              alt=""
              variants={{ hover: { scale: 1.09 } }}
              transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1] }}
              className="w-full h-full object-cover saturate-[0.9] contrast-[1.05]"
            />

            {/* bottom-up shade for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent pointer-events-none" />

            {/* diagonal sweep, signature micro-interaction */}
            {/* <motion.div
              className="absolute inset-0 pointer-events-none mix-blend-screen"
              style={{
                background:
                  "linear-gradient(135deg, transparent 40%, rgba(255,62,127,0.35) 50%, transparent 60%)",
              }}
              initial={{ x: "-160%", skewX: -12 }}
              variants={{ hover: { x: "160%" } }}
              transition={{ duration: 0.8 }}
            /> */}

            <span className="absolute top-3 left-3 z-10 font-mono text-[10.5px] tracking-wider text-white/85 border border-white/35 px-1.5 py-0.5">
              {f.n}
            </span>

            <motion.figcaption
              className="absolute left-3.5 right-3.5 bottom-3 z-10"
              initial={{ opacity: 0, y: 8 }}
              variants={{ hover: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#33FFE0] m-0">
                {f.eyebrow}
              </p>
              <h4 className="font-[var(--font-heading,'Bebas_Neue',sans-serif)] font-normal text-[19px] tracking-wide mt-0.5">
                {f.title}
              </h4>
            </motion.figcaption>
          </motion.figure>
        ))}
      </div>

   
    </section>
  );
}