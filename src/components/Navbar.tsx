import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { AnimatePresence, motion, useScroll } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Feedback", href: "#testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Reading Progress Bar */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 fixed top-0 left-0 right-0 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <nav className="bg-[#09090b]/85 backdrop-blur-md border-b border-[#27272a]/60 h-16 w-full px-4 sm:px-8 lg:px-12 flex justify-between items-center transition-all">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 text-sm group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all">
            S
          </div>
          <span className="font-mono text-base font-bold text-zinc-100 tracking-tight">
            saad<span className="text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Center Live Availability Badge (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Full-Stack & SaaS projects</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-emerald-400 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold tracking-wide text-zinc-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBarsStaggered size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-[#121215] border-l border-[#27272a] p-6 flex flex-col justify-between z-50 md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#27272a]">
                  <span className="font-mono text-base font-bold text-zinc-100">
                    saad<span className="text-emerald-400">.dev</span>
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-zinc-400 hover:text-white"
                    aria-label="Close menu"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-zinc-300 hover:text-emerald-400 py-2 border-b border-[#18181b] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-6 border-t border-[#27272a]">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available for work</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 rounded-lg text-sm font-bold text-zinc-900 bg-emerald-400 hover:bg-emerald-300 transition-all"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

