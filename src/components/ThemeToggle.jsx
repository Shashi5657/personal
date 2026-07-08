import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const getInitial = () =>
  document.documentElement.getAttribute("data-theme") || "dark";

/**
 * Animated light/dark switch. Persists choice and updates the root data-theme,
 * which drives every CSS custom property across the site.
 */
const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      <motion.span
        key={theme}
        initial={{ y: 18, opacity: 0, rotate: -30 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="grid place-items-center"
      >
        {isDark ? <FiMoon size={17} /> : <FiSun size={17} />}
      </motion.span>
    </button>
  );
};

export default ThemeToggle;
