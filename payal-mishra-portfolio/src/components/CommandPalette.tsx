import React, { useState, useEffect } from 'react';
import { Terminal, Search, Zap, Cpu, Briefcase, Mail, FileText, X, Sun, Moon, ArrowRight, Code2, Layers } from 'lucide-react';
import { usePortfolioTheme } from '../context/ThemeContext';

interface CommandPaletteProps {
  onOpenCvModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ onOpenCvModal }) => {
  const { mode, toggleMode, setMode } = usePortfolioTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = [
    {
      id: 'benchmarks',
      title: 'Jump to Interactive Systems Lab',
      category: 'Lab',
      icon: Zap,
      action: () => {
        document.getElementById('benchmarks')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'projects',
      title: 'Explore Selected Work & Case Studies',
      category: 'Projects',
      icon: Code2,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'experience',
      title: 'Career Progression (Intern to Senior Lead)',
      category: 'Experience',
      icon: Briefcase,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'research',
      title: 'NeuroMemBench Working Paper',
      category: 'Research',
      icon: Cpu,
      action: () => {
        document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'skills',
      title: 'Inspect Technical Skills & Arsenal',
      category: 'Skills',
      icon: Layers,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'cv',
      title: 'View Payal Mishra Curriculum Vitae (PDF)',
      category: 'Resume',
      icon: FileText,
      action: () => {
        setIsOpen(false);
        onOpenCvModal();
      }
    },
    {
      id: 'contact',
      title: 'Send Direct Message / Contact',
      category: 'Contact',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'theme-toggle',
      title: mode === 'light' ? 'Switch to Dark Mode (Obsidian)' : 'Switch to Light Mode (Minimalist White)',
      category: 'Appearance',
      icon: mode === 'light' ? Moon : Sun,
      action: () => {
        toggleMode();
        setIsOpen(false);
      }
    },
  ];

  const filteredCommands = commands.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating HUD Trigger Pill in bottom-right */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-3.5 py-2 rounded-full bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-lg backdrop-blur-md transition-all duration-200 flex items-center gap-2 text-xs font-semibold group"
        title="Open Command Navigation (Cmd+K)"
      >
        <Terminal className="w-3.5 h-3.5 text-zinc-950 dark:text-white" />
        <span className="hidden sm:inline">Commands</span>
        <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] text-zinc-500 font-mono-code border border-zinc-200 dark:border-zinc-700">
          ⌘K
        </kbd>
      </button>

      {/* Command Palette Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/50 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
              <Search className="w-4 h-4 text-zinc-400" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or jump to section..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Commands List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs text-zinc-400">
                  No matching commands found
                </div>
              ) : (
                filteredCommands.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-left transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {item.title}
                          </div>
                          <div className="text-xs text-zinc-400">
                            {item.category}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span>Navigation HUD</span>
              <span>Press ESC to dismiss</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
