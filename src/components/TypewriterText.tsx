import { useReducedMotion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export default function TypewriterText({ words, className = "" }: TypewriterTextProps) {
  const reduceMotion = useReducedMotion();
  const [animatedText] = useTypewriter({
    words,
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 42,
    delaySpeed: 1800,
  });
  const visibleText = reduceMotion ? words[0] : animatedText;

  return (
    <p className={className} aria-label={words.join(", ")}>
      <span aria-hidden="true">{visibleText}</span>
      {!reduceMotion && <span className="typewriter-cursor" aria-hidden="true" />}
    </p>
  );
}
