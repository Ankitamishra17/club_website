"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TicketModal from "./TicketModal";

const links = [
  { name: "HOME", path: "/", n: "01" },
  { name: "ABOUT", path: "/about", n: "02" },
  { name: "EVENTS", path: "/event", n: "03" },
  { name: "GALLERY", path: "/gallery", n: "04" },
  { name: "CONTACT", path: "/contact", n: "05" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openTicketModal = () => {
    setOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[var(--color-dark)]/90 backdrop-blur-md border-white/10"
            : "bg-[var(--color-dark)] border-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div
              className={`relative transition-all duration-300 ${
                scrolled ? "h-15 w-32" : "h-20 w-40"
              }`}
            >
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
          <div className="hidden lg:flex items-center gap-9 text-sm">
            {links.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <Link key={i} href={link.path} className="relative group flex items-center gap-1.5">
                 
                  <span
                    className={`uppercase tracking-wide font-medium transition-colors ${
                      isActive ? "text-[var(--color-primary)]" : "text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1.5 h-[2px] bg-[var(--color-primary)] transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Button */}
          <div className="hidden lg:block">
            <motion.button
              onClick={openTicketModal}
              className="relative overflow-hidden px-6 py-3 cursor-pointer uppercase text-sm font-bold tracking-wider text-white
               bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
                shadow-[var(--shadow-glow)]"
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
                Buy tickets
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile/Tablet Menu Icon */}
          <button
            className="lg:hidden relative z-[60] text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

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
              className="lg:hidden fixed top-0 right-0 h-full w-[82%] sm:w-80 bg-[#0d0d0f]
              border-l border-white/10 z-50 flex flex-col"
            >
              {/* ticket-stub tear line, echoes the review card elsewhere on the site */}
              <div className="flex justify-between px-6 pt-24">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-[5px] h-[5px] rounded-full bg-[var(--color-dark)] ring-1 ring-white/10"
                  />
                ))}
              </div>

              <div className="px-8 pt-8 pb-10 flex flex-col flex-1">
                <div className="flex flex-col gap-1">
                  {links.map((link, i) => {
                    const isActive = pathname === link.path;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                      >
                        <Link
                          href={link.path}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 py-3 border-b border-white/5 font-[var(--font-heading)] text-xl tracking-wide transition-colors duration-300 ${
                            isActive ? "text-[var(--color-primary)]" : "text-white"
                          }`}
                        >
                          <span className="font-mono text-[11px] text-white/30 w-6">
                            {link.n}
                          </span>
                          {link.name}
                          {isActive && (
                            <motion.span
                              layoutId="mobileActiveDot"
                              className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.07 }}
                  onClick={openTicketModal}
                  className="w-full mt-auto px-6 py-4 font-bold uppercase tracking-wider text-white
                  bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
                  shadow-[var(--shadow-glow)]"
                >
                  Buy tickets
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <TicketModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}