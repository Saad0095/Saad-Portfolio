import DevImg from "../assets/developer_image.jpg";
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
          src={DevImg}
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
          Hi, I'm Muhammad Saad Bin Khalid. I’m a Full Stack MERN Developer passionate about building modern, scalable, and responsive web applications. I specialize in React.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, Node.js, Express.js, and MongoDB, creating clean, maintainable, and high-performance applications.
          <br />
          <br />
          With experience in both frontend and backend development, I bridge the gap between design and functionality — delivering secure, optimized, and user-friendly apps. My work focuses on real-world impact, clean code, and seamless performance across devices.
          <br />
          <br />
          I’m currently enrolled at NED University (BCIT, Class of 2029), continuously expanding my Full Stack skills while exploring AI and advanced backend technologies.
        </motion.p>

        <motion.a
          href={Resume}
          download="Saad Frontend Dev_Resume.pdf"
          rel="noopener noreferrer"
          className="text-base border-2 border-theme-color text-white rounded py-3  font-bold cursor-pointer hover:bg-theme-color w-36 text-center transition-all ease-in-out mx-auto md:mx-0"
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
