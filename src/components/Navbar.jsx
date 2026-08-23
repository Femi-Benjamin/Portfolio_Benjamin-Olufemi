import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contacts" },
  ];

  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4"
    >
      <div className="w-full max-w-6xl liquid-glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 hover:border-white/15">
        <a
          href="#home"
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent tracking-tight text-glow flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse"></span>
          Benjamin.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/[0.06] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1-QOcPyV8vGU8iDpMXfOnB2YGYXD9otGS/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full text-white text-sm font-semibold shadow-[0_0_20px_-3px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_0px_rgba(6,182,212,0.6)] border border-white/20 transition-all"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="md:hidden text-slate-300 hover:text-white text-2xl p-2 rounded-xl glass-pill focus:outline-none"
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 right-0 mt-3 p-5 mx-4 liquid-glass rounded-3xl flex flex-col gap-3 shadow-2xl md:hidden border border-white/10"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-200 hover:text-cyan-400 font-medium py-2.5 px-4 rounded-xl hover:bg-white/[0.04] transition-all text-center"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1-QOcPyV8vGU8iDpMXfOnB2YGYXD9otGS/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl text-white font-semibold shadow-lg shadow-cyan-500/25 border border-white/20"
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
