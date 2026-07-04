import React from "react";

const experiences = [
  {
  company: "Scalex Technologies",
  role: "Full Stack Developer",
  duration: "Mar 2026 - Present",
  description: `
     Developing and maintaining a scalable mental healthcare platform using Next.js, React.js, Node.js, Express.js, PostgreSQL, Sequelize, and TypeScript.
     Built secure REST APIs with AWS Cognito authentication, Google OAuth, role-based access control, rate limiting, and comprehensive Swagger documentation.
     Integrated Stripe Payment Intents, Stripe Connect, and Stripe Billing to support appointment payments, expert payouts, and subscription management.
     Implemented real-time notifications, chat, and audio/video consultations using Socket.IO and Amazon Chime SDK.
     Designed and deployed production infrastructure on AWS, configuring VPC, EC2, RDS, Application Load Balancer (ALB), and PM2 for reliable application hosting.
     Architected Redux and Redux Persist for multi-role authentication, session persistence, notifications, and multi-step appointment booking workflows.
     Built responsive and reusable UI components using Formik, Yup, TanStack React Table, Framer Motion, and Recharts to deliver an intuitive user experience.
     Developed features for Admin, Expert, and User portals, including appointment scheduling, community interactions, blogs, video content, and secure online consultations.
  `,
},
  {
    company: "CAGEN TECHNOLOGIES",
    role: "Frontend Developer",
    duration: "Jun 2024 - Feb 2026",
    description: `
       Developed a scalable frontend architecture using Next.js, TypeScript, and Ant Design.
       Implemented Context API for authentication and protected routes.
       Designed dynamic form fields with custom validation for multiple input types.
       Integrated Google Maps API for inspector location tracking and polygon mapping.
       Created a modular, reusable table component with an interactive data management system.
       Managed API integrations (GET, POST, DELETE) with dynamic query parameters.
    `,
  },
  {
    company: "HulkHire",
    role: "Frontend Developer",
    duration: "Feb 2024 - Jun 2024",
    description: `
       Built interactive UI components using React.js, Tailwind CSS, and JavaScript.
       Integrated real-time payment status updates with asynchronous API calls and Webhooks.
       Applied lazy loading, code splitting, and rendering optimizations for better performance.
       Used React Hooks for efficient state management and modular code structure.
       Worked on SEO optimization and best practices for progressive web applications (PWA).
    `,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">Experience</h2>
      <div className="relative border-l-4 border-cyan-400 pl-6 space-y-12 max-w-3xl w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-7 top-2 w-5 h-5 bg-cyan-400 rounded-full group-hover:animate-pulse"></div>
            <div className="bg-black/60 p-6 rounded-lg shadow-xl hover:shadow-cyan-500/50 transition duration-300">
              <h3 className="text-xl font-semibold text-cyan-300">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-400">
                {exp.company} • {exp.duration}
              </p>
              <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                {exp.description
                  .trim()
                  .split("\n")
                  .map((point, i) => (
                    <li key={i}>{point.trim()}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
