
import HeroImg from "../assets/Hero_Image.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-0 md:w-10/12 mx-auto pt-24 md:pt-40 gap-10">
      {/* Left: Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-2 text-center md:text-left items-center md:items-start">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          I help startups and businesses build <span className="text-theme-color">high-converting web applications</span>.
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300 max-w-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Fast, scalable, and user-focused digital products — built to drive real results.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <a href="#contact">
            <button className="bg-theme-color hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg w-full sm:w-auto cursor-pointer">Start a Project</button>
          </a>
          <a href="#projects">
            <button className="bg-white text-theme-color font-bold py-3 px-8 rounded-full shadow-lg hover:bg-theme-color hover:text-white transition-all duration-300 text-lg w-full sm:w-auto border-2 border-theme-color cursor-pointer">View My Work</button>
          </a>
        </motion.div>
      </div>
      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <motion.img
          src={HeroImg}
          alt="Muhammad Saad Bin Khalid - Full Stack Developer"
          className="max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain rounded-2xl shadow-2xl border-4 border-theme-color/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default Hero;
