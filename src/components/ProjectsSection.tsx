import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef, useState } from "react";

type ProjectCategory = "fullstack" | "frontend" | "backend" | "tooling";

type Project = {
  id: string;
  title: string;
  summary: string;
  impact: string;
  tags: string[];
  category: ProjectCategory;
  year: string;
  status: "LIVE" | "BETA" | "DEV";
  liveUrl: string;
  sourceUrl: string;
  image: string;
};

const projects = [
  {
    id: "01",
    title: "NotePad+",
    summary: "Notes platform with folders, auth, and a clean dashboard feed for organizing personal and team ideas.",
    impact: "Improved note organization flow and reduced friction from idea capture to retrieval.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    category: "fullstack",
    year: "2026",
    status: "LIVE",
    liveUrl: "https://notepad-self-iota.vercel.app/",
    sourceUrl: "https://github.com/hirodinn/notepad",
    image: "https://image.thum.io/get/width/1200/noanimate/https://notepad-self-iota.vercel.app/",
  },
  {
    id: "02",
    title: "CloudForge",
    summary: "Infrastructure-as-code dashboard for creating and shipping multi-environment deployments quickly.",
    impact: "Cut deployment setup time with reusable templates and one-click environment bootstrap.",
    tags: ["Next.js", "TypeScript", "Docker / K8s", "AWS / GCP"],
    category: "tooling",
    year: "2025",
    status: "LIVE",
    liveUrl: "#",
    sourceUrl: "#",
    image: "https://placehold.co/1200x700/0f172a/94a3b8?text=CloudForge",
  },
  {
    id: "03",
    title: "SynthWave",
    summary: "Collaborative music workspace with real-time sessions and model-assisted generation pipelines.",
    impact: "Enabled faster prototype loops for creators by combining AI suggestions with live collaboration.",
    tags: ["TypeScript", "Python / FastAPI", "WebSockets", "Redis"],
    category: "backend",
    year: "2025",
    status: "BETA",
    liveUrl: "#",
    sourceUrl: "#",
    image: "https://placehold.co/1200x700/111827/a78bfa?text=SynthWave",
  },
  {
    id: "04",
    title: "PacketViz",
    summary: "Traffic analysis interface for visualizing suspicious patterns and security events in real time.",
    impact: "Improved anomaly visibility through live graph views and event stream inspection tools.",
    tags: ["React", "TypeScript", "GraphQL", "Docker / K8s"],
    category: "frontend",
    year: "2024",
    status: "DEV",
    liveUrl: "#",
    sourceUrl: "#",
    image: "https://placehold.co/1200x700/0b1020/22d3ee?text=PacketViz",
  },
] as Project[];

const filters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "all", value: "all" },
  { label: "fullstack", value: "fullstack" },
  { label: "frontend", value: "frontend" },
  { label: "backend", value: "backend" },
  { label: "tooling", value: "tooling" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="border border-border bg-card/20 p-3 mb-6"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-muted-foreground mr-1">filter:</span>
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`text-[11px] font-mono px-3 py-1.5 border transition-colors ${
                  activeFilter === filter.value
                    ? "border-primary/50 text-primary bg-primary/10"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="group border border-border bg-card/20 hover:bg-card/50 transition-all duration-300 hover:box-glow overflow-hidden"
            >
              <div className="relative border-b border-border bg-background/40">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-border bg-background/85 text-muted-foreground">
                    {project.id}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-border bg-background/85 text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 border border-primary/40 text-primary bg-background/85 hover:bg-primary/10 transition-colors"
                    aria-label={`Open live site for ${project.title}`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>live</span>
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 border border-border text-foreground bg-background/85 hover:border-primary/30 transition-colors"
                    aria-label={`Open source code for ${project.title}`}
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>code</span>
                  </a>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
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

                <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>

                <div className="mt-3 pl-3 border-l-2 border-primary/25">
                  <p className="text-xs text-foreground/85">
                    <span className="text-primary font-mono text-[10px] uppercase tracking-wide">impact</span>: {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
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

        {filteredProjects.length === 0 && (
          <p className="text-sm text-muted-foreground font-mono">No projects found for this filter.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
