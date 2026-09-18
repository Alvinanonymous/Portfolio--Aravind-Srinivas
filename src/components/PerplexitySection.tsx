import React from 'react';
import { Sparkles, ShieldCheck, Search, Zap, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data.ts';
import { ScrollWordReveal } from './ScrollWordReveal.tsx';
import { ScrollReveal, ScrollRevealHeading } from './ScrollReveal.tsx';

export function PerplexitySection() {
  const featureIcons = [Zap, ShieldCheck, Search];

  const metrics = [
    { val: '100M+', label: 'Monthly Queries', sub: 'Global Research & Search Requests' },
    { val: '2022', label: 'Founded in SF', sub: 'Pioneering Answer Engine' },
    { val: '100%', label: 'Source Verification', sub: 'Every Statement Inline-Cited' },
    { val: 'Multi-LLM', label: 'Frontier Architecture', sub: 'Model Switching & Pro Reasoning' },
  ];

  return (
    <section
      id="perplexity"
      className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 border-t border-cyan-500/15 bg-[#02050b]/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header with Perplexity Branding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-cream/10">
          <div className="space-y-4">
            <ScrollReveal yOffset={12}>
              <div className="flex items-center gap-2 text-cyan-400/80 text-xs font-mono uppercase tracking-[0.2em]">
                <Sparkles size={14} className="text-cyan-400" />
                <span>Section 02 &bull; Company & Product</span>
              </div>
            </ScrollReveal>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
              {/* Perplexity Official Emblem & Wordmark */}
              <ScrollReveal yOffset={16}>
                <div
                  id="perplexity-brand-badge"
                  className="group relative inline-flex items-center px-4 py-2.5 rounded-xl border border-cyan-400/30 bg-cyan-950/20 hover:border-cyan-400/60 hover:bg-cyan-900/30 transition-all duration-300 shadow-lg backdrop-blur-md self-start"
                >
                  <img
                    id="perplexity-brand-logo"
                    src="/perplexity-logo.png"
                    alt="Perplexity Logo"
                    className="h-7 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </ScrollReveal>

              <div className="flex flex-col justify-center">
                <ScrollRevealHeading
                  text="Perplexity AI"
                  as="h2"
                  className="text-3xl sm:text-5xl font-light tracking-tight text-cream"
                />
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-400/60 mt-1 font-mono">
                  Founded 2022 &bull; San Francisco &bull; Next-Generation Answer Engine
                </p>
              </div>
            </div>
          </div>

          <ScrollReveal delay={0.2} yOffset={16}>
            <a
              id="perplexity-section-external-cta"
              href="https://www.perplexity.ai"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400/40 bg-cream text-[#030712] text-xs sm:text-sm font-medium tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 shadow-xl self-start md:self-auto cursor-pointer"
            >
              <img
                src="/perplexity-logo-black.png"
                alt=""
                className="h-3.5 w-auto object-contain"
              />
              <span>Experience Perplexity</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </ScrollReveal>
        </div>

        {/* Scroll Reveal Visionary Mission Statement */}
        <div className="p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 via-[#061420]/50 to-emerald-950/20 backdrop-blur-md space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400/70 block">
            The Mission Statement &bull; Scroll Reveal
          </span>
          <ScrollWordReveal
            className="text-xl sm:text-3xl font-light leading-relaxed text-cream"
            highlightWords={['Perplexity', 'answers', 'accuracy', 'citations', 'knowledge', 'search']}
          >
            {PORTFOLIO_DATA.perplexity.summary}
          </ScrollWordReveal>
        </div>

        {/* Key Metrics with Scroll Reveal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} yOffset={20}>
              <div className="p-5 sm:p-6 rounded-xl border border-cyan-500/15 bg-[#05101a]/70 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm space-y-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-cream block font-mono">
                  {metric.val}
                </span>
                <span className="text-xs font-medium text-cyan-300/90 block">
                  {metric.label}
                </span>
                <span className="text-[11px] text-cream/50 block">
                  {metric.sub}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Key Architectural Innovations / Features */}
        <div className="space-y-4">
          <ScrollReveal yOffset={16}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-cyan-400/70 font-mono">
              Core Technological Pillars
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.perplexity.features.map((feature, idx) => {
              const Icon = featureIcons[idx % featureIcons.length];
              return (
                <ScrollReveal key={idx} delay={0.1 * idx} yOffset={24}>
                  <div className="p-6 rounded-xl border border-cyan-500/15 bg-[#05111c]/70 hover:border-cyan-400/35 transition-all duration-300 space-y-3 backdrop-blur-sm h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="h-10 w-10 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-base font-medium text-cream">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
                        {feature.desc}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-cyan-400/60 uppercase">
                      Architecture Tier 0{idx + 1}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
