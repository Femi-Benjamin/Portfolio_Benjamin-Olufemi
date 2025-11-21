import React from "react";
import { motion } from "framer-motion";
import { Experience as ExperienceData } from "../data";

const Experience = () => {
    return (
        <section className="w-full py-20 bg-slate-950 text-white relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-cyan-400">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ExperienceData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-slate-800 rounded-xl text-cyan-400 text-2xl group-hover:bg-cyan-500/20 transition-colors">
                                    {item.iconsSrc}
                                </div>
                                <span className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                                    {item.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                {item.title}
                            </h3>
                            <h4 className="text-md text-slate-300 mb-4 font-medium">
                                {item.job} <span className="text-slate-500">•</span> {item.location}
                            </h4>

                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
