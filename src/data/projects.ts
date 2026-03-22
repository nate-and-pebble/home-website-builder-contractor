export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  url: string;
  clientType: string;
  outcome: string;
  testimonial?: Testimonial;
  techUsed: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "clay-and-kiln",
    title: "Clay & Kiln — Artisan Pottery E-Commerce",
    description:
      "Full-featured online store for handmade pottery with custom glaze filtering and limited-drop waitlists.",
    longDescription:
      "Clay & Kiln is a boutique e-commerce platform built for Portland-based ceramicist Lena Morales. The site needed to do more than sell pots — it had to convey the tactile, handmade quality of her work while handling real-time inventory for pieces that often sell out in minutes. I built a custom product filtering system that lets buyers search by glaze type, firing method, and vessel shape. The waitlist feature sends automatic notifications when limited-edition collections go live, and the admin dashboard gives Lena full control over product listings, pricing, and order fulfillment without touching a line of code.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=340&fit=crop&q=80",
    url: "https://clayandkiln.com",
    clientType: "Small Business / Artist",
    outcome:
      "+340% online revenue in 6 months. Drops sell out in under 12 minutes.",
    testimonial: {
      quote:
        "Nate understood my work in a way no other developer has. The site feels like an extension of my studio — and my sales have never been better.",
      author: "Lena Morales",
      role: "Owner & Ceramicist, Clay & Kiln",
    },
    techUsed: ["Next.js", "Stripe", "Sanity CMS", "Tailwind CSS", "Vercel"],
    featured: true,
  },
  {
    id: "clearpath-mortgage",
    title: "ClearPath — Mortgage Planning Tool",
    description:
      "Interactive mortgage calculator helping first-time buyers understand borrowing power and equity.",
    longDescription:
      "ClearPath Mortgage needed a web tool that could demystify the homebuying process for their clients. I designed and built a multi-step planning wizard that walks users through income verification, debt-to-income calculations, and real-time rate comparisons. The tool generates a personalized affordability report that users can save, print, or share directly with a ClearPath loan officer. On the back end, the application integrates with third-party rate APIs and stores anonymized session data so the ClearPath team can identify trends in what buyers are searching for.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop&q=80",
    url: "https://clearpathmortgage.com/planner",
    clientType: "Financial Services",
    outcome:
      "2.8x higher lead conversion. 7+ minute average session duration.",
    testimonial: {
      quote:
        "Our clients keep telling us the planner is the reason they chose us over other lenders. It builds trust before we ever pick up the phone.",
      author: "David Chen",
      role: "VP of Digital Strategy, ClearPath Mortgage",
    },
    techUsed: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Chart.js",
      "AWS Lambda",
    ],
    featured: true,
  },
  {
    id: "tavola-restaurant",
    title: "Tavola — Farm-to-Table Restaurant",
    description:
      "Image-driven site for an upscale Italian restaurant with online reservations and seasonal menus.",
    longDescription:
      "Tavola is a farm-to-table Italian restaurant in Austin that needed a site matching the quality of their food. The previous site was a dated WordPress template that buried the menu three clicks deep and had no reservation flow. I rebuilt everything from scratch with a focus on speed, gorgeous food photography, and a frictionless reservation experience powered by a custom OpenTable integration. The seasonal menu is managed through a headless CMS, so the kitchen team can update dishes, prices, and availability on the fly. I also built a private dining inquiry form that feeds directly into the events coordinator's calendar.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=340&fit=crop&q=80",
    url: "https://tavolaaustin.com",
    clientType: "Restaurant / Hospitality",
    outcome:
      "+185% online reservations. Bounce rate dropped from 68% to 22%.",
    techUsed: [
      "Astro",
      "Tailwind CSS",
      "Sanity CMS",
      "OpenTable API",
      "Cloudflare Pages",
    ],
    featured: true,
  },
  {
    id: "pulseboard-saas",
    title: "PulseBoard — SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard with customizable widgets, team permissions, and automated PDF reports.",
    longDescription:
      "PulseBoard was a funded startup with a solid product but no way for customers to visualize their data. They needed a dashboard that felt native to their platform — not a bolted-on third-party embed. I built a modular widget system where end users can drag, resize, and configure charts, tables, and KPI cards. Role-based access control lets account admins decide what each team member can see. The automated reporting engine generates branded PDF summaries on a weekly or monthly cadence and delivers them via email. The whole front end communicates with PulseBoard's existing REST API, so there was zero disruption to their back-end infrastructure.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop&q=80",
    url: "https://pulseboardapp.com",
    clientType: "B2B SaaS Startup",
    outcome:
      "+18% customer retention. Support tickets dropped 40%.",
    testimonial: {
      quote:
        "We interviewed five agencies and three freelancers. Nate was the only one who asked about our customers before asking about our tech stack. That told us everything.",
      author: "Priya Sharma",
      role: "Co-Founder & CEO, PulseBoard",
    },
    techUsed: [
      "React",
      "TypeScript",
      "D3.js",
      "Zustand",
      "Tailwind CSS",
      "Puppeteer",
      "AWS S3",
    ],
    featured: true,
  },
  {
    id: "ironform-fitness",
    title: "IronForm — Fitness App Landing Page",
    description:
      "High-conversion landing page with animated previews, waitlist capture, and smart app store links.",
    longDescription:
      "IronForm was preparing to launch their AI-powered workout app and needed a landing page that could build hype, collect emails, and convert visitors into day-one downloads. I created a single-page experience with smooth scroll-triggered animations showing the app in action, an interactive feature carousel, and a waitlist form integrated with their Mailchimp audience. After launch, the page dynamically switched from waitlist mode to download mode with smart links that detect iOS vs. Android and route users to the correct store. The page was built for speed and SEO, scoring 98 on Lighthouse performance.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=340&fit=crop&q=80",
    url: "https://ironformapp.com",
    clientType: "Mobile App / Startup",
    outcome:
      "11,000+ waitlist signups. 38% day-one conversion rate.",
    testimonial: {
      quote:
        "The landing page set the tone for our entire brand. People kept saying the site alone made them trust the app before they even tried it.",
      author: "Marcus Webb",
      role: "Founder, IronForm",
    },
    techUsed: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Mailchimp API",
      "Vercel",
    ],
    featured: false,
  },
];
