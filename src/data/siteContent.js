export const company = {
  name: "CoreStack Gaming",
  tagline: "Engineering the Future of iGaming",
  email: "hello@corestackgaming.com",
  phone: "+1 (555) 000-0000",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "Your Dedicated iGaming Engineering Partner",
  sub: "We design, build, and scale gaming platforms, Remote Game Servers, and RNG systems — so you can focus on growing your business.",
  cta: "Book a Consultation",
  ctaHref: "#contact",
  stats: [
    { value: "50+", label: "iGaming Projects Delivered" },
    { value: "8+", label: "Years of Domain Expertise" },
    { value: "99.99%", label: "Platform Uptime SLA" },
  ],
};

export const about = {
  heading: "About CoreStack Gaming",
  paragraphs: [
    "CoreStack Gaming is a specialized outsourcing partner for the iGaming industry. We combine deep domain knowledge with modern engineering practices to deliver mission-critical gaming infrastructure.",
    "From early-stage startups to established operators, our teams integrate seamlessly with yours — providing the technical horsepower you need without the overhead of building an in-house department from scratch.",
    "We understand the regulatory landscape, the performance demands, and the security expectations of real-money gaming. Every line of code we ship reflects that understanding.",
  ],
  highlights: [
    "End-to-end iGaming engineering",
    "Dedicated, embedded development teams",
    "Compliance-aware architecture and delivery",
    "Transparent agile process with full visibility",
  ],
};

export const services = [
  {
    id: "platform",
    icon: "platform",
    title: "Gaming Platform Development",
    description:
      "Full-stack platform engineering — from player-facing frontends and back-office portals to real-time event pipelines and wallet systems. Built for scale, security, and regulatory readiness.",
    features: [
      "Player account management & KYC flows",
      "Bonus engine & promotion systems",
      "Payment gateway integrations",
      "Real-time analytics dashboards",
    ],
  },
  {
    id: "rgs",
    icon: "rgs",
    title: "RGS Engineering",
    description:
      "Purpose-built Remote Game Servers engineered for sub-second round resolution, high concurrency, and seamless game provider integration. We handle the hard infrastructure so your games run flawlessly.",
    features: [
      "Low-latency game round processing",
      "Multi-provider aggregation layers",
      "Jackpot & tournament engines",
      "Comprehensive audit trail logging",
    ],
  },
  {
    id: "rng",
    icon: "rng",
    title: "RNG Systems & Compliance",
    description:
      "Cryptographically sound Random Number Generator implementations with full audit support. Designed to meet the certification requirements of major testing labs and regulatory bodies.",
    features: [
      "CSPRNG implementations",
      "Statistical testing & validation tooling",
      "Certification-ready documentation",
      "Tamper-evident logging & reproducibility",
    ],
  },
];

export const whyUs = [
  {
    icon: "domain",
    title: "Deep iGaming Expertise",
    description:
      "Our engineers live and breathe iGaming. We understand game math, regulatory frameworks, and the performance demands of real-money systems.",
  },
  {
    icon: "scale",
    title: "Built for Scale",
    description:
      "Architectures designed to handle millions of concurrent sessions. Horizontally scalable, cloud-native, and battle-tested under peak loads.",
  },
  {
    icon: "security",
    title: "Security-First Mindset",
    description:
      "Every system we build follows defense-in-depth principles — encrypted data flows, least-privilege access, and comprehensive audit trails.",
  },
  {
    icon: "process",
    title: "Transparent Delivery",
    description:
      "Agile sprints with full visibility. Daily standups, weekly demos, and shared dashboards keep you in control of scope, timeline, and quality.",
  },
];

export const process = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We map your requirements, technical landscape, and regulatory constraints to define a clear project blueprint.",
  },
  {
    step: 2,
    title: "Architecture",
    description:
      "Our architects design scalable, compliant system blueprints — selecting the right stack, patterns, and integration points.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Dedicated squads deliver in agile sprints with CI/CD pipelines, code reviews, and automated testing from day one.",
  },
  {
    step: 4,
    title: "QA & Compliance",
    description:
      "Rigorous functional, performance, and security testing — plus documentation aligned with certification requirements.",
  },
  {
    step: 5,
    title: "Launch & Support",
    description:
      "Smooth production deployment with monitoring, incident response, and ongoing maintenance to keep your systems running.",
  },
];

export const portfolio = [
  {
    title: "Multi-Brand Casino Platform",
    category: "Platform",
    description:
      "End-to-end casino platform supporting 12 white-label brands, 3,000+ games, and 500K monthly active players across regulated European markets.",
  },
  {
    title: "High-Performance RGS",
    category: "RGS",
    description:
      "Remote Game Server processing 2M+ game rounds per day with sub-200ms latency, integrating 15+ game providers through a unified aggregation layer.",
  },
  {
    title: "Certified RNG Module",
    category: "RNG",
    description:
      "Cryptographic RNG system that passed GLI and eCOGRA certification on the first submission, now powering 200+ slot titles.",
  },
  {
    title: "Sportsbook Microservices",
    category: "Platform",
    description:
      "Event-driven sportsbook backend handling 50K concurrent bets during peak events with real-time odds calculation and settlement.",
  },
];

export const contact = {
  heading: "Let's Build Something Great",
  sub: "Whether you're launching a new platform or scaling existing infrastructure, we'd love to hear about your project.",
  email: company.email,
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} ${company.name}. All rights reserved.`,
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};
