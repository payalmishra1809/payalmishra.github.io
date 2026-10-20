import { ChatActionLink, ChatMessage, RoleEvaluationResult } from '../types';
import { PERSONAL_INFO, RESEARCH_PAPER, PROJECTS, EXPERIENCES, SKILL_CATEGORIES, BINARY_PROFILE, CERTIFICATIONS } from '../data/portfolioData';

// Sound effect generator using Web Audio API for cute gentle meow / chimes
export const playCatAudio = (type: 'meow' | 'purr' | 'pop' = 'meow') => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    if (type === 'pop') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === 'meow') {
      // Gentle feline melodic frequency sweep
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.12);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.28);
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);
    } else if (type === 'purr') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(75, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    }
  } catch {
    // Audio contexts might be blocked until user interaction or unavailable; silently ignore
  }
};

// Standard role evaluation profiles grounded in Payal's actual accomplishments
export const PREDEFINED_ROLES: Record<string, RoleEvaluationResult> = {
  'senior-lead-data-analyst': {
    roleTitle: 'Senior Lead Data Analyst / Analytics Lead',
    matchScore: 98,
    matchTier: 'Exceptional Fit',
    summary: 'Direct verifiable match. Payal rapidly earned a promotion from Data Analyst Intern to Senior Lead Data Analyst in 4 months at UpToSkills, standardizing Python pipelines and directing cross-functional teams with 100% on-time delivery.',
    verifiedStrengths: [
      'Rapid promotion track from Intern to Senior Lead Data Analyst within 4 months',
      'Team leadership managing 15+ intern data cohorts with 100% on-time sprint completions',
      'Standardized Python EDA, data preprocessing, and reproducibility workflows',
      'SQL, Pandas, NumPy, EDA, statistical modeling, and Power BI'
    ],
    proofPoints: [
      'Leadership: 100% on-time project completion rate across all concurrent tracks',
      'Recognition: 2nd Place All-India Data Science League',
      'Certifications: Google Advanced Data Analytics, Deloitte Simulation, IBM Data Science'
    ],
    considerations: [
      'Thrives in high-ownership, agile environments where data strategy informs product and engineering decisions directly.'
    ],
    recommendedActions: [
      { label: 'View Career Progression', actionType: 'navigate', target: 'experience', iconName: 'Briefcase' },
      { label: 'Inspect Analytics Projects', actionType: 'navigate', target: 'projects', iconName: 'ArrowRight' },
      { label: 'Open Curriculum Vitae', actionType: 'modal', target: 'cv', iconName: 'FileText' }
    ]
  },
  'machine-learning-engineer': {
    roleTitle: 'Machine Learning / AI Engineer',
    matchScore: 88,
    matchTier: 'Strong Fit',
    summary: 'Hands-on applied ML foundation: an end-to-end churn prediction web app, Python data pipelines, and current internships in Machine Learning & AI at Skill Nexis and Codec Technologies.',
    verifiedStrengths: [
      'End-to-end ML app: Scikit-Learn churn model (82%+ accuracy) served through a Streamlit interface',
      'Data preparation: Automated Python validation and cleaning pipeline with Pandas and SQLAlchemy',
      'Current roles: Machine Learning & AI Intern (Skill Nexis) and AI Intern (Codec Technologies)',
      'Standardized Python EDA and preprocessing pipelines adopted across a 15+ intern cohort'
    ],
    proofPoints: [
      'Projects: Customer Churn Prediction Web App and Automated Data Quality Pipeline',
      'Certifications: Google Advanced Data Analytics, Google Generative AI'
    ],
    considerations: [
      'Early-career in production ML; growing quickly through active internships and shipped projects.'
    ],
    recommendedActions: [
      { label: 'Explore ML Projects', actionType: 'navigate', target: 'projects', iconName: 'ArrowRight' },
      { label: 'Contact for ML Roles', actionType: 'navigate', target: 'contact', iconName: 'Mail' }
    ]
  },
  'ai-research-scientist': {
    roleTitle: 'AI Research Scientist / Neuro-AI Researcher',
    matchScore: 95,
    matchTier: 'Exceptional Fit',
    summary: 'Exceptional independent research rigor. Sole author of "NeuroMemBench", a benchmark paper evaluating LLM agent memory architectures across six computational neuroscience tasks.',
    verifiedStrengths: [
      'Sole author of comprehensive benchmark paper: NeuroMemBench (in preparation for formal review)',
      'Designed custom 6-task computational neuroscience agent benchmark suite',
      'Pioneered Schema-Driven Structured State holding context footprint constant (~1,371 chars) while doubling completion fidelity (9/10 vs 5/10)',
      'Rigorously evaluated architectures on isolated sandbox environments with reproducible sweeps'
    ],
    proofPoints: [
      'Research metrics: 9/10 task completion rate vs 5/10 for sliding-window and full-history baselines',
      'NLP evaluation: Evaluated custom LLM fine-tunes using ROUGE-1/2/L and BERTScore',
      'Affiliation: Dept of CSE, Dr. B.R. Ambedkar Institute of Technology'
    ],
    considerations: [
      'Actively preparing the NeuroMemBench paper for peer-reviewed conference/journal submission.'
    ],
    recommendedActions: [
      { label: 'Read Research Highlight', actionType: 'navigate', target: 'research', iconName: 'ArrowRight' },
      
      { label: 'Discuss Research Collaboration', actionType: 'navigate', target: 'contact', iconName: 'Mail' }
    ]
  },
  'data-scientist': {
    roleTitle: 'Data Scientist / Applied Scientist',
    matchScore: 90,
    matchTier: 'Strong Fit',
    summary: 'Solid foundation across Python, SQL, EDA, statistical modeling and data visualization, with a Scikit-Learn churn model and an interactive sales analytics dashboard.',
    verifiedStrengths: [
      'Statistical modeling and EDA with Pandas, NumPy, Matplotlib and Seaborn',
      'Interactive analytics: Streamlit sales dashboard over 10,000+ transaction records using SQL window functions',
      'Predictive modeling: Scikit-Learn churn prediction with 82%+ accuracy',
      'Data quality: Automated duplicate, missing-value and anomaly checks'
    ],
    proofPoints: [
      'National ranking: 2nd Place in All-India Data Science League',
      'Certifications: Google Advanced Data Analytics, Deloitte Data Analytics Simulation'
    ],
    considerations: [
      'Combines analytical rigor with clean, reproducible Python code.'
    ],
    recommendedActions: [
      { label: 'See Data Science Projects', actionType: 'navigate', target: 'projects', iconName: 'ArrowRight' },
      { label: 'View 65+ Certifications', actionType: 'navigate', target: 'certifications', iconName: 'ArrowRight' }
    ]
  },
  'business-analyst': {
    roleTitle: 'Business Analyst / Operations Intelligence',
    matchScore: 93,
    matchTier: 'Strong Fit',
    summary: 'Proven ability to bridge executive business requirements and technical data pipelines. Real-world experience at PSN Shipping Agency identifying workflow bottlenecks and revenue opportunities.',
    verifiedStrengths: [
      'Operational workflow modeling: Identified shipment delays, revenue leakage, and cost drivers',
      'Operations management: Account reconciliation, SOP authoring, and stakeholder coordination at Dweep Packers & Movers',
      'Stakeholder communication: Delivered executive-ready presentations and KPI dashboards',
      'Process automation: Standardized team onboarding and workflow templates'
    ],
    proofPoints: [
      'Real-world impact at PSN Shipping Agency and Dweep Packers & Movers',
      'Defined team OKRs and sprint reviews as Senior Lead Data Analyst'
    ],
    considerations: [
      'Naturally brings heavy data science / automation capability to traditional business analyst roles.'
    ],
    recommendedActions: [
      { label: 'Check Professional Experience', actionType: 'navigate', target: 'experience', iconName: 'Briefcase' },
      { label: 'Contact Payal', actionType: 'navigate', target: 'contact', iconName: 'Mail' }
    ]
  }
};

// Evaluate dynamic custom role queries
export function evaluateCustomRole(query: string): RoleEvaluationResult {
  const normalized = query.toLowerCase();

  // Check predefined triggers
  if (normalized.includes('senior') && (normalized.includes('analyst') || normalized.includes('data'))) {
    return PREDEFINED_ROLES['senior-lead-data-analyst'];
  }
  if (normalized.includes('machine learning') || normalized.includes('ml engineer') || normalized.includes('ai engineer') || normalized.includes('deep learning')) {
    return PREDEFINED_ROLES['machine-learning-engineer'];
  }
  if (normalized.includes('research') || normalized.includes('scientist') || normalized.includes('neuro') || normalized.includes('phd') || normalized.includes('nlp')) {
    return PREDEFINED_ROLES['ai-research-scientist'];
  }
  if (normalized.includes('data scientist') || normalized.includes('data science') || normalized.includes('statistician') || normalized.includes('modeling')) {
    return PREDEFINED_ROLES['data-scientist'];
  }
  if (normalized.includes('business analyst') || normalized.includes('bi analyst') || normalized.includes('operations analyst') || normalized.includes('consultant')) {
    return PREDEFINED_ROLES['business-analyst'];
  }

  // General heuristic analysis for other roles (e.g. backend, full stack, software engineer, product manager)
  let score = 82;
  let tier: RoleEvaluationResult['matchTier'] = 'Viable / Adaptable';
  const matchedStrengths: string[] = [];
  const proofPoints: string[] = [];

  if (normalized.includes('backend') || normalized.includes('software') || normalized.includes('python') || normalized.includes('developer')) {
    score = 88;
    tier = 'Strong Fit';
    matchedStrengths.push('Python, SQL, REST APIs, Git, Streamlit and Pandas');
    matchedStrengths.push('Full-stack data applications: Streamlit dashboards and an ML web app');
    matchedStrengths.push('Automation: Python data validation and cleaning pipeline with SQLAlchemy');
    proofPoints.push('Built and deployed interactive Streamlit applications');
  } else if (normalized.includes('product') || normalized.includes('manager') || normalized.includes('lead')) {
    score = 89;
    tier = 'Strong Fit';
    matchedStrengths.push('Rapid 4-month promotion to Senior Lead Data Analyst managing a 15+ intern cohort');
    matchedStrengths.push('100% on-time delivery track across all assigned data and ML project cohorts');
    matchedStrengths.push('Authored a PRD with a North Star metrics framework and an Agile sprint roadmap');
    proofPoints.push('Led product design and UX strategy for a client travel platform at Andaman Dream Yatra');
  } else {
    // Default general technical evaluation
    score = 85;
    tier = 'Viable / Adaptable';
    matchedStrengths.push('B.Tech in Computer Science & Engineering (8.33 CGPA) with exceptional problem-solving acumen');
    matchedStrengths.push('65+ verified certifications covering AI, Cloud, Cybersecurity, Data Analytics, and UX');
    matchedStrengths.push('Fast-learning velocity: promoted from intern to Senior Lead in 4 months');
    proofPoints.push('Demonstrated leadership, independent research initiative, and engineering execution');
  }

  return {
    roleTitle: query.trim(),
    matchScore: score,
    matchTier: tier,
    summary: `Payal is a ${tier.toLowerCase()} for ${query.trim()}. Her core background in Computer Science, Data Science leadership, and applied AI systems provides strong transferable velocity.`,
    verifiedStrengths: matchedStrengths,
    proofPoints: proofPoints,
    considerations: [
      'Grounded in the Binary Profile: Payal communicates transparently about what she has mastered and where her active learning frontiers are.'
    ],
    recommendedActions: [
      { label: 'Examine Technical Skills', actionType: 'navigate', target: 'skills', iconName: 'ArrowRight' },
      { label: 'View Binary Profile (Strengths & Growth)', actionType: 'navigate', target: 'binary', iconName: 'Briefcase' },
      { label: 'Contact Payal Directly', actionType: 'navigate', target: 'contact', iconName: 'Mail' }
    ]
  };
}

// Main Natural-Language Cat Response Generator
export function generateCatAssistantResponse(input: string): ChatMessage {
  const query = input.trim();
  const lower = query.toLowerCase();
  const id = 'msg-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // 1. Navigation requests
  if (
    lower.includes('go to') ||
    lower.includes('take me to') ||
    lower.includes('scroll to') ||
    lower.includes('show me') ||
    lower.includes('navigate') ||
    lower.includes('where is') ||
    lower.includes('jump to')
  ) {
    if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio') || lower.includes('bento')) {
      return {
        id,
        sender: 'cat',
        text: `*Purrr* 🐾 Taking you straight to Payal's **Selected Projects**! Five projects are featured: an E-Commerce Sales Dashboard, a Churn Prediction Web App, a Data Quality Pipeline, an AI-feature PRD, and an Agile Project Board.`,
        timestamp,
        actions: [
          { label: '🚀 Jump to Projects', actionType: 'navigate', target: 'projects', iconName: 'ArrowRight' }
        ],
        quickSuggestions: ['Tell me about the Churn Prediction app', 'Check ML Engineer role fit', 'What are her top skills?']
      };
    }
    if (lower.includes('research') || lower.includes('paper') || lower.includes('neuromembench') || lower.includes('benchmark')) {
      return {
        id,
        sender: 'cat',
        text: `*Paws up!* 🐾 Navigating to the **Research Highlight** section. Here you can explore Payal's solo-author paper on *NeuroMemBench: Evaluating Memory Architectures for Long-Horizon Neuro-AI Agent Workflows*.`,
        timestamp,
        actions: [
          { label: '🔬 View Research Paper Section', actionType: 'navigate', target: 'research', iconName: 'ArrowRight' }
        ],
        quickSuggestions: ['What are the findings of NeuroMemBench?', 'Is Payal fit for AI Researcher?', 'View CV']
      };
    }
    if (lower.includes('experience') || lower.includes('career') || lower.includes('timeline') || lower.includes('uptoskills') || lower.includes('job') || lower.includes('history')) {
      return {
        id,
        sender: 'cat',
        text: `*Meow!* 🐾 Scrolling to Payal's **Career Trajectory & Leadership**! Notice her rapid 4-month promotion to Senior Lead Data Analyst at UpToSkills, plus current AI roles at Skill Nexis and Codec Technologies.`,
        timestamp,
        actions: [
          { label: '💼 Jump to Experience Timeline', actionType: 'navigate', target: 'experience', iconName: 'Briefcase' },
          { label: '📄 Open Curriculum Vitae', actionType: 'modal', target: 'cv', iconName: 'FileText' }
        ],
        quickSuggestions: ['Tell me about UpToSkills promotion', 'Check Senior Lead Data Analyst fit', 'Education & GPA']
      };
    }
    if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('language') || lower.includes('python')) {
      return {
        id,
        sender: 'cat',
        text: `*Head bump!* 🐾 Navigating to the **Technical Domain Mastery** section! Payal's stack spans Python, SQL, Pandas, NumPy, Scikit-Learn, Streamlit, Power BI, and Tableau.`,
        timestamp,
        actions: [
          { label: '🛠️ Jump to Skills Section', actionType: 'navigate', target: 'skills', iconName: 'ArrowRight' },
          { label: '📜 View Certifications (65+)', actionType: 'navigate', target: 'certifications', iconName: 'ArrowRight' }
        ],
        quickSuggestions: ['What are her top 3 skills?', 'Does Payal know Power BI?', 'Role Fit Checker']
      };
    }
    if (lower.includes('binary') || lower.includes('strength') || lower.includes('weakness') || lower.includes('growth') || lower.includes('audit')) {
      return {
        id,
        sender: 'cat',
        text: `*Purrr* 🐾 Taking you to **The Binary Profile**! This is Payal's intellectual audit: 6 verifiable strengths balanced transparently with 6 active growth frontiers.`,
        timestamp,
        actions: [
          { label: '⚖️ View Binary Profile', actionType: 'navigate', target: 'binary', iconName: 'ArrowRight' }
        ],
        quickSuggestions: ['What are Payal\'s main strengths?', 'What are her growth areas?', 'Check Role Fit']
      };
    }
    if (lower.includes('cert') || lower.includes('credential') || lower.includes('google') || lower.includes('deloitte')) {
      return {
        id,
        sender: 'cat',
        text: `*Prancing over!* 🐾 Here are Payal's **65+ Industry Certifications** from Google, Deloitte, Stanford, Yale, Meta, and IBM!`,
        timestamp,
        actions: [
          { label: '📜 Jump to Certifications Marquee', actionType: 'navigate', target: 'certifications', iconName: 'ArrowRight' }
        ],
        quickSuggestions: ['Show me Google certifications', 'Open Full CV', 'Contact Payal']
      };
    }
    if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('message')) {
      return {
        id,
        sender: 'cat',
        text: `*Meow!* 🐾 Taking you straight to the **Contact Section**! You can send Payal a direct message or find her email (${PERSONAL_INFO.email}), LinkedIn, and GitHub.`,
        timestamp,
        actions: [
          { label: '📬 Jump to Contact Form', actionType: 'navigate', target: 'contact', iconName: 'Mail' }
        ],
        quickSuggestions: ['What is her availability?', 'Where is she located?', 'Open CV']
      };
    }
    if (lower.includes('cv') || lower.includes('resume')) {
      return {
        id,
        sender: 'cat',
        text: `*Paw tap!* 🐾 Opening Payal's official **Curriculum Vitae** modal! You can view it embedded in high resolution or download the PDF directly.`,
        timestamp,
        actions: [
          { label: '📄 Open Curriculum Vitae', actionType: 'modal', target: 'cv', iconName: 'FileText' },
          { label: '🔗 Open Google Drive PDF', actionType: 'external', target: PERSONAL_INFO.cvViewUrl, iconName: 'ExternalLink' }
        ],
        quickSuggestions: ['Evaluate Role Fit', 'Where is Payal located?', 'Contact Payal']
      };
    }
  }

  // 2. Direct Resume / CV questions
  if (lower.includes('cv') || lower.includes('resume') || lower.includes('download cv') || lower.includes('view cv')) {
    return {
      id,
      sender: 'cat',
      text: `*Meow!* 🐾 You can inspect Payal's complete, verified resume right here. Click below to view the interactive modal or open the direct PDF from Google Drive!`,
      timestamp,
      actions: [
        { label: '📄 View Curriculum Vitae Modal', actionType: 'modal', target: 'cv', iconName: 'FileText' },
        { label: '🔗 Open PDF in Drive', actionType: 'external', target: PERSONAL_INFO.cvViewUrl, iconName: 'ExternalLink' }
      ],
      quickSuggestions: ['Is she a good fit for ML Engineer?', 'What is her GPA?', 'Jump to Experience']
    };
  }

  // 3. Role Applicability checks
  if (
    lower.includes('applicable') ||
    lower.includes('fit for') ||
    lower.includes('qualified for') ||
    lower.includes('hire') ||
    lower.includes('job') ||
    lower.includes('role') ||
    lower.includes('candidate') ||
    lower.includes('suit')
  ) {
    const evaluation = evaluateCustomRole(query);
    return {
      id,
      sender: 'cat',
      text: `*Purrr-fect question!* 🐾 Here is my rigorous evaluation for **${evaluation.roleTitle}**:
      
**Match Level: ${evaluation.matchScore}% (${evaluation.matchTier})**
${evaluation.summary}`,
      timestamp,
      roleEvaluation: evaluation,
      actions: evaluation.recommendedActions,
      quickSuggestions: [
        'Check Senior Lead Data Analyst fit',
        'Check Machine Learning Engineer fit',
        'Check AI Research Scientist fit',
        'Check Data Scientist fit'
      ]
    };
  }

  // 4. Skills & Expertise questions
  if (
    lower.includes('expertise') ||
    lower.includes('skill') ||
    lower.includes('technolog') ||
    lower.includes('stack') ||
    lower.includes('what can she do') ||
    lower.includes('what does she know') ||
    lower.includes('python') ||
        lower.includes('sql')
  ) {
    return {
      id,
      sender: 'cat',
      text: `*Meow!* 🐾 Payal's core technical expertise spans four pillars:
      
1. **Applied Machine Learning**:
   • Scikit-Learn churn prediction web app (82%+ accuracy)
   • Python data validation and cleaning pipeline

2. **Data Analysis & Visualization**:
   • Streamlit and Power BI dashboards over 10,000+ transaction records
   • SQL window functions, Pandas, NumPy, Tableau

3. **Product & Project Management**:
   • PRD with North Star, activation and guardrail metrics
   • Agile roadmap with epics, user stories and sprint estimation

4. **Leadership**:
   • Promoted to Senior Lead Data Analyst in 4 months at UpToSkills
   • SQL, Pandas, NumPy, EDA, statistical modeling, and Power BI`,
      timestamp,
      actions: [
        { label: '🛠️ Inspect All Skills', actionType: 'navigate', target: 'skills', iconName: 'ArrowRight' },
        { label: '💻 Browse Project Codebases', actionType: 'navigate', target: 'projects', iconName: 'ArrowRight' }
      ],
      quickSuggestions: [
        'Is Payal fit for Senior Data Analyst?',
        'Tell me about NeuroMemBench paper',
        'Check Machine Learning Engineer fit'
      ]
    };
  }

  // 5. Research paper questions
  if (lower.includes('neuromembench') || lower.includes('paper') || lower.includes('research') || lower.includes('memory') || lower.includes('agent')) {
    return {
      id,
      sender: 'cat',
      text: `*Twitching whiskers proudly!* 🐾 Payal is the **sole author** of:
**"${RESEARCH_PAPER.title}"**

**Key Scientific Takeaways**:
• **The Problem**: Long-horizon LLM agents suffer context bloat and catastrophic forgetting when performing complex multi-step scientific workflows.
• **The Benchmark**: 6 isolated computational neuroscience tasks evaluated on a sandbox runner.
• **The Solution**: Proposed a **Schema-Driven Structured State Machine** that retains essential parameters in a deterministic JSON schema.
• **Results**: Maintained a constant **1,371-character footprint** while achieving **9/10 task completions** vs just **5/10** for standard full-history and sliding-window approaches!`,
      timestamp,
      actions: [
        { label: '🔬 View Research Paper Section', actionType: 'navigate', target: 'research', iconName: 'ArrowRight' }
      ],
      quickSuggestions: [
        'Is Payal fit for an AI Researcher role?',
        'What other projects has she built?',
        'Open Curriculum Vitae'
      ]
    };
  }

  // 6. Experience & Leadership questions
  if (lower.includes('uptoskills') || lower.includes('experience') || lower.includes('leadership') || lower.includes('intern') || lower.includes('promotion') || lower.includes('work')) {
    return {
      id,
      sender: 'cat',
      text: `*Paws up!* 🐾 Payal's career trajectory demonstrates rapid compounding leadership:

• **Senior Lead Data Analyst** at UpToSkills:
  Promoted from Intern to Team Lead to Senior Lead Data Analyst in **just 4 months**. Coordinated multiple concurrent ML cohorts, standardized Python EDA workflows, and achieved **100% on-time delivery**.

• **Current Active Roles**:
  • *Machine Learning & AI Intern* at **Skill Nexis** (Aug 2026 — Present)
  • *Artificial Intelligence Intern* at **Codec Technologies** (Aug 2026 — Present)

• **Previous Experience**:
  • Lead Product Designer & UX Strategist at Andaman Dream Yatra (PRDs, wireframes, Power BI audience analysis)
  • Operations Manager at Dweep Packers & Movers (Workflow oversight, SOPs, reconciliation)
  • Business Analyst at PSN Shipping Agency (Cargo revenue-leakage analysis, management briefs)`,
      timestamp,
      actions: [
        { label: '💼 View Career Timeline', actionType: 'navigate', target: 'experience', iconName: 'Briefcase' },
        { label: '📄 Open Resume Modal', actionType: 'modal', target: 'cv', iconName: 'FileText' }
      ],
      quickSuggestions: [
        'Check Senior Lead Data Analyst fit',
        'What are her top technical skills?',
        'Contact Payal for opportunities'
      ]
    };
  }

  // 7. Education & Background
  if (lower.includes('education') || lower.includes('college') || lower.includes('university') || lower.includes('gpa') || lower.includes('degree') || lower.includes('school')) {
    return {
      id,
      sender: 'cat',
      text: `*Purrr!* 🐾 Payal's academic credentials:

• **Bachelor of Technology (B.Tech) in Computer Science & Engineering**
  Dr. B.R. Ambedkar Institute of Technology (DBRAIT), Sri Vijaya Puram
  **Cumulative GPA: 8.33 / 10.0** (Nov 2024 — Present)

• **Senior Secondary (PCM + Computer Science)**
  St. Mary's Senior Secondary School
  **Score: 91% Board Examination** (Completed May 2022)`,
      timestamp,
      actions: [
        { label: '🎓 View Academic Journey', actionType: 'navigate', target: 'experience', iconName: 'Briefcase' },
        { label: '📄 View Official CV', actionType: 'modal', target: 'cv', iconName: 'FileText' }
      ],
      quickSuggestions: ['Check Role Applicability', 'What are her top skills?', 'Jump to Projects']
    };
  }

  // 8. Location & Availability
  if (lower.includes('location') || lower.includes('where') || lower.includes('remote') || lower.includes('relocate') || lower.includes('available') || lower.includes('availability')) {
    return {
      id,
      sender: 'cat',
      text: `*Meow!* 🐾 
• **Location**: Based in **Sri Vijaya Puram, Andaman & Nicobar Islands, India**.
• **Availability**: **${PERSONAL_INFO.availabilityBadge}**.
• **Flexibility**: Fully set up for high-velocity **remote collaboration** and open to **hybrid / on-site relocation** for high-impact engineering and research roles!`,
      timestamp,
      actions: [
        { label: '📬 Send a Message / Inquiry', actionType: 'navigate', target: 'contact', iconName: 'Mail' }
      ],
      quickSuggestions: ['Check Role Fit', 'Open CV', 'Send Email']
    };
  }

  // 9. Contact info
  if (lower.includes('email') || lower.includes('linkedin') || lower.includes('github') || lower.includes('phone') || lower.includes('reach') || lower.includes('message')) {
    return {
      id,
      sender: 'cat',
      text: `*Paw salute!* 🐾 You can connect with Payal right away:

• **Email**: [${PERSONAL_INFO.email}](mailto:${PERSONAL_INFO.email})
• **LinkedIn**: [linkedin.com/in/payal-mishra1809](${PERSONAL_INFO.linkedin})
• **GitHub**: [github.com/payalmishra1809](${PERSONAL_INFO.github})
• **Form**: Use the interactive contact form on this page to send a message directly!`,
      timestamp,
      actions: [
        { label: '📬 Go to Contact Form', actionType: 'navigate', target: 'contact', iconName: 'Mail' },
        { label: '🔗 Open LinkedIn', actionType: 'external', target: PERSONAL_INFO.linkedin, iconName: 'ExternalLink' },
        { label: '🔗 Open GitHub', actionType: 'external', target: PERSONAL_INFO.github, iconName: 'ExternalLink' }
      ],
      quickSuggestions: ['Open Resume', 'Evaluate for a Job Role', 'View Projects']
    };
  }

  // 10. Cat banter, easter eggs, greetings
  if (lower.includes('meow') || lower.includes('purr') || lower.includes('cat') || lower.includes('nova') || lower.includes('pihu') || lower.includes('neko') || lower.includes('pet') || lower.includes('cute') || lower.includes('good bot') || lower.includes('good cat') || lower.includes('who are you')) {
    return {
      id,
      sender: 'cat',
      text: `*Purrrrrrrrrr...* 🐾 *Happy headbutts!* Thank you! I am **Nova**, Payal's resident AI cat companion. I keep her servers running cool, chase away latency bugs, and help visitors navigate her portfolio and check role applicability! What can I show you next?`,
      timestamp,
      actions: [
        { label: '🎯 Check Role Applicability', actionType: 'query', target: 'Check Role Applicability', iconName: 'Sparkles' },
        { label: '🚀 Explore Projects', actionType: 'navigate', target: 'projects', iconName: 'ArrowRight' }
      ],
      quickSuggestions: ['What are Payal\'s top skills?', 'Check Machine Learning Engineer fit', 'Show me the CV']
    };
  }

  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey') || lower.includes('start') || lower.includes('help')) {
    return {
      id,
      sender: 'cat',
      text: `*Meow!* 🐾 Welcome to Payal Mishra's portfolio! I'm **Nova**, her AI assistant. I can help you:

1. **Check Role Applicability**: Tell me what role you're hiring for (e.g., *ML Engineer*, *Lead Data Analyst*, *Data Scientist*, *Business Analyst*).
2. **Navigate the Site**: Say "Take me to projects", "Show research paper", or "Go to experience".
3. **Explore Skills & Systems**: Ask about her Python stack, churn prediction app, or sales dashboard.
4. **Access Credentials**: Request her verified CV or 65+ certifications.

What would you like to explore?`,
      timestamp,
      actions: [
        { label: '🎯 Role Fit Evaluator', actionType: 'query', target: 'Check Role Applicability', iconName: 'Sparkles' },
        { label: '⚡ Top Skills & Tech Stack', actionType: 'query', target: 'What are your top skills and expertise?', iconName: 'Zap' },
        { label: '📄 Open Resume / CV', actionType: 'modal', target: 'cv', iconName: 'FileText' }
      ],
      quickSuggestions: [
        'Is Payal fit for Senior Lead Data Analyst?',
        'Is Payal fit for ML Engineer?',
        'Tell me about the NeuroMemBench research',
        'Take me to projects'
      ]
    };
  }

  // 11. Fallback query handler: treat as custom role or general question
  const customEval = evaluateCustomRole(query);
  return {
    id,
    sender: 'cat',
    text: `*Paws at work!* 🐾 Based on your question regarding **"${query}"**:

Payal brings a blend of **applied ML**, **data analysis and dashboards**, and **demonstrated team leadership** (Senior Lead Data Analyst promotion in 4 months).

• **Core Tech**: Python, SQL, Pandas, NumPy, Scikit-Learn, Streamlit, Power BI.
• **Verifiable Metrics**: 82%+ churn model accuracy, 10,000+ records analyzed, 100% on-time delivery.
• **Continuous Learning**: 65+ industry credentials and B.Tech CSE (8.33 CGPA).

You can also test whether she is a fit for a specific role or jump directly to any portfolio section!`,
    timestamp,
    roleEvaluation: lower.length > 5 ? customEval : undefined,
    actions: [
      { label: '🎯 Evaluate Role Fit', actionType: 'query', target: `Check fit for ${query}`, iconName: 'Sparkles' },
      { label: '💻 Explore Selected Projects', actionType: 'navigate', target: 'projects', iconName: 'ArrowRight' },
      { label: '📄 View Curriculum Vitae', actionType: 'modal', target: 'cv', iconName: 'FileText' }
    ],
    quickSuggestions: [
      'Check Senior Lead Data Analyst fit',
      'Check Machine Learning Engineer fit',
      'What are Payal\'s top skills?',
      'Take me to research paper'
    ]
  };
}
