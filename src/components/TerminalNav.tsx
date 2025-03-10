import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "~/home", href: "#hero" },
  { label: "~/about", href: "#about" },
  { label: "~/skills", href: "#skills" },
  { label: "~/projects", href: "#projects" },
  { label: "~/contact", href: "#contact" },
];

const TerminalNav = () => {
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive/80" />
            <span className="w-3 h-3 rounded-full bg-accent/60" />
            <span className="w-3 h-3 rounded-full bg-primary/80" />
          </div>
          <span className="text-xs text-muted-foreground ml-3">
            dev@portfolio:~$
          </span>
          <span className="text-xs text-primary cursor-blink">▊</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <span className="text-xs text-muted-foreground/50">
            {time.toLocaleTimeString("en-US", { hour12: false })}
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xs text-primary"
        >
          {isOpen ? "[x]" : "[≡]"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
            >
              <span className="text-primary/50">→ </span>{item.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default TerminalNav;
