import React, { useState, useEffect } from 'react';

interface CatAvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isPurring?: boolean;
  className?: string;
}

export const CatAvatar: React.FC<CatAvatarProps> = ({
  size = 'md',
  isPurring = false,
  className = ''
}) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [earTwitch, setEarTwitch] = useState(false);

  // Periodic blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Subtle ear twitch every 7 seconds
  useEffect(() => {
    const twitchInterval = setInterval(() => {
      setEarTwitch(true);
      setTimeout(() => setEarTwitch(false), 450);
    }, 7000 + Math.random() * 3000);

    return () => clearInterval(twitchInterval);
  }, []);

  const sizeDimensions = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${sizeDimensions[size]} ${className}`}
      aria-label="Cute White Cat Assistant"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full drop-shadow-sm transition-transform duration-300 ${isPurring ? 'animate-bounce' : ''}`}
      >
        <defs>
          {/* Blue Eye Gradient */}
          <linearGradient id="catEyeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          {/* Soft Ear Blush Gradient */}
          <linearGradient id="earBlush" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#fbcfe8" />
          </linearGradient>
        </defs>

        {/* Left Ear with dynamic twitch */}
        <g
          className={`origin-bottom-left transition-transform duration-300 ${
            earTwitch ? '-rotate-12 translate-y-[-2px]' : ''
          }`}
        >
          {/* Outer Ear (White fur with crisp soft border) */}
          <polygon
            points="18,52 14,14 44,34"
            fill="#FFFFFF"
            stroke="#cbd5e1"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Inner Ear (Cute pastel pink) */}
          <polygon
            points="22,46 19,21 40,34"
            fill="url(#earBlush)"
          />
        </g>

        {/* Right Ear with dynamic twitch */}
        <g
          className={`origin-bottom-right transition-transform duration-300 ${
            earTwitch ? 'rotate-12 translate-y-[-2px]' : ''
          }`}
        >
          {/* Outer Ear (White fur with crisp soft border) */}
          <polygon
            points="82,52 86,14 56,34"
            fill="#FFFFFF"
            stroke="#cbd5e1"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Inner Ear (Cute pastel pink) */}
          <polygon
            points="78,46 81,21 60,34"
            fill="url(#earBlush)"
          />
        </g>

        {/* Main Head Base (Pure White Kitten Fur) */}
        <ellipse
          cx="50"
          cy="58"
          rx="38"
          ry="34"
          fill="#FFFFFF"
          stroke="#cbd5e1"
          strokeWidth="3"
        />

        {/* Cheek Fluff Tufts (White) */}
        <path
          d="M 14 56 L 6 60 L 16 66"
          fill="#FFFFFF"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M 86 56 L 94 60 L 84 66"
          fill="#FFFFFF"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Rosy Pink Cheeks for extra cuteness */}
        <ellipse cx="27" cy="62" rx="6" ry="3.5" fill="#fecdd3" opacity="0.85" />
        <ellipse cx="73" cy="62" rx="6" ry="3.5" fill="#fecdd3" opacity="0.85" />

        {/* Forehead Little Sparkle / Star Accent */}
        <circle
          cx="50"
          cy="37"
          r="2.5"
          fill="#38bdf8"
          className="animate-pulse"
        />

        {/* Eyes (Open vs Blinking) */}
        {isBlinking ? (
          // Happy smiling closed eyes (^_^)
          <>
            <path
              d="M 28 53 Q 36 46 44 53"
              stroke="#0f172a"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 56 53 Q 64 46 72 53"
              stroke="#0f172a"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </>
        ) : (
          // Sparkling Jewel-Blue Eyes with double catchlight
          <>
            {/* Left Eye */}
            <ellipse
              cx="36"
              cy="52"
              rx="9"
              ry="10"
              fill="url(#catEyeGradient)"
            />
            {/* Pupil */}
            <ellipse
              cx="36"
              cy="52"
              rx="4.5"
              ry="7.5"
              fill="#090d16"
            />
            {/* Main Sparkle */}
            <circle cx="33.5" cy="48" r="3" fill="#FFFFFF" />
            {/* Secondary Sparkle */}
            <circle cx="38.5" cy="54" r="1.5" fill="#FFFFFF" opacity="0.9" />

            {/* Right Eye */}
            <ellipse
              cx="64"
              cy="52"
              rx="9"
              ry="10"
              fill="url(#catEyeGradient)"
            />
            {/* Pupil */}
            <ellipse
              cx="64"
              cy="52"
              rx="4.5"
              ry="7.5"
              fill="#090d16"
            />
            {/* Main Sparkle */}
            <circle cx="61.5" cy="48" r="3" fill="#FFFFFF" />
            {/* Secondary Sparkle */}
            <circle cx="66.5" cy="54" r="1.5" fill="#FFFFFF" opacity="0.9" />
          </>
        )}

        {/* Cute Pink Heart-Shaped / Triangular Nose */}
        <polygon
          points="46,63 54,63 50,68"
          fill="#fb7185"
        />

        {/* Cute Smiling Mouth (:3) */}
        <path
          d="M 44 69 Q 47 74 50 70 Q 53 74 56 69"
          stroke="#475569"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Fine Delicate Whiskers (Left) */}
        <line
          x1="12"
          y1="63"
          x2="36"
          y2="64"
          stroke="#94a3b8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="69"
          x2="34"
          y2="68"
          stroke="#94a3b8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Fine Delicate Whiskers (Right) */}
        <line
          x1="88"
          y1="63"
          x2="64"
          y2="64"
          stroke="#94a3b8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="86"
          y1="69"
          x2="66"
          y2="68"
          stroke="#94a3b8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
