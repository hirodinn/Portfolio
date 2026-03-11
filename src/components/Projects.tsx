import { motion } from "framer-motion";

const projects = [
  {
    id: "1",
    title: "Project Alpha",
    description:
      "A modern dashboard with real-time analytics and custom data viz.",
    tags: ["React", "TypeScript", "D3"],
    href: "#",
    featured: true,
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description: "Full-stack store with cart, checkout, and admin panel.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    href: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Design System",
    description: "Component library and tokens for consistent product UI.",
    tags: ["Storybook", "Tailwind", "Figma"],
    href: "#",
    featured: false,
  },
  {
    id: "4",
    title: "Portfolio CMS",
    description: "Headless CMS and static site for creatives.",
    tags: ["Sanity", "Astro", "Vercel"],
    href: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      className="py-20 md:py-28 px-6 md:px-8 scroll-mt-20"
      id="work"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Selected work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className={`rounded-[var(--radius-card)] border border-border bg-bg-elevated p-6 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${
                project.featured ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <a href={project.href} className="block group">
                <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-text-muted text-sm leading-relaxed">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs text-text-muted border border-border rounded-full px-3 py-1"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
