import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PROJECTS_DATA } from '@/data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotaryAngle, setRotaryAngle] = useState(0);
  const [stageDimensions, setStageDimensions] = useState({ width: 600, height: 640 });

  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const startAngleRef = useRef(0);

  const total = PROJECTS_DATA.length;
  const STEP_ANGLE = 25; // degrees between items on the arc

  // Responsive radius & center coordinates
  const radius = Math.min(520, Math.max(380, stageDimensions.height * 0.78));
  const cx = -Math.round(radius * 0.28);
  const cy = Math.round(stageDimensions.height / 2);

  // Measure stage dimensions for responsive arc
  useEffect(() => {
    const updateSize = () => {
      if (stageRef.current) {
        setStageDimensions({
          width: stageRef.current.offsetWidth,
          height: stageRef.current.offsetHeight || 600,
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Scroll-pinned progress listener
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = container.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // When the top of the container reaches or passes 0, it is sticky
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

        if (!isDraggingRef.current) {
          const rawIdx = progress * (total - 1);
          const currentIdx = Math.max(0, Math.min(total - 1, Math.round(rawIdx)));
          setActiveIndex(currentIdx);
          setRotaryAngle(-rawIdx * STEP_ANGLE);
        }
      } else if (rect.top > 0) {
        // Above the section
        if (!isDraggingRef.current) {
          setActiveIndex(0);
          setRotaryAngle(0);
        }
      } else if (rect.bottom < window.innerHeight) {
        // Below the section
        if (!isDraggingRef.current) {
          setActiveIndex(total - 1);
          setRotaryAngle(-(total - 1) * STEP_ANGLE);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [total, STEP_ANGLE]);

  // Programmatically scroll the page to match an index
  const scrollToProject = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container) return;

      const clamped = Math.max(0, Math.min(total - 1, index));
      const scrollableDistance = container.offsetHeight - window.innerHeight;

      if (scrollableDistance > 0) {
        const targetScrollY =
          window.scrollY +
          container.getBoundingClientRect().top +
          (clamped / (total - 1)) * scrollableDistance;

        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth',
        });
      } else {
        setActiveIndex(clamped);
        setRotaryAngle(-clamped * STEP_ANGLE);
      }
    },
    [total, STEP_ANGLE]
  );

  const prevProject = () => {
    scrollToProject(activeIndex - 1);
  };

  const nextProject = () => {
    scrollToProject(activeIndex + 1);
  };

  // Drag interaction for direct manual dragging
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startYRef.current = e.clientY;
    startAngleRef.current = rotaryAngle;
    if (stageRef.current) {
      stageRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaY = e.clientY - startYRef.current;
    const newAngle = startAngleRef.current + deltaY * 0.15;
    setRotaryAngle(newAngle);

    const calculatedIndex = Math.max(
      0,
      Math.min(total - 1, Math.round(-newAngle / STEP_ANGLE))
    );
    if (calculatedIndex !== activeIndex) {
      setActiveIndex(calculatedIndex);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (stageRef.current && stageRef.current.hasPointerCapture(e.pointerId)) {
      stageRef.current.releasePointerCapture(e.pointerId);
    }
    const nearestIndex = Math.max(
      0,
      Math.min(total - 1, Math.round(-rotaryAngle / STEP_ANGLE))
    );
    scrollToProject(nearestIndex);
  };

  const activeProject = PROJECTS_DATA[activeIndex] || PROJECTS_DATA[0];

  // Arc path coordinates for SVG background
  const arcSpan = 70 * (Math.PI / 180);
  const guideR = radius + 95;
  const startX = cx + guideR * Math.cos(-arcSpan);
  const startY = cy + guideR * Math.sin(-arcSpan);
  const endX = cx + guideR * Math.cos(arcSpan);
  const endY = cy + guideR * Math.sin(arcSpan);
  const arcPath = `M ${startX} ${startY} A ${guideR} ${guideR} 0 0 1 ${endX} ${endY}`;

  // Apex notch coordinates (at angle 0)
  const notchX = cx + radius + 95;
  const notchY = cy;

  return (
    <section
      id="work"
      ref={containerRef}
      className="projects-pinned-section"
      style={{
        height: `${(total + 0.6) * 75}vh`,
      }}
    >
      {/* Sticky Fullscreen Viewport: Stays locked while scrolling through projects */}
      <div className="projects-sticky-viewport">
        <div className="rotary-ambient-glow" />

        {/* Top Header Strip */}
        <div className="projects-header-strip">
          <div className="projects-header-left">
            <h2>Selected Work</h2>
            <small>Scroll down to spin through projects</small>
          </div>

          <div className="projects-counter-badge">
            <span>0{activeIndex + 1}</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>0{total}</span>
          </div>
        </div>

        {/* Middle Stage: 2-Column Wheel + Description */}
        <div className="projects-main-stage">
          {/* Left Column: Rotary Wheel Stage */}
          <div
            className="rotary-wheel-stage"
            ref={stageRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {/* Guide Arc Track & Indicator Dots */}
            <svg className="rotary-track-svg" aria-hidden="true">
              <path
                d={arcPath}
                fill="none"
                stroke="var(--line)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.6"
              />
              {PROJECTS_DATA.map((_, i) => {
                const theta = (i * STEP_ANGLE + rotaryAngle) * (Math.PI / 180);
                const dotX = cx + guideR * Math.cos(theta);
                const dotY = cy + guideR * Math.sin(theta);
                const isCurrent = i === activeIndex;
                return (
                  <circle
                    key={i}
                    cx={dotX}
                    cy={dotY}
                    r={isCurrent ? 6 : 3.5}
                    fill={isCurrent ? 'var(--accent)' : 'var(--muted)'}
                    opacity={isCurrent ? 1 : 0.45}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                );
              })}
            </svg>

            {/* Active Pointer Notch at the Apex */}
            <div
              className="rotary-active-notch"
              style={{
                left: `${notchX - 19}px`,
                top: `${notchY - 19}px`,
              }}
            >
              <div className="rotary-pointer-icon">›</div>
              <div className="rotary-connector-line" />
            </div>

            {/* Project Cards Curved Along the Arc */}
            {PROJECTS_DATA.map((p, i) => {
              const itemAngle = i * STEP_ANGLE + rotaryAngle;
              const rad = itemAngle * (Math.PI / 180);
              const x = cx + radius * Math.cos(rad);
              const y = cy + radius * Math.sin(rad);

              const absAngle = Math.abs(itemAngle);
              const scale = Math.max(0.65, 1.15 * (1 - absAngle / 130));
              const opacity = Math.max(0.18, 1 - absAngle / 75);
              const zIndex = Math.round(100 - absAngle);
              const isActive = i === activeIndex;

              return (
                <div
                  key={p.key}
                  className={`rotary-card-item ${isActive ? 'is-active' : ''}`}
                  style={{
                    transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${itemAngle}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  onClick={() => scrollToProject(i)}
                >
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className="card-overlay">
                    <span className="card-title-mini">{p.title}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Project Details Panel */}
          <div className="rotary-details-panel" key={activeProject.key}>
            <div className="rotary-category-pill">{activeProject.subtitle}</div>

            <h3 className="rotary-title">{activeProject.title}</h3>

            <p className="rotary-description">{activeProject.description}</p>

            <div className="rotary-tech-chips">
              {activeProject.stack.map((tech, idx) => (
                <span key={idx} className="rotary-chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="rotary-actions">
              <a
                className="btn"
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live Site →
              </a>

              <div className="rotary-nav-controls">
                <button
                  type="button"
                  className="rotary-arrow-btn"
                  onClick={prevProject}
                  disabled={activeIndex === 0}
                  aria-label="Previous project"
                  style={{ opacity: activeIndex === 0 ? 0.35 : 1 }}
                >
                  ↑
                </button>
                <button
                  type="button"
                  className="rotary-arrow-btn"
                  onClick={nextProject}
                  disabled={activeIndex === total - 1}
                  aria-label="Next project"
                  style={{ opacity: activeIndex === total - 1 ? 0.35 : 1 }}
                >
                  ↓
                </button>
              </div>
            </div>

            <div className="rotary-instruction-hint">
              <span>✦</span> Keep scrolling down to spin to the next project
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
