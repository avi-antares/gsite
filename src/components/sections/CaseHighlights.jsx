import { motion } from "framer-motion";
import { portfolio } from "../../data/siteContent";

const categoryColors = {
  Platform: "bg-accent/15 text-accent-light",
  RGS: "bg-neon/15 text-neon",
  RNG: "bg-purple-500/15 text-purple-400",
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function CaseHighlights() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Track Record
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Capability Highlights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Representative engagements showcasing the breadth and depth of our
            iGaming delivery experience.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {portfolio.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={i}
              className="group rounded-2xl border border-dark-600 bg-dark-800/60 p-8 transition-colors hover:border-accent/30"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[item.category] || "bg-gray-500/15 text-gray-400"}`}
              >
                {item.category}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
