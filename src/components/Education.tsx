import React from 'react';
import {
  GraduationCap,
  Calendar,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  Library
} from 'lucide-react';
import { EducationItem } from '../types';

interface EducationProps {
  education: EducationItem;
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#00E5FF]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Education & Coursework{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">
              Timeline
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous undergraduate training in mathematical foundations, neural computing, and computer systems.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0b0f19] to-[#07090e] border border-white/10 p-6 sm:p-10 space-y-8 shadow-2xl backdrop-blur-xl hover:border-[#00E5FF]/30 transition-all duration-300">
            {/* Top Bar with Institution & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00E5FF] to-[#8B5CF6] flex items-center justify-center text-black font-extrabold text-lg shadow-md">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                    {education.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-mono">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF] w-fit">
                <Calendar className="w-3.5 h-3.5" />
                <span>{education.period}</span>
              </div>
            </div>

            {/* Core Focus & Academic Summary */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6]">
                Curricular Focus
              </span>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {education.focus}
              </p>
            </div>

            {/* Key Subjects Grid */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Key Coursework & Lab Disciplines</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {education.keyCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Department Honors & Contributions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {education.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.01] border border-white/5 text-xs text-slate-300"
                  >
                    ✦ {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
