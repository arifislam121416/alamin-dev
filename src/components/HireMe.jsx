"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaRocket } from "react-icons/fa";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const infoItems = [
  { icon: FaBriefcase, text: "Available for Full-Time, Internship & Freelance" },
  { icon: FaMapMarkerAlt, text: "Dhaka, Bangladesh" },
  { icon: FaEnvelope, text: "arifislam54872785@gmail.com" },
];

const stats = [
  { value: "3+", label: "Projects Completed", featured: true },
  { value: "100%", label: "Responsive Design" },
  { value: "24h", label: "Response Time" },
  { value: "6+", label: "Technologies" },
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

const HireMe = () => {
  const [ref, visible] = useReveal();

  return (
    <section
      id="hire"
      className="relative overflow-hidden bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 via-indigo-500/20 to-purple-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-700 ease-out dark:border-slate-800 dark:bg-slate-900 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="grid items-center gap-12 p-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Open to Work
              </span>

              <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                Let&apos;s Build Something
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Amazing Together.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600 dark:text-gray-400">
                I&apos;m a passionate Full Stack Web Developer specializing in
                React.js, Next.js, Node.js, Express.js, MongoDB and Tailwind
                CSS. I love creating responsive, scalable, and modern web
                applications with clean UI/UX.
              </p>

              {/* Info */}
              <div className="mt-8 space-y-4">
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        <Icon className="text-sm" />
                      </span>
                      <span className="text-slate-700 dark:text-gray-300">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Buttons: primary (Hire Me) vs secondary (Resume) are now visually distinct */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  Hire Me
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/resume.pdf"
                  download
                  className="group flex items-center gap-2 rounded-xl border border-cyan-500 px-7 py-4 font-semibold text-cyan-600 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:text-cyan-400"
                >
                  <FiDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  Resume
                </Link>
              </div>
            </div>

            {/* Right: stats */}
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 ${
                    stat.featured
                      ? "bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-purple-500/50"
                      : "border border-slate-200 bg-slate-50 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-700 dark:bg-slate-950"
                  }`}
                >
                  <h3
                    className={`text-5xl font-bold ${
                      stat.featured
                        ? "text-white"
                        : "bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
                    }`}
                  >
                    {stat.value}
                  </h3>
                  <p
                    className={`mt-2 ${
                      stat.featured ? "text-white/90" : "text-slate-600 dark:text-gray-400"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;