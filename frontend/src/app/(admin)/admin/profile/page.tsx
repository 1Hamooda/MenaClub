"use client"

import { Shield, Mail, Calendar, Users, Award, Activity, Clock } from "lucide-react"

const stats = [
  { label: "Events Managed", value: "45", icon: Calendar },
  { label: "Total Members", value: "320", icon: Users },
  { label: "Total Volunteers", value: "180", icon: Users },
  { label: "Certificates Issued", value: "890", icon: Award },
]

const recentActivity = [
  { action: "Approved member registration", detail: "Ahmed Al-Hassan", time: "2 hours ago" },
  { action: "Created event", detail: "Youth Leadership Summit 2026", time: "5 hours ago" },
  { action: "Sent notification", detail: "Event reminder to all volunteers", time: "1 day ago" },
  { action: "Generated certificates", detail: "Tech Skills Workshop", time: "2 days ago" },
  { action: "Rejected member registration", detail: "Test User", time: "3 days ago" },
]

const permissions = [
  "Manage Users", "Manage Events", "Send Notifications", "Generate Certificates",
  "View Reports", "Manage Announcements", "Attendance Codes", "System Settings",
]

export default function AdminProfilePage() {
  return (
    <div className="flex flex-col gap-6">

      {/* Profile Header */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Admin User</h1>
            <p className="text-muted-foreground flex items-center gap-2 mt-1">
              <Mail className="h-4 w-4" /> admin@menaclub.org
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="rounded-full bg-primary/20 text-primary text-xs font-medium px-3 py-1">
                Admin
              </span>
              <span className="rounded-full border border-border text-muted-foreground text-xs font-medium px-3 py-1">
                Full Access
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" /> Recent Activity
        </h2>
        <div className="space-y-3">
          {recentActivity.map((a, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-border/50 p-4">
              <div>
                <p className="font-medium text-foreground">{a.action}</p>
                <p className="text-sm text-muted-foreground">{a.detail}</p>
              </div>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" /> {a.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Permissions */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" /> Permissions
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {permissions.map((p) => (
            <div key={p} className="flex items-center gap-2 rounded-lg border border-border/50 p-3">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

