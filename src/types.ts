export interface ProfileInfo {
  name: string;
  role: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  bio: string[];
  email: string;
  github: string;
  linkedin: string;
  location: string;
  availability: string;
  resumeFileName: string;
  resumeUrl: string;
}

export interface ArchitectureDiagram {
  overview: string;
  layers: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  dataFlow: string[];
  metrics: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  coverImage: string;
  architecture: ArchitectureDiagram;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  experience: string;
  iconName?: string;
  isPopular?: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  category: 'AI & Data Science' | 'Programming' | 'Hackathons' | 'Database' | 'Cloud';
  previewImage: string;
  pdfUrl?: string;
  skills: string[];
  verificationUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  badge: string;
  category: string;
  date: string;
  description: string;
  recognition: string;
  stats?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  focus: string;
  keyCourses: string[];
  highlights: string[];
}

export interface JourneyItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Milestone' | 'Hackathon' | 'Project' | 'Skill' | 'Recognition';
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hackathons' | 'Workshops' | 'Team' | 'Events' | 'Achievements';
  date: string;
  imageUrl: string;
  caption: string;
  location: string;
}

export interface AnalyticsStats {
  totalVisitors: number;
  dailyVisitors: number;
  weeklyVisitors: number;
  monthlyVisitors: number;
  pageViews: Record<string, number>;
  devices: { device: string; percentage: number }[];
  referrers: { source: string; count: number }[];
  recentVisits: { timestamp: string; page: string; country: string }[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
}

export interface PortfolioData {
  profile: ProfileInfo;
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  certificates: CertificateItem[];
  achievements: AchievementItem[];
  education: EducationItem;
  journey: JourneyItem[];
  gallery: GalleryItem[];
}
