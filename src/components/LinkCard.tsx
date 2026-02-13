import type { LucideIcon } from 'lucide-react';

interface LinkCardProps {
  title: string;
  url: string;
  icon?: LucideIcon;
}

export default function LinkCard({ title, url, icon: Icon }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-md p-4 mb-3 bg-white/5 backdrop-blur-md border border-yellow-500/30 rounded-xl
                 hover:bg-yellow-500/10 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300
                 flex items-center justify-between group backdrop-filter"
    >
      <span className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5 text-yellow-400" />}
        <span className="text-base font-medium text-white">{title}</span>
      </span>
      <svg
        className="w-4 h-4 text-yellow-400/60 group-hover:text-yellow-300 group-hover:translate-x-1 transition-all"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
}
