import { motion } from "framer-motion";
import { FaLaptopCode, FaUserShield, FaRobot, FaServer, FaCogs } from "react-icons/fa";

const capabilities = [
  {
    icon: FaLaptopCode,
    title: "SaaS & Business Systems",
    desc: "End-to-end full-stack architectures engineered for reliability, security, and multi-tenant performance."
  },
  {
    icon: FaUserShield,
    title: "Multi-Role CRM & ERP",
    desc: "Granular RBAC, sales team workflows, lead distribution pipelines, and real-time dashboard analytics."
  },
  {
    icon: FaRobot,
    title: "Practical AI Workflows",
    desc: "Smart LLM integrations, automatic text/circular generators, AI assistants, and automated report generators."
  },
  {
    icon: FaServer,
    title: "REST & Real-Time APIs",
    desc: "Robust Express/Node backends, MongoDB data modeling, Socket.IO WebSockets, and JWT authentication."
  },
  {
    icon: FaCogs,
    title: "Scraping & Automation",
    desc: "Data extraction bots, license-key verification systems, automated cold-emailing, and background pipelines."
  }
];

const CapabilityStrip = () => {
  return (
    <section id="capabilities" className="py-16 px-4 sm:px-6 lg:px-12 bg-[#0d0d10] border-y border-[#27272a]/70">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase">CORE COMPETENCIES</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 mt-1">
              Engineering Capabilities
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Specialized in high-value software systems that connect front-end interfaces directly to enterprise logic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#141418] border border-zinc-800/80 rounded-xl p-5 hover:border-emerald-500/40 hover:bg-[#18181c] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilityStrip;
