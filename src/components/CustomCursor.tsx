import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  // Motion values bypass React re-renders for buttery 120 FPS performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Precision instant spring for inner dot (0 lag)
  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 60, mass: 0.05 });
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 60, mass: 0.05 });

  // Ultra-responsive fluid spring for outer ring
  const ringX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.1 });
  const ringY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.1 });

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, input, select, textarea, [role='button'], .clickable")
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Inner Dot (Instant 0-Lag Follower) */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-emerald-400 rounded-full pointer-events-none z-[9999] hidden lg:block will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Smooth Fluid Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-400/60 pointer-events-none z-[9999] hidden lg:block will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.75 : 1,
          borderColor: isHovered ? "rgba(16, 185, 129, 0.95)" : "rgba(16, 185, 129, 0.5)",
          backgroundColor: isHovered ? "rgba(16, 185, 129, 0.15)" : "rgba(16, 185, 129, 0)",
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
