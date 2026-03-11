import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 md:px-8 md:pt-28"
      id="home"
    >
      <div
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden
      />
      <motion.div
        className="relative max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-mono text-sm text-accent tracking-wide">
          Portfolio
        </span>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Design &</span>
          <span className="block text-accent">Build</span>
        </h1>
        <p className="mt-4 text-lg text-accent font-medium">
          Frontend Developer · Creative Technologist
        </p>
        <p className="mt-3 text-text-muted text-lg max-w-xl">
          I craft interfaces and experiences that feel intentional and alive.
        </p>
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-[var(--radius-card)] bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:brightness-110 hover:-translate-y-0.5"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[var(--radius-card)] border-2 border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-6 md:left-8 flex items-center gap-2 text-text-muted text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span>Scroll</span>
        <span className="w-10 h-px bg-border" />
      </motion.div>
    </section>
  );
}
