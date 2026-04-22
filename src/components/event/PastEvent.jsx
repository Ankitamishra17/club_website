"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarRange, Clock } from "lucide-react";

const events = [
  {
    dj: "DJ SCOTTS",
    title: "NEON NIGHT PARTY",
    date: "25 APR 2026",
    time: "10:00 PM",
    img: "https://c.pxhere.com/photos/46/ec/drummer_performer_stage_lady_female_music_instrument_musician-1166001.jpg!d",
  },
  {
    dj: "EMMA LEE",
    title: "TECHNO BLAST",
    date: "28 APR 2026",
    time: "11:30 PM",
    img: "https://img.freepik.com/premium-photo/pianist-playing-jazz-music-instrument-night-club_534992-1757.jpg",
  },
  {
    dj: "PIERRE CURIE",
    title: "EDM FEST",
    date: "30 APR 2026",
    time: "09:00 PM",
    img: "https://c.pxhere.com/photos/46/ec/drummer_performer_stage_lady_female_music_instrument_musician-1166001.jpg!d",
  },
  {
    dj: "DJ RAVEN",
    title: "MIDNIGHT VIBES",
    date: "02 MAY 2026",
    time: "10:30 PM",
    img: "https://img.freepik.com/premium-photo/pianist-playing-jazz-music-instrument-night-club_534992-1757.jpg",
  },
];

export default function PartEvents() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16 overflow-hidden">
      {/* HEADER */}
      <div className="mb-16">
        <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
          PAST EVENTS
        </p>

        <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
          PARTY <br />
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            WITH US
          </span>
        </h2>
      </div>

      {/* AUTO SCROLL */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...events, ...events].map((event, i) => (
            <div
              key={i}
              className="min-w-[320px]  overflow-hidden group relative"
            >
              {/* IMAGE */}
              <div className="relative h-[380px]">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60" />

                {/* GLOW */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.25),transparent)] blur-2xl"
                />

                {/* CONTENT ON IMAGE */}
                <div className="absolute bottom-0 p-6 z-10 w-full">
                  {/* DJ */}
                  <p className="text-[var(--color-primary)] text-xs tracking-widest">
                    {event.dj}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold mt-1">{event.title}</h3>

                  {/* DATE TIME */}
                  <div className="mt-3 text-gray-300 text-sm">
                    <p className="flex flex-2 gap-2">
                      {" "}
                      <CalendarRange /> {event.date}
                    </p>
                    <p className="flex flex-2 gap-2 mt-2">
                      <Clock className="text[70px]" /> {event.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* GLASS CARD BASE */}
              <div className="absolute inset-0 border border-white/10  group-hover:border-[var(--color-primary)] transition" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
