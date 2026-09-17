import React, { useState } from 'react';
import { Github, ArrowUpRight, Sparkles, Filter, Terminal, Cpu, Database, Activity, Code2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { SpotlightCard } from './SpotlightCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsBento: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { label: 'All Projects', value: 'All' },
    { label: 'AI & LLM Agents', value: 'GenAI' },
    { label: 'Systems & Trading', value: 'Systems' },
    { label: 'Machine Learning', value: 'ML' },
    { label: 'Analytics & Dashboards', value: 'Analytics' },
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeCategory === 'GenAI') return p.category === 'GenAI' || p.category === 'Research';
        if (activeCategory === 'Systems') return p.category === 'Systems';
        if (activeCategory === 'ML') return p.category === 'ML' || p.category === 'Vision' || p.category === 'Healthcare';
        if (activeCategory === 'Analytics') return p.category === 'Analytics';
        return true;
      });

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-zinc-50/50 dark:bg-transparent border-t border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
              <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-[1.2]">
              Engineered Systems &amp; Applied AI
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
              Production architectures, machine learning models, and low-latency data pipelines built with rigorous evaluation standards.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 self-start md:self-auto shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.value
                    ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:-translate-y-0.5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project) => {
            let colSpanClasses = 'lg:col-span-6';
            if (project.id === 'hinglish-nlp') {
              colSpanClasses = 'lg:col-span-12';
            } else if (project.id === 'hft-pipeline' || project.id === 'multimodal-rag' || project.id === 'fraud-detection') {
              colSpanClasses = 'lg:col-span-7';
            } else if (project.colSpan === 'sm') {
              colSpanClasses = 'lg:col-span-5 md:col-span-1';
            } else {
              colSpanClasses = 'lg:col-span-5 md:col-span-1';
            }

            return (
              <div key={project.id} className={`${colSpanClasses} flex flex-col`}>
                <SpotlightCard
                  className="h-full p-6 sm:p-8 flex flex-col justify-between group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-500 font-semibold">
                        <span>{project.number}</span>
                        <span>·</span>
                        <span className="text-zinc-700 dark:text-zinc-300 uppercase">{project.categoryLabel}</span>
                      </div>

                      {project.metrics && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono-code font-bold text-zinc-900 dark:text-white transition-transform group-hover:scale-105">
                          {project.metrics.primary}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 pb-0.5 leading-snug">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.shortDesc}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 text-xs font-mono-code text-zinc-700 dark:text-zinc-300 transition-all hover:bg-zinc-200/80 dark:hover:bg-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="px-2 py-1 text-xs font-mono-code text-zinc-400">
                          +{project.stack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    >
                      <span>Read System Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:scale-110 transition-all"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub Source`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                </SpotlightCard>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
