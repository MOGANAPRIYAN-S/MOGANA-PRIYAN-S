import React, { useState } from 'react';
import {
  Award,
  Search,
  Filter,
  Download,
  ExternalLink,
  Eye,
  CheckCircle2,
  Calendar,
  Sparkles,
  X,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { CertificateItem } from '../types';

interface CertificationsProps {
  certificates: CertificateItem[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certificates }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [previewCert, setPreviewCert] = useState<CertificateItem | null>(null);

  const categories = ['All', 'Hackathons', 'AI & Data Science', 'Programming', 'Database'];

  const filteredCerts = certificates.filter((cert) => {
    const matchesCat = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleDownload = (cert: CertificateItem) => {
    // Generate a printable / downloadable certificate sheet simulation
    const certWindow = window.open('', '_blank');
    if (certWindow) {
      certWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${cert.title} - Mogana Priyan S</title>
          <style>
            body { font-family: sans-serif; background: #050505; color: #fff; text-align: center; padding: 40px; }
            .box { max-width: 700px; margin: auto; border: 2px solid #00E5FF; padding: 40px; border-radius: 16px; background: #0a0d14; }
            h1 { color: #00E5FF; font-size: 28px; }
            p { color: #cbd5e1; font-size: 16px; line-height: 1.6; }
            .id { font-family: monospace; color: #8B5CF6; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="box">
            <p style="text-transform: uppercase; letter-spacing: 2px; color: #94a3b8;">Certificate of Merit & Achievement</p>
            <h1>${cert.title}</h1>
            <p>Conferred upon</p>
            <h2 style="color: #fff; font-size: 24px;">MOGANA PRIYAN S</h2>
            <p>Issued by: <strong>${cert.issuer}</strong> • Year: ${cert.issueDate}</p>
            <div class="id">Credential Verification ID: ${cert.credentialId}</div>
          </div>
          <script>window.print();</script>
        </body>
        </html>
      `);
      certWindow.document.close();
    }
  };

  return (
    <section id="certifications" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00E5FF]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // CREDENTIALS & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Certified{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">
              Competencies
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified qualifications from hackathon committees, machine learning institutes, and technical databases.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00E5FF]/20 border border-[#00E5FF]/50 text-[#00E5FF] font-semibold'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search certificates or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-all"
            />
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-[#00E5FF]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 group flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-black/40 border-b border-white/10">
                  <img
                    src={cert.previewImage}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#050505]/80 backdrop-blur-md text-[#00E5FF] border border-white/10">
                    {cert.category}
                  </span>

                  {/* Quick Action Preview Overlay */}
                  <button
                    onClick={() => setPreviewCert(cert)}
                    className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity gap-2 text-white font-medium text-xs backdrop-blur-xs cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#00E5FF]" />
                    <span>View Certificate</span>
                  </button>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-[#8B5CF6]">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.issueDate}
                    </span>
                    <span className="text-[10px] truncate max-w-[140px] text-slate-500">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#00E5FF] transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-medium">
                    Issuer: <span className="text-white">{cert.issuer}</span>
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-5 pt-0 border-t border-white/5 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => setPreviewCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#00E5FF] hover:underline font-mono cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview & PDF</span>
                </button>

                <button
                  onClick={() => handleDownload(cert)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Download / Print Certificate"
                  aria-label="Download Certificate"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview & PDF Viewer Modal */}
      {previewCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#090C14] border border-[#00E5FF]/40 shadow-2xl p-6 sm:p-8 space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                    VERIFIED CREDENTIAL
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {previewCert.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-white mt-1">
                  {previewCert.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewCert(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Digital Certificate HUD Preview */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#0e1320] to-[#07090e] border-2 border-[#00E5FF]/30 p-8 text-center space-y-4 shadow-inner">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
                  Academic & Technical Accreditation
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  REF: {previewCert.credentialId}
                </span>
              </div>

              <div className="space-y-2 py-4">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  This Certifies That
                </p>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-wide">
                  MOGANA PRIYAN S
                </h2>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Has demonstrated excellence, completion, and practical mastery in{' '}
                  <span className="text-[#00E5FF] font-semibold">{previewCert.title}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div>
                  <p className="text-slate-500 uppercase text-[10px]">Granting Authority</p>
                  <p className="text-white font-semibold">{previewCert.issuer}</p>
                </div>
                <div>
                  <p className="text-slate-500 uppercase text-[10px]">Date of Certification</p>
                  <p className="text-[#8B5CF6] font-semibold">{previewCert.issueDate}</p>
                </div>
                <div>
                  <p className="text-slate-500 uppercase text-[10px]">Status</p>
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Genuine
                  </span>
                </div>
              </div>
            </div>

            {/* Skills & Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {previewCert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 rounded text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => handleDownload(previewCert)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-[#00E5FF] to-[#22D3EE] hover:brightness-110 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-900" />
                  <span>Download / Print PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
