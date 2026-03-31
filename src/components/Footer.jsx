import { company, nav, footer } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-dark-600 bg-dark-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="text-lg font-bold text-white">
              <span className="text-accent">{company.name.split(" ")[0]}</span>{" "}
              {company.name.split(" ").slice(1).join(" ")}
            </a>
            <p className="mt-3 max-w-sm text-sm text-gray-500">
              Specialized iGaming engineering partner delivering platforms, RGS,
              and RNG systems for operators and providers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </h4>
            <ul className="space-y-2">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Connect
            </h4>
            <ul className="flex gap-4">
              {footer.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                    aria-label={s.label}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-dark-600 pt-8 text-center text-sm text-gray-600">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
