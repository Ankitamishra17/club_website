"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TicketModal from "./TicketModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

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

        <Link href="/">
          <div className="relative h-36 w-50">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          {/* BUY TICKETS */}
          <motion.button
            onClick={() => setModalOpen(true)}
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
          <Link href="/contact" className="w-full sm:w-auto">
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
          </Link>
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

          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Events", path: "/event" },
            { name: "Gallery", path: "/gallery" },
            { name: "Ticket", path: "/contact" },
          ].map((item, i) => (
            <Link key={i} href={item.path}>
              <p className="mb-3 text-gray-400 hover:text-white cursor-pointer transition">
                {item.name}
              </p>
            </Link>
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

          {["Start Here", "Style Guide", "Licenses"].map((item, i) => (
            <p
              key={i}
              className="mb-3 text-gray-400 hover:text-white cursor-pointer transition"
            >
              {item}
            </p>
          ))}

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
            {["/image8.webp", "/image9.jpg", "/image10.jpg", "image2.webp"].map(
              (img, i) => (
                <div key={i} className="overflow-hidden group">
                  <img
                    src={img}
                    className="w-full h-[100px] object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM CREDIT BAR */}
      <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>

        <p className="flex items-center gap-1.5">
          Developed by{" "}
          <span className="font-semibold text-white tracking-wide relative inline-block group cursor-pointer">
            Debox Technology
            <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
          </span>
        </p>
      </div>

      <TicketModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}
