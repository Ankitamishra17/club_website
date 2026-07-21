"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white px-6 sm:px-10 md:px-16 py-16 md:py-20 overflow-x-hidden">
      {/* TOP SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-14"
      >
        {/* Logo */}
        <h1 className="text-2xl font-[var(--font-heading)] font-extrabold">
          <span className="text-[var(--color-primary)]">Y</span> CLUB X
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          {/* BUY TICKETS */}
          <motion.button
            className="relative overflow-hidden px-6 py-4 uppercase text-sm sm:text-md font-bold tracking-wider text-white
            bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
            shadow-[var(--shadow-glow)] w-full sm:w-auto"
            whileHover="hover"
          >
            <motion.span
              className="absolute inset-0 bg-white z-10 origin-center"
              initial={{ rotate: -90, scale: 0 }}
              variants={{ hover: { rotate: 0, scale: 1 } }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="relative z-20"
              variants={{ hover: { color: "#000000" } }}
            >
              BUY TICKETS
            </motion.span>
          </motion.button>

          {/* CONTACT */}
          <motion.button
            className="relative overflow-hidden px-6 py-4 border border-white uppercase text-sm sm:text-md font-bold tracking-wider text-white
            bg-transparent w-full sm:w-auto"
            whileHover="hover"
          >
            <motion.span
              className="absolute inset-0 bg-white z-10 origin-center"
              initial={{ rotate: -90, scale: 0 }}
              variants={{ hover: { rotate: 0, scale: 1 } }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="relative z-20"
              initial={{ color: "#ffffff" }}
              variants={{ hover: { color: "#000000" } }}
            >
              CONTACT US
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mb-14" />

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* EVENTS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="mb-6 uppercase text-sm tracking-widest">
            Upcoming Events
          </h3>

          {[
            { name: "DJ Dominique", date: "Aug 25, 2023" },
            { name: "Neon Nights", date: "Aug 24, 2023" },
            { name: "DJ Paul Freedman", date: "Jul 22, 2023" },
          ].map((event, i) => (
            <div key={i} className="mb-5 border-b border-white/10 pb-4">
              <h3 className="font-semibold">{event.name}</h3>
              <p className="text-gray-400 text-sm">{event.date}</p>
              <p className="text-[var(--color-primary)] text-sm mt-1 cursor-pointer">
                Buy Tickets →
              </p>
            </div>
          ))}
        </motion.div>

        {/* PAGES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="mb-6 uppercase text-sm tracking-widest">Pages</h3>

          {["Home", "About", "Events", "Blog", "Tickets"].map((item, i) => (
            <p
              key={i}
              className="mb-3 text-gray-400 hover:text-white cursor-pointer transition"
            >
              {item}
            </p>
          ))}
        </motion.div>

        {/* UTILITY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="mb-6 uppercase text-sm tracking-widest">
            Utility Pages
          </h3>

          {["Start Here", "Style Guide",  "Licenses"].map(
            (item, i) => (
              <p
                key={i}
                className="mb-3 text-gray-400 hover:text-white cursor-pointer transition"
              >
                {item}
              </p>
            ),
          )}

          <p className="text-[var(--color-primary)] mt-4 cursor-pointer">
            More Templates →
          </p>
        </motion.div>

        {/* INSTAGRAM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="mb-6 uppercase text-sm tracking-widest">Instagram</h3>

          <div className="grid grid-cols-2 gap-3">
            {[
              "https://images.unsplash.com/photo-1582103287241-2762adba6c36",
              "https://images.unsplash.com/photo-1600102975337-e66752d32557",
              "https://images.unsplash.com/photo-1615212863630-1691e4c99c15",
              "https://images.unsplash.com/photo-1600102975337-e66752d32557",
            ].map((img, i) => (
              <div key={i} className="overflow-hidden group">
                <img
                  src={img}
                  className="w-full h-[100px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
