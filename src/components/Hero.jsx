import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { IoArrowForward, IoMailOutline } from "react-icons/io5";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(typeof window !== "undefined" && window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-24 pb-16"
    >
      {/* Background Spline 3D Scene (Desktop Only - Zero Mobile Lag) */}
      {isDesktop && (
        <div className="absolute inset-0 z-0 hidden md:flex items-center justify-center w-full h-full overflow-hidden pointer-events-auto">
          <div className="w-[100vw] h-[100vh] max-w-none flex items-center justify-center -translate-y-[4vh]">
            <Spline
              scene="https://prod.spline.design/Z31F8KCKhr798Pgt/scene.splinecode"
              className="w-full h-full flex items-center justify-center"
            />
          </div>
        </div>
      )}

      {/* Mobile-Only Static Radiant Glow (Lightweight, Zero WebGL) */}
      <div className="absolute inset-0 z-0 block md:hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 blur-3xl rounded-full" />
      </div>

      {/* Ambient Gradient Glow Spotlights (Desktop) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center pointer-events-auto">
          {/* Liquid Glass Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass border border-cyan-500/30 mb-8 shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] hover:border-cyan-400/50 transition-colors"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
              Available for New Projects
            </span>
            <span className="text-xs font-mono text-cyan-400/80 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              {new Date().getFullYear()}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Benjamin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500">
              Olufemi
            </span>
          </motion.h1>

          {/* Subtitle / Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            I build exceptional digital experiences through code, design, and
            thoughtful engineering. Specializing in highly performant{" "}
            <span className="text-cyan-300 font-semibold">React</span>,{" "}
            <span className="text-purple-300 font-semibold">Next.js</span>,
            modern <span className="text-blue-300 font-semibold">UI</span>{" "}
            engineering, and scalable product architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-bold rounded-2xl shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_0px_rgba(6,182,212,0.7)] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Projects</span>
              <IoArrowForward className="text-lg group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contacts"
              className="w-full sm:w-auto px-8 py-4 liquid-glass text-slate-200 font-bold rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:text-white transition-all shadow-lg shadow-black/40 flex items-center justify-center gap-2"
            >
              <IoMailOutline className="text-lg text-cyan-400" />
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Pill Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-700/80 liquid-glass-subtle flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#22d3ee]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
