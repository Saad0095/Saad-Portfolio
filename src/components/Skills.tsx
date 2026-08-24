import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaGithub, FaLinux, FaDocker, FaRobot, FaLock } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiVercel, SiNginx, SiSocketdotio, SiPuppeteer } from "react-icons/si";

const categories = ["All", "Frontend", "Backend", "Database", "AI & Automation", "DevOps"];

const skills = [
  { name: "React", category: "Frontend", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", category: "Frontend", icon: <FaJs className="text-amber-400" /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss className="text-sky-400" /> },

  { name: "Node.js", category: "Backend", icon: <FaNodeJs className="text-emerald-500" /> },
  { name: "Express.js", category: "Backend", icon: <SiExpress className="text-zinc-300" /> },
  { name: "REST APIs", category: "Backend", icon: <FaNodeJs className="text-teal-400" /> },
  { name: "JWT Auth", category: "Backend", icon: <FaLock className="text-amber-400" /> },
  { name: "RBAC Security", category: "Backend", icon: <FaLock className="text-emerald-400" /> },
  { name: "Socket.IO", category: "Backend", icon: <SiSocketdotio className="text-white" /> },

  { name: "MongoDB", category: "Database", icon: <SiMongodb className="text-emerald-500" /> },

  { name: "Generative AI", category: "AI & Automation", icon: <FaRobot className="text-emerald-400" /> },
  { name: "LLM Integrations", category: "AI & Automation", icon: <FaRobot className="text-teal-400" /> },
  { name: "Agentic Workflows", category: "AI & Automation", icon: <FaRobot className="text-cyan-400" /> },
  { name: "Prompt Engineering", category: "AI & Automation", icon: <FaRobot className="text-emerald-300" /> },
  { name: "OpenAI API", category: "AI & Automation", icon: <FaRobot className="text-emerald-400" /> },
  { name: "Automation Bots", category: "AI & Automation", icon: <FaRobot className="text-teal-400" /> },
  { name: "Puppeteer", category: "AI & Automation", icon: <SiPuppeteer className="text-emerald-300" /> },

  { name: "Git", category: "DevOps", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", category: "DevOps", icon: <FaGithub className="text-white" /> },
  { name: "Vercel", category: "DevOps", icon: <SiVercel className="text-white" /> },
  { name: "Linux", category: "DevOps", icon: <FaLinux className="text-amber-300" /> },
  { name: "Nginx", category: "DevOps", icon: <SiNginx className="text-emerald-600" /> },
  { name: "PM2", category: "DevOps", icon: <FaNodeJs className="text-emerald-400" /> },
  { name: "Docker", category: "DevOps", icon: <FaDocker className="text-blue-400" /> },
];

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="bg-[#09090b] py-20 px-4 sm:px-6 lg:px-12 border-t border-[#27272a]/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase mb-3"
          >
            <span>STACK & TOOLING</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Technical Arsenal
          </h2>
        </div>

        {/* Category Tab Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                  isSelected ? "text-zinc-950 font-bold bg-emerald-400" : "text-zinc-400 bg-[#121215] border border-zinc-800 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Animated Tech Pills */}
        <motion.div layout className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto min-h-[140px]">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#121215] border border-zinc-800 text-xs font-semibold text-zinc-200 hover:border-emerald-500/40 hover:text-white transition-all shadow-md group"
              >
                <span className="text-base group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <span>{skill.name}</span>
                <span className="text-[10px] font-mono text-zinc-500 opacity-60 group-hover:opacity-100 transition-opacity">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;


