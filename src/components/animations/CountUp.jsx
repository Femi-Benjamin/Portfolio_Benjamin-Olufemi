import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

/**
 * CountUp.jsx
 * Spring/ease counter that smoothly counts from 0 to target when scrolled into view.
 * Handles numbers, decimals (e.g. 3.5), and optional suffix (e.g. +).
 */
export const CountUp = ({
  target,
  duration = 1800,
  suffix = "+",
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);

  const numericTarget = parseFloat(target) || 0;
  const isFloat = target.toString().includes(".");

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId;

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const value = easedProgress * numericTarget;

      setCurrent(value);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrent(numericTarget);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, numericTarget, duration]);

  return (
    <span ref={ref} className={className}>
      {isFloat ? current.toFixed(1) : Math.floor(current)}
      {suffix}
    </span>
  );
};

export default CountUp;
