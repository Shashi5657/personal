import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import CV from "../images/Shashidhar_2yrs_Resume.pdf";
import { EASE, viewport } from "../lib/motion";

const info = [
  {
    icon: <FiMail />,
    label: "Email",
    value: "sangepushashidhar@gmail.com",
    href: "mailto:sangepushashidhar@gmail.com",
  },
  { icon: <FiMapPin />, label: "Location", value: "India · Remote-friendly" },
];

const socials = [
  { icon: <FiGithub />, href: "https://github.com/shashi5657", label: "GitHub" },
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/shashidharsangepu/", label: "LinkedIn" },
  { icon: <FiMail />, href: "mailto:sangepushashidhar@gmail.com", label: "Email" },
];

const Field = ({ label, ...props }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
      {label}
    </span>
    {props.textarea ? (
      <textarea
        {...props}
        className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition-colors placeholder:text-[var(--text-faint)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
      />
    ) : (
      <input
        {...props}
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition-colors placeholder:text-[var(--text-faint)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
      />
    )}
  </label>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2600);
  };

  return (
    <section id="contact" className="relative w-full px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something"
          subtitle="Have a project, a role, or just want to say hi? My inbox is always open."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: info */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for new opportunities
              </div>
            </Reveal>

            {info.map((c, i) => (
              <Reveal key={c.label} delay={i + 1}>
                <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent-3)]/15 text-xl text-[var(--accent)]">
                    {c.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-[var(--text-faint)]">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="block truncate font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="font-medium text-[var(--text)]">{c.value}</div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={3}>
              <div className="flex flex-wrap items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg text-[var(--text-muted)] transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {s.icon}
                  </a>
                ))}
                <a
                  href={CV}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)]"
                >
                  <FiDownload /> Resume
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE }}
            className="glow-border relative space-y-5 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Your Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jane Doe"
              />
              <Field
                label="Your Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="jane@company.com"
              />
            </div>
            <Field
              label="Message"
              textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
            />
            <button
              type="submit"
              disabled={sent}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--text)] px-6 py-3.5 font-semibold text-[var(--bg)] transition-transform hover:-translate-y-0.5 disabled:opacity-80"
            >
              {sent ? (
                <>
                  <FiCheck /> Message sent!
                </>
              ) : (
                <>
                  Send Message
                  <FiSend className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
