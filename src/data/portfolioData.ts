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
    id: "supply-chain-dashboard",
    number: "01",
    category: "Analytics",
    categoryLabel: "Data Analysis & Power BI",
    title: "Enterprise Supply Chain Revenue Leakage & Profitability Dashboard",
    shortDesc: "Analyzed 100K+ shipping and financial records in Python to surface bottlenecks and revenue leakage, with an interactive Power BI dashboard for executives.",
    fullDesc: "Analyzed 100K+ shipping and financial records using Python (Pandas, NumPy) to identify operational bottlenecks and revenue leakage, designing an interactive Power BI dashboard with drill-down metrics for executive decision-making.",
    stack: ["Python", "Pandas", "NumPy", "Power BI", "SQL", "End-to-End Business Analysis"],
    metrics: {
      primary: "100K+",
      label: "Shipping & Financial Records Analyzed"
    },
    highlightTitle: "Analytical Insight",
    highlightText: "Drill-down Power BI metrics turn raw shipping and financial records into clear views of where revenue leaks, supporting executive decision-making.",
    colSpan: "md"
  },
  {
    id: "requirement-pipeline",
    number: "02",
    category: "Systems",
    categoryLabel: "Technical Workflow & Documentation",
    title: "Client-to-Engineering Requirement Translation & Pipeline",
    shortDesc: "Bridged external stakeholders and dev teams, turning client feedback into technical specs, structured Python/SQL backend workflows and Jira tickets.",
    fullDesc: "Acted as the communication bridge between external stakeholders and internal dev teams, ingesting client feedback, drafting comprehensive technical specification documents, and turning them into structured Python/SQL backend workflows and Jira tickets.",
    stack: ["Python", "SQL", "Git", "Markdown Documentation", "Confluence / Jira Workflow"],
    highlightTitle: "Workflow Highlight",
    highlightText: "Client feedback flows through written specifications into backend workflows and tracked tickets, keeping stakeholders and engineers aligned.",
    colSpan: "md"
  },
  {
    id: "data-profiling-utility",
    number: "03",
    category: "Analytics",
    categoryLabel: "Python Scripting & Automation",
    title: "Automated Python Data Profiling & Reporting Utility",
    shortDesc: "Standalone Python tool that runs automated EDA on raw enterprise datasets, generates distribution visuals and compiles technical data dictionaries.",
    fullDesc: "Developed a standalone Python automation tool that ingests raw enterprise datasets, executes automated exploratory data analysis (EDA), generates statistical distribution visualizations, and compiles complete technical data dictionaries.",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Automated Reporting Engine"],
    highlightTitle: "Automation Highlight",
    highlightText: "One run ingests a raw dataset and produces EDA, distribution visualizations and a complete data dictionary with no manual steps.",
    colSpan: "md"
  },
  {
    id: "sprint-tracker",
    number: "04",
    category: "Analytics",
    categoryLabel: "Full-Stack Data Application",
    title: "Cross-Functional Agile Sprint & Task Tracking System",
    shortDesc: "Full-stack internal app (Python/Streamlit) with interactive dashboards for multi-team deliverables, sprint burn-down metrics and live project documentation.",
    fullDesc: "Engineered a full-stack internal tracking application with a Python/Streamlit backend and interactive frontend dashboards to manage multi-team deliverables, track sprint burn-down metrics, and maintain real-time project documentation.",
    stack: ["Python", "Streamlit", "Git", "REST APIs", "Documentation Framework"],
    highlightTitle: "Application Highlight",
    highlightText: "Interactive dashboards track sprint burn-down and multi-team deliverables while keeping project documentation current in real time.",
    colSpan: "md"
  },
  {
    id: "hft-pipeline",
    number: "05",
    category: "Systems",
    categoryLabel: "Systems Engineering",
    title: "HFT Alpha Generator & Order Pipeline",
    shortDesc: "Simulated high-frequency trading system ingesting live order-book tick data via WebSocket, processing order decisions in under 5ms with Redis caching.",
    fullDesc: "A simulated high-frequency trading system ingesting live order-book tick data via WebSocket, processing order decisions in under 5ms. Demonstrates systems-level performance optimization, concurrency handling, and low-latency execution with real-time P&L tracking across multiple simulated instruments.",
    stack: ["Python", "WebSocket", "Redis", "Pandas", "NumPy", "Async I/O"],
    githubUrl: "https://github.com/payalmishra1809/HFT-ALPHA-GENERATOR-ORDER-PIPELINE",
    metrics: {
      primary: "<5ms",
      label: "Per Order Decision Latency",
      subMetrics: [
        { value: "Sub-ms", label: "Redis State Cache" },
        { value: "Multi", label: "Parallel P&L Tracking" }
      ]
    },
    highlightTitle: "Engineering Highlight",
    highlightText: "Integrated Redis for sub-millisecond state caching, reducing pipeline overhead and enabling replay of historical tick sequences for strategy backtesting. Statistical alpha signal generation with dynamic threshold tuning and risk guardrails.",
    colSpan: "xl",
    featured: true
  },
  {
    id: "multimodal-rag",
    number: "06",
    category: "GenAI",
    categoryLabel: "Generative AI",
    title: "Enterprise Multimodal Multi-Agent RAG Workspace",
    shortDesc: "Corporate AI system with three parallel specialized agents (LLaVA for financial charts, OCR for tables, dense retrieval for documents) yielding ~70% faster analysis.",
    fullDesc: "A corporate AI system with three parallel specialized agents: a vision LLM (LLaVA) for financial chart interpretation, an OCR agent for structured PDF table extraction, and a dense retrieval agent for scanned document Q&A. Achieved ~70% reduction in simulated document analysis time via multi-agent RAG orchestration.",
    stack: ["Python", "LangChain", "LLaVA", "FAISS", "PyMuPDF", "Tesseract OCR", "Async"],
    githubUrl: "https://github.com/payalmishra1809/ENTERPRISE-MULTIMODAL-MULTI-AGENT-RAG-WORKSPACE",
    metrics: {
      primary: "~70%",
      label: "Faster than Sequential Ingestion",
      subMetrics: [
        { value: "3", label: "Parallel Specialized Agents" },
        { value: "FAISS", label: "Vector Dense Indexing" }
      ]
    },
    highlightTitle: "Architecture Highlight",
    highlightText: "Designed for enterprise-scale document ingestion with modular agent interfaces, each component independently swappable or upgradeable. FAISS vector indexing and async agent coordination deliver the 70% speed gain over sequential processing.",
    colSpan: "xl",
    featured: true
  },
  {
    id: "hinglish-nlp",
    number: "07",
    category: "Research",
    categoryLabel: "LLM Research & Fine-Tuning",
    title: "Custom LLM Fine-Tuning for Hinglish NLP",
    shortDesc: "Fine-tuned Llama-3-8B on 15,000+ Hinglish samples with QLoRA 4-bit quantization, yielding +18% accuracy gain on e-commerce review intent classification.",
    fullDesc: "Fine-tuned Llama-3-8B on a curated 15,000+ multilingual Hinglish dataset for e-commerce review moderation. Applied QLoRA (4-bit quantization) on consumer-grade hardware, achieving an 18% improvement in intent classification accuracy over the base model. Rigorously evaluated with ROUGE-1/2/L and BERTScore metrics.",
    stack: ["Llama-3-8B", "Hugging Face", "QLoRA", "LoRA", "Pandas", "ROUGE", "BERTScore", "4-bit Quantization"],
    githubUrl: "https://github.com/payalmishra1809/CUSTOM-LLM-FINE-TUNING-FOR-HINGLISH-NLP",
    metrics: {
      primary: "+18%",
      label: "Intent Classification Accuracy Gain",
      subMetrics: [
        { value: "15K+", label: "Hinglish Samples" },
        { value: "4-bit", label: "QLoRA Quantization" }
      ]
    },
    highlightTitle: "Dataset Engineering & Error Analysis",
    highlightText: "Curated and cleaned 15,000+ multilingual Hinglish samples: deduplication, label normalization, and stratified train/val/test splits. Error analysis on low-confidence predictions closed the loop between evaluation and data curation.",
    colSpan: "full",
    featured: true
  },
  {
    id: "fraud-detection",
    number: "08",
    category: "ML",
    categoryLabel: "Applied Machine Learning",
    title: "Credit Card Fraud Detection System",
    shortDesc: "Production-ready fraud detection pipeline achieving 98.21% AUC on Kaggle's 284K transaction dataset with severe 584:1 class imbalance.",
    fullDesc: "A production-ready fraud detection pipeline achieving 98.21% AUC on Kaggle's 284K transaction dataset with a 0.17% fraud rate. Engineered to handle extreme class imbalance in real-world financial data.",
    stack: ["Python", "Scikit-Learn", "Imbalanced-learn", "SMOTE", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/payalmishra1809/FRAUD-DETECTION-SYSTEM",
    metrics: {
      primary: "98.21%",
      label: "AUC Score on 284K Transactions",
      subMetrics: [
        { value: "584:1", label: "Class Imbalance Ratio" },
        { value: "SMOTE", label: "Oversampling Optimization" }
      ]
    },
    highlightTitle: "Research Impact",
    highlightText: "The core challenge was the 584:1 class imbalance ratio. By applying SMOTE oversampling and precision-recall optimization instead of standard accuracy metrics, the model achieves high sensitivity without compromising specificity.",
    colSpan: "xl",
    featured: true
  },
  {
    id: "child-vaccination",
    number: "09",
    category: "Healthcare",
    categoryLabel: "Healthcare Tech",
    title: "Child Vaccination Management System",
    shortDesc: "System compliant with India's National Immunization Schedule (NIS) 2025, modeling child immunization as a timed state machine.",
    fullDesc: "A production-ready system compliant with India's National Immunization Schedule (NIS) 2025 for healthcare providers and parents. Streamlines schedule tracking and notification workflows.",
    stack: ["Python", "SQL", "Healthcare Data", "NIS 2025", "State Machine"],
    githubUrl: "https://github.com/payalmishra1809/CHILD-VACCINATION-SYSTEM",
    highlightTitle: "Analytical Insight",
    highlightText: "Modeled real-world immunization schedules as a state-machine: each child as a node, each vaccine as a timed edge. This graph-theoretic approach enables bulk schedule generation and missed-dose detection at scale.",
    colSpan: "md"
  },
  {
    id: "sales-forecasting",
    number: "10",
    category: "Analytics",
    categoryLabel: "Time Series Analytics",
    title: "Time Series Sales Forecasting",
    shortDesc: "Transforms raw transactional data into daily and monthly series with seasonal decomposition and a baseline 6-month forecast.",
    fullDesc: "Transforms raw transactional data into daily and monthly sales series, visualizing trends and creating a baseline 6-month forecast to support inventory and planning decisions. Fully implemented in Python.",
    stack: ["Python", "Pandas", "Matplotlib", "Time Series", "ARIMA Benchmark"],
    githubUrl: "https://github.com/payalmishra1809/TIME-SERIES-SALES-FORECASTING",
    highlightTitle: "Analytical Insight",
    highlightText: "Applied seasonal decomposition to isolate trend, seasonality, and residual noise components. The 6-month forecast baseline serves as a reproducible benchmark for evaluating more complex models.",
    colSpan: "md"
  },
  {
    id: "facial-attendance",
    number: "11",
    category: "Vision",
    categoryLabel: "Computer Vision",
    title: "Facial Recognition Attendance System",
    shortDesc: "Real-time edge computer vision attendance tracking via webcam using TensorFlow Lite and OpenCV, logging directly to local CSV.",
    fullDesc: "Real-time attendance tracking via webcam using TensorFlow Lite and OpenCV, logging directly to CSV.",
    stack: ["Python", "TensorFlow Lite", "OpenCV", "Edge ML"],
    githubUrl: "https://github.com/payalmishra1809/FACIAL-ATTENDANCE-SYSTEM",
    highlightTitle: "Edge Deployment",
    highlightText: "Runs inference locally without cloud dependency, enabling offline use in low-connectivity educational and industrial settings.",
    colSpan: "sm"
  },
  {
    id: "us-accidents",
    number: "12",
    category: "Analytics",
    categoryLabel: "Big Data & Spatial Analytics",
    title: "US Accidents Big Data Analysis",
    shortDesc: "Analyzed 7.7 million traffic records to identify accident hotspots and peak risk windows via geospatial modeling and sampling.",
    fullDesc: "Analyzed 7.7 million traffic records to identify accident hotspots and peak risk times via geospatial modeling.",
    stack: ["Python", "Geospatial", "Sampling", "Big Data", "Pandas"],
    githubUrl: "https://github.com/payalmishra1809/US-ACCIDENT-DATA-ANALYSIS",
    highlightTitle: "Big Data Scale",
    highlightText: "7.7M records processed with strategic sampling to balance computational cost and statistical representativeness across time horizons.",
    colSpan: "sm"
  },
  {
    id: "world-population",
    number: "13",
    category: "Analytics",
    categoryLabel: "Longitudinal Study",
    title: "World Population Longitudinal Analysis",
    shortDesc: "Analyzed World Bank data spanning 1960 to 2023, tracking global demographic changes across 63 years with automated cleaning pipelines.",
    fullDesc: "Analyzed World Bank data from 1960 to 2023, tracking global growth trends across 63 years of demographic data.",
    stack: ["Python", "Pandas", "World Bank API", "Longitudinal Analysis"],
    githubUrl: "https://github.com/payalmishra1809/WORLD-POPULATION-ANALYSIS",
    highlightTitle: "Research Rigor",
    highlightText: "Automated cleaning workflows ensure reproducible pipelines, essential for academic-grade longitudinal research.",
    colSpan: "sm"
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
    description: "Selected for an online internship in the Machine Learning & AI domain, delivering assigned real-world projects against defined deadlines to build applied ML experience.",
    highlights: [
      "Applied core machine learning workflows to structured project tasks, strengthening model development and applied problem-solving skills alongside a peer intern cohort."
    ]
  },
  {
    id: "codec-tech",
    period: "Aug 2026 — Present",
    role: "Artificial Intelligence Intern",
    organization: "Codec Technologies",
    isCurrent: true,
    badge: "Global Consultancy",
    description: "Working as a Project Intern on a global hybrid platform, executing assigned AI projects and structured training tasks under a dedicated project head.",
    highlights: [
      "Gaining industry-level exposure to applied AI workflows within a consultancy operating across 27+ countries, with performance tracked via weekly project reviews."
    ]
  },
  {
    id: "uptoskills",
    period: "Dec 2025 — Mar 2026",
    role: "Senior Lead Data Analyst",
    organization: "UpToSkills",
    badge: "Rapid 4-Month Promotion",
    description: "Promoted from Data Analyst Intern to Team Lead to Senior Lead Data Analyst, progressing rapidly through leadership ranks within 4 months.",
    highlights: [
      "Managed cross-functional teams across concurrent ML projects, aligning technical execution with project roadmaps.",
      "Headed department operations as senior lead: defined team OKRs, ran sprint reviews, and enforced code-quality standards, achieving 100% on-time delivery across all project tracks.",
      "Standardized Python-based EDA and preprocessing pipelines, adopted across a 15+ intern cohort, dramatically reducing analyst onboarding time and operational friction."
    ]
  },
  {
    id: "andaman-dream-yatra",
    period: "Apr 2025 — Sep 2025",
    role: "Lead Product Designer & UX Strategist",
    organization: "Andaman Dream Yatra",
    description: "Led product design and UX strategy for a travel & tourism platform, from client consultations to final UI/UX implementation and client sign-off.",
    highlights: [
      "Conducted in-depth client consultations and audience demographic research, utilizing Power BI dashboards to analyze user behavior across age groups and validate design directions.",
      "Authored end-to-end Product Requirement Documents (PRDs), wireframes, feature specifications, and visual design architectures tailored for public user accessibility.",
      "Leveraged AI-assisted development tools to prototype the platform, manually refining, structuring, and directing the final UI/UX implementation to ensure seamless human-led design control and client sign-off."
    ]
  },
  {
    id: "dweep-movers",
    period: "Jul 2024 — Nov 2024",
    role: "Operations Manager",
    organization: "Dweep Packers & Movers",
    description: "Oversaw end-to-end operational workflows, resource coordination, account reconciliation, and stakeholder communication to optimize internal processes for peak efficiency.",
    highlights: [
      "Authored standardized operating procedures (SOPs) and comprehensive documentation for internal bookkeeping, streamlining administrative workflows and executive decision-making."
    ]
  },
  {
    id: "psn-shipping",
    period: "Mar 2024 — Jun 2024",
    role: "Business Analyst",
    organization: "PSN Shipping Agency",
    description: "Facilitated cross-departmental alignment by bridging technical teams and executive management through detailed data reporting, presentations, and process documentation.",
    highlights: [
      "Analyzed cargo and shipment datasets to pinpoint revenue leakage, translating raw metrics into clear strategic insights and actionable management briefs."
    ]
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
      note: "Deep comfort with regression, classification, extreme imbalanced datasets, and time-series forecasting with an emphasis on valid inference over superficial accuracy."
    },
    {
      name: "Rapid Self-Learning & Discipline",
      note: "65+ certifications including Google, Deloitte, and Meta, demonstrating consistent, disciplined, self-directed skill acquisition."
    },
    {
      name: "Multi-Agent RAG & Multimodal AI",
      note: "Orchestrated vision LLM, OCR, and dense-retrieval agents in parallel with FAISS indexing, cutting document-analysis time by ~70% versus sequential processing."
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
      note: "Synthesizing broad interdisciplinary work (finance, healthcare, NLP) into a laser-focused PhD-level dissertation direction in agentic memory."
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
  { name: "LLM Fine-Tuning (Llama-3 / QLoRA)", featured: true },
  { name: "Multi-Agent RAG Systems" },
  { name: "HFT Alpha Generator Architecture" },
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
