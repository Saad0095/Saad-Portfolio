import HeroImg from "../assets/Hero_Image.png";
import { motion } from "framer-motion";
import Resume from "../assets/Saad - Frontend Developer Resume.pdf"
const About = () => {
  return (
    <div
      id="about"
      className="py-20 px-4 flex flex-col md:flex-row justify-center items-center mx-auto md:w-10/12"
    >
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <motion.img
          src={HeroImg}
          alt="Hero"
          className="max-w-full h-auto object-contain rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
        <motion.h1
          className="text-4xl font-bold text-theme-color"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Muhammad Saad Bin Khalid – a Frontend Developer passionate about crafting modern, responsive, and high-performance web applications.
          <br />
          <br />
          With expertise in React, TypeScript, Tailwind CSS, and Framer Motion, I create interactive, user-friendly experiences that blend aesthetics with functionality. My focus is on writing clean, maintainable code while ensuring seamless performance across devices.
          <br />
          <br />
          I’m always eager to explore new technologies, optimize user experiences, and push the boundaries of front-end development. Let's build something amazing together!
        </motion.p>

        <motion.a
          href={Resume}
          download="Saad Frontend Dev_Resume.pdf"
          rel="noopener noreferrer"
          className="text-base border-2 border-theme-color text-white rounded py-4 font-bold cursor-pointer hover:bg-theme-color w-48 text-center transition-all ease-in-out"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          View Resume
        </motion.a>
      </div>
    </div>
  );
};

export default About;
