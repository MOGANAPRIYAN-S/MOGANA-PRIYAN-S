import React from 'react';
import {
  Brain,
  Lightbulb,
  Trophy,
  Flame,
  GraduationCap,
  Sparkles,
  Compass,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface AboutProps {
  profile: ProfileInfo;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const pillars = [
    {
      title: 'AI & Data Science Student',
      description:
        'Pursuing an undergraduate degree focused on neural networks, statistical inference, data engineering, and modern algorithmic principles.',
      icon: GraduationCap,
      color: 'text-[#00E5FF]',
      border: 'hover:border-[#00E5FF]/40'
    },
    {
      title: 'Passion for Technology',
      description:
        'Driven by an intrinsic passion to explore cutting-edge technologies—from multi-spectral remote sensing for ecology to transformer NLP.',
      icon: Flame,
      color: 'text-[#8B5CF6]',
      border: 'hover:border-[#8B5CF6]/40'
    },
    {
      title: 'Continuous Learner',
      description:
        'Dedicated to expanding mastery every single day across data structures, system design, modern full-stack web, and vector architectures.',
      icon: Compass,
      color: 'text-[#22D3EE]',
      border: 'hover:border-[#22D3EE]/40'
    },
    {
      title: 'Problem Solver',
      description:
        'Approaches complex national-scale and enterprise challenges with a structured, first-principles algorithmic mindset.',
      icon: Brain,
      color: 'text-emerald-400',
      border: 'hover:border-emerald-400/40'
    },
    {
      title: 'Innovation Mindset',
      description:
        'Pioneering solutions that bridge disparate fields—combining satellite AI carbon MRV with decentralized blockchain transparency.',
      icon: Lightbulb,
      color: 'text-amber-400',
      border: 'hover:border-amber-400/40'
    },
    {
      title: 'Hackathon Participant & Winner',
      description:
        'Multi-time awardee including SIH 2026 Internal Best Performer and SIH 2025 Runner-Up with 15+ hackathons and rapid prototyping sprints.',
      icon: Trophy,
      color: 'text-yellow-400',
      border: 'hover:border-yellow-400/40'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00E5FF]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // PROFESSIONAL BIOGRAPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Architecting The Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">
              Intelligent Systems
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A developer, innovator, and AI & Data Science student dedicated to engineering software solutions that leave a lasting mark.
          </p>
        </div>

        {/* Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Biography Narrative - 7 cols */}
          <div className="lg:col-span-7 space-y-6 bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00E5FF]" />
              <span>About Mogana Priyan S</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {profile.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                <span>Dedicated Hackathon Competitor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                <span>Fast Full-Stack Prototyper</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22D3EE]" />
                <span>Open for Research & Industry Roles</span>
              </div>
            </div>
          </div>

          {/* Quick Info HUD Card - 5 cols */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0e121b] to-[#07090e] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00E5FF]">
                Core Identity Matrix
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30">
                VERIFIED PROFILE
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Full Name</span>
                <span className="font-semibold text-white font-mono">Mogana Priyan S</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Degree</span>
                <span className="font-semibold text-white text-right">B.Tech Artificial Intelligence & Data Science</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Location</span>
                <span className="font-semibold text-white">India (Available Globally)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Primary Languages</span>
                <span className="font-mono text-[#00E5FF]">Python, Java, C, JavaScript</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">SIH Honors</span>
                <span className="font-semibold text-amber-400">Best Performer (2026) • Runner-Up (2025)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Availability</span>
                <span className="font-mono text-emerald-400 text-right">Open for Internships & AI Projects</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-slate-400">Official Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-[#00E5FF] hover:underline"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Key Pillars from User Request */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              The Six Pillars of My Technical Philosophy
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              The core principles driving my work in Artificial Intelligence, software engineering, and collaborative hackathons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl bg-white/[0.02] border border-white/10 ${pillar.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50 group`}
                >
                  <div className={`p-3 w-fit rounded-xl bg-white/5 ${pillar.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-display font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
