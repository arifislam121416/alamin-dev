"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "TicketHub",
    image: "/tickethub.png",
    description:
      "A full-stack ticket booking platform where users can browse and book transport tickets, while vendors and admins manage listings.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Node.js"],
  },
  {
    id: 2,
    title: "MediQueue",
    image: "/mediqueue.png",
    description:
      "A doctor appointment booking platform with authentication, booking management, and responsive dashboard.",
    tech: ["React", "Express", "MongoDB", "Firebase"],
  },
  {
    id: 3,
    title: "SkillSphere",
    image: "/skillsphere.png",
    description:
      "An online learning platform where students can browse courses and instructors can manage tutorials.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
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

function ProjectCard({ project, index }) {
  return (
    <div
      style={{ transitionDelay: `${index * 100}ms` }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-indigo-500/20 dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/0 to-slate-950/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-slate-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-500/20 dark:text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/projects/${project.id}`}
          className="group/btn mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          View Details
          <FiArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 py-24 transition-colors dark:bg-slate-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 via-indigo-500/20 to-purple-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Selected Work
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-gray-400">
            A selection of projects showcasing my skills in full-stack web
            development.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
              className={`transition-all duration-700 ease-out ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}