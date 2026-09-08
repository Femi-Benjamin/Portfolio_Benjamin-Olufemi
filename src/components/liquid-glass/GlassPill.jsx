import React from "react";
import { motion } from "framer-motion";

/**
 * GlassPill.jsx
 * Lightweight Glass 1 tier pill for tech chips, filters, and status badges.
 */
export const GlassPill = ({
  children,
  active = false,
  onClick,
  className = "",
  size = "md", // "sm" | "md"
  hoverable = true,
  icon,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-xs gap-1.5",
    md: "px-4 py-2 text-xs sm:text-sm gap-2",
  };

  return (
    <motion.button
      type={onClick ? "button" : undefined}
      whileHover={hoverable ? { y: -2, scale: 1.04 } : undefined}
      whileTap={onClick ? { scale: 0.96 } : undefined}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 border ${
        sizeClasses[size] || sizeClasses.md
      } ${
        active
          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_20px_-3px_rgba(6,182,212,0.5)] border-cyan-400/40"
          : "bg-slate-900/40 backdrop-blur-md text-slate-300 border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-cyan-400/40 hover:text-white hover:bg-slate-800/50"
      } ${className}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};

export default GlassPill;
