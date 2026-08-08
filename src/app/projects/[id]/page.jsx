import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaRocket,
  FaUser,
  FaUserTie,
  FaUserShield,
  FaCheckCircle,
} from "react-icons/fa";

const projects = [
  {
    id: "1",
    title: "TicketHub",
    image: "/tickethub.png",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
    description:
      "A full-stack online ticket booking platform where users can browse and book tickets, vendors can add tickets, and admins can manage the system.",
    live: "https://ticket-hub-p6hh.vercel.app",
    github: "https://github.com/arifislam121416/TicketHub",
    challenges: [
      "Role-based authentication",
      "Stripe payment integration",
      "Image upload",
      "Dashboard management",
    ],
    future: [
      "Email notification",
      "Real-time booking",
      "PDF ticket download",
      "Review system",
    ],
  },
  {
    id: "2",
    title: "MediQueue",
    image: "/mediqueue.png",
    technologies: ["React", "Firebase", "Express", "MongoDB"],
    description:
      "A doctor appointment booking system with authentication, booking management, and a responsive dashboard.",
    live: "https://medique-client-mu.vercel.app",
    github: "https://github.com/arifislam121416/mediqueflow-client",
    challenges: ["Booking system", "Authentication", "Private routes"],
    future: ["Video consultation", "Prescription download"],
  },
  {
    id: "3",
    title: "SkillSphere",
    image: "/skillsphere.png",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    description: "An online learning platform for students and instructors.",
    live: "https://skillsphere-e-course-platform-mr667ph2q.vercel.app",
    github: "https://github.com/arifislam121416/skillsphere-E-Course-Platform",
    challenges: ["Authentication", "Course management"],
    future: ["Live classes", "Certificates"],
  },
];

const features = {
  "1": [
    "Role based authentication",
    "Stripe payment",
    "Responsive dashboard",
    "Ticket booking",
    "Image upload",
  ],
  "2": ["Appointment booking", "Authentication", "Dashboard", "Review system"],
  "3": ["Course purchase", "Authentication", "Dashboard", "Responsive UI"],
};

// Normalized so every project has the same shape: intro, a primary "user" role,
// a secondary role (vendor / doctor / instructor — labeled per project), and admin.
// This avoids the old bug where the UI looked for `vendors || instructors` and
// silently rendered nothing for MediQueue, whose field was actually `doctors`.
const projectOverviews = {
  "1": {
    intro:
      "TicketHub is a modern full-stack online ticket booking platform designed to provide a fast, secure, and seamless booking experience. Users can easily search, book, and manage transport tickets through a clean and responsive interface.",
    primary: {
      label: "User Features",
      text: "Users can browse available tickets, search by destination, book tickets securely, manage bookings, and view their booking history from a personalized dashboard.",
    },
    secondary: {
      label: "Vendor Features",
      text: "Vendors can add new tickets, update ticket information, manage bookings, monitor ticket sales, and track business performance through a dedicated vendor dashboard.",
    },
    admin:
      "Administrators can approve vendors and tickets, manage users, monitor bookings, oversee platform activities, and maintain the overall system efficiently.",
  },
  "2": {
    intro:
      "MediQueue is a modern doctor appointment booking platform that simplifies healthcare services by allowing patients to book appointments online through a secure and responsive web application.",
    primary: {
      label: "Patient Features",
      text: "Patients can browse available doctors, schedule appointments, manage bookings, cancel appointments when necessary, and view their appointment history.",
    },
    secondary: {
      label: "Doctor Features",
      text: "Doctors can manage their schedules, update availability, review appointment requests, and maintain their professional profiles through a personalized dashboard.",
    },
    admin:
      "Administrators can manage doctors, patients, appointments, platform content, and ensure smooth operation of the healthcare management system.",
  },
  "3": {
    intro:
      "SkillSphere is a modern online learning platform that connects students with high-quality educational content through an engaging, responsive, and user-friendly interface.",
    primary: {
      label: "Student Features",
      text: "Students can browse courses, enroll in their favorite programs, monitor learning progress, and manage their profiles from a dedicated dashboard.",
    },
    secondary: {
      label: "Instructor Features",
      text: "Instructors can create new courses, upload learning materials, manage enrolled students, and update course information whenever needed.",
    },
    admin:
      "Administrators can manage users, instructors, courses, platform content, and monitor overall system activities to ensure a better learning experience.",
  },
};

function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}

function OverviewCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/30">
          <Icon className="text-base" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mt-4 leading-7 text-slate-600 dark:text-gray-400">
        {text}
      </p>
    </div>
  );
}

function ListCard({ title, items, tone }) {
  const toneClasses =
    tone === "future"
      ? "bg-purple-500/10 text-purple-500"
      : "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${toneClasses}`}
            >
              •
            </span>
            <span className="text-slate-600 dark:text-gray-400">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);
  const overview = projectOverviews[id];

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-slate-50 py-24 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back link */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-500 dark:text-slate-400"
        >
          <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow>Case Study</SectionEyebrow>

            <h1 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-gray-400">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <FaExternalLinkAlt className="text-sm" />
                Live Site
              </Link>

              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-cyan-500 px-6 py-3 font-semibold text-cyan-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500 hover:text-white dark:text-cyan-400"
              >
                <FaGithub />
                GitHub
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-slate-800">
            <Image
              src={project.image}
              alt={project.title}
              priority
              width={1200}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-16">
          <SectionEyebrow>Tech Stack</SectionEyebrow>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Project{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Overview
            </span>
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <OverviewCard icon={FaRocket} title="Introduction" text={overview.intro} />
            <OverviewCard icon={FaUser} title={overview.primary.label} text={overview.primary.text} />
            <OverviewCard icon={FaUserTie} title={overview.secondary.label} text={overview.secondary.text} />
            <OverviewCard icon={FaUserShield} title="Admin Dashboard" text={overview.admin} />
          </div>
        </div>

        {/* Key features */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Key Features
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features[id].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4"
              >
                <FaCheckCircle className="shrink-0 text-cyan-500" />
                <span className="text-slate-700 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges + future improvements */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <ListCard title="Challenges Faced" items={project.challenges} tone="challenges" />
          <ListCard title="Future Improvements" items={project.future} tone="future" />
        </div>
      </div>
    </section>
  );
}