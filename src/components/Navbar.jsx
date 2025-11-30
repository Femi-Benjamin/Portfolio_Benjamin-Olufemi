import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <div className="w-full max-w-5xl bg-slate-900/60 backdrop-blur-md border border-slate-800/50 rounded-2xl px-6 py-3 flex items-center justify-between shadow-xl shadow-black/20">
        <a
          href="#home"
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Benjamin.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // href="https://drive.google.com/file/d/1ZG_0SUKMdOg2J59cIQZg6NsvcKTTSGu_/view?usp=sharing"
            href="https://flowcv.com/resume/7ptl1beu34s2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white text-2xl"
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 p-4 mx-4 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl flex flex-col gap-4 shadow-2xl md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 font-medium text-center py-2 border-b border-slate-800/50 last:border-none"
                >
                  {link.name}
                </a>
              ))}
              <a
                // href="https://drive.google.com/file/d/1ZG_0SUKMdOg2J59cIQZg6NsvcKTTSGu_/view?usp=sharing"
                href="https://flowcv.com/resume/7ptl1beu34s2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold"
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
