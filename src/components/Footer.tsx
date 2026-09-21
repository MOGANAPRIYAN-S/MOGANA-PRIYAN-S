import React from 'react';
import {
  Sparkles,
  Lock,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Heart,
  Terminal,
  Shield
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface FooterProps {
  profile: ProfileInfo;
  onOpenAdmin: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenAdmin, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040609] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Aurora Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-gradient-to-t from-[#00E5FF]/10 via-[#8B5CF6]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Manifesto - 5 cols */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#8B5CF6] p-[1.5px]">
                <div className="w-full h-full bg-[#050505] rounded-[9px] flex items-center justify-center font-display font-extrabold text-sm text-white">
                  MP
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">Mogana Priyan S</h3>
                <p className="text-xs text-[#00E5FF] font-mono">AI & Data Science Student • Innovator</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Architecting state-of-the-art artificial intelligence models, decentralized environmental MRV frameworks, and full-stack software for modern enterprise challenges.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for AI Internships & Engineering Roles</span>
            </div>
          </div>

          {/* Quick Nav Links - 3 cols */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00E5FF]">
              Portfolio Sections
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  01 // Professional Biography
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  02 // Technical Arsenal
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  03 // Flagship Systems
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-white transition-colors">
                  04 // Credentials & Honors
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">
                  05 // SIH & Achievements
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  07 // 2024–2026 Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Admin - 4 cols */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00E5FF]">
              Direct Connectivity
            </h4>

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-colors cursor-pointer"
              >
                Resume PDF
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/10 text-[11px] font-mono text-slate-500 hover:text-slate-300 border border-white/5 hover:border-white/20 transition-all cursor-pointer"
              >
                <Lock className="w-3 h-3 text-[#00E5FF]" />
                <span>Admin Console (Executive Login)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Mogana Priyan S. Designed in Neon Aurora Elite.
          </div>

          <div className="flex items-center gap-4">
            <span>SIH 2026 Best Performer</span>
            <span>•</span>
            <span>SIH 2025 Runner-Up</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-[#00E5FF] transition-all cursor-pointer ml-2"
              title="Return to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
