import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import aiImage from "../assets/ai-image-studio.png";
import fileShare from "../assets/file-share-pro.png";
import qrGen from "../assets/qr-generator.png";


const projects = [
  {
    title: "AI Image Studio",
    description:
      "Real-time AI-powered image generation platform with scalable backend and modern UI.",
    image: aiImage,
    link: "https://aiimagestudio.netlify.app/",
  },
  {
    title: "File Share Pro",
    description:
      "Secure instant file sharing application built with performance-focused backend architecture.",
    image: fileShare,
    link: "https://filesharepro.netlify.app/",
  },
  {
    title: "Task Management",
    description:
      "Fast and responsive task management application with modern frontend and API integration.",
    image: qrGen,
    link: "https://taskflowdo.netlify.app/",
  },
];
const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-12">

        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Tilt glareEnable glareMaxOpacity={0.2} scale={1.05}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 cursor-pointer">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-xl mb-6"
                />

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

              </div>
            </Tilt>
          </a>
        ))}

      </div>
    </motion.section>
  );
};

export default Projects;