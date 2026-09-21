import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, FileText, ArrowDown, Check, Copy, Maximize2, X, Upload, RotateCcw, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AUTHENTIC_PORTRAIT_SRC } from '../data/portraitImage';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [customPhotoSrc, setCustomPhotoSrc] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const savedCustom = localStorage.getItem('payal_custom_portrait');
      if (savedCustom) {
        setCustomPhotoSrc(savedCustom);
      }
    } catch {
      // sandbox safe
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhotoSrc(result);
          try {
            localStorage.setItem('payal_custom_portrait', result);
          } catch {
            // noop
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetCustom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhotoSrc(null);
    try {
      localStorage.removeItem('payal_custom_portrait');
    } catch {
      // noop
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const activePhoto = customPhotoSrc || AUTHENTIC_PORTRAIT_SRC;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 pb-20 lg:pt-44 lg:pb-32 flex items-center justify-center overflow-hidden bg-grid-tech"
    >
      {/* Subtle clean ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 w-[550px] h-[550px] rounded-full bg-blue-500/[0.04] dark:bg-blue-500/[0.08] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 w-[450px] h-[450px] rounded-full bg-emerald-500/[0.03] dark:bg-emerald-500/[0.06] blur-[150px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline, Story, Metrics, Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700/80 bg-white/80 dark:bg-[#0f121d]/90 backdrop-blur-md shadow-xs text-xs font-semibold tracking-wide text-zinc-700 dark:text-zinc-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.availabilityBadge}</span>
            </div>

            {/* Main Headline with generous leading and padding to prevent descender clipping on g, y, p */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.2] pb-2 sm:pb-3 mb-4 sm:mb-6 overflow-visible">
              Data Science &amp;{' '}
              <span className="italic font-serif-display font-normal text-zinc-700 dark:text-zinc-200">
                AI Research
              </span>{' '}
              Enthusiast.
            </h1>

            {/* Sub-headline summary */}
            <p className="text-zinc-600 dark:text-zinc-200 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              B.Tech Computer Science Engineering student, independent researcher, and{' '}
              <strong className="text-zinc-950 dark:text-white font-semibold">Senior Lead Data Analyst</strong>. Rapidly promoted
              from Intern to Senior Lead within 4 months. Author of{' '}
              <span className="font-semibold text-zinc-950 dark:text-white">NeuroMemBench</span> (evaluating LLM agent memory architectures),
              builder of low-latency order execution pipelines (<span className="font-mono-code font-semibold text-zinc-900 dark:text-white">&lt;5ms</span>),
              and high-precision ML models (<span className="font-mono-code font-semibold text-zinc-900 dark:text-white">98.2% AUC</span>).
            </p>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl mb-10">
              {PERSONAL_INFO.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl bg-white dark:bg-[#0f121d] border border-zinc-200/80 dark:border-zinc-700/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 dark:hover:border-blue-500/60 hover:shadow-lg cursor-default group"
                >
                  <div className="font-mono-code text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all duration-200 shadow-sm hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
              >
                <span>Selected Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#0f121d] hover:bg-blue-50/70 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300/80 dark:hover:border-blue-700/80 transition-all duration-200 shadow-xs hover:-translate-y-1 hover:shadow-md active:translate-y-0 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-zinc-500 dark:text-zinc-300 group-hover:text-blue-500" />
                <span>View CV</span>
              </button>

              {/* Interactive Copy Email button with toast */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="relative inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-sm font-semibold text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#0f121d] hover:bg-blue-50/70 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300/80 dark:hover:border-blue-700/80 transition-all duration-200 shadow-xs hover:-translate-y-1 hover:shadow-md active:translate-y-0 cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400 dark:text-zinc-300" />
                    <span className="hidden sm:inline">Copy Email</span>
                  </>
                )}

                {/* Animated Toast Confirmation */}
                {copiedEmail && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs rounded-md shadow-lg whitespace-nowrap animate-in fade-in zoom-in-90 duration-150 font-medium">
                    payalmishra.tech@gmail.com copied!
                  </div>
                )}
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#0f121d] hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200 shadow-xs"
                aria-label="Payal Mishra GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full text-blue-600 dark:text-blue-400 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#0f121d] hover:bg-blue-50 dark:hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 shadow-xs"
                aria-label="Payal Mishra LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Portrait with Minimalist Luxury Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-first lg:order-last">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] flex flex-col items-center">
              
              {/* Soft modern ambient glow */}
              <div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-zinc-200/50 to-transparent dark:from-blue-600/20 blur-xl opacity-80 pointer-events-none"
              />

              {/* Main Photo Container - Framed proportionally to show full head, neck, and shoulders without obstruction */}
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative w-full aspect-[9/13.5] sm:aspect-[9/14] rounded-3xl overflow-hidden border border-zinc-200/90 dark:border-zinc-700/80 bg-white dark:bg-[#0f121d] shadow-xl group cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-zinc-400 dark:hover:border-blue-500/60"
                title="Click to view full uncropped photograph"
              >
                {/* Authentic Unaltered Photograph - Calibrated position to show till shoulders with ample breathing room */}
                <img
                  src={activePhoto}
                  alt="Payal Mishra"
                  className="w-full h-full object-cover object-[center_12%] filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Subtle soft gradient highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Expand overlay button with smooth slide-up */}
                <div className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 text-xs font-semibold shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Portrait</span>
                </div>
              </div>

              {/* Clean Identity Tag Card placed neatly below photo to keep shoulders fully visible */}
              <div className="w-full mt-3.5 p-4 rounded-2xl bg-white dark:bg-[#0f121d] border border-zinc-200/80 dark:border-zinc-700/80 shadow-sm text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-500">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block font-display font-bold text-base sm:text-lg text-zinc-950 dark:text-white pb-0.5 leading-snug">
                      Payal Mishra
                    </span>
                    <span className="block text-xs font-medium text-zinc-500 dark:text-zinc-300 mt-0.5 pb-0.5 leading-normal">
                      Senior Lead Data Analyst · B.Tech CSE
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to Roles</span>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>DBRAIT · CGPA 8.33</span>
                  <span className="font-mono-code font-semibold text-zinc-700 dark:text-zinc-200">Port Blair, IN</span>
                </div>
              </div>

            </div>

            {/* Photo Controls */}
            <div className="mt-4 flex items-center justify-center gap-2 p-1.5 rounded-full bg-white dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 shadow-xs">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Full Photo</span>
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Upload PIC.jpg from your device"
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1.5 border border-zinc-200/80 dark:border-zinc-800"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload New Pic</span>
              </button>

              {customPhotoSrc && (
                <button
                  type="button"
                  onClick={handleResetCustom}
                  title="Reset to default original photo"
                  className="p-1.5 rounded-full text-zinc-400 hover:text-rose-500 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Minimalist scroll prompt */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href="#benchmarks"
            className="group flex flex-col items-center gap-2 text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors"
            aria-label="Scroll to Systems Lab"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500">Interactive Systems Lab</span>
            <div className="w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center shadow-xs group-hover:border-zinc-400 transition-colors">
              <ArrowDown className="w-4 h-4 text-zinc-600 dark:text-zinc-400 animate-bounce" />
            </div>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-md w-full rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close photo view"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative rounded-2xl overflow-hidden max-h-[75vh] mb-3 bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center">
              <img
                src={activePhoto}
                alt="Payal Mishra Original Portrait"
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>

            <div className="flex items-center justify-between px-2 pt-2 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500">
              <span className="font-semibold text-zinc-900 dark:text-white">Payal Mishra — Original Portrait</span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="hover:text-zinc-900 dark:hover:text-white font-medium"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
