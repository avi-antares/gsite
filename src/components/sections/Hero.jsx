import { motion } from "framer-motion";
import { hero } from "../../data/siteContent";

export default function Hero() {
  return (
    <section className="gaming-grid relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="scanline pointer-events-none absolute inset-0" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/6 blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 h-[350px] w-[500px] rounded-full bg-neon/5 blur-[100px]" />
        <div className="absolute top-1/3 left-10 h-[200px] w-[300px] rounded-full bg-purple/5 blur-[80px]" />
      </div>

      {/* Corner accents */}
      <div className="pointer-events-none absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-accent/40 to-transparent" />
      <div className="pointer-events-none absolute top-0 left-0 h-px w-32 bg-gradient-to-r from-accent/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-px bg-gradient-to-t from-neon/30 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-px w-32 bg-gradient-to-l from-neon/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/5 px-5 py-1.5 font-display text-sm font-semibold uppercase tracking-widest text-accent"
        >
          iGaming Outsourcing Partner
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-5xl font-display text-5xl font-bold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={hero.ctaHref}
            className="glow-green rounded border border-accent bg-accent px-8 py-3.5 text-base font-bold uppercase tracking-wide text-dark-900 transition-all hover:bg-accent-light hover:shadow-accent/40"
          >
            {hero.cta}
          </a>
          <a
            href="#services"
            className="rounded border border-dark-500 px-8 py-3.5 text-base font-semibold uppercase tracking-wide text-gray-400 transition-all hover:border-neon/50 hover:text-neon"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-8 border-t border-dark-600 pt-10 sm:grid-cols-3"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-accent glow-text">
                {stat.value}
              </p>
              <p className="mt-1 text-sm uppercase tracking-wider text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
