
"use client";

import { motion } from "framer-motion";

const events = [
  {
    date: "AUG 25, 2023",
    title: "DJ DOMINIQUE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image:
      "https://images.pexels.com/photos/13112765/pexels-photo-13112765.jpeg",
  },
  {
    date: "JUL 22, 2023",
    title: "DJ PAUL FREEDMAN",
    desc: "",
    image:
      "https://plus.unsplash.com/premium_photo-1683134058615-550b2d7c5381?q=80&w=870&auto=format&fit=crop",
  },
  {
    date: "JUL 22, 2023",
    title: "DJ PAUL FREEDMAN",
    desc: "",
    image:
      "https://plus.unsplash.com/premium_photo-1683134058615-550b2d7c5381?q=80&w=870&auto=format&fit=crop",
  },
];

export default function Events() {
  return (
    <section className="bg-[var(--color-dark)] text-white py-24 px-6 md:px-16">
      
      {/*  Heading with LEFT LINE ANIMATION */}
      <div className="text-center mb-16 flex flex-col items-center">
        
        <div className="flex items-center gap-4">
          

          {/* TEXT */}
          <h2 className="text-[var(--color-primary)] uppercase tracking-widest text-xl relative inline-block">
           <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            // viewport={{ once: false }}
            className="text-[var(--color-primary)] uppercase tracking-widest text-xl font-semibold"
          >
            Our Events
          </motion.p>
            <motion.span
              className="absolute left-0 -bottom-1 h-[1px] bg-[var(--color-primary)]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </h2>
        </div>

        {/* BIG TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="font-[var(--font-heading)] text-4xl md:text-6xl font-extrabold mt-4"
        >
          UPCOMING{" "}
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            EVENTS
          </span>
        </motion.h2>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[700px]">
        
        {/* LEFT BIG */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="relative overflow-hidden group h-full"
        >
          <img
            src={events[0].image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm font-bold text-white">{events[0].date}</p>
            <h3 className="text-4xl font-bold mt-2">
              {events[0].title}
            </h3>
            <p className="mt-2 text-sm max-w-md">{events[0].desc}</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="grid grid-rows-2 gap-6 h-full">
          
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false }}
              className="relative overflow-hidden group"
            >
              <img
                src={events[i].image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-bold">{events[i].date}</p>
                <h3 className="text-2xl font-bold mt-1">
                  {events[i].title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}