import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, Sparkles } from 'lucide-react';

export const CertificationsMarquee: React.FC = () => {
  const midPoint = Math.ceil(CERTIFICATIONS.length / 2);
  const rowOne = CERTIFICATIONS.slice(0, midPoint);
  const rowTwo = CERTIFICATIONS.slice(midPoint);

  return (
    <section id="certifications" className="py-24 sm:py-32 relative overflow-hidden bg-white dark:bg-[#090a10] border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Credentials &amp; Specializations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-[1.2]">
            Industry Certifications
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
            Continuous professional mastery across 65+ credentials from Google, Meta, DeepLearning.AI, Deloitte, and Yale.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper with Edge Fade Gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-20 bg-gradient-to-r from-white dark:from-[#090a10] to-transparent" />
        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-20 bg-gradient-to-l from-white dark:from-[#090a10] to-transparent" />

        {/* Row 1 (Moving Left) */}
        <div className="py-2">
          <div className="animate-marquee-left flex items-center gap-3">
            {rowOne.map((cert, idx) => (
              <div
                key={`r1-a-${idx}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-mono-code text-xs whitespace-nowrap bg-zinc-50 dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 shadow-xs hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                {cert.featured && <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                <span>{cert.name}</span>
              </div>
            ))}
            {rowOne.map((cert, idx) => (
              <div
                key={`r1-b-${idx}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-mono-code text-xs whitespace-nowrap bg-zinc-50 dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 shadow-xs hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                {cert.featured && <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                <span>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Moving Right) */}
        <div className="py-2">
          <div className="animate-marquee-right flex items-center gap-3">
            {rowTwo.map((cert, idx) => (
              <div
                key={`r2-a-${idx}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-mono-code text-xs whitespace-nowrap bg-zinc-50 dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 shadow-xs hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                {cert.featured && <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
                <span>{cert.name}</span>
              </div>
            ))}
            {rowTwo.map((cert, idx) => (
              <div
                key={`r2-b-${idx}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-mono-code text-xs whitespace-nowrap bg-zinc-50 dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 shadow-xs hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                {cert.featured && <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
                <span>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
