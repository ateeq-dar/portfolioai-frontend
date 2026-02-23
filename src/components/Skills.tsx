import { motion } from "framer-motion";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "TailwindCSS",
  "REST APIs",
  "Git",
  "AI Integration",
  "System Design",
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24 text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-16">
        Technical Expertise
      </h2>

      <div className="flex flex-wrap justify-center gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 cursor-default"
          >
            {skill}
          </div>
        ))}

      </div>
    </motion.section>
  );
};

export default Skills;