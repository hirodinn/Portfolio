import React, { useEffect, useRef } from 'react';
import { EDUCATION_DATA } from '@/data/portfolioData';
import { GraduationCap, Award, Cloud, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    // Interactive pointer spotlight on cards
    const cards = sec.querySelectorAll<HTMLElement>('.edu-card');
    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const handlePointerMove = (e: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--gx', `${x}%`);
        card.style.setProperty('--gy', `${y}%`);
      };
      card.addEventListener('pointermove', handlePointerMove);
      cleanups.push(() => card.removeEventListener('pointermove', handlePointerMove));
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).classList.add('in2');
          io.unobserve(e.target);
        });
      },
      { threshold: 0.12 }
    );

    const revealElements = sec.querySelectorAll('.rv');
    revealElements.forEach((el) => io.observe(el));

    return () => {
      cleanups.forEach((c) => c());
      io.disconnect();
    };
  }, []);

  const degreeItem = EDUCATION_DATA.find((i) => i.type === 'Education') || EDUCATION_DATA[0];
  const trainingItem = EDUCATION_DATA.find((i) => i.type === 'Training') || EDUCATION_DATA[1];
  const certItem = EDUCATION_DATA.find((i) => i.type === 'Certification') || EDUCATION_DATA[2];

  return (
    <section className="pad" id="education" style={{ paddingTop: 0 }} ref={sectionRef}>
      <div className="in">
        <div className="edu-header-row rv">
          <div>
            <span className="edu-kicker">
              <Sparkles size={13} className="text-accent" />
              <span>Academic & Professional Credentials</span>
            </span>
            <h2 className="sh" style={{ marginBottom: 0, marginTop: '8px' }}>
              Education & Certifications
            </h2>
          </div>
          <p className="edu-header-desc">
            Computer science fundamentals, competitive algorithmic training, and hands-on cloud architecture.
          </p>
        </div>

        {/* 2-Row Layout: Top Row 2 Columns, Bottom Row 1 Centered Box */}
        <div className="edu-boxes-wrapper">
          {/* ROW 1: Degree & Fellowship */}
          <div className="edu-row-top">
            {/* Box 1: BSc Degree */}
            {degreeItem && (
              <article className="edu-card edu-card-primary rv">
                <div className="edu-watermark" aria-hidden="true">AAU</div>

                <div className="edu-card-head">
                  <div className="edu-index-tag">
                    <span className="edu-index-num">01</span>
                    <span className="edu-index-sep">/</span>
                    <span className="edu-index-type">ACADEMIC FOUNDATION</span>
                  </div>
                  <div className="edu-status-pill in-progress">
                    <span className="edu-pulse-dot" />
                    <span>Enrolled · 2024 - Present</span>
                  </div>
                </div>

                <div className="edu-primary-content">
                  <div className="edu-institution-banner">
                    <div className="edu-icon-shield">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <span className="edu-institution-name">{degreeItem.institution}</span>
                      <span className="edu-sub-campus">School of Information Technology and Engineering</span>
                    </div>
                  </div>

                  <h3 className="edu-card-title">{degreeItem.title}</h3>
                  <p className="edu-card-description">{degreeItem.description}</p>
                </div>

                {degreeItem.skills && (
                  <div className="edu-curriculum-box">
                    <span className="edu-box-label">CORE CONCENTRATIONS</span>
                    <div className="edu-tag-cloud">
                      {degreeItem.skills.map((s) => (
                        <span key={s} className="edu-tag-pill">
                          <span className="edu-tag-bullet" />
                          <span>{s}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )}

            {/* Box 2: A2SV Training Program */}
            {trainingItem && (
              <article className="edu-card edu-card-primary rv">
                <div className="edu-watermark" aria-hidden="true">A2SV</div>

                <div className="edu-card-head">
                  <div className="edu-index-tag">
                    <span className="edu-index-num">02</span>
                    <span className="edu-index-sep">/</span>
                    <span className="edu-index-type">FELLOWSHIP</span>
                  </div>
                  <div className="edu-status-pill completed">
                    <CheckCircle2 size={12} />
                    <span>Completed · {trainingItem.period}</span>
                  </div>
                </div>

                <div className="edu-primary-content">
                  <div className="edu-institution-banner">
                    <div className="edu-icon-shield">
                      <Award size={24} />
                    </div>
                    <div>
                      <span className="edu-institution-name">{trainingItem.institution}</span>
                      <span className="edu-sub-campus">Competitive Programming and Algorithmic Training</span>
                    </div>
                  </div>

                  <h3 className="edu-card-title">{trainingItem.title}</h3>
                  <p className="edu-card-description">{trainingItem.description}</p>
                </div>

                {trainingItem.skills && (
                  <div className="edu-curriculum-box">
                    <span className="edu-box-label">CORE CONCENTRATIONS</span>
                    <div className="edu-tag-cloud">
                      {trainingItem.skills.map((s) => (
                        <span key={s} className="edu-tag-pill">
                          <span className="edu-tag-bullet" />
                          <span>{s}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )}
          </div>

          {/* ROW 2: AWS Essentials as a Separate Box at the Center */}
          {certItem && (
            <div className="edu-row-center rv">
              <article className="edu-card edu-card-primary edu-card-centered aws-box">
                <div className="edu-watermark" aria-hidden="true">Udemy</div>

                <div className="edu-card-head">
                  <div className="edu-index-tag">
                    <span className="edu-index-num">03</span>
                    <span className="edu-index-sep">/</span>
                    <span className="edu-index-type">CLOUD CERTIFICATION</span>
                  </div>
                  <a
                    href={certItem.url || 'https://www.udemy.com/certificate/UC-2ea2a669-126b-4072-abab-91db9569f104'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="edu-status-pill certified edu-cert-link"
                    title="View verified credential on Udemy"
                  >
                    <Cloud size={12} />
                    <span>Verified Credential</span>
                    <ArrowUpRight size={13} className="edu-cert-arrow" />
                  </a>
                </div>

                <div className="edu-primary-content">
                  <div className="edu-institution-banner">
                    <div className="edu-icon-shield aws">
                      <Cloud size={24} />
                    </div>
                    <div>
                      <span className="edu-institution-name">{certItem.institution}</span>
                      <span className="edu-sub-campus">Cloud Architecture and AWS Fundamentals</span>
                    </div>
                  </div>

                  <h3 className="edu-card-title">{certItem.title}</h3>
                  <p className="edu-card-description">{certItem.description}</p>
                </div>

                {certItem.skills && (
                  <div className="edu-curriculum-box">
                    <span className="edu-box-label">KEY COMPETENCIES</span>
                    <div className="edu-tag-cloud">
                      {certItem.skills.map((s) => (
                        <span key={s} className="edu-tag-pill">
                          <span className="edu-tag-bullet" />
                          <span>{s}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
