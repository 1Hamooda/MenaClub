"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
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
  { id: 1, title: "Youth Leadership Summit 2026", date: "Mar 25", location: "Riyadh", spots: 50, roles: ["Coordinator", "Facilitator", "Media"], emoji: "🏛️" },
  { id: 2, title: "Tech for Good Hackathon", date: "Apr 10", location: "Dubai", spots: 30, roles: ["Developer", "Designer", "Presenter"], emoji: "💻" },
  { id: 3, title: "Cultural Exchange Night", date: "May 5", location: "Cairo", spots: 80, roles: ["Host", "Performer", "Organizer"], emoji: "🎭" },
  { id: 4, title: "MENA Debate Championship", date: "Jun 8", location: "Doha", spots: 40, roles: ["Debater", "Judge", "Timekeeper"], emoji: "🎤" },
];

export default function MemberEvents() {
  const [selected, setSelected] = useState<Record<number, string>>({});

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Browse Events</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Find events and apply for roles that interest you.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {events.map((event, i) => (
            <motion.div key={event.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "16px", overflow: "hidden", border: "1px solid #f0f0f0" }}
            >
              <div style={{ height: "112px", background: "linear-gradient(135deg, #f0f9f7 0%, #e8f5f2 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                {event.emoji}
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <h3 style={{ fontWeight: "700", fontSize: "1.05rem", color: "#0d0b08" }}>{event.title}</h3>
                  <div style={{ display: "flex", gap: "16px", marginTop: "8px", fontSize: "0.8rem", color: "#6b7280" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar size={13} />{event.date}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><MapPin size={13} />{event.location}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Users size={13} />{event.spots} spots</span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280", marginBottom: "8px" }}>Available Roles</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {event.roles.map((r) => (
                      <span key={r} style={{ fontSize: "0.75rem", padding: "3px 10px", borderRadius: "20px", border: "1px solid #e5e7eb", color: "#374151" }}>{r}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <select
                    value={selected[event.id] || ""}
                    onChange={(e) => setSelected(prev => ({ ...prev, [event.id]: e.target.value }))}
                    style={{ flex: 1, padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}
                  >
                    <option value="">Select role</option>
                    {event.roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  <AnimatedButton variant="primary" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px" }}>Apply</AnimatedButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}