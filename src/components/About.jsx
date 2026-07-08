import { motion } from "framer-motion";
import {
  FiDownload,
  FiShield,
  FiCreditCard,
  FiRadio,
  FiCloud,
} from "react-icons/fi";
import secondImg from "../images/pc-setup.jpeg";
import LeftSocialBar from "./LeftSocialbar";
import CV from "../images/Shashidhar_2yrs_Resume.pdf";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";
import { EASE, viewport } from "../lib/motion";

const stats = [
  { to: 2, suffix: "+", label: "Years Experience" },
  { to: 3, suffix: "+", label: "Companies" },
  { to: 3, suffix: "+", label: "Projects Shipped" },
];

const strengths = [
  {
    icon: <FiShield />,
    title: "Secure APIs & Auth",
    desc: "REST APIs with AWS Cognito, Google OAuth, role-based access & rate limiting.",
  },
  {
    icon: <FiCreditCard />,
    title: "Payments",
    desc: "Stripe Payment Intents, Connect & Billing for payouts and subscriptions.",
  },
  {
    icon: <FiRadio />,
    title: "Real-time Systems",
    desc: "Live chat, notifications & audio/video via Socket.IO and Amazon Chime SDK.",
  },
  {
    icon: <FiCloud />,
    title: "Cloud Infrastructure",
    desc: "Deploying on AWS — VPC, EC2, RDS, ALB, IAM & PM2 process management.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full px-6 py-24 md:px-16 md:py-32"
    >
      <LeftSocialBar />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering meets craft"
          subtitle="Turning complex problems into reliable, high-performance products."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Image */}
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="glow-border spotlight group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-2">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={secondImg}
                  alt="Workspace"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            {/* floating stat chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="absolute -bottom-5 -right-3 glass-strong rounded-2xl border px-5 py-3 shadow-xl"
            >
              <div className="text-2xl font-bold text-gradient font-display">
                <Counter to={2} suffix="+" />
              </div>
              <div className="text-xs text-[var(--text-muted)]">
                Years building
              </div>
            </motion.div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
                Full Stack Developer with{" "}
                <span className="text-[var(--text)]">2+ years</span> building
                scalable, production-ready web applications using{" "}
                <span className="text-[var(--text)]">
                  Next.js, React, Node.js, Express, PostgreSQL, Sequelize &
                  TypeScript
                </span>
                . I architect secure REST APIs, implement authentication with
                AWS Cognito, integrate complex payment workflows with Stripe,
                and build real-time apps with Socket.IO & Amazon Chime SDK.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
                Hands-on with deploying and managing cloud infrastructure on AWS
                (EC2, RDS, VPC, ALB, PM2, IAM), with a strong grasp of scalable
                architecture, state management with Redux, and modern frontend
                practices. Passionate about reliable, high-performance software
                — and always learning what's next.
              </p>
            </Reveal>

            {/* Stats */}
            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: EASE },
                    },
                  }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center"
                >
                  <div className="font-display text-3xl font-bold text-gradient md:text-4xl">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-muted)] md:text-sm">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Reveal delay={2} className="mt-8">
              <a
                href={CV}
                download
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-6 py-3 text-sm font-semibold text-[var(--bg)] transition-transform hover:-translate-y-0.5"
              >
                <FiDownload className="transition-transform group-hover:translate-y-0.5" />
                Download CV
              </a>
            </Reveal>
          </div>
        </div>

        {/* Core strengths */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {strengths.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: EASE },
                },
              }}
              className="spotlight glow-border group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent-3)]/15 text-2xl text-[var(--accent)] transition-transform duration-500 group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[var(--text)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
