import { motion } from "framer-motion";

import crmImg from "../assets/CRM1.jpg";
import leadsriftImg from "../assets/Leadsrift website (2).png";
import uniconnectImg from "../assets/UniConnect 1.png";

const projects = [
  {
    title: "Leaders Tax Collection CRM",
    featured: true,
    image: crmImg,
    description: "Developed a full-stack CRM that streamlined lead management, improved workflow efficiency for multi-region agents, and enabled real-time communication.",
    impact: "Reduced lead management time by 40% and improved agent coordination across Karachi and Dubai offices.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind"],
    live: "#",
  },
  {
    title: "Leadsrift – Cold Calling Agency Landing Page",
    image: leadsriftImg,
    description: "Built a high-converting landing page that showcases services and drives client inquiries.",
    impact: "Increased qualified leads and client inquiries through optimized conversion design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "#",
  },
  {
    title: "UniConnect – Student Admission Web App",
    image: uniconnectImg,
    description: "Created a role-based admission platform with secure authentication and seamless API integration.",
    impact: "Simplified student admission process and improved user experience for administrators and students.",
    tech: ["React", "Tailwind"],
    live: "#",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0C0C0C] text-white">
      <motion.h2
        className="text-4xl font-bold text-theme-color text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative bg-[#1a1a1a]/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border-2 transition-all duration-300 flex flex-col justify-between ${project.featured ? 'border-theme-color scale-105 shadow-theme-color/30' : 'border-transparent hover:border-theme-color hover:scale-105'}`}
          >
            {project.featured && (
              <span className="absolute top-4 right-4 bg-gradient-to-br from-theme-color to-theme-color/60 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">Featured Project</span>
            )}
            <img src={project.image} alt={project.title} className="w-full h-44 object-cover rounded-xl mb-5 border border-theme-color/20 shadow-md" />
            <h3 className="text-2xl font-bold text-theme-color mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            {project.impact && (
              <p className="text-sm text-theme-color/80 font-semibold mb-4 italic">"Impact: {project.impact}"</p>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-theme-color/20 text-theme-color border border-theme-color rounded-md font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
