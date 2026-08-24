import { motion } from "framer-motion";
import { FaDraftingCompass, FaShieldAlt, FaBrain, FaRocket } from "react-icons/fa";
import { Typewriter } from "./ui/typewriter";

const principles = [
  {
    icon: FaDraftingCompass,
    title: "01. Product-First Engineering",
    desc: "I don't just write code — I build complete products around real business workflows. Every feature is designed with clear user roles, operational efficiency, and data integrity in mind."
  },
  {
    icon: FaShieldAlt,
    title: "02. Scalable Architecture & RBAC",
    desc: "Security and data boundaries start on day one. I enforce granular Role-Based Access Control (Admin, Manager, Agent, Student), clean REST endpoints, and structured MongoDB schemas."
  },
  {
    icon: FaBrain,
    title: "03. Practical AI Integration",
    desc: "AI is best when seamlessly embedded into everyday tasks. I integrate LLM workflows to handle routine heavy-lifting like document drafting, report comments, and smart data extraction."
  },
  {
    icon: FaRocket,
    title: "04. Reliable Shipping & Quality",
    desc: "From initial UI components to server deployment (Vercel, Linux, Nginx, PM2), I focus on clean TypeScript, responsive layouts, fast page loads, and zero-downtime stability."
  }
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b]">
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
            <span>ENGINEERING MINDSET</span>
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
                "Development Philosophy & Standards",
                "Engineering Mindset & Practices"
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
            className="text-sm sm:text-base text-zinc-400 max-w-xl mt-3"
          >
            How I approach software engineering — balancing technical rigor with product velocity.
          </motion.p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#121215] border border-zinc-800 rounded-xl p-6 sm:p-8 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100 mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
