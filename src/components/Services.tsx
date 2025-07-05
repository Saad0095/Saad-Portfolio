import { motion } from "framer-motion";
import GigImg1 from "../assets/GigImg1.png";
import GigImg2 from "../assets/GigImg2.jpg";
import GigImg3 from "../assets/GigImg3.png";
import GigImg4 from "../assets/GigImg4.png";

const services = [
  {
    title: "Responsive React Frontend App",
    description:
      "I will build a fast and fully responsive React front-end application tailored to your needs.",
    link: "https://www.fiverr.com/s/BRD73xl",
    image: GigImg1,
  },
  {
    title: "Convert Figma to React",
    description:
      "I will convert your Figma design into a responsive and pixel-perfect React frontend.",
    link: "https://www.fiverr.com/s/2Kv2DoX",
    image: GigImg2,
  },
  {
    title: "Modern React UI Website",
    description:
      "I will develop a modern front-end website using React with a sleek, mobile-friendly interface.",
    link: "https://www.fiverr.com/s/0bVW8l2",
    image: GigImg3,
  },
  {
    title: "PSD/XD/Figma to HTML/CSS",
    description:
      "I will convert PSD, XD, or Figma designs into responsive HTML/CSS websites with clean code.",
    link: "https://www.fiverr.com/s/e6w45xr",
    image: GigImg4,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a]/60 backdrop-blur-md rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-[220px]">
              <div>
                <h3 className="text-xl font-semibold text-theme-color">
                  {service.title}
                </h3>
                <p className="text-gray-300 mt-2">
                  {service.description}
                </p>
              </div>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-theme-color font-semibold hover:underline"
              >
                Hire Me on Fiverr →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
