"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2, ChevronDown } from "lucide-react";


const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const inputClass =
  "w-full bg-white/5 border border-white/15 px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors text-sm";

const tableOptions = ["General", "VIP"];

export default function TicketModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: "1",
    date: "",
    table: "General",
    notes: "",
  });
  const [status, setStatus] = useState("idle");
  const [tableOpen, setTableOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          tickets: form.tickets,
          event_date: form.date,
          table_type: form.table,
          notes: form.notes,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setTableOpen(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        tickets: "1",
        date: "",
        table: "General",
        notes: "",
      });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-md max-h-[85vh] overflow-y-auto bg-[var(--color-dark)] border border-white/10 p-6
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                aria-label="Close"
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-10 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/15 flex items-center justify-center mb-4">
                    <Check size={26} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl font-bold">
                    Booking sent
                  </h3>
                  <p className="text-gray-400 mt-2 max-w-xs text-sm">
                    We've received your request. Check your inbox for
                    confirmation shortly.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 px-8 py-3 uppercase text-sm font-bold tracking-wider text-white
                    bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <p className="text-[var(--color-primary)] uppercase tracking-widest text-xs font-semibold">
                    Reserve your spot
                  </p>
                  <h3 className="font-[var(--font-heading)] text-2xl font-extrabold mt-1 mb-5">
                    BOOK TICKETS
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className={inputClass}
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={inputClass}
                      />
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className={inputClass}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">
                          Tickets
                        </label>
                        <input
                          required
                          type="number"
                          min="1"
                          max="20"
                          name="tickets"
                          value={form.tickets}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">
                          Event date
                        </label>
                        <input
                          required
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          className={`${inputClass} [color-scheme:dark]`}
                        />
                      </div>
                    </div>

                    {/* Custom dropdown — replaces native <select> so the open
                        list matches the dark theme instead of rendering
                        with browser-default white/light styling */}
                    <div className="relative">
                      <label className="text-xs text-gray-500 mb-1 block">
                        Table type
                      </label>
                      <button
                        type="button"
                        onClick={() => setTableOpen((v) => !v)}
                        className={`${inputClass} flex items-center justify-between`}
                      >
                        {form.table}
                        <motion.span
                          animate={{ rotate: tableOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} className="text-gray-400" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {tableOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute z-10 top-full mt-1 w-full bg-[#111] border border-white/15 overflow-hidden"
                          >
                            {tableOptions.map((opt) => (
                              <button
                                type="button"
                                key={opt}
                                onClick={() => {
                                  setForm({ ...form, table: opt });
                                  setTableOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                                  form.table === opt
                                    ? "bg-[var(--color-primary)]/15 text-[var(--color-primary)]"
                                    : "text-gray-300 hover:bg-white/5"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Any special requests? (optional)"
                      rows={2}
                      className={`${inputClass} resize-none`}
                    />

                    {status === "error" && (
                      <p className="text-xs text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover="hover"
                      whileTap="hover"
                      className="relative overflow-hidden w-full mt-1 px-8 py-3.5 cursor-pointer uppercase text-sm font-bold tracking-wider text-white
                      bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
                      shadow-[var(--shadow-glow)] disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      <motion.span
                        className="absolute inset-0 bg-white z-10 origin-center"
                        initial={{ rotate: -90, scale: 0 }}
                        variants={{ hover: { rotate: 0, scale: 1 } }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      />
                      <motion.span
                        className="relative z-20 flex items-center gap-2"
                        variants={{ hover: { color: "#000" } }}
                        transition={{ duration: 0.2 }}
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Confirm booking"
                        )}
                      </motion.span>
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
