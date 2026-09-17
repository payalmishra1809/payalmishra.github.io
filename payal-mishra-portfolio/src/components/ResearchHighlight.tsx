import React from 'react';
import { BookOpen, Sparkles, Layers, Cpu, Database, CheckCircle2, Clock } from 'lucide-react';
import { RESEARCH_PAPER } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const ResearchHighlight: React.FC = () => {
  return (
    <section id="research" className="py-24 sm:py-32 relative overflow-hidden bg-white dark:bg-[#090a0f] border-t border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Independent Scientific Research</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-[1.2]">
            Comprehensive Review Paper &amp; Benchmark Study
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
            Independent review paper and empirical benchmark study evaluating LLM agent memory architectures, demonstrating deterministic state tracking advantages over lossy summarization in multi-turn scientific environments.
          </p>
        </div>

        {/* Paper Main Card */}
        <SpotlightCard className="p-7 sm:p-12">
          
          {/* Status Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{RESEARCH_PAPER.status}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>Pre-submission Review Phase · Formal Publication Forthcoming</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-950 dark:text-white leading-normal pb-1 mb-3">
            {RESEARCH_PAPER.title}
          </h3>

          {/* Authors & Affiliation */}
          <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-6">
            {RESEARCH_PAPER.authors}{' '}
            <span className="text-zinc-500 font-normal">({RESEARCH_PAPER.authorNote})</span> ·{' '}
            <span className="text-zinc-600 dark:text-zinc-400 font-normal">{RESEARCH_PAPER.affiliation}</span>
          </div>

          {/* Abstract */}
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 mb-8 transition-all hover:border-zinc-300 dark:hover:border-zinc-600">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Abstract Overview
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed font-normal">
              {RESEARCH_PAPER.abstract}
            </p>
          </div>

          {/* 3 Core Benchmark Metrics with Hover Micro-Interactions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {RESEARCH_PAPER.metrics.map((metricItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md cursor-default group"
              >
                <div className="font-mono-code text-3xl font-bold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                  {metricItem.value}
                </div>
                <div className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                  {metricItem.label}
                </div>
              </div>
            ))}
          </div>

          {/* Architectures Compared with Interactive Hover States */}
          <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
              Architectures Compared &amp; Empirical Findings
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {RESEARCH_PAPER.architecturesCompared.map((arch, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xs group cursor-default"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-display font-bold text-sm text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors inline-block pb-0.5 leading-snug">
                      {arch.name}
                    </span>
                    <span className="text-[11px] font-mono-code px-2 py-0.5 rounded-full bg-zinc-200/70 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
                      {arch.score}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 leading-relaxed">
                    {arch.description}
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 italic">
                    Notice: {arch.drawback}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </SpotlightCard>

      </div>
    </section>
  );
};
