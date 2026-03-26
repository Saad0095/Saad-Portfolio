import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Adeel R.",
    feedback: "Saad delivered a high-converting landing page for our agency. The process was smooth, and the results exceeded expectations!",
    company: "Leadsrift Agency"
  },
  {
    name: "Sarah K.",
    feedback: "Professional, fast, and always focused on business results. Highly recommended for any web project.",
    company: "Startup Founder"
  },
  {
    name: "Ali D.",
    feedback: "Our CRM project was complex, but Saad handled it with expertise and clear communication throughout.",
    company: "Leaders Tax Collection"
  }
];

const trustStats = [
  { label: "Projects Delivered", value: "15+" },
  { label: "Technologies Mastered", value: "10+" },
  { label: "Client Satisfaction", value: "100%" },
];

const Testimonials = () => (
  <section className="py-20 px-4 bg-[#181818] text-white">
    <motion.h2
      className="text-4xl font-bold text-theme-color text-center mb-10"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      What Clients Say
    </motion.h2>
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-12">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-[#232323] rounded-2xl shadow-lg p-7 border border-theme-color/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <p className="text-lg text-gray-200 mb-4">“{t.feedback}”</p>
          <div className="font-bold text-theme-color">{t.name}</div>
          <div className="text-sm text-gray-400">{t.company}</div>
        </motion.div>
      ))}
    </div>
    <div className="flex flex-wrap justify-center gap-8">
      {trustStats.map((stat, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center bg-[#232323] rounded-xl px-8 py-6 shadow border border-theme-color/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
        >
          <span className="text-3xl font-extrabold text-theme-color mb-1">{stat.value}</span>
          <span className="text-gray-300 text-base font-medium">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
