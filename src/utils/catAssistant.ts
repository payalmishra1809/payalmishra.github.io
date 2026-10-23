import { ChatActionLink, ChatMessage, RoleEvaluationResult } from '../types';

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

// Role cards are no longer used by the chat (answers are now plain text), kept for compatibility.
export const PREDEFINED_ROLES: Record<string, RoleEvaluationResult> = {};

export function evaluateCustomRole(): RoleEvaluationResult {
  return {
    roleTitle: 'Role fit',
    matchScore: 0,
    matchTier: 'Viable / Adaptable',
    summary: '',
    verifiedStrengths: [],
    proofPoints: [],
    considerations: [],
    recommendedActions: []
  };
}

const has = (text: string, words: string[]) => words.some((w) => text.includes(w));

export function generateCatAssistantResponse(input: string): ChatMessage {
  const lower = input.trim().toLowerCase();
  const id = 'msg-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const reply = (
    text: string,
    actions: ChatActionLink[] = [],
    quickSuggestions: string[] = []
  ): ChatMessage => ({ id, sender: 'cat', text, timestamp, actions, quickSuggestions });

  const goProjects: ChatActionLink = { label: '💻 See her projects', actionType: 'navigate', target: 'projects', iconName: 'ArrowRight' };
  const goExperience: ChatActionLink = { label: '💼 See her experience', actionType: 'navigate', target: 'experience', iconName: 'Briefcase' };
  const goSkills: ChatActionLink = { label: '🛠️ See her skills', actionType: 'navigate', target: 'skills', iconName: 'ArrowRight' };
  const goContact: ChatActionLink = { label: '✉️ Contact Payal', actionType: 'navigate', target: 'contact', iconName: 'Mail' };
  const openCv: ChatActionLink = { label: '📄 Open her resume', actionType: 'modal', target: 'cv', iconName: 'FileText' };

  // Resume / CV
  if (has(lower, ['cv', 'resume', 'curriculum'])) {
    return reply(`Here is Payal's resume. 🐾`, [openCv]);
  }

  // Contact
  if (has(lower, ['contact', 'email', 'reach', 'hire', 'hiring', 'linkedin', 'get in touch'])) {
    return reply(
      `You can email Payal at **payalmishra.tech@gmail.com** or use the contact form. She is open to internships and full-time roles.`,
      [goContact]
    );
  }

  // CarbonScope
  if (/\b(carbonscope|carbon|zero trust|zero-trust|security|emission|emissions)\b/.test(lower)) {
    return reply(
      `**CarbonScope** (in progress) makes factory pollution data tamper-proof. Every reading is digitally signed and double-checked, so nobody can quietly change it. 🐾`,
      [goProjects],
      ['Tell me about RailSetu']
    );
  }

  // RailSetu
  if (/\b(rail|railsetu|train|trains|eta|hackathon)\b/.test(lower)) {
    return reply(
      `**RailSetu** predicts when a train will arrive and explains why it is late. Payal led this 6-person team for Smart India Hackathon 2026. 🐾`,
      [goProjects],
      ['Tell me about CarbonScope']
    );
  }

  // Strengths
  if (has(lower, ['strength', 'good at', 'best at', 'special', 'why'])) {
    return reply(
      `Payal's main strengths: 🐾

• **Data work**: Python, SQL, Power BI
• **Leading a team**: 100% on-time delivery
• **Product thinking**: PRDs and Agile planning`,
      [goExperience, goProjects],
      ['What has she built?']
    );
  }

  // Management
  if (has(lower, ['manage', 'lead', 'leader', 'team', 'product', 'project manager', 'agile', 'sprint', 'okr', 'stakeholder', 'operations'])) {
    return reply(
      `Payal is good at leading and planning. 🐾

• Promoted to **Senior Lead Data Analyst in 4 months**
• Her teams hit **100% on-time delivery**
• Wrote product plans and ran daily operations`,
      [goExperience],
      ['What has she built?']
    );
  }

  // Data analytics
  if (has(lower, ['analyst', 'analytics', 'analysis', 'data', 'dashboard', 'power bi', 'sql', 'excel', 'tableau', 'report'])) {
    return reply(
      `Payal turns data into answers using Python, SQL, Power BI and Tableau. 🐾 She has built reports that found where a shipping company was losing revenue.`,
      [goProjects, goSkills],
      ['What are her strengths?']
    );
  }

  // Projects
  if (has(lower, ['project', 'built', 'build', 'worked on', 'portfolio', 'work on', 'made'])) {
    return reply(
      `Payal has 6 projects. 🐾

• **CarbonScope**: tamper-proof pollution data
• **RailSetu**: train arrival predictions
• **Plus 4 more**: a sales dashboard, a data cleaning tool, a shipment API and a product plan`,
      [goProjects],
      ['Tell me about CarbonScope', 'Tell me about RailSetu']
    );
  }

  // Skills
  if (has(lower, ['skill', 'tech', 'stack', 'tools', 'language', 'python', 'know'])) {
    return reply(
      `Her main skills: 🐾

• **Data**: Python, SQL, Pandas, Power BI, Tableau
• **Building**: Git, Streamlit, REST APIs
• **Planning**: Agile, Jira, Trello, Figma`,
      [goSkills],
      ['What has she built?']
    );
  }

  // Experience
  if (has(lower, ['experience', 'job', 'career', 'worked', 'intern', 'company', 'history'])) {
    return reply(
      `Payal's work so far: 🐾

• **UpToSkills**: Senior Lead Data Analyst
• **Andaman Dream Yatra**: Lead Product Designer
• **Dweep Packers & Movers**: Operations Manager
• **PSN Shipping Agency**: Business Analyst`,
      [goExperience, openCv]
    );
  }

  // Education
  if (has(lower, ['education', 'student', 'college', 'degree', 'b.tech', 'btech', 'study', 'gpa', 'year', 'graduat', 'certif'])) {
    return reply(
      `Payal is a **3rd-year B.Tech Computer Science** student with an 8.33 GPA, 65+ certifications and a 2nd place in an all-India Data Science League. 🐾`,
      [openCv]
    );
  }

  // AI / ML questions: be honest
  if (has(lower, ['machine learning', ' ml', 'ml ', 'ai ', ' ai', 'deep learning', 'llm', 'research', 'data scientist', 'scientist'])) {
    return reply(
      `Payal is still **learning** AI and machine learning. Her strengths today are **data analytics** and **leading teams**. 🐾`,
      [goProjects],
      ['What are her strengths?']
    );
  }

  // Role fit
  if (has(lower, ['fit', 'role', 'suitable', 'good for', 'match', 'right for', 'position'])) {
    return reply(
      `Payal suits **internships and entry-level roles** in software, data analytics, and product or project management. 🐾`,
      [goExperience, goProjects]
    );
  }

  // Greetings
  if (/\b(hi|hello|hey|meow|help)\b/.test(lower) || lower.includes('who are you')) {
    return reply(
      `*Meow!* 🐾 I'm Nova. Ask me about Payal's strengths, projects or experience.`,
      [],
      ['What are her strengths?', 'What has she built?']
    );
  }

  // Fallback
  return reply(
    `*Tilts head* 🐾 I'm not sure about that one. Try asking about her strengths, projects or experience.`,
    [],
    ['What are her strengths?', 'What has she built?']
  );
}
