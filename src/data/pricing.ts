export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$297",
    period: "/mo",
    description:
      "A professionally built and maintained web presence. Perfect for small businesses and personal brands who want to look polished without the hassle.",
    features: [
      "Custom-designed responsive website",
      "Hosting, SSL, and domain management",
      "Monthly content updates (up to 2)",
      "Uptime monitoring and security patches",
      "Basic SEO setup and metadata",
      "Contact form with email notifications",
      "Google Analytics dashboard",
      "Email support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$697",
    period: "/mo",
    description:
      "For businesses ready to grow. Ongoing development, SEO strategy, and priority support to turn your site into a lead-generating machine.",
    features: [
      "Everything in Starter",
      "Up to 15 pages with custom functionality",
      "Monthly SEO optimization and reporting",
      "CMS with custom content models",
      "Performance tuning and Core Web Vitals",
      "Third-party integrations (booking, payments, etc.)",
      "Analytics insights and conversion tracking",
      "Priority support with 24-hour response",
      "Bi-weekly strategy calls",
    ],
    highlighted: true,
    cta: "Start Growing",
  },
  {
    id: "partner",
    name: "Partner",
    price: "$1,497",
    period: "/mo",
    description:
      "Your dedicated digital partner. Full-stack development, strategic guidance, and white-glove support for businesses that need a technical co-pilot.",
    features: [
      "Everything in Growth",
      "Unlimited pages and custom features",
      "Full-stack application development",
      "E-commerce or SaaS platform builds",
      "Database architecture and API integrations",
      "Automated testing and CI/CD pipeline",
      "Dedicated Slack channel",
      "Weekly strategy sessions",
      "Same-day priority support",
    ],
    highlighted: false,
    cta: "Let's Partner Up",
  },
];
