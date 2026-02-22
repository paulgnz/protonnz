import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ProtonNZ - XPR Network Projects by Paul Grey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #202124 0%, #2d1854 50%, #202124 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(95, 35, 221, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(205, 105, 140, 0.12)",
            filter: "blur(80px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: "linear-gradient(135deg, #5f23dd, #cd698c)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 16,
            }}
          >
            ProtonNZ
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              marginBottom: 40,
            }}
          >
            XPR Network Projects by Paul Grey
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
            }}
          >
            {["AI Agents", "DEX", "Social", "Developer Tools"].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 16,
                  color: "#d4d4d8",
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(95, 35, 221, 0.3)",
                  background: "rgba(95, 35, 221, 0.1)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #5f23dd, #cd698c)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
