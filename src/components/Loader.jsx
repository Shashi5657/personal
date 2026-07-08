import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "../lib/motion";

/**
 * Smooth page-load intro. Counts to 100 then slides away, revealing the app.
 */
const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf;
    let start;
    const duration = 1400;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(step);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--bg)]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col items-center gap-6"
          >
            <div className="font-mono text-sm uppercase tracking-[0.4em] text-[var(--text-muted)]">
              Shashidhar Sangepu
            </div>
            <div className="text-6xl font-bold text-gradient font-display tabular-nums sm:text-8xl">
              {progress}
              <span className="text-[var(--text-faint)]">%</span>
            </div>
            <div className="h-px w-56 overflow-hidden bg-[var(--border)]">
              <div
                className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
