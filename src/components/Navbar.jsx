import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { EASE } from "../lib/motion";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navigationLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? "glass-strong border shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]"
              : "border border-transparent"
          } mx-4 md:mx-auto`}
        >
          <a
            href="#home"
            className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3)] text-sm font-bold text-black">
              S
            </span>
            <span className="hidden sm:inline">
              Shashidhar
              <span className="text-[var(--accent)]">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navigationLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    className={`relative block rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[var(--text)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-[var(--surface-hover)] ring-1 ring-inset ring-[var(--border-strong)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full bg-[var(--text)] px-4 py-1.5 text-sm font-semibold text-[var(--bg)] transition-transform hover:-translate-y-0.5 sm:inline-block"
            >
              Let's talk
            </a>
            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text)] md:hidden"
              onClick={() => setIsOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        {/* scroll progress */}
        <motion.div
          style={{ scaleX: progress }}
          className="mx-auto mt-2 h-px w-[92%] origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)]"
        />
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[var(--bg)]/95 px-8 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navigationLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, ease: EASE }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-[var(--border)] py-4 font-display text-3xl font-semibold text-[var(--text)]"
                  >
                    <span className="mr-3 font-mono text-sm text-[var(--accent)]">
                      0{i + 1}
                    </span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
