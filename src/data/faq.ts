export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What does your process look like from start to finish?",
    answer:
      "Every project starts with a discovery call where I learn about your business, your audience, and what you're trying to accomplish. From there, I put together a proposal with a clear scope, timeline, and price. Once we agree on the plan, I move into design — you'll see wireframes and visual mockups before any code is written. After design approval, I build the site, share a staging link for your review, and iterate based on your feedback. When everything looks right, I handle the launch, make sure analytics and DNS are configured properly, and stick around for post-launch support.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A Starter-tier site usually takes 3 to 4 weeks from kickoff to launch. Professional projects land in the 6 to 10 week range depending on complexity — e-commerce builds and sites with heavy integrations tend to be on the longer end. Custom web applications vary more widely, but I'll give you a realistic timeline during the proposal phase. The biggest variable is usually feedback turnaround on your end, so the faster you can review deliverables, the faster we ship.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I primarily build with React, Next.js, and TypeScript on the front end, and Node.js or serverless functions on the back end. For content management, I use headless CMS platforms like Sanity or Contentful so you can edit your own content without touching code. For e-commerce, I work with Stripe, Shopify's Storefront API, or custom solutions depending on the need. Hosting is typically on Vercel or AWS. That said, I pick the tools that fit the project — not the other way around. If you have existing infrastructure or preferences, I'm happy to work within those constraints.",
  },
  {
    question: "Do you offer ongoing maintenance after launch?",
    answer:
      "Yes. Every project includes a post-launch support window (2 weeks for Starter, 30 days for Professional) where I fix any bugs and handle minor adjustments at no extra cost. Beyond that, I offer monthly maintenance retainers starting at $300/month that cover security updates, performance monitoring, content changes, and small feature additions. Most of my clients find the retainer worthwhile because it means they always have someone they trust on call instead of scrambling to find a developer when something breaks.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "At a minimum, I need a clear idea of what the site should accomplish and who it's for. Beyond that, the more you can provide upfront the better: your logo and brand assets, copy or at least rough content for each page, examples of sites you like, and any accounts or credentials I'll need (domain registrar, hosting, analytics, etc.). If you don't have content or branding nailed down yet, that's fine — I can recommend copywriters and designers I've worked with, or we can work through it together during the discovery phase.",
  },
  {
    question: "How does payment work?",
    answer:
      "For Starter and Professional projects, I require a 50% deposit upfront to reserve your spot in my schedule, with the remaining 50% due before the final launch. For Custom projects, we typically break payments into milestones — for example, 30% at kickoff, 30% at design approval, and 40% at launch. I send invoices through Stripe, and I accept credit cards, ACH bank transfers, or wire transfers. I don't start work until the deposit clears, and I don't launch the site until the final payment is received. No surprises on either side.",
  },
];
