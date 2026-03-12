"use client";

<<<<<<< HEAD
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
=======
import { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9

const events = [
  { id: 1, title: "Youth Leadership Summit 2026", date: "Mar 25", location: "Riyadh", spots: 50, roles: ["Coordinator", "Facilitator", "Media"], emoji: "🏛️" },
  { id: 2, title: "Tech for Good Hackathon", date: "Apr 10", location: "Dubai", spots: 30, roles: ["Developer", "Designer", "Presenter"], emoji: "💻" },
  { id: 3, title: "Cultural Exchange Night", date: "May 5", location: "Cairo", spots: 80, roles: ["Host", "Performer", "Organizer"], emoji: "🎭" },
  { id: 4, title: "MENA Debate Championship", date: "Jun 8", location: "Doha", spots: 40, roles: ["Debater", "Judge", "Timekeeper"], emoji: "🎤" },
];

export default function MemberEvents() {
<<<<<<< HEAD
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
=======
  const [selectedRoles, setSelectedRoles] = useState<Record<number, string>>({});

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Browse Events</h1>
        <p className="text-gray-500">Find events and apply for roles that interest you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

            <div className="h-28 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-4xl">
              {event.emoji}
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <div className="flex gap-3 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{event.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{event.location}</span>
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{event.spots} spots</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Available Roles</p>
                <div className="flex flex-wrap gap-1.5">
                  {event.roles.map((r) => (
                    <span key={r} className="text-xs border border-gray-300 text-gray-600 px-2 py-0.5 rounded-full">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <select
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={selectedRoles[event.id] || ""}
                  onChange={(e) => setSelectedRoles({ ...selectedRoles, [event.id]: e.target.value })}
                >
                  <option value="">Select role</option>
                  {event.roles.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
                  Apply
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