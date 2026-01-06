import React from "react";
import { motion } from "framer-motion";
import {
    SiGit,
    SiGithub,
    SiVercel,
    SiFigma,
    SiSupabase,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFramer,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    const categories = [
        {
            title: "Core Web",
            skills: [
                { name: "HTML 5", type: "icon", icon: <SiHtml5 />, color: "#E34F26" },
                { name: "CSS 3", type: "icon", icon: <SiCss3 />, color: "#1572B6" },
                { name: "JavaScript", type: "icon", icon: <SiJavascript />, color: "#F7DF1E" },
                { name: "TypeScript", type: "icon", icon: <SiTypescript />, color: "#3178C6" },
            ],
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "React", type: "icon", icon: <SiReact />, color: "#61DAFB" },
                { name: "Next.js", type: "icon", icon: <SiNextdotjs />, color: "#ffffff" },
                { name: "Tailwind CSS", type: "icon", icon: <SiTailwindcss />, color: "#06B6D4" },
                {
                    name: "Framer Motion",
                    type: "icon",
                    icon: <SiFramer />,
                    color: "#0055FF",
                },
            ],
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", type: "icon", icon: <SiGit />, color: "#F05032" },
                { name: "GitHub", type: "icon", icon: <SiGithub />, color: "#ffffff" },
                { name: "Vercel", type: "icon", icon: <SiVercel />, color: "#ffffff" },
                { name: "Figma", type: "icon", icon: <SiFigma />, color: "#F24E1E" },
                { name: "VS Code", type: "icon", icon: <VscVscode />, color: "#007ACC" },
            ],
        },
        {
            title: "Backend & State",
            skills: [{ name: "Supabase", type: "icon", icon: <SiSupabase />, color: "#3ECF8E" }],
        },
    ];

    return (
        <section
            id="skills"
            className="w-full py-20 bg-transparent text-white relative"
        >
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 border-b border-slate-700/50 pb-2 bg-gradient-to-b from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="flex flex-col items-center gap-2 group cursor-pointer"
                                    >
                                        <div
                                            className="w-16 h-16 flex items-center justify-center bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 group-hover:border-[var(--hover-color)] group-hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-black/20"
                                            style={{ "--hover-color": skill.color || "#22d3ee" }}
                                        >
                                            <div className="text-3xl text-slate-400 group-hover:text-[var(--hover-color)] transition-colors">
                                                {skill.icon}
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-slate-400 group-hover:text-[var(--hover-color)] transition-colors text-center w-20 truncate">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
