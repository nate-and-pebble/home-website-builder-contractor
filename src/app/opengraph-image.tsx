import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nate | Website Builder & Contractor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f0f0f0",
            marginBottom: 16,
            fontFamily: "monospace",
          }}
        >
          itsmenate.com
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#888888",
            marginBottom: 32,
          }}
        >
          Website Builder & Contractor
        </div>
        <div
          style={{
            width: 120,
            height: 4,
            backgroundColor: "#3b82f6",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
