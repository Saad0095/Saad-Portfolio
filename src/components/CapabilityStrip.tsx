import { motion } from "framer-motion";

const capabilities = [
  "Websites & Landing Pages",
  "E-Commerce & Web Stores",
  "Custom Web Applications",
  "CRMs & Management Portals",
  "AI & Automation Integrations",
  "REST APIs & Web Services",
  "Full-Stack Development",
  "Database & System Design",
];

const CapabilityStrip = () => {
  return (
    <section
      id="capabilities"
      className="py-6 bg-[#0c0c0e] border-y border-zinc-800/80 overflow-hidden relative group select-none"
    >
      {/* Subtle fade masks on left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0c0c0e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0c0c0e] to-transparent z-10 pointer-events-none" />

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap group-hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {/* Duplicate loop array for seamless continuous marquee */}
          {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-mono font-semibold text-zinc-300 tracking-wide uppercase flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 inline-block" />
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilityStrip;

