import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { AnimatePresence, motion, useScroll } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4 pointer-events-none">
      {/* Top Reading Progress Bar */}
      <motion.div
        className="h-[2px] bg-emerald-400 fixed top-0 left-0 right-0 origin-left z-50 pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Pill Nav */}
      <div className="pointer-events-auto w-full max-w-4xl bg-[#09090b]/80 backdrop-blur-xl border border-zinc-800/90 rounded-full px-4 sm:px-6 py-2.5 shadow-2xl shadow-black/80 flex items-center justify-between transition-all">

        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-mono font-bold text-zinc-100 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
          <span>
            Saad<span className="text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${isActive ? "text-zinc-100 font-semibold" : "hover:text-zinc-200"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-zinc-800/80 border border-zinc-700/60 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Let's Talk CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-zinc-300 hover:text-white focus-visible:outline-none rounded-lg cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>

      </div>

      {/* Clean Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed top-16 left-4 right-4 bg-[#121215] border border-zinc-800 rounded-2xl p-6 shadow-2xl z-50 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-emerald-400 py-2 border-b border-zinc-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all mt-2"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;


