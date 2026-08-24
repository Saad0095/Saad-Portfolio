import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "LOADING PORTFOLIO...",
    "PREPARING PROJECTS & WORK...",
    "OPTIMIZING DESIGN & PERFORMANCE...",
    "WELCOME TO SAAD.DEV"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 25) setCurrentStep(0);
    else if (progress < 50) setCurrentStep(1);
    else if (progress < 75) setCurrentStep(2);
    else if (progress < 95) setCurrentStep(3);
    else setCurrentStep(4);
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-[99999] bg-[#09090b] flex flex-col items-center justify-center p-6 font-mono select-none"
      >
        {/* Subtle Background Radial Light */}
        <div className="absolute w-[500px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative w-full max-w-md bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          {/* Header Terminal Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-zinc-400 text-[11px] font-bold">SAAD.DEV OS // v2026</span>
          </div>

          {/* Telemetry Log Output */}
          <div className="space-y-2 text-xs min-h-[64px] flex flex-col justify-end">
            <div className="text-zinc-400 flex items-center gap-2">
              <span className="text-emerald-400 font-bold">&gt;</span>
              <span className="text-zinc-200">{steps[currentStep]}</span>
            </div>
            <div className="text-[10px] text-zinc-400 flex justify-between">
              <span>MODULES LOADED</span>
              <span className="text-emerald-400 font-bold">{progress}%</span>
            </div>
          </div>

          {/* Emerald Progress Bar */}
          <div className="relative w-full h-2 rounded-full bg-[#09090b] border border-zinc-800 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Subtext */}
          <div className="pt-2 text-[10px] text-zinc-400 text-center flex justify-between font-mono">
            <span>FULL-STACK DEVELOPER</span>
            <span className="text-emerald-400 font-bold">SAAD BIN KHALID</span>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
