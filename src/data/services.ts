export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "custom-website-development",
    title: "Custom Websites",
    description:
      "Blank canvas to launch. Built for your brand and goals.",
    icon: "monitor",
    features: [
      "Custom design matched to your brand",
      "Responsive on every device",
      "SEO-optimized from day one",
      "CMS for easy content updates",
      "Sub-2-second load times",
    ],
  },
  {
    id: "website-redesign-optimization",
    title: "Redesign & Optimization",
    description:
      "Find what's broken. Rebuild it to convert.",
    icon: "wrench",
    features: [
      "Full UX and performance audit",
      "Modern redesign, SEO preserved",
      "Core Web Vitals optimization",
      "Mobile-first responsive overhaul",
      "WCAG accessibility compliance",
    ],
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce",
    description:
      "Stores that make buying easy. Checkout flows that convert.",
    icon: "shopping-cart",
    features: [
      "Custom storefront design",
      "Stripe / PayPal integration",
      "Inventory & order management",
      "Smart product filtering & search",
      "Automated cart recovery emails",
    ],
  },
  {
    id: "web-application-development",
    title: "Web Applications",
    description:
      "Dashboards, portals, and interactive tools. Clean architecture.",
    icon: "cog",
    features: [
      "Full-stack architecture",
      "Auth & role-based access",
      "API integrations & data pipelines",
      "Real-time features",
      "CI/CD deployment pipelines",
    ],
  },
];
