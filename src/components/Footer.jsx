"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Education", path: "#education" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/arifislam121416", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/al-amin-arif2785", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/alaminarif85", label: "Facebook" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              AL
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {" "}
                AMIN
              </span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-gray-400">
              Passionate Full Stack Developer focused on building modern,
              responsive and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Connect With Me
            </h3>

            <div className="mt-5 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-full border border-slate-200 p-3 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-800 dark:text-slate-400"
                  >
                    <Icon size={22} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-center md:flex-row dark:border-slate-800">
          <p className="text-slate-600 dark:text-gray-400">
            © {year} AL AMIN. All rights reserved.
          </p>

          <Link
            href="/#home"
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;