import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "CSS / Sass",
  "Figma",
  "Git",
  "Vite",
  "REST APIs",
  "Accessibility",
];

export default function Skills() {
  return (
    <section
      className="py-20 md:py-28 px-6 md:px-8 scroll-mt-20"
      id="skills"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Tools & skills
        </motion.h2>
        <motion.ul
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
            hidden: {},
          }}
        >
          {skills.map((skill, i) => (
            <motion.li
              key={skill}
              className="rounded-full border border-border px-4 py-2.5 text-sm text-text-muted transition-colors hover:border-accent hover:text-accent"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
