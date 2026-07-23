"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TicketModal from "./TicketModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "EVENTS", path: "/event" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  const openTicketModal = () => {
    setOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-dark)]  border-b border-white/10">
        <div className="flex items-center justify-between px-6 md:px-12 py-4 h-24">
          {/* Logo */}
          <Link href="/">
            <div className="relative h-36 w-50">
              <Image
                src="/logo1.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-md">
            {links.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <Link key={i} href={link.path} className="relative group">
                  <h2
                    className={
                      isActive ? "text-[var(--color-primary)]" : "text-white"
                    }
                  >
                    {link.name}
                  </h2>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--color-primary)] transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Button */}
          <div className="hidden lg:block">
            <motion.button
              onClick={openTicketModal}
              className="relative overflow-hidden mt-2 px-6 py-3 cursor-pointer uppercase text-md font-bold tracking-wider text-white
               bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
                shadow-[var(--shadow-glow)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              whileTap="hover"
            >
              <motion.span
                className="absolute inset-0 bg-white z-10 origin-center"
                initial={{ rotate: -90, scale: 0 }}
                variants={{ hover: { rotate: 0, scale: 1 } }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
              <motion.span
                className="relative z-20"
                variants={{ hover: { color: "#000" } }}
                transition={{ duration: 0.2 }}
              >
                <h2>BUY TICKETS</h2>
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile/Tablet Menu Icon */}
          <button
            className="lg:hidden relative z-[60]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile/Tablet Drawer */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden fixed top-0 right-0 h-full w-[80%] sm:w-80 bg-black/95 backdrop-blur-md
                border-l border-white/10 z-50 px-8 pt-24 pb-10 flex flex-col"
              >
                <div className="flex flex-col gap-6">
                  {links.map((link, i) => {
                    const isActive = pathname === link.path;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <Link
                          href={link.path}
                          onClick={() => setOpen(false)}
                          className={`relative flex items-center gap-3 text-lg font-[var(--font-heading)] tracking-wide transition-colors duration-300 ${
                            isActive
                              ? "text-[var(--color-primary)]"
                              : "text-white"
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="mobileActiveDot"
                              className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
                            />
                          )}
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.08 }}
                  onClick={openTicketModal}
                  className="w-full mt-auto px-6 py-3 font-bold uppercase text-white
                  bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
                  shadow-[var(--shadow-glow)]"
                >
                  Buy Tickets
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <TicketModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
