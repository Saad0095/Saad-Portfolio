import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = "hover:text-theme-color transition duration-300";

  return (
    <nav className="bg-[#0C0C0C] fixed z-50 h-16 w-full flex justify-between items-center px-6 md:px-20 py-5 shadow-md">
      <h1 className="font-bold text-3xl text-white tracking-wide hover:text-theme-color transition duration-300">
        {"Saad</>"}
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white font-semibold">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={linkClasses}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA Button */}
      <div className="hidden md:flex">
        <a
          href="#contact"
          className="bg-theme-color text-white py-2 px-6 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Contact Me
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes size={25} className="transition-transform duration-300 rotate-180 cursor-pointer" />
        ) : (
          <FaBarsStaggered size={25} className="transition-transform duration-300 cursor-pointer" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-2/3 h-screen bg-[#0C0C0C]/95 backdrop-blur-md p-10 flex flex-col gap-8 text-white z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-theme-color to-pink-500 text-white py-2 px-6 font-semibold rounded-full shadow-md transition duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
