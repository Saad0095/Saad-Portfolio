import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

interface Form {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const contactItems = [
    {
      Icon: FaPhoneAlt,
      label: "Phone",
      value: "+92 317 0218290",
    },
    {
      Icon: FaWhatsapp,
      label: "Whatsapp",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("Message sent", result.text);
          toast.success("Email sent successfully!");
          setForm({
            name: "",
            email: "",
            phone: "",
            serviceType: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send email", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className="py-20 px-4">
      <ToastContainer/> 
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
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Enter your Name"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter your Email"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="Enter your Phone Number"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
            onChange={handleChange}
          />
          <select
            name="serviceType"
            value={form.serviceType}
            className="p-3 rounded-md border bg-[#0C0C0C] text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
            onChange={handleChange}
            required
          >
            <option value="">Select Service Type</option>
            <option value="Web Development">Front-End Development</option>
            <option value="Full Stack Development">Bug Fixing</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Landing Page Development">Landing Page Development</option>
            <option value="Full Stack Development">Full Stack Website Development</option>
            <option value="E-Commerce Website Dvelopment">E-Commerce Website Dvelopment</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            placeholder="Type your message here..."
            rows={4}
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all resize-none"
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-theme-color text-white py-3 px-6 rounded-md font-semibold hover:scale-105 transition-transform w-max cursor-pointer"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {contactItems.map(({ Icon, label, value, link }, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-5 p-4 rounded-lg hover:bg-white/10 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-md text-theme-color text-2xl hover:shadow-lg transition-all">
                <Icon />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold">{label}</h4>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
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
