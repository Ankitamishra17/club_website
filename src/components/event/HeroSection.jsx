"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

/**
 * Fonts used (add once, e.g. in app/layout.tsx or globals.css):
 *   Bebas Neue  -> display / headline (neon signage)
 *   Space Mono  -> ticket data (eyebrow, door info, footer strip)
 *   Inter       -> body copy
 *
 *   @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Inter:wght@400;500&display=swap');
 *
 * Duotone is pink + warm amber only (no blue). All colors read from your
 * existing theme vars first and fall back to this palette if unset.
 *
 * RESPONSIVE NOTES
 * - Uses 100dvh (with a 100vh fallback) so mobile browser chrome doesn't
 *   clip content.
 * - Headline uses clamp() instead of raw vw units so it can't blow up on
 *   ultra-wide/4K screens or shrink illegibly on very narrow ones (<360px).
 * - A max-w wrapper keeps the content block from stretching edge-to-edge
 *   on very large monitors.
 * - Ticket stub and door-info strip can wrap onto multiple lines instead
 *   of overflowing on small screens.
 * - Fixed a missing closing brace in .neon-fill that was breaking the
 *   stylesheet.
 */

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section className="relative min-h-[100svh] min-h-[100dvh] text-white overflow-hidden">
      <style>{`
        .duotone-overlay {
          background:
            radial-gradient(circle at 30% 20%, rgba(255,46,154,0.25), transparent 55%),
            // radial-gradient(circle at 75% 75%, rgba(245,166,35,0.16), transparent 50%),
            rgba(6,4,12,0.72);
        }
        .grain::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
          background-image: repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 3px);
          mix-blend-mode: overlay;
        }

        /* Ticket framing */
        .ticket-perforation {
          background-image: repeating-linear-gradient(90deg, rgba(255,255,255,0.35) 0 6px, transparent 6px 14px);
          height: 1px;
        }
        .ticket-stub {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.6rem;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
          border-radius: 999px;
          padding: 0.4rem 0.85rem;
          max-width: 100%;
        }
        .ticket-stub .divider {
          width: 1px;
          align-self: stretch;
          background-image: repeating-linear-gradient(180deg, rgba(255,255,255,0.4) 0 4px, transparent 4px 8px);
        }
        .live-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 999px;
          background: var(--color-brand-pink, #ec1a63);
          box-shadow: 0 0 6px rgba(236,26,99,0.9);
        }

        /* Neon type treatments (pink + amber, no blue) */
        .neon-fill {
          color: var(--color-primary, #ff2e9a);
        }
        .neon-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--color-amber, #fff);
          filter: drop-shadow(0 0 8px rgba(245,166,35,0.55));
        }
        @supports not (-webkit-text-stroke: 1px #fff) {
         
        }

        /* Fluid headline sizing: readable at 320px, capped on ultra-wide */
        .neon-headline {
          font-size: clamp(2.5rem, 6vw + 1rem, 6rem);
        }

        /* Buttons */
        .btn-glow-pink:hover,
        .btn-glow-pink:focus-visible {
          box-shadow: 0 0 18px rgba(236,26,99,0.65), 0 0 46px rgba(236,26,99,0.35);
        }
        .btn-ghost-amber:hover,
        .btn-ghost-amber:focus-visible {
          border-color: var(--color-amber, #f5a623);
          box-shadow: 0 0 16px rgba(245,166,35,0.3);
        }
        .btn-glow-pink:focus-visible,
        .btn-ghost-amber:focus-visible {
          outline: 2px solid rgba(255,255,255,0.85);
          outline-offset: 3px;
        }

        @media (max-width: 360px) {
          .neon-headline {
            font-size: clamp(2.1rem, 9vw, 2.75rem);
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div
        className="relative flex min-h-[100svh] min-h-[100dvh] flex-col bg-cover bg-center grain"
        style={{
          backgroundImage:
            "url('/banner7.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <div className="absolute inset-0 duotone-overlay" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-4 pt-24 pb-8 xs:px-5 sm:px-8 sm:pt-32 sm:pb-10 md:px-12 md:pt-24 lg:px-16 xl:px-16">
          {/* TICKET STUB — static, no motion */}
          <motion.div {...fadeUp()} className="ticket-stub w-fit max-w-full">
            <span className="live-dot" aria-hidden />
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/90 xs:text-[10px] sm:text-xs">
Upcoming Events · Reserve Early            </span>
          </motion.div>

          {/* HEADLINE — simple fade, no flicker */}
          <h1 className="neon-headline font-display mt-4 max-w-[20ch] break-words uppercase leading-[0.95] tracking-wide sm:mt-5">
            <motion.span {...fadeUp(0.1)} className="block text-white">
               Every Night
            </motion.span>
            <motion.span {...fadeUp(0.18)} className="neon-fill block">
          A New
            </motion.span>
            <motion.span {...fadeUp(0.26)} className="neon-outline block">
            Experience
            </motion.span>
          </h1>

          <motion.p {...fadeUp(0.34)} className="mt-4 max-w-xs text-sm text-gray-300 sm:mt-5 sm:max-w-md sm:text-base md:max-w-lg">
  Discover unforgettable nights featuring internationally inspired DJs,
  live music, themed parties, sports screenings, and signature celebrations.
  Experience the energy that makes every event at Chicane truly exceptional.          </motion.p>

          {/* CTAs */}
          <div className="mt-7 flex w-full max-w-xs flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:gap-4">
            <MotionLink
              href="/contact"
              className="btn-glow-pink relative inline-flex items-center justify-center gap-2 overflow-hidden bg-[var(--color-brand-pink,#ec1a63)] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-shadow duration-200 sm:px-7 sm:py-3.5"
              whileHover={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
                Reserve Your Spot
              <span aria-hidden>→</span>
            </MotionLink>

            <MotionLink
              href="/gallery"
              className="btn-ghost-amber relative inline-flex items-center justify-center gap-2 overflow-hidden border border-white/40 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-[box-shadow,border-color] duration-200 sm:px-7 sm:py-3.5"
              whileHover={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Visit Gallery
            </MotionLink>
          </div>
        </div>

        {/* TICKET STUB — bottom perforation, door info (static) */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pb-5 xs:px-5 sm:px-8 sm:pb-6 md:px-12 lg:px-16 xl:px-24">
          <div className="ticket-perforation w-full" aria-hidden />
          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/60 xs:text-[10px] sm:mt-4 sm:text-xs sm:tracking-[0.2em]">
            <span>Live DJ</span>
            <span className="text-white/30">·</span>
            <span>Weekly Theme Nights</span>
            <span className="text-white/30">·</span>
            <span>VIP Experiences</span>
          </p>
        </div>
      </div>
    </section>
  );
}