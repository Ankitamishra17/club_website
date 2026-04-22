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
          className="relative group"
        >
          {/* image */}
          <Image
            src="https://i.pinimg.com/736x/5d/12/d5/5d12d55aef1108d308b00b6b0ab02dc6.jpg"
            alt="Club Story"
            width={600}
            height={700}
            className="rounded-3xl object-cover w-full h-[500px]"
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
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          {/* button */}
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
             Read MORE
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
