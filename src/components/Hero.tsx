
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#09090b] overflow-hidden">
      {/* Subtle Background Radial Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Content (Cols 7) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase mb-5"
          >
            <HiSparkles className="text-emerald-400 text-sm" />
            <span>FULL-STACK DEVELOPER</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.12] mb-6"
          >
            I build products that solve{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              real business problems.
            </span>
          </motion.h1>

          {/* Concise Supporting Text (1-2 lines) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-8"
          >
            Full-stack developer focused on SaaS, CRM, ERP and AI-powered applications — from frontend UIs and APIs to databases, automation and deployment.
          </motion.p>

          {/* Primary CTAs & Subtle Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
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
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-white transition-all cursor-pointer"
            >
              Let's Talk
            </a>

            {/* Subtle Social Links */}
            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:ml-4 border-t sm:border-t-0 sm:border-l border-zinc-800 sm:pl-5">
              <a
                href="https://github.com/Saad0095"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-zinc-500 hover:text-emerald-400 transition-colors p-1"
              >
                <FaGithub size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/saad-bin-khalid-b077b8243/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-zinc-500 hover:text-emerald-400 transition-colors p-1"
              >
                <FaLinkedin size={19} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Right Product Showcase Visual (Cols 5) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroVisual />
        </div>

      </div>
    </section>
  );
};

export default Hero;



