import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaBuilding } from "react-icons/fa";

const testimonials = [
  {
    name: "Ali Hasan Rajani",
    company: "Cleanmeets",
    role: "CEO",
    feedback:
      "Saad handled our website development professionally and was easy to communicate with throughout the project. He understood what we needed, implemented the required features carefully, and was responsive whenever changes or improvements were needed. Overall, I had a good experience working with him and would recommend him for web development projects.",
  },
  {
    name: "Musaiyab Waseem",
    company: "MeetsNex",
    role: "Founder",
    feedback:
      "I worked with Saad, and the experience has been great so far. They helped us successfully complete our website project and were professional, responsive, and easy to work with throughout the process. I really appreciate their support and would definitely recommend them to anyone looking for reliable web development or kinda digital services.",
  },
  {
    name: "Hamza",
    company: "LeadsRift",
    role: "CEO",
    feedback:
      "Saad worked with us on a CRM project that involved multiple workflows and user requirements. He took the time to understand how our team operates and translated those requirements into a functional system. Communication was clear throughout the development process, and he was willing to make adjustments based on our feedback.",
  }
];

const trustStats = [
  { label: "Production Projects Delivered", value: "15+" },
  { label: "Technologies Mastered", value: "10+" },
  { label: "Client Satisfaction Rate", value: "100%" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b] border-t border-[#27272a]/60">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase mb-3"
          >
            <span>CLIENT TESTIMONIALS</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Trusted by Founders & Business Leaders
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg mt-2">
            Real feedback from founders, CEOs, and teams I've built software products for.
          </p>
        </div>

        {/* Modern Testimonial Card Slider */}
        <div className="relative bg-[#121215] border border-zinc-800 rounded-2xl p-8 sm:p-12 shadow-2xl mb-12">
          <FaQuoteLeft className="text-emerald-500/30 text-4xl mb-6" />

          <div className="min-h-[120px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed font-medium italic mb-8">
                  "{current.feedback}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-base">
                      {current.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-100">{current.name}</h3>
                      <div className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                        <FaBuilding size={11} className="text-emerald-400" />
                        <span>{current.company} — {current.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Dots & Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <FaChevronLeft size={12} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <FaChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="bg-[#121215] border border-zinc-800 rounded-xl p-5 text-center"
            >
              <div className="text-3xl font-extrabold text-emerald-400 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-zinc-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;


