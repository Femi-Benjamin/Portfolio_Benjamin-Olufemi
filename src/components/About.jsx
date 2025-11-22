import React from "react";
import { motion } from "framer-motion";
import ben from "../images/ben.jpg";

const About = () => {
    return (
        <section id="about" className="w-full py-20 bg-slate-950 text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Profile Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 h-[400px] md:h-auto bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden relative group"
                    >
                        <img
                            src={ben}
                            alt="Benjamin"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-2xl font-bold text-white">Benjamin Olufemi</h3>
                            <p className="text-cyan-400">Frontend Developer</p>
                        </div>
                    </motion.div>

                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-slate-100">
                            Hello, I'm <span className="text-cyan-400">Benjamin</span> 👋
                        </h3>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            A frontend developer passionate about converting designs into pixel-perfect code.
                            I specialize in creating interactive and user-friendly web applications using modern
                            technologies like React.js, Next.js, JavaScript, and Tailwind CSS.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            With a keen eye for design and a knack for problem-solving, I'm dedicated to crafting
                            websites that not only look good but also work seamlessly to provide the best user experience.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">3.5+</span>
                                <span className="text-sm text-slate-400 uppercase tracking-wider">Years Exp.</span>
                            </div>
                            <div className="w-px h-12 bg-slate-700"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">20+</span>
                                <span className="text-sm text-slate-400 uppercase tracking-wider">Projects</span>
                            </div>
                            <div className="w-px h-12 bg-slate-700"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">15+</span>
                                <span className="text-sm text-slate-400 uppercase tracking-wider">Clients</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
