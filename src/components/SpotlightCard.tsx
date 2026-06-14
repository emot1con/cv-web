import { type ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  return (
    <div className={`neo-card ${className} h-full`}>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}