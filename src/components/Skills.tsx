import { motion } from "motion/react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const skills = [
  { name: "HTML", level: "Expert", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", level: "Expert", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "Bootstrap", level: "Advanced", icon: <FaBootstrap className="text-purple-500 text-4xl" /> }, 
  { name: "JavaScript", level: "Advanced", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "React", level: "Advanced", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "TypeScript", level: "Intermediate", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
  { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  { name: "Framer Motion", level: "Intermediate", icon: <TbBrandFramerMotion className="text-white text-4xl" /> },
  { name: "Node.js", level: "Intermediate", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Express.js", level: "Intermediate", icon: <SiExpress className="text-gray-300 text-4xl" /> },
  { name: "MongoDB", level: "Intermediate", icon: <SiMongodb className="text-green-400 text-4xl" /> },
  { name: "Git & GitHub", level: "Advanced", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
];

const SkillsSection = () => {
  return (
    <div id="skills" className="bg-[#0C0C0C] py-20 px-6 md:px-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide">
        🚀 My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#1a1a1a]/60 backdrop-blur-md px-6 py-6 rounded-xl shadow-md text-center w-full hover:shadow-lg hover:scale-105 transition duration-300 border border-transparent hover:border-theme-color"
          >
            <div className="mb-3 flex justify-center">{skill.icon}</div>
            <h3 className="text-lg font-semibold tracking-wide">{skill.name}</h3>
            <p className="text-sm text-gray-400">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
