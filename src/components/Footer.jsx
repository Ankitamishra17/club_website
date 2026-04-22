"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white px-6 md:px-16 py-20">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16"
      >
        {/* Logo */}
        <h1 className="text-2xl font-[var(--font-heading)] font-extrabold">
          <span className="text-[var(--color-primary)]">Y</span> CLUB X
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <motion.button
            className="relative overflow-hidden cursor-pointer mt-8 px-6 py-4 uppercase text-md font-bold tracking-wider  text-white
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
              <h2> BUY TICKETS</h2>
            </motion.span>
          </motion.button>
          <motion.button
            className="relative overflow-hidden mt-8 px-6 py-3 border border-white uppercase text-md font-bold tracking-wider  text-white
             bg-transparent cursor-pointer"
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
              <h2> CONTACT US</h2>
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-white/10 mb-16"></div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-4 gap-10">
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-[var(--font-heading)] mb-6 uppercase text-sm tracking-widest">
            Upcoming Events
          </h3>

          {[
            { name: "DJ Dominique", date: "Aug 25, 2023" },
            { name: "Neon Nights", date: "Aug 24, 2023" },
            { name: "DJ Paul Freedman", date: "Jul 22, 2023" },
          ].map((event, i) => (
            <div key={i} className="mb-6 border-b border-white/10 pb-4">
              <h3 className="font-semibold">{event.name}</h3>
              <p className="text-gray-400 text-sm">{event.date}</p>
              <h4 className="text-[var(--color-primary)] text-md mt-1 cursor-pointer">
                Buy Tickets →
              </h4>
            </div>
          ))}
        </motion.div>

        {/* Pages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-[var(--font-heading)] mb-6 uppercase text-sm tracking-widest">
            Pages
          </h3>

          {["Home", "About", "Events", "Blog", "Tickets"].map((item, i) => (
            <p
              key={i}
              className="mb-3 text-gray-400 hover:text-white cursor-pointer transition"
            >
              {item}
            </p>
          ))}
        </motion.div>

        {/* Utility Pages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-[var(--font-heading)] mb-6 uppercase text-sm tracking-widest">
            Utility Pages
          </h3>

          {["Start Here", "Style Guide", "404 Page", "Licenses"].map(
            (item, i) => (
              <p
                key={i}
                className="mb-3 text-gray-400 hover:text-white cursor-pointer transition"
              >
                {item}
              </p>
            ),
          )}

          <h3 className="text-[var(--color-primary)] mt-4 text-lg cursor-pointer">
            More Templates →
          </h3>
        </motion.div>

        {/* Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-[var(--font-heading)] mb-6 uppercase text-sm tracking-widest">
            Follow us on Instagram
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {[
              "https://images.unsplash.com/photo-1582103287241-2762adba6c36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1600102975337-e66752d32557?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

              "https://images.unsplash.com/photo-1600102975337-e66752d32557?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1615212863630-1691e4c99c15?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
