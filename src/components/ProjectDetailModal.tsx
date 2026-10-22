import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectChart } from './ProjectChart';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-100 dark:bg-[#161b2c] border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-zinc-950 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category & Project Number */}
        <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-500 dark:text-zinc-400 uppercase font-semibold mb-2">
          <span>{project.number}</span>
          <span>·</span>
          <span className="text-blue-600 dark:text-blue-400">{project.categoryLabel}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white leading-normal pb-1 mb-3">
          {project.title}
        </h3>

        {project.status && (
          <div className="mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              {project.status}
            </span>
          </div>
        )}

        {/* Key Metrics Banner if available */}
        {project.metrics && (
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#131726] border border-zinc-200/80 dark:border-zinc-700/80 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-mono-code text-3xl font-bold text-zinc-950 dark:text-white">
                {project.metrics.primary}
              </div>
              <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-0.5">
                {project.metrics.label}
              </div>
            </div>

            {project.metrics.subMetrics && (
              <div className="flex items-center gap-6">
                {project.metrics.subMetrics.map((sm, i) => (
                  <div key={i} className="text-right">
                    <div className="font-mono-code text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {sm.value}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      {sm.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Detailed Description */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mb-2">
            Project Overview
          </h4>
          <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed font-normal">
            {project.fullDesc}
          </p>
        </div>

        {/* Technical Deep Dive Box */}
        <div className="mb-8 p-6 rounded-2xl bg-zinc-50/70 dark:bg-[#131726]/70 border border-zinc-200/80 dark:border-zinc-700/80">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.highlightTitle}</span>
          </div>
          <p className="text-zinc-700 dark:text-zinc-200 text-sm sm:text-base leading-relaxed font-normal">
            {project.highlightText}
          </p>
        </div>

        {/* Project Visuals */}
        {project.charts && project.charts.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300">
                Project Visuals
              </h4>
              <span className="text-[11px] font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/60 px-2.5 py-1 rounded-full">
                Sample charts will be replaced with real results
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.charts.map((chart) => (
                <ProjectChart key={chart.title} chart={chart} />
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mb-3">
            Core Technologies &amp; Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-[#161b2c] border border-zinc-200/80 dark:border-zinc-700/80 text-xs font-mono-code text-zinc-800 dark:text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-200/80 dark:border-zinc-700/80">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Close Case Study
          </button>

          <div className="flex flex-wrap items-center justify-end gap-2">
          {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-600 text-xs font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Prototype</span>
          </a>
          )}
          {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 text-xs font-semibold text-white transition-colors shadow-xs"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
