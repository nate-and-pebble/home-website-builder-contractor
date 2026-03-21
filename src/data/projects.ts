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
      "A full-featured online store for a ceramic artist selling handmade pottery, with inventory management, custom glaze filtering, and a built-in waitlist for limited drops.",
    longDescription:
      "Clay & Kiln is a boutique e-commerce platform built for Portland-based ceramicist Lena Morales. The site needed to do more than sell pots — it had to convey the tactile, handmade quality of her work while handling real-time inventory for pieces that often sell out in minutes. I built a custom product filtering system that lets buyers search by glaze type, firing method, and vessel shape. The waitlist feature sends automatic notifications when limited-edition collections go live, and the admin dashboard gives Lena full control over product listings, pricing, and order fulfillment without touching a line of code.",
    image: "/projects/clay-and-kiln.jpg",
    url: "https://clayandkiln.com",
    clientType: "Small Business / Artist",
    outcome:
      "Online revenue increased 340% in the first six months. Average drop sellout time went from 4 hours to under 12 minutes thanks to the waitlist notification system.",
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
      "An interactive mortgage calculator and planning dashboard that helps first-time homebuyers understand their borrowing power, monthly costs, and long-term equity.",
    longDescription:
      "ClearPath Mortgage needed a web tool that could demystify the homebuying process for their clients. I designed and built a multi-step planning wizard that walks users through income verification, debt-to-income calculations, and real-time rate comparisons. The tool generates a personalized affordability report that users can save, print, or share directly with a ClearPath loan officer. On the back end, the application integrates with third-party rate APIs and stores anonymized session data so the ClearPath team can identify trends in what buyers are searching for.",
    image: "/projects/clearpath-mortgage.jpg",
    url: "https://clearpathmortgage.com/planner",
    clientType: "Financial Services",
    outcome:
      "Lead conversion from the planning tool was 2.8x higher than the previous static contact form. Average session duration on the tool page exceeded 7 minutes.",
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
      "A warm, image-driven website for an upscale Italian restaurant featuring online reservations, a seasonal menu system, and private event booking.",
    longDescription:
      "Tavola is a farm-to-table Italian restaurant in Austin that needed a site matching the quality of their food. The previous site was a dated WordPress template that buried the menu three clicks deep and had no reservation flow. I rebuilt everything from scratch with a focus on speed, gorgeous food photography, and a frictionless reservation experience powered by a custom OpenTable integration. The seasonal menu is managed through a headless CMS, so the kitchen team can update dishes, prices, and availability on the fly. I also built a private dining inquiry form that feeds directly into the events coordinator's calendar.",
    image: "/projects/tavola-restaurant.jpg",
    url: "https://tavolaaustin.com",
    clientType: "Restaurant / Hospitality",
    outcome:
      "Online reservations increased 185% within three months of launch. Bounce rate dropped from 68% to 22%, and the site loads in under 1.5 seconds on mobile.",
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
      "A real-time analytics dashboard for a B2B SaaS startup, featuring customizable widgets, team-level permissions, and automated PDF reporting.",
    longDescription:
      "PulseBoard was a funded startup with a solid product but no way for customers to visualize their data. They needed a dashboard that felt native to their platform — not a bolted-on third-party embed. I built a modular widget system where end users can drag, resize, and configure charts, tables, and KPI cards. Role-based access control lets account admins decide what each team member can see. The automated reporting engine generates branded PDF summaries on a weekly or monthly cadence and delivers them via email. The whole front end communicates with PulseBoard's existing REST API, so there was zero disruption to their back-end infrastructure.",
    image: "/projects/pulseboard-dashboard.jpg",
    url: "https://pulseboardapp.com",
    clientType: "B2B SaaS Startup",
    outcome:
      "Customer retention improved by 18% after the dashboard launch. Support tickets related to data questions dropped by over 40%.",
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
      "A high-conversion landing page for a fitness app launch, with animated workout previews, waitlist capture, and deep links to app stores.",
    longDescription:
      "IronForm was preparing to launch their AI-powered workout app and needed a landing page that could build hype, collect emails, and convert visitors into day-one downloads. I created a single-page experience with smooth scroll-triggered animations showing the app in action, an interactive feature carousel, and a waitlist form integrated with their Mailchimp audience. After launch, the page dynamically switched from waitlist mode to download mode with smart links that detect iOS vs. Android and route users to the correct store. The page was built for speed and SEO, scoring 98 on Lighthouse performance.",
    image: "/projects/ironform-fitness.jpg",
    url: "https://ironformapp.com",
    clientType: "Mobile App / Startup",
    outcome:
      "Captured over 11,000 waitlist signups pre-launch. Day-one conversion rate from landing page to app download was 38%.",
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
