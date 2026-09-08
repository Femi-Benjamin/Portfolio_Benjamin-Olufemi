import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiFramer,
  SiNodedotjs,
  SiGithub,
  SiVite,
  SiFigma,
  SiSupabase,
  SiRedux,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  IoCodeWorkingOutline,
  IoColorPaletteOutline,
  IoServerOutline,
  IoConstructOutline,
  IoAppsOutline,
  IoRepeatOutline,
  IoLayersOutline,
  IoGridOutline,
  IoSparkles,
  IoChevronDown,
} from "react-icons/io5";

/**
 * Skills.jsx
 * Interactive Showcase featuring 4 distinct professional UI concepts:
 * 1. Categorized Bento Grid (Structural engineering clusters)
 * 2. Dual Infinite Marquee (Modern velocity conveyor belts)
 * 3. Interactive Segmented Tabs (Detailed category inspector)
 * 4. Minimal Uniform Grid (Balanced, clean symmetric tile matrix)
 */
const Skills = () => {
  // Set to "tabs" (Segmented Tabs) by default.
  // Other available concepts preserved for future use: "bento" | "marquee" | "grid"
  const [activeConcept, setActiveConcept] = useState("tabs");
  const [activeTab, setActiveTab] = useState("all");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [marqueeHovered, setMarqueeHovered] = useState(false);

  // Set to true anytime you want to re-display the live preview switcher toolbar on the page
  const showConceptSwitcher = false;

  const tools = [
    { name: "React", icon: <SiReact />, color: "#61DAFB", category: "frontend", role: "Component Architecture", level: "Advanced" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF", category: "frontend", role: "SSR & App Router", level: "Advanced" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", category: "frontend", role: "Strict Type Safety", level: "Advanced" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", category: "frontend", role: "Modern ES6+ Engine", level: "Expert" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8", category: "styling", role: "Design Systems", level: "Advanced" },
    { name: "Framer Motion", icon: <SiFramer />, color: "#E10098", category: "styling", role: "Physics & Micro-UX", level: "Advanced" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", category: "styling", role: "Semantic Web", level: "Expert" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6", category: "styling", role: "Responsive Layouts", level: "Expert" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", category: "backend", role: "APIs & Services", level: "Intermediate" },
    { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E", category: "backend", role: "Auth & PostgreSQL", level: "Intermediate" },
    { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC", category: "backend", role: "Global State", level: "Advanced" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF", category: "tools", role: "Lightning Build Tool", level: "Advanced" },
    { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF", category: "tools", role: "Version & CI/CD", level: "Advanced" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E", category: "tools", role: "UI/UX & Prototyping", level: "Proficient" },
  ];

  const categories = [
    {
      id: "frontend",
      title: "Frontend Core",
      tag: "Architecture",
      icon: <IoCodeWorkingOutline className="text-cyan-400 text-lg" />,
      glowColor: "rgba(6, 182, 212, 0.15)",
      border: "hover:border-cyan-400/40",
      tools: tools.filter((t) => t.category === "frontend"),
    },
    {
      id: "styling",
      title: "Styling & Motion",
      tag: "Interaction",
      icon: <IoColorPaletteOutline className="text-pink-400 text-lg" />,
      glowColor: "rgba(236, 72, 153, 0.15)",
      border: "hover:border-pink-400/40",
      tools: tools.filter((t) => t.category === "styling"),
    },
    {
      id: "backend",
      title: "Backend & State",
      tag: "Data Layer",
      icon: <IoServerOutline className="text-emerald-400 text-lg" />,
      glowColor: "rgba(16, 185, 129, 0.15)",
      border: "hover:border-emerald-400/40",
      tools: tools.filter((t) => t.category === "backend"),
    },
    {
      id: "tools",
      title: "Workflow & Tools",
      tag: "Ecosystem",
      icon: <IoConstructOutline className="text-violet-400 text-lg" />,
      glowColor: "rgba(139, 92, 246, 0.15)",
      border: "hover:border-violet-400/40",
      tools: tools.filter((t) => t.category === "tools"),
    },
  ];

  const concepts = [
    { id: "bento", name: "Bento Grid", icon: <IoAppsOutline /> },
    { id: "marquee", name: "Dual Marquee", icon: <IoRepeatOutline /> },
    { id: "tabs", name: "Segmented Tabs", icon: <IoLayersOutline /> },
    { id: "grid", name: "Minimal Grid", icon: <IoGridOutline /> },
  ];

  // Marquee rows
  const marqueeRow1 = tools.slice(0, 7);
  const marqueeRow2 = tools.slice(7);

  // Filtered tools for Concept 3 (Tabs)
  const currentCategoryTools = activeTab === "all" ? tools : tools.filter((t) => t.category === activeTab);
  const tabFilteredTools = activeTab === "all" && !showAllSkills ? currentCategoryTools.slice(0, 6) : currentCategoryTools;

  return (
    <section
      id="skills"
      className="w-full py-20 md:py-28 bg-transparent text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase px-3.5 py-1.5 rounded-full glass-1-subtle border-cyan-500/20 mb-3 inline-block">
            Engineering Toolchain
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            Tools I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Build With</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Curated technologies, frameworks, and workflows leveraged to deliver high-performance digital products.
          </p>
        </motion.div>

        {/* Concept Switcher Toolbar (Preserved for future use - set showConceptSwitcher to true above) */}
        {showConceptSwitcher && (
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-1.5 mb-2.5">
              <IoSparkles className="text-cyan-400 text-xs animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                Live Concept Preview Switcher
              </span>
            </div>
            <div className="inline-flex p-1.5 rounded-full glass-2-interactive border-white/15 shadow-xl flex-wrap justify-center gap-1">
              {concepts.map((concept) => {
                const isActive = activeConcept === concept.id;
                return (
                  <button
                    key={concept.id}
                    onClick={() => setActiveConcept(concept.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_16px_rgba(6,182,212,0.45)]"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <span className="text-sm">{concept.icon}</span>
                    <span>{concept.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CONCEPT 1: CATEGORIZED BENTO GRID                                          */}
        {/* ========================================================================= */}
        {activeConcept === "bento" && (
          <motion.div
            key="concept-bento"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative rounded-3xl p-6 sm:p-7 glass-2-interactive border-white/10 ${cat.border} transition-all duration-500 group overflow-hidden shadow-2xl`}
              >
                {/* Ambient Category Watermark */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                  style={{ background: cat.glowColor }}
                />

                {/* Category Header */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl glass-1-subtle border-white/15 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cat.tag}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-full glass-1-subtle border-cyan-500/20">
                    {cat.tools.length} Tools
                  </span>
                </div>

                {/* Tools Grid within Bento Card */}
                <div className="grid grid-cols-2 gap-3">
                  {cat.tools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="group/tool relative flex items-center gap-3 p-3 rounded-2xl glass-1-subtle border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      {/* Brand Icon with hover glow */}
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover/tool:scale-110"
                        style={{
                          backgroundColor: `${tool.color}15`,
                          color: tool.color,
                        }}
                      >
                        {tool.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-semibold text-white truncate group-hover/tool:text-cyan-300 transition-colors">
                          {tool.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 truncate">
                          {tool.role}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* CONCEPT 2: DUAL INFINITE MARQUEE                                          */}
        {/* ========================================================================= */}
        {activeConcept === "marquee" && (
          <motion.div
            key="concept-marquee"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="relative py-4 overflow-hidden rounded-3xl glass-2-interactive border-white/10 p-6 sm:p-8"
            onMouseEnter={() => setMarqueeHovered(true)}
            onMouseLeave={() => setMarqueeHovered(false)}
          >
            {/* Edge Vignette Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10" />

            <div className="space-y-4 sm:space-y-5">
              {/* Row 1: Scrolling Left */}
              <div className="flex overflow-hidden">
                <motion.div
                  className="flex gap-3 sm:gap-4 flex-nowrap"
                  animate={{
                    x: marqueeHovered ? undefined : ["0%", "-33.333%"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 22,
                      ease: "linear",
                    },
                  }}
                >
                  {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((tool, i) => (
                    <div
                      key={`r1-${tool.name}-${i}`}
                      className="group flex items-center gap-3 px-5 py-3 rounded-2xl glass-1-subtle border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-300 flex-shrink-0 cursor-pointer shadow-sm"
                    >
                      <span
                        className="text-2xl transition-transform duration-300 group-hover:scale-115"
                        style={{ color: tool.color }}
                      >
                        {tool.icon}
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white whitespace-nowrap group-hover:text-cyan-300 transition-colors">
                          {tool.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                          {tool.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 2: Scrolling Right */}
              <div className="flex overflow-hidden">
                <motion.div
                  className="flex gap-3 sm:gap-4 flex-nowrap"
                  animate={{
                    x: marqueeHovered ? undefined : ["-33.333%", "0%"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 22,
                      ease: "linear",
                    },
                  }}
                >
                  {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((tool, i) => (
                    <div
                      key={`r2-${tool.name}-${i}`}
                      className="group flex items-center gap-3 px-5 py-3 rounded-2xl glass-1-subtle border-white/10 hover:border-purple-400/40 hover:bg-white/[0.05] transition-all duration-300 flex-shrink-0 cursor-pointer shadow-sm"
                    >
                      <span
                        className="text-2xl transition-transform duration-300 group-hover:scale-115"
                        style={{ color: tool.color }}
                      >
                        {tool.icon}
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white whitespace-nowrap group-hover:text-purple-300 transition-colors">
                          {tool.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                          {tool.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <span className="text-[11px] font-mono text-slate-400">
                Hover to pause • Seamless infinite conveyor belt
              </span>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* CONCEPT 3: INTERACTIVE SEGMENTED TABS                                     */}
        {/* ========================================================================= */}
        {activeConcept === "tabs" && (
          <motion.div
            key="concept-tabs"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { id: "all", label: "All Stack" },
                { id: "frontend", label: "Frontend Core" },
                { id: "styling", label: "Styling & Motion" },
                { id: "backend", label: "Backend & State" },
                { id: "tools", label: "Workflow & Tools" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowAllSkills(false);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                    activeTab === tab.id
                      ? "glass-2-interactive border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                      : "glass-1-subtle border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Filtered Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {tabFilteredTools.map((tool) => (
                  <motion.div
                    layout
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative p-5 rounded-2xl glass-2-interactive border-white/10 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
                        style={{
                          backgroundColor: `${tool.color}15`,
                          color: tool.color,
                        }}
                      >
                        {tool.icon}
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full glass-1-subtle text-slate-300 border-white/10">
                        {tool.level}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {tool.role}
                    </p>

                    {/* Subtle bottom color glow accent */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: tool.color }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* See More / Show Less Button for All Stack */}
            {activeTab === "all" && tools.length > 6 && (
              <div className="mt-10 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setShowAllSkills((prev) => !prev)}
                  className="px-7 py-3 rounded-full glass-2-interactive border-white/15 text-white text-xs sm:text-sm font-semibold hover:border-cyan-400/50 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{showAllSkills ? "Show Less" : "See More"}</span>
                  <IoChevronDown
                    className={`text-sm transition-transform duration-300 ${
                      showAllSkills ? "rotate-180 text-cyan-400" : "text-slate-400"
                    }`}
                  />
                </motion.button>
              </div>
            )}
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* CONCEPT 4: MINIMAL UNIFORM GRID                                           */}
        {/* ========================================================================= */}
        {activeConcept === "grid" && (
          <motion.div
            key="concept-grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5"
          >
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group relative p-4 rounded-2xl glass-2-interactive border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer shadow-lg overflow-hidden"
              >
                {/* Brand Radial Light on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${tool.color}, transparent 70%)`,
                  }}
                />

                <div
                  className="text-3xl sm:text-4xl mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tool.color }}
                >
                  {tool.icon}
                </div>

                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate w-full">
                  {tool.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 mt-0.5 truncate w-full">
                  {tool.role}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;

