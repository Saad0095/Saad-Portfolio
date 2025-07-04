import { useEffect, useState } from "react"
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className=" text-white shadow-inner py-6 px-4 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        {/* Text */}
        <p className="text-center md:text-left mb-4 md:mb-0 tracking-wide">
          &copy; {year} <span className="text-theme-color font-semibold">Saad Bin Khalid</span>. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/Saad0095"
            target="_blank"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saad-bin-khalid-b077b8243/"
            target="_blank"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/923170218290"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
