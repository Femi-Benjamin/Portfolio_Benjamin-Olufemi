import React from "react";
import { motion } from "framer-motion";

/**
 * GlassCard.jsx
 * Directional glass card with Apple-inspired edge highlights,
 * subtle surface refraction, and smooth spring hover lift.
 */
export const GlassCard = ({
  children,
  className = "",
  hoverLift = true,
  glowOnHover = true,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/[0.1] shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-colors duration-300 ${
        glowOnHover ? "hover:border-cyan-500/35 hover:shadow-[0_12px_40px_rgba(6,182,212,0.15)]" : ""
      } ${className}`}
      {...props}
    >
      {/* Top Rim Specular Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Internal Content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
