"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiDownload, FiArrowRight, FiChevronDown } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/arifislam121416", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/al-amin-arif2785", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/alaminarif85", label: "Facebook" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      {/* Ambient background glow, consistent with the rest of the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-purple-600/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left side */}
        <div>
          <p className="flex items-center gap-2 text-lg font-semibold text-cyan-500">
            <span className="inline-block animate-[wave_1.8s_ease-in-out_infinite] origin-[70%_70%]">
              👋
            </span>
            Hello, I&apos;m
          </p>

          <h1 className="mt-3 text-5xl font-black leading-tight md:text-7xl">
            AL{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              AMIN
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-700 dark:text-slate-300 md:text-3xl">
            I&apos;m a{" "}
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
              className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
            />
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-gray-400">
            I build modern, responsive and scalable web applications using
            React, Next.js, Node.js, Express.js and MongoDB. Passionate about
            creating clean UI and solving real-world problems.
          </p>

          {/* Buttons: Hire Me (primary) vs Resume (secondary) are now visually distinct */}
          <div className="mt-8 flex flex-wrap gap-4">
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
              Resume
              <FiDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
          </div>

          {/* Social */}
          <div className="mt-10 flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-3xl text-slate-600 transition-colors hover:text-cyan-500 dark:text-gray-300"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right side */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            <Image
              src="/profile.png"
              alt="AL AMIN"
              width={420}
              height={420}
              priority
              className="relative rounded-full border-8 border-cyan-500 object-cover shadow-2xl"
            />

            {/* Availability badge */}
            <div className="absolute bottom-4 right-2 flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-lg backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for work
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-400 transition-colors hover:text-cyan-500 sm:block"
      >
        <FiChevronDown size={26} />
      </Link>
    </section>
  );
};

export default Hero;