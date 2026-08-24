import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#09090b] border-t border-[#27272a] py-12 px-4 sm:px-6 lg:px-12 text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copy */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="font-mono text-base font-bold text-zinc-100">
            saad<span className="text-emerald-400">.dev</span>
          </a>
          <p className="text-xs text-zinc-400">
            Full-Stack Developer • SaaS, CRM, ERP & AI Applications
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-zinc-400">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Featured Work</a>
          <a href="#capabilities" className="hover:text-emerald-400 transition-colors">Capabilities</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Tech Stack</a>
          <a href="#philosophy" className="hover:text-emerald-400 transition-colors">Philosophy</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Saad0095"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/saad-bin-khalid-b077b8243/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://wa.me/923170218290"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>

          <p className="text-[11px] font-mono text-zinc-400">
            &copy; {year} Muhammad Saad Bin Khalid. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

