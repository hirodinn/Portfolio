import React, { useEffect, useRef, useState, useCallback } from 'react';
import { NAV_ITEMS } from '@/data/portfolioData';

export const DockNav: React.FC = () => {
  const dockRef = useRef<HTMLElement>(null);
  const indRef = useRef<HTMLSpanElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');

  const moveIndicator = useCallback((el: HTMLElement | null) => {
    if (!indRef.current || !el || el.offsetWidth === 0) return;
    indRef.current.style.width = `${el.offsetWidth}px`;
    indRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
  }, []);

  const getVisibleLink = useCallback((index: number, links: HTMLAnchorElement[]): HTMLAnchorElement | null => {
    if (!links || links.length === 0) return null;
    const target = links[index];
    if (target && target.offsetWidth > 0) return target;

    // Look backward for nearest visible item on mobile
    for (let i = index - 1; i >= 0; i--) {
      if (links[i] && links[i].offsetWidth > 0) return links[i];
    }
    // Look forward if not found backward
    for (let i = index + 1; i < links.length; i++) {
      if (links[i] && links[i].offsetWidth > 0) return links[i];
    }
    return null;
  }, []);

  // Sync theme mode state with DOM
  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = root.dataset.theme === 'light' ? 'light' : 'dark';
    setThemeMode(currentTheme);
  }, []);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const links = Array.from(dock.querySelectorAll('a')) as HTMLAnchorElement[];
    const items = NAV_ITEMS.map((item, idx) => {
      const link = links[idx];
      const target = item.href.startsWith('#')
        ? document.querySelector<HTMLElement>(item.href)
        : null;
      return { item, link, target };
    });

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const isBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 65;

      let cur = 0;
      if (isBottom) {
        cur = items.length - 1;
      } else {
        const threshold = window.innerHeight * 0.38;
        items.forEach((entry, i) => {
          if (!entry.target) return;
          const rect = entry.target.getBoundingClientRect();
          if (rect.top <= threshold) {
            cur = i;
          }
        });
      }

      setActiveIdx(cur);

      // Only move indicator automatically if user is not hovering over another nav link
      if (hoverIdx === null) {
        const visibleEl = getVisibleLink(cur, links);
        if (visibleEl) {
          moveIndicator(visibleEl);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    if (document.fonts) {
      document.fonts.ready.then(handleScroll);
    }

    // Initial positioning
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [hoverIdx, getVisibleLink, moveIndicator]);

  const handlePointerEnter = (e: React.PointerEvent<HTMLAnchorElement>, idx: number) => {
    setHoverIdx(idx);
    moveIndicator(e.currentTarget);
  };

  const handleDockLeave = () => {
    setHoverIdx(null);
    if (!dockRef.current) return;
    const links = Array.from(dockRef.current.querySelectorAll('a')) as HTMLAnchorElement[];
    const target = getVisibleLink(activeIdx, links);
    if (target) {
      moveIndicator(target);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, idx: number) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector<HTMLElement>(href);
      if (target) {
        // Sections that take full viewport (#top, #about, #work, #contact) align flush with top
        // Standard padded sections (#experience, #skills, #education) account for dock height
        const isFullscreenSection =
          href === '#top' || href === '#about' || href === '#work' || href === '#contact';
        const docScrollY = window.scrollY || document.documentElement.scrollTop;
        const rectTop = target.getBoundingClientRect().top + docScrollY;
        const dockHeight = dockRef.current?.offsetHeight ?? 48;
        const clearance = isFullscreenSection ? 0 : dockHeight + 20;

        const targetY = Math.max(0, Math.round(rectTop - clearance));

        // Immediately update active status and pill indicator for snappy interaction
        setActiveIdx(idx);
        setHoverIdx(null);
        moveIndicator(e.currentTarget);

        window.scrollTo({
          top: targetY,
          behavior: 'smooth',
        });

        if (window.history.pushState) {
          window.history.pushState(null, '', href);
        }
      }
    }
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = isDark ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    setThemeMode(nextTheme);
  };

  const currentPillIdx = hoverIdx !== null ? hoverIdx : activeIdx;

  return (
    <div className="dockw">
      <nav
        className="dock"
        id="dock"
        ref={dockRef}
        aria-label="Sections navigation"
        onPointerLeave={handleDockLeave}
      >
        <span className="ind" id="ind" ref={indRef} aria-hidden="true" />
        {NAV_ITEMS.map((item, idx) => {
          const isUnderPill = currentPillIdx === idx;
          const isActive = activeIdx === idx;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`${item.hideOnMobile ? 'hm ' : ''}${isUnderPill ? 'on is-pill ' : ''}${isActive ? 'active ' : ''}`}
              onPointerEnter={(e) => handlePointerEnter(e, idx)}
              onFocus={(e) => {
                setHoverIdx(idx);
                moveIndicator(e.currentTarget);
              }}
              onBlur={() => handleDockLeave()}
              onClick={(e) => handleNavClick(e, item.href, idx)}
            >
              {item.label}
            </a>
          );
        })}
        <button
          id="theme"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${themeMode === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${themeMode === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span style={{ fontSize: '1rem', lineHeight: 1 }}>{themeMode === 'dark' ? '☼' : '☾'}</span>
          <span>Theme</span>
        </button>
      </nav>
    </div>
  );
};

export default DockNav;
