import DevImg from "../assets/developer_image.jpg";
import { motion } from "framer-motion";
import Resume from "../assets/Saad - Frontend Developer Resume.pdf"

const About = () => {
  const aboutPoints = [
    {
      title: "Who I Am",
      description: "Muhammad Saad Bin Khalid, a results-driven Full Stack Developer building high-converting web solutions for startups and businesses."
    },
    {
      title: "What I Do",
      description: "I create clean, responsive web apps and scalable backend systems that turn ideas into production-ready products that drive business growth."
    },
    {
      title: "What You Deliver",
      description: "Modern, fast, and conversion-focused web applications that help clients stand out online with visually stunning and user-friendly experiences."
    }
  ];

  return (
    <div id="about" className="py-20 px-4 flex flex-col justify-center items-center mx-auto md:w-10/12">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src={DevImg}
            alt="Muhammad Saad Bin Khalid - Full Stack Developer"
            className="max-w-xs md:max-w-sm h-auto object-contain rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <motion.h2
            className="text-4xl font-bold text-theme-color"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-gray-300 leading-relaxed text-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            I'm passionate about building real-world solutions, writing clean code, and continuously improving through hands-on development.
          </motion.p>
          <motion.a
            href={Resume}
            download="Saad Frontend Dev_Resume.pdf"
            rel="noopener noreferrer"
            className="text-base border-2 border-theme-color text-white rounded py-3 font-bold cursor-pointer hover:bg-theme-color w-40 text-center transition-all ease-in-out"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            View Resume
          </motion.a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {aboutPoints.map((point, i) => (
          <motion.div
            key={point.title}
            className="bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-transparent hover:border-theme-color transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-xl font-bold text-theme-color mb-3">{point.title}</h3>
            <p className="text-gray-300 leading-relaxed">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
