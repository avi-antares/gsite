import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../../data/siteContent";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Get Started
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {contact.heading}
            </h2>
            <p className="mt-4 text-gray-400">{contact.sub}</p>

            <div className="mt-8 flex items-center gap-3 text-gray-400">
              <HiOutlineMail size={20} className="text-accent" />
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-white transition-colors"
              >
                {contact.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-dark-600 bg-dark-800 p-12 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <HiOutlineMail size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
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
                className="rounded-2xl border border-dark-600 bg-dark-800 p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-dark-500 bg-dark-700 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-800"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-dark-500 bg-dark-700 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-800"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full rounded-lg border border-dark-500 bg-dark-700 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-800"
                    placeholder="Company name"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="brief"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="brief"
                    rows="4"
                    className="w-full resize-none rounded-lg border border-dark-500 bg-dark-700 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-800"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
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
