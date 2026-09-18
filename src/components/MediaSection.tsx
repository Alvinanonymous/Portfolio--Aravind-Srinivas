import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Maximize2, X } from 'lucide-react';
import { PORTFOLIO_DATA, MediaPhoto } from '../data.ts';
import { ScrollReveal, ScrollRevealHeading } from './ScrollReveal.tsx';

export function MediaSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<MediaPhoto | null>(null);

  // Close lightbox on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="media"
      className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 border-t border-cyan-500/15 bg-[#02050b]/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-cream/10">
          <div>
            <ScrollReveal yOffset={12}>
              <div className="flex items-center gap-2 text-cyan-400/80 text-xs font-mono uppercase tracking-[0.2em]">
                <ImageIcon size={14} className="text-cyan-400" />
                <span>Section 06 &bull; Visual Archive</span>
              </div>
            </ScrollReveal>
            <ScrollRevealHeading
              text="Media & Talks"
              as="h2"
              className="text-3xl sm:text-5xl font-light tracking-tight text-cream mt-2"
            />
          </div>
          <ScrollReveal delay={0.2} yOffset={16}>
            <p className="text-xs sm:text-sm text-cream/70 max-w-md">
              Keynotes, fireside discussions, summits, and executive portraits documenting the evolution of Perplexity and conversational AI.
            </p>
          </ScrollReveal>
        </div>

        {/* Media Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.mediaPhotos.map((photo, idx) => (
            <ScrollReveal key={idx} delay={0.08 * idx} yOffset={24}>
              <div
                onClick={() => setSelectedPhoto(photo)}
                className="group relative overflow-hidden rounded-xl border border-cyan-500/15 bg-[#05111c]/70 cursor-pointer hover:border-cyan-400/40 transition-all duration-300 shadow-lg backdrop-blur-sm h-full"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#020617]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-cream text-[#030712] text-xs font-medium shadow-xl">
                      <Maximize2 size={13} />
                      <span>View Photo</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-1.5 border-t border-cyan-500/10">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400/80">
                    <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">{photo.tag}</span>
                    <span>Visual Archive</span>
                  </div>
                  <h4 className="text-sm font-medium text-cream group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-cream/60 line-clamp-2 leading-relaxed font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#020617]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#050f1a] shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video sm:aspect-[16/10] w-full bg-black/60 flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-full max-w-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400/80">
                <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">{selectedPhoto.tag}</span>
                <span>Visual Archive</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-cream">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
