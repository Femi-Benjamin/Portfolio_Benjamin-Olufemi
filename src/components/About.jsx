import React from "react";
import { motion } from "framer-motion";
import ben from "../images/ben.jpg";
import { IoCodeSlashOutline, IoLayersOutline, IoSparklesOutline } from "react-icons/io5";
import CountUp from "./animations/CountUp";
import LiquidGlass from "./liquid-glass/LiquidGlass";

/**
 * About.jsx
 * High-credibility introduction section.
 * - Clean portrait image with subtle glow (NOT trapped inside a glass box)
 * - Three floating Liquid Glass credibility cards with animated numeric counters (0 -> 3.5, 0 -> 20, 0 -> 15)
 * - Clear editorial typography
 */
const About = () => {
  const stats = [
    {
      target: 3.5,
      suffix: "+",
      label: "Years Experience",
      sublabel: "Frontend & Web3",
      icon: <IoCodeSlashOutline className="text-cyan-400" />,
    },
    {
      target: 20,
      suffix: "+",
      label: "Projects Built",
      sublabel: "DeFi & Web Apps",
      icon: <IoLayersOutline className="text-purple-400" />,
    },
    {
      target: 15,
      suffix: "+",
      label: "Global Clients",
      sublabel: "US, Qatar, Nigeria",
      icon: <IoSparklesOutline className="text-sky-400" />,
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-24 md:py-32 bg-transparent text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase px-3.5 py-1.5 rounded-full glass-1-subtle border-cyan-500/20 mb-3 inline-block">
            Engineering Credibility
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Benjamin</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Main Content: Left Image with depth + Right Editorial & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Clean Image + Subtle Radial Glow + Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Ambient Background Glow Behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 rounded-3xl blur-2xl -z-10" />

            {/* Clean Portrait Frame (Image is clean, not trapped in a heavy glass box) */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={ben}
                alt="Benjamin Olufemi"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle Bottom Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Name Badge Over Bottom Edge */}
              <div className="absolute bottom-4 left-4 right-4">
                <LiquidGlass
                  tier="interactive"
                  className="rounded-2xl p-3.5 border-white/15"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        Benjamin Olufemi
                      </h3>
                      <p className="text-xs text-cyan-300 font-mono">
                        Frontend & Web3 Architect
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </div>
                </LiquidGlass>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Three Liquid Glass Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Crafting modern, reliable web applications that scale.
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I'm a Frontend & Web3 engineer dedicated to bridging rigorous software engineering with fluid, Apple-standard design fidelity. Over the last 3.5+ years, I've built mission-critical interfaces for international clients across Upwork, healthcare platforms, and Web3 ecosystems.
              </p>
              <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed">
                My architectural philosophy centers on clean modularity, micro-interaction craftsmanship, optimized Core Web Vitals, and responsive layouts that perform seamlessly across all screens.
              </p>
            </div>

            {/* Three Liquid Glass Statistics Cards with Animated Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {stats.map((stat, idx) => (
                <LiquidGlass
                  key={idx}
                  tier="interactive"
                  glow={true}
                  glowColor="rgba(6, 182, 212, 0.15)"
                  className="rounded-2xl p-5 border-white/10 hover:border-cyan-400/40 transition-all duration-300 group flex flex-col justify-between min-h-[120px]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      <CountUp target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {stat.sublabel}
                    </div>
                  </div>
                </LiquidGlass>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
