import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      className="py-20 md:py-28 px-6 md:px-8 scroll-mt-20"
      id="contact"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Let's connect
        </motion.h2>
        <motion.p
          className="text-text-muted text-lg mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a project in mind or just want to say hi? I'd love to hear from
          you.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="mailto:hello@example.com"
            className="font-medium text-text hover:text-accent transition-colors"
          >
            hello@example.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-text hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-text hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-text hover:text-accent transition-colors"
          >
            Twitter / X
          </a>
        </motion.div>
        <motion.p
          className="mt-16 text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Designed & built with care · © {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
