import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/initialData';
import { PortfolioData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Journey } from './components/Journey';
import { Gallery } from './components/Gallery';
import { AIAssistant } from './components/AIAssistant';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AdminDashboard } from './components/AdminDashboard';
import { Sparkles, Bot, MessageSquare } from 'lucide-react';

export default function App() {
  const [data, setData] = useState<PortfolioData>(initialPortfolioData);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Fetch live portfolio data from server API on mount
  useEffect(() => {
    async function loadPortfolioData() {
      try {
        const response = await fetch('/api/portfolio');
        if (response.ok) {
          const remoteData = await response.json();
          if (remoteData && remoteData.profile) {
            setData(remoteData);
          }
        }
      } catch (err) {
        // Safe fallback to initialPortfolioData
      }
    }
    loadPortfolioData();
  }, []);

  const handleUpdateData = (updated: Partial<PortfolioData>) => {
    setData((prev) => ({
      ...prev,
      ...updated
    }));
  };

  const scrollToAI = () => {
    const aiSection = document.getElementById('ai-assistant');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F8FAFC] selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Navigation Header */}
      <Navbar
        onOpenAI={scrollToAI}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        isAdminLoggedIn={false}
      />

      {/* Main Content Sections */}
      <main className="relative">
        {/* 1. Hero Section */}
        <Hero
          profile={data.profile}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAI={scrollToAI}
        />

        {/* 2. Professional Biography */}
        <About profile={data.profile} />

        {/* 3. Skills Matrix */}
        <Skills categories={data.skillCategories} />

        {/* 4. Flagship Projects & Architecture Blueprints */}
        <Projects projects={data.projects} />

        {/* 5. Certifications & Credentials */}
        <Certifications certificates={data.certificates} />

        {/* 6. SIH Honors & Achievements */}
        <Achievements achievements={data.achievements} />

        {/* 7. Education Timeline */}
        <Education education={data.education} />

        {/* 8. 2024-2026 Journey */}
        <Journey journey={data.journey} />

        {/* 9. Event & Hackathon Photo Gallery */}
        <Gallery gallery={data.gallery} />

        {/* 10. Conversational AI Assistant */}
        <AIAssistant profile={data.profile} />

        {/* 11. Contact Form & Direct Inquiries */}
        <Contact
          profile={data.profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={data.profile}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Floating AI Interaction Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={scrollToAI}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-black font-bold text-xs shadow-xl shadow-[#00E5FF]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Ask Portfolio AI"
          aria-label="Ask Portfolio AI Assistant"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
          </span>
          <Bot className="w-4 h-4 text-black" />
          <span className="hidden sm:inline font-mono">Ask Portfolio AI</span>
        </button>
      </div>

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={data.profile}
        education={data.education}
        projects={data.projects}
        achievements={data.achievements}
      />

      {/* Admin Executive Dashboard Modal */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        data={data}
        onUpdateData={handleUpdateData}
      />
    </div>
  );
}

