"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-gray-400">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left */}
          <div className="space-y-6">

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <FaEnvelope className="text-3xl text-cyan-500" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-slate-600 dark:text-gray-400">
                  arifislam54872785@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <FaPhoneAlt className="text-3xl text-cyan-500" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-slate-600 dark:text-gray-400">
                  +880 01754-872785
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <FaWhatsapp className="text-3xl text-cyan-500" />
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-slate-600 dark:text-gray-400">
                  +880 01754-872785
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-4">

              <Link
                href="https://github.com/arifislam121416"
                target="_blank"
                className="rounded-full border p-3 transition hover:border-cyan-500 hover:text-cyan-500"
              >
                <FaGithub size={22} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/al-amin-arif2785"
                target="_blank"
                className="rounded-full border p-3 transition hover:border-cyan-500 hover:text-cyan-500"
              >
                <FaLinkedin size={22} />
              </Link>

              <Link
                href="https://www.facebook.com/alaminarif85"
                target="_blank"
                className="rounded-full border p-3 transition hover:border-cyan-500 hover:text-cyan-500"
              >
                <FaFacebook size={22} />
              </Link>

            </div>

          </div>

          {/* Right */}
          <form className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
              />

              <button
  type="submit"
  className="
    group
    w-full
    rounded-xl
    bg-gradient-to-r
    from-cyan-400
    via-indigo-500
    to-purple-600
    py-3
    font-semibold
    text-white
    shadow-lg
    shadow-indigo-500/30
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-purple-500/50
    active:scale-95
  "
>
  Send Message
</button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;