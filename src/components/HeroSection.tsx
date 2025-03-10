import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "System Architect",
  "Open Source Contributor",
  "Problem Solver",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const codeLines = [
    { prefix: "const", name: " developer", op: " = {", color: "text-neon-cyan" },
    { prefix: "  name:", value: ' "Alex Chen"', comma: ",", color: "text-primary" },
    { prefix: "  location:", value: ' "San Francisco"', comma: ",", color: "text-primary" },
    { prefix: "  passion:", value: ' "Building the Future"', comma: ",", color: "text-neon-purple" },
    { prefix: "  coffee:", value: " true", comma: ",", color: "text-accent" },
    { prefix: "}", value: "", comma: ";", color: "" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg scanlines">
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, Math.random() * -200, Math.random() * 200],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs text-muted-foreground mb-4 tracking-widest uppercase">
              // Welcome to my digital space
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-2 glitch-text">
              Hello<span className="text-primary text-glow">_</span>World
            </h1>
            <div className="h-8 mt-4 mb-6">
              <span className="text-lg text-neon-cyan font-mono">
                {">"} {displayText}
                <span className="cursor-blink text-primary">▊</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              I craft elegant digital experiences with clean code and creative solutions. 
              Specializing in scalable web applications that push boundaries.
            </p>
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-2.5 text-sm bg-primary text-primary-foreground font-mono box-glow hover:brightness-110 transition-all"
              >
                view_projects()
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-2.5 text-sm border border-primary text-primary font-mono hover:bg-primary/10 transition-all"
              >
                contact_me()
              </button>
            </div>
          </motion.div>

          {/* Right: Code block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="border border-border bg-card/80 backdrop-blur-sm box-glow">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="text-[10px] text-muted-foreground ml-2">developer.ts</span>
              </div>
              <div className="p-4 font-mono text-sm">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="leading-7"
                  >
                    <span className="text-muted-foreground/40 mr-4 select-none text-xs">{i + 1}</span>
                    <span className="text-neon-cyan">{line.prefix}</span>
                    <span className={line.color}>{line.name || ""}{line.value || ""}</span>
                    <span className={line.color}>{line.op || ""}</span>
                    <span className="text-muted-foreground">{line.comma || ""}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-muted-foreground/50 font-mono">scroll_down ↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
