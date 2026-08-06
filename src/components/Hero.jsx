"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16"
    >
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-cyan-500 font-semibold text-lg">
            👋 Hello, I'm
          </p>

          <h1 className="mt-3 text-5xl md:text-7xl font-black leading-tight">
            AL <span className="text-cyan-500">AMIN</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
  I'm a{" "}
  <TypeAnimation
    sequence={[
      "Full Stack Developer",
      2000,
      "Frontend Developer",
      2000,
      "React Developer",
      2000,
      "Next.js Developer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-cyan-500"
  />
</h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-gray-400">
            I build modern, responsive and scalable web applications
            using React, Next.js, Node.js, Express.js and MongoDB.
            Passionate about creating clean UI and solving real-world problems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-cyan-600"
            >
              Hire Me
              <FiArrowRight />
            </Link>

            <Link
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-cyan-500 px-7 py-4 font-semibold text-cyan-500 transition-all hover:bg-cyan-500 hover:text-white"
            >
              <FiDownload />
              Resume
            </Link>

          </div>

          {/* Social */}
          <div className="mt-10 flex items-center gap-5">

            <Link
              href="https://github.com/arifislam121416"
              target="_blank"
              className="text-3xl text-slate-600 transition hover:text-cyan-500 dark:text-gray-300"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/al-amin-arif2785"
              target="_blank"
              className="text-3xl text-slate-600 transition hover:text-cyan-500 dark:text-gray-300"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://www.facebook.com/alaminarif85"
              target="_blank"
              className="text-3xl text-slate-600 transition hover:text-cyan-500 dark:text-gray-300"
            >
              <FaFacebook />
            </Link>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>

            <Image
              src="/profile.png"
              alt="AL AMIN"
              width={420}
              height={420}
              className="relative rounded-full border-8 border-cyan-500 object-cover shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;