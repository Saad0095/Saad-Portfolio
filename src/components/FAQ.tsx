import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { Typewriter } from "./ui/typewriter";

interface FAQItem {
  question: string;
  answer: string;
}


const faqs: FAQItem[] = [
  {
    question: "Who is Muhammad Saad Bin Khalid?",
    answer: "Muhammad Saad Bin Khalid is a Full-Stack Developer, SaaS Engineer, and Computer Science student based in Karachi, Pakistan. He specializes in building modern business websites, multi-role sales CRMs, ERP management systems, custom web applications, and smart API integrations."
  },
  {
    question: "What web products and services does Saad build?",
    answer: "Saad builds high-converting business websites, e-commerce online stores, custom web applications, multi-role sales CRMs (with RBAC access control), school management SaaS platforms, and desktop lead-generation scraping tools."
  },
  {
    question: "What core technologies and tech stack does Saad use?",
    answer: "Saad's core technical stack includes React, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, JWT Authentication, Socket.IO, REST APIs, Puppeteer, Linux, Nginx, and Docker."
  },
  {
    question: "Does Saad build SaaS applications, CRMs, and ERP portals?",
    answer: "Yes. Saad has engineered flagship products such as CleanMeets CRM (a sales CRM with role-based access control, caller routing, and real-time Socket.IO sync) and SchoolSync (a school management SaaS platform handling fee vouchers, student rosters, and academic tools)."
  },
  {
    question: "Does Saad integrate smart APIs or AI features into applications?",
    answer: "Yes. Saad integrates practical APIs (such as OpenAI and Groq) into everyday web workflows — such as automated report card comment generation, document drafting, smart data parsing, and lead extraction."
  },
  {
    question: "Is Saad available for freelance project contracts or full-stack engineering roles?",
    answer: "Yes. Saad is open to freelance project development (websites, web apps, CRMs, web tools) as well as full-stack engineering contract roles and full-time company opportunities."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b] border-t border-[#27272a]/60">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase mb-4"
          >
            <FaQuestionCircle size={12} />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight"
          >
            <Typewriter
              words={[
                "Frequently Asked Questions",
                "Services, Stack & Development FAQ"
              ]}
              typingSpeed={60}
              pauseTime={2500}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-zinc-400 max-w-lg mt-3"
          >
            Everything you need to know about my software development services, technical capabilities, and availability.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#121215] border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-zinc-100 text-base sm:text-lg hover:text-emerald-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`text-emerald-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                    size={14}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
