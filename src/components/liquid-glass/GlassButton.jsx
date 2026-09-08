import React from "react";
import { motion } from "framer-motion";

/**
 * GlassButton.jsx
 * Tactile, physical glass button with Apple-inspired specular refraction,
 * dynamic hover sheen, micro-compression on click, and optional loading/success states.
 */
export const GlassButton = ({
  children,
  variant = "primary", // "primary" | "secondary" | "ghost"
  size = "md", // "sm" | "md" | "lg"
  href,
  onClick,
  disabled = false,
  loading = false,
  success = false,
  className = "",
  icon,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs rounded-xl gap-1.5",
    md: "px-6 py-3.5 text-sm rounded-2xl gap-2",
    lg: "px-8 py-4 text-base rounded-2xl gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-bold border border-cyan-300/40 shadow-[0_0_30px_-5px_rgba(6,182,212,0.45),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:shadow-[0_0_35px_0px_rgba(6,182,212,0.65)]",
    secondary:
      "bg-slate-900/50 backdrop-blur-xl text-white font-semibold border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.3)]",
    ghost:
      "bg-white/[0.04] backdrop-blur-md text-slate-300 font-medium border border-white/[0.08] hover:border-white/20 hover:text-white hover:bg-white/[0.08]",
  };

  const baseClasses = `relative inline-flex items-center justify-center font-sans tracking-tight transition-all duration-300 overflow-hidden cursor-pointer select-none group ${
    sizeStyles[size] || sizeStyles.md
  } ${variantStyles[variant] || variantStyles.primary} ${
    disabled || loading ? "opacity-60 pointer-events-none" : ""
  } ${className}`;

  const buttonContent = (
    <>
      {/* Specular Light Hover Sweep */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

      {/* Button State Transitions */}
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          <span>Processing...</span>
        </span>
      ) : success ? (
        <span className="flex items-center gap-2 text-emerald-300 font-bold">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <span>Success!</span>
        </span>
      ) : (
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
          {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03, y: -1.5 }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={baseClasses}
        onClick={onClick}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03, y: -1.5 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      disabled={disabled || loading}
      onClick={onClick}
      className={baseClasses}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default GlassButton;
