import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting (per-process; for serverless, use KV/Redis)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Send email via Resend if API key is configured
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL || "hello@itsmenate.com";

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "itsmenate.com <noreply@itsmenate.com>",
        to: [notifyEmail],
        subject: `New contact from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Project Type: ${projectType || "Not specified"}`,
          `Budget: ${budget || "Not specified"}`,
          `Message:\n${message}`,
        ].join("\n"),
        replyTo: email,
      });
    } else {
      // Log to console when Resend is not configured (development)
      console.log("Contact form submission:", {
        name,
        email,
        projectType,
        budget,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
