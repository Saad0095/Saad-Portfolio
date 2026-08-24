
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaDatabase, FaServer, FaCode, FaRobot } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import HeroImg from "../assets/Hero_Image.png";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#09090b] overflow-hidden">
      {/* Background Subtle Gradient Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content (Cols 7) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <HiSparkles className="text-emerald-400 text-sm" />
            <span>FULL-STACK DEVELOPER • SAAS • CRM • AI</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.15] mb-6"
          >
            I build products that solve{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              real business problems.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8"
          >
            Full-stack developer focused on SaaS, CRM, ERP and AI-powered applications — from frontend interfaces and APIs to databases, automation and deployment.
          </motion.p>

          {/* CTAs & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 group cursor-pointer"
            >
              <span>View My Work</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-200 bg-zinc-900 border border-zinc-700/80 hover:border-emerald-500/50 hover:text-white transition-all cursor-pointer"
            >
              Let's Talk
            </a>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:ml-4 border-t sm:border-t-0 sm:border-l border-zinc-800 sm:pl-6">
              <a
                href="https://github.com/Saad0095"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/saad-bin-khalid-b077b8243/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Technical Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 pt-4 border-t border-zinc-800/80 w-full"
          >
            <span className="text-zinc-500 font-semibold">CORE ARCHITECTURE:</span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <FaCode className="text-emerald-400" /> React & Next.js
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <FaServer className="text-emerald-400" /> Node / Express APIs
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <FaDatabase className="text-emerald-400" /> MongoDB & RBAC
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              <FaRobot className="text-emerald-400" /> AI Integrations
            </span>
          </motion.div>
        </div>

        {/* Right Product & Developer Visual Card (Cols 5) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-md bg-[#121215] border border-zinc-800 rounded-2xl p-4 shadow-2xl emerald-glow"
          >
            {/* Header window control dots */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="font-mono text-xs text-zinc-500">product_architecture.ts</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            {/* Profile Avatar / Visual */}
            <div className="relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 mb-4 group">
              <img
                src={HeroImg}
                alt="Muhammad Saad Bin Khalid - Full Stack Developer"
                className="w-full h-64 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-white">Saad Bin Khalid</h2>
                  <p className="text-xs text-emerald-400 font-mono">Full-Stack & SaaS Engineer</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                  SYSTEM READY
                </span>
              </div>
            </div>

            {/* Live API / Product Stack Preview Snippet */}
            <div className="bg-[#09090b] rounded-xl p-3 border border-zinc-800/80 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-zinc-500 text-[11px] pb-1 border-b border-zinc-800/50">
                <span>STACK STATUS</span>
                <span className="text-emerald-400 font-bold">200 OK</span>
              </div>
              <div className="text-zinc-300 space-y-1 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">GET /api/v1/crm/leads</span>
                  <span className="text-emerald-400">RBAC Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">POST /api/v1/ai/generate</span>
                  <span className="text-emerald-400">Socket.IO Stream</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">MONGODB REPLICA</span>
                  <span className="text-teal-400">Connected</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

