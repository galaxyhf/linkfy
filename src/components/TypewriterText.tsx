import { useTypewriter } from "react-simple-typewriter";

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export default function TypewriterText({
  words,
  className = "",
}: TypewriterTextProps) {
  const [text] = useTypewriter({
    words,
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  return (
    <p className={className}>
      {text}
      <span className="cursor-blink ml-0.5 text-yellow-400">|</span>
    </p>
  );
}
