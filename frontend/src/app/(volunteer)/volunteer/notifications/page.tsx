<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
import { Bell, Calendar, CheckCircle, Award } from "lucide-react";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const notifications = [
  { type: "approved", title: "Event Registration Confirmed", message: "You're registered for Youth Leadership Summit as Registration Desk.", time: "1 hour ago", icon: CheckCircle },
=======
import { Bell, Calendar, CheckCircle, Award } from "lucide-react";

const notifications = [
  { type: "approved", title: "Event Registration Confirmed", message: "You are registered for Youth Leadership Summit as Registration Desk.", time: "1 hour ago", icon: CheckCircle },
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
  { type: "info", title: "New Event Available", message: "MENA Debate Championship is now looking for volunteers.", time: "1 day ago", icon: Calendar },
  { type: "approved", title: "Certificate Ready", message: "Your certificate for Community Clean-up is ready to download.", time: "3 days ago", icon: Award },
  { type: "info", title: "Reminder", message: "Leadership Summit is tomorrow. Please arrive by 8:30 AM.", time: "4 days ago", icon: Bell },
];

<<<<<<< HEAD
const typeStyles: Record<string, { bg: string; color: string }> = {
  approved: { bg: "#dcfce7", color: "#15803d" },
  info:     { bg: "#f0f9f7", color: "#2e8673" },
=======
const iconBg: Record<string, string> = {
  approved: "bg-green-100",
  info: "bg-primary/10",
};

const iconColor: Record<string, string> = {
  approved: "text-green-600",
  info: "text-primary",
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
};

export default function VolunteerNotifications() {
  return (
<<<<<<< HEAD
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>Notifications</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Updates about your volunteer activities.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "640px" }}>
          {notifications.map((n, i) => (
            <motion.div key={i} custom={i} initial="hidden" animate="visible" variants={fadeUp}
              whileHover={{ x: 4, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "18px 20px", border: "1px solid #f0f0f0", display: "flex", alignItems: "flex-start", gap: "16px" }}
            >
              <div style={{ height: "40px", width: "40px", borderRadius: "12px", backgroundColor: typeStyles[n.type].bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <n.icon size={20} style={{ color: typeStyles[n.type].color }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <p style={{ fontWeight: "700", fontSize: "0.875rem", color: "#0d0b08" }}>{n.title}</p>
                  {n.type === "approved" && (
                    <span style={{ backgroundColor: "#dcfce7", color: "#15803d", fontSize: "0.7rem", fontWeight: "600", padding: "2px 8px", borderRadius: "20px" }}>Confirmed</span>
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
=======
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Notifications</h1>
        <p className="text-gray-500">Updates about your volunteer activities.</p>
      </div>

      <div className="space-y-3 max-w-2xl">
        {notifications.map((n, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 shadow-sm">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg[n.type]}`}>
              <n.icon className={`h-5 w-5 ${iconColor[n.type]}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm">{n.title}</p>
                {n.type === "approved" && (
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                    Approved
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{n.message}</p>
              <p className="text-xs text-gray-400 mt-1">{n.time}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
  );
}