"use client";

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

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-gray-400">
            My academic journey and educational background.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-16">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 h-full w-1 bg-cyan-500"></div>

          <div className="space-y-10">

            {education.map((item) => (
              <div
                key={item.id}
                className="relative ml-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Icon */}

                <div className="absolute -left-14 top-7 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white">
                  <FaGraduationCap />
                </div>

                <span className="text-sm font-medium text-cyan-500">
                  {item.duration}
                </span>

                <h3 className="mt-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  {item.degree}
                </h3>

                <h4 className="mt-1 text-lg text-slate-600 dark:text-gray-400">
                  {item.institution}
                </h4>

                <p className="mt-4 leading-7 text-slate-600 dark:text-gray-400">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;