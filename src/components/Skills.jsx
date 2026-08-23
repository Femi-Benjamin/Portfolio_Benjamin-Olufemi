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
  SiNodedotjs,
  SiVite,
  SiNpm,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const categories = [
    {
      title: "Core Web Technologies",
      skills: [
        { name: "HTML 5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS 3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF" },
      ],
    },
    {
      title: "Tools & Ecosystem",
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
        { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
        { name: "Vite", icon: <SiVite />, color: "#9333EA" },
        { name: "Npm", icon: <SiNpm />, color: "#CB3837" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
        { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-24 bg-transparent text-white relative"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase px-3.5 py-1.5 rounded-full liquid-glass-subtle border border-cyan-500/20 mb-3 inline-block">
            Proficiencies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            Modern tools, languages, and frameworks powering my digital creations.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="liquid-glass rounded-3xl p-7 lg:p-8 hover:border-cyan-500/30 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
              <h3 className="text-lg font-bold mb-6 pb-3 border-b border-white/[0.08] text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="flex flex-col items-center gap-2.5 group cursor-pointer"
                  >
                    <div
                      className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center rounded-2xl p-3.5 liquid-glass-subtle border border-white/[0.08] group-hover:border-[var(--hover-color)] transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_-5px_var(--hover-color)]"
                      style={{ "--hover-color": skill.color || "#22d3ee" }}
                    >
                      <div 
                        className="text-3xl transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                    </div>
                    <span 
                      className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors text-center w-20 truncate"
                    >
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
