"use client";

import { FaCode, FaLaptopCode, FaLightbulb, FaGamepad } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my journey, and what motivates me as a
            developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">

          {/* Left */}
          <div>

            <h3 className="text-3xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                AL AMIN
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-gray-400">
              I'm a passionate <strong>Full Stack Developer</strong> who enjoys
              building modern, responsive, and user-friendly web applications.
              My programming journey started with HTML and CSS, and over time I
              expanded my skills into React, Next.js, Node.js, Express.js, and
              MongoDB.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-gray-400">
              I enjoy solving real-world problems through code, learning new
              technologies, and creating clean, scalable applications. My goal
              is to become a professional software engineer while continuously
              improving my skills.
            </p>

          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl transition">
              <FaCode className="text-4xl text-cyan-500 mb-4" />
              <h4 className="text-xl font-semibold">
                Programming
              </h4>
              <p className="mt-3 text-slate-600 dark:text-gray-400">
                Passionate about solving problems and building modern web
                applications.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl transition">
              <FaLaptopCode className="text-4xl text-cyan-500 mb-4" />
              <h4 className="text-xl font-semibold">
                Favorite Work
              </h4>
              <p className="mt-3 text-slate-600 dark:text-gray-400">
                I love creating responsive UI, dashboards, and full-stack web
                applications.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl transition">
              <FaLightbulb className="text-4xl text-cyan-500 mb-4" />
              <h4 className="text-xl font-semibold">
                Learning
              </h4>
              <p className="mt-3 text-slate-600 dark:text-gray-400">
                Always exploring new technologies, best practices, and modern
                development tools.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl transition">
              <FaGamepad className="text-4xl text-cyan-500 mb-4" />
              <h4 className="text-xl font-semibold">
                Hobbies
              </h4>
              <p className="mt-3 text-slate-600 dark:text-gray-400">
                I enjoy football, exploring technology, and spending time
                learning something new every day.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;