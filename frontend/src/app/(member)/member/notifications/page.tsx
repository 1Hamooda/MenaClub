"use client";

import { motion } from "framer-motion";
import { Bell, Calendar, CheckCircle, XCircle } from "lucide-react";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const notifications = [
  { id: 1, type: "approved", title: "Application Approved", message: "You've been accepted as a Coordinator for Youth Leadership Summit.", time: "2 hours ago", icon: CheckCircle },
  { id: 2, type: "rejected", title: "Application Update", message: "Your application for Tech Hackathon - Designer role was not selected this time.", time: "1 day ago", icon: XCircle },
  { id: 3, type: "info", title: "New Event Available", message: "Cultural Exchange Night in Cairo is now accepting applications.", time: "2 days ago", icon: Calendar },
  { id: 4, type: "approved", title: "Points Earned", message: "You earned 50 points for completing the Community Clean-up event.", time: "3 days ago", icon: CheckCircle },
  { id: 5, type: "info", title: "Reminder", message: "Don't forget to submit your feedback for the Leadership Workshop.", time: "5 days ago", icon: Bell },
];

const typeStyles: Record<string, { bg: string; color: string; badgeBg: string; badgeColor: string; label: string }> = {
  approved: { bg: "#dcfce7", color: "#15803d", badgeBg: "#dcfce7", badgeColor: "#15803d", label: "Approved" },
  rejected: { bg: "#fee2e2", color: "#b91c1c", badgeBg: "#fee2e2", badgeColor: "#b91c1c", label: "Rejected" },
  info:     { bg: "#f0f9f7", color: "#2e8673", badgeBg: "", badgeColor: "", label: "" },
};

export default function MemberNotifications() {
  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Notifications</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Stay updated on your applications and activities.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "640px" }}>
          {notifications.map((n, i) => (
            <motion.div key={n.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}
              whileHover={{ x: 4, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "18px 20px", border: "1px solid #f0f0f0", display: "flex", alignItems: "flex-start", gap: "16px" }}
            >
              <div style={{ height: "40px", width: "40px", borderRadius: "12px", backgroundColor: typeStyles[n.type].bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <n.icon size={20} style={{ color: typeStyles[n.type].color }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <p style={{ fontWeight: "700", fontSize: "0.875rem", color: "#0d0b08" }}>{n.title}</p>
                  {n.type !== "info" && (
                    <span style={{ backgroundColor: typeStyles[n.type].badgeBg, color: typeStyles[n.type].badgeColor, fontSize: "0.7rem", fontWeight: "600", padding: "2px 8px", borderRadius: "20px" }}>
                      {typeStyles[n.type].label}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: "1.5" }}>{n.message}</p>
                <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "6px" }}>{n.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}