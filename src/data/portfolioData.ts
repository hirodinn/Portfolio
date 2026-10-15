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
  avatarSrc: '/profile.png',
  displayWord: 'BUILD',
  statusBadge: {
    status: 'available',
    text: 'Available for high-impact roles',
  },
  headlinePrefix: 'Software engineer building systems that stay ',
  headlineEmphasis: 'fast and reliable',
  headlineSuffix: ' after launch.',
  summary:
    'I am a full-stack engineer driven by product thinking, clean architecture, and technical rigor. Currently completing my Software Engineering degree at Addis Ababa University, I specialize in taking ambitious digital products from first architectural principles all the way to rock-solid production.',
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
    quote: 'Building production systems that stay fast, reliable, and clean after launch.',
    author: 'Hire Bikila',
    role: 'Full-Stack Software Engineer',
  },
  socialProof: {
    title: 'Software Engineering · AAU',
    subtitle: 'Proven engineering for scale, stability, and speed.',
  },
};

export const ABOUT_DATA: AboutData = {
  bigQuotePrefix: 'I bridge the gap between ',
  bigQuoteEmphasis: 'low-level systems precision and high-level product design',
  bigQuoteSuffix: ' — crafting software that is fast, resilient, and built to scale.',
  description:
    'Based in Addis Ababa, I craft production-ready applications by pairing rigorous computer science fundamentals with modern cloud-native workflows. Whether designing high-throughput concurrent backends in modern C++ and Python, structuring resilient APIs in NestJS, or engineering fluid web interfaces in React and TypeScript, I build with an uncompromising focus on speed, reliability, and human-centered design.',
  stats: [
    { value: 3, label: 'Professional engineering roles' },
    { value: 5, suffix: '+', label: 'Production systems shipped' },
    { value: 15, suffix: '+', label: 'Technologies & modern tools' },
    { value: 3, label: 'Core languages: TS, Python, C++' },
  ],
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Mid-Level Full Stack Engineer',
    company: 'Mereb Technologies',
    period: 'January 2026 to present',
    bullets: [
      'Engineer and maintain production applications across architecture, implementation, and deployment.',
      'Improve backend performance, system reliability, and development infrastructure.',
    ],
    art: 'grid',
    seed: 5,
  },
  {
    role: 'OpenPsi Engineer',
    company: 'iCog Labs',
    period: 'September 2025 to March 2026',
    bullets: [
      'Contributed to OpenPsi, an OpenCog cognitive architecture for goal-driven decision-making.',
      'Supported the development of cognitive reasoning and intelligent agent behavior.',
    ],
    art: 'net',
    seed: 9,
  },
  {
    role: 'Junior Full Stack Engineer',
    company: 'Solanova Tech Solutions PLC',
    period: 'September 2025 to January 2026',
    bullets: [
      'Delivered full-stack features across web applications for property rental and team collaboration.',
      'Integrated frontend interfaces with backend services and data persistence layers.',
    ],
    art: 'chat',
    seed: 13,
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    key: 'talent',
    title: 'Mereb Talent',
    subtitle: 'Recruitment and verification',
    description:
      "Mereb's recruitment and talent verification platform, with an administrative portal for managing recruitment operations. I optimized backend request handling using C++ and Drogon, and deployed and maintained the production infrastructure on Hetzner.",
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
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'lean',
    title: 'LEAN Healthcare ERP',
    subtitle: 'Enterprise resource planning',
    description:
      'A full-scale ERP for LEAN Healthcare Solutions, used to manage healthcare product imports and trading operations. I contributed to the application and supported its deployment and containerized infrastructure on Hetzner.',
    stack: ['React', 'Docker', 'Hetzner'],
    url: 'https://lean.merebtech.com',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'nodelala',
    title: 'Nodelala',
    subtitle: 'Property rental platform',
    description:
      'A full-stack property rental platform. I implemented the rental workflows, client-side state management, and persistent data integration.',
    stack: ['MongoDB', 'Express', 'React', 'Redux', 'Node.js'],
    url: 'https://nodelala.et',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'yenext',
    title: 'Yenext',
    subtitle: 'Team collaboration',
    description:
      'A group collaboration app where organizations coordinate work, manage tasks, and communicate in structured groups. Built at Solanova Tech Solutions, where I delivered full-stack features and integrated the interface with backend services.',
    stack: ['React', 'NestJS'],
    url: 'https://yenext.org',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
  },
  {
    key: 'site',
    title: 'Mereb Technologies website',
    subtitle: 'Company site',
    description: 'The company website, built with Next.js and server-side rendering.',
    stack: ['Next.js', 'SSR'],
    url: 'https://merebtechnologies.com',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
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
    period: '2024 — Present',
    title: 'BSc in Software Engineering',
    description:
      'Pursuing foundational software engineering coursework with a strong focus on data structures, algorithms, operating systems, databases, and computer networks.',
    skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'Databases'],
    badge: 'Degree',
  },
  {
    type: 'Training',
    institution: 'A2SV (Africa to Silicon Valley)',
    period: '2024',
    title: 'Software Engineering Training Program',
    description:
      'Rigorous problem-solving and algorithmic training program emphasizing competitive programming, high-efficiency data structures, and advanced time-complexity optimization.',
    skills: ['Algorithms', 'System Design', 'Problem Solving', 'Data Structures'],
    badge: 'Fellowship',
  },
  {
    type: 'Certification',
    institution: 'Amazon Web Services (AWS)',
    period: 'Certified',
    title: 'AWS Cloud Essentials',
    description:
      'Core competencies across cloud fundamentals, AWS compute services (EC2, Lambda), scalable cloud storage (S3), IAM security, and networking architecture.',
    skills: ['Cloud Computing', 'EC2 & S3', 'IAM Security', 'Cloud Architecture'],
    badge: 'Certification',
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
