import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiAmazon,
} from "react-icons/si";
import profilePic from "../images/prof.jpg";
import CV from "../images/Shashidhar_2yrs_Resume.pdf";
import { EASE } from "../lib/motion";
import useTypewriter from "../hooks/useTypewriter";

const roles = [
  "Full Stack Engineer",
  "React & Next.js Expert",
  "Node.js Backend Developer",
  "AWS Cloud Practitioner",
];

const floatingTech = [
  { icon: <SiReact />, className: "-left-6 top-6", color: "#61dafb", delay: 0 },
  { icon: <SiNextdotjs />, className: "-right-8 top-2", color: "var(--text)", delay: -2 },
  { icon: <SiNodedotjs />, className: "-left-10 bottom-16", color: "#3c873a", delay: -4 },
  { icon: <SiAmazon />, className: "-right-10 bottom-8", color: "#ff9900", delay: -1 },
  { icon: <SiTypescript />, className: "right-8 -bottom-6", color: "#3178c6", delay: -3 },
  { icon: <SiPostgresql />, className: "left-6 -top-8", color: "#4169e1", delay: -5 },
];

const socials = [
  { icon: <FiGithub />, href: "https://github.com/shashi5657", label: "GitHub" },
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/shashidharsangepu/", label: "LinkedIn" },
  { icon: <FiMail />, href: "mailto:sangepushashidhar@gmail.com", label: "Email" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const Home = () => {
  const typed = useTypewriter(roles);
  const areaRef = useRef(null);

  // Mouse-reactive parallax for the portrait
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 15 });

  const onMouseMove = (e) => {
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6 pt-28 pb-16 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center md:text-left"
        >
          <motion.div variants={item} className="mb-6 flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Shashidhar
            <br />
            <span className="text-gradient-animated">Sangepu</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 flex h-8 items-center justify-center gap-2 text-xl font-medium text-[var(--text-muted)] md:justify-start md:text-2xl"
          >
            <span className="hidden h-px w-8 bg-[var(--accent)] md:inline-block" />
            <span className="caret text-[var(--text)]">{typed}</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:mx-0 md:text-lg"
          >
            I build{" "}
            <span className="text-[var(--text)]">production-grade software</span> —
            scalable full-stack applications with React, Next.js & Node.js,
            backed by secure APIs, Stripe payments, and cloud infrastructure on
            AWS.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <a
              href="#portfolio"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--text)] px-6 py-3 text-sm font-semibold text-[var(--bg)] transition-transform hover:-translate-y-0.5"
            >
              View my work
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={CV}
              download
              className="glow-border inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              <FiDownload /> Download CV
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center justify-center gap-3 md:justify-start"
          >
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
          </motion.div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          ref={areaRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onLeave}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="relative mx-auto flex aspect-square w-[280px] items-center justify-center sm:w-[340px] md:w-[400px]"
          style={{ perspective: 1000 }}
        >
          {/* glow ring */}
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--accent),var(--accent-2),var(--accent-3),var(--accent))] opacity-40 blur-2xl" />
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="relative h-[78%] w-[78%]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3)] p-[2px]">
              <div className="h-full w-full overflow-hidden rounded-[calc(2rem-2px)] bg-[var(--surface-solid)]">
                <img
                  src={profilePic}
                  alt="Shashidhar Sangepu"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* floating tech badges */}
            {floatingTech.map((t, i) => (
              <div
                key={i}
                className={`absolute ${t.className} grid h-12 w-12 place-items-center rounded-2xl text-2xl glass shadow-lg animate-float-slow`}
                style={{ color: t.color, animationDelay: `${t.delay}s`, transform: "translateZ(60px)" }}
              >
                {t.icon}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-faint)] md:flex"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-[var(--border-strong)] p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-[var(--accent)]"
          />
        </span>
      </motion.a>
    </section>
  );
};

export default Home;
