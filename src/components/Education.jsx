"use client";

import { useEffect, useRef, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    id: 1,
    degree: "Master of Arts (M.A.)",
    institution: "Ananda Mohan Govt. College, Mymensingh, Bangladesh",
    duration: "2018 - 2020",
    description:
      "Completed a Master of Arts program with a focus on research, communication, and analytical skills while continuing to develop expertise in modern web development.",
  },
  {
    id: 2,
    degree: "Bachelor of Arts (B.A.)",
    institution: "Govt. Saadat College, Tangail, Bangladesh",
    duration: "2014 - 2018",
    description:
      "Completed a Bachelor of Arts program, building strong communication, critical thinking, and problem-solving skills that complement my career in software development.",
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

function TimelineItem({ item, index, isLast }) {
  const [ref, visible] = useReveal();

  return (
    <li ref={ref} className="relative pl-16 sm:pl-20">
      {/* Connector segment (drawn per-item so it only appears once revealed) */}
      {!isLast && (
        <div
          className={`absolute left-[27px] top-14 w-px bg-gradient-to-b from-cyan-400/60 via-indigo-500/40 to-transparent transition-all duration-700 ease-out sm:left-[35px] ${
            visible ? "h-[calc(100%-1rem)] opacity-100" : "h-0 opacity-0"
          }`}
        />
      )}

      {/* Numbered node */}
      <div
        className={`absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-500 ease-out ${
          visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <FaGraduationCap className="text-xl" />
        <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-[11px] font-bold text-white dark:border-slate-950">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Card */}
      <div
        className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-transparent hover:shadow-2xl hover:shadow-indigo-500/20 dark:border-slate-800 dark:bg-slate-900 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
        style={{ transitionDelay: visible ? "100ms" : "0ms" }}
      >
        <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 dark:text-cyan-400">
          {item.duration}
        </span>

        <h3 className="mt-3 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
          {item.degree}
        </h3>

        <h4 className="mt-1 text-lg text-slate-600 dark:text-gray-400">
          {item.institution}
        </h4>

        <p className="mt-4 leading-7 text-slate-600 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </li>
  );
}

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 via-indigo-500/20 to-purple-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Academic Background
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-gray-400">
            My academic journey and educational background.
          </p>
        </div>

        {/* Timeline */}
        <ol className="mt-16 space-y-10">
          {education.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === education.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;