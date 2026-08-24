import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import DevImg from "@/assets/developer_image.jpg";
import crmImg from "@/assets/Cleanmeets CRM (1).jpg";
import schoolSyncImg from "@/assets/SchoolSync.jpeg";
import meetsnexImg from "@/assets/meetsnex (1).jpg";

export function HeroSection04({ isReady = true }: { isReady?: boolean }) {
  return (
    <section className="min-h-screen overflow-hidden relative pt-24 pb-16 bg-[#09090b] text-zinc-100 flex flex-col justify-center select-none">
      {/* Background Radial Light Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-20 px-6 w-full">
        
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider shadow-lg shadow-emerald-500/5">
            <Sparkles className="size-3.5 text-emerald-400 animate-pulse" />
            <span>FULL-STACK & AI DEVELOPER • WEBSITES • WEB APPS • GEN-AI & LLMs</span>
          </div>
        </motion.div>

        {/* Large Editorial Headline Header */}
        <div className="relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="z-20 text-zinc-100 relative font-extrabold tracking-[-3px] md:tracking-[-8px] xl:tracking-[-12px] text-5xl md:text-8xl xl:text-[9rem] uppercase leading-none"
          >
            FULL-STACK DEVELOPER
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-3xl hidden sm:block absolute -bottom-8 right-8 md:right-24 font-light tracking-[4px] font-mono text-emerald-400"
          >
            SAAD BIN KHALID
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:hidden absolute -bottom-8 left-6 font-light tracking-[4px] font-mono text-emerald-400"
          >
            SAAD BIN KHALID
          </motion.p>
        </div>

        {/* Center Grid Showcase */}
        <div className="grid relative mt-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8 pt-6 flex flex-col items-center"
          >
            <div className="flex flex-col md:flex-row gap-6 bg-[#121215] border border-zinc-800 rounded-2xl w-full max-w-2xl h-fit p-8 md:p-10 items-start md:items-end justify-between shadow-2xl hover:border-emerald-500/40 transition-all duration-500 group">
              <div className="font-mono text-base md:text-xl space-y-2.5 text-zinc-200">
                <div className="text-emerald-400 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                  / WEBSITES & LANDING PAGES
                </div>
                <div className="text-zinc-300">/ E-COMMERCE & WEB APPS</div>
                <div className="text-zinc-400">/ CUSTOM CRMs & SOFTWARE</div>
              </div>
              
              <div className="hidden md:flex left-1/2 -top-10 w-fit overflow-hidden bg-[#18181c] rounded-xl border border-zinc-800 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src={DevImg}
                  alt="Saad Bin Khalid portrait"
                  className="h-44 w-36 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="text-left p-2.5 rotate-180 [writing-mode:vertical-rl] text-[10px] font-mono font-medium tracking-widest text-emerald-400 uppercase">
                  FULL-STACK ENGINEER
                </div>
              </div>
            </div>

            {/* Subtle Tech Stack Ticker Pill */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-zinc-400 pt-2">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="size-3 text-emerald-400" /> React & Next.js
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="size-3 text-emerald-400" /> Generative AI & Agentic LLMs
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="size-3 text-emerald-400" /> Node.js & MongoDB
              </span>
            </div>
          </motion.div>

          {/* Mobile Profile Image */}
          <div className="flex md:hidden mt-6 w-full overflow-hidden bg-[#121215] rounded-xl border border-zinc-800">
            <img
              src={DevImg}
              alt="Saad Bin Khalid portrait"
              className="h-48 w-full object-cover object-center"
            />
            <div className="text-left p-2.5 rotate-180 [writing-mode:vertical-rl] text-[10px] font-mono font-medium tracking-widest text-emerald-400 uppercase">
              FULL-STACK ENGINEER
            </div>
          </div>
        </div>

        {/* Subtitle Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="md:mt-16 mt-10"
        >
          <p className="mx-auto max-w-2xl font-sans text-center text-zinc-300 text-sm md:text-base leading-relaxed uppercase tracking-wide">
            FROM HIGH-CONVERTING LANDING PAGES AND BUSINESS WEBSITES TO CUSTOM WEB APPLICATIONS AND CRMs — I BUILD FAST, MODERN, AND RELIABLE DIGITAL PRODUCTS TAILORED TO YOUR GOALS.
          </p>
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <Button size="lg" asChild className="hover:scale-105 transition-transform shadow-xl shadow-emerald-500/20">
            <a href="#projects" className="cursor-pointer">
              View My Work
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform">
            <a href="#contact" className="cursor-pointer">
              Let's Talk
            </a>
          </Button>
        </motion.div>

        {/* Recent Work Footer Cards */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="md:flex mt-16 items-end justify-between gap-8"
        >
          <div className="relative group">
            <div className="w-56 h-32 shadow-2xl border border-zinc-800 rounded-xl overflow-hidden mb-8 md:mb-0 bg-[#121215]">
              <img
                src={meetsnexImg}
                alt="MeetsNex Showcase"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-56 h-32 absolute left-6 -top-6 shadow-2xl border border-zinc-800 rounded-xl overflow-hidden mb-8 md:mb-0 bg-[#121215] group-hover:-translate-y-1 transition-transform">
              <img
                src={schoolSyncImg}
                alt="SchoolSync Showcase"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-56 h-32 absolute left-12 -top-12 shadow-2xl border border-emerald-500/40 rounded-xl overflow-hidden mb-8 md:mb-0 bg-[#121215] group-hover:-translate-y-2 transition-transform">
              <img
                src={crmImg}
                alt="CleanMeets CRM Showcase"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="flex items-center md:justify-end gap-2 text-emerald-400">
              <span className="text-sm font-mono font-semibold tracking-wider">
                FEATURED PROJECTS
              </span>
              <ArrowDownRight className="size-5 animate-bounce" />
            </div>

            <div className="mt-2 md:text-right">
              <h2 className="text-3xl md:text-5xl uppercase tracking-tight font-extrabold text-zinc-100">
                Products Built for Scale
              </h2>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Grid Pattern Mask (Dark Mode) */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #27272a 1px, transparent 1px),
            linear-gradient(to bottom, #27272a 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)",
        }}
      />
    </section>
  );
}
