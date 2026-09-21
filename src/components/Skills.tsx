import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Brain,
  Database,
  Wrench,
  Search,
  Sparkles,
  CheckCircle,
  Layers,
  BarChart3,
  Coffee,
  Cpu,
  Globe,
  Palette,
  HardDrive,
  GitBranch,
  Laptop
} from 'lucide-react';
import { SkillCategory, SkillItem } from '../types';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  // Filter skills based on selected category & search query
  const filteredCategories = categories
    .map((cat) => {
      const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
      const matchedSkills = cat.skills.filter(
        (skill) =>
          matchesCategory &&
          (skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.experience.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      return {
        ...cat,
        skills: matchedSkills
      };
    })
    .filter((cat) => cat.skills.length > 0);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Terminal className="w-4 h-4 text-[#00E5FF]" />;
      case 'ai-datascience':
        return <Brain className="w-4 h-4 text-[#8B5CF6]" />;
      case 'web-dev':
        return <Globe className="w-4 h-4 text-[#22D3EE]" />;
      case 'databases':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Code className="w-4 h-4 text-slate-300" />;
    }
  };

  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'python':
        return <Terminal className="w-4 h-4 text-[#00E5FF]" />;
      case 'java':
        return <Coffee className="w-4 h-4 text-amber-400" />;
      case 'c':
        return <Cpu className="w-4 h-4 text-slate-300" />;
      case 'machine learning':
      case 'deep learning':
        return <Brain className="w-4 h-4 text-[#8B5CF6]" />;
      case 'data analytics':
      case 'data visualization':
        return <BarChart3 className="w-4 h-4 text-[#22D3EE]" />;
      case 'postgresql':
      case 'mysql':
        return <HardDrive className="w-4 h-4 text-emerald-400" />;
      case 'git':
      case 'github':
        return <GitBranch className="w-4 h-4 text-orange-400" />;
      case 'vs code':
        return <Laptop className="w-4 h-4 text-sky-400" />;
      case 'html5':
      case 'css3 / tailwind':
        return <Palette className="w-4 h-4 text-pink-400" />;
      default:
        return <Layers className="w-4 h-4 text-[#00E5FF]" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Neon Spotlights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#00E5FF]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#8B5CF6]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Interactive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#22D3EE] to-[#8B5CF6]">
              Skill Matrices
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified technical competencies across programming, artificial intelligence, relational databases, and enterprise software tools.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-black font-semibold shadow-md shadow-[#00E5FF]/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              All Skills
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#00E5FF]/20 border border-[#00E5FF]/50 text-[#00E5FF] font-semibold'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g., Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-all"
            />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 space-y-5 hover:border-[#00E5FF]/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 backdrop-blur-xl group"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/5">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white">
                      {category.category}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {category.skills.length} core competencies
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills in Category */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all space-y-2 group/skill"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getSkillIcon(skill.name)}
                        <span className="font-semibold text-xs text-white group-hover/skill:text-[#00E5FF] transition-colors">
                          {skill.name}
                        </span>
                        {skill.isPopular && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                            Core
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Meter */}
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00E5FF] via-[#22D3EE] to-[#8B5CF6] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-400 font-mono line-clamp-1">
                      {skill.experience}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hovered Skill Detail Spotlight / Summary Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-white/[0.03] via-white/[0.01] to-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#8B5CF6] flex items-center justify-center font-bold text-black text-sm">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div>
              <p className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider">
                Applied Engineering Standards
              </p>
              <h4 className="text-sm sm:text-base font-display font-bold text-white">
                Strong Algorithmic Mastery in Python & Java with Scalable Data Architecture
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>See Skills in Action (Projects)</span>
              <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
