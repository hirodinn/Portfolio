import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "frontend",
    icon: "◈",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Three.js / WebGL", level: 70 },
    ],
  },
  {
    title: "backend",
    icon: "◆",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "devops",
    icon: "◇",
    skills: [
      { name: "Docker / K8s", level: 82 },
      { name: "AWS / GCP", level: 80 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Linux / Nginx", level: 88 },
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

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.15 }}
              className="border border-border bg-card/30 backdrop-blur-sm hover:box-glow transition-all duration-500 group"
            >
              <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">
                  <span className="text-primary">{cat.icon}</span> {cat.title}/
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
