import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * FadeIn.jsx
 * Unified viewport reveal wrapper with spring-based motion and reduced-motion fallback.
 */
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 24,
  xOffset = 0,
  className = "",
  once = true,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Apple-style gentle fluid cubic bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
