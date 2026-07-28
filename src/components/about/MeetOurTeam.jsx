"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { Instagram, Facebook, Youtube } from "lucide-react";
import { Share2, Globe, Play } from "lucide-react";
const djs = [
  {
    name: "DJ TUSHII",
    country: "NOIDA",
    img: "https://i.pinimg.com/736x/8d/d8/42/8dd842ae1131ec83083095209fa8ab9d.jpg",
  },
  {
    name: "DJ ROX",
    country: "NEW DELHI",
    img: "https://i.pinimg.com/1200x/2e/6e/97/2e6e9765a747cad4549977cdf9391d5b.jpg",
  },
  {
    name: "DJ VIROBH",
    country: "GURUGRAM",
    img: "https://i.pinimg.com/1200x/26/07/08/26070851c5fab3d637f65db686a3cfb2.jpg",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16 overflow-hidden">
      {/* HEADER */}
      <div className="mb-20 max-w-4xl -mt-20">
        <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
          OUR DJ'S
        </p>

        <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
          MEET OUR <br />
          AMAZING{" "}
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            DJ'S
          </span>
        </h2>
      </div>

      {/* DJ GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {djs.map((dj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group"
          >
            {/* IMAGE CARD */}
            <div className="relative overflow-hidden">
              <Image
                src={dj.img}
                alt={dj.name}
                width={400}
                height={500}
                className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

              {/* GLOW */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
              bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.25),transparent)] blur-2xl"
              />
            </div>

            {/* INFO CARD */}
            <div
              className="relative -mt-16 mx-4 p-6 
              bg-white/5 backdrop-blur-xl border border-white/10
              group-hover:border-[var(--color-primary)]
              transition duration-300"
            >
              <h3 className="text-xl font-bold tracking-wide">{dj.name}</h3>

              <h4 className="text-[var(--color-primary)] text-sm mt-1">
                {dj.country}
              </h4>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 mt-4 text-gray-400">
                <Share2 className="w-5 h-5 hover:text-white cursor-pointer transition" />
                <Globe className="w-5 h-5 hover:text-white cursor-pointer transition" />
                <Play className="w-5 h-5 hover:text-white cursor-pointer transition" />
              </div>

              {/* HOVER LINE */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-primary)]
                group-hover:w-full transition-all duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
