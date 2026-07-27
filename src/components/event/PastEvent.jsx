"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarRange, Clock } from "lucide-react";

const events = [
  {
    dj: "BIRTHDAY BASH",
    title: "PRIVATE BIRTHDAY CELEBRATION",
    date: "12 JUN 2026",
    time: "09:00 PM",
    img: "https://images.pexels.com/photos/3249760/pexels-photo-3249760.jpeg",
  },
  {
    dj: "DJ SCOTT",
    title: "WEEKEND DJ NIGHT",
    date: "20 JUN 2026",
    time: "10:30 PM",
    img: "https://images.pexels.com/photos/34784358/pexels-photo-34784358.jpeg",
  },
  {
    dj: "HOSTED BY MC ARJUN",
    title: "PUB QUIZ NIGHT",
    date: "27 JUN 2026",
    time: "08:00 PM",
    img: "https://images.pexels.com/photos/3851302/pexels-photo-3851302.jpeg",
  },
  {
    dj: "LIVE ON BIG SCREEN",
    title: "MATCH SCREENING NIGHT",
    date: "04 JUL 2026",
    time: "09:00 PM",
    img: "https://images.pexels.com/photos/9703053/pexels-photo-9703053.jpeg",
  },
  {
    dj: "DJ EMMA LEE",
    title: "LADIES NIGHT",
    date: "11 JUL 2026",
    time: "09:30 PM",
    img: "https://images.pexels.com/photos/34784358/pexels-photo-34784358.jpeg",
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
