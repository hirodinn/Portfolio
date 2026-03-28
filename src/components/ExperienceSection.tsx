import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Mid-level Full Stack Developer",
    company: "Mereb Technologies",
    period: "March 2026 — Present",
    type: "Full-time",
    highlights: [
      "Leading the development of high-performance web applications, focusing on scalable architecture and modular component design.",
      "Architecting robust backend services and optimizing API performance to support complex enterprise-level workflows.",
      "Implementing advanced frontend patterns and state management solutions to enhance user experience and maintainability.",
      "Collaborating on engineering best practices, including automated testing, containerization, and CI/CD pipeline optimization.",
    ],
    stack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    role: "Junior Full Stack Developer",
    company: "Solanova",
    period: "January 2025 — March 2026",
    type: "Full-time",
    highlights: [
      "Owned full features across the MERN stack on production-level projects, from API design to polished frontend delivery.",
      "Shipped Next.js interfaces optimized for UX, SEO, and maintainable component architecture.",
      "Built backend services with Nest.js and Django for integrations, internal tooling, and business workflows.",
      "Worked closely with product and engineering teams on schema decisions, API contracts, and release quality.",
    ],
    stack: ["MERN", "Next.js", "Nest.js", "Django", "MongoDB", "PostgreSQL"],
  },
  {
    role: "OpenPsi Engineer",
    company: "iCog Labs",
    period: "May 2024 — January 2025",
    type: "Research / Engineering",
    highlights: [
      "Worked on OpenCog-based cognitive architecture modules with focus on OpenPsi goal and drive modeling.",
      "Implemented and tuned behavior logic for agent decision flows and motivational dynamics.",
      "Collaborated with AI researchers to test, evaluate, and refine reasoning behaviors in experimental environments.",
      "Contributed to maintainable engineering workflows around research prototypes and iterative model validation.",
    ],
    stack: ["OpenCog", "OpenPsi", "Python", "AI Research"],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Independent",
    period: "August 2023 — Present",
    type: "Contract",
    highlights: [
      "Delivered client platforms end-to-end with MERN, from discovery and scoping to production rollout.",
      "Built custom Next.js frontends tailored to business goals, responsive behavior, and fast load times.",
      "Implemented Python backends (FastAPI/Django) for automation, secure APIs, and reporting modules.",
      "Set up practical product foundations including auth, RBAC, checkout flows, and admin operations.",
    ],
    stack: ["MERN", "Next.js", "FastAPI", "Django", "MongoDB", "PostgreSQL"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-4 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
          <p className="text-xs text-muted-foreground mb-2 font-mono">
            <span className="text-primary">03.</span> // work_experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            <span className="text-primary text-glow">$</span> cat experience.log
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="border border-border bg-card/30 backdrop-blur-sm hover:box-glow transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-primary font-mono mt-1">{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xs text-muted-foreground font-mono">{exp.period}</p>
                    <p className="text-[11px] text-muted-foreground mt-1">{exp.type}</p>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-primary/70 bg-primary/5 px-2 py-0.5 border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
