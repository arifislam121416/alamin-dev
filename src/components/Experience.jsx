"use client";

import { useEffect, useRef, useState } from "react";
import { FaLaptopCode, FaCode, FaRocket } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    icon: FaLaptopCode,
    role: "Frontend Web Developer",
    company: "Personal Projects",
    duration: "2024 - Present",
    description:
      "Developed modern, responsive, and user-friendly web applications using React.js, Next.js, Tailwind CSS, and JavaScript. Focused on creating reusable components and premium UI/UX.",
  },
  {
    id: 2,
    icon: FaCode,
    role: "Full Stack Developer",
    company: "Self Learning & Freelance Practice",
    duration: "2025 - Present",
    description:
      "Built complete full-stack applications with Node.js, Express.js, MongoDB, Firebase Authentication, JWT, Stripe Payment, and REST APIs while improving backend architecture and security.",
  },
  {
    id: 3,
    icon: FaRocket,
    role: "Portfolio & Real Projects",
    company: "Personal Development",
    duration: "Ongoing",
    description:
      "Designed and developed real-world projects including TicketHub, MediQueue, and SkillSphere with responsive layouts, role-based dashboards, authentication, and deployment using Vercel.",
  },
];

// Fade + rise an element in once it enters the viewport
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function Experience() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 via-indigo-500/20 to-purple-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Experience
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600 dark:text-gray-400">
            My experience comes from building modern web applications,
            continuously learning new technologies, and solving real-world
            development challenges through personal and full-stack projects.
          </p>
        </div>

        <div ref={ref} className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
                className={`group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-indigo-500/20 dark:border-slate-800 dark:bg-slate-900 ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 text-2xl text-white shadow-md shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {item.role}
                </h3>

                <p className="mt-1 font-semibold text-cyan-600 dark:text-cyan-400">
                  {item.company}
                </p>

                <span className="mt-2 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-600 dark:text-cyan-400">
                  {item.duration}
                </span>

                <p className="mt-5 leading-8 text-slate-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}