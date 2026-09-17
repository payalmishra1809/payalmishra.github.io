import React, { useEffect } from 'react';
import { X, FileText, Download, ExternalLink, Linkedin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-7 sm:p-9 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close CV modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white mx-auto mb-5 shadow-xs">
          <FileText className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-2xl text-zinc-950 dark:text-white pb-0.5 leading-snug mb-2">
          Curriculum Vitae
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
          Review Payal Mishra&apos;s full academic transcripts, production systems experience, and research credentials.
        </p>

        {/* Action Links */}
        <div className="flex flex-col gap-3">
          <a
            href={PERSONAL_INFO.cvViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-5 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Open Verified CV (PDF)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-semibold text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-blue-600" />
            <span>View Verified LinkedIn Records</span>
          </a>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-400">
          Last updated: Q1 2026 · Format: PDF (Standard ATS-Compliant)
        </div>
      </div>
    </div>
  );
};
