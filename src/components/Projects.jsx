"use client";

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

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-gray-400">
            A selection of projects showcasing my skills in full-stack web
            development.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
           <Image
  src={project.image}
  alt={project.title}
   width={1280}
  height={720}
  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
/>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
    <Link
  href={`/projects/${project.id}`}
  className="
    group
    mt-6
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-gradient-to-r
    from-cyan-400
    via-indigo-500
    to-purple-600
    px-6
    py-2.5
    font-semibold
    text-white
    shadow-lg
    shadow-indigo-500/30
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
    hover:shadow-purple-500/50
  "
>
  View Details
  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
</Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}