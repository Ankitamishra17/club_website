"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import TicketModal from "./TicketModal";

const socials = [
  { icon: FiInstagram, href: "https://instagram.com" },
  { icon: FiFacebook, href: "https://facebook.com" },
  { icon: FiYoutube, href: "https://youtube.com" },
];

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="bg-[var(--color-dark)] text-white px-6 sm:px-10 md:px-16 py-16 md:py-20 overflow-x-hidden">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sm:col-span-2 lg:col-span-1"
        >
          <Link href="/">
            <div className="relative h-28 w-40 -mt-10">
              <Image
                src="/logo1.png"
                alt="Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed mt-5 max-w-xs">
            Noida&apos;s premier sports bar &amp; club — live match screenings,
            weekend DJ nights, and unforgettable celebrations.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 mt-6">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/15 text-gray-300 hover:text-white hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* BUY TICKETS */}
          <motion.button
            onClick={() => setModalOpen(true)}
            className="relative overflow-hidden mt-8 px-6 py-4 uppercase text-sm font-bold tracking-wider text-white
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
        </motion.div>

        {/* PAGES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 uppercase text-sm tracking-widest">Quick Link</h3>

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

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 uppercase text-sm tracking-widest">Contact</h3>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Modi Mall, A 205, above Modi Mall, Sector 25, Sector 25A, Noida,
            Uttar Pradesh 201307
          </p>
          <a
            href="tel:+919990806427"
            className="block text-gray-400 hover:text-white transition mb-2"
          >
            +91 9990806427
          </a>

          <a
            href="mailto:info@chicane.com"
            className="block text-gray-400 hover:text-white transition"
          >
            info@chicane.com
          </a>
        </motion.div>

        {/* INSTAGRAM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 uppercase text-sm tracking-widest">Instagram</h3>

          <div className="grid grid-cols-2 gap-3">
            {[
              "/image8.webp",
              "/image9.jpg",
              "/image10.jpg",
              "/Image2.webp",
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
