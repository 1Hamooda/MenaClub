<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
import { Key, RefreshCw, Copy, CheckCircle } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};
=======
import { Key, RefreshCw, Copy, CheckCircle } from "lucide-react";
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9

const codes = [
  { event: "Youth Leadership Summit", code: "MENA-2026-XY7K", created: "Mar 24", checkins: 42, total: 50 },
  { event: "Tech Hackathon", code: "MENA-2026-H4CK", created: "Apr 9", checkins: 0, total: 30 },
];

const checkins = [
<<<<<<< HEAD
  { name: "Ahmad Khalil", event: "Leadership Summit", time: "9:02 AM", status: "approved" },
  { name: "Layla Mohammed", event: "Leadership Summit", time: "9:05 AM", status: "approved" },
  { name: "Omar Hassan", event: "Leadership Summit", time: "9:12 AM", status: "approved" },
  { name: "Fatima Al-Sayed", event: "Leadership Summit", time: "9:15 AM", status: "pending" },
];

const statusStyles: Record<string, { bg: string; color: string }> = {
  approved: { bg: "#dcfce7", color: "#15803d" },
  pending:  { bg: "#fef9c3", color: "#a16207" },
=======
  { name: "Ahmad Khalil", time: "9:02 AM", status: "approved" },
  { name: "Layla Mohammed", time: "9:05 AM", status: "approved" },
  { name: "Omar Hassan", time: "9:12 AM", status: "approved" },
  { name: "Fatima Al-Sayed", time: "9:15 AM", status: "pending" },
];

const statusStyles: Record<string, string> = {
  approved: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
};

export default function AdminAttendance() {
  return (
<<<<<<< HEAD
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Attendance Management</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Generate codes and monitor check-ins.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {/* Generate Code */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.4 }}
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
          >
            <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#0d0b08", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Key size={18} style={{ color: "#2e8673" }} /> Generate Code
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <select style={{ width: "100%", padding: "12px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}>
                <option>Select event</option>
                <option>Youth Leadership Summit</option>
                <option>Tech Hackathon</option>
                <option>Community Clean-up</option>
              </select>
              <AnimatedButton variant="primary" fullWidth style={{ padding: "12px", fontSize: "0.875rem", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <RefreshCw size={14} /> Generate New Code
              </AnimatedButton>
            </div>
            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {codes.map((c, i) => (
                <motion.div key={c.code} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                  style={{ padding: "16px", borderRadius: "12px", backgroundColor: "#f9fafb" }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                    <p style={{ fontSize: "0.875rem", fontWeight: "600", color: "#0d0b08" }}>{c.event}</p>
                    <span style={{ backgroundColor: "#f0f9f7", color: "#2e8673", fontSize: "0.75rem", fontWeight: "700", padding: "3px 10px", borderRadius: "20px" }}>{c.checkins}/{c.total}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <code style={{ flex: 1, backgroundColor: "#ffffff", padding: "8px 12px", borderRadius: "8px", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", border: "1px solid #e5e7eb" }}>{c.code}</code>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ height: "32px", width: "32px", borderRadius: "8px", border: "none", backgroundColor: "#f0f9f7", color: "#2e8673", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Copy size={14} />
                    </motion.button>
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "8px" }}>Created: {c.created}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Live Check-ins */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.4 }}
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
          >
            <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#0d0b08", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle size={18} style={{ color: "#2e8673" }} /> Live Check-ins
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                  {["Volunteer", "Time", "Status"].map((h) => (
                    <th key={h} style={{ padding: "8px 0", textAlign: "left", fontSize: "0.75rem", fontWeight: "600", color: "#6b7280" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {checkins.map((c, i) => (
                  <motion.tr key={i} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    style={{ borderBottom: "1px solid #f5f5f5", transition: "background-color 0.15s" }}
                  >
                    <td style={{ padding: "12px 0", fontWeight: "600", fontSize: "0.875rem", color: "#0d0b08" }}>{c.name}</td>
                    <td style={{ padding: "12px 0", fontSize: "0.875rem", color: "#6b7280" }}>{c.time}</td>
                    <td style={{ padding: "12px 0" }}>
                      <span style={{ backgroundColor: statusStyles[c.status].bg, color: statusStyles[c.status].color, fontSize: "0.72rem", fontWeight: "600", padding: "3px 10px", borderRadius: "20px" }}>
                        {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
=======
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Attendance Management</h1>
        <p className="text-gray-500">Generate codes and monitor check-ins.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Generate Code */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" /> Generate Code
          </h2>
          <div className="space-y-4">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select event</option>
              <option value="summit">Youth Leadership Summit</option>
              <option value="hack">Tech Hackathon</option>
              <option value="clean">Community Clean-up</option>
            </select>
            <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-xl text-sm font-medium hover:bg-primary transition">
              <RefreshCw className="h-4 w-4" /> Generate New Code
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {codes.map((c) => (
              <div key={c.code} className="p-4 rounded-xl bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">{c.event}</p>
                  <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
                    {c.checkins}/{c.total}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-white border border-gray-200 px-3 py-2 rounded-lg font-mono text-sm tracking-wider">
                    {c.code}
                  </code>
                  <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-500 transition">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">Created: {c.created}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Check-ins */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" /> Live Check-ins
          </h2>
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-3 py-2 font-medium text-gray-600">Volunteer</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">Time</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {checkins.map((c, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-3 py-3 font-medium">{c.name}</td>
                  <td className="px-3 py-3 text-gray-500">{c.time}</td>
                  <td className="px-3 py-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${statusStyles[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
  );
}