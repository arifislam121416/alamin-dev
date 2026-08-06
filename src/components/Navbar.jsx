"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiDownload, FiMoon, FiSun, FiLogOut, FiUser, FiLogIn } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";



const navLinks = [
  { id: 1, name: "Home", path: "#home" },
  { id: 2, name: "About", path: "#about" },
  { id: 3, name: "Skills", path: "#skills" },
  { id: 4, name: "Education", path: "#education" },
  { id: 5, name: "Projects", path: "#projects" },
  { id: 6, name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Better Auth React Hook
 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent px-4 py-3 transition-all duration-300 lg:px-8">
      <nav className="flex items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-6 py-3.5 shadow-lg backdrop-blur-md transition-all dark:border-slate-800/80 dark:bg-slate-900/80">
        
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-black tracking-wider">
          <span className="text-2xl font-black tracking-wider transition duration-300 hover:scale-105">AL AMIN.dev </span>
        
        </Link>

        {/* Desktop Navigation Links */}
    <ul className="hidden items-center gap-8 lg:flex">
  {navLinks.map((item) => (
    <li key={item.id}>
      <Link
        href={item.path}
        onClick={() => setActive(item.name)}
        className={`relative font-medium transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all

        ${
          active === item.name
            ? "text-cyan-400 after:w-full"
            : "text-slate-700 dark:text-gray-300 hover:text-cyan-400 after:w-0 hover:after:w-full"
        }`}
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>

        {/* Right Action Buttons (Desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle Theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100/80 text-slate-700 transition duration-300 hover:scale-105 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300"
          >
            {theme === "dark" ? (
              <FiSun className="h-5 w-5 text-amber-400" />
            ) : (
              <FiMoon className="h-5 w-5 text-slate-700" />
            )}
          </button>

         
          {/* Download Resume Link */}
        
          <Link
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition hover:scale-105 hover:bg-cyan-600"
          >
            <FiDownload className="h-4 w-4" />
            Resume
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation Menu"
          className="text-slate-800 focus:outline-none dark:text-slate-200 lg:hidden"
        >
          {open ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="mt-3 rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-2xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/95 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 py-3 text-sm font-medium text-slate-800 dark:border-slate-800 dark:text-slate-200"
          >
            {theme === "dark" ? <FiSun className="text-amber-400" /> : <FiMoon />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Mobile Links */}
          <ul className="space-y-1">
            {navLinks.map((item) => (
              <li key={item.id}>
               <Link
  href={item.path}
  onClick={() => {
    setActive(item.name);
    setOpen(false);
  }}
  className={`block rounded-xl px-4 py-3 text-lg transition-all duration-300

  ${
    active === item.name
      ? "bg-cyan-500/20 text-cyan-400"
      : "text-slate-700 dark:text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400"
  }`}
>
  {item.name}
</Link>
              </li>
            ))}
          </ul>

        </div>
      )}
    </header>
  );
}