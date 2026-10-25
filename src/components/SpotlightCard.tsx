import React, { useState, useRef, MouseEvent } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  onClick?: () => void;
  id?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor,
  borderColor,
  onClick,
  id
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group relative rounded-3xl border border-zinc-200/80 dark:border-zinc-700/70 bg-white dark:bg-[#0f121d] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-zinc-950/5 dark:hover:shadow-2xl dark:hover:shadow-black/60 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Dynamic border spotlight highlight on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${borderColor || 'rgba(96, 165, 250, 0.35)'}, transparent 70%)`
            : 'transparent',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px'
        }}
      />

      {/* Surface Radial Spotlight Lighting Effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-hidden"
        style={{
          background: isHovered
            ? `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor || 'rgba(59, 130, 246, 0.04)'}, transparent 65%)`
            : 'transparent'
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
