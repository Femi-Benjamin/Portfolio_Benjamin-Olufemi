import React from "react";
import { motion } from "framer-motion";
import { SkillData } from "../data";

const Skills = () => {
    return (
        <section id="skills" className="w-full py-20 bg-slate-950 text-white relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Tech <span className="text-cyan-400">Stack</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {SkillData.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group cursor-pointer"
                        >
                            <div className="w-16 h-16 flex items-center justify-center bg-slate-800/50 rounded-full p-3 group-hover:bg-slate-800 transition-colors">
                                <img
                                    src={skill.imgSrc}
                                    alt={skill.name}
                                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                                />
                            </div>
                            <span className="font-medium text-slate-300 group-hover:text-cyan-400 transition-colors text-center">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
