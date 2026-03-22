# spec.md — itsmenate.com Personal Website

> **Owner:** Nate | **Domain:** itsmenate.com | **Stack:** Next.js 15 (App Router) + React 19 + TypeScript
> **Deploy target:** Vercel | **Status:** Spec phase — awaiting remaining requirements from Nate

---

## 1. Vision & UX Goals

A personal website for Nate — website builder & contractor. The site should feel **premium, animated, and memorable** while remaining fast and accessible. It blends:

- **robbowen.digital** — illustrated hero with personality, scroll-triggered sections, "Scroll" indicator, clean typography, project showcase cards
- **axon.ai** — dark/bold aesthetic, large hero text with color accents, smooth scroll-driven animations, logo marquee, polished CTA sections
- **jrmy.dev** — 3D isometric portfolio grid, section-based single page (bio, tech, social, work), playful energy

The result: a single-page (or minimal-page) site with a **cinematic intro sequence**, smooth scroll-driven animations, and clear sections showcasing Nate's work, skills, and contact info.

---

## 2. Intro Sequence — "It's me nate"

### Behavior

1. Page loads to a **full-viewport dark screen** (background: near-black, e.g. `#0a0a0a`).
2. After a brief pause (~300ms), a **typewriter-by-letter** animation spells out `it's me nate` in a large monospace or display font, centered on screen.
3. Each letter appears one at a time with a blinking cursor. Timing: ~80ms per character, with a slight random jitter (±20ms) for organic feel.
4. After the full phrase is typed, a **short hold** (~800ms).
5. The text and background **drop down** (translate-Y off-screen or scale-away) to reveal the main page content beneath, like a curtain dropping. Duration: ~600ms with an `easeInOut` curve.
6. Once the intro exits, the main page is fully interactive and the intro DOM is removed or hidden (`display: none`) so it doesn't interfere with scroll.

### Pseudo-code

```tsx
// components/IntroSequence.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHRASE = "it's me nate";
const CHAR_DELAY = 80; // ms per character
const JITTER = 20; // ±ms random
const HOLD_AFTER_TYPE = 800; // ms pause after full phrase
const EXIT_DURATION = 0.6; // seconds

export function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "exiting" | "done">("typing");

  useEffect(() => {
    if (phase !== "typing") return;
    if (displayedChars >= PHRASE.length) {
      setPhase("holding");
      setTimeout(() => setPhase("exiting"), HOLD_AFTER_TYPE);
      return;
    }
    const jitter = Math.random() * JITTER * 2 - JITTER;
    const timeout = setTimeout(
      () => setDisplayedChars((c) => c + 1),
      CHAR_DELAY + jitter
    );
    return () => clearTimeout(timeout);
  }, [displayedChars, phase]);

  if (phase === "done") return null;

  return (
    <AnimatePresence onExitComplete={() => { setPhase("done"); onComplete(); }}>
      {phase !== "done" && (
        <motion.div
          key="intro"
          initial={{ y: 0 }}
          exit={{ y: "100vh" }}
          transition={{ duration: EXIT_DURATION, ease: "easeInOut" }}
          className="intro-overlay" // fixed inset-0, z-50, bg-[#0a0a0a], flex items-center justify-center
        >
          <span className="intro-text font-mono text-4xl md:text-6xl text-white">
            {PHRASE.slice(0, displayedChars)}
            <span className="cursor animate-blink">|</span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Usage in page.tsx:
// const [introComplete, setIntroComplete] = useState(false);
// <IntroSequence onComplete={() => setIntroComplete(true)} />
// {introComplete && <MainContent />} — or always render but control scroll-lock
```

### Accessibility

- Respect `prefers-reduced-motion`: if enabled, skip the typewriter entirely — show the full phrase immediately, then fade out the overlay in ~200ms (no drop animation).
- The intro overlay should have `aria-hidden="true"` with a visually-hidden `<h1>` behind it that screen readers see immediately.

---

## 3. Page Sections

### 3.1 Hero (post-intro)

- **Layout:** Full viewport height. Large heading text + subtitle + optional scroll indicator (vertical line + "scroll" text, like robbowen.digital).
- **Content:** Nate's name/title — e.g. "Website Builder & Contractor" — short tagline.
- **Animation:** Text fades/slides in after intro drops. Staggered word or line reveal using SplitType + GSAP or Framer Motion.
- **Background:** Dark or gradient, potentially with subtle particle/grain effect.

### 3.2 About / Bio

- **Layout:** Two-column on desktop (text left, photo/illustration right). Stacked on mobile.
- **Content:** Short bio about Nate — who he is, what he does, where he's based.
- **Animation:** Scroll-triggered fade-in-up for text, parallax or scale-in for image.

### 3.3 Services / What I Do

- **Layout:** Card grid (2-3 columns desktop, stacked mobile).
- **Content:** Website building, contracting services, tech stack capabilities.
- **Animation:** Cards stagger in on scroll. Hover: subtle lift + shadow (like robbowen.digital project cards).

### 3.4 Work / Portfolio

- **Layout:** Featured project cards — large image/screenshot + title + short description + link.
- **Content:** Showcase of Nate's shipped projects (pottery site, mortgage planner, etc.).
- **Animation:** Scroll-triggered reveal. Cards could have a subtle 3D tilt on hover (inspired by jrmy.dev's isometric aesthetic, but lighter).

### 3.5 Tech Stack (optional)

- **Layout:** Icon grid or marquee/logo strip (like axon.ai's brand logos).
- **Content:** Next.js, React, Supabase, Vercel, TypeScript, etc.
- **Animation:** Infinite horizontal scroll marquee, or scroll-triggered stagger.

### 3.6 Contact / CTA

- **Layout:** Centered section with bold heading + email link / contact form / social links.
- **Content:** Call to action — "Let's build something." Email, GitHub, LinkedIn, etc.
- **Animation:** Scale-in or fade-in. Button hover effects.

### 3.7 Footer

- **Layout:** Minimal — copyright, social icons, "Built by Nate" tagline.
- **Content:** © 2026 Nate. Social links.

---

## 4. Animation & Interaction Specs

### Scroll Behavior

| Behavior | Implementation |
|---|---|
| Smooth scroll | **Lenis** — buttery smooth scroll with lerp. Lightweight, works great with GSAP ScrollTrigger. |
| Scroll-triggered reveals | **GSAP ScrollTrigger** — batch animations, pin sections if needed. |
| Parallax layers | GSAP ScrollTrigger with `scrub: true` on background elements. |

### Micro-interactions

| Element | Interaction |
|---|---|
| Navigation links | Underline slide-in on hover (CSS transition) |
| CTA buttons | Scale up + glow/shadow on hover |
| Project cards | Subtle 3D tilt on hover via CSS `transform: perspective() rotateX() rotateY()` tracked to cursor position |
| Scroll indicator | Gentle bounce animation (CSS keyframe), fades out after user scrolls past hero |
| Section headings | SplitType letter/word split + staggered GSAP reveal on scroll |

### Transitions

- **Intro → Hero:** The intro overlay drops down (translateY: 100vh), hero content fades up simultaneously.
- **Section reveals:** Each section's content fades in + translates up 30-50px as it enters viewport (GSAP ScrollTrigger, `start: "top 80%"`).
- **Exit animations:** Not needed for single-page; if multi-page later, use Next.js route transitions with Framer Motion `AnimatePresence`.

---

## 5. Recommended Libraries

| Library | Purpose | Version |
|---|---|---|
| **framer-motion** | Intro sequence, AnimatePresence, layout animations, `useReducedMotion()` hook | ^11.x |
| **gsap** + **@gsap/react** | ScrollTrigger, SplitText (or SplitType), timeline-based scroll animations | ^3.12 |
| **lenis** | Smooth scroll | ^1.x |
| **split-type** | Text splitting for per-letter/word animations (free alternative to GSAP SplitText) | ^0.3 |
| **tailwindcss** | Utility-first styling | ^4.x (already in Next.js 15 default) |

### Why this combo

- **Framer Motion** for component-level animations (mount/unmount, layout, the intro sequence).
- **GSAP + ScrollTrigger** for scroll-driven animations — it's the industry standard for scroll-linked timelines and is far more capable than Framer Motion for this use case.
- **Lenis** for smooth scrolling — lightweight, pairs perfectly with GSAP ScrollTrigger.
- **SplitType** for text splitting — free, works with GSAP. GSAP's own SplitText requires a paid Club license.

---

## 6. Accessibility

| Concern | Approach |
|---|---|
| `prefers-reduced-motion` | All animations gated behind a `useReducedMotion()` check. If reduced motion: skip intro typewriter, disable parallax, replace slide-ins with instant opacity transitions. Framer Motion has `useReducedMotion()` built in. For GSAP, check `window.matchMedia("(prefers-reduced-motion: reduce)")` and use `gsap.matchMedia()`. |
| Keyboard navigation | All interactive elements focusable. Visible focus rings. Skip-to-content link. |
| Semantic HTML | Proper heading hierarchy (h1 → h2 → h3). Landmarks (`<main>`, `<nav>`, `<footer>`). Alt text on all images. |
| Color contrast | Minimum WCAG AA (4.5:1 for body text, 3:1 for large text). Test with axe or Lighthouse. |
| Screen readers | Intro overlay is `aria-hidden`. Main content has proper structure from the start. No content locked behind JS animations — everything is in the DOM, animations are progressive enhancement. |

---

## 7. Performance Considerations

| Concern | Strategy |
|---|---|
| Bundle size | Tree-shake GSAP (import only ScrollTrigger, not the full package). Lazy-load below-fold sections. Framer Motion supports `LazyMotion` for reduced bundle. |
| Images | Use Next.js `<Image>` with automatic WebP/AVIF, `priority` on hero image, `loading="lazy"` on everything else. |
| Fonts | 1-2 fonts max. Use `next/font` for zero-layout-shift font loading. Subset if using a display font. |
| Smooth scroll perf | Lenis uses `requestAnimationFrame` — very lightweight. Avoid layout-triggering CSS in scroll handlers. Use `will-change: transform` on animated elements sparingly. |
| GSAP perf | Use `gsap.context()` for cleanup. Batch ScrollTrigger instances. Prefer `transform` and `opacity` (compositor-only properties). |
| Lighthouse target | 90+ Performance, 100 Accessibility, 100 Best Practices. |
| First paint | The intro overlay is pure CSS + minimal JS — no layout shifts. Main content can load in background while intro plays. |

---

## 8. Component & File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, Lenis provider
│   ├── page.tsx                # Home page: orchestrates intro + sections
│   └── globals.css             # Tailwind + custom CSS (cursor blink keyframe, etc.)
│
├── components/
│   ├── intro/
│   │   └── IntroSequence.tsx   # Full-screen typewriter intro + drop transition
│   │
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav (appears after intro)
│   │   └── Footer.tsx          # Minimal footer
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section (name, title, scroll indicator)
│   │   ├── About.tsx           # Bio section
│   │   ├── Services.tsx        # What I do / services cards
│   │   ├── Portfolio.tsx       # Work / project showcase
│   │   ├── TechStack.tsx       # Tech logos marquee (optional)
│   │   └── Contact.tsx         # CTA + contact info
│   │
│   └── ui/
│       ├── ScrollIndicator.tsx # Animated scroll-down indicator
│       ├── ProjectCard.tsx     # Individual project card with hover tilt
│       ├── ServiceCard.tsx     # Service offering card
│       ├── TextReveal.tsx      # Reusable scroll-triggered text reveal (SplitType + GSAP)
│       ├── Marquee.tsx         # Infinite scroll marquee for logos/tech
│       └── SectionWrapper.tsx  # Wrapper with scroll-triggered fade-in
│
├── hooks/
│   ├── useLenis.ts             # Lenis smooth scroll setup
│   ├── useScrollTrigger.ts     # GSAP ScrollTrigger helper
│   └── useReducedMotion.ts     # prefers-reduced-motion detection
│
├── lib/
│   └── gsap.ts                 # GSAP registration (ScrollTrigger plugin)
│
└── data/
    ├── projects.ts             # Portfolio project data
    └── services.ts             # Services data
```

---

## 9. Color & Typography Direction

> **Pending Nate's input.** Suggested starting points:

- **Theme:** Dark mode primary (like axon.ai), with potential light mode toggle later.
- **Primary font:** Modern geometric sans (e.g., Inter, Geist, or something with more personality like Space Grotesk).
- **Display font:** For hero/headings — bold, slightly condensed or distinctive (e.g., Cabinet Grotesk, Clash Display).
- **Mono font:** For the intro typewriter — JetBrains Mono or Geist Mono (both available via `next/font`).
- **Accent color:** TBD — something that pops on dark backgrounds (electric blue, warm orange, etc.).

---

## 10. Positioning Statement

The hero and about sections should communicate a clear **positioning statement** — not just "website builder" but a specific value proposition that differentiates Nate from generic freelancers.

**Implementation notes:**

- Hero subtitle should be a one-liner that answers: "Why hire Nate instead of someone else?" Example structure: _"I build [type of thing] for [type of client] that [key outcome]."_
- The About section should reinforce this positioning with specifics: years of experience, notable results, the tech advantage (AI-augmented workflow, full-stack capability, etc.).
- Avoid generic phrases like "passionate developer" — lead with outcomes and credibility.

---

## 11. CTA Hierarchy & Primary Conversion Goal

The site has **one primary conversion goal**: get a potential client to reach out (via the contact form or email). Every section should funnel toward this action.

### CTA Placement

| Location | CTA Type | Copy Direction |
|---|---|---|
| Hero section | Primary CTA button | "Let's Talk" / "Start a Project" — large, prominent, above the fold |
| After Services section | Secondary CTA | "Ready to build?" + button linking to contact |
| After Portfolio section | Secondary CTA | "Want results like these?" + button linking to contact |
| Contact section | Primary CTA | The form itself, or prominent email link |
| Sticky header (after scroll) | Subtle CTA button | Small "Get in Touch" button in nav, appears after hero scrolls out |

### Design Rules

- **One primary button style** (filled, accent color) used only for the conversion CTA. No competing primary buttons.
- Secondary CTAs use outlined or ghost style.
- CTA buttons should have clear hover/focus states with micro-animation (scale + shadow).
- On mobile, consider a sticky bottom CTA bar that appears after scrolling past the hero.

---

## 12. Proof & Case Studies

Social proof is critical for a contractor site. The Portfolio section (§3.4) should be upgraded from a simple showcase to include **proof elements**.

### Per-project proof points

Each portfolio card should support (all optional, display if available):

- **Client type** — e.g., "Small business", "SaaS startup"
- **Outcome/metric** — e.g., "3x increase in leads", "Launched in 2 weeks"
- **Testimonial quote** — 1-2 sentence client quote with attribution
- **Tech used** — small tag pills (Next.js, Supabase, etc.)

### Standalone testimonials

Consider a dedicated **Testimonials** subsection (between Portfolio and Contact) if 3+ testimonials are available. Layout: horizontally scrollable cards or a simple vertical stack.

### Implementation notes

- Store proof data alongside project data in `src/data/projects.ts` — add optional `outcome`, `testimonial`, `clientType` fields.
- If no testimonials exist yet, design the card layout to support them so they can be added later without layout changes.

---

## 13. Pricing & Packages

A **Pricing** or **Packages** section reduces friction by setting expectations before the contact form.

### Layout

- 2-3 tier cards side by side (desktop), stacked (mobile).
- Each card: package name, price or price range, bullet list of what's included, CTA button.
- One card visually highlighted as "Most Popular" or "Recommended".

### Suggested tiers (placeholder — Nate to finalize)

| Tier | Price Range | Includes |
|---|---|---|
| **Starter** | $X,XXX | Single-page site, responsive, basic SEO, 1 round of revisions |
| **Professional** | $X,XXX – $XX,XXX | Multi-page site, CMS integration, animations, 2 rounds of revisions |
| **Custom** | "Let's talk" | Full custom build, advanced features, ongoing support |

### Implementation notes

- Store pricing data in `src/data/pricing.ts`.
- Add a `PricingCard.tsx` component to `src/components/ui/`.
- Add a `Pricing.tsx` section to `src/components/sections/`.
- If Nate prefers not to show prices publicly, replace with "Starting at..." or remove prices and keep the scope descriptions only.

---

## 14. Working With Me / FAQ

A short section that answers common client questions and reduces pre-contact anxiety.

### Layout

- Accordion/collapsible FAQ list, or simple stacked Q&A blocks.
- 4-6 questions max to keep it scannable.

### Suggested questions (Nate to finalize)

1. **What's your process?** — Brief overview: discovery → design → build → launch → support.
2. **How long does a project take?** — Typical timelines by project size.
3. **What tech do you use?** — Brief answer linking to the Tech Stack section.
4. **Do you offer ongoing maintenance?** — Yes/no and what that looks like.
5. **What do you need from me to get started?** — What clients should have ready.
6. **What's the payment structure?** — Deposit + milestones, etc.

### Implementation notes

- Store FAQ data in `src/data/faq.ts`.
- Add `FAQ.tsx` to `src/components/sections/`.
- Accordion component: use native `<details>`/`<summary>` for accessibility, enhanced with Framer Motion for smooth open/close animation.
- This section sits between Pricing and Contact in the page flow.

---

## 15. Contact UX Details

The Contact section (§3.6) needs more specific UX requirements.

### Contact method

- **Primary:** A contact form (name, email, project type dropdown, brief message). Not just an email link — forms convert better.
- **Secondary:** Direct email link as fallback, plus social links (GitHub, LinkedIn).

### Form fields

| Field | Type | Required | Notes |
|---|---|---|---|
| Name | text | yes | |
| Email | email | yes | |
| Project type | select | no | Options: "New website", "Redesign", "Consulting", "Other" |
| Budget range | select | no | Options: price ranges matching the Pricing tiers |
| Message | textarea | yes | Placeholder: "Tell me about your project..." |

### Response time expectation

- Display a visible note near/below the form: **"I typically respond within 24 hours."** This sets expectations and builds trust.

### Spam protection

- Use a **honeypot field** (hidden input that bots fill but humans don't) as the primary spam defense.
- Add **rate limiting** on the backend (e.g., max 5 submissions per IP per hour).
- Avoid visible CAPTCHAs — they hurt conversion rates. If spam becomes a problem later, add Cloudflare Turnstile (invisible).

### Backend

- **Option A (simple):** Send form submissions as email via a serverless function (Next.js API route + Resend or SendGrid).
- **Option B (structured):** Store submissions in Supabase `contact_submissions` table + send email notification.
- Recommend **Option B** — gives Nate a queryable inbox and prevents lost leads if email delivery fails.

### Post-submission UX

- Replace the form with a confirmation message: "Thanks! I'll get back to you within 24 hours."
- No page redirect — keep them on the site.

---

## 16. SEO & Social Polish

### Metadata

- **Title:** `Nate | Website Builder & Contractor` (or final positioning statement)
- **Description:** 150-160 char meta description summarizing services + value prop.
- **Canonical URL:** `https://itsmenate.com`
- Use Next.js `metadata` export in `app/layout.tsx` for all meta tags.

### Open Graph / Social sharing

- **OG image:** Design a 1200×630 branded image (dark background, "itsmenate.com" text, tagline). Store in `public/og-image.png`.
- Set `og:title`, `og:description`, `og:image`, `og:url`, `og:type` (website).
- Twitter card: `twitter:card` = `summary_large_image`, same image.

### Favicon set

Generate and include a complete favicon set:

- `favicon.ico` (16×16, 32×32)
- `apple-touch-icon.png` (180×180)
- `favicon-32x32.png`, `favicon-16x16.png`
- `site.webmanifest` with `name`, `short_name`, theme color
- Place all in `public/` and reference in layout metadata.

### Sitemap & robots.txt

- Generate `sitemap.xml` via Next.js `app/sitemap.ts` (built-in support).
- Generate `robots.txt` via Next.js `app/robots.ts` — allow all crawlers, reference sitemap.
- Submit sitemap to Google Search Console after launch.

### Structured data

- Add `Person` schema (JSON-LD) with Nate's name, job title, URL, social links.
- Add `WebSite` schema with site name and URL.
- Output via a `<script type="application/ld+json">` in the layout.

---

## 17. Performance & Accessibility Requirements

These extend the existing sections (§6 and §7) with specific requirements.

### Performance targets

| Metric | Target |
|---|---|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Total bundle (JS) | < 200KB gzipped |

### Accessibility additions

| Requirement | Implementation |
|---|---|
| **Focus states** | All interactive elements must have a visible, high-contrast focus ring. Use `:focus-visible` (not `:focus`) to avoid showing focus rings on mouse clicks. Custom focus style: 2px solid accent color with 2px offset. |
| **Keyboard navigation** | Full site must be navigable via Tab/Shift+Tab. Sections reachable via nav links. Contact form fully keyboard-operable. Escape key closes any modals/overlays. |
| **`prefers-reduced-motion`** | All animations wrapped in motion preference checks. Reduced motion users see: no typewriter (full text shown immediately), no parallax, no scroll-triggered slides (content visible by default), no marquee scroll (static grid instead). |
| **Skip to content link** | First focusable element on the page. Visually hidden until focused. Links to `#main-content`. |
| **ARIA landmarks** | `<header>`, `<nav>`, `<main id="main-content">`, `<footer>`. Sections use `<section aria-labelledby="section-heading-id">`. |

---

## 18. Intro "Skip" Requirement

The intro sequence (§2) **must** include a skip mechanism:

- **A "Skip intro" button** is visible in the bottom-right corner of the intro overlay from the moment the page loads.
- Clicking/tapping it immediately triggers the exit animation (or instant cut if `prefers-reduced-motion` is on).
- Keyboard accessible: focusable, activatable via Enter/Space.
- Styled subtly (small text, low opacity, e.g. `text-white/50`) so it doesn't dominate but is findable.
- On repeat visits (check `sessionStorage`), consider auto-skipping the intro entirely.

### Implementation notes

- Add an `onSkip` handler to `IntroSequence.tsx` that calls `setPhase("exiting")` immediately.
- Store a `hasSeenIntro` flag in `sessionStorage` — if set, skip directly to `onComplete()` on mount.
- The skip button should have `aria-label="Skip intro animation"`.

---

## 19. Updated Page Section Order

With the new sections, the recommended page flow is:

1. **Intro sequence** (full-screen, then drops away)
2. **Hero** (name, positioning statement, primary CTA)
3. **About / Bio**
4. **Services / What I Do** → secondary CTA
5. **Portfolio / Work** (with proof elements) → secondary CTA
6. **Testimonials** (if available, otherwise omit)
7. **Pricing / Packages**
8. **Working With Me / FAQ**
9. **Contact** (form + response time note)
10. **Tech Stack** (optional — can be a subtle footer-adjacent strip)
11. **Footer**

---

## 20. Updated File Structure

Additional files needed for the new sections:

```
src/
├── components/
│   ├── sections/
│   │   ├── ... (existing)
│   │   ├── Testimonials.tsx       # Client testimonials (if available)
│   │   ├── Pricing.tsx            # Packages/pricing tiers
│   │   └── FAQ.tsx                # Working with me / FAQ accordion
│   │
│   └── ui/
│       ├── ... (existing)
│       ├── PricingCard.tsx         # Individual pricing tier card
│       ├── FAQItem.tsx            # Accordion item (details/summary + animation)
│       ├── ContactForm.tsx        # Form with honeypot + validation
│       └── SkipIntroButton.tsx    # Skip button for intro overlay
│
├── data/
│   ├── ... (existing)
│   ├── pricing.ts                 # Pricing tier data
│   ├── faq.ts                     # FAQ questions and answers
│   └── testimonials.ts            # Testimonial data (quotes, names, roles)
│
├── app/
│   ├── ... (existing)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts           # Contact form API route (email + Supabase)
│   ├── sitemap.ts                 # Auto-generated sitemap
│   └── robots.ts                  # robots.txt generation
│
└── public/
    ├── og-image.png               # Open Graph social sharing image
    ├── favicon.ico                # Favicon set
    ├── apple-touch-icon.png
    ├── favicon-32x32.png
    ├── favicon-16x16.png
    └── site.webmanifest
```

---

## 21. Open Questions for Nate

Before building, the following decisions are needed:

1. **Content:** What's the exact copy for the hero, about, and services sections? Or should I draft placeholder content?
2. **Portfolio projects:** Which projects should be featured? (pottery site, mortgage planner, others?)
3. **Color/brand:** Any color preferences? Dark-first or light-first?
4. **Photo/illustration:** Do you have a headshot or prefer an illustrated avatar (like robbowen.digital)?
5. **Services list:** What specific services should be highlighted? (web dev, contracting, consulting, etc.)
6. **Contact method:** Email link, contact form, or both? Calendly integration?
7. **Domain setup:** Is itsmenate.com already pointed at Vercel, or does that need to be configured?
8. **Multi-page vs single-page:** Should this be a single scrolling page, or separate routes for /about, /work, /contact?
9. **Any sections to add or remove** from the proposed structure above?
10. **3D elements:** Want any WebGL/Three.js elements (like jrmy.dev), or keep it to 2D scroll animations?
