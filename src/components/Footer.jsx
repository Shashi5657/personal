import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: <FaGithub size={20} />, href: "https://github.com/shashi5657", label: "GitHub" },
  { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/shashidharsangepu/", label: "LinkedIn" },
  { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/mr.villain29/", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative mt-10 border-t border-[var(--border)] px-6 py-12 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-2xl font-bold">
              Shashidhar<span className="text-[var(--accent)]">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-[var(--text-muted)]">
              Full Stack Engineer building production-grade software with React,
              Node.js and AWS.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-faint)] md:flex-row">
          <p>© {new Date().getFullYear()} Shashidhar Sangepu. All rights reserved.</p>
          <p className="font-mono text-xs">Built with React · Framer Motion · Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
