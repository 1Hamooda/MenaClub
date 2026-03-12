"use client";

import { motion } from "framer-motion";
import { Users, Calendar, TrendingUp, Award, Activity, ArrowUpRight } from "lucide-react";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const stats = [
  { icon: Users, label: "Total Members", value: "2,547", change: "+182 this month" },
  { icon: Calendar, label: "Active Events", value: 12, change: "+3 new" },
  { icon: TrendingUp, label: "Participation Rate", value: "78%", change: "+5% vs last month" },
  { icon: Award, label: "Certificates Issued", value: 834, change: null },
];

const chartData = [
  { month: "Oct", attendance: 180 },
  { month: "Nov", attendance: 220 },
  { month: "Dec", attendance: 150 },
  { month: "Jan", attendance: 280 },
  { month: "Feb", attendance: 310 },
  { month: "Mar", attendance: 250 },
];

const recentActivity = [
  { action: "New member registration", user: "Fatima Al-Sayed", time: "10 min ago" },
  { action: "Event application submitted", user: "Omar Hassan", time: "25 min ago" },
  { action: "Certificate generated", user: "Nour Khalil", time: "1 hour ago" },
  { action: "Announcement published", user: "Admin", time: "2 hours ago" },
  { action: "Volunteer check-in", user: "Layla Mohammed", time: "3 hours ago" },
];

const eventMetrics = [
  { label: "Events This Month", value: 6 },
  { label: "Avg Attendance", value: 45 },
  { label: "Points Distributed", value: "12.4K" },
  { label: "Pending Applications", value: 28 },
];

const maxAttendance = Math.max(...chartData.map((d) => d.attendance));

export default function AdminDashboard() {
  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "1.875rem", fontWeight: "800", color: "#0d0b08", letterSpacing: "-0.02em" }}>Admin Dashboard</h1>
          <p style={{ color: "#6b7280", marginTop: "4px" }}>Platform overview and analytics.</p>
        </motion.div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" animate="visible" variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(46,134,115,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
            >
              <div style={{ height: "40px", width: "40px", borderRadius: "12px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                <stat.icon size={20} style={{ color: "#2e8673" }} />
              </div>
              <p style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0d0b08" }}>{stat.value}</p>
              <p style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "2px" }}>{stat.label}</p>
              {stat.change && <p style={{ fontSize: "0.75rem", color: "#2e8673", fontWeight: "600", marginTop: "6px" }}>{stat.change}</p>}
            </motion.div>
          ))}
        </div>

        {/* Chart + Activity */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

          {/* Bar Chart */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
          >
            <h2 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0d0b08", marginBottom: "24px" }}>Attendance Overview</h2>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "160px" }}>
              {chartData.map((d, i) => (
                <div key={d.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%" }}>
                  <span style={{ fontSize: "0.7rem", color: "#6b7280", fontWeight: "500" }}>{d.attendance}</span>
                  <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                    <motion.div
                      initial={{ height: 0 }} animate={{ height: `${(d.attendance / maxAttendance) * 100}%` }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                      whileHover={{ backgroundColor: "#2e8673" }}
                      style={{ width: "100%", backgroundColor: "rgba(46,134,115,0.6)", borderRadius: "6px 6px 0 0", cursor: "default", transition: "background-color 0.2s" }}
                    />
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "#6b7280" }}>{d.month}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
          >
            <h2 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0d0b08", marginBottom: "20px" }}>Recent Activity</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {recentActivity.map((a, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.08 }}
                  whileHover={{ x: 4, backgroundColor: "#f0f9f7" }}
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", borderRadius: "12px", backgroundColor: "#f9fafb", cursor: "default", transition: "background-color 0.2s" }}
                >
                  <div style={{ height: "36px", width: "36px", borderRadius: "10px", backgroundColor: "#f0f9f7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Activity size={16} style={{ color: "#2e8673" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "0.875rem", fontWeight: "600", color: "#0d0b08", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.action}</p>
                    <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>{a.user}</p>
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "#9ca3af", flexShrink: 0 }}>{a.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Event Metrics */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
        >
          <h2 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0d0b08", marginBottom: "20px" }}>Event Metrics</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {eventMetrics.map((m, i) => (
              <motion.div key={m.label}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.08 }}
                whileHover={{ scale: 1.03, backgroundColor: "#f0f9f7" }}
                style={{ textAlign: "center", padding: "20px", borderRadius: "14px", backgroundColor: "#f9fafb", cursor: "default", transition: "background-color 0.2s" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                  <p style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0d0b08" }}>{m.value}</p>
                  <ArrowUpRight size={14} style={{ color: "#2e8673" }} />
                </div>
                <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "6px" }}>{m.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}