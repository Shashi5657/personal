import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub size={18} />, href: "https://github.com/shashi5657", label: "GitHub" },
  { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/shashidharsangepu/", label: "LinkedIn" },
  { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/mr.villain29/", label: "Instagram" },
];

const LeftSocialBar = () => {
  return (
    <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-4 lg:flex">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="group grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {s.icon}
        </a>
      ))}
      <span className="mt-2 h-24 w-px bg-gradient-to-b from-[var(--border-strong)] to-transparent" />
    </div>
  );
};

export default LeftSocialBar;
