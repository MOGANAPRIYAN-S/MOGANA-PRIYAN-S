import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sparkles,
  FileText,
  MessageSquare,
  Lock,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenAI: () => void;
  onOpenResume: () => void;
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAI,
  onOpenResume,
  onOpenAdmin,
  isAdminLoggedIn
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Journey', href: '#journey' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#8B5CF6] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#050505] rounded-[10px] flex items-center justify-center">
              <span className="font-display font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#22D3EE]">
                MP
              </span>
            </div>
            <div className="absolute -inset-1 rounded-xl bg-[#00E5FF]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-[#00E5FF] transition-colors">
                MOGANA PRIYAN S
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                AI & DS
              </span>
            </div>
            <p className="text-[11px] text-slate-400 tracking-wide font-mono hidden sm:block">
              Developer • Innovator • SIH Awardee
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Ask AI Pill Button */}
          <button
            id="nav-ask-ai-btn"
            onClick={onOpenAI}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#00E5FF] bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 border border-[#00E5FF]/30 transition-all shadow-[0_0_15px_rgba(0,229,255,0.15)] cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#00E5FF]" />
            <span>AI Assistant</span>
          </button>

          {/* Resume Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00E5FF]/90 to-[#8B5CF6]/90 hover:from-[#00E5FF] hover:to-[#8B5CF6] transition-all shadow-md cursor-pointer hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Admin Control */}
          <button
            id="nav-admin-btn"
            onClick={onOpenAdmin}
            title={isAdminLoggedIn ? 'Admin Panel Active' : 'Admin Login'}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              isAdminLoggedIn
                ? 'bg-[#8B5CF6]/20 border-[#8B5CF6]/50 text-[#8B5CF6]'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {isAdminLoggedIn ? <ShieldCheck className="w-4 h-4" /> : <Lock className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenAI}
            className="p-2 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30"
            aria-label="AI Assistant"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 hover:text-[#00E5FF] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/10"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isAdminLoggedIn ? 'Open Admin Dashboard' : 'Admin Login'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
