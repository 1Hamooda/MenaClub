"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const events = [
  { title: "Youth Leadership Summit", date: "Mar 25", location: "Riyadh", roles: ["Registration Desk", "Photography", "Logistics"], emoji: "🏛️" },
  { title: "Tech for Good Hackathon", date: "Apr 10", location: "Dubai", roles: ["Volunteer Lead", "Setup Crew", "Tech Support"], emoji: "💻" },
  { title: "Community Clean-up", date: "Apr 18", location: "Amman", roles: ["Team Captain", "Logistics", "Supplies"], emoji: "🌿" },
];

export default function VolunteerEvents() {
  const [selected, setSelected] = useState<Record<string, string>>({});

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Event Registration</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Register for upcoming events and select your volunteer role.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {events.map((e, i) => (
            <motion.div key={e.title} custom={i} initial="hidden" animate="visible" variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "16px", overflow: "hidden", border: "1px solid #f0f0f0" }}
            >
              <div style={{ height: "112px", background: "linear-gradient(135deg, #f0f9f7 0%, #e8f5f2 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                {e.emoji}
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <h3 style={{ fontWeight: "700", fontSize: "1rem", color: "#0d0b08" }}>{e.title}</h3>
                  <div style={{ display: "flex", gap: "12px", marginTop: "6px", fontSize: "0.8rem", color: "#6b7280" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar size={12} />{e.date}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><MapPin size={12} />{e.location}</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {e.roles.map((r) => (
                    <span key={r} style={{ fontSize: "0.72rem", padding: "3px 10px", borderRadius: "20px", border: "1px solid #e5e7eb", color: "#374151" }}>{r}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <select
                    value={selected[e.title] || ""}
                    onChange={(ev) => setSelected(prev => ({ ...prev, [e.title]: ev.target.value }))}
                    style={{ flex: 1, padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}
                  >
                    <option value="">Select role</option>
                    {e.roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  <AnimatedButton variant="primary" style={{ padding: "10px 16px", fontSize: "0.875rem", borderRadius: "12px" }}>Register</AnimatedButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}