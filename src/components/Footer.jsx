"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              AL<span className="text-cyan-500"> AMIN</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-gray-400">
              Passionate Full Stack Developer focused on building modern,
              responsive and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">

              <li>
                <Link href="/#home" className="hover:text-cyan-500">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#about" className="hover:text-cyan-500">
                  About
                </Link>
              </li>

              <li>
                <Link href="#skills" className="hover:text-cyan-500">
                  Skills
                </Link>
              </li>

              <li>
                <Link href="#projects" className="hover:text-cyan-500">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:text-cyan-500">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold">
              Connect With Me
            </h3>

            <div className="mt-5 flex gap-4">

              <Link
                href="https://github.com/arifislam121416"
                target="_blank"
                className="rounded-full border p-3 transition hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-500"
              >
                <FaGithub size={22} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/al-amin-arif2785"
                target="_blank"
                className="rounded-full border p-3 transition hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-500"
              >
                <FaLinkedin size={22} />
              </Link>

              <Link
                href="https://www.facebook.com/alaminarif85"
                target="_blank"
                className="rounded-full border p-3 transition hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-500"
              >
                <FaFacebook size={22} />
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-center md:flex-row dark:border-slate-800">

          <p className="text-slate-600 dark:text-gray-400">
            © {year} ALAMIN All Rights Reserved.
          </p>

        <Link
  href="/#home"
  className="
    group
    flex
    items-center
    gap-2
    rounded-full
    bg-gradient-to-r
    from-cyan-400
    via-indigo-500
    to-purple-600
    px-5
    py-2.5
    font-semibold
    text-white
    shadow-lg
    shadow-indigo-500/30
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
    hover:shadow-purple-500/50
  "
>
  <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
  Back to Top
</Link>

        </div>

      </div>
    </footer>
  );
};

export default Footer;