import React from "react";

// Optical Glass Filters
import LiquidGlassFilter from "./components/liquid-glass/LiquidGlassFilter";

// Background & Atmospheric Layers
import BackgroundOrbs from "./components/BackgroundOrbs";

// Page Sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen w-full overflow-x-hidden relative text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Global SVG optical displacement / refraction definitions */}
      <LiquidGlassFilter />

      {/* Atmospheric ambient fluid light */}
      <BackgroundOrbs />

      {/* Floating Liquid Glass Navbar */}
      <Navbar />

      {/* Main Experience Flow */}
      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}

export default App;
