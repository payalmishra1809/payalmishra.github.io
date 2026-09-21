import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2, TrendingUp, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-zinc-50/50 dark:bg-transparent border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Career Trajectory</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-[1.2]">
            Professional Experience &amp; Leadership
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
            Demonstrated rapid upward progression from technical intern to Domain Senior Team Lead at RSL,
            delivering production data pipelines, client-facing software, and organizational operational systems.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-700/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[31px] sm:-left-[49px] top-4 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  item.isCurrent
                    ? 'border-zinc-950 bg-zinc-950 dark:border-white dark:bg-white scale-125 shadow-sm'
                    : 'border-zinc-400 bg-white dark:bg-[#131726] dark:border-zinc-500 group-hover:border-zinc-950 dark:group-hover:border-white'
                }`}
              />

              <SpotlightCard className="p-6 sm:p-8">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-950 dark:text-white pb-0.5 leading-snug">
                        {item.role}
                      </h3>
                      {item.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-700/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 mt-1 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-zinc-400" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-[#0f121d] border border-zinc-200/80 dark:border-zinc-700/80 text-xs font-semibold text-zinc-700 dark:text-zinc-300 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Key Highlights Bullets */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2.5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </SpotlightCard>

            </div>
          ))}
        </div>

        {/* Academic Degrees Subsection */}
        <div className="mt-24 pt-16 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Academic Foundation</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-snug">
              Degrees &amp; Academic Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu) => (
              <SpotlightCard key={edu.id} className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-zinc-100 dark:bg-[#161b2c] text-zinc-900 dark:text-white flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="block font-mono-code text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white">
                      {edu.scoreValue}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      {edu.scoreLabel}
                    </span>
                  </div>
                </div>

                <h4 className="font-display font-bold text-lg sm:text-xl text-zinc-950 dark:text-white mb-1 pb-0.5 leading-snug">
                  {edu.degree}
                </h4>
                <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-2">
                  {edu.institution} · {edu.location}
                </div>
                <div className="text-xs font-mono-code text-zinc-400 dark:text-zinc-400">
                  {edu.period}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
