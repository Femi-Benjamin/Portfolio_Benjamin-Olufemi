import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-slate-950/80 backdrop-blur-md border-t border-white/[0.06] text-center relative overflow-hidden">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-white font-bold text-base tracking-tight">
            Benjamin Olufemi
          </p>
          <p className="text-xs font-mono text-slate-400 mt-0.5">
            Frontend & Web3 Engineer
          </p>
        </div>

        {/* Minimal Glass Social Dock */}
        {/* <div className="flex items-center gap-2">
          {SocialLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full glass-1-subtle border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all hover:scale-105"
              title={link.name}
            >
              {link.iconSrc}
            </a>
          ))}
        </div> */}

        <p className="text-slate-500 text-xs font-mono">
          &copy; {new Date().getFullYear()} Benjamin Olufemi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
