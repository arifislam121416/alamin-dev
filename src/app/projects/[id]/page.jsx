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
const features = {
  "1": [
    "Role Based Authentication",
    "Stripe Payment",
    "Responsive Dashboard",
    "Ticket Booking",
    "Image Upload",
  ],

  "2": [
    "Appointment Booking",
    "Authentication",
    "Dashboard",
    "Review System",
  ],

  "3": [
    "Course Purchase",
    "Authentication",
    "Dashboard",
    "Responsive UI",
  ],
};
const projectOverviews = {
  "1": {
    intro:
      "TicketHub is a modern full-stack online ticket booking platform designed to provide a fast, secure, and seamless booking experience. Users can easily search, book, and manage transport tickets through a clean and responsive interface.",

    users:
      "Users can browse available tickets, search by destination, book tickets securely, manage bookings, and view their booking history from a personalized dashboard.",

    vendors:
      "Vendors can add new tickets, update ticket information, manage bookings, monitor ticket sales, and track business performance through a dedicated vendor dashboard.",

    admin:
      "Administrators can approve vendors and tickets, manage users, monitor bookings, oversee platform activities, and maintain the overall system efficiently.",
  },

  "2": {
    intro:
      "MediQueue is a modern doctor appointment booking platform that simplifies healthcare services by allowing patients to book appointments online through a secure and responsive web application.",

    users:
      "Patients can browse available doctors, schedule appointments, manage bookings, cancel appointments when necessary, and view their appointment history.",

    doctors:
      "Doctors can manage their schedules, update availability, review appointment requests, and maintain their professional profiles through a personalized dashboard.",

    admin:
      "Administrators can manage doctors, patients, appointments, platform content, and ensure smooth operation of the healthcare management system.",
  },

  "3": {
    intro:
      "SkillSphere is a modern online learning platform that connects students with high-quality educational content through an engaging, responsive, and user-friendly interface.",

    students:
      "Students can browse courses, enroll in their favorite programs, monitor learning progress, and manage their profiles from a dedicated dashboard.",

    instructors:
      "Instructors can create new courses, upload learning materials, manage enrolled students, and update course information whenever needed.",

    admin:
      "Administrators can manage users, instructors, courses, platform content, and monitor overall system activities to ensure a better learning experience.",
  },
};
export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);
  const overview = projectOverviews[id];

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">

       <Link className="flex gap-1 items-center m-2" href="/#projects">
  <FaArrowLeft/> Back to Projects
</Link>

        <Image
          src={project.image}
          alt={project.title}
          priority
          width={1200}
          height={700}
         className="rounded-2xl object-cover"
        />

        <h1 className="mt-8 text-5xl font-bold">
          {project.title}
          
        </h1>
       <p className="mt-3 text-lg text-slate-500">
  Modern Full Stack Web Application
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

        <h2 className="rounded-full
        w-fit
        p-2
border
border-cyan-500
bg-cyan-500/10
text-cyan-500
hover:bg-cyan-500
hover:text-white
transition mt-10 text-2xl font-bold text-cyan-500">
          Tech Stack
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

{/* Project Overview */}

<h2 className="mt-14 text-3xl font-bold">
  Project Overview
</h2>

<div className="mt-8 grid gap-6 md:grid-cols-2">

  {/* Introduction */}
  <div className="rounded-2xl border border-cyan-500/20 bg-white p-6 shadow-lg dark:bg-slate-900">
    <h3 className="text-xl font-semibold text-cyan-500">
      <FaRocket/> Introduction
    </h3>

    <p className="mt-4 leading-8 text-slate-600 dark:text-gray-400">
      {overview.intro}
    </p>
  </div>

  {/* User Features */}
  <div className="rounded-2xl border border-cyan-500/20 bg-white p-6 shadow-lg dark:bg-slate-900">
    <h3 className="text-xl font-semibold text-cyan-500">
     <FaUser/> User Features
    </h3>

    <p className="mt-4 leading-8 text-slate-600 dark:text-gray-400">
      {overview.users || overview.students}
    </p>
  </div>

  {/* Vendor / Doctor / Instructor */}
  <div className="rounded-2xl border border-cyan-500/20 bg-white p-6 shadow-lg dark:bg-slate-900">
    <h3 className="text-xl font-semibold text-cyan-500">
      <FaUserTie/> Vendor / Instructor
    </h3>

    <p className="mt-4 leading-8 text-slate-600 dark:text-gray-400">
      {overview.vendors ||
  
        overview.instructors}
    </p>
  </div>

  {/* Admin */}
  <div className="rounded-2xl border border-cyan-500/20 bg-white p-6 shadow-lg dark:bg-slate-900">
    <h3 className="text-xl font-semibold text-cyan-500">
      <FaUserShield/> Admin Dashboard
    </h3>

    <p className="mt-4 leading-8 text-slate-600 dark:text-gray-400">
      {overview.admin}
    </p>
  </div>

</div>

        <h2 className="mt-12 text-2xl font-bold">
  Key Features
</h2>

<div className="mt-6 grid gap-4 sm:grid-cols-2">

{features[id].map((feature)=>(
<div
key={feature}
className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4"
>

✅ {feature}

</div>

))}

</div>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-gray-400">
          {project.description}
        </p>

      

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