import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  ShieldCheck,
  Zap,
  X,
  FileCode2,
  TrendingUp,
  Workflow
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeArchitectureProject, setActiveArchitectureProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Aurora Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00E5FF]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#8B5CF6]/12 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // FEATURED ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Flagship Innovations &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">
              Architectures
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world systems spanning decentralized environmental MRV, enterprise NLP catalog standardization, and award-winning Smart India Hackathon solutions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-3xl bg-gradient-to-b from-[#0b0e17] to-[#07090e] border border-white/10 overflow-hidden hover:border-[#00E5FF]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                {/* Visual Cover Preview - 5 Cols */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-video sm:aspect-4/3 border border-white/10 group-hover:border-[#00E5FF]/40 transition-colors">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#050505]/85 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium text-[#00E5FF]">
                    {project.category}
                  </div>

                  {/* Architecture Diagram Trigger Overlay */}
                  <button
                    onClick={() => setActiveArchitectureProject(project)}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#00E5FF]/20 hover:bg-[#00E5FF]/30 backdrop-blur-md border border-[#00E5FF]/40 text-xs font-semibold text-white transition-all shadow-lg cursor-pointer"
                  >
                    <Workflow className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>View Architecture</span>
                  </button>
                </div>

                {/* Content & Details - 7 Cols */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                      PROJECT 0{index + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-[#00E5FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#8B5CF6]">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Core Innovations & Features:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Technologies Utilized:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-[#00E5FF]/40 hover:text-white transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Controls */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveArchitectureProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] hover:brightness-110 shadow-md transition-all cursor-pointer"
                    >
                      <Workflow className="w-4 h-4 text-slate-900" />
                      <span>Explore System Architecture</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                    >
                      <Github className="w-4 h-4 text-[#00E5FF]" />
                      <span>Source Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                      >
                        <ExternalLink className="w-4 h-4 text-[#8B5CF6]" />
                        <span>Interactive Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Architecture Diagram Modal */}
      {activeArchitectureProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090C14] border border-[#00E5FF]/40 shadow-2xl p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                    SYSTEM ARCHITECTURE BLUEPRINT
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeArchitectureProject.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                  {activeArchitectureProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArchitectureProject(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 cursor-pointer"
                aria-label="Close Architecture Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview Summary */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Architecture Overview: </span>
              {activeArchitectureProject.architecture.overview}
            </div>

            {/* Performance Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activeArchitectureProject.architecture.metrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center space-y-1"
                >
                  <p className="text-[10px] font-mono uppercase text-slate-400">
                    {metric.label}
                  </p>
                  <p className="text-base font-display font-extrabold text-[#00E5FF]">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Multi-Layered Architecture Blueprint */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00E5FF]" />
                <span>Modular System Layers</span>
              </h4>

              <div className="space-y-3">
                {activeArchitectureProject.architecture.layers.map((layer, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#00E5FF]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] text-[10px] font-mono flex items-center justify-center font-bold">
                          {lIdx + 1}
                        </span>
                        <h5 className="font-bold text-xs sm:text-sm text-white">
                          {layer.name}
                        </h5>
                      </div>
                      <p className="text-xs text-slate-400 pl-7">
                        {layer.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pl-7 sm:pl-0">
                      {layer.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-[#00E5FF]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Data Flow Pipeline */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#8B5CF6]" />
                <span>Execution Dataflow Sequence</span>
              </h4>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                {activeArchitectureProject.architecture.dataFlow.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 text-xs text-slate-300">
                    <span className="font-mono text-[#8B5CF6] font-bold">
                      [STEP 0{sIdx + 1}]
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Designed & Architected by Mogana Priyan S
              </span>
              <button
                onClick={() => setActiveArchitectureProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
              >
                Close Diagram
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
