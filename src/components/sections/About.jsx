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
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
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
            className="flex items-center"
          >
            <div className="w-full rounded-2xl border border-dark-600 bg-dark-800 p-8 lg:p-10">
              <h3 className="mb-6 text-lg font-semibold text-white">
                What Sets Us Apart
              </h3>
              <ul className="space-y-4">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
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
