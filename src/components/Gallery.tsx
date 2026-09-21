import React, { useState } from 'react';
import {
  Sparkles,
  Camera,
  MapPin,
  Calendar,
  X,
  Maximize2,
  Tag
} from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryProps {
  gallery: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Hackathons', 'Workshops', 'Team', 'Events', 'Achievements'];

  const filteredPhotos = gallery.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  return (
    <section id="gallery" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Aurora Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#00E5FF]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 // HACKATHON & EVENT ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Photo Gallery &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">
              Moments
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Snapshots from hackathons, workshops, technical presentations, team collaboration sprints, and campus innovation expos.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-black font-semibold shadow-md shadow-[#00E5FF]/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat === 'All' ? 'All Photos' : cat}
            </button>
          ))}
        </div>

        {/* Modern Masonry / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className={`group relative rounded-2xl overflow-hidden bg-[#0c0f18] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 cursor-pointer ${
                idx % 4 === 0 ? 'sm:col-span-2 sm:aspect-16/9' : 'aspect-4/3'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tags */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/70 backdrop-blur-md text-[#00E5FF] border border-white/10">
                  {item.category}
                </span>
                <span className="p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white/70 group-hover:text-white transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Card Copy */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-[#8B5CF6]">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#00E5FF]" />
                    {item.location}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-[#00E5FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full rounded-3xl bg-[#090C14] border border-[#00E5FF]/40 shadow-2xl overflow-hidden">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-all cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video max-h-[60vh] bg-black flex items-center justify-center">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3 bg-[#0a0d17]">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                  {activePhoto.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activePhoto.date} • {activePhoto.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
