import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Number count-up that runs once when scrolled into view.
 */
const Counter = ({ to = 0, duration = 1800, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    let start;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.round(easeOutExpo(progress) * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

export default Counter;
