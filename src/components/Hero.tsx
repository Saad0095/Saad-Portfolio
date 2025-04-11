import HeroImg from "../assets/Hero_Image.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen pt-40 md:py-20 px-4 flex flex-col-reverse md:flex-row justify-center items-center mx-auto md:w-10/12">
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <motion.h4
          className="text-lg sm:text-xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi there! I am
        </motion.h4>
        <motion.h1
          className="text-4xl sm:text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          FrontEnd <span className="text-theme-color">Developer</span>
        </motion.h1>
        <motion.h4
          className="text-lg sm:text-xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          With Expertise in React, Tailwind CSS, and TypeScript
        </motion.h4>

        <motion.button
          className="bg-theme-color text-white rounded py-3 px-6 font-bold cursor-pointer mx-auto md:mx-0 max-w-28 transition-all duration-300 ease-in-out transform hover:scale-105"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <a href="#contact">Hire Me!</a>
        </motion.button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <motion.img
          src={HeroImg}
          alt="Hero"
          className="max-w-full h-auto object-contain rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
};

export default Hero;
