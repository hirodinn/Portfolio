import React, { useState, type FormEvent } from 'react';
import { CONTACT_DATA } from '@/data/portfolioData';
import { Loader2, Check, ArrowUp, Copy, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [sendState, setSendState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    companyWebsite: '', // honeypot
  });

  const copyEmail = () => {
    const email = CONTACT_DATA.email;
    const onSuccess = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    try {
      navigator.clipboard.writeText(email).then(onSuccess, () => {
        window.location.href = `mailto:${email}`;
      });
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('git')) return <FaGithub size={14} className="contact-social-brand-icon" />;
    if (l.includes('link')) return <FaLinkedin size={14} className="contact-social-brand-icon" />;
    if (l.includes('twit') || l.includes('x')) return <FaXTwitter size={13} className="contact-social-brand-icon" />;
    if (l.includes('insta')) return <FaInstagram size={14} className="contact-social-brand-icon" />;
    return null;
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.companyWebsite) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSendState('error');
      setStatusMessage('Please fill in all fields.');
      return;
    }

    setSendState('sending');
    setStatusMessage('Sending message...');

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        setSendState('error');
        setStatusMessage('Form service is not configured yet. Please add VITE_WEB3FORMS_KEY in Vercel.');
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: formData.name,
          subject: `Portfolio Message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSendState('success');
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '', companyWebsite: '' });
      } else {
        setSendState('error');
        setStatusMessage(result.message || 'Failed to send message.');
      }
    } catch {
      setSendState('error');
      setStatusMessage('Network error. Please try again.');
    }
  };

  return (
    <footer className="contact-hero-section" id="contact">
      <div className="contact-inner-container">
        {/* Main 2-Column Split: Editorial Typography on Left, Minimal Form on Right */}
        <div className="contact-main-grid">
          {/* Left Column: Bold statement, direct email, and social connections */}
          <div className="contact-editorial-col">
            <div className="contact-availability-tag">
              <span className="contact-live-dot" />
              <span>Available for new projects & roles</span>
            </div>

            <h2 className="contact-editorial-title">
              Let’s talk about your next <em>project</em>.
            </h2>

            <p className="contact-editorial-sub">
              Whether you have an open role, need help shipping a project, or want to discuss technical ideas, feel free to reach out.
            </p>

            <div className="contact-channels-box">
              <div className="contact-email-chip">
                <a href={`mailto:${CONTACT_DATA.email}`} className="contact-email-anchor">
                  {CONTACT_DATA.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="contact-copy-pill"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="contact-social-row">
                {CONTACT_DATA.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    {getSocialIcon(s.label)}
                    <span>{s.label}</span>
                    <ArrowUpRight size={13} className="contact-arrow-icon" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Modern Floating Form */}
          <div className="contact-form-col">
            <div className="contact-card-surface">
              <form onSubmit={handleFormSubmit} className="contact-clean-form">
                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    placeholder="Tell me about your project or team..."
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  />
                </div>

                {/* Honeypot field */}
                <input
                  type="text"
                  value={formData.companyWebsite}
                  onChange={(e) => setFormData((p) => ({ ...p, companyWebsite: e.target.value }))}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="contact-actions-row">
                  <button
                    type="submit"
                    disabled={sendState === 'sending'}
                    className="contact-primary-btn"
                  >
                    {sendState === 'sending' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : sendState === 'success' ? (
                      <>
                        <Check size={16} />
                        <span>Sent</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowUpRight size={16} />
                      </>
                    )}
                  </button>

                  {statusMessage && (
                    <span className={`contact-status-feedback ${sendState}`} role="status">
                      {statusMessage}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="contact-bar-bottom">
          <div className="contact-bar-meta">
            <span>{CONTACT_DATA.copyright}</span>
            <span className="contact-bar-separator">/</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>

          <button
            type="button"
            className="contact-top-pill"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className="contact-top-arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
