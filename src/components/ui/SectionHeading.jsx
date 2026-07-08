import { motion } from "framer-motion";
import { EASE, viewport } from "../../lib/motion";

/**
 * Consistent premium section header: eyebrow label + large gradient title
 * with a per-word staggered reveal, plus an optional subtitle.
 */
const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }) => {
  const words = title.split(" ");
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} gap-4`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]"
        >
          <span className="h-px w-6 bg-[var(--accent)]" />
          {eyebrow}
        </motion.span>
      )}

      <h2 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1">
            <motion.span
              className="inline-block text-gradient"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.07 }}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className={`max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
