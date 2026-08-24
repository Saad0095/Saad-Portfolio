import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCheckCircle } from "react-icons/fa";

import crmImg from "../assets/Cleanmeets CRM (1).jpg";
import schoolSyncImg from "../assets/SchoolSync.jpeg";
import meetsnexImg from "../assets/meetsnex (1).jpg";
import devphicScraperImg from "../assets/Devphic Scraper.jpeg";

import { Typewriter } from "./ui/typewriter";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase mb-4"
          >
            <span>FEATURED PRODUCT SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight"
          >
            <Typewriter
              words={[
                "Websites, Web Apps & Software Projects",
                "Featured Products & SaaS Platforms"
              ]}
              typingSpeed={60}
              pauseTime={2500}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl mt-3"
          >
            From modern business landing pages to AI school SaaS platforms, multi-role sales CRMs, and lead automation tools — here is real software built for clients and companies.
          </motion.p>
        </div>

        <div className="space-y-24">

          {/* =========================================================
              01 — CleanMeets CRM (Dominant Product Showcase)
             ========================================================= */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-[#121215] border border-zinc-800/90 rounded-2xl overflow-hidden shadow-2xl hover:border-emerald-500/40 transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">

              {/* Left Column: Narrative & Technical Specs */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400">01</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold uppercase">
                      Sales CRM / Business SaaS
                    </span>
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[11px]">
                      FLAGSHIP PRODUCT
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 mb-3 tracking-tight">
                    CleanMeets CRM
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-medium">
                    A complete CRM built around real sales and lead-management workflows. Engineered with granular role-based permissions, live call agent routing, and real-time updates for multi-region teams.
                  </p>
                  {/* Key Capabilities */}
                  <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-zinc-300">
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Multi-Role Access (RBAC):</strong> Admin, Manager, Caller-Agent, and Closer-Agent role hierarchies with distinct permission boundaries.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Lead Pipeline & Routing:</strong> Automated lead assignment, CSV bulk data import, status tracking, and call history logging.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Socket.IO Workflows & REST:</strong> Real-time agent notifications, live status sync, executive dashboards, and JWT auth.</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack & Action Links */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Socket.IO", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-[#09090b] border border-zinc-800 text-zinc-300 font-mono text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md cursor-pointer"
                    >
                      <span>Discuss Implementation</span>
                      <FaExternalLinkAlt size={11} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Browser Window Chrome Mockup */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="relative rounded-xl overflow-hidden bg-[#09090b] border border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Browser Header Bar */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#121215] border-b border-zinc-800 text-[11px] font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-zinc-500 text-[11px]">cleanmeets-crm.app</span>
                    <span className="text-emerald-400 font-bold">ONLINE</span>
                  </div>
                  {/* Image Viewport */}
                  <img
                    src={crmImg}
                    alt="CleanMeets CRM Dashboard"
                    className="w-full h-auto max-h-[380px] object-cover object-top"
                  />
                  <div className="p-3 bg-[#121215] border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between font-mono">
                    <span>ROLE: ADMIN / AGENT</span>
                    <span className="text-emerald-400">SOCKET READY</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.article>


          {/* =========================================================
              02 — SchoolSync (AI-Powered School Management SaaS)
             ========================================================= */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-[#121215] border border-zinc-800/90 rounded-2xl overflow-hidden shadow-2xl hover:border-emerald-500/40 transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">

              {/* Left Column: Browser Window Screenshot Showcase */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                <div className="relative rounded-xl overflow-hidden bg-[#09090b] border border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between px-3 py-2 bg-[#121215] border-b border-zinc-800 text-[11px] font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-zinc-500 text-[11px]">schoolsync-saas.app</span>
                    <span className="text-emerald-400 font-bold">AI ONLINE</span>
                  </div>
                  <img
                    src={schoolSyncImg}
                    alt="SchoolSync SaaS Platform Screenshot"
                    className="w-full h-auto max-h-[380px] object-cover object-top"
                  />
                  <div className="p-3 bg-[#121215] border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between font-mono">
                    <span>ACADEMIC WORKFLOWS</span>
                    <span className="text-emerald-400">AI ASSISTED</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & AI Highlights */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400">02</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold uppercase">
                      AI-Powered School Management SaaS
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 mb-3 tracking-tight">
                    SchoolSync Platform
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-medium">
                    A modern school management platform with practical AI integrated into everyday academic and administrative workflows — transforming fee management, teacher tasks, and parent communication.
                  </p>

                  <div className="space-y-3 mb-6 text-xs sm:text-sm text-zinc-300">
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                      <span><strong>School & Campus Management:</strong> Student rosters, teacher assignments, homework tracking, and role-based access controls.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Fee Management & Voucher System:</strong> Automated fee calculations, voucher generation, and payment status tracking.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                      <span><strong>AI Workflows:</strong> Built-in AI Circular Generator, AI Teacher Assistant, and AI Report Card Comment Generator.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {["React", "Node.js", "Express", "MongoDB", "Groq API", "Tailwind CSS", "RBAC"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-[#09090b] border border-zinc-800 text-zinc-300 font-mono text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md cursor-pointer"
                    >
                      <span>Explore SaaS Architecture</span>
                      <FaExternalLinkAlt size={11} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.article>


          {/* =========================================================
              03 & 04 Grid (MeetsNex & Devphic Lead Scraper)
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* 03 — MeetsNex */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-extrabold text-emerald-400">03</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs uppercase">
                      Modern Business Website
                    </span>
                  </div>
                </div>

                {/* Browser Window Mockup */}
                <div className="rounded-xl overflow-hidden border border-zinc-800 mb-6 bg-[#09090b]">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#121215] border-b border-zinc-800 text-[10px] font-mono text-zinc-500">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-zinc-700 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-zinc-700 inline-block" />
                    </div>
                    <span>meetsnex.com</span>
                  </div>
                  <img
                    src={meetsnexImg}
                    alt="MeetsNex Landing Page Screenshot"
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-100 mb-2">
                  MeetsNex Business Website
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  Modern responsive business website with polished interactions and conversion-focused UX.
                </p>

                <div className="space-y-2 text-xs text-zinc-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-400" /> Modern visual hierarchy, responsive layouts & strong CTAs
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-400" /> Framer Motion animations & fluid micro-interactions
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {["Next.js", "Tailwind CSS", "Framer Motion", "Vite"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-[#09090b] border border-zinc-800 text-zinc-300 font-mono text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Saad0095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <FaGithub /> View Codebase on GitHub
                </a>
              </div>
            </motion.article>


            {/* 04 — Devphic Lead Scraper & Automation */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-extrabold text-emerald-400">04</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs uppercase">
                      Lead Generation / Automation
                    </span>
                  </div>
                </div>

                {/* Dashboard Desktop Window Mockup */}
                <div className="rounded-xl overflow-hidden border border-zinc-800 mb-6 bg-[#09090b]">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#121215] border-b border-zinc-800 text-[10px] font-mono text-zinc-500">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-zinc-700 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-zinc-700 inline-block" />
                    </div>
                    <span>devphic-scraper.app</span>
                  </div>
                  <img
                    src={devphicScraperImg}
                    alt="Devphic Lead Scraper Screenshot"
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-100 mb-2">
                  Devphic Lead Scraper & Automation
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  Desktop & backend lead generation tool featuring target web scraping, data extraction, license-key activation, cold-email outreach automation, and API backend integration.
                </p>

                <div className="space-y-2 text-xs text-zinc-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-400" /> Web scraping & target data extraction pipeline
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-400" /> Cold-email automation & license validation
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {["React", "Node.js", "Puppeteer", "Python", "REST APIs", "Automation"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-[#09090b] border border-zinc-800 text-zinc-300 font-mono text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Saad0095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <FaGithub /> View Repositories on GitHub
                </a>
              </div>
            </motion.article>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;



