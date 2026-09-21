import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Mail, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePortfolioTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const { mode, toggleMode } = usePortfolioTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Systems Lab', href: '#benchmarks' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Mentors', href: '#recommendations' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'benchmarks', 'experience', 'research', 'projects', 'skills', 'recommendations', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#090a10]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/90 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-bold text-xs tracking-wider shadow-sm">
            PM
          </div>
          <div>
            <span className="font-display font-bold text-base tracking-tight text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors inline-block pb-0.5 leading-snug">
              Payal Mishra
            </span>
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Roles</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/80 dark:bg-[#0f121d]/90 border border-zinc-200/60 dark:border-zinc-700/70 rounded-full px-3 py-1.5 backdrop-blur-md shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
                  isActive
                    ? 'bg-white dark:bg-[#161b2c] text-zinc-950 dark:text-white shadow-xs font-semibold hover:shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-950/40 hover:shadow-xs'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleMode}
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-[#0f121d] text-zinc-600 dark:text-zinc-200 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-300/80 dark:hover:border-amber-700/80 hover:bg-amber-50/60 dark:hover:bg-amber-950/30 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-pointer"
            title={`Toggle ${mode === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {mode === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* CV Button */}
          <button
            type="button"
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-[#0f121d] hover:bg-blue-50/70 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300/80 dark:hover:border-blue-800/80 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Connect Pill Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMode}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-[#0f121d] text-zinc-700 dark:text-zinc-200"
          >
            {mode === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-[#0f121d] text-zinc-700 dark:text-zinc-200"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#090a10]/98 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="flex-1 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 text-xs font-semibold flex items-center justify-center gap-2 bg-white dark:bg-[#0f121d] hover:bg-blue-50/80 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-full text-white bg-zinc-950 dark:bg-white dark:text-zinc-950 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Let&apos;s Talk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
