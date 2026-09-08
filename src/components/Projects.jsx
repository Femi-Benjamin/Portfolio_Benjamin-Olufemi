import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoGithub, IoArrowForward } from "react-icons/io5";
import { Projects as ProjectsData } from "../data";
import LiquidGlass from "./liquid-glass/LiquidGlass";
import GlassPill from "./liquid-glass/GlassPill";

/**
 * Projects.jsx
 * Editorial project showcase.
 * Features:
 * - Image dominates each card (aspect-[16/10])
 * - Docked Liquid Glass 2 information overlay over the bottom
 * - Responsive hover: image scales 1.03, glass panel lifts 4px, arrow translates →
 * - Filter pills with AnimatePresence fluid fade/scale
 */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const filters = ["ALL", "WEB3", "FRONTEND", "FULL STACK"];

  const filterProject = (project) => {
    if (activeFilter === "ALL") return true;
    if (project.category) {
      return project.category.toUpperCase() === activeFilter;
    }
    const searchString = `${project.name} ${project.techs}`.toLowerCase();

    if (activeFilter === "WEB3") {
      return (
        searchString.includes("web3") ||
        searchString.includes("crypto") ||
        searchString.includes("blockchain")
      );
    }
    if (activeFilter === "FRONTEND") {
      return (
        searchString.includes("react") ||
        searchString.includes("tailwind") ||
        searchString.includes("framer") ||
        searchString.includes("ui")
      );
    }
    if (activeFilter === "FULL STACK") {
      return (
        searchString.includes("firebase") ||
        searchString.includes("mysql") ||
        searchString.includes("node") ||
        searchString.includes("chakra")
      );
    }
    return true;
  };

  const filtered = ProjectsData.filter(filterProject);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section
      id="projects"
      className="w-full py-24 md:py-32 bg-transparent text-white relative"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase px-3.5 py-1.5 rounded-full glass-1-subtle border-cyan-500/20 mb-3 inline-block">
            Engineering Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Works</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 mx-auto rounded-full mt-4" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Editorial showcase of decentralized applications, high-performance interfaces, and responsive web systems.
          </p>
        </motion.div>

        {/* Filter Pills with Liquid Glass 1 */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-14">
          {filters.map((filter) => (
            <GlassPill
              key={filter}
              active={activeFilter === filter}
              onClick={() => {
                setActiveFilter(filter);
                setShowAll(false);
              }}
              size="md"
            >
              {filter}
            </GlassPill>
          ))}
        </div>

        {/* Editorial Project Showcase Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl"
              >
                {/* 1. Dominant Project Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  {/* Sheen & Depth Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                {/* 2. Docked Liquid Glass Information Overlay (Selective Glass) */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <motion.div
                    className="transition-transform duration-300 group-hover:-translate-y-1"
                  >
                    <LiquidGlass
                      tier="interactive"
                      glow={true}
                      glowColor="rgba(6, 182, 212, 0.2)"
                      className="rounded-2xl p-4 sm:p-5 border-white/15"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate group-hover:text-cyan-300 transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-xs font-mono text-slate-400 truncate">
                            {project.techs}
                          </p>
                        </div>

                        {/* Interactive Launch Link Icons */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.name} source code`}
                              className="w-9 h-9 rounded-xl glass-1-subtle border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 transition-all hover:scale-105"
                            >
                              <IoLogoGithub size={18} />
                            </a>
                          )}
                          {project.livelink && (
                            <a
                              href={project.livelink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.name} live platform`}
                              className="w-9 h-9 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.4)] hover:shadow-[0_0_18px_rgba(6,182,212,0.6)] transition-all hover:scale-105"
                            >
                              <IoArrowForward size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          )}
                        </div>
                      </div>
                    </LiquidGlass>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Show More Button */}
        {filtered.length > 6 && (
          <div className="mt-14 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowAll((s) => !s)}
              className="px-7 py-3.5 rounded-full glass-2-interactive border-white/15 text-white text-sm font-semibold hover:border-cyan-400/50 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2"
            >
              {showAll
                ? "Show Less"
                : `Explore All (${filtered.length}) Projects`}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
