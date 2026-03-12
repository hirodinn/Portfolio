import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "years_experience", value: "5+", icon: "⚡" },
  { label: "projects_shipped", value: "40+", icon: "🚀" },
  { label: "songs_on_repeat", value: "∞", icon: "🎵" },
  { label: "commits_this_year", value: "1.2k", icon: "📦" },
  { label: "response_time", value: "4h", icon: "⏱️" },
  { label: "global_collabs", value: "15+", icon: "🌍" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output, command]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && command.trim()) {
      const cmd = command.trim().toLowerCase();
      let response: string;

      if (cmd === "help") {
        response = "Available commands: help, bio, stack, hobbies, music, location, social, email, hire, availability, clear";
      } else if (cmd === "bio") {
        response = "→ Software engineer focused on clean, scalable, and user-centered digital products.";
      } else if (cmd === "stack") {
        response = "→ React | TypeScript | Node.js | Cloud | Modern CSS";
      } else if (cmd === "hobbies") {
        response = "→ Music production, listening sessions, open-source exploration, and side projects.";
      } else if (cmd === "music") {
        response = "→ Playlist status: J. Cole for deep focus, Teddy Afro for instant motivation — if both play back-to-back, deploy speed increases by 2x 😄";
      } else if (cmd === "location") {
        response = "→ Addis Ababa, Ethiopia";
      } else if (cmd === "email") {
        response = "→ hirebikila1@gmail.com — Feel free to reach out!";
      } else if (cmd === "social") {
        response = "→ github.com/hirodinn | linkedin.com/in/hirodinn | instagram.com/hirodinn_ | x.com/hirodinn | +251972229619";
      } else if (cmd === "hire") {
        response = "→ I'm currently open to new opportunities! Let's chat.";
      } else if (cmd === "availability") {
        response = "→ Usually responds within 4 hours.";
      } else if (cmd === "clear") {
        setOutput([]);
        setCommand("");
        return;
      } else {
        response = `command not found: ${cmd}. Type 'help' for available commands.`;
      }

      setOutput((prev) => [...prev, `$ ${command}`, response]);
      setCommand("");
    }
  };

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
                <p><span className="text-muted-foreground">  exploring new technologies with music on repeat.</span></p>
              </div>
            </div>

            <div className="border border-border bg-card/50 backdrop-blur-sm box-glow mt-4">
              <div className="px-4 py-2 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="text-[10px] text-muted-foreground ml-2">contact — bash</span>
              </div>
              <div ref={terminalRef} className="p-4 font-mono text-sm h-[280px] overflow-y-auto [scrollbar-color:hsl(var(--primary))_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/60">
                <p className="text-muted-foreground mb-1">This is interactive: type a command and press Enter.</p>
                <p className="text-muted-foreground mb-2">Start with <span className="text-primary">help</span> for available commands.</p>
                <div className="space-y-1">
                  {output.map((line, i) => (
                    <p key={i} className={`${line.startsWith("$") ? "text-muted-foreground" : "text-primary/80"} break-words`}>
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-primary/60 mr-2">visitor@portfolio:~$</span>
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleCommand}
                    className="flex-1 bg-transparent outline-none text-foreground caret-primary"
                    placeholder="type a command..."
                    autoComplete="off"
                  />
                </div>
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
