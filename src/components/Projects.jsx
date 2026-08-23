import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import { Projects as ProjectsData } from "../data";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web3 / Crypto", "Full Stack", "Frontend & UI"];

  const filterProjects = (project) => {
    if (activeCategory === "All") return true;
    const techsLower = (project.techs + " " + project.name).toLowerCase();
    if (activeCategory === "Web3 / Crypto") {
      return techsLower.includes("web3") || techsLower.includes("vault") || techsLower.includes("crypto") || techsLower.includes("finance");
    }
    if (activeCategory === "Full Stack") {
      return techsLower.includes("firebase") || techsLower.includes("mysql") || techsLower.includes("supabase") || techsLower.includes("chakra");
    }
    if (activeCategory === "Frontend & UI") {
      return techsLower.includes("react") || techsLower.includes("tailwind") || techsLower.includes("framer");
    }
    return true;
  };

  const projectsList = Array.isArray(ProjectsData) ? ProjectsData : [];
  const filteredProjects = projectsList.filter(filterProjects);
  const displayed = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="w-full py-24 bg-transparent text-white relative"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase px-3.5 py-1.5 rounded-full liquid-glass-subtle border border-cyan-500/20 mb-3 inline-block">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            Explore a curated selection of decentralized platforms, SaaS applications, and interactive web tools.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_-3px_rgba(6,182,212,0.5)] border border-white/20 scale-105"
                  : "liquid-glass text-slate-300 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {displayed.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="liquid-glass rounded-3xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] group flex flex-col justify-between"
              >
                {/* Image Container with Specular Sheen */}
                <div className="relative h-52 overflow-hidden bg-slate-900/60">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  {/* Hover Glass Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/60 backdrop-blur-sm">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 liquid-glass rounded-2xl text-white hover:text-cyan-400 hover:border-cyan-400/50 shadow-lg"
                        title="View Source Code"
                      >
                        <IoLogoGithub size={22} />
                      </motion.a>
                    )}
                    {project.livelink && (
                      <motion.a
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white shadow-lg shadow-cyan-500/30"
                        title="View Live Platform"
                      >
                        <IoOpenOutline size={22} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors tracking-tight">
                      {project.name}
                    </h3>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techs.split(",").map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium font-mono px-2.5 py-1 rounded-lg liquid-glass-subtle text-cyan-300/90 border border-cyan-500/20"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll((s) => !s)}
              className="px-8 py-3.5 rounded-full liquid-glass text-white font-semibold hover:border-cyan-400/50 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2"
            >
              {showAll ? "Show Less" : `Explore All (${filteredProjects.length}) Projects`}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
