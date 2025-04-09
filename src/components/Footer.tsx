import { useEffect, useState } from "react"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white shadow-inner py-6 px-4 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        {/* Text */}
        <p className="text-sm text-center md:text-left mb-4 md:mb-0 tracking-wide">
          &copy; {year} <span className="text-theme-color font-semibold">Saad Bin Khalid</span>. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/Saad0095"
            target="_blank"
            className="hover:text-theme-color transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saad-bin-khalid-b077b8243/"
            target="_blank"
            className="hover:text-theme-color transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/saadbinkhalid.18/"
            target="_blank"
            className="hover:text-theme-color transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
