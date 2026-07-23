"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Phone
    if (!form.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    // Message
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <section className="bg-[var(--color-dark)] text-white py-28 px-6 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative order-2 md:order-1"
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1683134058615-550b2d7c5381?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact"
            width={600}
            height={700}
            className=" object-cover w-full h-[600px]"
          />

          {/* glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.25),transparent)] blur-2xl opacity-60" />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 order-1 md:order-2 mb-8 md:mb-0"
        >
          {/* HEADER */}
          <p className="text-[var(--color-primary)] uppercase tracking-widest text-sm">
            CONTACT US
          </p>

          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-extrabold mt-4">
            GET IN TOUCH
          </h2>

          {/* FORM */}
          <div className="mt-8 space-y-6">
            {/* NAME */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10  px-12 py-3 outline-none
                focus:border-[var(--color-primary)] transition"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10  px-12 py-3 outline-none
                focus:border-[var(--color-primary)] transition"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* PHONE */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10  px-12 py-3 outline-none
                focus:border-[var(--color-primary)] transition"
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400" />
              <textarea
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10  px-12 py-3 outline-none
                focus:border-[var(--color-primary)] transition resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <motion.button
              onClick={validate}
              className="relative overflow-hidden w-full mt-4 px-8 py-4 uppercase text-sm font-bold tracking-wider
              bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
              shadow-[var(--shadow-glow)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
            >
              {/* animated layer */}
              <motion.span
                className="absolute inset-0 bg-white z-10 origin-center"
                initial={{ rotate: -90, scale: 0 }}
                variants={{
                  hover: { rotate: 0, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              />

              <motion.span
                className="relative z-20"
                variants={{
                  hover: { color: "#000" },
                }}
              >
                SEND MESSAGE
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
