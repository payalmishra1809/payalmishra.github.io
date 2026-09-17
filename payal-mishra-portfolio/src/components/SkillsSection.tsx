import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { Code2, Brain, Database, Server, Palette, CheckCircle2, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getCategoryIcon = (title: string) => {
    if (title.includes('Programming')) return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    if (title.includes('AI') || title.includes('Language')) return <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    if (title.includes('Data')) return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    if (title.includes('Systems')) return <Server className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    return <Layers className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />;
  };

  const filteredCategories = selectedFilter === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.title.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-white dark:bg-[#090a0f] border-t border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Core Competencies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-[1.2]">
              Technical Domain Mastery
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
              Applied expertise across statistical data science, scalable distributed architectures, agent evaluation benchmarks, and production-grade machine learning.
            </p>
          </div>

          {/* Quick Domain Filters */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 self-start md:self-auto shadow-xs">
            {[
              { label: 'All Domains', id: 'all' },
              { label: 'Languages', id: 'programming' },
              { label: 'AI & NLP', id: 'ai' },
              { label: 'Data & DB', id: 'data' },
              { label: 'Systems', id: 'systems' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedFilter === f.id
                    ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:-translate-y-0.5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <SpotlightCard
              key={category.title}
              className="p-6 sm:p-8"
            >
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center transition-transform group-hover:scale-110">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="font-display font-bold text-lg text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pb-0.5 leading-snug">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono-code text-xs px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-200 hover:border-zinc-950 dark:hover:border-white hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
