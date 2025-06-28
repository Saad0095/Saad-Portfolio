import { motion } from "framer-motion";

const projects = [
  {
    title: "React E-commerce Fashion & Apparel Store",
    description:
      "Developed a full-featured fashion e-commerce site using React and Tailwind CSS. Includes product listings, detailed pages, filters, search, Redux-based cart, checkout, and a light/dark theme toggle for enhanced UX.",
    tech: ["React", "Tailwind CSS", "Redux"],
    link: "https://github.com/Saad0095/smh-clothing",
  },
  {
    title: "Job Portal",
    description:
      "Created a modern job portal with React and Tailwind CSS. Implemented dynamic job search and application UI with login/logout and English/Urdu multi-language support using React-i18next.",
    tech: ["React", "Tailwind CSS", "React i18next"],
    link: "https://github.com/Saad0095/job-portal",
  },
  {
    title: "VidStream (YouTube Clone)",
    description:
      "Built a responsive video streaming app similar to YouTube using React, Tailwind CSS, and Rapid API. Features include search, light/dark theme toggle and clean UI.",
    tech: ["React", "Tailwind CSS", "Rapid API"],
    link: "https://github.com/Saad0095/vidstream",
  },
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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-xl shadow-md transition duration-300 border border-transparent hover:shadow-lg hover:scale-105 hover:border-theme-color flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold text-theme-color mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm px-2 py-1 bg-theme-color text-white rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-color font-medium hover:underline"
            >
              View Code →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
