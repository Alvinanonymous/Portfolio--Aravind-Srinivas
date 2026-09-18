import React from 'react';
import { Sparkles, Quote } from 'lucide-react';
import { ScrollWordReveal } from './ScrollWordReveal.tsx';
import { ScrollReveal } from './ScrollReveal.tsx';

export function ScrollManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative py-28 sm:py-36 px-6 sm:px-12 border-t border-cyan-500/15 bg-gradient-to-b from-transparent via-[#030712]/60 to-[#030712]/80 backdrop-blur-md overflow-hidden"
    >
      {/* Decorative subtle aura light behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        {/* Scroll-revealed label */}
        <ScrollReveal yOffset={16}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-950/30 text-cyan-300 text-xs font-mono uppercase tracking-[0.2em] backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-400 animate-pulse" />
            <span>Scroll To Reveal &bull; Foundational Philosophy</span>
          </div>
        </ScrollReveal>

        {/* Primary Word-by-Word Scroll Reveal Statement */}
        <div className="relative">
          <Quote className="absolute -top-8 -left-8 sm:-left-12 h-14 w-14 text-cyan-400/15 pointer-events-none" />
          <ScrollWordReveal
            className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.3] text-cream"
            highlightWords={[
              'Perplexity',
              'truth',
              'verifiable',
              'citations',
              'ten',
              'blue',
              'links',
              'curiosity',
            ]}
          >
            Perplexity was founded on a singular conviction: the curiosity of humanity deserves direct answers, not ten blue links and sponsored advertisements. We build for truthful, verifiable knowledge.
          </ScrollWordReveal>
        </div>

        {/* Secondary Word-by-Word Scroll Reveal Statement */}
        <div className="pt-4 border-t border-cream/10 max-w-3xl">
          <ScrollWordReveal
            className="text-base sm:text-xl font-light leading-relaxed text-cream/75"
            highlightWords={['reinforcement', 'learning', 'transparent', 'discovery']}
          >
            By unifying frontier conversational models with live, low-latency web indexing, we have created an engine where every factual claim is grounded in transparent sources you can verify with a single tap.
          </ScrollWordReveal>
        </div>

        {/* Floating Pillars with Scroll Reveal */}
        <ScrollReveal delay={0.2} yOffset={24}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-xl border border-cyan-500/15 bg-[#050e17]/60 backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/70 block">
                Principle 01
              </span>
              <h4 className="text-sm font-medium text-cream mt-1">
                Direct Answers
              </h4>
              <p className="text-xs text-cream/60 mt-1">
                Synthesizing concise conclusions instead of forcing users to sift through SEO spam.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-cyan-500/15 bg-[#050e17]/60 backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/70 block">
                Principle 02
              </span>
              <h4 className="text-sm font-medium text-cream mt-1">
                Zero Black Boxes
              </h4>
              <p className="text-xs text-cream/60 mt-1">
                Every sentence is supported by inline citations to authoritative, peer-verifiable domains.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-cyan-500/15 bg-[#050e17]/60 backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/70 block">
                Principle 03
              </span>
              <h4 className="text-sm font-medium text-cream mt-1">
                Speed of Thought
              </h4>
              <p className="text-xs text-cream/60 mt-1">
                Sub-second multi-source aggregation engineered for immediate deep work and decision making.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
