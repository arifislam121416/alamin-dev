"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 />, level: "95%" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "90%" },
    { name: "JavaScript", icon: <FaJs />, level: "90%" },
    { name: "React", icon: <FaReact />, level: "90%" },
    { name: "Next.js", icon: <SiNextdotjs />, level: "85%" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "95%" },
  ],

  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: "85%" },
    { name: "Express.js", icon: <SiExpress />, level: "85%" },
    { name: "MongoDB", icon: <SiMongodb />, level: "80%" },
    { name: "Firebase", icon: <SiFirebase />, level: "80%" },
  ],

  Tools: [
    { name: "Git", icon: <FaGitAlt />, level: "90%" },
    { name: "Vercel", icon: <SiVercel />, level: "85%" },
    { name: "Vs Code", icon: <SiVercel />, level: "85%" },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-500">Skills</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-gray-400">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-16 space-y-12">

          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>

              <h3 className="mb-6 text-2xl font-bold text-cyan-500">
                {category}
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex items-center gap-3 text-3xl text-cyan-500">
                      {skill.icon}
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Proficiency</span>
                        <span>{skill.level}</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                          className="h-full rounded-full bg-cyan-500"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;