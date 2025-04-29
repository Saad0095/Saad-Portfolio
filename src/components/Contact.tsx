import { motion } from "framer-motion";
import Form from "./Form";
import ContactInfo from "./ContactInfo";

const Contact = () => {
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

      <div className="flex flex-col md:flex-row justify-center gap-10 mx-auto md:w-10/12">
        <Form/>
        <ContactInfo/>
      </div>
    </div>
  );
};

export default Contact;
