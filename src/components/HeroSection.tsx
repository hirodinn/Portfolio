import React from 'react';
import { HERO_DATA } from '@/data/portfolioData';
import { SiTypescript, SiPython, SiCplusplus } from 'react-icons/si';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-omnic" id="top">
      {/* Half Theme Color Screen Backdrop */}
      <div className="omnic-half-backdrop" aria-hidden="true">
        {/* Left half totally theme color */}
        <div className="omnic-half-fill" />
      </div>

      {/* Main Content Arena */}
      <div className="omnic-stage">
        {/* LEFT PANE: Sits on top of the Theme Color Half */}
        <div className="omnic-left-pane">
          {/* Main Title with Brand Bullet in place of BUILD */}
          <h1 className="omnic-hero-title">
            <svg
              className="omnic-brand-icon"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="3.5" fill="currentColor" />
            </svg>
            <span className="omnic-hero-name">{HERO_DATA.name}</span>
          </h1>

          {/* Subtitle & Summary */}
          <p className="omnic-subtitle">
            Full-stack engineering with a focus on practical performance.
          </p>
          <p className="omnic-description">
            {HERO_DATA.summary}
          </p>

          {/* High-Contrast Pill Action Buttons */}
          <div className="omnic-actions">
            <a className="omnic-btn-primary" href={HERO_DATA.ctaPrimary.href}>
              <span>{HERO_DATA.ctaPrimary.label.toUpperCase()}</span>
              <svg
                className="omnic-btn-arrow"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="omnic-btn-ghost" href={HERO_DATA.ctaSecondary.href}>
              {HERO_DATA.ctaSecondary.label}
            </a>
          </div>

          {/* Bottom Left: Trust & Tech Badges without circling */}
          <div className="omnic-social-proof">
            <div className="omnic-tech-icons" aria-label="Core Languages">
              <span className="omnic-tech-item" title="TypeScript">
                <SiTypescript size={20} />
              </span>
              <span className="omnic-tech-item" title="Python">
                <SiPython size={20} />
              </span>
              <span className="omnic-tech-item" title="C++">
                <SiCplusplus size={20} />
              </span>
              <span className="omnic-tech-more" title="More technologies">+5</span>
            </div>
            <div className="omnic-proof-meta">
              <strong>{HERO_DATA.socialProof?.title || 'B.Sc. Software Engineering · AAU'}</strong>
              <span>{HERO_DATA.socialProof?.subtitle || 'Hands-on experience across backend systems and modern web stacks.'}</span>
            </div>
          </div>
        </div>

        {/* CENTER: Picture positioned at the dead-center without glow or blur overlay */}
        <div className="omnic-center-portrait">
          <img
            className="omnic-portrait-img"
            src={HERO_DATA.avatarSrc}
            alt={HERO_DATA.name}
            loading="eager"
          />
        </div>

        {/* RIGHT PANE: Floating Availability & Quote Cards */}
        <div className="omnic-right-pane">
          {/* Top-Right: Available For Pill */}
          <div className="omnic-available-card">
            <div className="omnic-available-header">
              <span className="omnic-beacon-dot" />
              <span className="omnic-available-label">AVAILABLE FOR</span>
            </div>
            <strong className="omnic-available-title">
              Freelance & Full-Time Roles
            </strong>
          </div>

          {/* Bottom-Right: White Floating Quote Card */}
          <div className="omnic-quote-card">
            <div className="omnic-quote-icon">“</div>
            <p className="omnic-quote-text">
              {HERO_DATA.highlightCard?.quote ||
                'Focused on building clean, dependable software without unnecessary complexity.'}
            </p>
            <div className="omnic-quote-author">
              <img
                className="omnic-quote-avatar"
                src={HERO_DATA.avatarSrc}
                alt={HERO_DATA.name}
              />
              <div className="omnic-quote-meta">
                <strong>{HERO_DATA.highlightCard?.author || HERO_DATA.name}</strong>
                <span>{HERO_DATA.highlightCard?.role || 'Full-Stack Software Engineer'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
