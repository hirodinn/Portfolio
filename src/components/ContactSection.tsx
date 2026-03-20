import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Github, Instagram, Linkedin, LoaderCircle, Mail, Phone, SendHorizonal, Twitter } from "lucide-react";

const socialLinks = [
  { label: "github", url: "https://github.com/hirodinn", icon: Github },
  { label: "linkedin", url: "https://www.linkedin.com/in/hirodinn/", icon: Linkedin },
  { label: "twitter/x", url: "https://x.com/hirodinn", icon: Twitter },
  { label: "instagram", url: "https://www.instagram.com/hirodinn_/", icon: Instagram },
  { label: "email", url: "mailto:hirebikila1@gmail.com", icon: Mail },
  { label: "phone", url: "tel:+251972229619", icon: Phone },
];

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sendState, setSendState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    companyWebsite: "", // honeypot
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.companyWebsite) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSendState("error");
      setStatusMessage("Please fill name, email, and message.");
      return;
    }

    setSendState("sending");
    setStatusMessage("sending...");

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        setSendState("error");
        setStatusMessage("Form is not configured yet. Please try again later.");
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: formData.name,
          subject: formData.subject?.trim() || "New portfolio message",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSendState("success");
        setStatusMessage("message sent successfully — I will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "", companyWebsite: "" });
        return;
      }

      setSendState("error");
      setStatusMessage(result.message || "Failed to send message. Please try again.");
    } catch {
      setSendState("error");
      setStatusMessage("Network error. Please try again in a moment.");
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <p className="text-xs text-muted-foreground mb-2 font-mono">
            <span className="text-primary">05.</span> // get_in_touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            <span className="text-primary text-glow">$</span> ./contact.sh
          </h2>
          <p className="text-sm text-muted-foreground mb-12 max-w-2xl">
            Got a project in mind? Want to collaborate? Or just want to say hi?
            Use the form to send a message directly.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Send message form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="border border-border bg-card/50 backdrop-blur-sm box-glow p-5 md:p-6"
          >
            <p className="text-xs text-muted-foreground font-mono mb-4">
              <span className="text-primary">$</span> send_message()
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[11px] tracking-wide font-mono text-muted-foreground uppercase">name</label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[11px] tracking-wide font-mono text-muted-foreground uppercase">email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="hirebikila1@gmail.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-[11px] tracking-wide font-mono text-muted-foreground uppercase">subject</label>
                <input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                  className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Project collaboration"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[11px] tracking-wide font-mono text-muted-foreground uppercase">message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  className="w-full resize-none rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              <input
                type="text"
                value={formData.companyWebsite}
                onChange={(e) => setFormData((prev) => ({ ...prev, companyWebsite: e.target.value }))}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={sendState === "sending"}
                className="inline-flex items-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-4 py-2.5 text-xs font-mono text-primary hover:bg-primary/20 hover:box-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sendState === "sending" ? (
                  <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <SendHorizonal className="h-3.5 w-3.5" />
                )}
                <span>send_message()</span>
              </button>

              <p className={`text-[11px] font-mono ${sendState === "error" ? "text-destructive" : sendState === "success" ? "text-primary" : "text-muted-foreground"}`}>
                {statusMessage || "Usually replies within 24h."}
              </p>
            </form>
          </motion.div>
        </div>

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
