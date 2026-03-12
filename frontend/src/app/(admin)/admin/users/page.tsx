"use client";

import { motion } from "framer-motion";
import { Search, Check, X, Edit } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const members = [
  { id: 1, name: "Ahmad Khalil", email: "ahmad@example.com", role: "Member", joined: "Jan 15, 2026", status: "approved" },
  { id: 2, name: "Fatima Al-Sayed", email: "fatima@example.com", role: "Member", joined: "Feb 3, 2026", status: "pending" },
  { id: 3, name: "Omar Hassan", email: "omar@example.com", role: "Volunteer", joined: "Feb 10, 2026", status: "pending" },
  { id: 4, name: "Layla Mohammed", email: "layla@example.com", role: "Volunteer", joined: "Dec 20, 2025", status: "approved" },
  { id: 5, name: "Nour Khalil", email: "nour@example.com", role: "Member", joined: "Mar 1, 2026", status: "rejected" },
  { id: 6, name: "Youssef Ali", email: "youssef@example.com", role: "Volunteer", joined: "Jan 28, 2026", status: "approved" },
];

const statusStyles: Record<string, { bg: string; color: string }> = {
  approved: { bg: "#dcfce7", color: "#15803d" },
  pending:  { bg: "#fef9c3", color: "#a16207" },
  rejected: { bg: "#fee2e2", color: "#b91c1c" },
};

export default function AdminMembers() {
  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Member Management</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Approve, reject, and manage registrations.</p>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
        >
          <div style={{ position: "relative", flex: 1, minWidth: "200px" }}>
            <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
            <input placeholder="Search members..." style={{ width: "100%", padding: "10px 12px 10px 36px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }} />
          </div>
          <select style={{ padding: "10px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}>
            <option>All Roles</option><option>Member</option><option>Volunteer</option>
          </select>
          <select style={{ padding: "10px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}>
            <option>All Status</option><option>Pending</option><option>Approved</option><option>Rejected</option>
          </select>
        </motion.div>

        {/* Table */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #f0f0f0", overflow: "hidden" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #f0f0f0", backgroundColor: "#f9fafb" }}>
                {["Name", "Email", "Role", "Joined", "Status", "Actions"].map((h) => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: h === "Actions" ? "right" : "left", fontSize: "0.8rem", fontWeight: "600", color: "#6b7280" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {members.map((m, i) => (
                <motion.tr key={m.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  style={{ borderBottom: "1px solid #f5f5f5", transition: "background-color 0.15s" }}
                >
                  <td style={{ padding: "14px 16px", fontWeight: "600", fontSize: "0.875rem", color: "#0d0b08" }}>{m.name}</td>
                  <td style={{ padding: "14px 16px", fontSize: "0.875rem", color: "#6b7280" }}>{m.email}</td>
                  <td style={{ padding: "14px 16px", fontSize: "0.875rem", color: "#374151" }}>{m.role}</td>
                  <td style={{ padding: "14px 16px", fontSize: "0.875rem", color: "#6b7280" }}>{m.joined}</td>
                  <td style={{ padding: "14px 16px" }}>
                    <span style={{ backgroundColor: statusStyles[m.status].bg, color: statusStyles[m.status].color, fontSize: "0.75rem", fontWeight: "600", padding: "3px 10px", borderRadius: "20px" }}>
                      {m.status.charAt(0).toUpperCase() + m.status.slice(1)}
                    </span>
                  </td>
                  <td style={{ padding: "14px 16px", textAlign: "right" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "4px" }}>
                      {m.status === "pending" && (
                        <>
                          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ height: "32px", width: "32px", borderRadius: "8px", border: "none", backgroundColor: "#dcfce7", color: "#15803d", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={15} /></motion.button>
                          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ height: "32px", width: "32px", borderRadius: "8px", border: "none", backgroundColor: "#fee2e2", color: "#b91c1c", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={15} /></motion.button>
                        </>
                      )}
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ height: "32px", width: "32px", borderRadius: "8px", border: "none", backgroundColor: "#f0f9f7", color: "#2e8673", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Edit size={15} /></motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </PageWrapper>
  );
}