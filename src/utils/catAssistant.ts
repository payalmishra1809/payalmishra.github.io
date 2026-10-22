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
    return reply(
      `*Purrr* 🐾 Here is Payal's resume. You can read it or download it.`,
      [openCv, goContact]
    );
  }

  // Contact
  if (has(lower, ['contact', 'email', 'reach', 'hire', 'hiring', 'talk to', 'linkedin', 'get in touch'])) {
    return reply(
      `You can email Payal at **payalmishra.tech@gmail.com**, or use the contact form at the bottom of the page. She is open to internships and full-time roles.`,
      [goContact, openCv],
      ['What has she worked on?', 'How good is Payal at management?']
    );
  }

  // Specific projects: CarbonScope / RailSetu
  if (/\b(carbonscope|carbon|zero trust|zero-trust|security|emission|emissions)\b/.test(lower)) {
    return reply(
      `**CarbonScope** is one of Payal's real projects, and it is still in progress. 🐾

In India, factories must report their smoke and gas emissions, but the numbers pass through several hands and can be changed or lost without anyone knowing. CarbonScope uses a **zero-trust** idea: nobody is trusted, every reading is **digitally signed at the source** and double-checked against the other records. It also shows everything on a public 3D map so anyone can see it.`,
      [goProjects],
      ['Tell me about RailSetu', 'What has she worked on?']
    );
  }
  if (/\b(rail|railsetu|train|trains|eta|hackathon)\b/.test(lower)) {
    return reply(
      `**RailSetu** is one of Payal's real projects, built for **Smart India Hackathon 2026** with a 6-member team. She is the **team lead**. 🐾

It predicts when a coaching train will arrive. Instead of one guess, it gives a **range**, explains **why** a train is late, and warns when one delay will cause others. There is a live prototype you can try.`,
      [goProjects],
      ['Tell me about CarbonScope', 'What has she worked on?']
    );
  }

  // Management
  if (has(lower, ['manage', 'lead', 'leader', 'team', 'product', 'project manager', 'agile', 'sprint', 'okr', 'stakeholder', 'operations'])) {
    return reply(
      `Payal has solid management and product skills too. 🐾

• **Ran operations**: as Operations Manager at Dweep Packers & Movers she managed day-to-day workflows, account checks and step-by-step procedures (SOPs).
• **Led a team**: at UpToSkills she was promoted from intern to Team Lead to **Senior Lead Data Analyst in just 4 months**, and her teams hit **100% on-time delivery** with sprint reviews and team goals (OKRs).
• **Helped others work faster**: her standard Python templates were used by **15+ interns**.
• **Product work**: she wrote product requirement documents and wireframes for Andaman Dream Yatra.
• **Now building**: a full product and project plan for a travel app, with a 3-sprint Agile roadmap.`,
      [goExperience, goProjects],
      ['What does Payal do in data analytics?', 'What has she worked on?']
    );
  }

  // Data analytics
  if (has(lower, ['analyst', 'analytics', 'analysis', 'data', 'dashboard', 'power bi', 'sql', 'excel', 'tableau', 'report'])) {
    return reply(
      `Data analytics is the other big strength. 🐾

• **Turns data into answers**: she uses Python, SQL, Power BI and Tableau.
• **Dashboards**: she is building a sales dashboard on a **10,000+ record dataset** to show trends and top products.
• **Data cleaning tool**: she is building a Python script that finds duplicates and missing values and makes a clean file plus a report.
• **Real business work**: at PSN Shipping Agency she studied cargo and finance data to find where the company was losing revenue.`,
      [goProjects, goSkills],
      ['What are her top skills?', 'Open resume']
    );
  }

  // Projects
  if (has(lower, ['project', 'built', 'worked on', 'portfolio', 'work on', 'made'])) {
    return reply(
      `Payal has 6 projects, and most are technical. 🐾

**In progress (real projects):**
1. **CarbonScope**: a zero-trust system that makes factory emission data tamper-proof.
2. **RailSetu**: predicts train arrival times (Smart India Hackathon 2026, she is team lead).

**Planned next:**
3. **Sales dashboard**: sales trends from a 10,000+ record dataset.
4. **Data cleaning tool**: a Python script that cleans messy data.
5. **Shipment tracking API**: a REST API and dashboard for tracking shipments.
6. **Travel app product plan**: a full project management case study with a 3-sprint plan.`,
      [goProjects],
      ['Tell me about CarbonScope', 'Tell me about RailSetu']
    );
  }

  // Skills
  if (has(lower, ['skill', 'tech', 'stack', 'tools', 'language', 'python', 'know'])) {
    return reply(
      `Here are Payal's main skills: 🐾

• **Data**: Python, SQL, Pandas, NumPy, Power BI, Tableau
• **Building**: Git, Streamlit, REST APIs
• **Management**: leading teams, Agile and sprint planning, setting goals, working with stakeholders
• **Product tools**: Jira, Trello, Notion, Figma
• **Writing**: product requirement documents, technical documents, SOPs`,
      [goSkills, goProjects],
      ['How good is Payal at management?', 'Open resume']
    );
  }

  // Experience
  if (has(lower, ['experience', 'job', 'career', 'worked', 'intern', 'company', 'history'])) {
    return reply(
      `Payal's work so far: 🐾

• **UpToSkills**: Senior Lead Data Analyst (promoted from intern in 4 months)
• **Andaman Dream Yatra**: Lead Product Designer & UX Strategist
• **Dweep Packers & Movers**: Operations Manager
• **PSN Shipping Agency**: Business Analyst`,
      [goExperience, openCv],
      ['How good is Payal at management?', 'What has she worked on?']
    );
  }

  // Education / student
  if (has(lower, ['education', 'student', 'college', 'degree', 'b.tech', 'btech', 'study', 'gpa', 'year', 'graduat', 'certif'])) {
    return reply(
      `Payal is a **3rd-year B.Tech Computer Science Engineering student** at Dr. B.R. Ambedkar Institute of Technology, with a GPA of 8.33/10. She has also earned **65+ certifications** and won **2nd place** in an all-India Data Science League. 🐾`,
      [openCv],
      ['What has she worked on?', 'How good is Payal at management?']
    );
  }

  // AI / ML / research questions: be honest
  if (has(lower, ['machine learning', ' ml', 'ml ', 'ai ', ' ai', 'deep learning', 'llm', 'research', 'data scientist', 'scientist'])) {
    return reply(
      `Honest answer: Payal is still **learning** AI and machine learning, so it is not her focus right now. 🐾

Where she is strong today is **data analytics** and **management**. Ask me about those!`,
      [goExperience, goProjects],
      ['How good is Payal at management?', 'What does Payal do in data analytics?']
    );
  }

  // Role fit (generic)
  if (has(lower, ['fit', 'role', 'suitable', 'good for', 'match', 'right for', 'position'])) {
    return reply(
      `Payal fits best in **internships and entry-level roles** in software, data analytics, and product / project management. 🐾

She has worked in a team that delivered 100% on time, and has experience in data analysis, product design and operations. Most of her projects are technical. She is a 3rd-year student, so internships and entry-level roles suit her best.`,
      [goExperience, goProjects],
      ['How good is Payal at management?', 'What does Payal do in data analytics?']
    );
  }

  // Greetings
  if ((/\b(hi|hello|hey|meow|help)\b/.test(lower) || lower.includes('who are you'))) {
    return reply(
      `*Meow!* 🐾 I'm Nova, Payal's cat assistant. I can tell you about her **management skills**, **data analytics work**, **projects** and **resume**. What would you like to know?`,
      [goProjects, openCv],
      ['How good is Payal at management?', 'What has she worked on?', 'How can I contact her?']
    );
  }

  // Fallback
  return reply(
    `*Tilts head* 🐾 I'm not sure about that one, but I can help with:

• Payal's **management** skills
• Her **data analytics** work
• Her **projects**, **skills**, and **experience**
• How to **contact** her`,
    [goProjects, openCv],
    ['How good is Payal at management?', 'What has she worked on?', 'How can I contact her?']
  );
}
