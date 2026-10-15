import React, { useEffect, useRef } from 'react';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import { generateWavesSvg, EXPERIENCE_ART } from '@/lib/svgArt';

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const target = e.target as HTMLElement;
          target.classList.add('in2');
          io.unobserve(target);
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = sec.querySelectorAll('.rv');
    revealElements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className="pad" id="experience" style={{ paddingBottom: 0 }} ref={sectionRef}>
      <div className="in">
        <h2 className="sh">
          Experience
        </h2>

        <div className="xs" id="xs">
          {EXPERIENCE_DATA.map((x, i) => (
            <article
              key={i}
              className="xp rv"
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className="tx">
                <div className="dt">{x.period}</div>
                <h3>{x.role}</h3>
                <p className="co">{x.company}</p>
                <ul>
                  {x.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>

              <div
                className="art"
                dangerouslySetInnerHTML={{
                  __html:
                    generateWavesSvg(500, 300, 12, x.seed, 1.4) +
                    (EXPERIENCE_ART[x.art] ? EXPERIENCE_ART[x.art]() : ''),
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
