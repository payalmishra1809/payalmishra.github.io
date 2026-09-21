export interface Project {
  id: string;
  number: string;
  category: 'Systems' | 'GenAI' | 'Research' | 'ML' | 'Healthcare' | 'Analytics' | 'Vision';
  categoryLabel: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  stack: string[];
  githubUrl: string;
  metrics?: {
    primary: string;
    label: string;
    subMetrics?: { value: string; label: string }[];
  };
  highlightTitle: string;
  highlightText: string;
  colSpan?: 'xl' | 'lg' | 'md' | 'sm' | 'full';
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location?: string;
  isCurrent?: boolean;
  description: string;
  highlights?: string[];
  badge?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  scoreLabel: string;
  scoreValue: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  tag: string;
  type: 'academic' | 'professional';
}

export interface BinaryItem {
  name: string;
  note: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ChatActionLink {
  label: string;
  actionType: 'navigate' | 'modal' | 'query' | 'external';
  target: string;
  iconName?: 'ArrowRight' | 'FileText' | 'Briefcase' | 'Mail' | 'ExternalLink' | 'Sparkles' | 'Zap';
}

export interface RoleEvaluationResult {
  roleTitle: string;
  matchScore: number; // e.g. 96
  matchTier: 'Exceptional Fit' | 'Strong Fit' | 'Viable / Adaptable' | 'Growth Domain';
  summary: string;
  verifiedStrengths: string[];
  proofPoints: string[];
  considerations: string[];
  recommendedActions: ChatActionLink[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'cat';
  text: string;
  timestamp: string;
  actions?: ChatActionLink[];
  roleEvaluation?: RoleEvaluationResult;
  quickSuggestions?: string[];
}
