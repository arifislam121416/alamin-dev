"use client";

import { useEffect, useRef, useState } from "react";
import { FaCode, FaLaptopCode, FaLightbulb, FaGamepad } from "react-icons/fa";

const stats = [
  { label: "Years Coding", value: "3+" },
  { label: "Projects Built", value: "20+" },
  { label: "Technologies", value: "10+" },
  { label: "Cups of Coffee", value: "∞" },
];

const highlights = [
  {
    icon: FaCode,
    title: "Programming",
    desc: "Passionate about solving problems and building modern, scalable web applications.",
  },
  {
    icon: FaLaptopCode,
    title: "Favorite Work",
    desc: "I love crafting responsive UI, dashboards, and full-stack applications end to end.",
  },
  {
    icon: FaLightbulb,
    title: "Learning",
    desc: "Always exploring new technologies, best practices, and modern development tools.",
  },
  {
    icon: FaGamepad,
    title: "Hobbies",
    desc: "I enjoy football, exploring technology, and learning something new every day.",
  },
];

// Small helper: fade + rise an element in once it enters the viewport
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

const About = () => {
  const [textRef, textVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 via-indigo-500/20 to-purple-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section title */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Who I Am
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-gray-400">
            Get to know more about me, my journey, and what motivates me as a
            developer.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-16 lg:grid-cols-2">
          {/* Left: bio + stats */}
          <div
            ref={textRef}
            className={`transition-all duration-700 ease-out ${
              textVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                AL AMIN
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-gray-400">
              I'm a passionate <strong className="text-slate-900 dark:text-white">Full Stack Developer</strong> who
              enjoys building modern, responsive, and user-friendly web
              applications. My programming journey started with HTML and CSS,
              and over time I expanded my skills into React, Next.js,
              Node.js, Express.js, and MongoDB.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-gray-400">
              I enjoy solving real-world problems through code, learning new
              technologies, and creating clean, scalable applications. My
              goal is to become a professional software engineer while
              continuously improving my skills.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              Let's Connect
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Stats strip */}
            <div
              ref={statsRef}
              className={`mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 dark:border-slate-800 sm:grid-cols-4 transition-all duration-700 ease-out ${
                statsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: highlight cards */}
          <div ref={gridRef} className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  style={{ transitionDelay: gridVisible ? `${index * 100}ms` : "0ms" }}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-transparent hover:shadow-2xl hover:shadow-indigo-500/20 dark:border-slate-800 dark:bg-slate-900 ${
                    gridVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  {/* Gradient ring on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-indigo-500/10 to-purple-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="text-xl text-white" />
                  </div>

                  <h4 className="relative mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="relative mt-3 text-slate-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;