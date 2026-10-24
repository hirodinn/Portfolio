import React, { useEffect, useRef } from 'react';
import { ABOUT_DATA } from '@/data/portfolioData';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    const fine =
      window.matchMedia('(hover:hover) and (pointer:fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    // Tilt + glare effect on tiles
    const tiles = sec.querySelectorAll<HTMLElement>('.tile');
    const cleanups: (() => void)[] = [];

    tiles.forEach((el) => {
      const handleMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.setProperty('--gx', `${x * 100}%`);
        el.style.setProperty('--gy', `${y * 100}%`);
        if (fine) {
          el.style.transform = `rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg)`;
        }
      };
      const handleLeave = () => {
        el.style.transform = '';
      };
      el.addEventListener('pointermove', handleMove);
      el.addEventListener('pointerleave', handleLeave);
      cleanups.push(() => {
        el.removeEventListener('pointermove', handleMove);
        el.removeEventListener('pointerleave', handleLeave);
      });
    });

    // Reveal and counter animation
    const count = (el: HTMLElement) => {
      const to = +(el.dataset.n || 0);
      const d = +(el.dataset.d || 0);
      const s = el.dataset.s || '';
      const pfx = el.dataset.p || '';
      const t0 = performance.now();
      const frame = (t: number) => {
        const p = Math.min(1, (t - t0) / 1100);
        const v = to * (1 - Math.pow(1 - p, 3));
        el.textContent = `${pfx}${v.toFixed(d)}${s}`;
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const target = e.target as HTMLElement;
          target.classList.add('in2');
          const counters = Array.from(target.querySelectorAll<HTMLElement>('[data-n]'));
          if (target.dataset.n) counters.push(target);
          counters.forEach(count);
          io.unobserve(target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const revealElements = sec.querySelectorAll('.rv');
    revealElements.forEach((el) => io.observe(el));

    return () => {
      cleanups.forEach((c) => c());
      io.disconnect();
    };
  }, []);

  return (
    <section className="pad" id="about" ref={sectionRef}>
      <div className="in ab">
        <div className="rv">
          <p className="big">
            {ABOUT_DATA.bigQuotePrefix}
            <em>{ABOUT_DATA.bigQuoteEmphasis}</em>
            {ABOUT_DATA.bigQuoteSuffix}
          </p>
          <p className="ab-desc">{ABOUT_DATA.description}</p>
        </div>

        <div className="st rv">
          {ABOUT_DATA.stats.map((stat, idx) => (
            <div key={idx} className="tile tl">
              <div
                className="n"
                data-n={stat.value}
                data-d={stat.decimals ?? 0}
                data-s={stat.suffix ?? ''}
                data-p={stat.prefix ?? ''}
              >
                {stat.prefix ?? ''}0{stat.suffix ?? ''}
              </div>
              <div className="t">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
