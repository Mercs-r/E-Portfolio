import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Edu";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  useEffect(() => {
    const moveGlow = (e) => {
      const glow = document.getElementById("cursor-glow");

      if (glow) {
        glow.style.left = `${e.clientX - 150}px`;
        glow.style.top = `${e.clientY - 150}px`;
      }
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return (
    <>
      <div
        id="cursor-glow"
        className="fixed w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-200"
      ></div>

      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-x-hidden">
        <Navbar />

        <main className="pt-20">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}