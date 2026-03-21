export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$2,500",
    description:
      "A polished, professionally built website for small businesses, freelancers, or personal brands who need a strong online presence without the complexity.",
    features: [
      "Up to 5 custom-designed pages",
      "Mobile-responsive layout",
      "Basic SEO setup and metadata",
      "Contact form with email notifications",
      "Content management system integration",
      "Google Analytics installation",
      "1 round of revisions after initial delivery",
      "2 weeks of post-launch support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$5,000\u2013$10,000",
    description:
      "For businesses that need more firepower — e-commerce, interactive features, third-party integrations, or a complete redesign of an existing site.",
    features: [
      "Up to 15 custom-designed pages",
      "Advanced animations and interactive elements",
      "E-commerce or booking system integration",
      "CMS with custom content models",
      "Third-party API integrations",
      "Performance optimization and Core Web Vitals tuning",
      "SEO strategy and structured data markup",
      "3 rounds of revisions",
      "30 days of post-launch support",
      "Basic analytics dashboard setup",
    ],
    highlighted: true,
    cta: "Let's Build It",
  },
  {
    id: "custom",
    name: "Custom",
    price: "Let's talk",
    description:
      "Full-scale web applications, SaaS platforms, complex dashboards, or anything that doesn't fit neatly into a box. We'll scope it together and I'll give you an honest quote.",
    features: [
      "Unlimited pages and custom functionality",
      "Full-stack application development",
      "User authentication and role management",
      "Database architecture and design",
      "Real-time features and WebSocket support",
      "Automated testing and CI/CD pipeline",
      "Comprehensive documentation and handoff",
      "Ongoing maintenance and retainer options",
      "Priority support and dedicated communication channel",
    ],
    highlighted: false,
    cta: "Start a Conversation",
  },
];
