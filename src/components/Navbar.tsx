import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  return (
    <div className="bg-[#0C0C0C] fixed z-50 h-16 w-full flex justify-between items-center px-6 md:px-20 py-5 shadow-md">
      <div>
        <h1 className="font-bold text-3xl text-white tracking-wide hover:text-theme-color transition duration-300">
          {"<Saad/>"}
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center items-center gap-8 text-white font-semibold">
        <li><a href="#about" className="hover:text-theme-color transition duration-300">About</a></li>
        <li><a href="#services" className="hover:text-theme-color transition duration-300">Services</a></li>
        <li><a href="#contact" className="hover:text-theme-color transition duration-300">Contact</a></li>
      </ul>

      <div className="hidden md:flex justify-center items-center gap-5 text-white">
        <button className="bg-gradient-to-r from-theme-color to-pink-500 text-white py-2 px-6 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
          Contact Me
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FaTimes size={25} className="transition-transform duration-300 rotate-180" />
        ) : (
          <FaBarsStaggered size={25} className="transition-transform duration-300" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-2/3 h-screen bg-[#0C0C0C]/95 backdrop-blur-md p-10 flex flex-col items-start gap-8 text-white"
          >
            <a href="#about" className="hover:text-theme-color transition duration-300" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" className="hover:text-theme-color transition duration-300" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#contact" className="hover:text-theme-color transition duration-300" onClick={() => setIsOpen(false)}>Contact</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-theme-color to-pink-500 text-white py-2 px-6 font-semibold rounded-full shadow-md transition duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Navbar;
