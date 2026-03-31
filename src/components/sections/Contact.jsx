import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../../data/siteContent";
import { HiOutlineMail } from "react-icons/hi";

const inputClasses =
  "w-full rounded border border-dark-500 bg-dark-700/80 px-4 py-2.5 text-sm text-white placeholder-gray-600 transition-all focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-800";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Get Started
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              {contact.heading}
            </h2>
            <p className="mt-4 text-gray-400">{contact.sub}</p>

            <div className="mt-8 flex items-center gap-3 text-gray-400">
              <HiOutlineMail size={20} className="text-accent" />
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-accent"
              >
                {contact.email}
              </a>
            </div>

            {/* Decorative element */}
            <div className="mt-12 hidden lg:block">
              <div className="h-px w-32 bg-gradient-to-r from-accent/40 to-transparent" />
              <p className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-gray-600">
                Ready to level up?
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {submitted ? (
              <div className="glow-green flex h-full items-center justify-center rounded-lg border border-accent/20 bg-dark-800/80 p-12 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <HiOutlineMail size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold uppercase text-white">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-gray-400">
                    We'll be in touch within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-dark-600 bg-dark-800/70 p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block font-display text-sm font-medium uppercase tracking-wide text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block font-display text-sm font-medium uppercase tracking-wide text-gray-300"
                    >
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={inputClasses}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="company"
                    className="mb-1.5 block font-display text-sm font-medium uppercase tracking-wide text-gray-300"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className={inputClasses}
                    placeholder="Company name"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="brief"
                    className="mb-1.5 block font-display text-sm font-medium uppercase tracking-wide text-gray-300"
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="brief"
                    rows="4"
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="glow-green mt-6 w-full rounded border border-accent bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-dark-900 transition-all hover:bg-accent-light"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
