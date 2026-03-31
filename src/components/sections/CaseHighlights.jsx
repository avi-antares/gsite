import { motion } from "framer-motion";
import { portfolio } from "../../data/siteContent";

const categoryColors = {
  Platform: "border-accent/30 bg-accent/10 text-accent",
  RGS: "border-neon/30 bg-neon/10 text-neon",
  RNG: "border-purple/30 bg-purple/10 text-purple",
};

const hoverColors = {
  Platform: "hover:border-accent/30",
  RGS: "hover:border-neon/30",
  RNG: "hover:border-purple/30",
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
    <section id="portfolio" className="gaming-grid relative py-24 lg:py-32">
      <div className="scanline pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Track Record
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
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
              className={`group rounded-lg border border-dark-600 bg-dark-800/60 p-8 transition-all ${hoverColors[item.category] || "hover:border-gray-600"}`}
            >
              <span
                className={`inline-block rounded border px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider ${categoryColors[item.category] || "border-gray-600 bg-gray-500/15 text-gray-400"}`}
              >
                {item.category}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-white">
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
