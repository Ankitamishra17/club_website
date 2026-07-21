

// "use client";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen text-white overflow-hidden">
//       {/* BACKGROUND VIDEO */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src="/party-video.mp4" type="video/mp4" />
//       </video>

//       <div className="min-h-screen text-white bg-cover bg-center relative pt-14">
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen">
//           {/* Heading small */}
//           <h4 className="text-md lg:text-xl md:text-2xl font-semibold tracking-widest">
//             LET'S DANCE & PARTY
//           </h4>

//           {/* Main heading */}
//           <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-4">
//             GOOD VIBES, <br /> HERE AT CLUB X
//           </h1>

//           {/* Paragraph */}
//           <p className="font-body mt-6 text-gray-300 max-w-xl">
//             Presenting Club X, the ultimate Night Club Webflow Template
//           </p>

//           {/* Buttons */}
//           <div className="mt-6 flex flex-col sm:flex-row gap-4">
//             <motion.button
//               className="relative overflow-hidden cursor-pointer mt-4  lg:mt-8 px-8 py-4 uppercase text-base font-bold tracking-wider text-white
//               bg-[linear-gradient(to_right,var(--color-gradient-left),var(--color-gradient-right))]
//               shadow-[var(--shadow-glow)]"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover="hover"
//             >
//               <motion.span
//                 className="absolute inset-0 bg-white z-10 origin-center"
//                 initial={{ rotate: -90, scale: 0 }}
//                 variants={{ hover: { rotate: 0, scale: 1 } }}
//                 transition={{ duration: 0.5 }}
//               />

//               <motion.span
//                 className="relative z-20"
//                 variants={{ hover: { color: "#000" } }}
//               >
//                 <h2>BUY TICKETS</h2>
//               </motion.span>
//             </motion.button>

//             <motion.button
//               className="relative overflow-hidden cursor-pointer mt-4  lg:mt-8 px-8 py-4 uppercase text-base font-bold tracking-wider text-white
//               bg-transparent border border-white"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover="hover"
//             >
//               <motion.span
//                 className="absolute inset-0 bg-white z-10 origin-center"
//                 initial={{ rotate: -90, scale: 0 }}
//                 variants={{ hover: { rotate: 0, scale: 1 } }}
//                 transition={{ duration: 0.5 }}
//               />

//               <motion.span
//                 className="relative z-20"
//                 variants={{ hover: { color: "#000" } }}
//               >
//                 <h2> WATCH VIDEOS</h2>
//               </motion.span>
//             </motion.button>
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/party-video.mp4" type="video/mp4" />
      </video>

      <div className="min-h-screen text-white bg-cover bg-center relative pt-14">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen">
          {/* Heading small */}
          <h4 className="text-md lg:text-xl md:text-2xl font-semibold tracking-widest">
            LET'S DANCE & PARTY
          </h4>

          {/* Main heading */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-4">
            GOOD VIBES, <br /> HERE AT CLUB X
          </h1>

          {/* Paragraph */}
          <p className="font-body mt-6 text-gray-300 max-w-xl">
            Presenting Club X, the ultimate Night Club Webflow Template
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <MotionLink
              href="/contact"
              className="relative overflow-hidden cursor-pointer mt-4 lg:mt-8 px-8 py-4 uppercase text-base font-bold tracking-wider text-white inline-block
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
                transition={{ duration: 0.5 }}
              />

              <motion.span
                className="relative z-20"
                variants={{ hover: { color: "#000" } }}
              >
                <h2>BUY TICKETS</h2>
              </motion.span>
            </MotionLink>

            <MotionLink
              href="/gallery"
              className="relative overflow-hidden cursor-pointer mt-4 lg:mt-8 px-8 py-4 uppercase text-base font-bold tracking-wider text-white inline-block
              bg-transparent border border-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              whileTap="hover"
            >
              <motion.span
                className="absolute inset-0 bg-white z-10 origin-center"
                initial={{ rotate: -90, scale: 0 }}
                variants={{ hover: { rotate: 0, scale: 1 } }}
                transition={{ duration: 0.5 }}
              />

              <motion.span
                className="relative z-20"
                variants={{ hover: { color: "#000" } }}
              >
                <h2>WATCH VIDEOS</h2>
              </motion.span>
            </MotionLink>
          </div>
        </section>
      </div>
    </section>
  );
}
