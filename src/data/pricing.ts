export interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: number;
  setupFee: number;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 79,
    setupFee: 499,
    description:
      "Everything you need for a professional, worry-free web presence. Perfect for small businesses that want to look polished without the hassle.",
    features: [
      "Hosting & SSL included",
      "Uptime monitoring",
      "Security & backups",
      "Mobile-optimized site",
      "Up to 4 content updates/month",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 197,
    setupFee: 499,
    description:
      "For businesses ready to grow. Everything in Starter plus SEO, analytics, and unlimited content updates to turn your site into a lead-generating machine.",
    features: [
      "Everything in Starter",
      "Unlimited content updates (on request)",
      "Shopify payment integration",
      "Local SEO optimization",
      "Google Analytics dashboard access",
      "Performance optimization",
      "Image optimization",
      "Accessibility monitoring",
    ],
    highlighted: true,
    cta: "Start Growing",
  },
  {
    id: "full-presence",
    name: "Full Presence",
    monthlyPrice: 447,
    setupFee: 499,
    description:
      "Your complete digital partner. Everything in Growth plus booking, email marketing, social media, and strategic guidance for maximum impact.",
    features: [
      "Everything in Growth",
      "Booking/scheduling integration",
      "Email marketing setup & management",
      "Social media landing pages",
      "Monthly strategy check-in",
      "Priority support",
      "Quarterly site refresh",
      "Custom features as needed",
    ],
    highlighted: false,
    cta: "Go Full Presence",
  },
];
