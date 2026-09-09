import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { IoArrowForward, IoMailOutline } from "react-icons/io5";
import GlassButton from "./liquid-glass/GlassButton";
import LiquidGlass from "./liquid-glass/LiquidGlass";

const Hero = () => {
  // Subtle pointer parallax (2-8px)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-28 pb-20"
    >
      {/* Atmospheric Background: Cyber Particle Grid & Fluid Radial Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#38bdf8_1.5px,transparent_1.5px)] [background-size:36px_36px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-sky-500/10 to-transparent rounded-full blur-[140px] animate-fluid-blob" />
      </div>

      {/* Atmospheric Ambient Glow (Tracks cursor subtly by 2-8px on desktop) */}
      {/* <motion.div
        style={{ x: ambientX, y: ambientY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none hidden md:block"
      />
      <motion.div
        style={{ x: ambientY, y: ambientX }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none hidden md:block"
      /> */}

      {/* Mobile Ambient Glow */}
      <div className="absolute inset-0 z-0 block md:hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/15 blur-3xl rounded-full" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 flex flex-col items-center justify-center text-center">
        {/* 0.2s: Status Pill (Selective Liquid Glass) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.2,
          }}
          className="mb-6"
        >
          <LiquidGlass
            tier="subtle"
            glow={true}
            glowColor="rgba(16, 185, 129, 0.2)"
            className="inline-block rounded-full border-emerald-500/30 hover:border-emerald-400/50 transition-colors"
          >
            <div className="flex items-center gap-2.5 px-4 py-1.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-200 uppercase font-mono leading-none">
                Available For Opportunities
              </span>
            </div>
          </LiquidGlass>
        </motion.div>

        {/* 0.3s: Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 26,
            delay: 0.3,
          }}
          className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase mb-3"
        >
          Frontend & Web3 Developer
        </motion.p>

        {/* 0.4s: Main Name Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 24,
            delay: 0.4,
          }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] mb-6"
        >
          Benjamin{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-200 to-purple-200">
            Olufemi
          </span>
        </motion.h1>

        {/* 0.55s: Value Proposition Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.55,
          }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Building high-performance digital experiences for the modern web.
          Specializing in pixel-perfect{" "}
          <span className="text-cyan-300 font-semibold">React</span>, scalable{" "}
          <span className="text-purple-300 font-semibold">Next.js</span>, and
          frictionless{" "}
          <span className="text-sky-300 font-semibold">Web3 UX</span>.
        </motion.p>

        {/* 0.75s: Selective Liquid Glass CTA Button Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 24,
            delay: 0.75,
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <GlassButton
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            variant="primary"
            size="lg"
            icon={<IoArrowForward className="text-lg" />}
            className="w-full sm:w-auto shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] cursor-pointer"
          >
            View Projects
          </GlassButton>

          <GlassButton
            href="#contacts"
            onClick={(e) => scrollToSection(e, "contacts")}
            variant="secondary"
            size="lg"
            icon={<IoMailOutline className="text-lg text-cyan-400" />}
            className="w-full sm:w-auto cursor-pointer"
          >
            Let's Talk
          </GlassButton>
        </motion.div>
      </div>

      {/* Scroll Down Indicator (Mouse Animation Only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center pointer-events-none"
      >
        <div className="w-5 h-8 rounded-full border border-slate-700 glass-1-subtle flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#22d3ee]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
