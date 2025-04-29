import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

interface Form {
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    message: string;
}

const Form = () => {
    const [form, setForm] = useState<Form>({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
    });

    const formRef = useRef<HTMLFormElement | null>(null);

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
            <ToastContainer />
        </motion.form>
    )
}

export default Form
