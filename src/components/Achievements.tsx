import React from 'react';
import {
  Trophy,
  Award,
  Sparkles,
  GraduationCap,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  Star
} from 'lucide-react';
import { AchievementItem } from '../types';

interface AchievementsProps {
  achievements: AchievementItem[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const getBadgeIcon = (id: string) => {
    switch (id) {
      case 'ach-sih-2026':
        return <Star className="w-5 h-5 text-amber-300" />;
      case 'ach-sih-2025':
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 'ach-academic':
        return <GraduationCap className="w-5 h-5 text-[#00E5FF]" />;
      default:
        return <Lightbulb className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Aurora Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00E5FF]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // MERIT & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Animated Achievement{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">
              Timeline
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Proven podium finishes at Smart India Hackathon internal competitions and distinguished academic milestones.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#00E5FF] via-[#8B5CF6] to-transparent opacity-30" />

          <div className="space-y-12">
            {achievements.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 group`}
                >
                  {/* Central Timeline Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#050505] border-2 border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.4)] z-10 group-hover:scale-110 group-hover:border-[#8B5CF6] transition-all duration-300">
                    {getBadgeIcon(item.id)}
                  </div>

                  {/* Empty Spacer Column for Desktop alternating */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Box */}
                  <div className="pl-12 sm:pl-0 sm:w-1/2">
                    <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-7 space-y-4 hover:border-[#00E5FF]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 backdrop-blur-xl group-hover:-translate-y-1">
                      {/* Top Bar with Date & Badge */}
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-[#8B5CF6] font-semibold">
                          {item.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-display font-extrabold text-white group-hover:text-[#00E5FF] transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Recognition Body & Stats */}
                      <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
                        <span>Recognized by: <strong className="text-slate-200">{item.recognition}</strong></span>
                        {item.stats && (
                          <span className="text-[#00E5FF] font-semibold bg-white/5 px-2 py-0.5 rounded">
                            {item.stats}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
