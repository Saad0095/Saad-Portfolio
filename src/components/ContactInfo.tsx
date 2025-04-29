import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
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
    ];

    return (
        <motion.div
            className="w-full md:w-1/2 flex flex-col gap-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <p className="p-4 text-gray-300">Got a project in mind, need some frontend magic, or just want to geek out about web development? I’d love to hear from you! Reach out anytime, and I’ll get back to you soon.</p>
            {contactItems.map(({ Icon, label, value }, index) => (
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
                        <p>{value}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default ContactInfo
