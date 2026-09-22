import React, { useState, useEffect } from 'react';
import { ThemeProvider, usePortfolioTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveBenchmarks } from './components/InteractiveBenchmarks';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ResearchHighlight } from './components/ResearchHighlight';
import { ProjectsBento } from './components/ProjectsBento';
import { SkillsSection } from './components/SkillsSection';
import { BinaryProfile } from './components/BinaryProfile';
import { CertificationsMarquee } from './components/CertificationsMarquee';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { CommandPalette } from './components/CommandPalette';
import { CatChatbot } from './components/CatChatbot';

function PortfolioMain() {
  const { mode } = usePortfolioTheme();
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  return (
    <div className={`relative min-h-screen ${mode === 'dark' ? 'dark' : ''} bg-[#fafafa] dark:bg-[#090a0f] text-zinc-900 dark:text-zinc-100 overflow-hidden transition-colors duration-300`}>
      {/* Subtle Interactive Cursor Ambient Glow (Desktop) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -inset-px z-0 opacity-60 transition-opacity duration-300 hidden md:block"
        style={{
          background: mode === 'light'
            ? `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.03), transparent 75%)`
            : `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 75%)`
        }}
      />

      {/* Main Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <InteractiveBenchmarks />
        <ExperienceTimeline />
        <ResearchHighlight />
        <ProjectsBento />
        <SkillsSection />
        <BinaryProfile />
        <CertificationsMarquee />
        <TestimonialsSection />
        <ContactSection onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette HUD (Cmd+K) */}
      <CommandPalette onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Resume / Curriculum Vitae Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Floating Cat-Faced AI Assistant (Pihu) */}
      <CatChatbot onOpenCvModal={() => setIsCvModalOpen(true)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioMain />
    </ThemeProvider>
  );
}
