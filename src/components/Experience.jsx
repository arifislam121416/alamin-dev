"use client";

import { FaLaptopCode, FaCode, FaRocket } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    role: "Frontend Web Developer",
    company: "Personal Projects",
    duration: "2024 - Present",
    description:
      "Developed modern, responsive, and user-friendly web applications using React.js, Next.js, Tailwind CSS, and JavaScript. Focused on creating reusable components and premium UI/UX.",
  },
  {
    id: 2,
    icon: <FaCode />,
    role: "Full Stack Developer",
    company: "Self Learning & Freelance Practice",
    duration: "2025 - Present",
    description:
      "Built complete full-stack applications with Node.js, Express.js, MongoDB, Firebase Authentication, JWT, Stripe Payment, and REST APIs while improving backend architecture and security.",
  },
  {
    id: 3,
    icon: <FaRocket />,
    role: "Portfolio & Real Projects",
    company: "Personal Development",
    duration: "Ongoing",
    description:
      "Designed and developed real-world projects including TicketHub, MediQueue, and SkillSphere with responsive layouts, role-based dashboards, authentication, and deployment using Vercel.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 font-semibold text-cyan-500">
            Experience
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            My Professional Journey
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600 dark:text-gray-400">
            My experience comes from building modern web applications,
            continuously learning new technologies, and solving real-world
            development challenges through personal and full-stack projects.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 text-2xl text-white">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.role}
              </h3>

              <p className="mt-1 font-semibold text-cyan-500">
                {item.company}
              </p>

              <span className="mt-2 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-500">
                {item.duration}
              </span>

              <p className="mt-5 leading-8 text-slate-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}