import { motion } from "framer-motion";
import Form from "./Form";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase mb-4"
          >
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight"
          >
            Let's Work Together on Your Next Project
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl mt-4"
          >
            Whether you need a new business website, an e-commerce online store, a custom web application, or an AI integration — send a message below and I'll get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <Form />
          <ContactInfo />
        </div>

      </div>
    </section>
  );
};

export default Contact;

