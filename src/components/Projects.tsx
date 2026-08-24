import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCheckCircle, FaRobot, FaUsers, FaDatabase, FaShieldAlt, FaDesktop, FaChartLine } from "react-icons/fa";

import crmImg from "../assets/CRM1.jpg";
import leadsriftImg from "../assets/Leadsrift website (2).png";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b]">
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
            <span>FEATURED ENGINEERING WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight"
          >
            Production Products & SaaS Systems
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl mt-4"
          >
            Real software built for operational workflows — featuring role-based access, AI integrations, data pipelines, and real-time APIs.
          </motion.p>
        </div>

        <div className="space-y-20">
          
          {/* =========================================================
              01 — CleanMeets CRM (Dominant Feature Showcase)
             ========================================================= */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-[#121215] border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl emerald-glow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
              
              {/* Left Column: Technical Narrative & RBAC */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xl font-bold text-emerald-400">01</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold uppercase">
                      Sales CRM / Business SaaS
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[11px]">
                      PRIMARY FEATURED
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 mb-3 tracking-tight">
                    CleanMeets CRM
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-medium">
                    A complete CRM built around real sales and lead-management workflows. Engineered with granular role-based permissions, live call agent routing, and real-time updates for multi-region teams.
                  </p>

                  {/* Highlighted Functionality Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="bg-[#18181b] border border-zinc-800/90 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-1">
                        <FaShieldAlt /> Multi-Role Architecture (RBAC)
                      </div>
                      <p className="text-xs text-zinc-400">Admin, Manager, Caller-Agent, and Closer-Agent role hierarchies with distinct permission boundaries.</p>
                    </div>

                    <div className="bg-[#18181b] border border-zinc-800/90 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-1">
                        <FaDatabase /> Lead Pipeline & CSV Import
                      </div>
                      <p className="text-xs text-zinc-400">Automated lead assignment, CSV bulk data import, status tracking, and call history logging.</p>
                    </div>

                    <div className="bg-[#18181b] border border-zinc-800/90 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-1">
                        <FaUsers /> Live Socket.IO Workflows
                      </div>
                      <p className="text-xs text-zinc-400">Real-time caller/closer agent notifications, lead handoffs, and operational status sync.</p>
                    </div>

                    <div className="bg-[#18181b] border border-zinc-800/90 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-1">
                        <FaChartLine /> Executive Dashboards & REST
                      </div>
                      <p className="text-xs text-zinc-400">Interactive manager analytics, conversion metrics, performance reports, and secure JWT APIs.</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack & Links */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Socket.IO", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
                    >
                      <span>Discuss CRM Implementation</span>
                      <FaExternalLinkAlt size={11} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Screenshot & Interface Mockup */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">
                  <div className="flex items-center justify-between px-3 py-2 bg-[#09090b] border-b border-zinc-800 text-[11px] font-mono text-zinc-400">
                    <span>cleanmeets-crm.app/dashboard</span>
                    <span className="text-emerald-400">LIVE INSTANCE</span>
                  </div>
                  <img
                    src={crmImg}
                    alt="CleanMeets CRM Dashboard Showcase"
                    className="w-full h-auto max-h-[380px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3 bg-[#121215] border-t border-zinc-800/80 text-xs text-zinc-400 flex items-center justify-between font-mono">
                    <span>ROLE: ADMIN / CALLER AGENT</span>
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
            className="relative bg-[#121215] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl hover:border-emerald-500/40 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
              
              {/* Left Column: UI Mockup Showcase */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                <div className="bg-[#09090b] border border-zinc-800 rounded-xl p-5 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <span className="text-emerald-400 font-bold flex items-center gap-2">
                      <FaRobot /> SCHOOLSYNC AI ENGINE
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                      SaaS V2.0
                    </span>
                  </div>

                  {/* AI Circular Generator Box */}
                  <div className="p-3 bg-[#141418] rounded-lg border border-zinc-800">
                    <div className="flex items-center justify-between text-zinc-400 text-[11px] mb-1">
                      <span>MODULE: AI CIRCULAR GENERATOR</span>
                      <span className="text-emerald-400">OPENAI</span>
                    </div>
                    <p className="text-zinc-300 text-[11px]">
                      "Generates official campus notices, exam schedules, and holiday announcements in formatted PDF & HTML."
                    </p>
                  </div>

                  {/* Fee Management & Report Cards */}
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 bg-[#141418] rounded border border-zinc-800">
                      <div className="text-zinc-400">FEE SYSTEM</div>
                      <div className="text-emerald-400 font-semibold mt-0.5">Automated Vouchers</div>
                    </div>
                    <div className="p-2.5 bg-[#141418] rounded border border-zinc-800">
                      <div className="text-zinc-400">AI ASSISTANT</div>
                      <div className="text-emerald-400 font-semibold mt-0.5">Report Card Comments</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-800 text-zinc-500 text-[11px] flex justify-between">
                    <span>ACADEMIC ROLES: ADMIN / TEACHER / STUDENT</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Details & AI Features */}
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xl font-bold text-emerald-400">02</span>
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

                  <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-zinc-300">
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                      <span><strong>School & Campus Management:</strong> Student rosters, teacher assignments, homework tracking, and role-based access.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                      <span><strong>Fee Management & Voucher System:</strong> Automated fee calculation, voucher generation, and payment status tracking.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" />
                      <span><strong>AI Workflows:</strong> Built-in AI Circular Generator, AI Teacher Assistant, and AI Report Card Comment Generator.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Tailwind CSS", "RBAC"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
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
              className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-lg font-bold text-emerald-400">03</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs uppercase">
                      Modern Business Website
                    </span>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-800 mb-6 group">
                  <img
                    src={leadsriftImg}
                    alt="MeetsNex Landing Page Preview"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-100 mb-2">
                  MeetsNex / Leadsrift
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  High-converting digital business showcase built with smooth interaction design, responsive layouts, fast load speeds, and clean component architecture.
                </p>

                <div className="space-y-2 text-xs text-zinc-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-400" /> High-converting visual layout & call-to-actions
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-400" /> Framer Motion animations & fluid micro-interactions
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {["React", "Tailwind CSS", "Framer Motion", "Vite"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[11px]">
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
                  <FaGithub /> View Frontend Code base
                </a>
              </div>
            </motion.article>


            {/* 04 — Devphic Lead Scraper & Automation */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-lg font-bold text-emerald-400">04</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs uppercase">
                      Lead Generation / Automation
                    </span>
                  </div>
                </div>

                <div className="bg-[#09090b] border border-zinc-800 rounded-xl p-4 font-mono text-xs space-y-2 mb-6">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-zinc-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <FaDesktop /> DEVPHIC SCRAPER BOT
                    </span>
                    <span className="text-[10px] text-teal-400">LICENSE VERIFIED</span>
                  </div>
                  <div className="text-[11px] text-zinc-300 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Extraction Engine:</span>
                      <span>Automated Data Scraping</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Outreach Module:</span>
                      <span>Cold-Email Pipeline</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Data Format:</span>
                      <span className="text-emerald-400">CRM-Ready CSV / JSON</span>
                    </div>
                  </div>
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
                  {["Node.js", "Puppeteer", "Python", "REST APIs", "Automation"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[11px]">
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
                  <FaGithub /> View GitHub Projects
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

