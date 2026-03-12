"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedInput from "@/components/ui/AnimatedInput";
import PageWrapper from "@/components/ui/PageWrapper";

export default function RegisterPage() {
  const [role, setRole] = useState("member");

  return (
    <PageWrapper>
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
          <Player autoplay loop src="/animation.json" style={{ width: "380px", height: "380px" }} />
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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              <Image src="/logo.png" alt="MENA Club" width={56} height={56} quality={100} unoptimized className="h-14 w-auto mx-auto mb-4" />
              <h1 style={{ fontSize: "1.75rem", fontWeight: "800", marginBottom: "8px" }}>
                Join <span style={{ color: "#2e8673" }}>MENA</span> Club
              </h1>
              <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Create your account</p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Name Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <AnimatedInput label="First Name" placeholder="Ahmad" />
                <AnimatedInput label="Last Name" placeholder="Tarek" />
              </div>

              <AnimatedInput label="Email" type="email" placeholder="you@example.com" />
              <AnimatedInput label="Password" type="password" placeholder="••••••••" />

              {/* Role Selector */}
              <div>
                <label style={{ fontSize: "0.875rem", fontWeight: "500", color: "#374151", display: "block", marginBottom: "10px" }}>I want to join as</label>
                <div style={{ display: "flex", gap: "12px" }}>
                  {["member", "volunteer"].map((r) => (
                    <motion.button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        flex: 1, padding: "16px", textAlign: "center", borderRadius: "12px", cursor: "pointer",
                        border: role === r ? "2px solid #2e8673" : "2px solid #e5e7eb",
                        backgroundColor: role === r ? "#f0f9f7" : "#ffffff",
                        transition: "border 0.2s, background-color 0.2s",
                      }}
                    >
                      <p style={{ fontWeight: "600", fontSize: "0.875rem", marginBottom: "2px", color: role === r ? "#2e8673" : "#0d0b08" }}>
                        {r.charAt(0).toUpperCase() + r.slice(1)}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                        {r === "member" ? "Join events and grow" : "Help and contribute"}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>

              <Link href="/member/profile">
                <AnimatedButton variant="primary" fullWidth style={{ padding: "14px", fontSize: "1rem", marginTop: "4px" }}>
                  Create Account
                </AnimatedButton>
              </Link>
            </motion.div>

            {/* Footer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              style={{ textAlign: "center", fontSize: "0.875rem", color: "#6b7280", marginTop: "28px" }}
            >
              Already have an account?{" "}
              <Link href="/login" style={{ color: "#2e8673", fontWeight: "500" }}>Sign in</Link>
            </motion.p>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}