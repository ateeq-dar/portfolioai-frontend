import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero-preview.png";

const Hero = () => {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("projects");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 grid md:grid-cols-2 gap-16 items-center">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-Driven
          </span>
          <br />
          Modern Platforms
        </h1>

        <p className="mt-8 text-gray-400 text-lg max-w-xl">
          I design and build scalable digital systems with AI integration,
          modern UX, and high-performance backend architecture.
        </p>

        <div className="mt-10 flex gap-6">

          <button
            onClick={goToProjects}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Explore Projects
          </button>

          {/* ✅ CLEAN CONTACT BUTTON */}
          <button
            onClick={() => navigate("/#contact")}
            className="border border-gray-700 px-6 py-3 rounded-xl hover:border-purple-500 transition"
          >
            Contact Me
          </button>

        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <img
            src={heroImage}
            alt="App Preview"
            className="w-full h-56 object-cover rounded-xl mb-6"
          />
          <div className="space-y-4">
            <div className="h-4 bg-white/20 rounded w-3/4" />
            <div className="h-4 bg-white/10 rounded w-2/3" />
            <div className="h-4 bg-white/10 rounded w-1/2" />
          </div>
        </div>

        <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-full blur-3xl" />
      </motion.div>

    </section>
  );
};

export default Hero;