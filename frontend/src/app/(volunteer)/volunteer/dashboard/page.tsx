<<<<<<< HEAD
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, Award, ArrowRight } from "lucide-react";
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
  { icon: Calendar, label: "Events Volunteered", value: 8, change: "+2 this month" },
  { icon: Clock, label: "Hours Contributed", value: 64, change: null },
  { icon: CheckCircle, label: "Tasks Completed", value: 23, change: null },
  { icon: Award, label: "Certificates", value: 4, change: null },
];
=======
import Link from "next/link";
import { Calendar, CheckCircle, Clock, Award } from "lucide-react";
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9

const upcomingEvents = [
  { title: "Youth Leadership Summit", date: "Mar 25", role: "Registration Desk" },
  { title: "Tech Hackathon", date: "Apr 10", role: "Volunteer Lead" },
];

const tasks = [
  { title: "Set up registration tables", event: "Leadership Summit", due: "Mar 25, 9 AM", done: false },
  { title: "Prepare attendee badges", event: "Leadership Summit", due: "Mar 24", done: true },
  { title: "Coordinate catering delivery", event: "Tech Hackathon", due: "Apr 10, 8 AM", done: false },
];

<<<<<<< HEAD
export default function VolunteerDashboard() {
  const completedCount = tasks.filter((t) => t.done).length;
  const progressPercent = (completedCount / tasks.length) * 100;

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}
        >
          <div>
            <h1 style={{ fontSize: "1.875rem", fontWeight: "800", color: "#0d0b08", letterSpacing: "-0.02em" }}>Welcome back, Layla 🌟</h1>
            <p style={{ color: "#6b7280", marginTop: "4px" }}>Here&apos;s your volunteer overview.</p>
          </div>
          <Link href="/volunteer/checkin">
            <AnimatedButton variant="primary" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle size={15} /> Check-in Now
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

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
          style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "20px 24px", border: "1px solid #f0f0f0" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <p style={{ fontSize: "0.875rem", fontWeight: "600", color: "#0d0b08" }}>Current Task Progress</p>
            <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>{completedCount}/{tasks.length} completed</p>
          </div>
          <div style={{ height: "10px", backgroundColor: "#f0f0f0", borderRadius: "99px", overflow: "hidden" }}>
            <motion.div
              initial={{ width: 0 }} animate={{ width: `${progressPercent}%` }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              style={{ height: "100%", backgroundColor: "#2e8673", borderRadius: "99px" }}
            />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

          {/* Upcoming Events */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0d0b08" }}>Upcoming Events</h2>
              <Link href="/volunteer/events" style={{ fontSize: "0.8rem", color: "#2e8673", display: "flex", alignItems: "center", gap: "4px", textDecoration: "none", fontWeight: "500" }}>
                View all <ArrowRight size={12} />
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {upcomingEvents.map((e, i) => (
                <motion.div key={e.title}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4, backgroundColor: "#f0f9f7" }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderRadius: "12px", backgroundColor: "#f9fafb", cursor: "default", transition: "background-color 0.2s" }}
                >
                  <div>
                    <p style={{ fontWeight: "600", fontSize: "0.875rem", color: "#0d0b08" }}>{e.title}</p>
                    <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "2px" }}>{e.date} · {e.role}</p>
                  </div>
                  <span style={{ backgroundColor: "#dbeafe", color: "#1d4ed8", fontWeight: "600", fontSize: "0.7rem", padding: "3px 10px", borderRadius: "20px" }}>Upcoming</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Task List */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #f0f0f0" }}
          >
            <h2 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0d0b08", marginBottom: "20px" }}>Task List</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {tasks.map((t, i) => (
                <motion.div key={t.title}
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.1 }}
                  whileHover={{ x: 4, backgroundColor: "#f0f9f7" }}
                  style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px", borderRadius: "12px", backgroundColor: "#f9fafb", cursor: "default", transition: "background-color 0.2s" }}
                >
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                    style={{ height: "20px", width: "20px", borderRadius: "50%", border: t.done ? "2px solid #2e8673" : "2px solid #d1d5db", backgroundColor: t.done ? "#2e8673" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                  >
                    {t.done && <CheckCircle size={12} style={{ color: "#ffffff" }} />}
                  </motion.div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.875rem", fontWeight: "600", color: t.done ? "#9ca3af" : "#0d0b08", textDecoration: t.done ? "line-through" : "none" }}>{t.title}</p>
                    <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "2px" }}>{t.event} · Due: {t.due}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
        >
          <Link href="/volunteer/events"><AnimatedButton variant="primary" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px" }}>My Events</AnimatedButton></Link>
          <Link href="/volunteer/checkin"><AnimatedButton variant="outline" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px" }}>Check-in</AnimatedButton></Link>
          <Link href="/volunteer/certificates"><AnimatedButton variant="outline" style={{ padding: "10px 20px", fontSize: "0.875rem", borderRadius: "12px" }}>Certificates</AnimatedButton></Link>
        </motion.div>

      </div>
    </PageWrapper>
=======
const stats = [
  { icon: Calendar, label: "Events Volunteered", value: "8", change: "+2 this month" },
  { icon: Clock, label: "Hours Contributed", value: "64", change: null },
  { icon: CheckCircle, label: "Tasks Completed", value: "23", change: null },
  { icon: Award, label: "Certificates", value: "4", change: null },
];

export default function VolunteerDashboard() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Welcome back, Layla</h1>
        <p className="text-gray-500">Here is your volunteer overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <s.icon className="h-4 w-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            {s.change && <p className="text-xs text-green-600 mt-1">{s.change}</p>}
          </div>
        ))}
      </div>

      {/* Upcoming Events + Tasks */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((e) => (
              <div key={e.title} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                <div>
                  <p className="font-medium text-sm">{e.title}</p>
                  <p className="text-xs text-gray-500">{e.date} · {e.role}</p>
                </div>
                <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-1 rounded-full">
                  Upcoming
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="font-semibold mb-4">Task List</h2>
          <div className="space-y-3">
            {tasks.map((t) => (
              <div key={t.title} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  t.done ? "bg-primary border-primary" : "border-gray-300"
                }`}>
                  {t.done && <CheckCircle className="h-3 w-3 text-white" />}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${t.done ? "line-through text-gray-400" : ""}`}>{t.title}</p>
                  <p className="text-xs text-gray-500">{t.event} · Due: {t.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <Link href="/volunteer/events" className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
          My Events
        </Link>
        <Link href="/volunteer/checkin" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
          Check-in
        </Link>
        <Link href="/volunteer/certificates" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
          Certificates
        </Link>
      </div>

    </div>
>>>>>>> bc7839e865ef8e0979a53b707b7308a4b1f76be9
  );
}