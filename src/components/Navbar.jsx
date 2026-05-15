"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "EVENTS", path: "/event" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-[var(--font-heading)] text-xl md:text-sm lg:text-xl  tracking-wider cursor-pointer">
            <span className="text-[var(--color-primary)]">Y</span> CLUB X
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-md">
          {links.map((link, i) => (
            <Link key={i} href={link.path} className="relative group">
              <h2> {link.name}</h2>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-primary)] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <motion.button
            className="relative overflow-hidden mt-2 px-6 md:px-2 py-3 cursor-pointer uppercase text-md font-bold tracking-wider  text-white
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
              <h2>BUY TICKETS</h2>
            </motion.span>
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md px-6 py-6 space-y-6"
          >
            {links.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)} // close menu after click
                  className="block text-lg font-[var(--font-heading)]"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <button
              className="w-full mt-4 px-6 py-3 font-bold uppercase
              bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
              shadow-[var(--shadow-glow)]"
            >
              Buy Tickets
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
