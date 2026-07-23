"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group order-2 md:order-1"
        >
          {/* image */}
          <Image
            src="/image10.jpg"
            alt="Club Story"
            width={600}
            height={700}
            className="object-cover w-full h-[500px]"
          />

          {/* glow effect */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500
            bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.25),transparent)] blur-2xl"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/20 rounded-3xl" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 mb-8 md:mb-0"
        >
          {/* small heading */}
          <h2 className="text-[var(--color-primary)] uppercase tracking-widest text-md relative inline-block">
            OUR STORY
            <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-[var(--color-primary)]"></span>
          </h2>

          {/* main heading */}
          <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
            THE STORY <br />
            BEHIND <br />
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              CLUB X
            </span>
          </h2>

          {/* description */}
          <p className="mt-6 text-gray-400 leading-relaxed max-w-lg">
            CHICANE SPORTS BAR was created with one simple vision—to bring
            sports lovers, food enthusiasts, and friends together under one
            roof. We believe every match deserves an unforgettable atmosphere,
            where every goal, boundary, and victory is celebrated with great
            food, refreshing drinks, and exceptional hospitality. From live
            screenings of the biggest sporting events to vibrant evenings filled
            with music and entertainment, CHICANE SPORTS BAR is more than just a
            venue—it's a place where unforgettable memories are made.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
