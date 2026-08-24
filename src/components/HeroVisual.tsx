import { motion } from "framer-motion";
import { FaShieldAlt, FaRobot, FaUsers, FaCheck } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import DevImg from "../assets/developer_image.jpg";
import crmImg from "../assets/Cleanmeets CRM (1).jpg";

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Background Ambient Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-emerald-500/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

      {/* Main SaaS Product Container */}
      <div className="relative bg-[#121215] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-5 space-y-4">
        
        {/* Top Developer & System Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <img
              src={DevImg}
              alt="Muhammad Saad Bin Khalid"
              className="w-10 h-10 rounded-full object-cover border border-emerald-500/40"
            />
            <div>
              <h3 className="text-xs font-bold text-zinc-100 flex items-center gap-1.5">
                Saad Bin Khalid
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </h3>
              <p className="text-[11px] font-mono text-emerald-400">Full-Stack & SaaS Engineer</p>
            </div>
          </div>

          <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-300 font-medium">
            PRODUCT SUITE
          </div>
        </div>

        {/* Featured Product Preview Frame */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-[#09090b] group">
          {/* Chrome Header */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-[#18181c] border-b border-zinc-800 text-[10px] font-mono text-zinc-400">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-zinc-700 inline-block" />
              <span className="w-2 h-2 rounded-full bg-zinc-700 inline-block" />
              <span className="w-2 h-2 rounded-full bg-zinc-700 inline-block" />
            </div>
            <span className="text-zinc-400">cleanmeets-crm.app</span>
            <span className="text-emerald-400 font-bold">RBAC ACTIVE</span>
          </div>

          {/* Screenshot Preview */}
          <img
            src={crmImg}
            alt="CleanMeets CRM Dashboard"
            className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          {/* Floating AI Engine Card Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-2 right-2 bg-[#121215]/95 border border-zinc-700/80 rounded-lg p-2.5 shadow-xl backdrop-blur-md max-w-[210px]"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 mb-1">
              <span className="flex items-center gap-1 font-bold">
                <FaRobot /> SchoolSync AI
              </span>
              <span className="text-zinc-500">v2.0</span>
            </div>
            <p className="text-[10px] text-zinc-300 font-mono leading-tight">
              Generating report comments... <span className="text-emerald-400 font-bold">Done</span>
            </p>
          </motion.div>
        </div>

        {/* Feature Pill Highlights */}
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-2.5 rounded-lg bg-[#09090b] border border-zinc-800 flex items-center justify-between text-zinc-300">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <FaShieldAlt className="text-emerald-400" /> RBAC Matrix
            </span>
            <span className="text-emerald-400 font-bold">4 Roles</span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#09090b] border border-zinc-800 flex items-center justify-between text-zinc-300">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <FaUsers className="text-emerald-400" /> Socket.IO
            </span>
            <span className="text-emerald-400 font-bold">Real-time</span>
          </div>
        </div>

        {/* Bottom Quick Metric Bar */}
        <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-1 text-zinc-400">
            <FaCheck className="text-emerald-400" /> Full-Stack Architecture
          </span>
          <a
            href="#projects"
            className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
          >
            <span>Explore Work</span>
            <FaArrowUpRightFromSquare size={10} />
          </a>
        </div>

      </div>
    </motion.div>
  );
};

export default HeroVisual;
