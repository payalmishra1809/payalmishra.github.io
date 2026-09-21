import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send, Copy, Check, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

interface ContactSectionProps {
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCvModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const response = await fetch(PERSONAL_INFO.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-white dark:bg-[#090a10] border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-[1.2]">
            Let&apos;s Build Together
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
            Interested in discussing senior data analyst opportunities, AI research collaborations, or technical advisory roles? Send an inquiry directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct channels & Quick Connect */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <SpotlightCard className="p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300">
                Direct Email
              </span>
              <div className="font-mono-code text-base sm:text-lg font-bold text-zinc-950 dark:text-white mt-1 break-all">
                {PERSONAL_INFO.email}
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 py-2.5 px-4 rounded-full border border-zinc-200 dark:border-zinc-700/80 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-[#161b2c] flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="py-2.5 px-4 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs flex items-center justify-center gap-1.5"
                >
                  <span>Open Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </SpotlightCard>

            {/* Social Channels */}
            <SpotlightCard className="p-6 sm:p-8 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300">
                Professional Networks
              </span>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-[#131726] border border-zinc-200/80 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors flex items-center gap-2.5"
                >
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs font-semibold text-zinc-900 dark:text-white">LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-[#131726] border border-zinc-200/80 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors flex items-center gap-2.5"
                >
                  <Github className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
                  <span className="text-xs font-semibold text-zinc-900 dark:text-white">GitHub</span>
                </a>
              </div>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="w-full mt-2 py-3 rounded-2xl bg-zinc-50 dark:bg-[#131726] border border-zinc-200/80 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors flex items-center justify-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <span>View Full Curriculum Vitae</span>
              </button>
            </SpotlightCard>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-7 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mb-2">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#131726] border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mb-2">
                      Work Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#131726] border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mb-2">
                    Inquiry Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Senior Lead Data Analyst Role / Research Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#131726] border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mb-2">
                    Message Details
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share project goals, timeline, or team structure..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#131726] border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Message received successfully. Payal will respond within 24 hours.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs">
                    Failed to dispatch message. Please email directly at {PERSONAL_INFO.email}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-full bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 text-white font-semibold text-sm transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{formStatus === 'submitting' ? 'Dispatching Message...' : 'Send Direct Inquiry'}</span>
                </button>
              </form>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
