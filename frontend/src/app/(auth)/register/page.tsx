"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function RegisterPage() {
  const [role, setRole] = useState("member");

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
          Join <span style={{ color: "#66bdab" }}>MENA</span> Club
        </h2>
        <p style={{ color: "#b2ddd5", fontSize: "1rem", marginTop: "12px", textAlign: "center", maxWidth: "320px", lineHeight: "1.6" }}>
          Be part of a growing community of youth leaders across the Middle East and North Africa.
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
        overflowY: "auto",
      }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Image src="/logo.png" alt="MENA Club" width={56} height={56} quality={200} unoptimized className="h-14 w-auto mx-auto mb-4" />
            <h1 style={{ fontSize: "1.75rem", fontWeight: "800", marginBottom: "8px" }}>
              Join <span style={{ color: "#2e8673" }}>MENA</span> Club
            </h1>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Create your account</p>
          </div>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Name Row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151", display: "block", marginBottom: "6px" }}>First Name</label>
                <input
                  placeholder="Ahmad"
                  style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151", display: "block", marginBottom: "6px" }}>Last Name</label>
                <input
                  placeholder="Khalil"
                  style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}
                />
              </div>
            </div>

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

            {/* Role Selector */}
            <div>
              <label style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151", display: "block", marginBottom: "10px" }}>I want to join as</label>
              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  type="button"
                  onClick={() => setRole("member")}
                  style={{
                    flex: 1, padding: "16px", textAlign: "center", borderRadius: "12px", cursor: "pointer",
                    border: role === "member" ? "2px solid #2e8673" : "2px solid #e5e7eb",
                    backgroundColor: role === "member" ? "#f0f9f7" : "#ffffff",
                    transition: "all 0.15s",
                  }}
                >
                  <p style={{ fontWeight: "600", fontSize: "0.875rem", marginBottom: "2px" }}>Member</p>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>Join events and grow</p>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("volunteer")}
                  style={{
                    flex: 1, padding: "16px", textAlign: "center", borderRadius: "12px", cursor: "pointer",
                    border: role === "volunteer" ? "2px solid #2e8673" : "2px solid #e5e7eb",
                    backgroundColor: role === "volunteer" ? "#f0f9f7" : "#ffffff",
                    transition: "all 0.15s",
                  }}
                >
                  <p style={{ fontWeight: "600", fontSize: "0.875rem", marginBottom: "2px" }}>Volunteer</p>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>Help and contribute</p>
                </button>
              </div>
            </div>

            <Link href="/member/profile">
              <button
                type="button"
                style={{ width: "100%", backgroundColor: "#2e8673", color: "#ffffff", padding: "14px", borderRadius: "12px", fontWeight: "600", fontSize: "1rem", border: "none", cursor: "pointer", marginTop: "4px" }}
              >
                Create Account
              </button>
            </Link>
          </div>

          {/* Footer */}
          <p style={{ textAlign: "center", fontSize: "0.875rem", color: "#6b7280", marginTop: "28px" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "#2e8673", fontWeight: "500" }}>Sign in</Link>
          </p>

        </div>
      </div>
    </div>
  );
}