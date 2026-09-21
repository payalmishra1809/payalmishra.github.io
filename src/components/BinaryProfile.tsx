import React from 'react';
import { Plus, Target, CheckCircle2, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { BINARY_PROFILE } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const BinaryProfile: React.FC = () => {
  return (
    <section id="binary" className="py-24 sm:py-32 relative overflow-hidden bg-zinc-50/50 dark:bg-transparent border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Intellectual Audit</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-[1.2]">
            The Binary Profile
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
            A transparent assessment of verifiable technical strengths alongside active doctoral-level growth frontiers, framing near-term operational impact alongside long-term research ambition.
          </p>
        </div>

        {/* 2-Column Binary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Core Strengths (+) */}
          <SpotlightCard className="p-7 sm:p-10">
            <div className="flex items-center gap-3.5 mb-8 pb-5 border-b border-zinc-100 dark:border-zinc-800">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-700/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                +
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-950 dark:text-white pb-0.5 leading-snug">
                  Verifiable Strengths
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Demonstrated Production Competencies
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {BINARY_PROFILE.plus.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 pb-5 border-b border-zinc-100 dark:border-zinc-800/80 last:border-b-0 last:pb-0"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <div>
                    <h4 className="font-display font-bold text-base text-zinc-950 dark:text-white mb-1 pb-0.5 leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Active Growth Vectors (Δ) */}
          <SpotlightCard className="p-7 sm:p-10">
            <div className="flex items-center gap-3.5 mb-8 pb-5 border-b border-zinc-100 dark:border-zinc-800">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-700/80 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
                Δ
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-950 dark:text-white pb-0.5 leading-snug">
                  Active Growth Frontiers
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Research &amp; Systems Specialization
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {BINARY_PROFILE.minus.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 pb-5 border-b border-zinc-100 dark:border-zinc-800/80 last:border-b-0 last:pb-0"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <div>
                    <h4 className="font-display font-bold text-base text-zinc-950 dark:text-white mb-1 pb-0.5 leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
};
