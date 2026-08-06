import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";

const projects = [
  {
    id: "1",
    title: "TicketHub",
    image: "/tickethub.png",

    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],

    description:
      "TicketHub is a full-stack online ticket booking platform where users can browse and book tickets, vendors can add tickets, and admins can manage the system.",

    live: "https://ticket-hub-p6hh.vercel.app",

    github: "https://github.com/arifislam121416/TicketHub",

    challenges: [
      "Role-based authentication",
      "Stripe payment integration",
      "Image upload",
      "Dashboard management",
    ],

    future: [
      "Email Notification",
      "Real-time Booking",
      "PDF Ticket Download",
      "Review System",
    ],
  },

  {
    id: "2",
    title: "MediQueue",
    image: "/mediqueue.png",

    technologies: [
      "React",
      "Firebase",
      "Express",
      "MongoDB",
    ],

    description:
      "Doctor appointment booking system with authentication, booking management and responsive dashboard.",

    live: "https://medique-client-mu.vercel.app",

    github: "https://github.com/arifislam121416/mediqueflow-client",

    challenges: [
      "Booking System",
      "Authentication",
      "Private Routes",
    ],

    future: [
      "Video Consultation",
      "Prescription Download",
    ],
  },

  {
    id: "3",
    title: "SkillSphere",
    image: "/skillsphere.png",

    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],

    description:
      "An online learning platform for students and instructors.",

    live: "https://skillsphere-e-course-platform-mr667ph2q.vercel.app",

    github: "https://github.com/arifislam121416/skillsphere-E-Course-Platform",

    challenges: [
      "Authentication",
      "Course Management",
    ],

    future: [
      "Live Classes",
      "Certificates",
    ],
  },
];

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-cyan-500"
        >
          <FaArrowLeft />
          Back
        </Link>

        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="rounded-2xl"
        />

        <h1 className="mt-8 text-5xl font-bold">
          {project.title}
        </h1>

        <h2 className="mt-10 text-2xl font-bold text-cyan-500">
          Technology Stack
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500 px-4 py-2 text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold">
          Description
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-5">

          <Link
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white"
          >
            <FaExternalLinkAlt />
            Live Site
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-500"
          >
            <FaGithub />
            GitHub
          </Link>

        </div>

        <h2 className="mt-14 text-2xl font-bold">
          Challenges Faced
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-600 dark:text-gray-400">
          {project.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl font-bold">
          Future Improvements
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-600 dark:text-gray-400">
          {project.future.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

      </div>
    </section>
  );
}