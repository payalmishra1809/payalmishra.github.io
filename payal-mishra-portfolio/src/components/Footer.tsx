import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800 py-12 bg-zinc-50 dark:bg-zinc-950 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Info */}
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-zinc-950 dark:text-white text-base tracking-tight pb-0.5 leading-snug">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Senior Lead Data Analyst &amp; AI Researcher · {PERSONAL_INFO.location}
            </div>
          </div>

          {/* Center: Live Local Time in IST */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono-code text-zinc-600 dark:text-zinc-300 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>IST (UTC+5:30):</span>
            <span className="font-semibold text-zinc-950 dark:text-white">{localTime || 'Active'}</span>
          </div>

          {/* Right: Back to top */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 transition-colors shadow-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 gap-2">
          <span>&copy; {new Date().getFullYear()} Payal Mishra. Minimalist Portfolio.</span>
          <span>Designed with mathematical precision &amp; high typographic craft.</span>
        </div>
      </div>
    </footer>
  );
};
