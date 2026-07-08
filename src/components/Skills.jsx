import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAntdesign,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";
import SectionHeading from "./ui/SectionHeading";
import { EASE, viewport } from "../lib/motion";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "#61dafb", level: 90, cat: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "var(--text)", level: 85, cat: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6", level: 80, cat: "Frontend" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e", level: 90, cat: "Frontend" },
  { name: "Redux", icon: <SiRedux />, color: "#764abc", level: 85, cat: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", level: 90, cat: "Frontend" },
  { name: "Ant Design", icon: <SiAntdesign />, color: "#1677ff", level: 85, cat: "Frontend" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26", level: 95, cat: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6", level: 90, cat: "Frontend" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3", level: 85, cat: "Frontend" },

  { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a", level: 82, cat: "Backend" },
  { name: "Express.js", icon: <SiExpress />, color: "var(--text)", level: 82, cat: "Backend" },
  { name: "Socket.IO", icon: <SiSocketdotio />, color: "var(--text)", level: 78, cat: "Backend" },

  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1", level: 80, cat: "Databases" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248", level: 75, cat: "Databases" },

  { name: "AWS", icon: <FaAws />, color: "#ff9900", level: 78, cat: "Cloud & Tools" },
  { name: "Git", icon: <FaGit />, color: "#f05032", level: 88, cat: "Cloud & Tools" },
];

const categories = ["All", "Frontend", "Backend", "Databases", "Cloud & Tools"];

const SkillCard = ({ skill }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5, ease: EASE }}
    className="spotlight glow-border group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-transform duration-500 hover:-translate-y-1.5"
  >
    <div className="flex items-center gap-3">
      <span
        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--surface-hover)] text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between">
          <span className="truncate font-semibold text-[var(--text)]">
            {skill.name}
          </span>
          <span className="ml-2 font-mono text-xs text-[var(--text-muted)]">
            {skill.level}%
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-hover)]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)]"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? skills : skills.filter((s) => s.cat === filter);

  return (
    <section id="skills" className="relative w-full px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build with"
          subtitle="A full-stack toolkit spanning modern frontend, resilient backends, and cloud infrastructure."
        />

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === cat
                  ? "text-[var(--bg)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="skill-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-[var(--text)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
