import React from 'react';
import { BookOpen, GraduationCap, MapPin, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data.ts';
import { ScrollWordReveal } from './ScrollWordReveal.tsx';
import { ScrollReveal, ScrollRevealHeading } from './ScrollReveal.tsx';

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 border-t border-cyan-500/15 bg-[#030712]/75 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-cream/10">
          <div>
            <ScrollReveal yOffset={12}>
              <div className="flex items-center gap-2 text-cyan-400/70 text-xs font-mono uppercase tracking-[0.2em]">
                <BookOpen size={14} />
                <span>Section 01 &bull; Identity & Background</span>
              </div>
            </ScrollReveal>
            <ScrollRevealHeading
              text="About Aravind Srinivas"
              as="h2"
              className="text-3xl sm:text-5xl font-light tracking-tight text-cream mt-2"
              delay={0.1}
            />
          </div>
          <ScrollReveal delay={0.2} yOffset={16}>
            <p className="text-xs sm:text-sm text-cream/70 max-w-md">
              Pioneering the intersection of artificial intelligence, search architecture, and user-centric discovery.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait Card & Key Facts */}
          <div className="lg:col-span-4 space-y-6">
            <ScrollReveal yOffset={24} duration={0.8}>
              <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-[#050f18]/80 shadow-2xl backdrop-blur-md">
                <div className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-[#0e2a38] via-[#081822] to-[#040c13] relative flex items-end justify-center">
                  <div className="absolute inset-0 bg-radial-[circle_at_50%_30%] from-cyan-400/20 via-transparent to-transparent pointer-events-none" />
                  <img
                    id="about-aravind-portrait"
                    src="/aravind-about.png"
                    alt="Dr. Aravind Srinivas"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5 border-t border-cyan-500/15 bg-[#030910]/90 backdrop-blur-md space-y-2">
                  <h3 className="text-base font-medium text-cream">
                    Dr. Aravind Srinivas
                  </h3>
                  <p className="text-xs text-cyan-300/80 font-mono">
                    Co-founder, President & CEO of Perplexity
                  </p>
                  <div className="pt-2 flex flex-col gap-1.5 text-xs text-cream/60 border-t border-cream/10">
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-cyan-400/70 shrink-0" />
                      <span>San Francisco Bay Area, California</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 size={13} className="text-emerald-400/70 shrink-0" />
                      <span>Origin: Chennai, Tamil Nadu, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Metrics */}
            <ScrollReveal delay={0.15} yOffset={20}>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#07131e]/70 border border-cyan-500/15 backdrop-blur-sm">
                  <span className="text-[10px] uppercase tracking-widest text-cyan-400/70 block font-mono">
                    Doctorate
                  </span>
                  <span className="text-sm sm:text-base font-medium text-cream mt-0.5 block">
                    UC Berkeley
                  </span>
                  <span className="text-xs text-cream/60">Computer Science</span>
                </div>
                <div className="p-4 rounded-xl bg-[#07131e]/70 border border-cyan-500/15 backdrop-blur-sm">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400/70 block font-mono">
                    Alma Mater
                  </span>
                  <span className="text-sm sm:text-base font-medium text-cream mt-0.5 block">
                    IIT Madras
                  </span>
                  <span className="text-xs text-cream/60">B.Tech + M.Tech</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: In-depth Biography & Academic Foundations */}
          <div className="lg:col-span-8 space-y-8">
            {/* Lead Blockquote with Word-by-Word Scroll Reveal */}
            <div className="border-l-2 border-cyan-400/70 pl-6 py-3 bg-cyan-950/20 rounded-r-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400/70 block mb-2">
                Executive Vision &bull; Scroll to Read
              </span>
              <ScrollWordReveal
                className="text-lg sm:text-2xl font-light leading-relaxed text-cream"
                highlightWords={['search', 'answer', 'transparent', 'conversational']}
              >
                {PORTFOLIO_DATA.bio}
              </ScrollWordReveal>
            </div>

            {/* Extended Biography with Word-by-Word Scroll Reveal */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cream/40 block">
                Academic & Industry Trajectory
              </span>
              <ScrollWordReveal
                className="text-base sm:text-lg leading-relaxed text-cream/80 font-light"
                highlightWords={['Berkeley', 'OpenAI', 'DeepMind', 'Google', 'Perplexity', 'reinforcement']}
              >
                {PORTFOLIO_DATA.bioExtended}
              </ScrollWordReveal>
            </div>

            {/* Two Column Callouts with Scroll Reveal */}
            <ScrollReveal delay={0.1} yOffset={24}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#06121d]/75 border border-cyan-500/20 space-y-2 backdrop-blur-sm">
                  <span className="text-[11px] uppercase tracking-widest text-cyan-400/80 font-mono">
                    Current Vision
                  </span>
                  <h4 className="text-base font-medium text-cream">
                    Revolutionizing Knowledge Retrieval
                  </h4>
                  <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                    Building Perplexity to transform internet search into a conversational, cited, and transparent answer synthesis engine.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#06121d]/75 border border-emerald-500/20 space-y-2 backdrop-blur-sm">
                  <span className="text-[11px] uppercase tracking-widest text-emerald-400/80 font-mono">
                    Research Roots
                  </span>
                  <h4 className="text-base font-medium text-cream">
                    Frontier AI & Deep Learning
                  </h4>
                  <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                    Deep experience across OpenAI, DeepMind, and Google working on reinforcement learning, transformer architectures, and generative modeling.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Academic Foundations with Scroll Reveal */}
            <div className="pt-6 border-t border-cream/10 space-y-4">
              <ScrollReveal yOffset={16}>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-cyan-400/70" />
                  <h3 className="text-xs uppercase tracking-[0.2em] text-cream/60 font-medium font-mono">
                    Academic Foundations
                  </h3>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <ScrollReveal key={idx} delay={0.1 * (idx + 1)} yOffset={20}>
                    <div className="p-5 rounded-xl border border-cyan-500/15 bg-[#05101a]/70 backdrop-blur-sm flex flex-col justify-between space-y-3 h-full">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-cyan-400/70">{edu.year}</span>
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-500/20 font-mono">
                            {idx === 0 ? 'Young Alumni Award' : 'Ph.D. Dissertation'}
                          </span>
                        </div>
                        <h4 className="text-base font-medium text-cream mt-2">
                          {edu.institution}
                        </h4>
                        <p className="text-xs text-cream/80 mt-0.5">
                          {edu.degree} &bull; {edu.field}
                        </p>
                      </div>
                      <p className="text-xs text-cream/65 leading-relaxed pt-2 border-t border-white/5">
                        {edu.note}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
