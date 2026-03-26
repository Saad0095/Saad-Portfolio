import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaNodeJs, FaJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiFirebase, SiRapid } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion className="text-white text-4xl" /> },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-4xl" /> },
    ],
  },
  {
    label: "Tools & Services",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
      { name: "Rapid API", icon: <SiRapid className="text-red-400 text-4xl" /> },
      { name: "Socket.IO", icon: <SiExpress className="text-gray-300 text-4xl" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#0C0C0C] py-20 px-6 md:px-20 text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Tech Stack
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-start max-w-5xl mx-auto">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.label}
            className="flex-1 bg-[#1a1a1a]/60 backdrop-blur-md rounded-2xl shadow-lg p-7 border border-transparent hover:border-theme-color transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-bold text-theme-color mb-5 text-center md:text-left">{group.label}</h3>
            <div className="grid grid-cols-2 gap-6">
              {group.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 group">
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </span>
                  <span className="text-base font-medium text-gray-200 group-hover:text-theme-color transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
