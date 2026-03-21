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
    title: "Custom Website Development",
    description:
      "From a blank canvas to a fully launched site. I design and build websites from the ground up, tailored to your brand, your audience, and your goals — no templates, no shortcuts.",
    icon: "\uD83D\uDDA5\uFE0F",
    features: [
      "Fully custom design matched to your brand identity",
      "Responsive layouts that work flawlessly on every device",
      "SEO-optimized structure and metadata from day one",
      "Content management system so you can update content yourself",
      "Performance-tuned to load in under 2 seconds",
      "Analytics and conversion tracking integration",
    ],
  },
  {
    id: "website-redesign-optimization",
    title: "Website Redesign & Optimization",
    description:
      "Already have a site that isn't performing? I'll audit what's holding it back — slow load times, confusing navigation, poor mobile experience — and rebuild it into something that actually works for your business.",
    icon: "\uD83D\uDD27",
    features: [
      "Comprehensive UX and performance audit",
      "Modern redesign while preserving your SEO equity",
      "Page speed optimization and Core Web Vitals improvements",
      "Mobile-first responsive overhaul",
      "Accessibility improvements to meet WCAG standards",
      "A/B testing setup for ongoing conversion optimization",
    ],
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    description:
      "Whether you're selling ten products or ten thousand, I build online stores that make buying easy and inventory management painless. Secure payments, real-time stock tracking, and a checkout flow your customers will actually finish.",
    icon: "\uD83D\uDED2",
    features: [
      "Custom storefront design and development",
      "Secure payment processing via Stripe or PayPal",
      "Inventory management and order tracking dashboards",
      "Product filtering, search, and recommendation features",
      "Automated email flows for abandoned carts and receipts",
      "Integration with shipping and fulfillment providers",
    ],
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    description:
      "Need something more than a website? I build interactive web applications — dashboards, planning tools, customer portals, internal platforms — with clean architecture and a focus on the user experience.",
    icon: "\u2699\uFE0F",
    features: [
      "Full-stack application architecture and development",
      "User authentication and role-based access control",
      "Third-party API integrations and data pipelines",
      "Real-time features with WebSockets where needed",
      "Database design and management",
      "Automated testing and CI/CD deployment pipelines",
    ],
  },
];
