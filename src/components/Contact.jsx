"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "arifislam54872785@gmail.com",
    href: "mailto:arifislam54872785@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+880 01754-872785",
    href: "tel:+8801754872785",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+880 01754-872785",
    href: "https://wa.me/8801754872785",
  },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/arifislam121416", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/al-amin-arif2785", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/alaminarif85", label: "Facebook" },
];

// Fade + rise an element in once it enters the viewport
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

const initialForm = { name: "", email: "", subject: "", message: "" };

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white";

const Contact = () => {
  const [leftRef, leftVisible] = useReveal();
  const [formRef, formVisible] = useReveal();

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      // Requires a POST /api/contact route in this project (e.g. using
      // Resend, Nodemailer, or a form backend) that accepts this JSON body.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Couldn't send right now — please email me directly at arifislam54872785@gmail.com."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 via-indigo-500/20 to-purple-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-gray-400">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div
            ref={leftRef}
            className={`space-y-6 transition-all duration-700 ease-out ${
              leftVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-indigo-500/20 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {method.label}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Social */}
            <div className="flex gap-4 pt-4">
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
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-700 ease-out dark:border-slate-800 dark:bg-slate-900 ${
              formVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-purple-500/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {/* Status feedback */}
              {status === "success" && (
                <p
                  role="status"
                  className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                  <FiCheckCircle />
                  Message sent — I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p
                  role="alert"
                  className="flex items-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400"
                >
                  <FiAlertCircle />
                  {errorMsg}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;