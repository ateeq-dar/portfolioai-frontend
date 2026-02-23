import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto px-6 py-24 text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">
        About Me
      </h2>

      <p className="text-gray-400 text-lg leading-relaxed">
        I am a Full Stack Developer passionate about building scalable,
        high-performance digital platforms. My focus lies in clean architecture,
        AI integration, and delivering modern user experiences powered by
        robust backend systems.
      </p>
    </motion.section>
  );
};

export default About;