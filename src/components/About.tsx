import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="py-20 md:py-28 px-6 md:px-8 scroll-mt-20"
      id="about"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-text-muted text-lg leading-relaxed">
            I'm a developer who cares about craft—clean code, thoughtful UX, and
            the details that make a product feel right.
          </p>
          <p className="text-text-muted text-lg leading-relaxed">
            I work with React, TypeScript, and modern tooling to build fast,
            accessible interfaces. When I'm not coding, I'm usually sketching
            ideas or exploring new tools.
          </p>
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-text-muted">
            <span>Based in — Your City</span>
            <span>Available for projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
