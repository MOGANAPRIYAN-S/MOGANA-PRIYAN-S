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
import { SectionReveal } from './components/SectionReveal';
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
        <SectionReveal duration={0.8} yOffset={24}>
          <Hero
            profile={data.profile}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenAI={scrollToAI}
          />
        </SectionReveal>

        {/* 2. Professional Biography */}
        <SectionReveal yOffset={36}>
          <About profile={data.profile} />
        </SectionReveal>

        {/* 3. Skills Matrix */}
        <SectionReveal yOffset={36}>
          <Skills categories={data.skillCategories} />
        </SectionReveal>

        {/* 4. Flagship Projects & Architecture Blueprints */}
        <SectionReveal yOffset={36}>
          <Projects projects={data.projects} />
        </SectionReveal>

        {/* 5. Certifications & Credentials */}
        <SectionReveal yOffset={36}>
          <Certifications certificates={data.certificates} />
        </SectionReveal>

        {/* 6. SIH Honors & Achievements */}
        <SectionReveal yOffset={36}>
          <Achievements achievements={data.achievements} />
        </SectionReveal>

        {/* 7. Education Timeline */}
        <SectionReveal yOffset={36}>
          <Education education={data.education} />
        </SectionReveal>

        {/* 8. 2024-2026 Journey */}
        <SectionReveal yOffset={36}>
          <Journey journey={data.journey} />
        </SectionReveal>

        {/* 9. Event & Hackathon Photo Gallery */}
        <SectionReveal yOffset={36}>
          <Gallery gallery={data.gallery} />
        </SectionReveal>

        {/* 10. Conversational AI Assistant */}
        <SectionReveal yOffset={36}>
          <AIAssistant profile={data.profile} />
        </SectionReveal>

        {/* 11. Contact Form & Direct Inquiries */}
        <SectionReveal yOffset={36}>
          <Contact
            profile={data.profile}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </SectionReveal>
      </main>

      {/* Footer */}
      <SectionReveal yOffset={20} duration={0.6}>
        <Footer
          profile={data.profile}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </SectionReveal>

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

