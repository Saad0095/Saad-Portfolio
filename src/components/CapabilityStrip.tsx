import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaRobot } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiSocketdotio,
  SiPuppeteer,
} from "react-icons/si";
import { Sparkles, ShieldCheck, Zap, Cpu } from "lucide-react";

const techStack = [
  {
    name: "React 19",
    category: "Frontend",
    icon: FaReact,
    color: "text-cyan-400",
    glow: "group-hover:border-cyan-500/40",
  },
  {
    name: "Next.js 15",
    category: "Full-Stack",
    icon: SiNextdotjs,
    color: "text-zinc-100",
    glow: "group-hover:border-zinc-400/40",
  },
  {
    name: "TypeScript",
    category: "Type-Safe",
    icon: SiTypescript,
    color: "text-blue-400",
    glow: "group-hover:border-blue-500/40",
  },
  {
    name: "Node.js",
    category: "Runtime",
    icon: FaNodeJs,
    color: "text-emerald-400",
    glow: "group-hover:border-emerald-500/40",
  },
  {
    name: "Express.js",
    category: "REST APIs",
    icon: SiExpress,
    color: "text-zinc-300",
    glow: "group-hover:border-zinc-400/40",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    color: "text-emerald-500",
    glow: "group-hover:border-emerald-500/40",
  },
  {
    name: "Socket.IO",
    category: "Real-Time",
    icon: SiSocketdotio,
    color: "text-zinc-100",
    glow: "group-hover:border-emerald-400/40",
  },
  {
    name: "Tailwind CSS",
    category: "Modern UI",
    icon: SiTailwindcss,
    color: "text-sky-400",
    glow: "group-hover:border-sky-400/40",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: FaDocker,
    color: "text-blue-400",
    glow: "group-hover:border-blue-500/40",
  },
];

const capabilitySolutions = [
  {
    title: "Multi-Role Sales CRMs",
    tag: "Enterprise",
    icon: ShieldCheck,
    color: "text-emerald-400",
  },
  {
    title: "Generative AI & LLM Workflows",
    tag: "OpenAI & Groq",
    icon: FaRobot,
    color: "text-teal-400",
  },
  {
    title: "Granular RBAC Permissions",
    tag: "Security",
    icon: ShieldCheck,
    color: "text-emerald-300",
  },
  {
    title: "Real-Time Live Lead Routing",
    tag: "Socket.IO",
    icon: Zap,
    color: "text-amber-400",
  },
  {
    title: "SaaS School Management Portals",
    tag: "Multi-Tenant",
    icon: Cpu,
    color: "text-cyan-400",
  },
  {
    title: "High-Converting Landing Pages",
    tag: "Performance & SEO",
    icon: Sparkles,
    color: "text-emerald-400",
  },
  {
    title: "Automated Data Scraping Bots",
    tag: "Puppeteer",
    icon: SiPuppeteer,
    color: "text-emerald-300",
  },
];

const CapabilityStrip = () => {
  return (
    <section
      id="capabilities"
      className="py-10 bg-[#0c0c0e]/90 border-y border-zinc-800/80 overflow-hidden relative group select-none backdrop-blur-sm"
    >
      {/* Top Section Header Pill */}
      <div className="flex justify-center mb-6 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono font-medium text-zinc-400 tracking-wider uppercase shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PRODUCTION-PROVEN TECH ECOSYSTEM & CAPABILITIES</span>
        </div>
      </div>

      {/* Edge Gradient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0c0c0e] via-[#0c0c0e]/90 to-transparent z-20 pointer-events-none" />

      {/* Lane 1: Core Technologies (Moves Left) */}
      <div className="flex w-full overflow-hidden mb-3.5">
        <motion.div
          className="flex items-center gap-3.5 whitespace-nowrap group-hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 32,
            ease: "linear",
          }}
        >
          {[...techStack, ...techStack, ...techStack].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#121215]/95 border border-zinc-800/90 shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#18181c] ${item.glow} group/card`}
              >
                <div className="w-7 h-7 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-base">
                  <Icon className={item.color} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono font-bold text-zinc-200 group-hover/card:text-white transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Lane 2: Solutions & Architecture (Moves Right) */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-3.5 whitespace-nowrap group-hover:[animation-play-state:paused]"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 36,
            ease: "linear",
          }}
        >
          {[...capabilitySolutions, ...capabilitySolutions, ...capabilitySolutions].map(
            (item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/70 shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900 hover:scale-105 group/sol"
                >
                  <Icon className={`size-3.5 ${item.color} shrink-0`} />
                  <span className="text-xs font-mono font-medium text-zinc-300 group-hover/sol:text-zinc-100 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/90 border border-zinc-700/60 text-zinc-400 group-hover/sol:text-emerald-400 group-hover/sol:border-emerald-500/30 transition-colors">
                    {item.tag}
                  </span>
                </div>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilityStrip;


