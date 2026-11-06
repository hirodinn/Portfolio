import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCE_DATA, ExperienceItem } from '@/data/portfolioData';
import { ResumeModal } from '@/components/ResumeModal';
import {
  Code2,
  Lightbulb,
  LayoutGrid,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  FileText,
  Calendar,
  MapPin,
  Briefcase,
  X,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedRole, setSelectedRole] = useState<ExperienceItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    // Scroll reveal observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).classList.add('in2');
          io.unobserve(e.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const revealElements = sec.querySelectorAll('.rv');
    revealElements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  // Lock body scroll when role detail modal is open
  useEffect(() => {
    if (selectedRole) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedRole(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedRole]);

  const getCardIcon = (iconType?: string) => {
    switch (iconType) {
      case 'lightbulb':
        return <Lightbulb size={24} className="exp-icon-svg" />;
      case 'layout':
        return <LayoutGrid size={24} className="exp-icon-svg" />;
      case 'code':
      default:
        return <Code2 size={24} className="exp-icon-svg" />;
    }
  };

  return (
    <>
      <section className="pad exp-cards-section" id="experience" ref={sectionRef}>
        <div className="in">
          {/* Section Header */}
          <div className="exp-cards-header rv">
            <div>
              <span className="exp-cards-kicker">
                <Sparkles size={13} className="text-accent" />
                <span>Experience</span>
              </span>
              <h2 className="sh" style={{ marginBottom: 0, marginTop: '8px' }}>
                Work Experience
              </h2>
            </div>

            <div className="exp-header-actions">
              <button
                type="button"
                className="exp-resume-pill"
                onClick={() => setResumeOpen(true)}
              >
                <FileText size={14} />
                <span>Resume</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>

          {/* 3-Card Grid Matching Reference Design */}
          <div className="exp-card-grid rv">
            {EXPERIENCE_DATA.map((item, idx) => (
              <article
                key={idx}
                className={`exp-ref-card ${item.isCurrent ? 'is-current' : ''}`}
              >
                {/* Signature Left Vertical Accent Tab (User's Theme Color) */}
                <span className="exp-accent-tab" aria-hidden="true" />

                {/* Top Section */}
                <div className="exp-card-top">
                  {/* Circular Icon Badge */}
                  <div className="exp-icon-disc" aria-hidden="true">
                    {getCardIcon(item.icon)}
                  </div>

                  {/* Kicker: Company + Period / Live badge */}
                  <div className="exp-meta-kicker-row">
                    <span className="exp-company-subhead">{item.company}</span>
                    {item.isCurrent ? (
                      <span className="exp-live-pill">
                        <span className="exp-live-dot" />
                        <span>Present</span>
                      </span>
                    ) : (
                      <span className="exp-period-subtext">{item.period.split('-')[0].trim()}</span>
                    )}
                  </div>

                  {/* Title (Role) */}
                  <h3 className="exp-card-heading">{item.role}</h3>

                  {/* Description Paragraph */}
                  <p className="exp-card-body">
                    {item.description || item.bullets[0]}
                  </p>
                </div>

                {/* Middle Section: Tech Pills preview */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="exp-card-tech-preview">
                    {item.technologies.slice(0, 4).map((tech, ti) => (
                      <span key={ti} className="exp-tech-chip">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 4 && (
                      <span className="exp-tech-chip exp-tech-more">
                        +{item.technologies.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Bottom Action Link: "Learn more →" */}
                <button
                  type="button"
                  className="exp-learn-more-btn"
                  onClick={() => setSelectedRole(item)}
                  aria-haspopup="dialog"
                >
                  <span>Learn more</span>
                  <ArrowRight size={15} className="exp-arrow-icon" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Role Details Modal on "Learn more" */}
      {selectedRole && (
        <div
          className="exp-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exp-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedRole(null);
          }}
        >
          <div className="exp-modal-box">
            <div className="exp-modal-header">
              <div className="exp-modal-header-left">
                <div className="exp-icon-disc small" aria-hidden="true">
                  {getCardIcon(selectedRole.icon)}
                </div>
                <div>
                  <span className="exp-company-subhead">{selectedRole.company}</span>
                  <h3 id="exp-modal-title" className="exp-modal-heading">
                    {selectedRole.role}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                className="exp-modal-close"
                onClick={() => setSelectedRole(null)}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            <div className="exp-modal-body">
              {/* Meta row */}
              <div className="exp-meta-details-row">
                <span className="exp-detail-tag">
                  <Calendar size={13} />
                  <span>{selectedRole.period}</span>
                </span>
                {selectedRole.location && (
                  <span className="exp-detail-tag">
                    <MapPin size={13} />
                    <span>{selectedRole.location}</span>
                  </span>
                )}
                {selectedRole.employmentType && (
                  <span className="exp-detail-tag">
                    <Briefcase size={13} />
                    <span>{selectedRole.employmentType}</span>
                  </span>
                )}
              </div>

              {/* Responsibilities & Impact */}
              <div>
                <h4 className="exp-modal-section-title">Key Responsibilities & Impact</h4>
                <ul className="exp-drawer-bullets">
                  {selectedRole.bullets.map((b, bi) => (
                    <li key={bi} className="exp-drawer-bullet">
                      <span className="exp-bullet-dot" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipped Deliverables */}
              {selectedRole.projects && selectedRole.projects.length > 0 && (
                <div className="exp-deliverables-box">
                  <span className="exp-deliverables-title">
                    <Sparkles size={12} />
                    <span>Shipped Systems & Key Deliverables</span>
                  </span>
                  <div className="exp-deliverables-pills">
                    {selectedRole.projects.map((proj, pi) => (
                      <React.Fragment key={pi}>
                        {proj.url ? (
                          <a
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="exp-deliverable-link"
                            title={`Visit ${proj.name}`}
                          >
                            <span>{proj.name}</span>
                            {proj.roleSummary && (
                              <span className="exp-deliverable-desc">· {proj.roleSummary}</span>
                            )}
                            <ArrowUpRight size={12} />
                          </a>
                        ) : (
                          <span className="exp-deliverable-link is-static">
                            <span>{proj.name}</span>
                            {proj.roleSummary && (
                              <span className="exp-deliverable-desc">· {proj.roleSummary}</span>
                            )}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {selectedRole.technologies && selectedRole.technologies.length > 0 && (
                <div>
                  <h4 className="exp-modal-section-title">Technologies & Tools</h4>
                  <div className="exp-tech-chips">
                    {selectedRole.technologies.map((t, ti) => (
                      <span key={ti} className="exp-tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Full PDF Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};

export default ExperienceSection;
