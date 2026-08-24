import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
  showCursor?: boolean;
  className?: string;
  cursorClassName?: string;
}

export function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseTime = 2200,
  loop = true,
  showCursor = true,
  className = "",
  cursorClassName = "text-emerald-400 animate-pulse",
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const currentWord = words[wordIndex % words.length];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === currentWord) {
      if (loop || wordIndex < words.length - 1) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime, loop]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      {showCursor && <span className={`ml-0.5 font-mono ${cursorClassName}`}>|</span>}
    </span>
  );
}
