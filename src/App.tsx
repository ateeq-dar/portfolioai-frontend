import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Contact from "./components/Contact"; // ✅ added
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";

function App() {
  const location = useLocation();

  // Smooth scroll when URL has hash (#about, #contact, etc.)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.replace("#", "")
      );
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-gray-200 overflow-x-hidden">

      {/* Animated Gradient Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 
        bg-[radial-gradient(circle_at_20%_30%,#4f46e5,transparent_40%),
             radial-gradient(circle_at_80%_70%,#9333ea,transparent_40%)]
        opacity-30 animate-pulse"
      />

      {/* Dark Base */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b0f19]" />

      <MouseGlow />

      <div className="relative z-10">
        <Navbar />

        <main className="flex flex-col gap-32 pt-32 pb-32">
          <Hero />
          <Stats />
          <Projects />
          <Skills />
          <About />
          <Contact /> {/* ✅ added here */}
        </main>

        <Footer />
      </div>

      <Chat />
    </div>
  );
}

export default App;