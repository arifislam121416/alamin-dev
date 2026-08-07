"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiDownload, FiMoon, FiSun } from "react-icons/fi";
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
  const [scrolled,setScrolled]=useState(false);

  const { theme, setTheme } = useTheme();

  // Better Auth React Hook
 

  useEffect(() => {
    setMounted(true);
  }, []);

 useEffect(()=>{

const handleScroll=()=>{

setScrolled(window.scrollY>20);

};

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll);

},[]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
     <div className="mx-auto max-w-7xl px-5 pt-3">
      <nav
  className={`flex items-center backdrop-blur-2xl border-white/10 border-slate-200 dark:border-white/10 justify-between max-w-7xl rounded-full border px-6 transition-all duration-300

${scrolled ? "h-16" : "h-20"} backdrop-blur-xl transition-all duration-300

  ${
    scrolled
      ? "border-slate-200 bg-white/90 shadow-2xl dark:border-slate-800 dark:bg-slate-900/90"
      : "border-slate-200/80 bg-white/70 shadow-lg dark:border-slate-800/80 dark:bg-slate-900/70"
  }`}
>
        
        {/* Brand Logo */}
<div>
       <Link href="/" className="group flex items-center gap-2">
  <img
src="/logo.png"
className="h-10 w-10 rounded-full"
/>

  <div>
   <h2 className="text-2xl font-extrabold tracking-wide">
  <span className="text-slate-900 dark:text-white">AL </span>
  <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
    AMIN
  </span>
</h2>
  </div>
</Link>
  </div> 

        {/* Desktop Navigation Links */}
<div>

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
</div>

        {/* Right Action Buttons (Desktop) */}
       <div className="hidden items-center gap-3 lg:flex">
  {mounted && (
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
  )}

  <Link
  href="/resume.pdf"
  download
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
    px-6
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
  Resume

  <FiDownload className="transition-transform duration-300 group-hover:translate-y-1 group-hover:scale-110" />
</Link>
</div>

        {/* Mobile Toggle Button */}
      <div>
          <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation Menu"
          className="text-slate-800 focus:outline-none dark:text-slate-200 lg:hidden"
        >
          {open ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
        </button>
      </div>
      </nav>
     </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="mt-3 rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-2xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/95 lg:hidden">
          {/* Mobile Theme Toggle */}
          {mounted && (
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
)}

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