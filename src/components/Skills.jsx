"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLayerGroup,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { DiVisualstudio } from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skills = {
  Frontend: {
    icon: FaLayerGroup,
    items: [
      { name: "HTML5", icon: FaHtml5, level: 95 },
      { name: "CSS3", icon: FaCss3Alt, level: 90 },
      { name: "JavaScript", icon: FaJs, level: 90 },
      { name: "React", icon: FaReact, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
    ],
  },
  Backend: {
    icon: FaServer,
    items: [
      { name: "Node.js", icon: FaNodeJs, level: 85 },
      { name: "Express.js", icon: SiExpress, level: 85 },
      { name: "MongoDB", icon: SiMongodb, level: 80 },
    ],
  },
  Tools: {
    icon: FaTools,
    items: [
      { name: "Git", icon: FaGitAlt, level: 90 },
      { name: "GitHub", icon: FaGithub, level: 95 },
      { name: "Vercel", icon: SiVercel, level: 85 },
      { name: "VS Code", icon: DiVisualstudio, level: 85 },
      { name: "Figma", icon: FiFigma, level: 85 },
      { name: "Netlify", icon: SiNetlify, level: 85 },
    ],
  },
};

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

function SkillCard({ skill, index, categoryVisible }) {
  const Icon = skill.icon;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!categoryVisible) return;
    // Animate the bar in slightly after the card itself fades in
    const timer = setTimeout(() => setWidth(skill.level), 150 + index * 80);
    return () => clearTimeout(timer);
  }, [categoryVisible, index, skill.level]);

  return (
    <div
      style={{ transitionDelay: categoryVisible ? `${index * 80}ms` : "0ms" }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-indigo-500/20 dark:border-slate-800 dark:bg-slate-900 ${
        categoryVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-indigo-500/10 to-purple-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 text-lg text-white shadow-md shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110">
          <Icon />
        </div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
          {skill.name}
        </h4>
      </div>

      <div className="relative mt-5">
        <div className="mb-2 flex justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>Proficiency</span>
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {width}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 transition-[width] duration-[1200ms] ease-out"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ category, data }) {
  const [ref, visible] = useReveal();
  const CategoryIcon = data.icon;

  return (
    <div ref={ref}>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500 dark:bg-cyan-400/10">
          <CategoryIcon className="text-base" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {category}
        </h3>
        <span className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400">
          {data.items.length}
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            categoryVisible={visible}
          />
        ))}
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <section
      id="skills"
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
            What I Work With
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-gray-400">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-16 space-y-16">
          {Object.entries(skills).map(([category, data]) => (
            <SkillCategory key={category} category={category} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;