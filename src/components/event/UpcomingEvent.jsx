"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Music, Mic2, Sparkles, Brain, Clock } from "lucide-react";

const CATEGORY = {
  sports: { label: "Live sport", icon: Trophy },
  dj: { label: "DJ set", icon: Music },
  karaoke: { label: "Karaoke", icon: Mic2 },
  ladies: { label: "Ladies night", icon: Sparkles },
  quiz: { label: "Quiz night", icon: Brain },
};

const events = [
  {
    id: "ucl-final-2026",
    category: "sports",
    title: "Champions League Final",
    host: "Live on the big screen",
    date: "2026-08-15T21:00:00",
    img: "https://images.pexels.com/photos/3851302/pexels-photo-3851302.jpeg",
  },
  {
    id: "pub-quiz-aug",
    category: "quiz",
    title: "Pub Quiz Night",
    host: "Hosted by MC Arjun",
    date: "2026-08-06T20:00:00",
    img: "https://images.pexels.com/photos/3851302/pexels-photo-3851302.jpeg",
  },
  {
    id: "weekend-dj-aug1",
    category: "dj",
    title: "Weekend DJ Night",
    host: "DJ Scott",
    date: "2026-08-01T22:00:00",
    img: "https://images.pexels.com/photos/34784358/pexels-photo-34784358.jpeg",
  },
  {
    id: "ladies-night-aug",
    category: "ladies",
    title: "Ladies Night",
    host: "DJ Emma Lee",
    date: "2026-08-08T21:30:00",
    img: "https://images.pexels.com/photos/34784358/pexels-photo-34784358.jpeg",
  },
  {
    id: "epl-screening-aug",
    category: "sports",
    title: "Premier League Screening",
    host: "Live on the big screen",
    date: "2026-08-22T21:00:00",
    img: "https://img.freepik.com/premium-photo/pianist-playing-jazz-music-instrument-night-club_534992-1757.jpg",
  },
  {
    id: "karaoke-aug",
    category: "karaoke",
    title: "Karaoke Night",
    host: "Hosted by MC Arjun",
    date: "2026-08-13T20:00:00",
    img: "https://images.pexels.com/photos/3851302/pexels-photo-3851302.jpeg",
  },
];

function getTimeLeft(targetDate) {
  const diff = new Date(targetDate) - new Date();
  return {
    total: diff,
    days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
    minutes: Math.max(Math.floor((diff / 1000 / 60) % 60), 0),
  };
}

function Countdown({ targetDate }) {
  // Avoid SSR/client hydration mismatch: render nothing until mounted,
  // then compute real time on the client.
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft(targetDate));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 60000); // minute-level is plenty for a card countdown
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted || !timeLeft) return null;
  if (timeLeft.total <= 0) {
    return (
      <p className="mt-3 text-xs uppercase tracking-widest text-[var(--color-primary)]">
        Happening now
      </p>
    );
  }

  return (
    <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-300">
      <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" aria-hidden="true" />
      <span>
        {timeLeft.days > 0 && `${timeLeft.days}d `}
        {timeLeft.hours}h {timeLeft.minutes}m to go
      </span>
    </div>
  );
}

function formatEventDate(dateStr) {
  const d = new Date(dateStr);
  const weekday = d.toLocaleDateString("en-GB", { weekday: "short" });
  const day = d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  const time = d.toLocaleTimeString("en-GB", { hour: "numeric", minute: "2-digit" });
  return { weekday, day, time };
}

export default function UpcomingEvents() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16">
      {/* HEADER */}
      <div className="mb-16">
        <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
         Music. Lights. Memories.
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
        {events.map((event, i) => {
          const { label, icon: Icon } = CATEGORY[event.category] ?? {};
          const { weekday, day, time } = formatEventDate(event.date);

          return (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group overflow-hidden  focus-within:ring-2 focus-within:ring-[var(--color-primary)]"
            >
              {/* IMAGE */}
              <Image
                src={event.img}
                alt={`${event.title} at the venue`}
                width={400}
                height={500}
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/60" />

              {/* GLOW */}
              {/* <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.25),transparent)] blur-2xl"
              /> */}

              {/* DATE BADGE — top right, always visible so people can scan the grid fast */}
              <div className="absolute top-4 right-4 z-10 flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-black/70 backdrop-blur-sm border border-white/10">
                <span className="text-[10px] uppercase tracking-wide text-[var(--color-primary)] leading-none">
                  {weekday}
                </span>
                <span className="text-lg font-bold leading-tight">
                  {day.split(" ")[0]}
                </span>
              </div>

              {/* CATEGORY BADGE — top left */}
              {Icon && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-xs uppercase tracking-wide">
                  <Icon className="w-3.5 h-3.5 text-[var(--color-primary)]" aria-hidden="true" />
                  {label}
                </div>
              )}

              {/* CONTENT OVER IMAGE */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <p className="text-[var(--color-primary)] text-xs tracking-widest">
                  {event.host}
                </p>

                <h3 className="text-2xl font-bold mt-1">{event.title}</h3>

                <p className="text-sm text-gray-300 mt-1">{day} · {time}</p>

                <Countdown targetDate={event.date} />

                <Link href="/contact" className="self-start">
                  <motion.button
                    className="relative overflow-hidden mt-6 px-8 py-4 cursor-pointer uppercase text-sm font-bold tracking-wider text-white
                 bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
                  shadow-[var(--shadow-glow)]"
                    whileHover="hover"
                  >
                    <motion.span
                      className="absolute inset-0 bg-white z-10 origin-center"
                      initial={{ rotate: -90, scale: 0 }}
                      variants={{ hover: { rotate: 0, scale: 1 } }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="relative z-20"
                      variants={{ hover: { color: "#000" } }}
                      transition={{ duration: 0.3 }}
                    >
                      Book now
                    </motion.span>
                  </motion.button>
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}