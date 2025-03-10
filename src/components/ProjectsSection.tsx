import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "NexusDB",
    desc: "Real-time distributed database dashboard with live query monitoring and performance analytics.",
    tags: ["React", "Go", "PostgreSQL", "WebSocket"],
    status: "LIVE",
    link: "#",
    color: "primary",
  },
  {
    id: "02",
    title: "CloudForge",
    desc: "Infrastructure-as-code platform enabling one-click deployments across multiple cloud providers.",
    tags: ["Next.js", "Terraform", "AWS", "Docker"],
    status: "LIVE",
    link: "#",
    color: "neon-cyan",
  },
  {
    id: "03",
    title: "SynthWave",
    desc: "AI-powered music generation platform with real-time collaboration and MIDI export capabilities.",
    tags: ["TypeScript", "Python", "TensorFlow", "WebAudio"],
    status: "BETA",
    link: "#",
    color: "accent",
  },
  {
    id: "04",
    title: "PacketViz",
    desc: "Network traffic visualization tool for security analysis with real-time threat detection.",
    tags: ["Rust", "React", "D3.js", "WebAssembly"],
    status: "DEV",
    link: "#",
    color: "primary",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 px-4 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <p className="text-xs text-muted-foreground mb-2 font-mono">
            <span className="text-primary">03.</span> // featured_work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-16">
            <span className="text-primary text-glow">$</span> ls -la projects/
          </h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group border border-border bg-card/20 hover:bg-card/50 transition-all duration-300 cursor-pointer hover:box-glow"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                {/* Project number */}
                <span className="text-3xl font-display font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors w-16 shrink-0">
                  {project.id}
                </span>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className={`text-[10px] font-mono px-2 py-0.5 border ${
                      project.status === "LIVE" 
                        ? "border-primary/40 text-primary" 
                        : project.status === "BETA" 
                        ? "border-accent/40 text-accent" 
                        : "border-muted-foreground/30 text-muted-foreground"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-primary/60 bg-primary/5 px-2 py-0.5 border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <motion.span
                  className="text-primary text-xl shrink-0 hidden md:block"
                  animate={{ x: hoveredId === project.id ? 5 : 0 }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
