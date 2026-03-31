import { motion } from "framer-motion";
import { whyUs } from "../../data/siteContent";
import {
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineLockClosed,
  HiOutlineEye,
} from "react-icons/hi";

const iconMap = {
  domain: HiOutlineGlobe,
  scale: HiOutlineLightningBolt,
  security: HiOutlineLockClosed,
  process: HiOutlineEye,
};

const colorCycle = [
  { icon: "bg-accent/10 text-accent", glow: "group-hover:shadow-accent/10" },
  { icon: "bg-neon/10 text-neon", glow: "group-hover:shadow-neon/10" },
  { icon: "bg-magenta/10 text-magenta", glow: "group-hover:shadow-magenta/10" },
  { icon: "bg-purple/10 text-purple", glow: "group-hover:shadow-purple/10" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Why CoreStack Gaming
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Built Different for iGaming
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            const color = colorCycle[i % colorCycle.length];
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={i}
                className={`group rounded-lg border border-dark-600 bg-dark-800/50 p-6 text-center transition-all hover:border-dark-500 hover:shadow-lg ${color.glow}`}
              >
                <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${color.icon}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
