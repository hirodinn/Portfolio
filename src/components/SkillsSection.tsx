import React, { useState } from 'react';
import { SKILLS_DATA } from '@/data/portfolioData';
import {
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiDocker,
  SiLinux,
  SiHetzner,
  SiCloudflare,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiRedis,
} from 'react-icons/si';
import { FaJava, FaNetworkWired, FaDiagramProject } from 'react-icons/fa6';
import { TbBinaryTree } from 'react-icons/tb';

interface TechItem {
  name: string;
  category: 'Languages' | 'Backend' | 'Frontend' | 'DevOps' | 'Fundamentals';
  roleTag: string;
  isCore?: boolean;
  icon: React.ReactNode;
}

// Row 1: 11 Primary Systems, Languages & Core DevOps using official brand icons from react-icons
const ROW_1: TechItem[] = [
  {
    name: 'TypeScript',
    category: 'Languages',
    roleTag: 'Primary Language',
    isCore: true,
    icon: <SiTypescript size={46} color="#3178C6" />,
  },
  {
    name: 'Python',
    category: 'Languages',
    roleTag: 'Backend Services',
    isCore: true,
    icon: <SiPython size={46} color="#3776AB" />,
  },
  {
    name: 'C++ (Drogon)',
    category: 'Languages',
    roleTag: 'High-Perf Systems',
    isCore: true,
    icon: <SiCplusplus size={46} color="#00599C" />,
  },
  {
    name: 'React',
    category: 'Frontend',
    roleTag: 'UI Architecture',
    isCore: true,
    icon: <SiReact size={48} color="#61DAFB" />,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    roleTag: 'Full-Stack SSR',
    isCore: true,
    icon: <SiNextdotjs size={46} />,
  },
  {
    name: 'Node.js',
    category: 'Backend',
    roleTag: 'Server Runtime',
    isCore: true,
    icon: <SiNodedotjs size={46} color="#5FA04E" />,
  },
  {
    name: 'NestJS',
    category: 'Backend',
    roleTag: 'Microservices',
    isCore: true,
    icon: <SiNestjs size={46} color="#E0234E" />,
  },
  {
    name: 'Docker',
    category: 'DevOps',
    roleTag: 'Containerization',
    isCore: true,
    icon: <SiDocker size={48} color="#2496ED" />,
  },
  {
    name: 'Linux',
    category: 'DevOps',
    roleTag: 'Server Environment',
    isCore: true,
    icon: <SiLinux size={46} color="#FCC624" />,
  },
  {
    name: 'Hetzner',
    category: 'DevOps',
    roleTag: 'Cloud Infrastructure',
    isCore: true,
    icon: <SiHetzner size={46} color="#D50C2D" />,
  },
  {
    name: 'Cloudflare',
    category: 'DevOps',
    roleTag: 'Security & Tunnels',
    isCore: false,
    icon: <SiCloudflare size={46} color="#F38020" />,
  },
];

// Row 2: 11 Fullstack, Data & Architecture Systems using official brand icons from react-icons
const ROW_2: TechItem[] = [
  {
    name: 'JavaScript',
    category: 'Languages',
    roleTag: 'ESNext Standards',
    isCore: false,
    icon: <SiJavascript size={44} color="#F7DF1E" />,
  },
  {
    name: 'Redux Toolkit',
    category: 'Frontend',
    roleTag: 'State Management',
    isCore: false,
    icon: <SiRedux size={46} color="#764ABC" />,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    roleTag: 'Modern Styling',
    isCore: false,
    icon: <SiTailwindcss size={46} color="#06B6D4" />,
  },
  {
    name: 'SQL & PostgreSQL',
    category: 'Languages',
    roleTag: 'Relational Schemas',
    isCore: true,
    icon: <SiPostgresql size={46} color="#4169E1" />,
  },
  {
    name: 'Git Workflow',
    category: 'DevOps',
    roleTag: 'Version Control',
    isCore: false,
    icon: <SiGit size={46} color="#F05032" />,
  },
  {
    name: 'Redis & Bull',
    category: 'Backend',
    roleTag: 'Queues & Caching',
    isCore: false,
    icon: <SiRedis size={46} color="#DC382D" />,
  },
  {
    name: 'Microservices',
    category: 'Backend',
    roleTag: 'Distributed Systems',
    isCore: true,
    icon: <FaNetworkWired size={42} color="var(--accent)" />,
  },
  {
    name: 'System Design',
    category: 'Fundamentals',
    roleTag: 'Scalable Systems',
    isCore: true,
    icon: <FaDiagramProject size={42} color="var(--accent)" />,
  },
  {
    name: 'Data Structures',
    category: 'Fundamentals',
    roleTag: 'CS Core & Speed',
    isCore: true,
    icon: <TbBinaryTree size={46} color="var(--accent)" />,
  },
  {
    name: 'Java',
    category: 'Languages',
    roleTag: 'Object-Oriented',
    isCore: false,
    icon: <FaJava size={46} color="#E76F00" />,
  },
];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS_DATA.map((c) => c.category)];

  const renderMarqueeRow = (items: TechItem[], direction: 'left' | 'right', speedSec: number) => {
    // 3 duplicates guarantee seamless mathematically infinite translation without glitch
    const duplicated = [...items, ...items, ...items];

    return (
      <div
        className={`skills-logo-track-container ${direction === 'right' ? 'is-reverse' : ''}`}
        style={{ '--marquee-duration': `${speedSec}s` } as React.CSSProperties}
      >
        <div className="skills-logo-track">
          {duplicated.map((tech, index) => {
            const matchesCategory =
              activeCategory === 'All' || tech.category === activeCategory;

            return (
              <div
                key={`${tech.name}-${index}`}
                className={`skills-flip-card ${matchesCategory ? 'is-highlighted' : 'is-dimmed'}`}
                tabIndex={0}
                role="button"
                aria-label={`${tech.name} - ${tech.roleTag}`}
              >
                <div className="skills-card-flipper">
                  {/* FRONT FACE: ONLY the Official Brand Logo (Exact Pinterest Style) */}
                  <div className="skills-card-front" aria-hidden="true">
                    <div className="skills-card-logo-wrap">{tech.icon}</div>
                  </div>

                  {/* BACK FACE: Revealed on 180° Flip on Hover */}
                  <div className="skills-card-back">
                    <span className="skills-flip-name">{tech.name}</span>
                    <span className="skills-flip-tag">{tech.roleTag}</span>
                    <span className="skills-flip-category">{tech.category}</span>
                    {tech.isCore && (
                      <span className="skills-core-pill">Core Tech</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="pad" id="skills">
      <div className="in">
        {/* Header Row */}
        <div className="skills-header-row">
          <div>
            <h2 className="sh" style={{ marginBottom: '6px' }}>
              Skills & Technologies
            </h2>
            <p className="skills-header-sub">
              A visual marquee of languages, frameworks, and infrastructure tools. Hover any card to inspect.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="skills-filter-pills" role="tablist" aria-label="Filter skills by domain">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`skills-filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* CSS Marquee Logo Wall with 3D Flip Cards */}
        <div className="skills-marquee-wall" aria-label="Interactive marquee of technology logos">
          {/* Edge Gradient Shaders for seamless in/out fading */}
          <div className="skills-wall-fade-left" aria-hidden="true" />
          <div className="skills-wall-fade-right" aria-hidden="true" />

          {/* Row 1: Glides Left */}
          {renderMarqueeRow(ROW_1, 'left', 34)}

          {/* Row 2: Glides Right */}
          {renderMarqueeRow(ROW_2, 'right', 36)}
        </div>

        {/* Footer Hint */}
        <div className="skills-marquee-footer">
          <div className="skills-footer-metric">
            <span className="metric-icon">✦</span>
            <span>Hover any card to flip 180° and reveal details</span>
          </div>
          <div className="skills-footer-metric">
            <span className="metric-icon">⚡</span>
            <span>Streaming smoothly across 21+ production technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
