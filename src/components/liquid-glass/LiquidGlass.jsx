import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * LiquidGlass.jsx
 * Implements Apple-inspired Liquid Glass optical layers with 3 hierarchy tiers:
 * - subtle: Navbar, status pills, small chips (low opacity, fine edge, lightweight)
 * - interactive: CTAs, statistics, project cards, expertise panels (moderate refraction & highlight)
 * - hero: Hero interactive containers, Contact showpiece (deep refraction, multi-layer reflection)
 */
export const LiquidGlass = ({
  children,
  tier = "interactive", // "subtle" | "interactive" | "hero"
  className = "",
  glow = false,
  glowColor = "rgba(34, 211, 238, 0.25)",
  interactiveLight = true,
  onClick,
  as = "div",
  style = {},
  ...props
}) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!interactiveLight || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, [interactiveLight]);

  const handleMouseEnter = useCallback(() => {
    if (interactiveLight) setIsHovered(true);
  }, [interactiveLight]);

  const handleMouseLeave = useCallback(() => {
    if (interactiveLight) {
      setIsHovered(false);
      setMousePos({ x: 50, y: 50 });
    }
  }, [interactiveLight]);

  // Tier-specific glassmorphic styles
  const tierClasses = {
    subtle:
      "bg-slate-900/35 backdrop-blur-md border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)]",
    interactive:
      "bg-slate-900/45 backdrop-blur-xl border border-white/[0.12] shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.18),inset_0_-1px_1px_0_rgba(0,0,0,0.3)]",
    hero:
      "bg-slate-900/55 backdrop-blur-2xl border border-white/[0.18] shadow-[0_16px_48px_0_rgba(0,0,0,0.5),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.25),inset_0_-2px_2px_0_rgba(0,0,0,0.5)]",
  };

  const Component = motion[as] || motion.div;

  return (
    <Component
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        ...style,
        ...(glow ? { boxShadow: `0 0 35px -5px ${glowColor}` } : {}),
      }}
      className={`relative overflow-hidden transition-all duration-300 ${tierClasses[tier] || tierClasses.interactive} ${className}`}
      {...props}
    >
      {/* Specular Light Reflection Sheen (Follows Mouse pointer on desktop) */}
      {interactiveLight && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 hidden sm:block"
          style={{
            opacity: isHovered ? (tier === "hero" ? 0.35 : 0.22) : 0.08,
            background: `radial-gradient(circle 180px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.5), transparent 70%)`,
          }}
        />
      )}

      {/* Optical Edge Refraction Gradient Ring */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.05]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  );
};

export default LiquidGlass;
