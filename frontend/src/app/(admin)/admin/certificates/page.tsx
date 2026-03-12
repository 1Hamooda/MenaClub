"use client";

import { motion } from "framer-motion";
import { Award, Send, Download } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const certificates = [
  { name: "Ahmad Khalil", event: "Leadership Summit", role: "Coordinator", hours: 8, generated: true },
  { name: "Layla Mohammed", event: "Leadership Summit", role: "Registration", hours: 8, generated: true },
  { name: "Omar Hassan", event: "Tech Hackathon", role: "Developer", hours: 12, generated: false },
  { name: "Fatima Al-Sayed", event: "Community Clean-up", role: "Team Captain", hours: 6, generated: false },
];

export default function AdminCertificates() {
  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}
        >
          <div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Certificate Management</h1>
            <p style={{ color: "#6b7280", marginTop: "4px" }}>Generate and distribute participation certificates.</p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <AnimatedButton variant="primary" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <Award size={14} /> Generate All
            </AnimatedButton>
            <AnimatedButton variant="outline" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <Send size={14} /> Distribute
            </AnimatedButton>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>
          <select style={{ padding: "10px 16px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "0.875rem", outline: "none", backgroundColor: "#ffffff" }}>
            <option>All Events</option><option>Leadership Summit</option><option>Tech Hackathon</option>
          </select>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #f0f0f0", overflow: "hidden" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #f0f0f0", backgroundColor: "#f9fafb" }}>
                {["Participant", "Event", "Role", "Hours", "Status", "Actions"].map((h) => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: h === "Actions" ? "right" : "left", fontSize: "0.8rem", fontWeight: "600", color: "#6b7280" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {certificates.map((c, i) => (
                <motion.tr key={i} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  style={{ borderBottom: "1px solid #f5f5f5", transition: "background-color 0.15s" }}
                >
                  <td style={{ padding: "14px 16px", fontWeight: "600", fontSize: "0.875rem", color: "#0d0b08" }}>{c.name}</td>
                  <td style={{ padding: "14px 16px", fontSize: "0.875rem", color: "#374151" }}>{c.event}</td>
                  <td style={{ padding: "14px 16px" }}><span style={{ fontSize: "0.75rem", padding: "3px 10px", borderRadius: "20px", border: "1px solid #e5e7eb", color: "#374151" }}>{c.role}</span></td>
                  <td style={{ padding: "14px 16px", fontSize: "0.875rem", color: "#374151" }}>{c.hours}h</td>
                  <td style={{ padding: "14px 16px" }}>
                    <span style={{ backgroundColor: c.generated ? "#dcfce7" : "#fef9c3", color: c.generated ? "#15803d" : "#a16207", fontSize: "0.75rem", fontWeight: "600", padding: "3px 10px", borderRadius: "20px" }}>
                      {c.generated ? "Generated" : "Pending"}
                    </span>
                  </td>
                  <td style={{ padding: "14px 16px", textAlign: "right" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "4px" }}>
                      {!c.generated && (
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: "6px 12px", borderRadius: "8px", border: "none", backgroundColor: "#f0f9f7", color: "#2e8673", cursor: "pointer", fontSize: "0.8rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
                          <Award size={13} /> Generate
                        </motion.button>
                      )}
                      {c.generated && (
                        <>
                          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: "6px 12px", borderRadius: "8px", border: "none", backgroundColor: "#f0f9f7", color: "#2e8673", cursor: "pointer", fontSize: "0.8rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
                            <Download size={13} /> Download
                          </motion.button>
                          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: "6px 12px", borderRadius: "8px", border: "none", backgroundColor: "#f0f9f7", color: "#2e8673", cursor: "pointer", fontSize: "0.8rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
                            <Send size={13} /> Send
                          </motion.button>
                        </>
                      )}
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