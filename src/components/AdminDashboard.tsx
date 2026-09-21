import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Unlock,
  BarChart3,
  Layers,
  Award,
  FileText,
  Mail,
  Settings,
  Plus,
  Trash2,
  Edit3,
  CheckCircle,
  X,
  LogOut,
  Sparkles,
  Eye,
  RefreshCw,
  FolderKanban,
  Check,
  ChevronRight,
  TrendingUp,
  Users,
  Compass
} from 'lucide-react';
import {
  PortfolioData,
  AnalyticsStats,
  ProjectItem,
  CertificateItem,
  AchievementItem
} from '../types';
import { initialAnalytics } from '../data/initialData';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  stats?: AnalyticsStats;
  onUpdateData: (updated: Partial<PortfolioData>) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  data,
  stats = initialAnalytics,
  onUpdateData
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<
    'analytics' | 'projects' | 'certificates' | 'achievements' | 'messages' | 'settings'
  >('analytics');

  // Local state for editing projects
  const [projects, setProjects] = useState<ProjectItem[]>(data.projects);
  const [certificates, setCertificates] = useState<CertificateItem[]>(data.certificates);
  const [achievements, setAchievements] = useState<AchievementItem[]>(data.achievements);
  const [settings, setSettings] = useState(data.profile);

  // New item modal state
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState<Partial<ProjectItem>>({
    title: '',
    tagline: '',
    category: 'AI & Machine Learning',
    description: '',
    techStack: ['Python', 'PyTorch'],
    features: ['High precision neural modeling', 'Real-time inference'],
    githubUrl: 'https://github.com/moganapriyan',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    architecture: {
      overview: 'Modular microservice pipeline with vector database indexing.',
      layers: [
        {
          name: 'Core Engine Layer',
          description: 'Runs stateful neural inference and data transforms.',
          technologies: ['Python', 'FastAPI']
        }
      ],
      dataFlow: ['Client Request -> Ingress Gateway -> Inference Worker -> Result Cache'],
      metrics: [{ label: 'Inference Latency', value: '<45ms' }]
    }
  });

  const [savedSuccessNotice, setSavedSuccessNotice] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const result = await res.json();
      if (result.success) {
        setIsAuthenticated(true);
      } else {
        setAuthError(result.error || 'Invalid administrator key');
      }
    } catch {
      // In-memory fallback: admin / admin123
      if (password === 'admin123' || password === 'mogana2026') {
        setIsAuthenticated(true);
      } else {
        setAuthError('Incorrect passcode. Try "admin123" or "mogana2026".');
      }
    }
  };

  const handleSaveAll = () => {
    onUpdateData({
      projects,
      certificates,
      achievements,
      profile: settings
    });
    setSavedSuccessNotice(true);
    setTimeout(() => setSavedSuccessNotice(false), 2500);
  };

  const handleDeleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
  };

  const handleCreateProject = () => {
    if (!newProject.title) return;
    const created: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: newProject.title || 'Untitled Project',
      tagline: newProject.tagline || 'Intelligent System',
      category: newProject.category || 'AI & Data Science',
      featured: true,
      description: newProject.description || 'Innovative AI engineered solution.',
      techStack: newProject.techStack || ['Python'],
      features: newProject.features || ['High accuracy'],
      githubUrl: newProject.githubUrl || 'https://github.com/moganapriyan',
      liveUrl: newProject.liveUrl,
      coverImage:
        newProject.coverImage ||
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      architecture: newProject.architecture || {
        overview: 'System architecture data pipeline.',
        layers: [{ name: 'Core Layer', description: 'Execution engine', technologies: ['Python'] }],
        dataFlow: ['Step 1: Input ingestion', 'Step 2: Processing', 'Step 3: Response dispatch'],
        metrics: [{ label: 'Performance', value: 'Optimal' }]
      }
    };
    setProjects([created, ...projects]);
    setShowAddProject(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#090C15] border border-[#00E5FF]/40 shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0c101c] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#8B5CF6] text-black font-bold">
              <Shield className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-white flex items-center gap-2">
                <span>Executive Command Console</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                  {isAuthenticated ? 'AUTHORIZED SESSION' : 'SECURITY GATEWAY'}
                </span>
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Portfolio Content & Analytics Orchestration
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-mono transition-all cursor-pointer"
                title="Log Out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 cursor-pointer"
              aria-label="Close Admin Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {!isAuthenticated ? (
          /* Login Authentication Screen */
          <div className="flex-1 flex items-center justify-center p-8 bg-[#05070c]">
            <div className="max-w-md w-full rounded-2xl bg-white/[0.02] border border-white/10 p-8 space-y-6 shadow-2xl text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] flex items-center justify-center mx-auto">
                <Lock className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-display font-extrabold text-white">
                  Admin Passcode Verification
                </h4>
                <p className="text-xs text-slate-400">
                  Enter master security key to manage live portfolio contents, inspect inquiries, or modify architectures.
                </p>
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                  {authError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="password"
                  required
                  placeholder="Master Passcode (e.g., admin123 or mogana2026)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-all text-center"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-900 bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] hover:brightness-110 shadow-lg shadow-[#00E5FF]/20 transition-all cursor-pointer"
                >
                  Authenticate Console
                </button>
              </form>

              <div className="pt-2 text-[11px] font-mono text-slate-500">
                Hint: Standard development demo key is <code className="text-[#00E5FF]">admin123</code>
              </div>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard Tabs & Panels */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#05070c]">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-60 bg-[#080b13] border-r border-white/10 p-4 space-y-1 shrink-0 flex md:flex-col overflow-x-auto md:overflow-y-auto">
              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === 'analytics'
                    ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Analytics HUD</span>
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === 'projects'
                    ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <FolderKanban className="w-4 h-4" />
                <span>Projects ({projects.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('certificates')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === 'certificates'
                    ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Certificates ({certificates.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('achievements')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === 'achievements'
                    ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Achievements ({achievements.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('messages')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === 'messages'
                    ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Inquiries</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === 'settings'
                    ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Profile Settings</span>
              </button>

              <div className="pt-6 hidden md:block border-t border-white/5 mt-auto">
                <button
                  onClick={handleSaveAll}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] hover:brightness-110 shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Publish Updates</span>
                </button>
                {savedSuccessNotice && (
                  <p className="text-[11px] font-mono text-emerald-400 text-center mt-2">
                    ✓ Updated in state!
                  </p>
                )}
              </div>
            </div>

            {/* Main Tab Panel Display */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* TAB: Analytics HUD */}
              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-display font-extrabold text-white">
                        Live Portfolio Telemetry
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Real-time visitor interactions and engagement rates
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      LIVE TRACKING
                    </span>
                  </div>

                  {/* 4 Stat Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                      <p className="text-xs font-mono uppercase text-slate-400">Total Visitors</p>
                      <p className="text-2xl font-display font-black text-[#00E5FF]">
                        {stats.totalVisitors.toLocaleString()}
                      </p>
                      <p className="text-[10px] font-mono text-emerald-400">+18% this week</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                      <p className="text-xs font-mono uppercase text-slate-400">Weekly Visitors</p>
                      <p className="text-2xl font-display font-black text-[#8B5CF6]">
                        {stats.weeklyVisitors.toLocaleString()}
                      </p>
                      <p className="text-[10px] font-mono text-emerald-400">+24% high interest</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                      <p className="text-xs font-mono uppercase text-slate-400">Daily Visitors</p>
                      <p className="text-2xl font-display font-black text-[#22D3EE]">
                        {stats.dailyVisitors.toLocaleString()}
                      </p>
                      <p className="text-[10px] font-mono text-emerald-400">Active recruiter saves</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                      <p className="text-xs font-mono uppercase text-slate-400">Monthly Reach</p>
                      <p className="text-2xl font-display font-black text-amber-400">
                        {stats.monthlyVisitors.toLocaleString()}
                      </p>
                      <p className="text-[10px] font-mono text-emerald-400">100% response rate</p>
                    </div>
                  </div>

                  {/* Weekly Traffic Heatmap Representation */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                    <h5 className="font-display font-bold text-sm text-white">
                      Weekly Interaction Velocity
                    </h5>
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                        const heights = [45, 60, 85, 70, 95, 80, 90];
                        return (
                          <div key={day} className="space-y-2">
                            <div className="h-28 bg-white/5 rounded-xl flex items-end p-1.5 justify-center">
                              <div
                                className="w-full rounded-lg bg-gradient-to-t from-[#00E5FF] to-[#8B5CF6]"
                                style={{ height: `${heights[i]}%` }}
                              />
                            </div>
                            <span className="text-[11px] font-mono text-slate-400">{day}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: Projects Manager */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-display font-extrabold text-white">
                        Projects Manager
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Add, remove, or modify displayed engineering showcases
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAddProject(!showAddProject)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] hover:brightness-110 cursor-pointer shadow-md"
                    >
                      <Plus className="w-4 h-4 text-slate-900" />
                      <span>Add New Project</span>
                    </button>
                  </div>

                  {/* Add Project Form (if toggled) */}
                  {showAddProject && (
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-[#00E5FF]/30 space-y-4">
                      <h5 className="font-display font-bold text-sm text-white">
                        Create New Project Specification
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Project Title"
                          value={newProject.title}
                          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                          className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Tagline (e.g. AI MRV System)"
                          value={newProject.tagline}
                          onChange={(e) => setNewProject({ ...newProject, tagline: e.target.value })}
                          className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                        />
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Detailed Description"
                        value={newProject.description}
                        onChange={(e) =>
                          setNewProject({ ...newProject, description: e.target.value })
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setShowAddProject(false)}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleCreateProject}
                          className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-900 bg-[#00E5FF] hover:brightness-110"
                        >
                          Insert Project
                        </button>
                      </div>
                    </div>
                  )}

                  {/* List of existing projects */}
                  <div className="space-y-3">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <h5 className="font-bold text-sm text-white">{proj.title}</h5>
                          <p className="text-xs text-slate-400 font-mono">
                            Category: {proj.category} • Stack: {proj.techStack.join(', ')}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDeleteProject(proj.id)}
                            className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 transition-colors cursor-pointer"
                            title="Delete Project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: Certificates Manager */}
              {activeTab === 'certificates' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-extrabold text-white">
                    Accreditation & Certificate Registry
                  </h4>
                  <div className="space-y-3">
                    {certificates.map((cert) => (
                      <div
                        key={cert.id}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between gap-4"
                      >
                        <div>
                          <h5 className="font-bold text-sm text-white">{cert.title}</h5>
                          <p className="text-xs text-slate-400 font-mono">
                            Issued by {cert.issuer} ({cert.issueDate}) • ID: {cert.credentialId}
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: Achievements Manager */}
              {activeTab === 'achievements' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-extrabold text-white">
                    Honors & Podiums Registry
                  </h4>
                  <div className="space-y-3">
                    {achievements.map((ach) => (
                      <div
                        key={ach.id}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between gap-4"
                      >
                        <div>
                          <h5 className="font-bold text-sm text-white">{ach.title}</h5>
                          <p className="text-xs text-slate-400 font-mono">
                            {ach.date} • {ach.badge} • Recognized by: {ach.recognition}
                          </p>
                        </div>
                        <span className="text-xs font-mono text-[#00E5FF]">{ach.stats}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: Contact Messages Viewer */}
              {activeTab === 'messages' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-display font-extrabold text-white">
                        Inbound Contact Messages
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Submissions from recruiters, hackathon organizers, and collaborators
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-[#00E5FF]/20 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="text-white font-bold">Aditi Sharma (HR Tech Talent)</span>
                        <span className="text-[#00E5FF]">Today at 10:14 AM</span>
                      </div>
                      <p className="text-xs text-[#8B5CF6] font-mono">
                        Subject: AI/ML Engineering Internship Opportunity
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300">
                        "Hi Mogana, we were very impressed by your SIH Best Performer award and your Blue Carbon MRV architecture. Would love to discuss summer opportunities with our AI research group."
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="text-white font-bold">Karthik R. (Hackathon Lead)</span>
                        <span className="text-slate-500">Yesterday</span>
                      </div>
                      <p className="text-xs text-[#8B5CF6] font-mono">
                        Subject: SIH 2026 Collaboration
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300">
                        "Looking to assemble a winning cross-disciplinary team for the upcoming national hackathon sprint. Your system design work is top-tier."
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: Settings */}
              {activeTab === 'settings' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-extrabold text-white">
                    Master Profile Parameters
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-mono text-slate-400">Full Name</label>
                      <input
                        type="text"
                        value={settings.name}
                        onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400">Tagline / Subheading</label>
                      <input
                        type="text"
                        value={settings.tagline}
                        onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400">Official Email</label>
                      <input
                        type="text"
                        value={settings.email}
                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
