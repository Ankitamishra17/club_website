"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Tag, Clapperboard, Feather, Trophy, PartyPopper } from "lucide-react";

const CATEGORY = {
  mrp: { icon: Tag, label: "On the house pricing" },
  bollywood: { icon: Clapperboard, label: "Bollywood" },
  sufi: { icon: Feather, label: "Sufi" },
  cricket: { icon: Trophy, label: "Match night" },
  party: { icon: PartyPopper, label: "Open floor" },
};

// getDay(): Sun=0, Mon=1 ... Sat=6
// Drop real photography into /public/images/lineup/ using these filenames.
// Panels fall back to the brand gradient until an image exists.
const lineup = [
  {
    day: 1,
    short: "Mon",
    full: "Monday",
    title: "Monday Mania",
    category: "mrp",
    blurb: "Start the Week the Chicane Way",
    image: "https://i.pinimg.com/1200x/f3/c9/a7/f3c9a786cdbcdd5b176e7e34654dab3a.jpg",
  },
  {
    day: 2,
    short: "Tue",
    full: "Tuesday",
    title: "Tuesday Bollywood",
    category: "bollywood",
    blurb: "Retro classics into the newest remixes, back to back.",
    image: "https://i.pinimg.com/1200x/56/51/0e/56510ebddd0c21df85c9cb4e1f785bee.jpg",
  },
  {
    day: 3,
    short: "Wed",
    full: "Wednesday",
    title: "MRP DAY",
    category: "sufi",
    blurb: "Live vocals and strings to carry you through midweek.",
    image: "https://i.pinimg.com/1200x/2e/4a/29/2e4a2989771124faee041a8f66763189.jpg",
  },
  {
    day: 4,
    short: "Thu",
    full: "Thursday",
    title: "Cricket night",
    category: "cricket",
    blurb: "Every over on the big screen, sound up, seats held for you.",
    image: "https://i.pinimg.com/1200x/02/cd/c4/02cdc4a3e64e051738cad7513a2892c6.jpg",
  },
  {
    day: 5,
    short: "Fri",
    full: "Friday",
    title: "Friday party",
    category: "party",
    blurb: "Resident DJs open the floor at 9pm and don't stop.",
    image: "https://i.pinimg.com/1200x/b6/9e/c5/b69ec54e86a46352151055d297e27ca5.jpg",
  },
  {
    day: 6,
    short: "Sat",
    full: "Saturday",
    title: "Saturday Bollywood",
    category: "bollywood",
    blurb: "The week's loudest night — full floor, full volume.",
    image: "https://i.pinimg.com/1200x/da/90/1a/da901a4a4bea93f2894e696238da5343.jpg",
  },
  {
    day: 0,
    short: "Sun",
    full: "Sunday",
    title: "Sunday Sufi",
    category: "sufi",
    blurb: "Close the week the way you opened it — slow and live.",
    image: "https://i.pinimg.com/736x/79/1a/3e/791a3eace7671c4f3cbcb84e7ffd6644.jpg",
  },
];

export default function WeeklyLineup() {
  // Default to Monday during SSR, then jump to the real "today" once mounted.
  const [activeDay, setActiveDay] = useState(1);
  const [brokenImages, setBrokenImages] = useState({});

  useEffect(() => {
    setActiveDay(new Date().getDay());
  }, []);

  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16">
      {/* HEADER */}
      <div className="mb-14">
        <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
          Every week
        </p>
        <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl font-extrabold mt-6 leading-[0.95]">
          SAME PLACE. <br />
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SEVEN DIFFERENT NIGHTS.
          </span>
        </h2>
      </div>

      {/* THE WEEK — one row of panels, doubling as both nav and content.
          Click a panel and it expands; the rest compress to a spine of
          vertical labels. flex-grow driven, so it becomes a vertical
          accordion on mobile with no extra markup. */}
      <div
        role="tablist"
        aria-label="Day of the week"
        className="flex flex-col md:flex-row gap-2 h-auto md:h-[560px]"
      >
        {lineup.map((night) => {
          const isActive = night.day === activeDay;
          const NightIcon = CATEGORY[night.category].icon;
          const imageOk = !brokenImages[night.day];

          return (
            <button
              key={night.day}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveDay(night.day)}
              style={{ flexGrow: isActive ? 12 : 1, flexBasis: 0 }}
              className={`group relative overflow-hidden rounded-2xl text-left cursor-pointer
                min-h-[72px] md:min-h-0 min-w-0
                transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]
                ${isActive ? "ring-1 ring-white/15" : ""}`}
            >
              {/* background */}
              <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--color-gradient-left),var(--color-gradient-right))]">
                {imageOk && (
                  <Image
                    src={night.image}
                    alt={`${night.full}: ${night.title}`}
                    fill
                    sizes="(min-width: 768px) 20vw, 100vw"
                    className="object-cover"
                    onError={() =>
                      setBrokenImages((prev) => ({ ...prev, [night.day]: true }))
                    }
                  />
                )}
              </div>
              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  isActive
                    ? "bg-[linear-gradient(to_top,var(--color-dark)_5%,rgba(10,10,10,0.25)_55%,rgba(10,10,10,0.1)_100%)]"
                    : "bg-black/55 group-hover:bg-black/35"
                }`}
              />

              {/* collapsed: icon + vertical day label */}
              <div
                className={`absolute inset-0 flex md:flex-col items-center justify-between md:justify-between px-6 py-4 md:py-6 transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <NightIcon className="w-4 h-4 text-white/70 shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/80 md:[writing-mode:vertical-rl] md:rotate-180">
                  {night.short}
                </span>
              </div>

              {/* expanded: full detail */}
              <motion.div
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.35, delay: isActive ? 0.2 : 0 }}
                className={`relative h-full flex flex-col justify-end p-6 md:p-9 ${
                  isActive ? "" : "pointer-events-none"
                }`}
              >
                <p className="text-[var(--color-primary)] text-xs uppercase tracking-widest">
                  {night.full} · {CATEGORY[night.category].label}
                </p>
                <h3 className="text-2xl md:text-4xl font-extrabold font-[var(--font-heading)] mt-1">
                  {night.title}
                </h3>
                <p className="text-gray-200 text-sm mt-2 max-w-md">{night.blurb}</p>

                <Link href="/contact" className="mt-6 w-fit" tabIndex={isActive ? 0 : -1}>
                  <span
                    className="relative overflow-hidden inline-block px-7 py-3.5 uppercase text-xs font-bold tracking-wider text-white
                    bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
                    shadow-[var(--shadow-glow)] hover:brightness-110 transition-[filter]"
                  >
                    Reserve a table
                  </span>
                </Link>
              </motion.div>
            </button>
          );
        })}
      </div>
    </section>
  );
}