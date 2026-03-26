import { motion } from "framer-motion";
import Form from "./Form";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-[#0C0C0C]">
      <motion.h1
        className="text-4xl font-bold text-theme-color text-center mb-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Turn Your Idea Into a High-Performing Product
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <span className="font-semibold text-white">Have a project in mind?</span> Let’s build it together. I’m available for freelance work and open to new opportunities. Reach out via email, LinkedIn, or the form below — I’ll respond within 24 hours.
      </motion.p>
      <div className="flex flex-col md:flex-row justify-center gap-10 mx-auto md:w-10/12">
        <Form />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
