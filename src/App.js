import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-vertical-timeline-component/style.min.css"; // Keeping for safety if needed, though we replaced the component

// Components
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundOrbs from "./components/BackgroundOrbs";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen w-full overflow-x-hidden relative">
      <BackgroundOrbs />
      <ToastContainer theme="dark" position="bottom-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
