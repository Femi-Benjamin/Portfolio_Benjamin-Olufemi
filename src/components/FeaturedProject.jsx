import React from "react";
import { motion } from "framer-motion";
import { IoArrowForward, IoLogoGithub } from "react-icons/io5";
import titan from "../images/titan.png";
import LiquidGlass from "./liquid-glass/LiquidGlass";
import GlassButton from "./liquid-glass/GlassButton";

/**
 * FeaturedProject.jsx
 * Enormous editorial case-study billboard for TITAN LEAP.
 * Gives the portfolio strong product developer credibility rather than simple toy demos.
 */
const FeaturedProject = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent text-white relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Section Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold">
              Featured Case Study
            </span>
          </div>

          {/* Headline & Overview Grid */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
                TITAN LEAP
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-medium mt-2">
                High-Conversion Digital Marketing & Web Experience Platform
              </p>
            </div>

            <div className="flex items-center gap-3">
              {["React", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1.5 rounded-full glass-1-subtle text-cyan-300 border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Enormous Editorial Showcase Frame */}
          <LiquidGlass
            tier="hero"
            glow={true}
            glowColor="rgba(6, 182, 212, 0.25)"
            className="rounded-3xl p-3 sm:p-5 border-white/15 shadow-2xl group overflow-hidden"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={titan}
                alt="Titan Leap Platform"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-103"
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Docked Glass Info Overlay at Bottom */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="glass-2-interactive rounded-2xl p-4 sm:px-6 sm:py-4 border-white/15 max-w-xl">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Engineered to deliver sub-second response times, interactive product demos, and frictionless conversion funnels for next-generation digital campaigns.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <GlassButton
                    href="https://titan-leap-ruddy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    icon={<IoArrowForward />}
                  >
                    View Live Project
                  </GlassButton>

                  <GlassButton
                    href="https://github.com/Femi-Benjamin/Titan-leap"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                    icon={<IoLogoGithub size={18} />}
                  >
                    Source
                  </GlassButton>
                </div>
              </div>
            </div>
          </LiquidGlass>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
