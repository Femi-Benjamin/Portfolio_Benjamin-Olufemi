import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-slate-950"
    >
      {/* Animated Gradient Orbs Background - Only on Desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden lg:block">
        {/* Orb 1 - Cyan */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 -top-20 -left-20"
        />

        {/* Orb 2 - Purple */}
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 120, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20 -bottom-20 -right-20"
        />

        {/* Orb 3 - Blue */}
        <motion.div
          animate={{
            x: [0, 120, -100, 0],
            y: [0, 80, -80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-15 top-1/2 right-1/4"
        />

        {/* Orb 4 - Cyan (accent) */}
        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, -120, 60, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-64 h-64 bg-cyan-400 rounded-full blur-3xl opacity-10 bottom-1/4 left-1/3"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/30 to-slate-950/50" />
      </div>

      {/* Background Spline - Only on Mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Spline scene="https://prod.spline.design/Z31F8KCKhr798Pgt/scene.splinecode" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center px-4 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6"
          >
            <span className="py-2 px-4 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-700 text-cyan-400 text-sm font-medium tracking-wider uppercase">
              Portfolio 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            Benjamin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Olufemi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Crafting immersive digital experiences with code and creativity.
            Specializing in React, Next.js, and modern UI design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10"
            >
              View Projects
            </a>
            <a
              href="#contacts"
              className="px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-700 text-white font-bold rounded-full hover:bg-slate-800/50 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

// import React from "react";
// import Spline from "@splinetool/react-spline";
// import { motion } from "framer-motion";

// const Hero = () => {
//     return (
//         <section
//             id="home"
//             className="relative w-full h-screen overflow-hidden bg-slate-950"
//         >
//             {/* Background Spline - Only on Mobile */}
//             <div className="absolute inset-0 z-0 md:hidden">
//                 <Spline scene="https://prod.spline.design/Z31F8KCKhr798Pgt/scene.splinecode" />
//             </div>

//             {/* Overlay Content */}
//             <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
//                 <div className="text-center px-4 pointer-events-auto">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.5 }}
//                         className="mb-6"
//                     >
//                         <span className="py-2 px-4 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-700 text-cyan-400 text-sm font-medium tracking-wider uppercase">
//                             Portfolio 2025
//                         </span>
//                     </motion.div>

//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.7 }}
//                         className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
//                     >
//                         Benjamin{" "}
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
//                             Olufemi
//                         </span>
//                     </motion.h1>

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.9 }}
//                         className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
//                     >
//                         Crafting immersive digital experiences with code and creativity.
//                         Specializing in React, Next.js, and modern UI design.
//                     </motion.p>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 1.1 }}
//                         className="flex flex-col sm:flex-row items-center justify-center gap-4"
//                     >
//                         <a
//                             href="#projects"
//                             className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10"
//                         >
//                             View Projects
//                         </a>
//                         <a
//                             href="#contacts"
//                             className="px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-700 text-white font-bold rounded-full hover:bg-slate-800/50 transition-colors"
//                         >
//                             Contact Me
//                         </a>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Scroll Indicator */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 2, duration: 1 }}
//                 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
//             >
//                 <span className="text-xs uppercase tracking-widest">Scroll</span>
//                 <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
//                     <motion.div
//                         animate={{ y: [0, 12, 0] }}
//                         transition={{ repeat: Infinity, duration: 1.5 }}
//                         className="w-1 h-1 bg-cyan-400 rounded-full"
//                     />
//                 </div>
//             </motion.div>
//         </section>
//     );
// };

// export default Hero;

// import React from "react";
// import Spline from "@splinetool/react-spline";
// import { motion } from "framer-motion";

// const Hero = () => {
//     return (
//         <section id="home" className="relative w-full h-screen overflow-hidden bg-slate-950">
//             {/* Background Spline - Absolute positioning to cover full screen */}
//             <div className="absolute inset-0 z-0">
//                 <Spline scene="https://prod.spline.design/Z31F8KCKhr798Pgt/scene.splinecode" />
//             </div>

//             {/* Overlay Content */}
//             <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
//                 <div className="text-center px-4 pointer-events-auto">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.5 }}
//                         className="mb-6"
//                     >
//                         <span className="py-2 px-4 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-700 text-cyan-400 text-sm font-medium tracking-wider uppercase">
//                             Portfolio 2025
//                         </span>
//                     </motion.div>

//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.7 }}
//                         className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
//                     >
//                         Benjamin <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Olufemi</span>
//                     </motion.h1>

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.9 }}
//                         className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
//                     >
//                         Crafting immersive digital experiences with code and creativity.
//                         Specializing in React, Next.js, and modern UI design.
//                     </motion.p>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 1.1 }}
//                         className="flex flex-col sm:flex-row items-center justify-center gap-4"
//                     >
//                         <a
//                             href="#projects"
//                             className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10"
//                         >
//                             View Projects
//                         </a>
//                         <a
//                             href="#contacts"
//                             className="px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-700 text-white font-bold rounded-full hover:bg-slate-800/50 transition-colors"
//                         >
//                             Contact Me
//                         </a>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Scroll Indicator */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 2, duration: 1 }}
//                 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
//             >
//                 <span className="text-xs uppercase tracking-widest">Scroll</span>
//                 <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
//                     <motion.div
//                         animate={{ y: [0, 12, 0] }}
//                         transition={{ repeat: Infinity, duration: 1.5 }}
//                         className="w-1 h-1 bg-cyan-400 rounded-full"
//                     />
//                 </div>
//             </motion.div>
//         </section>
//     );
// };

// export default Hero;
