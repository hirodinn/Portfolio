import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const socialLinks = [
  { label: "github", url: "https://github.com/hirodinn", icon: Github },
  { label: "linkedin", url: "https://www.linkedin.com/in/hirodinn/", icon: Linkedin },
  { label: "twitter/x", url: "https://x.com/hirodinn", icon: Twitter },
  { label: "instagram", url: "https://www.instagram.com/hirodinn_/", icon: Instagram },
  { label: "email", url: "mailto:hirebikila1@gmail.com", icon: Mail },
  { label: "phone", url: "tel:+251972229619", icon: Phone },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && command.trim()) {
      const cmd = command.trim().toLowerCase();
      let response: string;

      if (cmd === "help") {
        response = "Available commands: help, email, social, hire, clear";
      } else if (cmd === "email") {
        response = "→ hirebikila1@gmail.com — Feel free to reach out!";
      } else if (cmd === "social") {
        response = "→ github.com/hirodinn | linkedin.com/in/hirodinn | instagram.com/hirodinn_ | x.com/hirodinn | +251972229619";
      } else if (cmd === "hire") {
        response = "→ I'm currently open to new opportunities! Let's chat.";
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
    <section id="contact" className="py-32 px-4 relative" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <p className="text-xs text-muted-foreground mb-2 font-mono">
            <span className="text-primary">04.</span> // get_in_touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            <span className="text-primary text-glow">$</span> ./contact.sh
          </h2>
          <p className="text-sm text-muted-foreground mb-12 max-w-lg">
            Got a project in mind? Want to collaborate? Or just want to say hi?
            Use the terminal below or reach out through social links.
          </p>
        </motion.div>

        {/* Interactive terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="border border-border bg-card/50 backdrop-blur-sm box-glow"
        >
          <div className="px-4 py-2 border-b border-border flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            </div>
            <span className="text-[10px] text-muted-foreground ml-2">contact — bash</span>
          </div>
          <div className="p-4 font-mono text-sm min-h-[200px]">
            <p className="text-muted-foreground mb-1">Welcome! Type <span className="text-primary">'help'</span> for available commands.</p>
            <div className="space-y-1">
              {output.map((line, i) => (
                <p key={i} className={line.startsWith("$") ? "text-muted-foreground" : "text-primary/80"}>
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
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-wrap gap-4 mt-8 justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 border border-border text-xs text-muted-foreground hover:text-primary hover:border-primary/40 hover:box-glow transition-all duration-300 font-mono"
            >
              <link.icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
