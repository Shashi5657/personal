import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiLayers, FiX } from "react-icons/fi";
import project1 from "../images/recallrush.png";
import project2 from "../images/image.png";
import project3 from "../images/movies.png";
import project4 from "../images/cart.png";
import project5 from "../images/notes.png";
import project6 from "../images/tenzies.png";
import project7 from "../images/invest.png";
import project8 from "../images/pomodoro.png";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";
import { EASE, viewport } from "../lib/motion";

const projects = [
  {
    title: "Recall Rush",
    tagline: "Memory match game",
    description: "Match pairs, remember locations, and beat the minimum moves against the clock.",
    image: project1,
    link: "https://recallrush.netlify.app/",
    tech: ["React", "Vite", "CSS"],
    featured: true,
    problem: "Build a genuinely replayable memory game that rewards efficiency, not just luck.",
    approach: "Grid state and card flips are driven by pure React state, with a move counter and timer that push players toward an optimal solution.",
    features: ["Pair-matching engine", "Move & time tracking", "Minimum-moves challenge", "Responsive board"],
  },
  {
    title: "Movies Dashboard",
    tagline: "Streaming UI",
    description: "A Movix-style homepage showcasing trending and popular movies and TV shows.",
    image: project3,
    link: "https://movix-ten-kappa.vercel.app/",
    tech: ["React", "REST API", "Vercel"],
    featured: true,
    problem: "Present live, media-rich content in a fast, cinematic interface.",
    approach: "Consumes a movie REST API with client-side data fetching, then renders trending and popular carousels with lazy-loaded imagery.",
    features: ["Trending & popular feeds", "Media-rich cards", "Responsive layout", "Deployed on Vercel"],
  },
  {
    title: "Pomodoro Timer",
    tagline: "Productivity",
    description: "A focus timer with work-time tracking and pause / reset controls.",
    image: project8,
    link: "https://time-chunker.netlify.app/",
    tech: ["React", "Hooks"],
    problem: "Help users work in focused intervals without fighting a clunky timer.",
    approach: "Built around custom hooks managing interval state, session tracking and clean start/pause/reset transitions.",
    features: ["Work-session tracking", "Pause / reset controls", "Minimal distraction-free UI"],
  },
  {
    title: "Investment Calculator",
    tagline: "Finance tool",
    description: "Project investment growth from user inputs with a year-by-year breakdown.",
    image: project7,
    link: "https://investo-calci.netlify.app/",
    tech: ["React", "Forms"],
    problem: "Make compound-growth projections easy to understand at a glance.",
    approach: "Controlled inputs feed a calculation model that outputs a live projection table as values change.",
    features: ["Live input-driven results", "Year-by-year table", "Compound growth model"],
  },
  {
    title: "Markdown Notes",
    tagline: "Editor",
    description: "A markdown notes app with a live preview pane and list view.",
    image: project5,
    link: "https://recallrush.netlify.app/",
    tech: ["React", "LocalStorage"],
    problem: "Write and organize notes in markdown with instant visual feedback.",
    approach: "A split editor renders markdown to HTML in real time, with notes persisted locally.",
    features: ["Live markdown preview", "List / detail view", "Local persistence"],
  },
  {
    title: "Tenzies Game",
    tagline: "Dice game",
    description: "Roll the dice, freeze matches, and race to make every die the same value.",
    image: project6,
    link: "https://tennziess-game.netlify.app/",
    tech: ["React", "State"],
    problem: "Turn a simple dice mechanic into a satisfying win-condition loop.",
    approach: "Dice are individually freezable pieces of state; a win check runs on every roll to detect completion.",
    features: ["Freeze / re-roll mechanic", "Win detection", "Roll counter"],
  },
  {
    title: "Tic-Tac-Toe",
    tagline: "Classic game",
    description: "Two players battle to align three symbols in a row.",
    image: project2,
    link: "https://tict-tact-toet.netlify.app/",
    tech: ["React", "JavaScript"],
    problem: "Implement clean turn logic and reliable win detection.",
    approach: "Board state drives turn alternation and a winner-check across all winning lines.",
    features: ["Two-player turns", "Win / draw detection", "Reset flow"],
  },
  {
    title: "Add to Cart",
    tagline: "E-commerce UI",
    description: "A tidy shopping interface with add-to-cart interactions.",
    image: project4,
    link: "https://my-groceriiis.netlify.app/",
    tech: ["React", "State"],
    problem: "Model cart state cleanly with add / update interactions.",
    approach: "Cart items live in centralized state with quantity handling and total calculation.",
    features: ["Add-to-cart flow", "Quantity handling", "Live total"],
  },
];

const ProjectCard = ({ project, index, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewport}
    transition={{ duration: 0.7, ease: EASE, delay: (index % 3) * 0.08 }}
    className={project.featured ? "sm:col-span-2 lg:col-span-2" : ""}
  >
    <TiltCard className="spotlight glow-border group h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            project.featured ? "h-56 md:h-72" : "h-48"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-solid)] via-transparent to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 font-mono text-[11px] text-[var(--text)]">
          {project.tagline}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} live`}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass text-[var(--text)] opacity-0 transition-all duration-500 group-hover:opacity-100 hover:text-[var(--accent)]"
        >
          <FiArrowUpRight />
        </a>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-[var(--text)]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-hover)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          >
            <FiExternalLink /> Live Demo
          </a>
          <span className="text-[var(--border-strong)]">•</span>
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
          >
            <FiLayers /> Case Study
          </button>
        </div>
      </div>
    </TiltCard>
  </motion.div>
);

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[var(--border-strong)] bg-[var(--surface-solid)] shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full glass text-[var(--text)] hover:text-[var(--accent)]"
        >
          <FiX />
        </button>
        <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
        <div className="p-6 md:p-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            {project.tagline}
          </span>
          <h3 className="mt-1 font-display text-2xl font-bold text-[var(--text)] md:text-3xl">
            {project.title}
          </h3>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                Problem
              </h4>
              <p className="text-[var(--text)]/90">{project.problem}</p>
            </div>
            <div>
              <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                Approach
              </h4>
              <p className="text-[var(--text)]/90">{project.approach}</p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--text)]/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-hover)] px-3 py-1 font-mono text-xs text-[var(--text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-6 py-3 text-sm font-semibold text-[var(--bg)] transition-transform hover:-translate-y-0.5"
          >
            Visit live project <FiArrowUpRight />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="relative w-full px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've built"
          subtitle="A selection of applications and interactive experiences — click any card for a quick case study."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <CaseStudyModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
