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
  SiKubernetes,
  SiNginx,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiExpress,
  SiSocketdotio,
  SiClaude,
  SiFramer,
  SiC,
  SiFlutter,
  SiReactquery,
  SiVite,
} from 'react-icons/si';
import {
  FaAws,
  FaJava,
  FaNetworkWired,
  FaDiagramProject,
  FaDatabase,
  FaSitemap,
  FaBolt,
} from 'react-icons/fa6';
import { TbBinaryTree, TbCpu, TbBrandOpenai } from 'react-icons/tb';

interface TechItem {
  name: string;
  category: 'Languages' | 'Backend' | 'Frontend' | 'DevOps' | 'Fundamentals';
  roleTag: string;
  icon: React.ReactNode;
}

const ZustandIcon: React.FC<{ size?: number }> = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3a8 8 0 0 1-8 8 8 8 0 0 1-8-8V8z"
      fill="#764ABC"
      fillOpacity="0.2"
      stroke="#764ABC"
      strokeWidth="1.6"
    />
    <circle cx="9" cy="10" r="1.5" fill="#764ABC" />
    <circle cx="15" cy="10" r="1.5" fill="#764ABC" />
    <path d="M10 14a2 2 0 0 0 4 0" stroke="#764ABC" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 6a2 2 0 0 1 2-2M20 6a2 2 0 0 0-2-2" stroke="#764ABC" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ROW 1: Exactly 21 Technologies
// Distribution: 4 Languages, 5 Backend, 4 DevOps, 4 Frontend, 4 Fundamentals
// Rhythmic Pattern: [Lang -> Backend -> DevOps -> Frontend -> Fundamentals] x 4 + Backend
const ROW_1: TechItem[] = [
  // Block 1
  {
    name: 'TypeScript',
    category: 'Languages',
    roleTag: 'Primary Language',
    icon: <SiTypescript size={46} color="#3178C6" />,
  },
  {
    name: 'Node.js',
    category: 'Backend',
    roleTag: 'Server Runtime',
    icon: <SiNodedotjs size={46} color="#5FA04E" />,
  },
  {
    name: 'AWS',
    category: 'DevOps',
    roleTag: 'Cloud Architecture',
    icon: <FaAws size={48} color="#FF9900" />,
  },
  {
    name: 'React',
    category: 'Frontend',
    roleTag: 'UI Architecture',
    icon: <SiReact size={48} color="#61DAFB" />,
  },
  {
    name: 'System Design',
    category: 'Fundamentals',
    roleTag: 'Scalable Systems',
    icon: <FaDiagramProject size={42} color="var(--accent)" />,
  },

  // Block 2
  {
    name: 'Python',
    category: 'Languages',
    roleTag: 'Backend & Data',
    icon: <SiPython size={46} color="#3776AB" />,
  },
  {
    name: 'NestJS',
    category: 'Backend',
    roleTag: 'Microservices',
    icon: <SiNestjs size={46} color="#E0234E" />,
  },
  {
    name: 'Docker',
    category: 'DevOps',
    roleTag: 'Containerization',
    icon: <SiDocker size={48} color="#2496ED" />,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    roleTag: 'Full-Stack SSR',
    icon: <SiNextdotjs size={46} />,
  },
  {
    name: 'Claude AI',
    category: 'Fundamentals',
    roleTag: 'LLM & Agent Systems',
    icon: <SiClaude size={46} color="#D97757" />,
  },

  // Block 3
  {
    name: 'C++ (Drogon)',
    category: 'Languages',
    roleTag: 'High-Perf Systems',
    icon: <SiCplusplus size={46} color="#00599C" />,
  },
  {
    name: 'Express.js',
    category: 'Backend',
    roleTag: 'REST Services',
    icon: <SiExpress size={46} />,
  },
  {
    name: 'Linux',
    category: 'DevOps',
    roleTag: 'Server Environment',
    icon: <SiLinux size={46} color="#FCC624" />,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    roleTag: 'Modern Styling',
    icon: <SiTailwindcss size={46} color="#06B6D4" />,
  },
  {
    name: 'Clean Architecture',
    category: 'Fundamentals',
    roleTag: 'Maintainable Code',
    icon: <FaSitemap size={42} color="var(--accent)" />,
  },

  // Block 4
  {
    name: 'C',
    category: 'Languages',
    roleTag: 'Low-Level & Memory',
    icon: <SiC size={48} color="#00599C" />,
  },
  {
    name: 'WebSockets',
    category: 'Backend',
    roleTag: 'Real-Time Streaming',
    icon: <SiSocketdotio size={46} />,
  },
  {
    name: 'Nginx',
    category: 'DevOps',
    roleTag: 'Reverse Proxy & LB',
    icon: <SiNginx size={46} color="#009639" />,
  },
  {
    name: 'TanStack Query',
    category: 'Frontend',
    roleTag: 'Server-State Caching',
    icon: <SiReactquery size={46} color="#FF4154" />,
  },
  {
    name: 'Computer Networks',
    category: 'Fundamentals',
    roleTag: 'Protocols & TCP/IP',
    icon: <FaNetworkWired size={42} color="var(--accent)" />,
  },

  // Extra Backend to balance 10 total backend skills
  {
    name: 'Firebase',
    category: 'Backend',
    roleTag: 'Realtime Cloud BaaS',
    icon: <SiFirebase size={46} color="#FFCA28" />,
  },
];

// ROW 2: Exactly 21 Technologies
// Distribution: 4 Languages, 5 Backend, 4 DevOps, 4 Frontend, 4 Fundamentals
// Rhythmic Pattern: [Lang -> Backend -> DevOps -> Frontend -> Fundamentals] x 4 + Backend
const ROW_2: TechItem[] = [
  // Block 1
  {
    name: 'JavaScript',
    category: 'Languages',
    roleTag: 'ESNext Standards',
    icon: <SiJavascript size={44} color="#F7DF1E" />,
  },
  {
    name: 'PostgreSQL',
    category: 'Backend',
    roleTag: 'Relational Schemas',
    icon: <SiPostgresql size={46} color="#4169E1" />,
  },
  {
    name: 'Kubernetes (K8s)',
    category: 'DevOps',
    roleTag: 'Orchestration',
    icon: <SiKubernetes size={46} color="#326CE5" />,
  },
  {
    name: 'Redux Toolkit',
    category: 'Frontend',
    roleTag: 'State Management',
    icon: <SiRedux size={46} color="#764ABC" />,
  },
  {
    name: 'Data Structures',
    category: 'Fundamentals',
    roleTag: 'CS Core & Speed',
    icon: <TbBinaryTree size={46} color="var(--accent)" />,
  },

  // Block 2
  {
    name: 'Java',
    category: 'Languages',
    roleTag: 'Object-Oriented',
    icon: <FaJava size={46} color="#E76F00" />,
  },
  {
    name: 'MongoDB',
    category: 'Backend',
    roleTag: 'NoSQL Document Store',
    icon: <SiMongodb size={46} color="#47A248" />,
  },
  {
    name: 'Hetzner',
    category: 'DevOps',
    roleTag: 'Cloud Infrastructure',
    icon: <SiHetzner size={46} color="#D50C2D" />,
  },
  {
    name: 'Zustand',
    category: 'Frontend',
    roleTag: 'Lightweight State Flow',
    icon: <ZustandIcon size={44} />,
  },
  {
    name: 'Algorithms & Perf',
    category: 'Fundamentals',
    roleTag: 'Algorithmic Rigor',
    icon: <TbCpu size={46} color="var(--accent)" />,
  },

  // Block 3
  {
    name: 'SQL Schemas',
    category: 'Languages',
    roleTag: 'Relational Queries',
    icon: <FaDatabase size={42} color="#00758F" />,
  },
  {
    name: 'Supabase',
    category: 'Backend',
    roleTag: 'Postgres & Auth Cloud',
    icon: <SiSupabase size={46} color="#3ECF8E" />,
  },
  {
    name: 'Cloudflare',
    category: 'DevOps',
    roleTag: 'Security & Tunnels',
    icon: <SiCloudflare size={46} color="#F38020" />,
  },
  {
    name: 'Framer Motion',
    category: 'Frontend',
    roleTag: 'Smooth UI Motion',
    icon: <SiFramer size={46} color="#0055FF" />,
  },
  {
    name: 'Concurrency & Threads',
    category: 'Fundamentals',
    roleTag: 'Parallel Processing',
    icon: <FaBolt size={42} color="var(--accent)" />,
  },

  // Block 4
  {
    name: 'Flutter & Dart',
    category: 'Languages',
    roleTag: 'Cross-Platform Apps',
    icon: <SiFlutter size={46} color="#02569B" />,
  },
  {
    name: 'Redis & Bull',
    category: 'Backend',
    roleTag: 'Queues & Caching',
    icon: <SiRedis size={46} color="#DC382D" />,
  },
  {
    name: 'Git Workflow',
    category: 'DevOps',
    roleTag: 'Version Control',
    icon: <SiGit size={46} color="#F05032" />,
  },
  {
    name: 'Vite',
    category: 'Frontend',
    roleTag: 'Modern Bundler',
    icon: <SiVite size={46} color="#646CFF" />,
  },
  {
    name: 'OpenAI & Agents',
    category: 'Fundamentals',
    roleTag: 'Intelligent Systems',
    icon: <TbBrandOpenai size={48} color="#10A37F" />,
  },

  // Extra Backend to balance 10 total backend skills
  {
    name: 'Microservices',
    category: 'Backend',
    roleTag: 'Distributed Systems',
    icon: <FaNetworkWired size={42} color="var(--accent)" />,
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
                  {/* FRONT FACE: Official Brand Logo */}
                  <div className="skills-card-front" aria-hidden="true">
                    <div className="skills-card-logo-wrap">{tech.icon}</div>
                  </div>

                  {/* BACK FACE: Revealed on 180° Flip on Hover (Clean: No Core Tech Tag) */}
                  <div className="skills-card-back">
                    <span className="skills-flip-name">{tech.name}</span>
                    <span className="skills-flip-tag">{tech.roleTag}</span>
                    <span className="skills-flip-category">{tech.category}</span>
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
              Languages, frameworks, and tools used across client applications and backend services.
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

        {/* CSS Marquee Logo Wall with 3D Flip Cards (2 Rows, 21 Evenly Distributed Cards Each) */}
        <div className="skills-marquee-wall" aria-label="Interactive marquee of technology logos">
          {/* Edge Gradient Shaders for seamless in/out fading */}
          <div className="skills-wall-fade-left" aria-hidden="true" />
          <div className="skills-wall-fade-right" aria-hidden="true" />

          {/* Row 1: Glides Left */}
          {renderMarqueeRow(ROW_1, 'left', 44)}

          {/* Row 2: Glides Right */}
          {renderMarqueeRow(ROW_2, 'right', 46)}
        </div>

        {/* Footer Hint */}
        <div className="skills-marquee-footer">
          <div className="skills-footer-metric">
            <span className="metric-icon">✦</span>
            <span>Hover or focus any card for category details</span>
          </div>
          <div className="skills-footer-metric">
            <span className="metric-icon">⚡</span>
            <span>42 technologies across frontend, backend, and infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
