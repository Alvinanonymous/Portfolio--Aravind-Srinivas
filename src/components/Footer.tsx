import React from 'react';
import { ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data.ts';
import { ScrollReveal, ScrollRevealHeading } from './ScrollReveal.tsx';

interface FooterProps {
  onScrollToTop: () => void;
}

export function Footer({ onScrollToTop }: FooterProps) {
  return (
    <footer
      id="connect"
      className="scroll-mt-24 py-16 sm:py-24 px-6 sm:px-10 border-t border-cyan-500/15 bg-[#02050b]/90 backdrop-blur-xl font-hn relative z-30"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Connect Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal yOffset={12}>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <span className="text-xs uppercase tracking-[0.2em] text-cyan-400/80 font-mono">
                  Connect & Discovery
                </span>
              </div>
            </ScrollReveal>
            <ScrollRevealHeading
              text="Building the Future of Knowledge Retrieval"
              as="h2"
              className="text-3xl sm:text-4xl font-light tracking-tight text-cream"
            />
            <ScrollReveal delay={0.15} yOffset={16}>
              <p className="text-sm text-cream/70 leading-relaxed font-light max-w-md">
                Aravind Srinivas is based in the San Francisco Bay Area, California, leading Perplexity as Co-founder and CEO.
              </p>
            </ScrollReveal>
          </div>

          {/* Social Links & Quick Actions */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1} yOffset={20}>
              <div className="p-6 rounded-xl border border-cyan-500/15 bg-[#05111c]/70 backdrop-blur-sm space-y-3 h-full">
                <span className="text-xs uppercase tracking-widest text-cyan-400/70 font-mono">
                  Official Channels
                </span>
                <div className="flex flex-col gap-2.5 pt-2">
                  {PORTFOLIO_DATA.socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between text-sm text-cream/80 hover:text-cyan-300 hover:underline underline-offset-4 transition-colors group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} yOffset={20}>
              <div className="p-6 rounded-xl border border-cyan-500/15 bg-[#05111c]/70 backdrop-blur-sm flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-cyan-400/70 font-mono">
                      Direct Search
                    </span>
                    <Sparkles size={14} className="text-cyan-400" />
                  </div>
                  <h4 className="text-base font-medium text-cream">
                    Explore Perplexity Engine
                  </h4>
                  <p className="text-xs text-cream/70 leading-relaxed font-light">
                    Ask any question and experience live cited answers synthesized from the open web.
                  </p>
                </div>

                <a
                  href="https://www.perplexity.ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-cyan-400 text-[#030712] text-xs font-medium tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.35)] cursor-pointer"
                >
                  <span>Launch perplexity.ai</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} Dr. Aravind Srinivas</span>
            <span>&bull;</span>
            <span className="text-cyan-400/80 font-mono">San Francisco &bull; Chennai</span>
          </div>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-2 text-cream/70 hover:text-cyan-300 transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="h-7 w-7 rounded-full border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-950/40 transition-all">
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
