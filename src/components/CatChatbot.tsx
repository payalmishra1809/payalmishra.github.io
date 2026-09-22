import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Sparkles,
  ArrowRight,
  FileText,
  Briefcase,
  Mail,
  ExternalLink,
  Zap,
  Volume2,
  VolumeX,
  RotateCcw,
  Compass,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { CatAvatar } from './CatAvatar';
import { ChatMessage, ChatActionLink, RoleEvaluationResult } from '../types';
import { generateCatAssistantResponse, playCatAudio, PREDEFINED_ROLES } from '../utils/catAssistant';

interface CatChatbotProps {
  onOpenCvModal: () => void;
}

export const CatChatbot: React.FC<CatChatbotProps> = ({ onOpenCvModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnreadTooltip, setHasUnreadTooltip] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize welcoming message
  useEffect(() => {
    const welcomeMsg: ChatMessage = {
      id: 'welcome-1',
      sender: 'cat',
      text: `*Purrr!* 🐾 Hello! I am **Pihu**, Payal Mishra's AI Cat Assistant.

I'm here to help you navigate her portfolio and evaluate if Payal is a great match for your team or research lab!

**How can I assist you today?**
• 🎯 **Check Role Fit**: See how Payal matches roles like *ML Engineer*, *Lead Data Analyst*, or *AI Researcher*.
• 🚀 **Smooth Navigation**: Jump directly to projects, research, benchmarks, or resume.
• 🛠️ **Skills & Architecture**: Explore her Python, PyTorch, Llama-3 fine-tuning, and sub-5ms low-latency systems.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: [
        { label: '🎯 Check Role Applicability', actionType: 'query', target: 'Check Role Applicability', iconName: 'Sparkles' },
        { label: '💻 Explore Selected Projects', actionType: 'navigate', target: 'projects', iconName: 'ArrowRight' },
        { label: '🔬 View NeuroMemBench Paper', actionType: 'navigate', target: 'research', iconName: 'Zap' },
        { label: '📄 Open Curriculum Vitae', actionType: 'modal', target: 'cv', iconName: 'FileText' }
      ],
      quickSuggestions: [
        'Is Payal fit for Senior Lead Data Analyst?',
        'Is Payal fit for Machine Learning Engineer?',
        'Tell me about the NeuroMemBench research',
        'What are her top technical skills?'
      ]
    };
    setMessages([welcomeMsg]);
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Handle section navigation with highlight effect
  const handleNavigate = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      // Temporary highlight pulse on destination element
      elem.classList.add('ring-2', 'ring-blue-500', 'transition-all', 'duration-500');
      setTimeout(() => {
        elem.classList.remove('ring-2', 'ring-blue-500');
      }, 2000);
    }
    // On small screens, close the chat to allow viewing the section
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  // Handle action click
  const handleActionClick = (action: ChatActionLink) => {
    if (soundEnabled) playCatAudio('pop');

    switch (action.actionType) {
      case 'navigate':
        handleNavigate(action.target);
        break;
      case 'modal':
        if (action.target === 'cv') {
          onOpenCvModal();
          if (window.innerWidth < 640) setIsOpen(false);
        }
        break;
      case 'external':
        window.open(action.target, '_blank', 'noopener,noreferrer');
        break;
      case 'query':
        handleSendMessage(action.target);
        break;
    }
  };

  // Send message
  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    if (soundEnabled) playCatAudio('pop');

    const userMessage: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Simulate natural thinking delay
    setTimeout(() => {
      const response = generateCatAssistantResponse(text);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
      if (soundEnabled) playCatAudio('meow');
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    if (soundEnabled) playCatAudio('pop');
    setMessages([
      {
        id: 'reset-' + Date.now(),
        sender: 'cat',
        text: `*Purrr!* 🐾 Chat history cleared! Ask me anything about Payal's role eligibility, tech stack, research paper, or portfolio navigation.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: [
          { label: '🎯 Evaluate Role Fit', actionType: 'query', target: 'Check Role Applicability', iconName: 'Sparkles' },
          { label: '🚀 Explore Projects', actionType: 'navigate', target: 'projects', iconName: 'ArrowRight' }
        ],
        quickSuggestions: [
          'Is Payal fit for Senior Lead Data Analyst?',
          'Is Payal fit for ML Engineer?',
          'What are Payal\'s top skills?',
          'Open CV'
        ]
      }
    ]);
  };

  // Quick Action Buttons for top roles
  const quickRoles = [
    { label: 'Senior Lead Data Analyst', key: 'senior-lead-data-analyst' },
    { label: 'ML / AI Engineer', key: 'machine-learning-engineer' },
    { label: 'AI Research Scientist', key: 'ai-research-scientist' },
    { label: 'Quantitative Systems', key: 'quant-systems' }
  ];

  const renderActionIcon = (iconName?: string) => {
    switch (iconName) {
      case 'ArrowRight':
        return <ArrowRight className="w-3.5 h-3.5" />;
      case 'FileText':
        return <FileText className="w-3.5 h-3.5" />;
      case 'Briefcase':
        return <Briefcase className="w-3.5 h-3.5" />;
      case 'Mail':
        return <Mail className="w-3.5 h-3.5" />;
      case 'ExternalLink':
        return <ExternalLink className="w-3.5 h-3.5" />;
      case 'Sparkles':
        return <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />;
      case 'Zap':
        return <Zap className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />;
      default:
        return <ArrowRight className="w-3.5 h-3.5" />;
    }
  };

  return (
    <aside aria-label="Pihu AI Portfolio Cat Assistant" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 select-none">
      {/* 1. FLOATING PROMPT TOOLTIP (When Chatbot is Closed) */}
      {!isOpen && hasUnreadTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 w-72 sm:w-80 p-3.5 rounded-2xl bg-white dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700/80 shadow-xl text-left animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <CatAvatar size="xs" />
              <span className="font-display font-bold text-xs text-zinc-950 dark:text-white">
                Pihu · Portfolio AI Cat
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHasUnreadTooltip(false);
              }}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-0.5"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
            *Meow!* 🐾 Looking for a specific role match (e.g. <strong>ML Engineer</strong> or <strong>Data Analyst</strong>) or need quick navigation? Click to chat!
          </p>
          <div className="mt-2.5 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-2">
            <button
              onClick={() => {
                setIsOpen(true);
                setHasUnreadTooltip(false);
                if (soundEnabled) playCatAudio('meow');
              }}
              className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>Chat with Pihu</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <span className="text-[10px] text-zinc-400 font-mono-code">Press to open</span>
          </div>
        </div>
      )}

      {/* 2. FLOATING TRIGGER BUTTON */}
      {!isOpen ? (
        <button
          id="cat-chatbot-trigger"
          onClick={() => {
            setIsOpen(true);
            setHasUnreadTooltip(false);
            if (soundEnabled) playCatAudio('meow');
          }}
          className="group relative flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-white/95 dark:bg-[#0f121d]/95 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-700/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 dark:hover:border-zinc-500 cursor-pointer"
          aria-label="Open Cat AI Assistant"
        >
          {/* Animated Glow Accent */}
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-purple-500/20 blur-xs opacity-70 group-hover:opacity-100 transition-opacity" />

          <div className="relative flex items-center gap-2">
            <div className="relative">
              <CatAvatar size="sm" />
              {/* Online Green Pulsing Indicator */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 animate-pulse" />
            </div>

            <div className="text-left">
              <span className="block font-display font-bold text-xs text-zinc-950 dark:text-white leading-none">
                Pihu AI
              </span>
              <span className="block text-[10px] font-medium text-zinc-500 dark:text-zinc-300 mt-0.5 leading-none">
                Role Fit &amp; Nav 🐾
              </span>
            </div>
          </div>
        </button>
      ) : (
        /* 3. EXPANDED CHAT INTERFACE */
        <div
          id="cat-chatbot-window"
          className="relative flex flex-col w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] rounded-3xl bg-white/95 dark:bg-[#0c0e17]/95 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-700/80 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-zinc-200/80 dark:border-zinc-700/80 bg-zinc-50/80 dark:bg-[#0f121d]">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  if (soundEnabled) playCatAudio('purr');
                }}
                title="Click to pet Pihu!"
                className="relative cursor-pointer hover:scale-110 transition-transform"
                aria-label="Pet Pihu"
              >
                <CatAvatar size="sm" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white dark:border-zinc-900" />
              </button>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-display font-bold text-sm text-zinc-950 dark:text-white leading-none">
                    Pihu
                  </h3>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold uppercase tracking-wider">
                    Portfolio AI
                  </span>
                </div>
                <span className="block text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Online · Purring &amp; Ready 🐾
                </span>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1">
              {/* Sound Toggle */}
              <button
                onClick={() => {
                  const next = !soundEnabled;
                  setSoundEnabled(next);
                  if (next) playCatAudio('meow');
                }}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title={soundEnabled ? 'Mute Cat Sounds' : 'Unmute Cat Sounds'}
                aria-label={soundEnabled ? 'Mute Cat Sounds' : 'Unmute Cat Sounds'}
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <VolumeX className="w-4 h-4 text-zinc-400" />
                )}
              </button>

              {/* Reset Chat */}
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Clear Chat History"
                aria-label="Clear Chat History"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Minimize Window */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (soundEnabled) playCatAudio('pop');
                }}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Minimize Chat"
                aria-label="Minimize Chat"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Role Assessment Banner */}
          <div className="px-3.5 py-2 bg-zinc-100/70 dark:bg-[#131726]/70 border-b border-zinc-200/60 dark:border-zinc-700/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
            <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-300 shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" /> Role Fit:
            </span>
            {quickRoles.map((role) => (
              <button
                key={role.key}
                onClick={() => handleSendMessage(`Is Payal a good fit for ${role.label}?`)}
                className="shrink-0 px-2.5 py-1 rounded-md text-[11px] font-medium bg-white dark:bg-[#0f121d] border border-zinc-200/80 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 transform cursor-pointer shadow-2xs"
              >
                {role.label}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`flex gap-2 max-w-[88%] ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-2xl rounded-tr-xs px-3.5 py-2.5 shadow-sm'
                      : 'bg-zinc-100 dark:bg-[#151928] text-zinc-900 dark:text-zinc-100 rounded-2xl rounded-tl-xs p-3.5 border border-zinc-200/60 dark:border-zinc-700/70 shadow-xs'
                  }`}
                >
                  {msg.sender === 'cat' && (
                    <div className="shrink-0 mt-0.5">
                      <CatAvatar size="xs" />
                    </div>
                  )}

                  <div className="flex-1 text-xs leading-relaxed break-words">
                    {/* Render message text with basic formatting */}
                    <div className="whitespace-pre-line font-normal">
                      {msg.text.split('\n').map((line, lIdx) => {
                        // Bold parsing
                        const parts = line.split(/(\*\*.*?\*\*)/g);
                        return (
                          <div key={lIdx} className={line === '' ? 'h-2' : 'min-h-[1.25em]'}>
                            {parts.map((part, pIdx) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return (
                                  <strong key={pIdx} className="font-semibold text-zinc-950 dark:text-white">
                                    {part.slice(2, -2)}
                                  </strong>
                                );
                              }
                              return part;
                            })}
                          </div>
                        );
                      })}
                    </div>

                    {/* Role Evaluation Card if attached */}
                    {msg.roleEvaluation && (
                      <div className="mt-3 p-3 rounded-xl bg-white dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700 shadow-2xs">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-display font-bold text-xs text-zinc-950 dark:text-white">
                            {msg.roleEvaluation.roleTitle}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              msg.roleEvaluation.matchScore >= 90
                                ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                                : 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
                            }`}
                          >
                            {msg.roleEvaluation.matchScore}% · {msg.roleEvaluation.matchTier}
                          </span>
                        </div>

                        {/* Verified Strengths List */}
                        <div className="mt-2 space-y-1.5">
                          <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-300 uppercase tracking-wider block">
                            Key Verified Strengths:
                          </span>
                          {msg.roleEvaluation.verifiedStrengths.map((str, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-1.5 text-[11px] text-zinc-700 dark:text-zinc-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{str}</span>
                            </div>
                          ))}
                        </div>

                        {/* Considerations / Growth */}
                        {msg.roleEvaluation.considerations && msg.roleEvaluation.considerations.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-500 dark:text-zinc-300">
                            <strong>Transparent Growth Area:</strong> {msg.roleEvaluation.considerations[0]}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action Links & Buttons */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {msg.actions.map((act, aIdx) => (
                          <button
                            key={aIdx}
                            onClick={() => handleActionClick(act)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium bg-white dark:bg-[#0f121d] border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/70 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 transform cursor-pointer shadow-2xs group"
                          >
                            {renderActionIcon(act.iconName)}
                            <span>{act.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <span className="text-[9px] text-zinc-400 dark:text-zinc-400 px-1 mt-1 font-mono-code">
                  {msg.timestamp}
                </span>

                {/* Quick follow-up suggestions */}
                {msg.quickSuggestions && msg.quickSuggestions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {msg.quickSuggestions.map((sug, suIdx) => (
                      <button
                        key={suIdx}
                        onClick={() => handleSendMessage(sug)}
                        className="text-[10px] text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-[#0f121d] hover:bg-blue-50/80 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-600 border border-zinc-200/80 dark:border-zinc-700 rounded-full px-2.5 py-1 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 transform cursor-pointer"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs">
                <CatAvatar size="xs" isPurring={true} />
                <span className="italic text-[11px]">Pihu is thinking &amp; typing... 🐾</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Shortcuts Bar */}
          <div className="px-3 py-1.5 bg-zinc-50 dark:bg-[#0c0e17] border-t border-zinc-200/60 dark:border-zinc-700/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
            <button
              onClick={() => handleNavigate('projects')}
              className="shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/90 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 transform"
            >
              <Compass className="w-3 h-3" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => handleNavigate('research')}
              className="shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/90 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 transform"
            >
              <Zap className="w-3 h-3" />
              <span>Research</span>
            </button>
            <button
              onClick={() => handleNavigate('experience')}
              className="shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/90 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 transform"
            >
              <Briefcase className="w-3 h-3" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => {
                onOpenCvModal();
                if (window.innerWidth < 640) setIsOpen(false);
              }}
              className="shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/90 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 transform"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className="shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/90 dark:hover:bg-blue-950/40 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 transform"
            >
              <Mail className="w-3 h-3" />
              <span>Contact</span>
            </button>
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-zinc-200/80 dark:border-zinc-700/80 bg-white dark:bg-[#0f121d]">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Pihu (e.g. 'Is Payal fit for ML Engineer?')..."
                className="flex-1 text-xs px-3.5 py-2.5 rounded-xl bg-zinc-100 dark:bg-[#161b2c] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="p-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 text-[10px] text-zinc-400 px-1">
              <span>*Press Enter to send · Meow! 🐾*</span>
              <span className="font-mono-code">Pihu v1.0</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
