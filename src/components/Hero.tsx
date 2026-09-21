import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  FileText,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Terminal,
  Cpu,
  Brain,
  Code2,
  Database,
  Layers,
  Award,
  ChevronDown
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface HeroProps {
  profile: ProfileInfo;
  onOpenResume: () => void;
  onOpenAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume, onOpenAI }) => {
  // Typing effect phrases
  const phrases = [
    'AI & Data Science Student',
    'Developer | Innovator | Hackathon Enthusiast',
    'SIH 2026 Internal - Best Performer Awardee',
    'SIH 2025 Internal - Runner-Up Winner',
    'Architecting Blue Carbon MRV & Enterprise AI'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 35);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Aurora Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#00E5FF]/18 via-[#8B5CF6]/12 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 left-1/4 w-[400px] h-[400px] bg-[#00E5FF]/15 blur-[100px] pointer-events-none rounded-full animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#8B5CF6]/15 blur-[110px] pointer-events-none rounded-full animate-pulse-slow" />

      {/* Cyber Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy - 7 Cols */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-slate-200">
                Artificial Intelligence & Data Science Undergraduate
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30 hidden sm:inline-block">
                SIH Best Performer
              </span>
            </div>

            {/* Name Heading with Luxury Neon Treatment */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white">
                <span className="block text-slate-100">Mogana</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#22D3EE] to-[#8B5CF6]">
                  Priyan S
                </span>
              </h1>

              {/* Dynamic Typing Subtitle */}
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <p className="font-mono text-sm sm:text-base font-semibold text-[#00E5FF] flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-[#00E5FF]" />
                  <span>{displayText}</span>
                  <span className="w-2 h-4 bg-[#00E5FF] animate-pulse inline-block" />
                </p>
              </div>
            </div>

            {/* User Prompt Exact Hero Text */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-2 border-[#00E5FF]/40 pl-4 bg-gradient-to-r from-white/5 to-transparent py-1.5">
              Building intelligent solutions through{' '}
              <span className="text-white font-semibold">Artificial Intelligence</span>,{' '}
              <span className="text-white font-semibold">Data Science</span>,{' '}
              <span className="text-white font-semibold">Software Development</span>, and{' '}
              <span className="text-[#00E5FF] font-semibold">Innovation</span>.
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              {/* Resume Button */}
              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-900 bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] hover:brightness-110 shadow-lg shadow-[#00E5FF]/20 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-900 group-hover:scale-110 transition-transform" />
                <span>View & Download Resume</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Contact Button */}
              <a
                id="hero-contact-btn"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              >
                <Mail className="w-4 h-4 text-[#00E5FF]" />
                <span>Contact Mogana</span>
              </a>

              {/* AI Chatbot Launcher */}
              <button
                id="hero-ai-chat-btn"
                onClick={onOpenAI}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-[#8B5CF6] bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                <span>Ask Portfolio AI</span>
              </button>
            </div>

            {/* Social Connectivity Links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                Connect Directly:
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span className="font-mono">GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span className="font-mono">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Visual HUD & Interactive Profile Avatar - 5 Cols */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#00E5FF] via-[#8B5CF6] to-[#22D3EE] opacity-35 blur-xl group-hover:opacity-60 transition duration-1000 animate-pulse-slow" />

              {/* Main Bento Profile Card */}
              <div className="relative rounded-2xl bg-[#090B10] border border-white/10 p-6 shadow-2xl backdrop-blur-xl space-y-6">
                {/* Header with holographic status indicator */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#8B5CF6] p-[2px]">
                      <div className="w-full h-full bg-[#050505] rounded-[10px] flex items-center justify-center font-display font-extrabold text-lg text-white">
                        MP
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#00E5FF] border-2 border-[#090B10]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-white">Mogana Priyan S</h3>
                      <p className="text-xs text-slate-400 font-mono">B.Tech AI & Data Science</p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                    Online & Active
                  </span>
                </div>

                {/* Floating Technology HUD Badges */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Core Focus Areas</span>
                    <span className="text-[#00E5FF]">2024 – 2026</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#00E5FF]/30 transition-all flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF]">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Machine Learning</p>
                        <p className="text-[10px] text-slate-400">Deep Learning & NLP</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#8B5CF6]/30 transition-all flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Decentralized MRV</p>
                        <p className="text-[10px] text-slate-400">Smart Contracts & AI</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#22D3EE]/30 transition-all flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#22D3EE]/10 text-[#22D3EE]">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Full-Stack Dev</p>
                        <p className="text-[10px] text-slate-400">Python • Java • Web</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#00E5FF]/30 transition-all flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">SIH Winner</p>
                        <p className="text-[10px] text-slate-400">Best Performer 2026</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Achievement Card Banner */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF]/10 via-[#8B5CF6]/10 to-transparent border border-[#00E5FF]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏆</span>
                    <div>
                      <p className="text-xs font-bold text-white">SIH 2026 Best Performer</p>
                      <p className="text-[11px] text-slate-300">Awarded in Institution Internal Round</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#00E5FF] bg-black/40 px-2 py-1 rounded border border-[#00E5FF]/30">
                    RANK #1
                  </span>
                </div>

                {/* Quick stats footer */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-center text-xs">
                  <div>
                    <p className="font-display font-extrabold text-[#00E5FF] text-base">3+</p>
                    <p className="text-[10px] text-slate-400">Flagship Systems</p>
                  </div>
                  <div className="h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="font-display font-extrabold text-[#8B5CF6] text-base">15+</p>
                    <p className="text-[10px] text-slate-400">Hackathon Events</p>
                  </div>
                  <div className="h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="font-display font-extrabold text-[#22D3EE] text-base">94%+</p>
                    <p className="text-[10px] text-slate-400">Model Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="pt-16 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-[#00E5FF] transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest">
              Explore Portfolio
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#00E5FF]" />
          </a>
        </div>
      </div>
    </section>
  );
};
