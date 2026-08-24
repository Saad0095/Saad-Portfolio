import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 4;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="subtle-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-[99999] bg-[#09090b] flex flex-col items-center justify-center p-6 font-mono select-none"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute w-[350px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative flex flex-col items-center gap-6">
          {/* Subtle Code Bracket Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 text-3xl sm:text-5xl font-extrabold font-mono tracking-tight"
          >
            <span className="text-emerald-400">&lt;</span>
            <span className="text-zinc-100 font-sans tracking-tight">Saad.dev</span>
            <span className="text-emerald-400">/&gt;</span>
          </motion.div>

          {/* Minimal Thin Progress Bar */}
          <div className="w-48 sm:w-64 h-1 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/80">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
