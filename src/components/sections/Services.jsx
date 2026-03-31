import { motion } from "framer-motion";
import { services } from "../../data/siteContent";
import {
  HiOutlineCube,
  HiOutlineServer,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const iconMap = {
  platform: HiOutlineCube,
  rgs: HiOutlineServer,
  rng: HiOutlineShieldCheck,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            End-to-End iGaming Engineering
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            From concept to certified production — we cover the full spectrum of
            iGaming technology.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <motion.div
                key={svc.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                custom={i}
                className="group rounded-2xl border border-dark-600 bg-dark-800 p-8 transition-colors hover:border-accent/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {svc.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {svc.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {svc.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
