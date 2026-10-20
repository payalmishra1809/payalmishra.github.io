import { Project, ExperienceItem, EducationItem, Testimonial, BinaryItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Payal Mishra",
  headline: "Data Science & Research Enthusiast",
  subHeadline: "B.Tech CSE Student · Senior Lead Data Analyst · ML & AI Intern",
  location: "Sri Vijaya Puram, Andaman & Nicobar Islands, India",
  email: "payalmishra.tech@gmail.com",
  github: "https://github.com/payalmishra1809",
  linkedin: "https://www.linkedin.com/in/payal-mishra1809/",
  cvViewUrl: "./PAYAL_MISHRA_CV.pdf",
  cvDownloadUrl: "./PAYAL_MISHRA_CV.pdf",
  formspreeUrl: "https://formspree.io/f/xkoapdlp",
  availabilityBadge: "Available for Internships, Full-Time Roles & Research",
  lastUpdated: "October 2026",
  bio: `B.Tech Computer Science Engineering student and Senior Lead Data Analyst who bridges deep technical execution and management expertise, progressing from Data Analyst Intern to Senior Lead Data Analyst in 4 months. Combines robust coding capabilities in Python and SQL with strong UX design, data visualization (Power BI/Tableau), and comprehensive end-to-end project documentation. Proven track record of translating complex client requirements into technical specifications, architecting data workflows, and leading cross-functional teams to 100% on-time delivery. Equally equipped for technical software/data roles and strategic management positions, backed by 30+ shipped projects and 65+ certifications.`,
  stats: [
    { value: "30+", label: "Shipped Projects" },
    { value: "65+", label: "Certifications" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "4 Mo", label: "Intern → Senior Lead" }
  ]
};

export const RESEARCH_PAPER = {
  title: "NeuroMemBench: Evaluating Memory Architectures for Long-Horizon Neuro-AI Agent Workflows",
  status: "Comprehensive Review & Benchmark Paper · In Preparation",
  authors: "Payal Mishra",
  authorNote: "Sole Author",
  affiliation: "Department of Computer Science & Engineering, Dr. B.R. Ambedkar Institute of Technology, Port Blair, A&N Islands",
  abstract: "Introduces NeuroMemBench, a self-built benchmark suite of six computational-neuroscience agent tasks used to stress-test three LLM agent memory architectures — Full History, Sliding-Window Summarization, and a custom Schema-Driven Structured State design — inside an isolated tool-execution sandbox. Across multi-trial sweeps on gemini-3.5-flash-lite, the structured-state approach held context footprint constant while nearly doubling task-completion fidelity, showing that deterministic, schema-bound state tracking is what long-horizon scientific agents actually need over free-form natural-language summarization.",
  metrics: [
    { value: "9 vs 5", label: "Task Completions: Structured State vs Baselines" },
    { value: "1,371", label: "Avg. Chars — Constant Context Footprint" },
    { value: "6 Tasks", label: "Custom Neuroscience Benchmark Suite" }
  ],
  tags: [
    "LLM Agents",
    "Memory Architectures",
    "Agent Benchmarking",
    "Computational Neuroscience",
    "Tool Use",
    "Sandbox Evaluation"
  ],
  architecturesCompared: [
    {
      name: "Full History",
      type: "Baseline",
      description: "Appends all conversation turns and tool returns directly to context.",
      drawback: "Context bloats exponentially, degrades reasoning on long sequences.",
      score: "5/10 completions"
    },
    {
      name: "Sliding-Window Summarization",
      type: "Baseline",
      description: "Compresses past interactions into periodic natural-language summaries.",
      drawback: "Lossy compression frequently drops essential numeric and neuro-scientific parameters.",
      score: "5/10 completions"
    },
    {
      name: "Schema-Driven Structured State",
      type: "Proposed",
      description: "Maintains deterministic JSON state machine updated via dedicated schema validation.",
      drawback: "Constant ~1,371 char footprint across arbitrary step counts without hallucinated degradation.",
      score: "9/10 completions"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-dashboard",
    number: "01",
    category: "Analytics",
    categoryLabel: "Data Analysis & BI",
    title: "Interactive E-Commerce Sales & Customer Insights Dashboard",
    shortDesc: "Streamlit dashboard analyzing revenue trends across 10,000+ customer transaction records, powered by SQL window functions and aggregations.",
    fullDesc: "Designed and deployed an interactive Streamlit dashboard analyzing revenue trends across 10,000+ customer transaction records, using SQL window functions and aggregation queries to surface top product categories and regional sales metrics.",
    stack: ["Python (Pandas)", "Streamlit", "Power BI", "SQL"],
    metrics: {
      primary: "10,000+",
      label: "Customer Transaction Records Analyzed"
    },
    highlightTitle: "Analytical Insight",
    highlightText: "SQL window functions and aggregation queries feed the dashboard so category and regional performance can be explored interactively.",
    colSpan: "md"
  },
  {
    id: "churn-prediction",
    number: "02",
    category: "ML",
    categoryLabel: "Machine Learning",
    title: "End-to-End Customer Churn Prediction Web App",
    shortDesc: "Scikit-Learn churn model with 82%+ accuracy, served through a Streamlit app that returns real-time churn probabilities.",
    fullDesc: "Built and deployed an end-to-end machine learning web app predicting customer churn with 82%+ accuracy using Scikit-Learn and Streamlit, engineering tenure and contract features and serving real-time inference.",
    stack: ["Python", "Scikit-Learn", "Streamlit", "Hugging Face Spaces"],
    metrics: {
      primary: "82%+",
      label: "Churn Prediction Accuracy"
    },
    highlightTitle: "Engineering Highlight",
    highlightText: "The trained model is wrapped in a lightweight web interface so users can adjust inputs and see churn probability in real time.",
    colSpan: "md"
  },
  {
    id: "data-quality-pipeline",
    number: "03",
    category: "Analytics",
    categoryLabel: "Python Scripting & Data Engineering",
    title: "Automated Data Quality & Cleaning Pipeline Script",
    shortDesc: "Python script that detects duplicates, handles missing values and flags anomalies, outputting a cleaned CSV and HTML summary report.",
    fullDesc: "Developed an automated Python validation script that detects duplicates, handles missing values and flags anomalies, converting raw CSV datasets into cleaned files with an HTML summary report and reducing manual cleaning time.",
    stack: ["Python", "Pandas", "SQLAlchemy"],
    highlightTitle: "Automation Highlight",
    highlightText: "Automated validation guarantees data integrity before downstream reporting, replacing repetitive manual cleaning.",
    colSpan: "md"
  },
  {
    id: "ai-feature-prd",
    number: "04",
    category: "Product",
    categoryLabel: "Product Management",
    title: "Product Requirements Document & Metric Framework for an AI Feature",
    shortDesc: "2-page PRD for an AI-driven automation feature with personas, user stories, Figma wireframes and a North Star metrics framework.",
    fullDesc: "Authored a 2-page PRD for an AI-driven automation feature covering user personas, user stories and acceptance criteria, with Figma wireframes and a metrics framework of North Star, activation and guardrail metrics.",
    stack: ["Notion", "Google Docs", "Figma", "Whimsical"],
    metrics: {
      primary: "2-Page",
      label: "PRD with Metrics Framework"
    },
    highlightTitle: "Product Highlight",
    highlightText: "Success is defined up front through a North Star metric, activation rates and guardrail metrics that measure feature adoption.",
    colSpan: "md"
  },
  {
    id: "agile-wbs-board",
    number: "05",
    category: "Product",
    categoryLabel: "Project Management",
    title: "Agile Project Board & Work Breakdown Structure",
    shortDesc: "3-sprint Agile roadmap in GitHub Projects with 15-20 cards across epics, user stories and acceptance criteria.",
    fullDesc: "Structured a 3-sprint Agile roadmap in GitHub Projects, managing a backlog of 15-20 cards across epics, user stories and acceptance criteria, with story point estimation and dependency tracking.",
    stack: ["GitHub Projects", "Jira", "Trello"],
    metrics: {
      primary: "3 Sprints",
      label: "Agile Release Cycle",
      subMetrics: [
        { value: "15-20", label: "Cards in Backlog" }
      ]
    },
    highlightTitle: "Delivery Highlight",
    highlightText: "Sprint estimation and dependency tracking keep cross-functional feature delivery on schedule.",
    colSpan: "md"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "skill-nexis",
    period: "Aug 2026 — Present",
    role: "Machine Learning & AI Intern",
    organization: "Skill Nexis",
    isCurrent: true,
    badge: "Current Role",
    description: "Delivering real-world ML projects against defined deadlines, applying core machine learning workflows alongside a peer intern cohort."
  },
  {
    id: "codec-tech",
    period: "Aug 2026 — Present",
    role: "Artificial Intelligence Intern",
    organization: "Codec Technologies",
    isCurrent: true,
    badge: "Global Consultancy",
    description: "Executing assigned AI projects under a dedicated project head at a consultancy operating across 27+ countries, with weekly project reviews."
  },
  {
    id: "uptoskills",
    period: "Dec 2025 — Mar 2026",
    role: "Senior Lead Data Analyst",
    organization: "UpToSkills",
    badge: "Rapid 4-Month Promotion",
    description: "Promoted from Data Analyst Intern to Team Lead to Senior Lead Data Analyst in 4 months, managing cross-functional teams across concurrent ML projects.",
    highlights: [
      "Defined team OKRs and ran sprint reviews, achieving 100% on-time delivery; standardized Python EDA pipelines adopted by a 15+ intern cohort."
    ]
  },
  {
    id: "andaman-dream-yatra",
    period: "Apr 2025 — Sep 2025",
    role: "Lead Product Designer & UX Strategist",
    organization: "Andaman Dream Yatra",
    description: "Led client consultations and audience research, using Power BI dashboards to validate design directions.",
    highlights: [
      "Authored PRDs, wireframes and feature specifications; prototyped with AI-assisted tools and directed final UI/UX to client sign-off."
    ]
  },
  {
    id: "dweep-movers",
    period: "Jul 2024 — Nov 2024",
    role: "Operations Manager",
    organization: "Dweep Packers & Movers",
    description: "Oversaw operational workflows, account reconciliation and stakeholder communication; authored SOPs and documentation for internal bookkeeping."
  },
  {
    id: "psn-shipping",
    period: "Mar 2024 — Jun 2024",
    role: "Business Analyst",
    organization: "PSN Shipping Agency",
    description: "Bridged technical teams and executive management through data reporting and presentations; analyzed cargo and shipment data to pinpoint revenue leakage."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "dbrait",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Dr. B.R. Ambedkar Institute of Technology",
    period: "Nov 2024 — Present",
    location: "Sri Vijaya Puram, Andaman & Nicobar Islands",
    scoreLabel: "Cumulative GPA",
    scoreValue: "8.33 / 10.0",
    icon: "GraduationCap"
  },
  {
    id: "st-marys",
    degree: "Senior Secondary (PCM + Computer Science)",
    institution: "St. Mary's Senior Secondary School",
    period: "Completed May 2022",
    location: "Sri Vijaya Puram, Andaman & Nicobar Islands",
    scoreLabel: "Board Score",
    scoreValue: "91%",
    icon: "Award"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Core",
    skills: ["Python", "Java", "SQL"]
  },
  {
    title: "Data Analysis & Visualization",
    skills: ["Pandas", "NumPy", "Exploratory Data Analysis (EDA)", "Statistical Modeling", "Power BI", "Tableau", "Matplotlib", "Seaborn"]
  },
  {
    title: "Engineering & Development",
    skills: ["Git", "REST APIs", "Streamlit", "Workflow Automation", "Code Quality Standards"]
  },
  {
    title: "Management & Operations",
    skills: ["Cross-Functional Leadership", "Agile / Sprint Planning", "OKR Execution", "Stakeholder Management", "Process Standardization"]
  },
  {
    title: "Documentation & Communication",
    skills: ["End-to-End Technical Documentation", "Product Requirement Documents (PRDs)", "Client Requirement Translation", "SOP Writing"]
  }
];

export const BINARY_PROFILE: { plus: BinaryItem[]; minus: BinaryItem[] } = {
  plus: [
    {
      name: "End-to-End ML Pipelines",
      note: "From raw data ingestion through EDA, feature engineering, model training, and evaluation using Python, Pandas, and Scikit-Learn."
    },
    {
      name: "Team Leadership under Pressure",
      note: "Progressed from intern to Senior Lead Data Analyst within 4 months, coordinating multiple data science cohorts simultaneously with 100% on-time delivery."
    },
    {
      name: "Statistical Rigor & Metric Honesty",
      note: "Deep comfort with EDA, statistical modeling, and predictive modeling with an emphasis on valid inference over superficial accuracy."
    },
    {
      name: "Rapid Self-Learning & Discipline",
      note: "65+ certifications including Google, Deloitte, and Meta, demonstrating consistent, disciplined, self-directed skill acquisition."
    },
    {
      name: "Product & Agile Delivery",
      note: "Authored a PRD with a North Star metrics framework and structured a 3-sprint Agile roadmap with epics, user stories, and story point estimation."
    },
    {
      name: "Research Benchmark Methodology",
      note: "Designed and ran a full benchmark study end-to-end for NeuroMemBench (task suite design, sandboxed evaluation, multi-trial sweeps, quantitative writeup)."
    }
  ],
  minus: [
    {
      name: "Deep Learning Mathematical Foundations",
      note: "Bridging applied ML experience with rigorous mathematical depth in non-convex optimization landscapes, loss surface dynamics, and neural tangent kernels."
    },
    {
      name: "Formal Peer-Reviewed Publication",
      note: "Authored an independent working paper (NeuroMemBench); actively preparing the work for submission through formal conference/journal peer review."
    },
    {
      name: "Large-Scale Distributed Compute",
      note: "Scaling beyond single-node Pandas and multi-threading toward distributed clusters with PySpark, Ray, and cloud-native parallel processing."
    },
    {
      name: "Transformer Theoretical Internals",
      note: "Deepening theoretical grasp of self-attention mechanisms, state-space models (Mamba), and mechanistic interpretability beyond high-level APIs."
    },
    {
      name: "Causal Inference & Counterfactuals",
      note: "Mastering causal graphs, Bayesian structural equation modeling, and Pearl's do-calculus to disentangle correlation from causation in observational data."
    },
    {
      name: "Domain Specialization Convergence",
      note: "Synthesizing broad interdisciplinary work across data analysis, machine learning, and product into a focused long-term research direction."
    }
  ]
};

export const CERTIFICATIONS: { name: string; featured?: boolean }[] = [
  { name: "Data Science League: 2nd Place, All India", featured: true },
  { name: "Google Advanced Data Analytics", featured: true },
  { name: "Deloitte Data Analytics Simulation", featured: true },
  { name: "Google Data Science Foundations" },
  { name: "Forage Data Science Simulation" },
  { name: "Google Cybersecurity Professional", featured: true },
  { name: "Meta JavaScript Programming" },
  { name: "Google UX Design Professional" },
  { name: "Google Generative AI", featured: true },
  { name: "Yale Introduction to Psychology" },
  { name: "Nuts and Bolts of Machine Learning" },
  { name: "Regression Analysis (Google)" },
  { name: "IoT Professional Training (BR Ambedkar Institute)", featured: true },
  { name: "Google ML Crash Course" },
  { name: "Microsoft Office Specialist: Excel (MOS)", featured: true },
  { name: "NPTEL Design Thinking" },
  { name: "Cisco Introduction to Cybersecurity" },
  { name: "Google AI Essentials" },
  { name: "Accenture Web Analytics" },
  { name: "Google Fundamentals of Digital Marketing" },
  { name: "Full Stack Development" },
  { name: "Figma High-Fidelity Prototypes" },
  { name: "Tally Prime and GST Certification" },
  { name: "Google Linux and SQL" },
  { name: "Investment Risk Management" },
  { name: "Building Dynamic UI (Google)" },
  { name: "Generative AI with LLMs (DeepLearning.AI)", featured: true },
  { name: "Python for Data Science (IBM)" },
  { name: "SQL for Data Science (Coursera)" },
  { name: "Data Visualization with Tableau" },
  { name: "Agile Project Management (Google)" },
  { name: "Foundations of Project Management" },
  { name: "Neural Networks and Deep Learning", featured: true },
  { name: "Version Control with Git" },
  { name: "Prompt Engineering for ChatGPT" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "asma-rani",
    tag: "Senior Assistant Professor",
    quote: "Highlights Payal's breadth of hands-on AI work, her rise from Data Analyst Intern to Senior Lead within four months, and a solid foundation across Python, ML, and statistical modeling.",
    author: "Dr. Asma Rani",
    role: "Senior Assistant Professor, Dr. B.R. Ambedkar Institute of Technology",
    type: "academic"
  },
  {
    id: "shrabani-mallick",
    tag: "Head of Department (CSE)",
    quote: "As Department Head, notes her work across ML, LLMs, and multi-agent systems, along with strong analytical ability, professionalism, and a genuine aptitude for research.",
    author: "Dr. Shrabani Mallick",
    role: "Associate Professor & HoD (CSE), Dr. B.R. Ambedkar Institute of Technology",
    type: "academic"
  },
  {
    id: "harsabardhan-barik",
    tag: "Assistant Professor",
    quote: "Describes her as sincere, hardworking, and genuinely motivated to learn, with a strong practical grasp of the skills needed to make good use of a research internship.",
    author: "Harsabardhan Barik",
    role: "Assistant Professor (Senior Scale), CSE, Dr. B.R. Ambedkar Institute of Technology",
    type: "academic"
  },
  {
    id: "kartik-joshi",
    tag: "Industry Collaborator",
    quote: "Speaks to her research-oriented mindset from their collaboration on a credit-card fraud detection project, highlighting strong analytical thinking, a fast grasp of ML concepts, and disciplined delivery under deadlines.",
    author: "Kartik Joshi",
    role: "Software Engineer, Generative AI, AlgoLeap, Hyderabad",
    type: "professional"
  }
];
