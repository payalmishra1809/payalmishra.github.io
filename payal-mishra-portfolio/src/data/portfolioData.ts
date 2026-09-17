import { Project, ExperienceItem, EducationItem, Testimonial, BinaryItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Payal Mishra",
  headline: "Senior Lead Data Analyst & AI Researcher",
  subHeadline: "B.Tech CSE Student · Independent Neuro-AI Researcher · ML Systems",
  location: "Sri Vijaya Puram, Andaman & Nicobar Islands, India",
  email: "payalmishra.tech@gmail.com",
  github: "https://github.com/payalmishra1809",
  linkedin: "https://www.linkedin.com/in/payal-mishra1809/",
  cvViewUrl: "https://drive.google.com/file/d/1_BFrF4eCjQ7d_MZxH-TLV979Y6l8Aemg/view?usp=sharing",
  cvDownloadUrl: "https://drive.google.com/uc?export=download&id=1_BFrF4eCjQ7d_MZxH-TLV979Y6l8Aemg",
  formspreeUrl: "https://formspree.io/f/xkoapdlp",
  availabilityBadge: "Available for Internships, Full-Time Roles & Research",
  lastUpdated: "September 2026",
  bio: `B.Tech Computer Science Engineering student, independent researcher, and Senior Lead Data Analyst. Rapidly progressed from Data Analyst Intern to Senior Lead Data Analyst within 4 months. Authored a solo-author working paper benchmarking LLM agent memory architectures (NeuroMemBench), delivered systems with 98%+ AUC on real-world datasets, built low-latency order-execution engines (<5ms), and led cross-functional intern teams to 100% on-time delivery. Operating at the intersection of applied ML engineering and agent-memory research with verifiable impact.`,
  stats: [
    { value: "30+", label: "Applied Projects" },
    { value: "1", label: "Review Paper (In Prep)" },
    { value: "65+", label: "Certifications" },
    { value: "98.2%", label: "Best AUC Score" }
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
    id: "hft-pipeline",
    number: "01",
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
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
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
    number: "06",
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
    number: "07",
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
    number: "08",
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
    number: "09",
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
    description: "Selected for an online internship in the Machine Learning & AI domain, working on assigned real-world projects under defined deadlines to build practical, hands-on ML experience.",
    highlights: [
      "Applying core machine learning and deep learning algorithms to structured project tasks.",
      "Reinforcing skills in model development, validation metrics, and applied problem-solving alongside a peer intern cohort."
    ]
  },
  {
    id: "codec-tech",
    period: "Aug 2026 — Present",
    role: "Artificial Intelligence Intern",
    organization: "Codec Technologies",
    isCurrent: true,
    badge: "Global Consultancy",
    description: "Engaged as a Project Intern on Codec Technologies' global platform, working hybrid across assigned AI projects and structured training tasks under a dedicated project head.",
    highlights: [
      "Gained industry-level exposure to applied AI workflows within a consultancy operating across 27+ countries.",
      "Tracked performance through rigorous weekly project reviews and architecture checkpoints."
    ]
  },
  {
    id: "uptoskills",
    period: "Dec 2025 — Mar 2026",
    role: "Senior Lead Data Analyst",
    organization: "UpToSkills",
    badge: "Rapid 4-Month Promotion",
    description: "Progressed from Data Analyst Intern to Team Lead to Domain Senior Team Lead within 4 months, managing cross-functional teams across concurrent ML projects.",
    highlights: [
      "Headed department operations, defined team OKRs, ran sprint reviews, and enforced code quality standards, achieving 100% on-time delivery across all project tracks.",
      "Began by performing exploratory data analysis (EDA), data cleaning, and preprocessing on real production datasets.",
      "Standardized Python-based EDA and preprocessing pipelines adopted across the 15+ intern cohort, substantially cutting onboarding turnaround."
    ]
  },
  {
    id: "andaman-dream-yatra",
    period: "Apr 2025 — Sep 2025",
    role: "Web Developer",
    organization: "Andaman Dream Yatra",
    description: "Architected and launched a production-grade website for a commercial travel & tourism client, owning every phase from requirements scoping to server configuration and SEO optimization.",
    highlights: [
      "Retained on a long-term remote maintenance retainer handling performance tuning, plugin updates, content management, and uptime monitoring.",
      "Delivered a measurable lift in organic search visibility and a modernized customer booking inquiry pipeline."
    ]
  },
  {
    id: "psn-shipping",
    period: "Feb 2025 — Sep 2025",
    role: "Business Analyst Intern",
    organization: "PSN Shipping Agency",
    description: "Analyzed day-to-day business operations, cargo and shipment records, and internal financial data, working closely with operational teams to eliminate workflow bottlenecks.",
    highlights: [
      "Studied historical business data to identify patterns in shipment volumes, client transactions, and operational cost drivers.",
      "Prepared structured reports highlighting areas of revenue leakage, process delays, and workflow opportunities for executive review."
    ]
  },
  {
    id: "dweep-movers",
    period: "Dec 2024 — Feb 2025",
    role: "Tally Accountant",
    organization: "Dweep Packers & Movers",
    description: "Managed end-to-end bookkeeping and financial record-keeping using Tally, handling daily voucher entries, invoicing, and reconciliation across multiple client accounts.",
    highlights: [
      "Maintained accurate records of receivables, payables, and expense tracking, ensuring books stayed audit-ready at all times.",
      "Generated periodic financial statements and reports giving management real-time visibility into cash flow and operational budgeting."
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
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL", "Bash", "TypeScript", "HTML5 / CSS3"]
  },
  {
    title: "AI, ML & Large Language Models",
    skills: [
      "Llama-3", "Mistral", "LangChain", "RAG Pipelines", "Multi-Agent Systems",
      "TensorFlow Lite", "OpenCV", "Hugging Face", "LoRA / QLoRA", "FAISS",
      "Scikit-Learn", "Prompt Engineering", "Fine-Tuning"
    ]
  },
  {
    title: "Data Science & Statistical Modeling",
    skills: [
      "Pandas", "NumPy", "EDA", "Statistical Inference", "Regression Analysis",
      "Time Series Forecasting", "Tableau", "Data Imbalance (SMOTE)", "Matplotlib & Seaborn"
    ]
  },
  {
    title: "Systems & Infrastructure",
    skills: ["Redis", "WebSocket", "Linux / Unix", "Git & GitHub", "REST APIs", "Docker Basics", "Async I/O"]
  },
  {
    title: "Product, Web & Design",
    skills: ["Full-Stack Development", "Responsive UI", "WordPress", "Figma Prototyping", "Design Thinking"]
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
      note: "Progressed from intern to Senior Team Lead within 4 months, coordinating multiple data science cohorts simultaneously with 100% on-time delivery."
    },
    {
      name: "Statistical Rigor & Metric Honesty",
      note: "Deep comfort with regression, classification, extreme imbalanced datasets, and time-series forecasting with an emphasis on valid inference over superficial accuracy."
    },
    {
      name: "Rapid Self-Learning & Discipline",
      note: "65+ certifications from Google, Deloitte, Meta, Yale, and Cisco, demonstrating consistent, disciplined, self-directed skill acquisition."
    },
    {
      name: "Computer Vision & Edge Deployment",
      note: "Deployed edge ML models with TensorFlow Lite and OpenCV for real-world attendance and recognition systems that operate offline."
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
