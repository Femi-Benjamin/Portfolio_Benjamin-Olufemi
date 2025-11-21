import React from "react";
import { motion } from "framer-motion";
import { IoLogoGithub, IoLink } from "react-icons/io5";
import { Projects as ProjectsData } from "../data";

const Projects = () => {
    return (
        <section id="projects" className="w-full py-20 bg-slate-950 text-white relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ProjectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.imageSrc}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-[2px]">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-slate-800 rounded-full text-white hover:bg-cyan-500 hover:text-slate-900 transition-all transform hover:scale-110"
                                        title="View Code"
                                    >
                                        <IoLogoGithub size={24} />
                                    </a>
                                    {project.livelink && (
                                        <a
                                            href={project.livelink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-slate-800 rounded-full text-white hover:bg-cyan-500 hover:text-slate-900 transition-all transform hover:scale-110"
                                            title="Live Demo"
                                        >
                                            <IoLink size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.name}
                                </h3>

                                <div className="mt-auto">
                                    <p className="text-sm text-slate-400 mb-2">Technologies:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techs.split(",").map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 bg-slate-800/50 rounded-md text-cyan-300 border border-slate-700/50"
                                            >
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
