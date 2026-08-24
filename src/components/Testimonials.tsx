import { motion } from "framer-motion";
import { FaQuoteLeft, FaCheckCircle, FaBuilding } from "react-icons/fa";

const testimonials = [
  {
    name: "Ali Hasan Rajani",
    company: "Leadsrift Agency",
    role: "Agency Founder",
    feedback: "Saad delivered a high-converting landing page for our agency. The process was smooth, and the results exceeded expectations!",
    verified: true,
  },
  {
    name: "Abdullah Bin Waqar",
    company: "Startup Founder",
    role: "Founder & Lead",
    feedback: "Professional, fast, and always focused on business results. Highly recommended for any web project.",
    verified: true,
  },
  {
    name: "Hamza",
    company: "Leaders Tax Collection",
    role: "Operations Lead",
    feedback: "Our CRM project was complex, but Saad handled it with expertise and clear communication throughout.",
    verified: true,
  }
];

const trustStats = [
  { label: "Production Projects Delivered", value: "15+" },
  { label: "Technologies Mastered", value: "10+" },
  { label: "Client Satisfaction Rate", value: "100%" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b] border-t border-[#27272a]/60">
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
            <span>CLIENT FEEDBACK & COLLABORATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight"
          >
            What Clients & Partners Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-zinc-400 max-w-xl mt-3"
          >
            Feedback from founders, agency owners, and product teams I've collaborated with.
          </motion.p>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#121215] border border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <FaQuoteLeft className="text-emerald-500/40 text-2xl" />
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <FaCheckCircle size={10} /> VERIFIED CLIENT
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{item.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
                    {item.name}
                  </div>
                  <div className="text-xs text-zinc-400 flex items-center gap-1">
                    <FaBuilding size={10} className="text-emerald-500" />
                    <span>{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#121215] border border-zinc-800 rounded-xl p-5 text-center hover:border-emerald-500/30 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

