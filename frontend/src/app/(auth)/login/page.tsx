"use client";

import Link from "next/link";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

export default function LoginPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Left Side — Lottie Animation */}
      <div style={{
        flex: 1,
        background: "linear-gradient(135deg, #2e8673 0%, #211f21 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px",
      }} className="hidden md:flex">
        <Player
          autoplay
          loop
          src="/animation.json"
          style={{ width: "380px", height: "380px" }}
        />
        <h2 style={{ color: "#ffffff", fontSize: "1.75rem", fontWeight: "700", marginTop: "32px", textAlign: "center" }}>
          Welcome to <span style={{ color: "#66bdab" }}>MENA</span> Club
        </h2>
        <p style={{ color: "#b2ddd5", fontSize: "1rem", marginTop: "12px", textAlign: "center", maxWidth: "320px", lineHeight: "1.6" }}>
          Empowering youth across the Middle East and North Africa through volunteering and community.
        </p>
      </div>

      {/* Right Side — Form */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 80px",
        backgroundColor: "#ffffff",
      }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Image src="/logo.png" alt="MENA Club" width={56} height={56} quality={200} unoptimized className="h-14 w-auto mx-auto mb-4" />
            <h1 style={{ fontSize: "1.75rem", fontWeight: "800", marginBottom: "8px" }}>Welcome Back</h1>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Sign in to your account</p>
          </div>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151", display: "block", marginBottom: "6px" }}>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151", display: "block", marginBottom: "6px" }}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.875rem" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", color: "#6b7280" }}>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" style={{ color: "#2e8673", textDecoration: "none" }}>Forgot password?</a>
            </div>
            <Link href="/member/dashboard">
              <button
                type="button"
                style={{ width: "100%", backgroundColor: "#2e8673", color: "#ffffff", padding: "14px", borderRadius: "12px", fontWeight: "600", fontSize: "1rem", border: "none", cursor: "pointer", marginTop: "4px" }}
              >
                Sign In
              </button>
            </Link>
          </div>

          {/* Footer */}
          <p style={{ textAlign: "center", fontSize: "0.875rem", color: "#6b7280", marginTop: "28px" }}>
            Don&apos;t have an account?{" "}
            <Link href="/register" style={{ color: "#2e8673", fontWeight: "500" }}>Sign up</Link>
          </p>

          {/* Demo Links */}
          <div style={{ marginTop: "24px", textAlign: "center", fontSize: "0.75rem", color: "#9ca3af" }}>
            <Link href="/member/dashboard" style={{ color: "#9ca3af" }}>Member Demo</Link>
            <span style={{ margin: "0 8px" }}>·</span>
            <Link href="/volunteer/dashboard" style={{ color: "#9ca3af" }}>Volunteer Demo</Link>
            <span style={{ margin: "0 8px" }}>·</span>
            <Link href="/admin/dashboard" style={{ color: "#9ca3af" }}>Admin Demo</Link>
          </div>

        </div>
      </div>
    </div>
  );
}