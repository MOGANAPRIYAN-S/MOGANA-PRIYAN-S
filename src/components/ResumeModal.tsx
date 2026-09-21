import React from 'react';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { ProfileInfo, EducationItem, ProjectItem, AchievementItem } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  education: EducationItem;
  projects: ProjectItem[];
  achievements: AchievementItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  education,
  projects,
  achievements
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#090C15] border border-[#00E5FF]/40 shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#0c101c] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-white">
                Curriculum Vitae — Mogana Priyan S
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Official 2026 Edition • AI & Data Science Specialist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Viewport */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#05070c] space-y-8 print:p-0 print:bg-white print:text-black">
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-black text-white print:text-black tracking-tight">
                  MOGANA PRIYAN S
                </h1>
                <p className="text-sm font-mono text-[#00E5FF] print:text-slate-700 font-semibold mt-1">
                  Artificial Intelligence & Data Science Undergraduate
                </p>
                <p className="text-xs text-slate-400 print:text-slate-600">
                  Developer | Innovator | Hackathon Enthusiast
                </p>
              </div>

              <div className="space-y-1 text-xs font-mono text-slate-300 print:text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#00E5FF] print:text-black" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-[#00E5FF] print:text-black" />
                  <span>linkedin.com/in/moganapriyan-s</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-[#00E5FF] print:text-black" />
                  <span>github.com/moganapriyan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] print:text-black font-bold">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              Highly motivated Artificial Intelligence and Data Science undergraduate and competitive hackathon finalist (SIH 2026 Best Performer & SIH 2025 Runner-Up). Experienced in architecting decentralized carbon MRV solutions, transformer-based NLP cataloging, and high-performance algorithms in Python and Java. Dedicated to engineering scalable, high-impact systems for enterprise and environmental intelligence.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] print:text-black font-bold">
              EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10 print:bg-transparent">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-white print:text-black">
                  {education.degree}
                </h3>
                <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                  {education.period}
                </span>
              </div>
              <p className="text-xs text-[#8B5CF6] print:text-slate-700 font-mono">
                {education.institution}
              </p>
              <p className="text-xs text-slate-300 print:text-slate-700 mt-2">
                <strong>Core Coursework:</strong> Machine Learning, Deep Neural Networks, Data Structures & Algorithms, Natural Language Processing, Relational Database Management Systems.
              </p>
            </div>
          </div>

          {/* Hackathon Awards & Recognitions */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] print:text-black font-bold">
              HONORS & HACKATHON RECOGNITIONS
            </h2>
            <div className="space-y-2.5">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10 print:bg-transparent flex items-start justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-xs sm:text-sm text-white print:text-black">
                      {ach.title}
                    </h3>
                    <p className="text-xs text-slate-400 print:text-slate-700">
                      {ach.description}
                    </p>
                    <p className="text-[11px] font-mono text-[#00E5FF] print:text-slate-800">
                      Recognized by: {ach.recognition}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#8B5CF6] print:text-black shrink-0">
                    {ach.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Technical Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] print:text-black font-bold">
              FLAGSHIP ENGINEERING PROJECTS
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10 print:bg-transparent space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-white print:text-black">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#00E5FF] print:text-slate-700">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 print:border print:border-black/20 text-slate-300 print:text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] print:text-black font-bold">
              TECHNICAL SKILLS MATRIX
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10">
                <strong className="text-white print:text-black block mb-1">
                  Programming Languages:
                </strong>
                <span className="text-slate-300 print:text-slate-700">
                  Python, Java, C, JavaScript, TypeScript, SQL
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10">
                <strong className="text-white print:text-black block mb-1">
                  AI & Data Science:
                </strong>
                <span className="text-slate-300 print:text-slate-700">
                  Machine Learning, Deep Learning, NLP, Data Analytics, PyTorch, Scikit-learn
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10">
                <strong className="text-white print:text-black block mb-1">
                  Databases & Cloud:
                </strong>
                <span className="text-slate-300 print:text-slate-700">
                  PostgreSQL, MySQL, Supabase, Cloud Storage, REST APIs
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10">
                <strong className="text-white print:text-black block mb-1">
                  Developer Tools & DevOps:
                </strong>
                <span className="text-slate-300 print:text-slate-700">
                  Git, GitHub, VS Code, Linux CLI, Docker, Vercel
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0a0d17] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Available for immediate opportunities • Verified Candidate
          </span>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-900 bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] hover:brightness-110 cursor-pointer shadow-md"
          >
            <Download className="w-4 h-4 text-slate-900" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
