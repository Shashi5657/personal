import { useEffect, useRef } from "react";

/**
 * Global animated backdrop:
 *  - CSS aurora blobs (floating gradients)
 *  - a mouse-reactive particle/constellation canvas
 *  - a subtle grid + noise overlay
 * Fixed behind all content, pointer-events none, perf-conscious.
 */
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, dpr;
    let particles = [];
    const mouse = { x: -9999, y: -9999 };

    const readAccent = () => {
      const rgb = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-rgb")
        .trim();
      return rgb || "34, 211, 238";
    };
    let accent = readAccent();

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((w * h) / 20000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
      accent = readAccent();
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // subtle mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130) {
          const force = (130 - dist) / 130;
          p.x += (dx / dist) * force * 1.4;
          p.y += (dy / dist) * force * 1.4;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent}, 0.55)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${accent}, ${0.14 * (1 - d / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(step);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    step();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden noise">
      {/* base wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(var(--accent-rgb), 0.10), transparent 60%)",
        }}
      />
      {/* aurora blobs */}
      <div className="absolute -left-40 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.22),transparent_60%)] blur-3xl animate-blob" />
      <div
        className="absolute right-[-10%] top-[20%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_60%)] blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[25%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_60%)] blur-3xl animate-blob"
        style={{ animationDelay: "-12s" }}
      />
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-70 [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      {/* particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
};

export default AnimatedBackground;
