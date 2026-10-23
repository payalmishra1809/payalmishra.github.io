import { Project, ExperienceItem, EducationItem, Testimonial, BinaryItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Payal Mishra",
  headline: "Data Analytics & Product Management",
  subHeadline: "B.Tech CSE (3rd Year)",
  location: "Sri Vijaya Puram, Andaman & Nicobar Islands, India",
  email: "payalmishra.tech@gmail.com",
  github: "https://github.com/payalmishra1809",
  linkedin: "https://www.linkedin.com/in/payal-mishra1809/",
  cvViewUrl: "./PAYAL_MISHRA_CV.pdf",
  cvDownloadUrl: "./PAYAL_MISHRA_CV.pdf",
  formspreeUrl: "https://formspree.io/f/xkoapdlp",
  availabilityBadge: "Available for Internships & Full-Time Roles",
  lastUpdated: "October 2026",
  bio: `B.Tech Computer Science Engineering student (3rd year) with hands-on experience across data analysis, product design, and operations. Combines Python and SQL with data visualization (Power BI/Tableau), UX design, and end-to-end project documentation. Experienced in translating client requirements into technical specifications and working in cross-functional teams that delivered 100% on time. Currently building technical projects in zero-trust security, train ETA prediction, data pipelines, and REST APIs, alongside a full product and project management case study. 30+ shipped projects and 65+ certifications.`,
  stats: [
    { value: "30+", label: "Shipped Projects" },
    { value: "65+", label: "Certifications" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "15+", label: "Interns Using My Pipelines" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "carbon-score",
    number: "01",
    category: "Systems",
    categoryLabel: "Zero-Trust Security & Geospatial",
    title: "CarbonScope: Zero-Trust Industrial Emission Tracking",
    shortDesc: "A zero-trust platform that signs industrial emission readings at the source and cross-checks them against service-provider and CPCB portal records to expose tampering and silent data loss.",
    fullDesc: "CarbonScope is a zero-trust system for India's industrial emission monitoring. Today, readings from 4,433 mandated industries pass through several parties, so values can be altered or silently dropped without a trace. CarbonScope signs each raw sensor reading at the source (SHA-256 hash and Ed25519 signature), cross-checks it against the service provider's data and the CPCB portal record, enforces CPCB rules such as the 85% data availability and 72-hour dropout limits as code, and shows everything on a public 3D map with a Proof of Integrity badge on every reading.",
    stack: ["Python", "FastAPI", "PostgreSQL (Supabase)", "TimescaleDB", "PostGIS", "Redis", "Next.js", "Deck.gl", "SHA-256 / Ed25519"],
    metrics: {
      "primary": "4,433",
      "label": "Industries in scope (CPCB OCEMS)",
      "subMetrics": [
        {
          "value": "17",
          "label": "Red Category verticals"
        }
      ]
    },
    highlightTitle: "Security Approach",
    highlightText: "Never trust, always verify: any change to a reading after capture breaks its signature, so tampering by the industry, the service provider or the portal can be detected.",
    status: "In Progress",
    charts: [
      {
        "title": "Monthly data availability vs 85% CPCB threshold",
        "type": "line",
        "labels": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun"
        ],
        "series": [
          {
            "name": "Availability %",
            "values": [
              91,
              89,
              86,
              93,
              90,
              94
            ]
          },
          {
            "name": "CPCB threshold",
            "values": [
              85,
              85,
              85,
              85,
              85,
              85
            ]
          }
        ],
        "unit": "%"
      },
      {
        "title": "Hidden correction factor: actual vs reported PM (mg/Nm³)",
        "type": "bar",
        "labels": [
          "Actual reading",
          "Reported to CPCB",
          "Limit"
        ],
        "series": [
          {
            "name": "PM",
            "values": [
              145.3,
              90.1,
              100
            ]
          }
        ],
        "unit": "mg/Nm³",
        "tag": "Spec scenario"
      }
    ],
    colSpan: "md"
  },
  {
    id: "rail-setu",
    number: "02",
    category: "Systems",
    categoryLabel: "Smart India Hackathon 2026",
    title: "RailSetu: Dynamic ETA Prediction for Coaching Trains",
    shortDesc: "Explainable, self-correcting train ETA system that gives a delay range, explains why a train is late and flags knock-on delays. Built for Smart India Hackathon 2026.",
    fullDesc: "RailSetu was built for Smart India Hackathon 2026 (Problem Statement 26028, Transportation & Logistics) by a 6-member team, where I am the team lead and architect of the prediction and delay-graph engine. Instead of a single guess, it gives passengers a range-based ETA, explains in plain language why a train is late, flags delays that spread between neighbouring track sections, and tightens its estimate as the train gets closer. A passenger app and a staff dashboard run on a FastAPI and PostgreSQL/PostGIS backend with Redis, WebSocket and push notifications. Where live railway data is not public, a transparent, swappable simulator is used. A live mobile-first prototype is available.",
    stack: ["Python", "FastAPI", "LightGBM", "PostgreSQL + PostGIS", "Redis", "WebSocket", "React"],
    githubUrl: "https://github.com/payalmishra1809/TRAIN_ETA_SYSTEM",
    liveUrl: "https://train-eta-system.vercel.app/",
    metrics: {
      "primary": "≤4.2 min",
      "label": "Target error (vs ~11.8 min NTES baseline)",
      "subMetrics": [
        {
          "value": "6",
          "label": "Team members"
        }
      ]
    },
    highlightTitle: "Why It Matters",
    highlightText: "A few minutes of removed uncertainty per passenger adds up across a network that carries billions of passengers a year.",
    status: "In Progress",
    charts: [
      {
        "title": "Average ETA error: baseline vs RailSetu target",
        "type": "bar",
        "labels": [
          "NTES baseline",
          "RailSetu target"
        ],
        "series": [
          {
            "name": "Minutes",
            "values": [
              11.8,
              4.2
            ]
          }
        ],
        "unit": "Min",
        "tag": "Target"
      },
      {
        "title": "Predicted vs actual delay, in minutes",
        "type": "line",
        "labels": [
          "T1",
          "T2",
          "T3",
          "T4",
          "T5",
          "T6",
          "T7",
          "T8"
        ],
        "series": [
          {
            "name": "Predicted",
            "values": [
              12,
              5,
              18,
              9,
              25,
              7,
              14,
              30
            ]
          },
          {
            "name": "Actual",
            "values": [
              10,
              6,
              20,
              8,
              27,
              5,
              15,
              28
            ]
          }
        ],
        "unit": "Min"
      }
    ],
    colSpan: "md"
  },
  {
    id: "ecommerce-dashboard",
    number: "03",
    category: "Analytics",
    categoryLabel: "Data Analysis & BI",
    title: "Interactive E-Commerce Sales & Customer Insights Dashboard",
    shortDesc: "Streamlit dashboard on a 10,000+ record sales dataset showing growth, top products and order value, powered by SQL.",
    fullDesc: "An interactive Streamlit dashboard built on a 10,000+ record e-commerce sales dataset. SQL window functions and aggregations will surface monthly sales growth, top products by category and order value distribution, with the dashboard hosted publicly.",
    stack: ["Python (Pandas)", "Streamlit", "Power BI", "SQL"],
    metrics: {
      "primary": "10,000+",
      "label": "Target dataset size (records)"
    },
    highlightTitle: "Analytical Insight",
    highlightText: "SQL window functions and aggregation queries feed the dashboard so category and sales performance can be explored interactively.",
    status: "Planned",
    charts: [
      {
        "title": "Monthly revenue",
        "type": "line",
        "labels": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        "series": [
          {
            "name": "Revenue",
            "values": [
              42,
              45,
              51,
              48,
              55,
              60,
              58,
              63,
              67,
              72,
              80,
              92
            ]
          }
        ],
        "unit": "K"
      },
      {
        "title": "Sales by category",
        "type": "bar",
        "labels": [
          "Technology",
          "Furniture",
          "Office",
          "Clothing"
        ],
        "series": [
          {
            "name": "Sales",
            "values": [
              84,
              62,
              48,
              30
            ]
          }
        ],
        "unit": "K"
      }
    ],
    colSpan: "md"
  },
  {
    id: "data-quality-pipeline",
    number: "04",
    category: "Analytics",
    categoryLabel: "Python Scripting & Data Engineering",
    title: "Automated Data Quality & Cleaning Pipeline Script",
    shortDesc: "Reusable Python script that finds duplicates, handles missing values, checks ranges and outputs a cleaned CSV plus an HTML report.",
    fullDesc: "A reusable Python script that takes any raw CSV, detects duplicate records, flags or fills missing values, checks numerical ranges for anomalies, and outputs a cleaned CSV with an HTML summary report.",
    stack: ["Python", "Pandas", "SQLAlchemy"],
    highlightTitle: "Automation Highlight",
    highlightText: "Automated checks guarantee data integrity before reporting, replacing repetitive manual cleaning.",
    status: "Planned",
    charts: [
      {
        "title": "Issues found vs fixed per dataset",
        "type": "bar",
        "labels": [
          "Orders",
          "Customers",
          "Products",
          "Payments"
        ],
        "series": [
          {
            "name": "Found",
            "values": [
              120,
              85,
              40,
              65
            ]
          },
          {
            "name": "Fixed",
            "values": [
              118,
              85,
              38,
              64
            ]
          }
        ]
      },
      {
        "title": "Types of issues",
        "type": "donut",
        "labels": [
          "Duplicates",
          "Missing values",
          "Out of range"
        ],
        "series": [
          {
            "name": "Issues",
            "values": [
              40,
              35,
              25
            ]
          }
        ]
      }
    ],
    colSpan: "md"
  },
  {
    id: "shipment-tracking-api",
    number: "05",
    category: "Systems",
    categoryLabel: "REST API & Dashboard",
    title: "Shipment Tracking REST API & Dashboard",
    shortDesc: "A REST API and dashboard to create, update and track shipments, backed by a SQL database.",
    fullDesc: "A REST API and dashboard to create, update and track shipments, backed by a SQL database through SQLAlchemy. It builds on my experience analyzing cargo and shipment data at PSN Shipping Agency.",
    stack: ["Python", "SQL", "SQLAlchemy", "REST APIs", "Streamlit", "Git"],
    highlightTitle: "Engineering Highlight",
    highlightText: "One clean API handles shipment records, and a dashboard turns them into a live view of what is delivered, moving or delayed.",
    status: "Planned",
    charts: [
      {
        "title": "Shipments by status",
        "type": "donut",
        "labels": [
          "Delivered",
          "In transit",
          "Delayed"
        ],
        "series": [
          {
            "name": "Shipments",
            "values": [
              55,
              30,
              15
            ]
          }
        ]
      },
      {
        "title": "API requests by endpoint",
        "type": "bar",
        "labels": [
          "/shipments",
          "/track",
          "/status",
          "/reports"
        ],
        "series": [
          {
            "name": "Requests",
            "values": [
              420,
              310,
              180,
              90
            ]
          }
        ]
      }
    ],
    colSpan: "md"
  },
  {
    id: "travel-app-product-plan",
    number: "06",
    category: "Product",
    categoryLabel: "Product & Project Management",
    title: "Travel Itinerary App: End-to-End Product & Delivery Plan",
    shortDesc: "A complete product and delivery plan for a travel itinerary app: PRD, wireframes, success metrics, work breakdown and a 3-sprint Agile roadmap.",
    fullDesc: "A full product and project management case study for a travel itinerary app. It covers a product requirements document with user personas, Figma wireframes, success metrics (North Star, activation and guardrails), a work breakdown structure, a 3-sprint Agile roadmap with 15-20 cards, and a risk and stakeholder plan. It draws on my product design work for Andaman Dream Yatra.",
    stack: ["Notion", "Figma", "Jira", "GitHub Projects", "Trello", "Whimsical"],
    metrics: {
      "primary": "3 Sprints",
      "label": "Agile release plan",
      "subMetrics": [
        {
          "value": "15-20",
          "label": "Backlog cards"
        }
      ]
    },
    highlightTitle: "Delivery Highlight",
    highlightText: "Every step from idea to launch is planned: requirements, success metrics, sprints, risks and who needs to be kept informed.",
    status: "Planned",
    charts: [
      {
        "title": "Sprint burndown, story points left",
        "type": "line",
        "labels": [
          "Day 1",
          "Day 3",
          "Day 5",
          "Day 7",
          "Day 9",
          "Day 10"
        ],
        "series": [
          {
            "name": "Ideal",
            "values": [
              20,
              16,
              12,
              8,
              4,
              0
            ]
          },
          {
            "name": "Actual",
            "values": [
              20,
              18,
              13,
              10,
              5,
              1
            ]
          }
        ],
        "unit": "Pts"
      },
      {
        "title": "Story points per sprint",
        "type": "bar",
        "labels": [
          "Sprint 1",
          "Sprint 2",
          "Sprint 3"
        ],
        "series": [
          {
            "name": "Planned",
            "values": [
              18,
              20,
              22
            ]
          },
          {
            "name": "Completed",
            "values": [
              16,
              19,
              21
            ]
          }
        ],
        "unit": "Pts"
      },
      {
        "title": "Backlog by type",
        "type": "donut",
        "labels": [
          "Epics",
          "User stories",
          "Tasks"
        ],
        "series": [
          {
            "name": "Cards",
            "values": [
              3,
              12,
              5
            ]
          }
        ]
      }
    ],
    colSpan: "md"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "uptoskills",
    period: "Dec 2025 — Mar 2026",
    role: "Senior Lead Data Analyst",
    organization: "UpToSkills",
    badge: "Rapid 4-Month Promotion",
    description: "Promoted from Data Analyst Intern to Team Lead to Senior Lead Data Analyst within 4 months, managing cross-functional teams across concurrent data projects.",
    highlights: [
      "Aligned technical execution with project roadmaps across several data projects running at the same time.",
      "Defined team OKRs, ran sprint reviews and enforced code-quality standards, achieving 100% on-time delivery across all project tracks.",
      "Standardized Python-based EDA and preprocessing pipelines, adopted across a 15+ intern cohort, reducing analyst onboarding time."
    ]
  },
  {
    id: "andaman-dream-yatra",
    period: "Apr 2025 — Sep 2025",
    role: "Lead Product Designer & UX Strategist",
    organization: "Andaman Dream Yatra",
    description: "Led product design and UX strategy for a travel & tourism platform, from first client conversations to final sign-off.",
    highlights: [
      "Ran client consultations and audience demographic research, using Power BI dashboards to analyze user behavior across age groups and validate design directions.",
      "Authored Product Requirement Documents (PRDs), wireframes, feature specifications and visual design architectures built for public accessibility.",
      "Directed the final UI/UX implementation through to client sign-off."
    ]
  },
  {
    id: "dweep-movers",
    period: "Jul 2024 — Nov 2024",
    role: "Operations Manager",
    organization: "Dweep Packers & Movers",
    description: "Oversaw end-to-end operational workflows, resource coordination, account reconciliation and stakeholder communication to run internal processes efficiently.",
    highlights: [
      "Coordinated people and resources day to day and kept stakeholders informed across the business.",
      "Authored standardized operating procedures (SOPs) and documentation for internal bookkeeping, streamlining administrative workflows.",
      "Prepared clear records that supported executive decision-making."
    ]
  },
  {
    id: "psn-shipping",
    period: "Mar 2024 — Jun 2024",
    role: "Business Analyst",
    organization: "PSN Shipping Agency",
    description: "Bridged technical teams and executive management through detailed data reporting, presentations and process documentation.",
    highlights: [
      "Analyzed cargo and shipment datasets to pinpoint revenue leakage.",
      "Translated raw metrics into clear strategic insights and actionable management briefs.",
      "Facilitated alignment between departments through presentations and process documentation."
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
      name: "Python, SQL & Data Analysis",
      note: "Builds data workflows with Pandas and NumPy, and standardized Python EDA pipelines that were adopted across a 15+ intern cohort."
    },
    {
      name: "Data Visualization & BI",
      note: "Power BI, Tableau, Matplotlib and Seaborn for dashboards and reports, including Power BI audience analysis at Andaman Dream Yatra."
    },
    {
      name: "Backend, APIs & Databases",
      note: "Works with Python backends, REST APIs, PostgreSQL/PostGIS, Redis and WebSocket updates as part of the RailSetu team prototype."
    },
    {
      name: "Secure System Design",
      note: "Designing CarbonScope's zero-trust pipeline with SHA-256 hashing, Ed25519 signatures and an append-only hash chain."
    },
    {
      name: "Team Leadership under Pressure",
      note: "Progressed from intern to Senior Lead Data Analyst within 4 months, leading intern teams to 100% on-time delivery."
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
      note: "Writes PRDs and Agile roadmaps, and is building a full product delivery plan as a case study."
    }
  ],
  minus: [
    {
      name: "Machine Learning & AI Fundamentals",
      note: "Currently learning the foundations before applying them in projects."
    },
    {
      name: "Formal Product Management Training",
      note: "Building on hands-on PRD and Agile experience with structured product strategy and roadmapping practice."
    },
    {
      name: "Large-Scale Data Tools",
      note: "Scaling beyond single-machine Pandas toward larger data platforms and cloud-based processing."
    },
    {
      name: "Advanced Statistics",
      note: "Deepening causal inference and experiment design to separate correlation from causation in business data."
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
  { name: "Yale Introduction to Psychology" },
  { name: "Regression Analysis (Google)" },
  { name: "IoT Professional Training (BR Ambedkar Institute)", featured: true },
  { name: "Microsoft Office Specialist: Excel (MOS)", featured: true },
  { name: "NPTEL Design Thinking" },
  { name: "Cisco Introduction to Cybersecurity" },
  { name: "Accenture Web Analytics" },
  { name: "Google Fundamentals of Digital Marketing" },
  { name: "Full Stack Development" },
  { name: "Figma High-Fidelity Prototypes" },
  { name: "Tally Prime and GST Certification" },
  { name: "Google Linux and SQL" },
  { name: "Investment Risk Management" },
  { name: "Building Dynamic UI (Google)" },
  { name: "Python for Data Science (IBM)" },
  { name: "SQL for Data Science (Coursera)" },
  { name: "Data Visualization with Tableau" },
  { name: "Agile Project Management (Google)" },
  { name: "Foundations of Project Management" },
  { name: "Version Control with Git" }
];

export const TESTIMONIALS: Testimonial[] = [];
