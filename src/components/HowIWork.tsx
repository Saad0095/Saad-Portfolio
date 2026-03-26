import { motion } from "framer-motion";
import { FaLightbulb, FaPencilAlt, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb className="text-4xl text-theme-color mb-4" />,
    title: "Discovery",
    description: "Understand your business goals, target audience, and project requirements in detail."
  },
  {
    icon: <FaPencilAlt className="text-4xl text-theme-color mb-4" />,
    title: "Planning & Design",
    description: "Structure UI/UX mockups and define system architecture for scalability and performance."
  },
  {
    icon: <FaCode className="text-4xl text-theme-color mb-4" />,
    title: "Development",
    description: "Build clean, high-performance applications with modern tech stack and best practices."
  },
  {
    icon: <FaRocket className="text-4xl text-theme-color mb-4" />,
    title: "Delivery & Optimization",
    description: "Launch, test thoroughly, optimize performance, and ensure long-term success."
  }
];

const HowIWork = () => (
  <section className="py-20 px-4 bg-[#0C0C0C]">
    <motion.h2
      className="text-4xl font-bold text-white text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      How I Work
    </motion.h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          className="bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-transparent hover:border-theme-color transition-all duration-300 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="flex justify-center mb-4">{step.icon}</div>
          <h3 className="text-2xl font-bold text-theme-color mb-3">{step.title}</h3>
          <p className="text-gray-300 leading-relaxed">{step.description}</p>
          {i < steps.length - 1 && (
            <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
              <div className="text-theme-color text-2xl">→</div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowIWork;
