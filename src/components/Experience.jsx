import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Experience as ExperienceData } from "../data";
import {
  IoLocationOutline,
  IoCalendarOutline,
  IoCheckmarkCircle,
  IoBriefcaseOutline,
  IoSparkles,
} from "react-icons/io5";

const Experience = () => {
  const data =
    Array.isArray(ExperienceData) && ExperienceData.length > 0
      ? ExperienceData
      : [];
  const [selectedId, setSelectedId] = useState(data[0]?.id || 1);
  const activeExp = data.find((item) => item.id === selectedId) ||
    data[0] || {
      id: 1,
      job: "Freelance",
      title: "UPWORK",
      role: "Frontend Engineer",
      date: "2021 - Present",
      location: "Nigeria",
      description:
        "Frontend Engineer delivering high-performance modern web applications.",
      highlights: [],
      skills: ["React.js", "Next.js", "TypeScript"],
    };

  return (
    <section
      id="experience"
      className="w-full py-24 bg-transparent text-white relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase px-3.5 py-1.5 rounded-full liquid-glass-subtle border border-cyan-500/20 mb-3 inline-block">
            Career Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 mx-auto rounded-full mt-4"></div>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-base">
            Click on each organization to explore key achievements,
            responsibilities, and technologies used.
          </p>
        </motion.div>

        {/* Master-Detail Interactive Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Organization Switcher Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
            {data.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative text-left p-5 rounded-2xl transition-all duration-300 flex-shrink-0 w-[260px] lg:w-full border ${
                    isSelected
                      ? "liquid-glass-glow border-cyan-400/50 shadow-[0_0_30px_-5px_rgba(6,182,212,0.35)]"
                      : "liquid-glass-subtle border-white/[0.06] hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  {/* Glowing Active indicator strip */}
                  {isSelected && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute left-0 top-3 bottom-3 w-1.5 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-r-full shadow-[0_0_12px_#22d3ee]"
                    />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                      <IoBriefcaseOutline />
                      {item.job}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded-md bg-white/[0.04]">
                      {item.date}
                    </span>
                  </div>

                  <h3
                    className={`text-base font-bold tracking-tight transition-colors ${
                      isSelected ? "text-white text-glow" : "text-slate-300"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 truncate">
                    {item.role || item.job}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Detailed Liquid Glass Showcase Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="liquid-glass rounded-3xl p-8 sm:p-10 border border-white/10 shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] relative overflow-hidden"
              >
                {/* Ambient Card Watermark / Glow */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/15 blur-3xl rounded-full pointer-events-none" />

                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        {activeExp.job}
                      </span>
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <IoCalendarOutline className="text-cyan-400" />
                        {activeExp.date}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {activeExp.role || activeExp.title}{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        @ {activeExp.title}
                      </span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium px-3.5 py-1.5 rounded-full liquid-glass-subtle self-start border border-white/[0.06]">
                    <IoLocationOutline className="text-cyan-400 text-sm" />
                    <span>{activeExp.location}</span>
                  </div>
                </div>

                {/* Overview Text */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-6 mb-6">
                  {activeExp.description}
                </p>

                {/* Bullet Highlights */}
                {activeExp.highlights && activeExp.highlights.length > 0 && (
                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
                      <IoSparkles className="text-cyan-400" />
                      Key Contributions & Impact
                    </h4>
                    <div className="space-y-2.5">
                      {activeExp.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed"
                        >
                          <IoCheckmarkCircle className="text-cyan-400 text-lg flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Tags */}
                {activeExp.skills && (
                  <div className="pt-6 border-t border-white/[0.08]">
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-3">
                      Core Technologies & Competencies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeExp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-3 py-1.5 rounded-xl liquid-glass-subtle text-cyan-300 border border-cyan-500/20 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
