"use client";

import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
      padding: "48px 24px",
      textAlign: "center",
    }}>

      <Player
        autoplay
        loop
        src="/404.json"
        style={{ width: "380px", height: "380px" }}
      />

      <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#0d0b08", marginTop: "16px", marginBottom: "12px" }}>
        Page Not Found
      </h1>
      <p style={{ fontSize: "1rem", color: "#6b7280", maxWidth: "360px", lineHeight: "1.7", marginBottom: "36px" }}>
        Looks like you wandered off the map. The page you're looking for doesn't exist or has been moved.
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/">
          <button style={{
            backgroundColor: "#2e8673",
            color: "#ffffff",
            padding: "12px 28px",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "0.95rem",
            border: "none",
            cursor: "pointer",
          }}>
            Go Home
          </button>
        </Link>
        <Link href="/login">
          <button style={{
            backgroundColor: "#ffffff",
            color: "#2e8673",
            padding: "12px 28px",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "0.95rem",
            border: "2px solid #2e8673",
            cursor: "pointer",
          }}>
            Sign In
          </button>
        </Link>
      </div>

    </div>
  );
}