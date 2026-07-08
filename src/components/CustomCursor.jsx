import { useEffect, useRef, useState } from "react";

/**
 * Premium custom cursor: a crisp glowing dot + a smoothly-lagging outer ring.
 * Ring enlarges over interactive elements and locks onto their center-ish area.
 * Renders nothing on touch / coarse-pointer devices.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-desktop");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let hovering = false;
    let down = false;
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const target = e.target;
      hovering = !!(
        target.closest &&
        target.closest('a, button, [data-cursor], input, textarea, [role="button"]')
      );
    };
    const onDown = () => (down = true);
    const onUp = () => (down = false);
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const render = () => {
      ring.x += (mouse.x - ring.x) * 0.16;
      ring.y += (mouse.y - ring.y) * 0.16;

      const dot = dotRef.current;
      const r = ringRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%) scale(${down ? 0.6 : 1})`;
      }
      if (r) {
        const scale = hovering ? 1.8 : down ? 0.8 : 1;
        r.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        r.style.borderColor = hovering
          ? "rgba(var(--accent-rgb), 0.9)"
          : "rgba(var(--accent-rgb), 0.4)";
        r.style.background = hovering
          ? "rgba(var(--accent-rgb), 0.08)"
          : "transparent";
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[var(--accent)]"
        style={{ boxShadow: "0 0 10px 2px rgba(var(--accent-rgb), 0.8)" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border"
        style={{ transition: "border-color 0.3s, background 0.3s, width 0.3s, height 0.3s" }}
      />
    </>
  );
};

export default CustomCursor;
