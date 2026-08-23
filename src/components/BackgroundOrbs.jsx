import React from "react";
import { motion } from "framer-motion";

const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Subtle Matrix / Cyber Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* Fluid Liquid Orb 1 - Cyan Top Left */}
      <motion.div
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -60, 50, -40, 0],
          scale: [1, 1.15, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/25 to-blue-600/20 rounded-full blur-[110px] -top-32 -left-32 animate-fluid-blob"
      />

      {/* Fluid Liquid Orb 2 - Purple / Violet Right */}
      <motion.div
        animate={{
          x: [0, -70, 40, -90, 0],
          y: [0, 80, -50, 70, 0],
          scale: [1, 1.2, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-[550px] h-[550px] bg-gradient-to-br from-purple-600/20 to-pink-600/15 rounded-full blur-[130px] top-1/4 -right-40 animate-fluid-blob-slow"
      />

      {/* Fluid Liquid Orb 3 - Deep Electric Blue Center Bottom */}
      <motion.div
        animate={{
          x: [0, 60, -50, 40, 0],
          y: [0, -70, 60, -50, 0],
          scale: [0.95, 1.1, 1, 1.2, 0.95],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] bg-gradient-to-tl from-cyan-600/15 via-blue-700/20 to-purple-800/15 rounded-full blur-[140px] bottom-10 left-1/3 -translate-x-1/2 animate-fluid-blob"
      />

      {/* Fluid Liquid Orb 4 - Emerald / Teal Accent Top Center */}
      <motion.div
        animate={{
          x: [0, -40, 30, -20, 0],
          y: [0, 50, -40, 30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[100px] top-0 left-1/2 -translate-x-1/2"
      />

      {/* Ambient Liquid Sheen Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/70" />
    </div>
  );
};

export default BackgroundOrbs;
