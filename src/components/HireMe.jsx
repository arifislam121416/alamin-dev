"use client";

import Link from "next/link";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const HireMe = () => {
  return (
    <section
      id="hire"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">

          <div className="grid items-center gap-12 p-10 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-500">
                🚀 Open To Work
              </span>

              <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                Let's Build Something
                <span className="text-cyan-500"> Amazing Together.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600 dark:text-gray-400">
                I'm a passionate Full Stack Web Developer specializing in
                React.js, Next.js, Node.js, Express.js, MongoDB and Tailwind
                CSS. I love creating responsive, scalable, and modern web
                applications with clean UI/UX.
              </p>

              {/* Info */}

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-cyan-500" />
                  <span>Available for Full-Time, Internship & Freelance</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-cyan-500" />
                  <span>Dhaka, Bangladesh</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-cyan-500" />
                  <span>arifislam54872785@gmail.com</span>
                </div>

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="#contact"
                  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-cyan-600"
                >
                  Hire Me
                  <FiArrowRight />
                </Link>

                <Link
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 rounded-xl border border-cyan-500 px-7 py-4 font-semibold text-cyan-500 transition hover:bg-cyan-500 hover:text-white"
                >
                  <FiDownload />
                  Resume
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl bg-cyan-500 p-8 text-center text-white shadow-lg">
                <h3 className="text-5xl font-bold">3+</h3>
                <p className="mt-2">Projects Completed</p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8 text-center dark:border-slate-700">
                <h3 className="text-5xl font-bold text-cyan-500">
                  100%
                </h3>
                <p className="mt-2">Responsive Design</p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8 text-center dark:border-slate-700">
                <h3 className="text-5xl font-bold text-cyan-500">
                  24h
                </h3>
                <p className="mt-2">Response Time</p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8 text-center dark:border-slate-700">
                <h3 className="text-5xl font-bold text-cyan-500">
                  6+
                </h3>
                <p className="mt-2">Technologies</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HireMe;