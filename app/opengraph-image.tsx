import { ImageResponse } from "next/og";

export const alt = "Stick Build Construction — Melbourne construction and carpentry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#042C5C",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            borderRadius: 20,
            background: "#0a3d73",
            marginBottom: 36,
            color: "#CC4C04",
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          SB
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Stick Build Construction
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            fontWeight: 500,
            color: "#cbd5e1",
            textAlign: "center",
          }}
        >
          Melbourne's construction & carpentry specialists
        </div>
      </div>
    ),
    { ...size }
  );
}
