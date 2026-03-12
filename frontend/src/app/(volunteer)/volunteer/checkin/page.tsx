"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ShieldCheck } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedInput from "@/components/ui/AnimatedInput";
import PageWrapper from "@/components/ui/PageWrapper";

export default function VolunteerCheckin() {
  const [checked, setChecked] = useState(false);

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Attendance Check-in</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Enter your verification code to confirm attendance.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "40px 32px", border: "1px solid #f0f0f0", maxWidth: "440px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              style={{ height: "64px", width: "64px", borderRadius: "20px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}
            >
              <ShieldCheck size={32} style={{ color: "#2e8673" }} />
            </motion.div>
            <h2 style={{ fontWeight: "700", fontSize: "1.1rem", color: "#0d0b08" }}>Enter Verification Code</h2>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "4px" }}>Get this code from your event organizer</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <AnimatedInput label="Verification Code" placeholder="e.g. MENA-2026-XY7K" />
            <AnimatedButton variant="primary" fullWidth onClick={() => setChecked(true)}
              style={{ padding: "14px", fontSize: "1rem", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
            >
              <CheckCircle size={16} /> Confirm Check-in
            </AnimatedButton>
          </div>
        </motion.div>

        <AnimatePresence>
          {checked && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "20px 24px", maxWidth: "440px", display: "flex", alignItems: "center", gap: "14px" }}
            >
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <CheckCircle size={28} style={{ color: "#16a34a" }} />
              </motion.div>
              <div>
                <p style={{ fontWeight: "700", fontSize: "0.95rem", color: "#15803d" }}>Successfully Checked In!</p>
                <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "2px" }}>Youth Leadership Summit · Mar 25, 2026 · 9:12 AM</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}