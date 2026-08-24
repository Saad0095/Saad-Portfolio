import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaCopy, FaCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "saadbinkhalid1895@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full lg:w-5/12 flex flex-col justify-between space-y-6"
    >
      <div>
        <h3 className="text-xl font-bold text-zinc-100 mb-2">
          Direct Communication & Availability
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
          Whether you need a SaaS architecture built from scratch, a sales CRM system, AI workflows integrated, or full-stack engineering — I'm open to freelance contracts and engineering roles.
        </p>

        {/* Quick Email Copy Box */}
        <div className="p-4 bg-[#121215] border border-zinc-800 rounded-xl mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <MdEmail size={18} />
            </div>
            <div>
              <div className="text-[11px] font-mono text-zinc-500">PRIMARY EMAIL</div>
              <div className="text-xs font-mono font-semibold text-zinc-200">{emailAddress}</div>
            </div>
          </div>
          <button
            onClick={handleCopyEmail}
            className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 hover:bg-zinc-800 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-400" size={12} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <FaCopy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Action Touchpoints */}
        <div className="space-y-3">
          <a
            href="https://wa.me/923170218290"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#121215] border border-zinc-800 hover:border-emerald-500/40 hover:bg-[#18181c] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <FaWhatsapp size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">WhatsApp Chat</h4>
                <p className="text-xs text-zinc-400">+92 317 0218290</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold">Direct Message &rarr;</span>
          </a>

          <a
            href="tel:+923170218290"
            className="flex items-center justify-between p-4 rounded-xl bg-[#121215] border border-zinc-800 hover:border-emerald-500/40 hover:bg-[#18181c] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <FaPhoneAlt size={16} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Phone Contact</h4>
                <p className="text-xs text-zinc-400">+92 317 0218290</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold">Call &rarr;</span>
          </a>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-[#121215] border border-zinc-800/80 text-xs font-mono text-zinc-400 flex items-center justify-between">
        <span>RESPONSE EXPECTATION</span>
        <span className="text-emerald-400 font-semibold">&lt; 24 Hours</span>
      </div>
    </motion.div>
  );
};

export default ContactInfo;

