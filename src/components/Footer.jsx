import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-slate-950/80 backdrop-blur-xl border-t border-white/[0.06] text-center relative overflow-hidden">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-2">
        <p className="text-slate-400 text-sm font-medium">
          Designed & Engineered by <span className="text-white font-semibold">Benjamin Olufemi</span>
        </p>
        <p className="text-slate-500 text-xs font-mono">
          &copy; {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
