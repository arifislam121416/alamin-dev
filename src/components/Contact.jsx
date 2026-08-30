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

import {
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

/* =========================
   Contact Information
========================= */

const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "alaminfreelancer1997@gmail.com",
    href: "mailto:alaminfreelancer1997@gmail.com",
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

/* =========================
   Social Links
========================= */

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/arifislam121416",
    label: "GitHub",
  },

  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/al-amin-arif2785",
    label: "LinkedIn",
  },

  {
    icon: FaFacebook,
    href: "https://www.facebook.com/alaminarif85",
    label: "Facebook",
  },
];

/* =========================
   Reveal Animation
========================= */

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
      {
        threshold: 0.15,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/* =========================
   Form
========================= */

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500";

/* =========================
   Contact Component
========================= */

const Contact = () => {
  const [leftRef, leftVisible] = useReveal();
  const [formRef, formVisible] = useReveal();

  const [form, setForm] = useState(initialForm);

  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const [errorMsg, setErrorMsg] = useState("");

  /* =========================
     Handle Input
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove previous error while typing
    if (status === "error") {
      setStatus("idle");
      setErrorMsg("");
    }
  };

  /* =========================
     Submit Form
  ========================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Validation */

    if (!form.name.trim()) {
      setStatus("error");
      setErrorMsg("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setStatus("error");
      setErrorMsg("Please enter your email.");
      return;
    }

    if (!form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please write your message.");
      return;
    }

    /* Email validation */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      setErrorMsg("");

      /* API Request */

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      const result = await response.json();

      /* API Error */

      if (!response.ok) {
        throw new Error(
          result?.message || "Failed to send message."
        );
      }

      /* Success */

      setStatus("success");

      setForm(initialForm);

    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");

      setErrorMsg(
        error.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      {/* Background Glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 via-indigo-500/20 to-purple-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =========================
            Heading
        ========================= */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">

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

            Have a project in mind or want to collaborate?
            Feel free to reach out. I&apos;d love to hear from you.

          </p>

        </div>

        {/* =========================
            Main Grid
        ========================= */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div
            ref={leftRef}
            className={`space-y-6 transition-all duration-700 ease-out ${
              leftVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >

            {/* Contact Cards */}

            {contactMethods.map((method) => {

              const Icon = method.icon;

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={
                    method.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-indigo-500/20 dark:border-slate-800 dark:bg-slate-900"
                >

                  {/* Icon */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110">

                    <Icon className="text-lg" />

                  </div>

                  {/* Content */}

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

            {/* =========================
                Social Links
            ========================= */}

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
                    title={social.label}
                    className="rounded-full border border-slate-200 p-3 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/30 dark:border-slate-800 dark:text-slate-400"
                  >

                    <Icon size={20} />

                  </Link>
                );
              })}

            </div>

          </div>

          {/* =========================
              RIGHT SIDE - FORM
          ========================= */}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-700 ease-out dark:border-slate-800 dark:bg-slate-900 ${
              formVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >

            <div className="space-y-5">

              {/* Name */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />

              </div>

              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />

              </div>

              {/* Subject */}

              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClasses}
                />

              </div>

              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
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

              {/* Submit */}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-purple-500/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:scale-100"
              >

                {status === "loading" ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}

              </button>

              {/* =========================
                  Success Message
              ========================= */}

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-400">

                  <FiCheckCircle />

                  Message sent successfully!
                  I&apos;ll get back to you soon.

                </div>
              )}

              {/* =========================
                  Error Message
              ========================= */}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-400">

                  <FiAlertCircle />

                  {errorMsg}

                </div>
              )}

            </div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;