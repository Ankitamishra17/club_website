"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "NEON NIGHT PARTY",
    dj: "DJ SCOTTS",
    date: "2026-04-25T22:00:00",
    img: "https://c.pxhere.com/photos/46/ec/drummer_performer_stage_lady_female_music_instrument_musician-1166001.jpg!d",
  },
  {
    title: "TECHNO BLAST",
    dj: "EMMA LEE",
    date: "2026-04-28T23:30:00",
    img: "https://img.freepik.com/premium-photo/pianist-playing-jazz-music-instrument-night-club_534992-1757.jpg",
  },
  {
    title: "NEON NIGHT PARTY",
    dj: "DJ SCOTTS",
    date: "2026-04-25T22:00:00",
    img: "https://c.pxhere.com/photos/46/ec/drummer_performer_stage_lady_female_music_instrument_musician-1166001.jpg!d",
  },
  {
    title: "TECHNO BLAST",
    dj: "EMMA LEE",
    date: "2026-04-28T23:30:00",
    img: "https://img.freepik.com/premium-photo/pianist-playing-jazz-music-instrument-night-club_534992-1757.jpg",
  },
  {
    title: "NEON NIGHT PARTY",
    dj: "DJ SCOTTS",
    date: "2026-04-25T22:00:00",
    img: "https://c.pxhere.com/photos/46/ec/drummer_performer_stage_lady_female_music_instrument_musician-1166001.jpg!d",
  },
  {
    title: "TECHNO BLAST",
    dj: "EMMA LEE",
    date: "2026-04-28T23:30:00",
    img: "https://img.freepik.com/premium-photo/pianist-playing-jazz-music-instrument-night-club_534992-1757.jpg",
  },
];

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(targetDate) - new Date();

      const t = {
        days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
        minutes: Math.max(Math.floor((diff / 1000 / 60) % 60), 0),
        seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
      };

      setTimeLeft(t);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 mt-4 text-center text-sm">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit}>
          <p className="text-lg font-bold">{timeLeft[unit] || 0}</p>
          <span className="text-gray-400 text-xs uppercase">{unit}</span>
        </div>
      ))}
    </div>
  );
}

export default function UpcomingEvents() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16">
      {/* HEADER */}
      <div className="mb-16">
        <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
          UPCOMING EVENTS
        </p>

        <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl font-extrabold mt-6">
          PARTY ALL NIGHT <br />
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            WITH US
          </span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            {/* IMAGE */}
            <Image
              src={event.img}
              alt={event.title}
              width={400}
              height={500}
              className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60" />

            {/* GLOW */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
              bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.25),transparent)] blur-2xl"
            />

            {/* CONTENT OVER IMAGE */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              {/* DJ NAME */}
              <p className="text-[var(--color-primary)] text-xs tracking-widest">
                {event.dj}
              </p>

              {/* TITLE */}
              <h3 className="text-2xl font-bold mt-1">{event.title}</h3>

              {/* COUNTDOWN */}
              {/* <Countdown targetDate={event.date} /> */}

              {/* BUTTON */}
              <Link href="/contact">
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
                    Book NOW
                  </motion.span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}