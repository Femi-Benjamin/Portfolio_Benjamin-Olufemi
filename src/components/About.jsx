import React from "react";
import { motion } from "framer-motion";
import ben from "../images/ben.jpg";
import { IoSparklesOutline, IoCodeSlashOutline, IoLayersOutline } from "react-icons/io5";

const About = () => {
  const stats = [
    { value: "3.5+", label: "Years Experience", icon: <IoCodeSlashOutline className="text-cyan-400" /> },
    { value: "20+", label: "Completed Projects", icon: <IoLayersOutline className="text-purple-400" /> },
    { value: "15+", label: "Satisfied Clients", icon: <IoSparklesOutline className="text-sky-400" /> },
  ];

  return (
    <section
      id="about"
      className="w-full py-24 bg-transparent text-white relative overflow-hidden"
    >
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
            Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 h-[420px] md:h-auto min-h-[400px] liquid-glass rounded-3xl overflow-hidden relative group border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
          >
            <img
              src={ben}
              alt="Benjamin Olufemi"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Liquid Gradient Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent"></div>
            
            {/* Ambient Card Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none group-hover:bg-cyan-500/30 transition-colors"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="liquid-glass rounded-2xl p-4 border border-white/15 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  Benjamin Olufemi
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
                </h3>
                <p className="text-cyan-300/90 text-sm font-medium">Frontend & Web3 Engineer</p>
              </div>
            </div>
          </motion.div>

          {/* Bio & Details Bento Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Top Right Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-600/15 blur-3xl rounded-full pointer-events-none"></div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Benjamin</span> 👋
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                A passionate Frontend & Web3 developer dedicated to transforming intricate UI designs into high-performance, pixel-perfect web experiences. I specialize in building reactive, responsive, and accessible modern applications with <span className="text-cyan-300 font-semibold">React.js</span>, <span className="text-purple-300 font-semibold">Next.js</span>, <span className="text-sky-300 font-semibold">TypeScript</span>, and <span className="text-teal-300 font-semibold">Tailwind CSS</span>.
              </p>
              <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed">
                With a deep focus on interactive micro-interactions, robust architecture, and seamless user experiences, I bridge design with scalable engineering to build products that stand out.
              </p>
            </div>

            {/* Metrics Glass Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 pt-8 border-t border-white/[0.08]">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="liquid-glass-subtle rounded-2xl p-4 sm:p-5 flex flex-col items-center sm:items-start text-center sm:text-left border border-white/[0.06] hover:border-cyan-500/30 transition-all shadow-md"
                >
                  <div className="text-xl mb-1.5 p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    {stat.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-0.5">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
