import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data.ts';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Perplexity', id: 'perplexity' },
    { label: 'Journey', id: 'journey' },
    { label: 'Research', id: 'research' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Media', id: 'media' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 font-hn ${
          isScrolled
            ? 'bg-[#02050b]/85 backdrop-blur-xl border-b border-cyan-500/20 py-3.5 px-6 sm:px-10 shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
            : 'bg-gradient-to-b from-[#02050b]/90 via-[#02050b]/40 to-transparent py-5 sm:py-6 px-6 sm:px-10'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand / Logo */}
          <button
            id="navbar-brand-logo"
            type="button"
            onClick={() => handleLinkClick('hero')}
            className="group flex items-center gap-3 text-left cursor-pointer focus:outline-none"
          >
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-normal tracking-wide text-cream group-hover:text-white transition-colors">
                Aravind Srinivas
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-cyan-400/80 flex items-center gap-1.5 font-mono">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                CEO &bull; Perplexity
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-navbar-nav"
            aria-label="Continuous Page Sections"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  type="button"
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-normal tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 font-medium shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                      : 'text-cream/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="navbar-perplexity-cta"
              href="https://www.perplexity.ai"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/30 text-xs text-cream hover:bg-cyan-400 hover:text-[#030712] transition-all duration-200 shadow-md"
            >
              <img
                src="/perplexity-logo.png"
                alt="Perplexity"
                className="h-3 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:brightness-0 transition-all"
              />
              <span>perplexity.ai</span>
              <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              id="navbar-connect-btn"
              type="button"
              onClick={() => handleLinkClick('connect')}
              className="text-xs text-cream/70 hover:text-cyan-300 px-2 py-1 transition-colors cursor-pointer"
            >
              Connect &rarr;
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            id="mobile-nav-toggle"
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-cream hover:text-cream/80 transition-colors cursor-pointer rounded-lg bg-cream/5 border border-cream/10"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-400 font-hn ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          id="mobile-nav-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Drawer Panel */}
        <div
          id="mobile-drawer-content"
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#030914] border-l border-cyan-500/20 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-400 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header of Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-cream/10">
            <div>
              <span className="text-sm font-medium tracking-wide text-cream">
                Aravind Srinivas
              </span>
              <p className="text-[10px] uppercase tracking-widest text-cream/50 mt-0.5">
                CEO &bull; Perplexity
              </p>
            </div>
            <button
              id="mobile-drawer-close-btn"
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-cream/70 hover:text-cream rounded-full bg-cream/5 border border-cream/10 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 flex-1 overflow-y-auto">
            <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40 font-medium">
              Navigation
            </span>
            <nav className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleLinkClick('hero')}
                className={`text-left px-3 py-2.5 rounded text-base tracking-wide transition-all cursor-pointer ${
                  activeSection === 'hero'
                    ? 'text-cream bg-cream/10 font-medium'
                    : 'text-cream/70 hover:text-cream hover:bg-cream/5'
                }`}
              >
                Home / Overview
              </button>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-left px-3 py-2.5 rounded text-base tracking-wide transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'text-cream bg-cream/10 font-medium'
                        : 'text-cream/70 hover:text-cream hover:bg-cream/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-xs uppercase font-mono px-1.5 py-0.5 rounded bg-cream/20 text-cream">
                        Active
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 pt-6 border-t border-cream/10">
              <a
                href="https://www.perplexity.ai"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded bg-cream text-[#141414] text-xs font-medium tracking-wider hover:bg-cream/90 transition-colors"
              >
                <img
                  src="/perplexity-logo-black.png"
                  alt=""
                  className="h-3.5 w-auto object-contain"
                />
                <span>Launch Perplexity</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Drawer Footer / Socials */}
          <div className="pt-4 border-t border-cream/10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40 font-medium block mb-2">
              Connect
            </span>
            <div className="flex flex-wrap gap-3 text-xs">
              {PORTFOLIO_DATA.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
