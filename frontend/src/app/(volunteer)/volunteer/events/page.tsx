"use client";

import { useState } from "react";
<<<<<<< HEAD
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
=======
import { Calendar, MapPin } from "lucide-react";
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9

const events = [
  { title: "Youth Leadership Summit", date: "Mar 25", location: "Riyadh", roles: ["Registration Desk", "Photography", "Logistics"], emoji: "🏛️" },
  { title: "Tech for Good Hackathon", date: "Apr 10", location: "Dubai", roles: ["Volunteer Lead", "Setup Crew", "Tech Support"], emoji: "💻" },
  { title: "Community Clean-up", date: "Apr 18", location: "Amman", roles: ["Team Captain", "Logistics", "Supplies"], emoji: "🌿" },
];

export default function VolunteerEvents() {
<<<<<<< HEAD
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
=======
  const [selectedRoles, setSelectedRoles] = useState<Record<string, string>>({});

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Event Registration</h1>
        <p className="text-gray-500">Register for upcoming events and select your volunteer role.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e) => (
          <div key={e.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="h-28 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-4xl">
              {e.emoji}
            </div>
            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-semibold">{e.title}</h3>
                <div className="flex gap-3 mt-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{e.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{e.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {e.roles.map((r) => (
                  <span key={r} className="text-xs border border-gray-300 text-gray-600 px-2 py-0.5 rounded-full">
                    {r}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <select
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={selectedRoles[e.title] || ""}
                  onChange={(ev) => setSelectedRoles({ ...selectedRoles, [e.title]: ev.target.value })}
                >
                  <option value="">Select role</option>
                  {e.roles.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
                <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
  );
}