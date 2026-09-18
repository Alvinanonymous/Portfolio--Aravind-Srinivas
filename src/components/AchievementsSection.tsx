import React from 'react';
import { Award, Trophy, Medal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data.ts';
import { ScrollReveal, ScrollRevealHeading } from './ScrollReveal.tsx';

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 border-t border-cyan-500/15 bg-[#030813]/75 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-cream/10">
          <div>
            <ScrollReveal yOffset={12}>
              <div className="flex items-center gap-2 text-cyan-400/80 text-xs font-mono uppercase tracking-[0.2em]">
                <Award size={14} className="text-cyan-400" />
                <span>Section 05 &bull; Recognition & Honors</span>
              </div>
            </ScrollReveal>
            <ScrollRevealHeading
              text="Achievements & Milestones"
              as="h2"
              className="text-3xl sm:text-5xl font-light tracking-tight text-cream mt-2"
            />
          </div>
          <ScrollReveal delay={0.2} yOffset={16}>
            <p className="text-xs sm:text-sm text-cream/70 max-w-md">
              Academic distinctions, entrepreneurial accolades, and international leadership recognition.
            </p>
          </ScrollReveal>
        </div>

        {/* Honors Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.achievements.map((ach, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx} yOffset={24}>
              <div className="p-7 rounded-xl border border-cyan-500/15 bg-[#05111c]/70 hover:border-cyan-400/35 transition-all duration-300 flex flex-col justify-between space-y-4 group backdrop-blur-sm h-full shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-300/80 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20">
                      {ach.year}
                    </span>
                    <Trophy size={16} className="text-cyan-400/50 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-cream group-hover:text-white transition-colors">
                      {ach.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-cyan-400/80 mt-1 font-mono">
                      {ach.organization}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                    {ach.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-cyan-400/60 font-mono">
                  <Medal size={12} />
                  <span>Distinguished Milestone</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
