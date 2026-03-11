import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveId(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-8"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      <div
        className={`flex w-full max-w-5xl mx-auto items-center justify-between rounded-xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "bg-bg-elevated/90 border border-border backdrop-blur-sm" : ""
        }`}
      >
        <a
          href="#home"
          className="font-bold text-sm md:text-base text-text hover:text-accent transition-colors"
        >
          <span className="text-text-muted">{"</"}</span>
          <span>Portfolio</span>
          <span className="text-text-muted">{">"}</span>
        </a>
        <ul className="flex items-center gap-6 md:gap-8">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors ${
                  activeId === href.slice(1)
                    ? "text-accent"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
