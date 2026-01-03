import React from "react";
import { motion } from "framer-motion";

const BackgroundOrbs = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none hidden lg:block">
            {/* Orb 1 - Cyan (Top Left) */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 80, -30, 0],
                    y: [0, -80, 40, -60, 20, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 -top-20 -left-20"
            />

            {/* Orb 2 - Purple (Bottom Right) */}
            <motion.div
                animate={{
                    x: [0, -80, 40, -100, 20, 0],
                    y: [0, 60, -30, 80, -20, 0],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20 -bottom-20 -right-20"
            />

            {/* Orb 3 - Blue (Center) */}
            <motion.div
                animate={{
                    x: [0, 60, -40, 100, -20, 0],
                    y: [0, 100, -50, 40, -80, 0],
                }}
                transition={{
                    duration: 32,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            {/* Orb 4 - Cyan (Top Center) */}
            <motion.div
                animate={{
                    x: [0, -60, 30, -80, 40, 0],
                    y: [0, -100, 50, -40, 80, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute w-64 h-64 bg-cyan-400 rounded-full blur-3xl opacity-10 -top-20 left-1/2 -translate-x-1/2"
            />

            {/* New Orb 5 - Purple (Top Right) */}
            <motion.div
                animate={{
                    x: [0, -120, 50, -80, 30, 0],
                    y: [0, 80, -40, 100, -20, 0],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-15 -top-10 -right-10"
            />

            {/* New Orb 6 - Blue (Bottom Left) */}
            <motion.div
                animate={{
                    x: [0, 100, -60, 40, -100, 0],
                    y: [0, -80, 30, -120, 50, 0],
                }}
                transition={{
                    duration: 33,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-15 -bottom-10 -left-10"
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/30 to-slate-950/50" />
        </div>
    );
};

export default BackgroundOrbs;
