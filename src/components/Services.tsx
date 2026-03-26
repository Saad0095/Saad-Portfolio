import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaLayerGroup, FaFigma } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-theme-color text-4xl mb-3" />,
    title: "Modern Web Applications",
    description: "I build scalable, high-performance web apps using React & Node.js tailored to your business needs.",
    cta: "Start a Project"
  },
  {
    icon: <FaRocket className="text-theme-color text-4xl mb-3" />,
    title: "High-Converting Landing Pages",
    description: "Designed to turn visitors into customers using modern UI/UX principles and conversion-focused design.",
    cta: "Let’s Work Together"
  },
  {
    icon: <FaLayerGroup className="text-theme-color text-4xl mb-3" />,
    title: "Full-Stack Development",
    description: "End-to-end development from frontend to backend with clean, scalable architecture for real business value.",
    cta: "Hire Me"
  },
  {
    icon: <FaFigma className="text-theme-color text-4xl mb-3" />,
    title: "UI to Code (Figma to React)",
    description: "Convert designs into pixel-perfect, responsive React applications that match your vision.",
    cta: "Start a Project"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-[#181818]">
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Services
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-theme-color/30 transition-shadow overflow-hidden p-7 flex flex-col items-center text-center border border-transparent hover:border-theme-color"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {service.icon}
            <h3 className="text-xl font-bold text-theme-color mb-2">{service.title}</h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <a
              href="#contact"
              className="inline-block bg-theme-color text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-emerald-600 transition-all duration-300 text-base mt-auto cursor-pointer"
            >
              {service.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
