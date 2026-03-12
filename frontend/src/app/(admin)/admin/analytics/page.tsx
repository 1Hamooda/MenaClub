<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
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
import { Download } from "lucide-react";
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9

const metrics = [
  { label: "Total Attendance", value: "1,847", data: [40, 55, 45, 60, 75, 65, 80, 90, 70, 85, 95, 88] },
  { label: "Active Members", value: "2,547", data: [200, 220, 250, 280, 310, 350, 380, 420, 450, 480, 520, 547] },
  { label: "Events Held", value: "48", data: [3, 4, 5, 3, 6, 4, 5, 7, 4, 6, 5, 4] },
  { label: "Avg Points/Member", value: "324", data: [180, 200, 220, 240, 260, 280, 290, 300, 310, 315, 320, 324] },
];

const topMembers = [
  { name: "Ahmad Khalil", points: 825, events: 12 },
  { name: "Layla Mohammed", points: 780, events: 10 },
  { name: "Omar Hassan", points: 720, events: 11 },
  { name: "Fatima Al-Sayed", points: 695, events: 9 },
  { name: "Nour Khalil", points: 650, events: 8 },
];

export default function AdminReports() {
  return (
<<<<<<< HEAD
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}
        >
          <div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Reports & Analytics</h1>
            <p style={{ color: "#6b7280", marginTop: "4px" }}>Filterable analytics and export options.</p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <select style={{ padding: "10px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}>
              <option>Last 12 months</option><option>Last 6 months</option><option>Last 3 months</option>
            </select>
            <AnimatedButton variant="outline" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <Download size={14} /> Export CSV
            </AnimatedButton>
          </div>
        </motion.div>

        {/* Metric Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {metrics.map((m, i) => {
            const max = Math.max(...m.data);
            return (
              <motion.div key={m.label} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(46,134,115,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
              >
                <p style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: "4px" }}>{m.label}</p>
                <p style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08", marginBottom: "20px" }}>{m.value}</p>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "80px" }}>
                  {m.data.map((v, j) => (
                    <motion.div key={j}
                      initial={{ height: 0 }} animate={{ height: `${(v / max) * 100}%` }}
                      transition={{ delay: 0.3 + j * 0.04, duration: 0.5, ease: "easeOut" }}
                      whileHover={{ backgroundColor: "#2e8673" }}
                      style={{ flex: 1, backgroundColor: "rgba(46,134,115,0.25)", borderRadius: "3px 3px 0 0", transition: "background-color 0.2s", cursor: "default" }}
                    />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "#9ca3af", marginTop: "6px" }}>
                  <span>Apr</span><span>Aug</span><span>Mar</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Top Members */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
        >
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#0d0b08", marginBottom: "20px" }}>Top Members by Points</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {topMembers.map((m, i) => (
              <motion.div key={m.name} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                whileHover={{ x: 4, backgroundColor: "#f0f9f7" }}
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px", borderRadius: "12px", backgroundColor: "#f9fafb", transition: "background-color 0.2s" }}
              >
                <span style={{ fontSize: "1.1rem", fontWeight: "800", color: "#2e8673", width: "32px" }}>#{i + 1}</span>
                <div style={{ height: "36px", width: "36px", borderRadius: "50%", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", color: "#2e8673", fontSize: "0.75rem", fontWeight: "700", flexShrink: 0 }}>
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: "600", fontSize: "0.875rem", color: "#0d0b08" }}>{m.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>{m.events} events</p>
                </div>
                <span style={{ fontWeight: "800", color: "#2e8673", fontSize: "0.95rem" }}>{m.points} pts</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
=======
    <div className="space-y-6">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-gray-500">Filterable analytics and export options.</p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="12">Last 12 months</option>
            <option value="6">Last 6 months</option>
            <option value="3">Last 3 months</option>
          </select>
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">{m.label}</p>
            <p className="text-2xl font-bold mb-4">{m.value}</p>
            <div className="flex items-end gap-1 h-20">
              {m.data.map((v, i) => {
                const max = Math.max(...m.data);
                return (
                  <div
                    key={i}
                    className="flex-1 bg-blue-100 rounded-t hover:bg-blue-300 transition-colors"
                    style={{ height: `${(v / max) * 100}%` }}
                  />
                );
              })}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Apr</span><span>Aug</span><span>Mar</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h2 className="font-semibold mb-4">Top Members by Points</h2>
        <div className="space-y-3">
          {topMembers.map((m, i) => (
            <div key={m.name} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
              <span className="text-lg font-bold text-primary w-8">#{i + 1}</span>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                {m.name.split(" ").map((n: string) => n[0]).join("")}
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{m.name}</p>
                <p className="text-xs text-gray-500">{m.events} events</p>
              </div>
              <span className="font-bold text-primary">{m.points} pts</span>
            </div>
          ))}
        </div>
      </div>

    </div>
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
  );
}