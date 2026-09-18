import React from 'react';
import { Briefcase, Building } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data.ts';
import { ScrollReveal, ScrollRevealHeading } from './ScrollReveal.tsx';

export function JourneySection() {
  return (
    <section
      id="journey"
      className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 border-t border-cyan-500/15 bg-[#030813]/75 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-cream/10">
          <div>
            <ScrollReveal yOffset={12}>
              <div className="flex items-center gap-2 text-cyan-400/80 text-xs font-mono uppercase tracking-[0.2em]">
                <Briefcase size={14} className="text-cyan-400" />
                <span>Section 03 &bull; Career Timeline</span>
              </div>
            </ScrollReveal>
            <ScrollRevealHeading
              text="The Journey"
              as="h2"
              className="text-3xl sm:text-5xl font-light tracking-tight text-cream mt-2"
            />
          </div>
          <ScrollReveal delay={0.2} yOffset={16}>
            <p className="text-xs sm:text-sm text-cream/70 max-w-md">
              From premier engineering roots in Chennai to frontier research labs in Silicon Valley and founding Perplexity.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline Flow with Scroll Reveal on each milestone */}
        <div className="relative pl-6 sm:pl-10 ml-2 sm:ml-4 border-l border-cyan-500/20 space-y-10">
          {PORTFOLIO_DATA.timeline.map((item, idx) => {
            const isCurrent = item.highlight === 'Current';
            return (
              <ScrollReveal key={idx} delay={0.08 * idx} yOffset={28}>
                <div className="relative group">
                  {/* Timeline node */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] top-2 h-4 w-4 rounded-full border transition-all duration-300 ${
                      isCurrent
                        ? 'border-cyan-400 bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)] ring-4 ring-cyan-400/20'
                        : 'border-cyan-500/50 bg-[#030813] group-hover:border-cyan-400 group-hover:bg-cyan-400/50'
                    }`}
                  />

                  {/* Content Box */}
                  <div className="p-6 sm:p-7 rounded-xl border border-cyan-500/15 bg-[#05111c]/70 hover:border-cyan-400/35 transition-all duration-300 space-y-3 backdrop-blur-sm shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono text-cyan-300/80 font-medium">
                          {item.period}
                        </span>
                        <span
                          className={`text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full ${
                            isCurrent
                              ? 'bg-cyan-400 text-[#030712] font-semibold shadow-[0_0_12px_rgba(34,211,238,0.5)]'
                              : 'bg-cyan-950/60 text-cyan-300/80 border border-cyan-500/20'
                          }`}
                        >
                          {item.highlight || 'Appointment'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-cream/50">
                        <Building size={13} className="text-cyan-400/60" />
                        <span>San Francisco Bay Area</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-cream group-hover:text-white transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-cyan-400/80 mt-0.5 font-mono">
                        {item.organization}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
