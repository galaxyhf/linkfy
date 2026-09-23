import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface LinkCardProps {
  index: number;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  featured?: boolean;
}

export default function LinkCard({
  index,
  title,
  description,
  url,
  icon: Icon,
  featured = false,
}: LinkCardProps) {
  const opensNewTab = !url.startsWith("mailto:");

  return (
    <motion.a
      href={url}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      className={`link-item${featured ? " link-item--featured" : ""}`}
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.38 + index * 0.06,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-label={`${title}: ${description}${opensNewTab ? " (abre em nova aba)" : ""}`}
    >
      <span className="link-index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <span className="link-icon" aria-hidden="true">
        <Icon size={21} strokeWidth={1.8} />
      </span>
      <span className="link-copy flex min-w-0 flex-col">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <span className="link-arrow" aria-hidden="true">
        <ArrowUpRight size={22} strokeWidth={1.8} />
      </span>
    </motion.a>
  );
}
