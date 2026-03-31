import { useState, useEffect, useCallback } from "react";
import { company, nav } from "../data/siteContent";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && mobileOpen) closeMobile();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  const handleClick = () => closeMobile();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/90 backdrop-blur-xl shadow-lg shadow-accent/5 border-b border-accent/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-bold uppercase tracking-wider text-white">
          <span className="text-accent glow-text">{company.name.split(" ")[0]}</span>
          <span className="text-gray-100">
            {" "}
            {company.name.split(" ").slice(1).join(" ")}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium uppercase tracking-wide text-gray-500 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded border border-accent bg-accent/10 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-accent transition-all hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/20"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        <button
          className="text-accent md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-nav"
          role="menu"
          className="border-t border-accent/10 bg-dark-900/98 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleClick}
                  className="block rounded px-4 py-3 text-sm font-medium uppercase tracking-wide text-gray-400 transition-colors hover:bg-accent/5 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={handleClick}
                className="block rounded border border-accent bg-accent/10 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-accent transition-all hover:bg-accent/20"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
