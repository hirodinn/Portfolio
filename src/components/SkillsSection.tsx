import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "frontend",
    icon: "◈",
    skills: [
      { name: "React", level: 98 },
      { name: "Next.js", level: 93 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "shadcn/ui", level: 90 },
      { name: "Three.js / WebGL", level: 70 },
    ],
  },
  {
    title: "backend",
    icon: "◆",
    skills: [
      { name: "Node.js / Express", level: 97 },
      { name: "Python / FastAPI", level: 92 },
      { name: "TypeScript", level: 92 },
      { name: "Django", level: 90 },
      { name: "Nest.js", level: 90 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "devops",
    icon: "◇",
    skills: [
      { name: "Linux / Nginx", level: 88 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Docker / K8s", level: 82 },
      { name: "AWS / GCP", level: 80 },
    ],
  },
  {
    title: "database",
    icon: "◉",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 88 },
      { name: "MySQL", level: 87 },
      { name: "MongoDB", level: 86 },
    ],
  },
  {
    title: "programming_languages",
    icon: "⬢",
    skills: [
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 91 },
      { name: "Python", level: 90 },
      { name: "Java", level: 86 },
      { name: "C++", level: 82 },
    ],
  },
  {
    title: "other_technologies",
    icon: "◍",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "REST APIs", level: 93 },
      { name: "Supabase", level: 89 },
      { name: "Firebase", level: 88 },
      { name: "WebSockets", level: 88 },
      { name: "Testing (Vitest / Playwright)", level: 86 },
      { name: "Figma", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-4 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <p className="text-xs text-muted-foreground mb-2 font-mono">
            <span className="text-primary">02.</span> // tech_stack
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-16">
            <span className="text-primary text-glow">$</span> cat skills.json
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.15 }}
              className={`border border-border bg-card/30 backdrop-blur-sm hover:box-glow transition-all duration-500 group ${ci === 4 ? "lg:col-start-2" : ""} ${ci === 5 ? "lg:col-start-3" : ""}`}
            >
              <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono leading-tight">
                  <span className="text-primary">{cat.icon}</span>{" "}
                  {cat.title === "programming_languages" ? (
                    <>
                      programming_
                      <br />
                      languages/
                    </>
                  ) : (
                    `${cat.title}/`
                  )}
                </span>
                <span className="text-[10px] text-muted-foreground/50">{cat.skills.length} items</span>
              </div>
              <div className="p-5 space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs text-foreground/80">{skill.name}</span>
                      <span className="text-[10px] text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + ci * 0.2 + si * 0.1, ease: "easeOut" }}
                        style={{
                          boxShadow: "0 0 8px hsl(var(--primary) / 0.6)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
