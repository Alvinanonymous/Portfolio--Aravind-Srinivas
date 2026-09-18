import React from 'react';
import { Cpu, CheckCircle2, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data.ts';
import { ScrollReveal, ScrollRevealHeading } from './ScrollReveal.tsx';

export function ResearchSection() {
  return (
    <section
      id="research"
      className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 border-t border-cyan-500/15 bg-[#02050b]/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-cream/10">
          <div>
            <ScrollReveal yOffset={12}>
              <div className="flex items-center gap-2 text-cyan-400/80 text-xs font-mono uppercase tracking-[0.2em]">
                <Cpu size={14} className="text-cyan-400" />
                <span>Section 04 &bull; Technical Foundations</span>
              </div>
            </ScrollReveal>
            <ScrollRevealHeading
              text="Research & Expertise"
              as="h2"
              className="text-3xl sm:text-5xl font-light tracking-tight text-cream mt-2"
            />
          </div>
          <ScrollReveal delay={0.2} yOffset={16}>
            <p className="text-xs sm:text-sm text-cream/70 max-w-md">
              Pillars of computer science investigation spanning deep reinforcement learning, vision transformers, and search engines.
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Research Areas Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.researchAreas.map((area, idx) => (
            <ScrollReveal key={idx} delay={0.08 * idx} yOffset={24}>
              <div className="p-6 rounded-xl border border-cyan-500/15 bg-[#05111c]/70 hover:border-cyan-400/35 transition-all duration-300 space-y-3 flex flex-col justify-between backdrop-blur-sm h-full shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{area.icon}</span>
                    <span className="text-xs font-mono text-cyan-400/70">Pillar 0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-normal text-cream">{area.title}</h3>
                  <p className="text-xs text-cyan-300/80 font-medium font-mono">{area.summary}</p>
                  <p className="text-xs text-cream/70 leading-relaxed font-light">
                    {area.details}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {area.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-300/80 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
