import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const Form = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "Landing Page / Business Website",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback feedback if keys are missing in dev environment
      setTimeout(() => {
        setForm({
          name: "",
          email: "",
          phone: "",
          serviceType: "Landing Page / Business Website",
          message: "",
        });
        setLoading(false);
      }, 1000);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log("Message sent", result.text);
          toast.success("Message sent successfully! I'll reply shortly.");
          setForm({
            name: "",
            email: "",
            phone: "",
            serviceType: "Landing Page / Business Website",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please reach out via WhatsApp/Email.");
          setLoading(false);
        }
      );
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full lg:w-7/12 bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-4"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <label className="block text-xs font-mono text-zinc-400 mb-1.5">YOUR NAME *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="John Doe"
            className="w-full p-3 rounded-lg bg-[#09090b] border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-600"
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full sm:w-1/2">
          <label className="block text-xs font-mono text-zinc-400 mb-1.5">YOUR EMAIL *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="john@company.com"
            className="w-full p-3 rounded-lg bg-[#09090b] border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-600"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <label className="block text-xs font-mono text-zinc-400 mb-1.5">PHONE NUMBER (OPTIONAL)</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="+1 (555) 000-0000"
            className="w-full p-3 rounded-lg bg-[#09090b] border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-600"
            onChange={handleChange}
          />
        </div>

        <div className="w-full sm:w-1/2">
          <label className="block text-xs font-mono text-zinc-400 mb-1.5">PROJECT / SERVICE TYPE *</label>
          <select
            name="serviceType"
            value={form.serviceType}
            className="w-full p-3 rounded-lg bg-[#09090b] border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            onChange={handleChange}
            required
          >
            <option value="Landing Page / Business Website">Landing Page / Business Website</option>
            <option value="E-Commerce / Web Store">E-Commerce / Web Store</option>
            <option value="Custom Web Application">Custom Web Application</option>
            <option value="Sales CRM / Management Portal">Sales CRM / Management Portal</option>
            <option value="AI Integration & Automation">AI Integration & Automation</option>
            <option value="Full-Stack Engineering / Contract Role">Full-Stack Engineering / Contract Role</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-zinc-400 mb-1.5">PROJECT DETAILS & SCOPE *</label>
        <textarea
          name="message"
          value={form.message}
          placeholder="Briefly describe your project requirements, target users, or key features..."
          rows={4}
          className="w-full p-3 rounded-lg bg-[#09090b] border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none placeholder:text-zinc-600"
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <>
            <FaSpinner className="animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Project Inquiry</span>
            <FaPaperPlane size={13} />
          </>
        )}
      </button>

      <ToastContainer theme="dark" position="bottom-right" />
    </motion.form>
  );
};

export default Form;

