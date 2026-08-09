"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiDownload, FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { id: 1, name: "Home", path: "#home" },
  { id: 2, name: "About", path: "#about" },
  { id: 3, name: "Skills", path: "#skills" },
  { id: 4, name: "Education", path: "#education" },
  { id: 5, name: "Experience", path: "#experience" },
  { id: 6, name: "Projects", path: "#projects" },
  { id: 7, name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const drawerRef = useRef(null);
  const { theme, setTheme } = useTheme();

  // Avoid theme-toggle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Elevate + shrink the bar once the page has scrolled a bit
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight whichever section is actually in view,
  // instead of only reacting to clicks
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.path))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const match = navLinks.find(
            (link) => link.path === `#${visible.target.id}`
          );
          if (match) setActive(match.name);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile drawer on outside click or Escape, and lock scroll while open
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const linkClasses = (name) =>
    `relative font-medium transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${
      active === name
        ? "text-cyan-400 after:w-full"
        : "text-slate-700 dark:text-gray-300 hover:text-cyan-400 after:w-0 hover:after:w-full"
    }`;

  const ThemeToggle = ({ className = "" }) =>
    mounted ? (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100/80 text-slate-700 transition duration-300 hover:scale-105 hover:border-cyan-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300 ${className}`}
      >
        {theme === "dark" ? (
          <FiSun className="h-5 w-5 text-amber-400" />
        ) : (
          <FiMoon className="h-5 w-5 text-slate-700" />
        )}
      </button>
    ) : (
      <div className={`h-10 w-10 rounded-full ${className}`} />
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 pt-3">
        <nav
          className={`mx-auto flex items-center justify-between rounded-full border px-6 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          } ${
            scrolled
              ? "border-slate-200 bg-white/90 shadow-2xl dark:border-slate-800 dark:bg-slate-900/90"
              : "border-slate-200/80 bg-white/70 shadow-lg dark:border-slate-800/80 dark:bg-slate-900/70"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="group flex shrink-0 items-center gap-2">
            <img
              src="/logo.png"
              alt="AL AMIN logo"
              className="h-10 w-10 rounded-full ring-2 ring-transparent transition group-hover:ring-cyan-400/50"
            />
            <h2 className="text-2xl font-extrabold tracking-wide">
              <span className="text-slate-900 dark:text-white">AL </span>
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                AMIN
              </span>
            </h2>
          </Link>

          {/* Desktop links */}
          <ul className="hidden font-bold items-center gap-6 lg:flex">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  onClick={() => setActive(item.name)}
                  aria-current={active === item.name ? "page" : undefined}
                  className={linkClasses(item.name)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              Resume
              <FiDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="rounded-full p-1.5 text-slate-800 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
          >
            {open ? <HiOutlineX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`grid px-5 transition-all duration-300 ease-out lg:hidden ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          ref={drawerRef}
          className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/95"
        >
          <div className="flex items-center justify-between p-6 pb-3">
            <span className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Menu
            </span>
            <ThemeToggle />
          </div>

          <ul className="space-y-1 p-6 pt-2">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  onClick={() => {
                    setActive(item.name);
                    setOpen(false);
                  }}
                  aria-current={active === item.name ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-lg transition-all duration-300 ${
                    active === item.name
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-slate-700 hover:bg-cyan-500/10 hover:text-cyan-400 dark:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <Link
                href="/resume.pdf"
                download
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Resume
                <FiDownload />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}