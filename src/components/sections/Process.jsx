import { motion } from "framer-motion";
import { process } from "../../data/siteContent";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            How We Work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From Discovery to Delivery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A proven engagement model built around transparency, quality, and
            continuous delivery.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent lg:left-1/2 lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i}
                className={`relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step indicator */}
                <div className="absolute left-6 top-0 z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-dark-900 text-sm font-bold text-accent lg:left-1/2 lg:flex">
                  {item.step}
                </div>

                <div className="flex-1 lg:text-right">
                  {i % 2 === 0 ? (
                    <StepContent item={item} />
                  ) : (
                    <div className="hidden lg:block" />
                  )}
                </div>
                <div className="hidden w-10 shrink-0 lg:block" />
                <div className="flex-1">
                  {i % 2 === 1 ? (
                    <StepContent item={item} align="right" />
                  ) : (
                    <div className="hidden lg:block" />
                  )}
                </div>

                {/* Mobile view */}
                <div className="lg:hidden">
                  <StepContent item={item} mobile />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepContent({ item, mobile }) {
  return (
    <div
      className={`rounded-2xl border border-dark-600 bg-dark-800 p-6 ${mobile ? "" : "hidden lg:block"}`}
    >
      <div className="mb-2 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent lg:hidden">
          {item.step}
        </span>
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-gray-400">
        {item.description}
      </p>
    </div>
  );
}
