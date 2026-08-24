import DevImg from "../assets/developer_image.jpg";
import { motion } from "framer-motion";
import Resume from "../assets/Saad - Full Stack Developer Resume.pdf";
import { FaDownload, FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Computer Science Background",
      description: "CS student with a deep focus on software engineering principles, full-stack architecture, data structures, and production-ready applications."
    },
    {
      icon: FaCode,
      title: "Full-Stack & System Design",
      description: "Adept at unifying frontend UIs (React/Next.js) with scalable REST backends (Node.js/Express), database models (MongoDB), and RBAC access controls."
    },
    {
      icon: FaRocket,
      title: "Product-First Engineering",
      description: "Focused on solving business pain points by shipping complete SaaS platforms, multi-role CRMs/ERPs, AI workflows, and desktop automation tools."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Developer Image & Status Box */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#121215] border border-zinc-800 p-2 shadow-2xl">
                <img
                  src={DevImg}
                  alt="Muhammad Saad Bin Khalid"
                  className="w-full h-80 object-cover object-center rounded-xl"
                />
                <div className="mt-3 p-3 bg-[#18181b] rounded-lg border border-zinc-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">STATUS</span>
                  <span className="text-emerald-400 font-semibold">Available for Work</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* About Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold mb-4"
            >
              <span>ABOUT THE DEVELOPER</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight leading-tight mb-6"
            >
              Building modern websites, web applications, and custom software tailored to your business.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-zinc-300 leading-relaxed text-base sm:text-lg mb-8"
            >
              I am a Full-Stack Developer and Computer Science student based in Karachi, Pakistan. I specialize in creating clean, fast, and reliable web products — from high-converting landing pages and online stores to multi-role CRMs, SaaS management portals, and automated web applications that deliver real value to your business.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-zinc-400 leading-relaxed text-sm mb-8"
            >
              Whether it's a multi-role sales CRM with live caller workflows, an AI-powered school SaaS handling fee vouchers, or desktop automation bots for lead extraction — my approach is rooted in code readability, system security, and business value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href={Resume}
                download="Saad_Bin_Khalid_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-zinc-100 bg-zinc-900 border border-zinc-700 hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-md group cursor-pointer"
              >
                <FaDownload className="text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#121215] border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

