import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "years_experience", value: "5+", icon: "⚡" },
  { label: "projects_shipped", value: "40+", icon: "🚀" },
  { label: "cups_of_coffee", value: "∞", icon: "☕" },
  { label: "commits_this_year", value: "1.2k", icon: "📦" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-4 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-muted-foreground mb-2 font-mono">
            <span className="text-primary">01.</span> // about_me
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            <span className="text-primary text-glow">$</span> whoami
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Terminal bio */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border border-border bg-card/50 backdrop-blur-sm">
              <div className="px-4 py-2 border-b border-border flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground">bash — 80×24</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-3 leading-relaxed">
                <p><span className="text-primary">→</span> <span className="text-muted-foreground">Full-stack developer with a passion for building</span></p>
                <p><span className="text-muted-foreground">  performant, accessible web applications.</span></p>
                <p className="pt-2"><span className="text-primary">→</span> <span className="text-muted-foreground">I specialize in React, Node.js, and cloud</span></p>
                <p><span className="text-muted-foreground">  infrastructure. I love turning complex problems</span></p>
                <p><span className="text-muted-foreground">  into elegant, user-friendly solutions.</span></p>
                <p className="pt-2"><span className="text-primary">→</span> <span className="text-muted-foreground">When I'm not coding, you'll find me contributing</span></p>
                <p><span className="text-muted-foreground">  to open source, writing technical articles, or</span></p>
                <p><span className="text-muted-foreground">  exploring new technologies over coffee.</span></p>
                <p className="pt-4 text-primary/60">
                  dev@portfolio:~$ <span className="cursor-blink">▊</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="md:col-span-2 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="border border-border bg-card/30 p-4 hover:box-glow transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <span className="text-2xl font-display font-bold text-primary text-glow block">{stat.value}</span>
                <span className="text-[10px] text-muted-foreground mt-1 block">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
