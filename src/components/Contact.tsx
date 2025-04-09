import { motion } from "framer-motion";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const contactItems = [
    {
      Icon: FaPhoneAlt,
      label: "Phone",
      value: "+92 317 0218290",
    },
    {
      Icon: MdEmail,
      label: "Email",
      value: "saadbinkhalid1895@gmail.com",
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      value: "Saad Bin Khalid",
      link: "https://www.linkedin.com/in/saad-bin-khalid-b077b8243/",
    },
  ];

  return (
    <div id="contact" className="py-20 px-4">
      <motion.h1
        className="text-4xl font-bold text-theme-color text-center mb-10"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mx-auto md:w-10/12">
        {/* Form */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            placeholder="Enter your Name"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
          />
          <input
            type="text"
            placeholder="Enter your Phone Number"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
          />
          <select className="p-3 rounded-md border bg-[#0C0C0C] text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all">
            <option>Select Service Type</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Maintenance</option>
          </select>
          <textarea
            placeholder="Type your message here..."
            rows={4}
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all resize-none"
          ></textarea>
          <button className="bg-theme-color text-white py-3 px-6 rounded-md font-semibold hover:scale-105 transition-transform w-max">
            Send Message
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {contactItems.map(({ Icon, label, value, link }, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-5 p-4 rounded-lg hover:bg-white/50 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-md text-theme-color text-2xl hover:shadow-lg transition-all">
                <Icon />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold">{label}</h4>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {value}
                  </a>
                ) : (
                  <p>{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
