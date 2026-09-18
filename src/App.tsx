import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar.tsx';
import { FluidMeshBackground } from './components/FluidMeshBackground.tsx';
import { ScrollManifestoSection } from './components/ScrollManifestoSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { PerplexitySection } from './components/PerplexitySection.tsx';
import { JourneySection } from './components/JourneySection.tsx';
import { ResearchSection } from './components/ResearchSection.tsx';
import { AchievementsSection } from './components/AchievementsSection.tsx';
import { MediaSection } from './components/MediaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ScrollReveal } from './components/ScrollReveal.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section as user scrolls through the continuous page
  useEffect(() => {
    const sectionIds = ['hero', 'manifesto', 'about', 'perplexity', 'journey', 'research', 'achievements', 'media', 'connect'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      // If near very top
      if (window.scrollY < 120) {
        setActiveSection('hero');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (top <= scrollPos) {
            setActiveSection(id === 'connect' ? 'media' : id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div id="page-root" className="min-h-screen w-full bg-[#030712] font-hn text-cream antialiased relative selection:bg-cyan-400 selection:text-black">
      {/* 1. Fluid Ambient Aurora / Mesh Gradient Background (from uploaded video) */}
      <FluidMeshBackground />

      {/* 2. Responsive Navbar with ScrollSpy and Blur */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* 3. Hero Section with Fluid Aurora Background & Front Portrait */}
      <section
        id="hero"
        className="relative h-[100dvh] w-full overflow-hidden bg-transparent font-hn text-cream select-none z-10"
      >
        {/* Soft atmospheric gradient depth overlay */}
        <div
          id="bg-layer"
          className="anim-fade-in absolute inset-0 h-full w-full pointer-events-none overflow-hidden"
        >
          {/* Subtle cyan-teal ambient radial glow */}
          <div className="absolute inset-0 bg-radial-[circle_at_50%_35%] from-transparent via-[#030712]/30 to-[#030712]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60" />
        </div>

        {/* Marquee Name Track (layer: z-10) passing behind portrait */}
        <div
          id="marquee-wrapper"
          className="anim-fade-up anim-delay-500 absolute inset-x-0 top-[18vh] sm:top-[16vh] z-10 overflow-hidden pointer-events-none"
        >
          <div
            id="marquee-track"
            className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[25vh] font-normal leading-none text-cream/90 drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          >
            <span className="pr-[6vw]">Aravind &mdash; Srinivas&nbsp;</span>
            <span className="pr-[6vw]">Aravind &mdash; Srinivas&nbsp;</span>
          </div>
        </div>

        {/* Horizontal Cyan Rule (layer: z-10) */}
        <div
          id="cream-rule"
          className="anim-line anim-delay-1200 absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-[1.5px] bg-gradient-to-r from-cyan-400/20 via-cyan-400/80 to-cyan-400/20 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
        />

        {/* Front Portrait Overlay (layer: z-20) */}
        {/* Cutout portrait sits cleanly in front of glowing background and marquee */}
        <div
          id="portrait-container"
          className="anim-rise-in anim-delay-300 pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center items-end h-full max-h-[85vh] sm:max-h-[88vh]"
        >
          <div
            className="relative h-full w-auto aspect-square max-w-[95vw] sm:max-w-[700px] flex items-end justify-center"
            style={{
              maskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
            }}
          >
            <img
              id="front-portrait"
              src="/aravind-portrait.png"
              alt="Aravind Srinivas — Portrait"
              className="h-full w-full object-cover object-top filter contrast-[1.05] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* Floating Center Action Button */}
        <div
          id="hero-quick-action"
          className="anim-fade-up anim-delay-1200 absolute inset-x-0 bottom-[6.5rem] sm:bottom-32 z-25 flex flex-col items-center gap-2 pointer-events-auto"
        >
          <button
            onClick={() => scrollToSection('manifesto')}
            type="button"
            className="group flex items-center gap-2.5 px-5 py-2 rounded-full border border-cyan-400/40 bg-[#030914]/85 backdrop-blur-md text-xs sm:text-sm tracking-wider text-cream hover:bg-cyan-400 hover:text-[#030712] transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] cursor-pointer"
          >
            <Sparkles size={13} className="text-cyan-400 group-hover:text-[#030712] transition-colors" />
            <span>Scroll To Reveal Vision</span>
            <ArrowDown size={13} className="text-cyan-400/80 group-hover:text-[#030712] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Hero Footer Identity Chrome with Scroll Reveal */}
        <div
          id="hero-footer-chrome"
          className="absolute inset-x-0 bottom-0 z-25 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn pointer-events-auto"
        >
          {/* Footer Left with Scroll Reveal */}
          <ScrollReveal delay={0.2} yOffset={16}>
            <div
              id="hero-footer-left"
              className="flex flex-col text-cream"
            >
              <span className="font-medium text-white">Co-founder, President & CEO of Perplexity</span>
              <span className="text-cyan-300/90 font-mono text-xs">Computer Scientist & AI Researcher</span>
              <span className="text-cream/60 text-[11px] sm:text-xs">San Francisco Bay Area &bull; Origin: Chennai, India</span>
            </div>
          </ScrollReveal>

          {/* Footer Right with Scroll Reveal */}
          <ScrollReveal delay={0.3} yOffset={16}>
            <div
              id="hero-footer-right"
              className="flex flex-col text-right text-cream"
            >
              <span className="text-white">Ph.D. UC Berkeley &bull; IIT Madras Dual Degree</span>
              <span className="text-cyan-300/90 font-mono text-xs">Ex-OpenAI &bull; DeepMind &bull; Google</span>
              <span className="text-cream/60 text-[11px] sm:text-xs">Young Alumni Achiever Award 2026</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Continuous Page Content Sections with Scroll Reveal Text */}
      <main id="main-content" className="relative z-20">
        {/* Section: Scroll-Driven Philosophy Manifesto */}
        <ScrollManifestoSection />

        {/* Section 01: About with Scroll Reveal Text */}
        <AboutSection />

        {/* Section 02: Perplexity with Scroll Reveal Text */}
        <PerplexitySection />

        {/* Section 03: Journey with Scroll Reveal Timeline */}
        <JourneySection />

        {/* Section 04: Research Foundations */}
        <ResearchSection />

        {/* Section 05: Achievements */}
        <AchievementsSection />

        {/* Section 06: Media & Talks */}
        <MediaSection />
      </main>

      {/* 5. Footer & Connect Section */}
      <Footer onScrollToTop={() => scrollToSection('hero')} />
    </div>
  );
}
