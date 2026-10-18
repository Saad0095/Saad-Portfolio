import { motion } from "framer-motion";
import { FaLightbulb, FaDraftingCompass, FaCode, FaRocket } from "react-icons/fa";
import { Typewriter } from "./ui/typewriter";
import Timeline2, { type TimelineStep } from "@/components/ui/8bit-timeline2";

const workflowSteps: TimelineStep[] = [
  {
    icon: <FaLightbulb className="size-5 text-emerald-400" />,
    title: "01. Scope & Discover",
    description: "Deep-dive into business objectives, user workflows, user roles, and core technical requirements.",
  },
  {
    icon: <FaDraftingCompass className="size-5 text-emerald-400" />,
    title: "02. Architecture & UI",
    description: "Structuring database schemas, REST API contracts, and intuitive, responsive interface layouts.",
  },
  {
    icon: <FaCode className="size-5 text-emerald-400" />,
    title: "03. Full-Stack Build",
    description: "Writing clean, type-safe React/Next.js & Node.js code with RBAC security and smart AI integrations.",
  },
  {
    icon: <FaRocket className="size-5 text-emerald-400" />,
    title: "04. Testing & Launch",
    description: "End-to-end QA, performance audits, zero-downtime cloud deployment, and post-launch monitoring.",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b] relative overflow-hidden">
      {/* Subtle Background Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ENGINEERING PROCESS & STANDARDS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight"
          >
            <Typewriter
              words={[
                "From Concept to Production Launch",
                "How I Engineer Scalable Web Apps",
                "The Full-Stack Development Process",
              ]}
              typingSpeed={60}
              pauseTime={2500}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-zinc-400 max-w-xl mt-3 font-normal"
          >
            A structured, transparent development quest designed to ship reliable, high-performing software on schedule.
          </motion.p>
        </div>

        {/* 21st.dev 8-Bit Quest Timeline Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Timeline2
            title=""
            description=""
            steps={workflowSteps}
            className="py-6 px-0"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Philosophy;

