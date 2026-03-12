<<<<<<< HEAD
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
=======
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function VolunteerCheckin() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Attendance Check-in</h1>
        <p className="text-gray-500">Enter your verification code to confirm attendance.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-md shadow-sm">
        <div className="text-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-semibold text-lg">Enter Verification Code</h2>
          <p className="text-sm text-gray-500 mt-1">Get this code from your event organizer</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Verification Code</label>
            <input
              placeholder="e.g. MENA-2026-XY7K"
              maxLength={16}
              className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-center text-lg tracking-widest font-mono focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary transition flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4" /> Confirm Check-in
          </button>
        </div>
      </div>

      {/* Success Example */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-5 max-w-md">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-green-600" />
          <div>
            <p className="font-semibold text-sm">Successfully Checked In!</p>
            <p className="text-xs text-gray-500">Youth Leadership Summit · Mar 25, 2026 · 9:12 AM</p>
          </div>
        </div>
      </div>

    </div>
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
  );
}