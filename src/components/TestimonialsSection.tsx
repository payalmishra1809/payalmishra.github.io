import React, { useState } from 'react';
import { Quote, Building, GraduationCap, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'professional'>('all');

  const filtered = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.type === filter);

  return (
    <section id="recommendations" className="py-24 sm:py-32 relative overflow-hidden bg-zinc-50/50 dark:bg-transparent border-t border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Mentorship &amp; Endorsements</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-[1.2]">
              Recommendations
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
              Perspectives from university professors, engineering mentors, and organization leaders who have supervised Payal&apos;s research and technical deliverables.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 w-fit shadow-xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              All ({TESTIMONIALS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('academic')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'academic'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              Academic Faculty (3)
            </button>
            <button
              type="button"
              onClick={() => setFilter('professional')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'professional'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              Professional Leads (2)
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <SpotlightCard
              key={item.id}
              className="p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    {item.type === 'academic' ? (
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <Building className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    )}
                    <span>{item.tag}</span>
                  </span>

                  <Quote className="w-6 h-6 text-zinc-300 dark:text-zinc-700" />
                </div>

                <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed italic font-normal mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="font-display font-bold text-base text-zinc-950 dark:text-white pb-0.5 leading-snug">
                  {item.author}
                </div>
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {item.role}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
