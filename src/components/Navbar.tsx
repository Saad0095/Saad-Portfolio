import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0C0C0C] fixed z-50 h-16 w-full flex justify-between items-center px-6 md:px-20 py-5">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-3xl text-white">{"<Saad/>"}</h1>
      </div>

      <ul className="hidden md:flex justify-center items-center gap-5 text-white">
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#services" className="hover:text-gray-400">Services</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>

      <div className="hidden md:flex justify-center items-center gap-5 text-white">
        <button className="bg-theme-color text-white py-2 px-4 font-bold cursor-pointer rounded-full">Contact Me</button>
      </div>

      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>

      <div className={`absolute top-16 left-0 w-full bg-[#181818] p-5 flex flex-col items-center gap-4 text-white transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <a href="#about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</a>
        <a href="#services" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a>
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
