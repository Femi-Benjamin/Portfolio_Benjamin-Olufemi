import React from "react";
import { motion } from "framer-motion";
import { IoCodeWorkingOutline, IoCubeOutline, IoLayersOutline } from "react-icons/io5";
import LiquidGlass from "./liquid-glass/LiquidGlass";

/**
 * Expertise.jsx
 * Three major engineering capability pillars:
 * 1. FRONTEND: React/Next.js, TypeScript, Component Architecture, Core Web Vitals
 * 2. WEB3: DeFi, Wallet Integration, Smart Contract UI, Blockchain UX
 * 3. PRODUCT: Responsive Systems, Interaction Physics, Micro-animations, Accessibility
 * Uses Glass 2 (medium-strength glass) with spring hover lift.
 */
const Expertise = () => {
  const capabilities = [
    {
      id: "frontend",
      title: "FRONTEND",
      subtitle: "Scalable Architecture & Web Vitals",
      icon: <IoCodeWorkingOutline className="text-cyan-400 text-2xl" />,
      accent: "from-cyan-500/20 to-blue-600/10",
      skills: [
        { name: "React / Next.js 14", desc: "Server components & app router" },
        { name: "TypeScript", desc: "Type-safe robust maintainability" },
        { name: "UI Architecture", desc: "Design systems & component libraries" },
        { name: "Performance Optimization", desc: "Sub-second FCP & 95+ Lighthouse" },
      ],
    },
    {
      id: "web3",
      title: "WEB3",
      subtitle: "Decentralized Applications & UX",
      icon: <IoCubeOutline className="text-purple-400 text-2xl" />,
      accent: "from-purple-500/20 to-pink-600/10",
      skills: [
        { name: "DeFi Interfaces", desc: "Trading terminals, vaults & liquidity pools" },
        { name: "Wallet Integration", desc: "Wagmi, RainbowKit & MetaMask flows" },
        { name: "Blockchain UX", desc: "Optimistic updates & error telemetry" },
        { name: "Smart Contract UI", desc: "Ethers.js / Viem state management" },
      ],
    },
    {
      id: "product",
      title: "PRODUCT",
      subtitle: "Motion Physics & Interaction Design",
      icon: <IoLayersOutline className="text-sky-400 text-2xl" />,
      accent: "from-sky-500/20 to-indigo-600/10",
      skills: [
        { name: "Responsive UI", desc: "Fluid layouts across mobile & 4K displays" },
        { name: "Interaction Design", desc: "Spring physics with Framer Motion" },
        { name: "Figma-to-Code Fidelity", desc: "100% pixel-perfect translation" },
        { name: "WCAG Accessibility", desc: "Keyboard navigable & screen-reader friendly" },
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="w-full py-24 md:py-32 bg-transparent text-white relative"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase px-3.5 py-1.5 rounded-full glass-1-subtle border-cyan-500/20 mb-3 inline-block">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 mx-auto rounded-full mt-4" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Focused technical domains where I deliver exceptional quality, speed, and engineering rigor.
          </p>
        </motion.div>

        {/* Three Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="h-full"
            >
              <LiquidGlass
                tier="interactive"
                glow={true}
                glowColor="rgba(6, 182, 212, 0.18)"
                className="h-full rounded-3xl p-7 lg:p-8 flex flex-col justify-between border-white/10 hover:border-cyan-400/40 transition-colors group relative"
              >
                {/* Subtle Card Ambient Refraction Tint */}
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br ${item.accent} blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                {/* Top: Icon + Title */}
                <div>
                  <div className="w-12 h-12 rounded-2xl glass-1-subtle border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1 mb-6">
                    {item.subtitle}
                  </p>

                  {/* Skills Checklist */}
                  <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                    {item.skills.map((skill, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {skill.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer Accent */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-cyan-400/80">
                  <span>{`0${index + 1} // DOMAIN`}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </LiquidGlass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
