"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Award, Star, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PageWrapper from "@/components/ui/PageWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const stats = [
  { icon: Calendar, label: "Events Attended", value: 12, change: "+3 this month" },
  { icon: Award, label: "Total Points", value: 825, change: "+125 this month" },
  { icon: Star, label: "Badges Earned", value: 5, change: null },
  { icon: TrendingUp, label: "Rank", value: "#42", change: "Up 8 spots" },
];

const recentEvents = [
  { title: "Community Clean-up Drive", date: "Feb 15, 2026", role: "Participant", points: 50 },
  { title: "Youth Leadership Workshop", date: "Jan 28, 2026", role: "Facilitator", points: 100 },
  { title: "Tech Mentorship Program", date: "Jan 10, 2026", role: "Mentee", points: 75 },
];

const tasks = [
  { title: "Submit event feedback form", status: "pending", due: "Mar 10" },
  { title: "Complete leadership quiz", status: "approved", due: "Mar 8" },
  { title: "Upload volunteer certificate", status: "rejected", due: "Mar 5" },
];

const statusStyles: Record<string, { bg: string; color: string; label: string }> = {
  pending:  { bg: "#fef9c3", color: "#a16207", label: "Pending" },
  approved: { bg: "#dcfce7", color: "#15803d", label: "Approved" },
  rejected: { bg: "#fee2e2", color: "#b91c1c", label: "Rejected" },
};

export default function MemberDashboard() {
  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}
        >
          <div>
            <h1 style={{ fontSize: "1.875rem", fontWeight: "800", color: "#0d0b08", letterSpacing: "-0.02em" }}>Welcome back, Ahmad 👋</h1>
            <p style={{ color: "#6b7280", marginTop: "4px" }}>Here&apos;s an overview of your MENA Club journey.</p>
          </div>
          <Link href="/member/events">
            <AnimatedButton variant="primary" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <Sparkles size={15} /> Explore Events
            </AnimatedButton>
          </Link>
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

        {/* Content Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

          {/* Participation History */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0d0b08" }}>Participation History</h2>
              <Link href="/member/events" style={{ fontSize: "0.8rem", color: "#2e8673", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none", fontWeight: "500" }}>
                View all <ArrowRight size={12} />
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {recentEvents.map((e, i) => (
                <motion.div key={e.title}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4, backgroundColor: "#f0f9f7" }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderRadius: "12px", backgroundColor: "#f9fafb", cursor: "default", transition: "background-color 0.2s" }}
                >
                  <div>
                    <p style={{ fontWeight: "600", fontSize: "0.875rem", color: "#0d0b08" }}>{e.title}</p>
                    <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "2px" }}>{e.date} · {e.role}</p>
                  </div>
                  <span style={{ backgroundColor: "#f0f9f7", color: "#2e8673", fontWeight: "700", fontSize: "0.75rem", padding: "4px 10px", borderRadius: "20px" }}>+{e.points} pts</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Assigned Tasks */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
          >
            <h2 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0d0b08", marginBottom: "20px" }}>Assigned Tasks</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {tasks.map((t, i) => (
                <motion.div key={t.title}
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.1 }}
                  whileHover={{ x: 4, backgroundColor: "#f0f9f7" }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderRadius: "12px", backgroundColor: "#f9fafb", cursor: "default", transition: "background-color 0.2s" }}
                >
                  <div>
                    <p style={{ fontWeight: "600", fontSize: "0.875rem", color: "#0d0b08" }}>{t.title}</p>
                    <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "2px" }}>Due: {t.due}</p>
                  </div>
                  <span style={{ backgroundColor: statusStyles[t.status].bg, color: statusStyles[t.status].color, fontWeight: "600", fontSize: "0.75rem", padding: "4px 10px", borderRadius: "20px" }}>
                    {statusStyles[t.status].label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
        >
          <h2 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0d0b08", marginBottom: "16px" }}>Quick Actions</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/member/events">
              <AnimatedButton variant="primary" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px" }}>Browse Events</AnimatedButton>
            </Link>
            <Link href="/member/jobs">
              <AnimatedButton variant="outline" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px" }}>AI Job Match</AnimatedButton>
            </Link>
            <Link href="/member/notifications">
              <AnimatedButton variant="outline" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px" }}>Notifications</AnimatedButton>
            </Link>
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
}