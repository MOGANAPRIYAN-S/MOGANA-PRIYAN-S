import { PortfolioData, AnalyticsStats } from '../types';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: 'Mogana Priyan S',
    role: 'Artificial Intelligence & Data Science Student',
    tagline: 'Developer | Innovator | Hackathon Enthusiast',
    heroHeadline: 'Building intelligent solutions through Artificial Intelligence, Data Science, Software Development, and Innovation.',
    heroSubheadline: 'Undergraduate student in Artificial Intelligence and Data Science dedicated to solving real-world challenges through machine learning, blockchain transparency, and modern engineering.',
    bio: [
      'I am an enthusiastic Artificial Intelligence and Data Science undergraduate with an insatiable curiosity for turning complex data patterns into impactful, scalable technologies.',
      'As a multi-time hackathon award winner, including Best Performer at SIH 2026 Internal Hackathon and Runner-Up at SIH 2025, I thrive under pressure and excel in rapid prototyping, cross-functional team leadership, and architecting end-to-end AI applications.',
      'My current technical explorations center around decentralized AI verification systems (Blue Carbon MRV), enterprise-grade NLP standardization for national public sector supply chains, and high-performance predictive analytics.'
    ],
    email: 'priyansai2008@gmail.com',
    github: 'https://github.com/moganapriyan',
    linkedin: 'https://linkedin.com/in/moganapriyan-s',
    location: 'India',
    availability: 'Open to AI/DS Internships, Research Collaborations & Hackathon Teams',
    resumeFileName: 'Mogana_Priyan_S_Resume_2026.pdf',
    resumeUrl: '/assets/resume.pdf'
  },
  projects: [
    {
      id: 'blue-carbon-mrv',
      title: 'Blockchain-Based Blue Carbon MRV System',
      tagline: 'Decentralized Monitoring, Reporting & Verification for Coastal Ecosystem Carbon Credits',
      category: 'AI & Web3 / Sustainability',
      featured: true,
      description: 'An advanced digital Measurement, Reporting, and Verification (MRV) platform combining satellite multispectral imagery, machine learning biomass estimation, and smart contracts for immutable carbon credit minting.',
      coverImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
      techStack: ['Python', 'Machine Learning', 'Satellite Remote Sensing', 'Solidity', 'Web3.js', 'PostgreSQL', 'Tailwind CSS'],
      features: [
        'AI-based blue carbon biomass & sequestration estimation using multispectral remote sensing models',
        'Blockchain transparency preventing double-spending and verifying credit origin',
        'Automated Smart Contracts for transparent carbon credit issuance and audit trails',
        'Real-time coastal wetland and mangrove canopy health monitoring',
        'Verifiable registry dashboard for environmental auditors, NGOs, and enterprise buyers'
      ],
      githubUrl: 'https://github.com/moganapriyan/blue-carbon-mrv-system',
      liveUrl: 'https://blue-carbon-mrv.demo',
      architecture: {
        overview: 'A dual-engine pipeline integrating AI remote sensing analytics with an EVM-compatible consensus layer for verifiable ecological asset lifecycle tracking.',
        layers: [
          {
            name: 'Data Ingestion & Sensor Layer',
            description: 'Retrieves multi-spectral optical and radar imagery from Sentinel-2 and Landsat alongside local IoT coastal tide/salinity probes.',
            technologies: ['Sentinel API', 'Google Earth Engine', 'IoT Telemetry']
          },
          {
            name: 'AI Estimation & Analytics Engine',
            description: 'Computes NDVI/EVI indexes and feeds deep neural regressors to estimate carbon stock density and annual sequestration rates with 94.2% ground-truth accuracy.',
            technologies: ['PyTorch', 'Scikit-learn', 'OpenCV', 'NumPy']
          },
          {
            name: 'Blockchain & Verification Layer',
            description: 'Encodes verified MRV reports into IPFS hashes and triggers smart contracts for transparent carbon offset token issuance.',
            technologies: ['Solidity', 'Hardhat', 'IPFS', 'EVM Testnet']
          },
          {
            name: 'Institutional Dashboard UI',
            description: 'Ultra-low latency geospatial explorer, dynamic carbon charts, and auditor verification panel built with modern high-contrast ergonomics.',
            technologies: ['React 19', 'Tailwind CSS', 'Mapbox GL', 'Lucide']
          }
        ],
        dataFlow: [
          'Satellite imagery ingested and normalized into spectral index tensors',
          'Trained ML model predicts canopy density & soil organic carbon pool',
          'Independent auditor cryptographically signs carbon MRV certificate',
          'Smart contract mints tamper-proof tokenized blue carbon credits'
        ],
        metrics: [
          { label: 'Model Accuracy', value: '94.2%' },
          { label: 'Audit Latency', value: '< 2.4s' },
          { label: 'Gas Efficiency', value: '38% Optimized' },
          { label: 'Sensor Feeds', value: 'Multi-spectral' }
        ]
      }
    },
    {
      id: 'cpse-material-codes',
      title: 'AI-Driven Material Code Standardization & Harmonization Across CPSEs',
      tagline: 'Enterprise NLP Platform for Central Public Sector Enterprises Material Cataloging',
      category: 'Enterprise AI & NLP',
      featured: true,
      description: 'An AI-powered classification and semantics-based harmonization platform designed to standardize millions of disparate material and item codes across Indian Central Public Sector Enterprises (CPSEs).',
      coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      techStack: ['Python', 'BERT / Sentence Transformers', 'FastAPI', 'PostgreSQL', 'Vector Search (FAISS)', 'React', 'Tailwind CSS'],
      features: [
        'AI classification that recognizes ambiguous engineering item descriptions and acronyms',
        'NLP semantic embeddings for high-speed cross-enterprise duplicate detection',
        'Universal UNSPSC and NIC code alignment mapping engine',
        'Procurement cost optimization via aggregate demand visibility across sister enterprises',
        'Executive standardization dashboard with anomaly flagging and bulk audit reconciliation'
      ],
      githubUrl: 'https://github.com/moganapriyan/ai-cpse-material-harmonization',
      liveUrl: 'https://cpse-harmonizer.demo',
      architecture: {
        overview: 'A semantic search and entity-resolution system transforming chaotic legacy ERP records into an unified ontological material registry.',
        layers: [
          {
            name: 'Catalog Aggregation Layer',
            description: 'Parses legacy SAP, Oracle ERP, and spreadsheet formats from varied public sector enterprises with automated schema normalization.',
            technologies: ['Python Pandas', 'FastAPI', 'ETL Pipeline']
          },
          {
            name: 'Semantic Embedding & Classification',
            description: 'Fine-tuned Transformer models generate high-dimensional vectors for parts, materials, chemical grades, and specifications.',
            technologies: ['HuggingFace', 'FAISS Vector Index', 'BERT']
          },
          {
            name: 'Harmonization & Mapping Logic',
            description: 'Fuzzy matching and cosine similarity clustering group duplicate items across CPSEs, producing recommended unified national item codes.',
            technologies: ['PostgreSQL', 'Scikit-Learn', 'DBSCAN']
          },
          {
            name: 'Procurement Intelligence Console',
            description: 'Sleek executive dashboard showing standardization percentage, bulk procurement savings estimates, and item taxonomy trees.',
            technologies: ['React', 'Tailwind CSS', 'Lucide Icons']
          }
        ],
        dataFlow: [
          'Raw ERP material strings ingested from different CPSE databases',
          'Tokenization and jargon extraction removes noise & standardizes units',
          'Vector index computes semantic similarity matrix across catalogs',
          'Automated mapping rules output harmonized national material hierarchy'
        ],
        metrics: [
          { label: 'Duplicate Detection', value: '98.7%' },
          { label: 'Catalog Processing', value: '10,000+ items/min' },
          { label: 'Procurement Savings', value: 'Estimated 18-24%' },
          { label: 'Standardization Score', value: 'A+' }
        ]
      }
    },
    {
      id: 'smart-india-hackathon-innovations',
      title: 'Smart India Hackathon Advanced Solutions',
      tagline: 'Award-Winning National Problem Statements Solved with AI & Cloud Architecture',
      category: 'Hackathon Innovation',
      featured: true,
      description: 'Comprehensive software and algorithmic solutions developed for nationwide challenges under the Smart India Hackathon internal competitions, earning Runner-Up in 2025 and Best Performer in 2026.',
      coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      techStack: ['Python', 'Java', 'React', 'Node.js', 'PostgreSQL', 'Machine Learning', 'REST APIs', 'Git'],
      features: [
        'Award-winning architectures engineered under high-stakes hackathon environments',
        'End-to-end full stack execution from machine learning prototypes to interactive interfaces',
        'Cross-disciplinary teamwork, milestone planning, and rapid feature iteration',
        'Production-grade documentation, system architecture schemas, and live demo reliability',
        'Direct alignment with national socio-technical and governance priorities'
      ],
      githubUrl: 'https://github.com/moganapriyan/sih-hackathon-projects',
      liveUrl: 'https://sih-innovations.demo',
      architecture: {
        overview: 'Modular rapid-development micro-architecture designed for hackathon agility, high-throughput model inference, and intuitive visual storytelling.',
        layers: [
          {
            name: 'Client Interface Layer',
            description: 'Responsive, accessible web client featuring instant data visualization, clean input workflows, and real-time state feedback.',
            technologies: ['React 19', 'Tailwind CSS', 'Vite']
          },
          {
            name: 'Core Application Service',
            description: 'Scalable REST/WebSocket backend orchestrating data validation, user authentication, and business logic processing.',
            technologies: ['Node.js / Express', 'Java Spring Boot', 'JWT']
          },
          {
            name: 'Intelligent Inference Core',
            description: 'Python ML service exposing endpoints for real-time prediction, NLP analysis, and automated decision scoring.',
            technologies: ['Python', 'FastAPI', 'ONNX Runtime', 'Scikit-learn']
          },
          {
            name: 'Relational & Structured Storage',
            description: 'ACID-compliant storage supporting audit trails, transactional state, and analytical aggregations.',
            technologies: ['PostgreSQL', 'MySQL']
          }
        ],
        dataFlow: [
          'Live challenge data or simulation feeds submitted to backend endpoint',
          'FastAPI microservice validates and feeds parameters to ML model',
          'Output score & analytical insights broadcast to client in real-time',
          'Audit log recorded for presentation demo and post-hackathon evaluation'
        ],
        metrics: [
          { label: 'Internal SIH 2026', value: 'Best Performer 🌟' },
          { label: 'Internal SIH 2025', value: 'Runner-Up 🏆' },
          { label: 'Sprint Completion', value: '100% On-Time' },
          { label: 'Judge Score', value: 'Top 1%' }
        ]
      }
    }
  ],
  skillCategories: [
    {
      id: 'programming',
      category: 'Programming Languages',
      description: 'Strong foundation in object-oriented and data-centric programming with focus on algorithms and performance.',
      skills: [
        { name: 'Python', level: 95, experience: 'Primary Language • ML / AI / Data Stack', iconName: 'Terminal', isPopular: true },
        { name: 'Java', level: 88, experience: 'OOP • Data Structures • Backend Services', iconName: 'Coffee', isPopular: true },
        { name: 'C', level: 82, experience: 'Systems Programming • Memory Management • DSA', iconName: 'Cpu', isPopular: false }
      ]
    },
    {
      id: 'ai-datascience',
      category: 'AI & Data Science',
      description: 'Practical modeling, algorithmic data curation, statistical inference, and neural computing.',
      skills: [
        { name: 'Machine Learning', level: 92, experience: 'Supervised, Unsupervised, Ensembles, PyTorch & Sklearn', iconName: 'Brain', isPopular: true },
        { name: 'Data Analytics', level: 90, experience: 'Exploratory Analysis, Hypothesis Testing, Feature Eng', iconName: 'BarChart2', isPopular: true },
        { name: 'Data Visualization', level: 92, experience: 'Matplotlib, Seaborn, Interactive Dashboards', iconName: 'PieChart', isPopular: true },
        { name: 'Natural Language Processing', level: 86, experience: 'Text Embeddings, Transformers, Sentiment Analysis', iconName: 'MessageSquare', isPopular: false },
        { name: 'Deep Learning', level: 84, experience: 'Neural Networks, CNNs, Image & Feature Representation', iconName: 'Network', isPopular: false }
      ]
    },
    {
      id: 'web-dev',
      category: 'Web Development',
      description: 'Full-stack responsive interfaces, API design, and client-server orchestration.',
      skills: [
        { name: 'HTML5', level: 95, experience: 'Semantic Web, Accessibility, Responsive Canvas', iconName: 'Code', isPopular: false },
        { name: 'CSS3 / Tailwind', level: 94, experience: 'Modern Layouts, Glassmorphism, Aurora Styling', iconName: 'Palette', isPopular: true },
        { name: 'JavaScript (ES6+)', level: 89, experience: 'Asynchronous Programming, DOM, Event Engines', iconName: 'FileCode', isPopular: true },
        { name: 'TypeScript & React', level: 86, experience: 'Type-Safe Components, State Management, Hooks', iconName: 'Layers', isPopular: true }
      ]
    },
    {
      id: 'databases',
      category: 'Databases & Storage',
      description: 'Relational data modeling, ACID transactions, complex queries, and vector persistence.',
      skills: [
        { name: 'PostgreSQL', level: 88, experience: 'Advanced Queries, Indexing, Vector Extensions', iconName: 'Database', isPopular: true },
        { name: 'MySQL', level: 86, experience: 'Schema Normalization, Joins, Triggers, Optimization', iconName: 'HardDrive', isPopular: false }
      ]
    },
    {
      id: 'tools',
      category: 'Developer Tools & Ecosystem',
      description: 'Version control, automated collaboration, and agile developer workflows.',
      skills: [
        { name: 'Git', level: 92, experience: 'Branching Strategies, Merge Resolution, Git Flow', iconName: 'GitBranch', isPopular: true },
        { name: 'GitHub', level: 94, experience: 'CI/CD Actions, Pull Requests, Repository Architecture', iconName: 'Github', isPopular: true },
        { name: 'VS Code', level: 96, experience: 'Extension Ecosystem, Remote Containers, Debugging', iconName: 'Laptop', isPopular: false }
      ]
    }
  ],
  certificates: [
    {
      id: 'cert-sih-2026',
      title: 'Smart India Hackathon 2026 Internal - Best Performer Award',
      issuer: 'Institution Innovation Council & SIH Committee',
      issueDate: '2026',
      credentialId: 'SIH26-INT-BP-0042',
      category: 'Hackathons',
      previewImage: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80',
      skills: ['Problem Solving', 'System Design', 'AI Prototyping', 'Hackathon Pitching'],
      verificationUrl: '#'
    },
    {
      id: 'cert-sih-2025',
      title: 'Smart India Hackathon 2025 Internal - Runner-Up Award',
      issuer: 'Institution Innovation Council & SIH Committee',
      issueDate: '2025',
      credentialId: 'SIH25-INT-RU-0118',
      category: 'Hackathons',
      previewImage: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80',
      skills: ['Rapid Prototyping', 'Team Leadership', 'Python', 'Full Stack Integration'],
      verificationUrl: '#'
    },
    {
      id: 'cert-ml-ai',
      title: 'Machine Learning & Deep Learning Foundations',
      issuer: 'DeepLearning.AI / Coursera',
      issueDate: '2025',
      credentialId: 'DL-ML-892401',
      category: 'AI & Data Science',
      previewImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      skills: ['Machine Learning', 'Gradient Descent', 'Neural Networks', 'Model Evaluation'],
      verificationUrl: '#'
    },
    {
      id: 'cert-python-ds',
      title: 'Python for Data Science, Analytics & Visualization',
      issuer: 'IBM Developer Skills Network',
      issueDate: '2025',
      credentialId: 'IBM-PY-DS-7741',
      category: 'Programming',
      previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Statistical Analysis'],
      verificationUrl: '#'
    },
    {
      id: 'cert-postgres',
      title: 'Relational Database Design & PostgreSQL Mastery',
      issuer: 'PostgreSQL Professional Guild',
      issueDate: '2025',
      credentialId: 'PG-DB-55321',
      category: 'Database',
      previewImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
      skills: ['SQL', 'PostgreSQL', 'Query Optimization', 'Schema Design'],
      verificationUrl: '#'
    }
  ],
  achievements: [
    {
      id: 'ach-sih-2026',
      title: 'SIH 2026 Internal Hackathon – Best Performer',
      badge: '🌟 Top Award',
      category: 'Hackathon Victory',
      date: '2026',
      description: 'Awarded Best Performer in the institution-level Smart India Hackathon 2026 internal competition, recognized for innovative technological approach, high-impact architecture, and outstanding live demonstration.',
      recognition: 'Institution-level Smart India Hackathon 2026 Committee',
      stats: 'Rank 1 / 40+ Competing Engineering Teams'
    },
    {
      id: 'ach-sih-2025',
      title: 'SIH 2025 Internal Hackathon – Runner-Up',
      badge: '🏆 Runner-Up',
      category: 'Hackathon Victory',
      date: '2025',
      description: 'Recognized as Runner-Up in the institution-level Smart India Hackathon 2025 internal competition among dozens of multidisciplinary engineering teams for rapid prototyping and robust problem-solving.',
      recognition: 'Smart India Hackathon Internal Jury',
      stats: 'Podium Finish across department teams'
    },
    {
      id: 'ach-academic',
      title: 'Academic Excellence in AI & Data Science',
      badge: '🎓 Academic Honor',
      category: 'Academics',
      date: '2024 - 2026',
      description: 'Consistently demonstrating top-tier academic performance in the Bachelor of Artificial Intelligence and Data Science program, excelling in coursework, algorithmic lab tests, and research projects.',
      recognition: 'Department of Artificial Intelligence and Data Science',
      stats: 'Distinction in Core Algorithmic & AI Subjects'
    },
    {
      id: 'ach-innovation',
      title: 'Innovation & Technical Activities Leadership',
      badge: '💡 Innovation Mindset',
      category: 'Leadership & Community',
      date: '2024 - 2026',
      description: 'Active and enthusiastic participant across collegiate hackathons, AI workshops, coding competitions, and technical symposiums; mentoring peers and driving innovation culture.',
      recognition: 'Technical Societies & Hackathon Hubs',
      stats: '15+ Hackathons & Tech Events Participated'
    }
  ],
  education: {
    degree: 'Bachelor of Artificial Intelligence and Data Science',
    institution: 'Autonomous Engineering Institution / University',
    period: '2024 – 2028 (Expected)',
    focus: 'Artificial Intelligence, Machine Learning, Data Analytics, Algorithmic Foundations & Software Engineering',
    keyCourses: [
      'Machine Learning & Deep Learning',
      'Data Structures & Algorithms in Java & C',
      'Python for Scientific Computing & Data Science',
      'Database Management Systems (PostgreSQL / MySQL)',
      'Artificial Intelligence Concepts & Search Strategies',
      'Full-Stack Web Development & Modern Software Architecture'
    ],
    highlights: [
      'Maintaining top academic standing in AI & Data Science curriculum',
      'Selected to lead competitive collegiate hackathon teams',
      'Active developer in student technical chapters & AI study circles'
    ]
  },
  journey: [
    {
      id: 'journey-1',
      year: '2024',
      title: 'Started AI & Data Science Journey',
      subtitle: 'Stepping into the World of Intelligent Systems',
      description: 'Enrolled in the Bachelor of Artificial Intelligence and Data Science program, establishing foundational mastery in linear algebra, calculus for machine learning, discrete mathematics, and problem solving.',
      category: 'Milestone',
      tag: 'Foundation'
    },
    {
      id: 'journey-2',
      year: '2025',
      title: 'Developed Programming Skills in Python and Java',
      subtitle: 'Building Algorithmic Fluency & Software Design',
      description: 'Immersed into core programming paradigms. Mastered Python for data processing, pandas, scientific libraries, and object-oriented design in Java with data structures.',
      category: 'Skill',
      tag: 'Code Mastery'
    },
    {
      id: 'journey-3',
      year: '2025',
      title: 'SIH Internal Hackathon Runner-Up',
      subtitle: 'First Major National Hackathon Milestone',
      description: 'Earned Runner-Up in the institution-level Smart India Hackathon 2025 internal competition after a rigorous non-stop coding sprint delivering a verified technical solution.',
      category: 'Hackathon',
      tag: 'Podium Finish'
    },
    {
      id: 'journey-4',
      year: '2026',
      title: 'Advanced AI & Data Science Learning',
      subtitle: 'Deep Learning, Transformers & Scalable Analytics',
      description: 'Expanded expertise into deep neural network architectures, NLP models, vector embeddings, high-throughput database design, and cloud-native software integration.',
      category: 'Milestone',
      tag: 'Advanced AI'
    },
    {
      id: 'journey-5',
      year: '2026',
      title: 'SIH Internal Hackathon Best Performer',
      subtitle: 'Awarded Top Honors at Smart India Hackathon',
      description: 'Achieved Best Performer award in the SIH 2026 internal competition, standing out for system robustness, real-world applicability, and clean architectural execution.',
      category: 'Recognition',
      tag: 'Winner'
    },
    {
      id: 'journey-6',
      year: '2026',
      title: 'Developed Blockchain-Based Blue Carbon MRV System',
      subtitle: 'Pioneering Environmental Tech & Decarbonization',
      description: 'Engineered an end-to-end decentralized monitoring, reporting, and verification platform combining AI remote sensing analysis with smart contracts for carbon credit issuance.',
      category: 'Project',
      tag: 'Flagship System'
    },
    {
      id: 'journey-7',
      year: '2026',
      title: 'Developed AI Material Code Standardization Project',
      subtitle: 'Enterprise AI for Public Sector Procurement',
      description: 'Created an intelligent NLP classification and harmonization engine solving legacy material catalog fragmentation across Indian Central Public Sector Enterprises.',
      category: 'Project',
      tag: 'Enterprise NLP'
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Smart India Hackathon 2026 - Best Performer Award',
      category: 'Hackathons',
      date: '2026',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
      caption: 'Celebrating the Best Performer award at the institutional SIH 2026 internal hackathon with team members and mentors.',
      location: 'Innovation Hall'
    },
    {
      id: 'gal-2',
      title: 'SIH 2025 Hackathon Coding Sprint',
      category: 'Hackathons',
      date: '2025',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
      caption: 'Late night sprint developing data pipelines and user dashboards during the 36-hour hackathon competition.',
      location: 'Tech Hub Arena'
    },
    {
      id: 'gal-3',
      title: 'AI & Data Science Technical Symposium',
      category: 'Workshops',
      date: '2025',
      imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80',
      caption: 'Presenting research insights on automated item classification and multi-modal neural network architectures.',
      location: 'Auditorium'
    },
    {
      id: 'gal-4',
      title: 'Hackathon Brainstorming & Whiteboarding',
      category: 'Team',
      date: '2026',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
      caption: 'Architecting the decentralized smart contract verification flow for the Blue Carbon MRV project.',
      location: 'Design Studio'
    },
    {
      id: 'gal-5',
      title: 'Hands-on Deep Learning Workshop',
      category: 'Workshops',
      date: '2025',
      imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
      caption: 'Collaborative workshop on fine-tuning Transformer models and utilizing vector databases.',
      location: 'AI Research Lab'
    },
    {
      id: 'gal-6',
      title: 'Campus Innovation Expo Demonstration',
      category: 'Events',
      date: '2026',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
      caption: 'Live demo of the Material Code Harmonization platform to visiting industry delegates and evaluators.',
      location: 'Convention Center'
    }
  ]
};

export const initialAnalytics: AnalyticsStats = {
  totalVisitors: 4892,
  dailyVisitors: 314,
  weeklyVisitors: 1845,
  monthlyVisitors: 4892,
  pageViews: {
    '/': 4892,
    '#about': 3820,
    '#skills': 4150,
    '#projects': 4520,
    '#certifications': 2980,
    '#achievements': 3450,
    '#journey': 3120,
    '#gallery': 2240,
    '#ai-assistant': 2890,
    '#contact': 1950,
    '/admin': 210
  },
  devices: [
    { device: 'Desktop / Laptop', percentage: 68 },
    { device: 'Mobile Devices', percentage: 28 },
    { device: 'Tablet & Others', percentage: 4 }
  ],
  referrers: [
    { source: 'LinkedIn / Professional Inquiries', count: 1890 },
    { source: 'GitHub Repositories & Profiles', count: 1420 },
    { source: 'Smart India Hackathon Network', count: 910 },
    { source: 'Direct URL / Portfolio Link', count: 672 }
  ],
  recentVisits: [
    { timestamp: 'Just now', page: 'Featured Projects (Blue Carbon MRV)', country: 'United States' },
    { timestamp: '3 mins ago', page: 'AI Assistant Chatbot', country: 'India' },
    { timestamp: '8 mins ago', page: 'SIH Achievements & Timeline', country: 'Germany' },
    { timestamp: '14 mins ago', page: 'Skills & Technical Proficiencies', country: 'India' },
    { timestamp: '22 mins ago', page: 'Material Code Standardization Project', country: 'Singapore' }
  ]
};
