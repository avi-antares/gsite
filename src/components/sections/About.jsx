import { motion } from "framer-motion";
import { about } from "../../data/siteContent";
import { HiCheck } from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
              className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl"
            >
              {about.heading}
            </motion.h2>

            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i + 1}
                className="mt-6 text-base leading-relaxed text-gray-400"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={2}
            className="flex flex-col gap-6"
          >
            {/* About image */}
            <div className="relative overflow-hidden rounded-lg border border-dark-600">
              <img
                src="/images/about-team.jpg"
                alt="Software development workspace with code on screen"
                className="h-48 w-full object-cover opacity-70 transition-opacity hover:opacity-90 lg:h-56"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent" />
            </div>

            <div className="glow-green w-full rounded-lg border border-accent/20 bg-dark-800/80 p-8">
              <h3 className="mb-6 font-display text-xl font-semibold uppercase tracking-wide text-accent">
                What Sets Us Apart
              </h3>
              <ul className="space-y-4">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-accent/10 text-accent">
                      <HiCheck size={14} />
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
