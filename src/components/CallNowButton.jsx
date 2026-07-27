"use client";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";

export default function CallNowButton() {
  return (
    <motion.a
      href="tel:+919810485884"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Call Now"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-16 h-16 rounded-full
      text-white
      bg-[#0e9640]
      shadow-[0_0_20px_rgba(37,211,102,0.5)]"
    >
      {/* pulsing ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#0e9640]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <FiPhone size={24} className="relative z-10" />
    </motion.a>
  );
}