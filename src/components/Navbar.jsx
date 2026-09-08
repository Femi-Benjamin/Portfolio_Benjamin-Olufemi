import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

/**
 * Navbar.jsx
 * Floating Liquid Glass pill inspired by Apple interface design.
 * Features:
 * - Dynamic scroll responsiveness: shrinks slightly and increases glass opacity on scroll
 * - Specular border highlights and subtle refraction
 * - Compact BO monogram and accessible mobile glass drawer
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clear any existing hash from the URL on page load
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (targetId === "home" || !targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -70;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    // Keep URL clean without appending '#' hash
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Expertise", id: "expertise" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-5 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-[960px] rounded-full transition-all duration-300 flex items-center justify-between border ${
          isMenuOpen
            ? "bg-slate-950 border-white/20 py-2.5 px-5 sm:px-6 shadow-[0_12px_32px_rgba(0,0,0,0.8)]"
            : isScrolled
            ? "glass-2-interactive py-2.5 px-5 sm:px-6 border-white/20 shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            : "glass-1-subtle py-3 px-5 sm:px-7 border-white/10 hover:border-white/20"
        }`}
      >
        {/* BO Monogram / Brand */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-extrabold text-white text-xs tracking-wider shadow-[0_0_12px_#06b6d4] group-hover:scale-105 transition-transform">
            BO
          </div>
          <span className="font-bold text-sm tracking-tight text-slate-200 group-hover:text-white transition-colors">
            Benjamin<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-xs lg:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-200 relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-300 group-hover:w-1/2" />
            </a>
          ))}

          {/* Resume Glass Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="https://drive.google.com/file/d/1-QOcPyV8vGU8iDpMXfOnB2YGYXD9otGS/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-[0_0_16px_rgba(6,182,212,0.4)] hover:shadow-[0_0_22px_rgba(6,182,212,0.6)] border border-white/20 transition-all"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="md:hidden text-slate-200 hover:text-white p-2 rounded-full glass-1-subtle focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {isMenuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-3 p-5 mx-2 bg-slate-950 border border-white/20 rounded-3xl flex flex-col gap-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.95)] md:hidden z-50"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-slate-200 hover:text-cyan-400 font-medium py-2.5 px-4 rounded-xl hover:bg-white/[0.05] transition-all text-center text-sm cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1-QOcPyV8vGU8iDpMXfOnB2YGYXD9otGS/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-center py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 border border-white/20 mt-1"
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
