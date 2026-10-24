export interface NavItem {
  label: string;
  href: string;
  hideOnMobile?: boolean;
}

export interface StatusBarItem {
  label: string;
  value: string;
  isClock?: boolean;
}

export interface HeroData {
  name: string;
  role: string;
  location: string;
  avatarSrc: string;
  displayWord?: string;
  statusBadge: {
    status: string;
    text: string;
  };
  headlinePrefix: string;
  headlineEmphasis: string;
  headlineSuffix: string;
  summary: string;
  techStack: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  statusBar: StatusBarItem[];
  timezone: string;
  highlightCard?: {
    quote: string;
    author: string;
    role: string;
  };
  socialProof?: {
    title: string;
    subtitle: string;
  };
}

export interface StatItem {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface AboutData {
  bigQuotePrefix: string;
  bigQuoteEmphasis: string;
  bigQuoteSuffix: string;
  description: string;
  stats: StatItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  art: 'grid' | 'net' | 'chat';
  seed: number;
}

export interface ProjectItem {
  key: 'talent' | 'lean' | 'nodelala' | 'yenext' | 'site';
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  url: string;
  image: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  type: 'Education' | 'Training' | 'Certification';
  institution: string;
  period: string;
  title: string;
  description: string;
  skills?: string[];
  badge?: string;
  gpa?: number;
  gpaDecimals?: number;
  subtitle?: string;
  url?: string;
}

export interface ContactData {
  email: string;
  socials: { label: string; url: string }[];
  pageLinks: { label: string; href: string }[];
  watermark: string;
  copyright: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about', hideOnMobile: true },
  { label: 'Experience', href: '#experience', hideOnMobile: true },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills', hideOnMobile: true },
  { label: 'Education', href: '#education', hideOnMobile: true },
  { label: 'Contact', href: '#contact' },
];

export const HERO_DATA: HeroData = {
  name: 'Hire Bikila',
  role: 'Software Engineer',
  location: 'Addis Ababa, Ethiopia',
  avatarSrc: '/profile.webp',
  displayWord: 'BUILD',
  statusBadge: {
    status: 'available',
    text: 'Available for new roles and projects',
  },
  headlinePrefix: 'Software engineer building systems that stay ',
  headlineEmphasis: 'fast and reliable',
  headlineSuffix: ' in production.',
  summary:
    'I build web applications and backend systems with a focus on maintainability and practical performance. Currently studying Software Engineering at Addis Ababa University, I work across the stack from responsive user interfaces to containerized deployments.',
  techStack: [
    'TypeScript',
    'Python',
    'C++ (Drogon)',
    'React',
    'Next.js',
    'NestJS',
    'Docker',
    'Hetzner',
  ],
  ctaPrimary: { label: 'See my work', href: '#work' },
  ctaSecondary: { label: 'Get in touch', href: '#contact' },
  statusBar: [
    { label: 'Role', value: 'Full-Stack Software Engineer' },
    { label: 'Main languages', value: 'TypeScript, Python, C++' },
    { label: 'Degree', value: 'B.Sc. Software Engineering, AAU' },
    { label: 'Local time', value: 'Addis Ababa', isClock: true },
  ],
  timezone: 'Africa/Addis_Ababa',
  highlightCard: {
    quote: 'Focused on building clean, dependable software without unnecessary complexity.',
    author: 'Hire Bikila',
    role: 'Full-Stack Software Engineer',
  },
  socialProof: {
    title: 'B.Sc. Software Engineering · AAU',
    subtitle: 'Hands-on experience across backend systems and modern web stacks.',
  },
};

export const ABOUT_DATA: AboutData = {
  bigQuotePrefix: 'I focus on building ',
  bigQuoteEmphasis: 'reliable systems from the database up',
  bigQuoteSuffix: ', with clear structure and solid fundamentals.',
  description:
    'Most of my work centers on backend architecture, API design, and practical product delivery. I value straightforward abstractions over unnecessary complexity, favoring patterns that keep codebases easy to reason about and maintain. My day-to-day work spans high-throughput endpoints in C++, asynchronous services in Python, and full-stack web applications in React and NestJS.',
  stats: [
    { value: 3, label: 'Engineering roles held' },
    { value: 5, suffix: '+', label: 'Production projects shipped' },
    { value: 15, suffix: '+', label: 'Technologies and tools used' },
    { value: 3, label: 'Core languages: TS, C++, Python' },
  ],
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Mid-Level Full Stack Engineer',
    company: 'Mereb Technologies',
    period: 'January 2026 - Present',
    bullets: [
      'Build and maintain full-stack web applications and backend services using React, Node.js, and C++.',
      'Deploy and monitor containerized services on Hetzner servers using Docker and Cloudflare Tunnels.',
      'Optimize backend endpoints and integrate Python microservices into the core application workflow.',
    ],
    art: 'grid',
    seed: 5,
  },
  {
    role: 'OpenPsi Engineer',
    company: 'iCog Labs',
    period: 'September 2025 - March 2026',
    bullets: [
      'Contributed to OpenPsi within the OpenCog framework, implementing decision logic and state evaluation for autonomous agents.',
      'Collaborated with the research team to test cognitive reasoning behaviors and debug execution pipelines.',
    ],
    art: 'net',
    seed: 9,
  },
  {
    role: 'Junior Full Stack Engineer',
    company: 'Solanova Tech Solutions PLC',
    period: 'September 2025 - January 2026',
    bullets: [
      'Developed responsive user interfaces in React and connected them with NestJS backend APIs.',
      'Implemented relational database models, wrote data migrations, and managed state for team collaboration workflows.',
    ],
    art: 'chat',
    seed: 13,
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    key: 'talent',
    title: 'Mereb Talent',
    subtitle: 'Recruitment & Verification Platform',
    description:
      'A recruitment and candidate verification platform with an admin portal for tracking applications. I built performance-critical backend endpoints in C++ using Drogon to reduce latency, and managed production deployment on Hetzner with Docker and Cloudflare Tunnels.',
    stack: [
      'React',
      'Node.js',
      'C++ (Drogon)',
      'Python microservice',
      'Docker',
      'Cloudflare Tunnel',
      'Hetzner',
    ],
    url: 'https://talent.mereb.tech',
    image: 'https://res.cloudinary.com/dqrsyvncu/image/upload/q_auto,f_auto,w_800/v1792503470/ats_coalks.jpg',
  },
  {
    key: 'lean',
    title: 'LEAN Healthcare ERP',
    subtitle: 'Medical Supply & Inventory ERP',
    description:
      'An enterprise system built for LEAN Healthcare Solutions to manage medical supply imports, warehouse inventory, and customer orders. I developed core user workflows in React and handled containerized staging and production deployments on Hetzner.',
    stack: ['React', 'Docker', 'Nginx', 'Hetzner'],
    url: 'https://lean.merebtech.com',
    image: 'https://res.cloudinary.com/dqrsyvncu/image/upload/q_auto,f_auto,w_800/v1792503546/erp_r528li.jpg',
  },
  {
    key: 'nodelala',
    title: 'Nodelala',
    subtitle: 'Property Rental Platform',
    description:
      'A full-stack property rental platform connecting landlords and tenants. I developed the listing and booking interfaces, managed client state with Redux, and built RESTful endpoints on Node.js and Express with MongoDB.',
    stack: ['MongoDB', 'Express', 'React', 'Redux', 'Node.js'],
    url: 'https://nodelala.et',
    image: 'https://res.cloudinary.com/dqrsyvncu/image/upload/q_auto,f_auto,w_800/v1792503612/nodelala_vpdecg.jpg',
  },
  {
    key: 'yenext',
    title: 'Yenext',
    subtitle: 'Team Workspace & Collaboration',
    description:
      'A workspace application for teams to coordinate projects, assign tasks, and communicate in dedicated groups. Built during my time at Solanova Tech Solutions, where I developed React UI components and integrated them with NestJS APIs.',
    stack: ['React', 'NestJS', 'PostgreSQL'],
    url: 'https://yenext.org',
    image: 'https://res.cloudinary.com/dqrsyvncu/image/upload/q_auto,f_auto,w_800/v1792503127/Screenshot_from_2026-10-20_16-31-51_hhbxrg.png',
  },
  {
    key: 'site',
    title: 'Mereb Technologies Website',
    subtitle: 'Corporate Site & Landing Page',
    description:
      'The official corporate website for Mereb Technologies, built with Next.js for server-side rendering, fast initial page loads, and structured metadata.',
    stack: ['Next.js', 'SSR', 'i18n', 'SEO', 'GEO', 'Optimization'],
    url: 'https://merebtechnology.com',
    image: 'https://res.cloudinary.com/dqrsyvncu/image/upload/q_auto,f_auto,w_800/v1776763862/Screenshot_from_2026-04-21_12-28-18_yimm5d.png',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Java', 'SQL'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'NestJS', 'REST', 'Bull queues', 'Microservices'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Server-side rendering', 'Redux', 'Tailwind CSS'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Docker Compose', 'PM2', 'Cloudflare Tunnel', 'Linux', 'Git', 'Hetzner'],
  },
  {
    category: 'Fundamentals',
    skills: ['Data structures', 'Algorithms', 'System design'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    type: 'Education',
    institution: 'Addis Ababa University',
    period: '2024 - Present',
    title: 'BSc in Software Engineering',
    description:
      'Coursework includes data structures, algorithms, operating systems, database management systems, computer networks, and software architecture, with practical projects in C and C++.',
    skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'Databases'],
    badge: 'Degree',
  },
  {
    type: 'Training',
    institution: 'A2SV (Africa to Silicon Valley)',
    period: '2024',
    title: 'Software Engineering Training Program',
    description:
      'Intensive training in data structures and algorithmic problem solving. Practiced competitive programming with an emphasis on graph algorithms, dynamic programming, and time-complexity optimization.',
    skills: ['Algorithms', 'System Design', 'Problem Solving', 'Data Structures'],
    badge: 'Fellowship',
  },
  {
    type: 'Certification',
    institution: 'Udemy',
    period: 'Certified',
    title: 'AWS Cloud Essentials',
    description:
      'Practical foundation in AWS core services, covering EC2 compute instances, S3 object storage, Lambda serverless functions, VPC networking, and IAM security policies.',
    skills: ['Cloud Computing', 'EC2 & S3', 'IAM Security', 'Cloud Architecture'],
    badge: 'Certification',
    url: 'https://www.udemy.com/certificate/UC-2ea2a669-126b-4072-abab-91db9569f104',
  },
];

export const CONTACT_DATA: ContactData = {
  email: 'hirebikila1@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/hirodinn' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/hirodinn' },
    { label: 'Twitter / X', url: 'https://x.com/hirodinn' },
    { label: 'Instagram', url: 'https://www.instagram.com/hirodinn_/' },
  ],
  pageLinks: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
  ],
  watermark: 'Hire Bikila',
  copyright: '© 2026 Hire Bikila, Addis Ababa, Ethiopia',
};
