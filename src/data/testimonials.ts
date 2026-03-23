export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-rachel",
    quote:
      "We interviewed several developers and Nate was the only one who treated our rebrand like a strategy project, not just a website build. The new site has completely changed how prospects perceive us — and our inbound pipeline has never been stronger.",
    author: "Rachel Torres",
    role: "Managing Director",
    company: "BrightSpark Creative",
  },
  {
    id: "testimonial-david",
    quote:
      "Nate built us a mortgage planning tool that our competitors still haven't matched. He took a genuinely complex financial workflow and made it feel simple for first-time homebuyers. The project came in on budget and the ongoing support has been excellent.",
    author: "David Chen",
    role: "VP of Digital Strategy",
    company: "ClearPath Mortgage",
  },
  {
    id: "testimonial-priya",
    quote:
      "We needed a developer who could build a production-grade dashboard without needing months of hand-holding on our business logic. Nate dove in, understood the problem fast, and shipped something our customers genuinely love using. He's our first call for any front-end work now.",
    author: "Priya Sharma",
    role: "Co-Founder & CEO",
    company: "PulseBoard",
  },
  {
    id: "testimonial-marcus",
    quote:
      "Our app launch landing page captured over 11,000 signups before we even went live. Nate nailed the design, the messaging, and the technical execution. The page loaded instantly, looked incredible on every device, and converted like crazy.",
    author: "Marcus Webb",
    role: "Founder",
    company: "IronForm",
  },
  {
    id: "testimonial-sofia",
    quote:
      "I came to Nate with a vague idea and a tight budget. He helped me figure out what I actually needed, built a site that looks way more expensive than it was, and taught me how to manage the content myself. Five stars isn't enough.",
    author: "Sofia Gutierrez",
    role: "Owner & Head Chef",
    company: "Tavola",
  },
];
