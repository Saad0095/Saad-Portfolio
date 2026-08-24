import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaGithub, FaLinux, FaDocker, FaRobot, FaLock } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiVercel, SiNginx, SiSocketdotio, SiPuppeteer } from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-amber-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-zinc-300" /> },
      { name: "REST APIs", icon: <FaNodeJs className="text-teal-400" /> },
      { name: "JWT", icon: <FaLock className="text-amber-400" /> },
      { name: "RBAC Controls", icon: <FaLock className="text-emerald-400" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="text-white" /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "AI Integrations", icon: <FaRobot className="text-emerald-400" /> },
      { name: "Automation Bots", icon: <FaRobot className="text-teal-400" /> },
      { name: "Puppeteer", icon: <SiPuppeteer className="text-emerald-300" /> },
      { name: "Data Extraction", icon: <FaRobot className="text-cyan-400" /> },
    ],
  },
  {
    category: "Deployment & DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Linux", icon: <FaLinux className="text-amber-300" /> },
      { name: "Nginx", icon: <SiNginx className="text-emerald-600" /> },
      { name: "PM2", icon: <FaNodeJs className="text-emerald-400" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#09090b] py-24 px-4 sm:px-6 lg:px-12 border-t border-[#27272a]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase mb-4"
          >
            <span>TECHNICAL PROFICIENCY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight"
          >
            Technology Stack & Tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-zinc-400 max-w-xl mt-3"
          >
            Technologies genuinely supported by hands-on development and production project experience.
          </motion.p>
        </div>

        {/* 5 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#121215] border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-4 pb-2 border-b border-zinc-800">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181b] border border-zinc-800 text-xs font-medium text-zinc-200 hover:border-emerald-500/40 hover:text-white transition-all group"
                    >
                      <span className="text-sm transition-transform group-hover:scale-110">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;

