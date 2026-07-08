import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiBriefcase, FiChevronDown, FiMapPin } from "react-icons/fi";
import SectionHeading from "./ui/SectionHeading";
import { EASE, viewport } from "../lib/motion";

const experiences = [
  {
    company: "Scalex Technologies",
    role: "Full Stack Developer",
    duration: "Mar 2026 - Present",
    current: true,
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "AWS",
      "Stripe",
      "Socket.IO",
    ],
    points: [
      "Developing and maintaining a scalable mental healthcare platform using Next.js, React, Node.js, Express, PostgreSQL, Sequelize and TypeScript.",
      "Built secure REST APIs with AWS Cognito authentication, Google OAuth, role-based access control, rate limiting and Swagger documentation.",
      "Integrated Stripe Payment Intents, Connect and Billing for appointment payments, expert payouts and subscription management.",
      "Implemented real-time notifications, chat and audio/video consultations using Socket.IO and Amazon Chime SDK.",
      "Designed and deployed production infrastructure on AWS — VPC, EC2, RDS, Application Load Balancer and PM2.",
      "Architected Redux and Redux Persist for multi-role auth, session persistence, and multi-step booking workflows.",
      "Built reusable UI with Formik, Yup, TanStack Table, Framer Motion and Recharts across Admin, Expert and User portals.",
    ],
  },
  {
    company: "Cagen Technologies",
    role: "Full Stack Developer",
    duration: "Jun 2024 - Feb 2026",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Ant Design",
      "Redis",
    ],
    points: [
      "Developed enterprise-grade web applications using React, Next.js, Node.js, Express, MongoDB, TypeScript and Ant Design.",
      "Built scalable REST APIs with JWT authentication, role-based access control, Zod validation and Redis caching.",
      "Designed configuration-driven forms and reusable UI components, enabling rapid feature development with minimal code changes.",
      "Integrated Google Maps API for inspector location tracking, polygon mapping and real-time visualization.",
      "Automated certificate generation using Puppeteer, dynamically producing PDF documents from application data.",
      "Managed complex state and server-side data with TanStack Query, Redux and Context API in an Agile team.",
    ],
  },
  {
    company: "HulkHire Technologies",
    role: "Frontend Developer Intern",
    duration: "Feb 2024 - Jun 2024",
    tech: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    points: [
      "Developed responsive user interfaces using React, JavaScript, HTML, CSS and Tailwind CSS.",
      "Integrated REST APIs for seamless communication between frontend and backend services.",
      "Built reusable components and custom React Hooks to improve maintainability and development speed.",
      "Optimized performance with lazy loading, code splitting and modern React best practices.",
      "Collaborated with senior developers on feature development, debugging and code reviews.",
    ],
  },
];

const TimelineItem = ({ exp, index }) => {
  const [open, setOpen] = useState(index === 0);
  const preview = exp.points.slice(0, 2);
  const rest = exp.points.slice(2);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
      className="relative pl-12 md:pl-16"
    >
      {/* node */}
      <span className="absolute left-[9px] top-1.5 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] md:left-[13px]">
        <span
          className={`h-2.5 w-2.5 rounded-full bg-[var(--accent)] ${
            exp.current ? "animate-pulse-ring" : ""
          }`}
        />
      </span>

      <div className="spotlight glow-border group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-transform duration-500 hover:-translate-y-1 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-[var(--accent)]">
              <FiBriefcase size={15} />
              <h3 className="font-display text-xl font-semibold text-[var(--text)]">
                {exp.role}
              </h3>
            </div>
            <p className="mt-1 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <FiMapPin size={13} /> {exp.company}
            </p>
          </div>
          <span
            className={`whitespace-nowrap rounded-full border px-3 py-1 font-mono text-xs ${
              exp.current
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                : "border-[var(--border)] bg-[var(--surface-hover)] text-[var(--text-muted)]"
            }`}
          >
            {exp.duration}
          </span>
        </div>

        <ul className="mt-4 space-y-2.5">
          {preview.map((p, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-[var(--text-muted)]"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
              {p}
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {open && rest.length > 0 && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="space-y-2.5 overflow-hidden"
            >
              {rest.map((p, i) => (
                <li
                  key={i}
                  className="mt-2.5 flex gap-3 text-sm leading-relaxed text-[var(--text-muted)]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  {p}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* tech badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-hover)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>

        {rest.length > 0 && (
          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--text)]"
          >
            {open ? "Show less" : `Show ${rest.length} more`}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown />
            </motion.span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Career"
          title="Where I've worked"
          subtitle="Building production software across healthcare, enterprise and startup teams."
        />

        <div className="relative mt-16">
          {/* animated vertical line */}
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE }}
            className="absolute left-[9px] top-0 h-full w-px origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)] to-transparent md:left-[13px]"
          />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
