import React, { useState } from 'react';
import {
  Sparkles,
  Milestone,
  CheckCircle,
  Calendar,
  Layers,
  Award,
  Code2,
  Brain,
  Rocket
} from 'lucide-react';
import { JourneyItem } from '../types';

interface JourneyProps {
  journey: JourneyItem[];
}

export const Journey: React.FC<JourneyProps> = ({ journey }) => {
  const [filter, setFilter] = useState<string>('All');
  const filters = ['All', 'Milestone', 'Skill', 'Hackathon', 'Recognition', 'Project'];

  const filteredJourney = journey.filter((item) =>
    filter === 'All' ? true : item.category === filter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return <Award className="w-4 h-4 text-yellow-400" />;
      case 'Recognition':
        return <Sparkles className="w-4 h-4 text-[#00E5FF]" />;
      case 'Project':
        return <Rocket className="w-4 h-4 text-[#8B5CF6]" />;
      case 'Skill':
        return <Code2 className="w-4 h-4 text-[#22D3EE]" />;
      default:
        return <Milestone className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="journey" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Aurora Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00E5FF]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 // EVOLUTION & TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            My Journey{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">
              (2024 – 2026)
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The chronological progression from fundamental algorithms to award-winning hackathon engineering and decentralized AI architectures.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                filter === f
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-black font-semibold shadow-md shadow-[#00E5FF]/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {f === 'All' ? 'All Milestones' : f}
            </button>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#00E5FF] via-[#8B5CF6] to-transparent opacity-30" />

          <div className="space-y-8">
            {filteredJourney.map((item, index) => (
              <div key={item.id} className="relative flex items-start gap-6 group">
                {/* Year Badge Node */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-[#0a0d14] border-2 border-white/10 group-hover:border-[#00E5FF] shadow-lg flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]">
                    <span className="font-display font-extrabold text-xs sm:text-sm text-white group-hover:text-[#00E5FF] transition-colors">
                      {item.year}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">
                      #{index + 1}
                    </span>
                  </div>
                </div>

                {/* Event Card */}
                <div className="flex-1 rounded-2xl bg-white/[0.02] border border-white/10 p-5 sm:p-6 space-y-3 hover:border-[#00E5FF]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 group-hover:-translate-y-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-[#00E5FF] border border-white/10">
                      {getCategoryIcon(item.category)}
                      <span>{item.tag}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-[#8B5CF6]">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
