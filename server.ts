import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { initialPortfolioData, initialAnalytics } from './src/data/initialData';

const PORT = 3000;
const app = express();

app.use(express.json({ limit: '10mb' }));

// In-memory / persistent data store
let portfolioStore = { ...initialPortfolioData };
let analyticsStore = { ...initialAnalytics };
let contactMessages: Array<{
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
}> = [
  {
    id: 'msg-1',
    name: 'Recruiter from Tech Innovation Lab',
    email: 'hr@techinnovations.io',
    subject: 'AI & Data Science Internship Opportunity',
    message: 'Hello Mogana Priyan, your SIH Best Performer recognition and Blue Carbon MRV project caught our attention. We would love to discuss a summer AI internship.',
    timestamp: '2 hours ago',
    status: 'new'
  },
  {
    id: 'msg-2',
    name: 'Research Fellow',
    email: 'research@sustainability-ai.org',
    subject: 'Collaboration on Blue Carbon MRV System',
    message: 'Impressive work on combining multispectral remote sensing with blockchain verification for carbon estimation. Interested in joint benchmarking.',
    timestamp: 'Yesterday',
    status: 'read'
  }
];

// Lazy Gemini client helper
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return geminiClient;
}

// Portfolio API Endpoints
app.get('/api/portfolio', (req, res) => {
  res.json({
    success: true,
    data: portfolioStore
  });
});

app.post('/api/portfolio/update', (req, res) => {
  try {
    const { section, data } = req.body;
    if (section && data) {
      // @ts-ignore
      portfolioStore[section] = data;
      res.json({ success: true, message: `Updated section: ${section}` });
    } else {
      res.status(400).json({ success: false, error: 'Missing section or data' });
    }
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Analytics Endpoints
app.get('/api/analytics', (req, res) => {
  res.json({
    success: true,
    data: analyticsStore
  });
});

app.post('/api/analytics/visit', (req, res) => {
  const { path: pagePath } = req.body;
  analyticsStore.totalVisitors += 1;
  analyticsStore.dailyVisitors += 1;
  if (pagePath) {
    analyticsStore.pageViews[pagePath] = (analyticsStore.pageViews[pagePath] || 0) + 1;
  }
  res.json({ success: true, total: analyticsStore.totalVisitors });
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
      return;
    }
    const newMessage = {
      id: `msg-${Date.now()}`,
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      timestamp: 'Just now',
      status: 'new' as const
    };
    contactMessages.unshift(newMessage);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/contact/messages', (req, res) => {
  res.json({ success: true, data: contactMessages });
});

app.post('/api/contact/messages/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const target = contactMessages.find((m) => m.id === id);
  if (target && status) {
    target.status = status;
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'Message not found' });
  }
});

// Admin Auth
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Demo admin credentials for reviewers and recruiters
  if (
    (email === 'priyansai2008@gmail.com' || email === 'admin@moganapriyan.dev' || email === 'admin') &&
    (password === 'admin' || password === 'password123' || password === 'admin123')
  ) {
    res.json({
      success: true,
      token: 'jwt-auth-admin-session-token-' + Date.now(),
      user: {
        name: 'Mogana Priyan S',
        email: email,
        role: 'Administrator & Portfolio Owner'
      }
    });
  } else {
    res.status(401).json({
      success: false,
      error: 'Invalid email or password. Use demo credentials: admin@moganapriyan.dev / password123'
    });
  }
});

// AI Assistant Chatbot Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    const ai = getGeminiClient();

    // Prepare system prompt with comprehensive context about Mogana Priyan S
    const systemPrompt = `You are the personal AI Assistant representing MOGANA PRIYAN S on his personal portfolio website.
Here is complete factual knowledge about Mogana Priyan S:
- Full Name: Mogana Priyan S
- Degree: Bachelor of Artificial Intelligence and Data Science (Student)
- Titles: AI & Data Science Student, Developer, Innovator, Hackathon Enthusiast
- Email: priyansai2008@gmail.com
- GitHub: https://github.com/moganapriyan
- LinkedIn: https://linkedin.com/in/moganapriyan-s
- Key Achievements:
  * SIH 2026 Internal Hackathon - Best Performer (Awarded Best Performer in institution-level Smart India Hackathon 2026)
  * SIH 2025 Internal Hackathon - Runner-Up (institution-level)
  * Academic Excellence in Artificial Intelligence and Data Science
  * Active participant in 15+ hackathons, coding events, and workshops
- Flagship Projects:
  1. Blockchain-Based Blue Carbon MRV System: Decentralized monitoring, reporting & verification for coastal mangrove carbon credits using AI remote sensing estimation and smart contracts.
  2. AI-Driven Material Code Standardization & Harmonization Across CPSEs: Enterprise NLP platform standardizing material codes across Indian Central Public Sector Enterprises using Transformers and FAISS vector search.
  3. Smart India Hackathon Advanced Solutions: Award-winning hackathon engineering architectures and rapid AI deployments.
- Core Technical Skills:
  * Programming: Python (primary), Java, C
  * Web: HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, Node.js
  * AI & Data Science: Machine Learning, Data Analytics, Data Visualization, NLP, Deep Learning, PyTorch, Scikit-learn
  * Database: MySQL, PostgreSQL
  * Tools: Git, GitHub, VS Code
- Personality & Tone:
  You are professional, articulate, polite, enthusiastic, futuristic, and helpful. You speak as Mogana Priyan's representative to recruiters, judges, founders, and visitors. Keep responses concise, well-formatted, highlighting Mogana's strengths and readiness for software/AI engineering roles, internships, and research collaborations.`;

    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: `${systemPrompt}\n\nVisitor Question: "${message}"\nProvide a clear, engaging, and professional response:`,
          config: {
            temperature: 0.7
          }
        });

        const reply = response.text || generateFallbackResponse(message);
        res.json({ success: true, reply });
        return;
      } catch (geminiError: any) {
        console.error('Gemini API call failed, falling back to smart portfolio engine:', geminiError.message);
        // Fallback gracefully
        const reply = generateFallbackResponse(message);
        res.json({ success: true, reply });
        return;
      }
    } else {
      // Fallback engine if no API key is provided
      const reply = generateFallbackResponse(message);
      res.json({ success: true, reply });
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Intelligent fallback response generator matching user's exact portfolio queries
function generateFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('about') || q.includes('who is') || q.includes('tell me about')) {
    return `**Mogana Priyan S** is an Artificial Intelligence and Data Science undergraduate, software developer, and dedicated hackathon innovator. 
He specializes in machine learning systems, data analytics, and decentralized verification architectures. Recognized as **Best Performer at SIH 2026** and **Runner-Up at SIH 2025**, he thrives on building scalable, real-world solutions that combine algorithmic depth with practical utility.`;
  }

  if (q.includes('skill') || q.includes('tech stack') || q.includes('language') || q.includes('python') || q.includes('java')) {
    return `Here are **Mogana Priyan's** primary skills across domains:
• **Programming**: Python (Primary, ML/AI), Java (OOP, DSA), C (Systems/Memory)
• **AI & Data Science**: Machine Learning, Data Analytics, Data Visualization, Deep Learning, Natural Language Processing
• **Web Development**: HTML5, CSS3, JavaScript, React 19, TypeScript, Tailwind CSS, Node.js
• **Databases**: PostgreSQL, MySQL
• **Tools**: Git, GitHub, VS Code`;
  }

  if (q.includes('project') || q.includes('work') || q.includes('blue carbon') || q.includes('material')) {
    return `Mogana Priyan has engineered several standout projects:
1. **Blockchain-Based Blue Carbon MRV System**: Combines satellite multispectral imagery, AI biomass estimation, and smart contracts for immutable coastal carbon credit monitoring & verification.
2. **AI-Driven Material Code Standardization Across CPSEs**: Enterprise NLP platform harmonizing item codes across Indian Central Public Sector Enterprises using Transformers and vector search.
3. **Smart India Hackathon Innovations**: Award-winning hackathon solutions designed for national governance and operational challenges.
Explore the **Featured Projects** section above to view interactive system architecture diagrams and details!`;
  }

  if (q.includes('achievement') || q.includes('award') || q.includes('sih') || q.includes('hackathon')) {
    return `Key achievements include:
🏆 **SIH 2026 Internal Hackathon – Best Performer**: Awarded the top distinction in the institution-level Smart India Hackathon 2026 internal competition.
🌟 **SIH 2025 Internal Hackathon – Runner-Up**: Recognized as Runner-Up in SIH 2025 internal round.
🎓 **Academic Excellence**: Consistent top-tier distinction in AI & Data Science coursework.
💡 **Technical Leadership**: Active contributor in 15+ hackathons, coding contests, and research workshops.`;
  }

  if (q.includes('certificate') || q.includes('certification') || q.includes('credential')) {
    return `Mogana Priyan holds verified credentials including:
• **Smart India Hackathon 2026 Internal - Best Performer Award**
• **Smart India Hackathon 2025 Internal - Runner-Up Award**
• **Machine Learning & Deep Learning Foundations** (DeepLearning.AI)
• **Python for Data Science, Analytics & Visualization** (IBM)
• **Relational Database Design & PostgreSQL Mastery**
You can search, filter, and preview certificates in the **Certifications Gallery**!`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('linkedin')) {
    return `You can reach **Mogana Priyan S** directly via:
📧 **Email**: priyansai2008@gmail.com
💼 **LinkedIn**: linkedin.com/in/moganapriyan-s
🐙 **GitHub**: github.com/moganapriyan
He is currently open to **AI/Data Science internships, software engineering roles, and hackathon collaborations**!`;
  }

  if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('study')) {
    return `Mogana Priyan is pursuing a **Bachelor of Artificial Intelligence and Data Science** (2024–2028), focusing on machine learning, data structures & algorithms, statistical modeling, and full-stack software development.`;
  }

  return `Thanks for asking! **Mogana Priyan S** is an Artificial Intelligence & Data Science student, SIH 2026 Best Performer, and builder of intelligent software systems. You can ask me about his **skills, projects, hackathon achievements, certifications, or contact details**!`;
}

// SEO static endpoints: robots.txt and sitemap.xml
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Sitemap: https://moganapriyan.dev/sitemap.xml
`);
});

app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://moganapriyan.dev/</loc>
    <lastmod>2026-09-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://moganapriyan.dev/#projects</loc>
    <lastmod>2026-09-21</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://moganapriyan.dev/#achievements</loc>
    <lastmod>2026-09-21</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>`);
});

// Vite middleware & Static serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Neon Aurora Elite Portfolio server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
