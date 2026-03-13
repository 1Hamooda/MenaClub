"use client"

import Link from "next/link"
import { User, Mail, Clock, Star, Award, CheckSquare, Calendar } from "lucide-react"

const participationHistory = [
  { event: "Bisawa3dina Environmental Initiative", date: "Feb 2023", role: "Coordinator", points: 150, status: "Completed" },
  { event: "Iftar for International Students", date: "Ramadan 2024", role: "Host", points: 80, status: "Completed" },
  { event: "MENA Reads — Reading Club", date: "Ongoing", role: "Facilitator", points: 100, status: "Completed" },
  { event: "Tawjihi Celebration Day", date: "Summer 2024", role: "Volunteer", points: 0, status: "Missed" },
]

const assignedTasks = [
  { name: "Prepare event materials", event: "Bisawa3dina Initiative", due: "Feb 10, 2023", status: "Done" },
  { name: "Review participant list", event: "Afaq Forum", due: "Mar 22, 2026", status: "Pending" },
  { name: "Send invitations", event: "MENA Reads", due: "Feb 5, 2026", status: "Done" },
]

const pointsBreakdown = [
  { event: "Bisawa3dina Environmental Initiative", points: 150 },
  { event: "Iftar for International Students", points: 80 },
  { event: "MENA Reads — Reading Club", points: 100 },
  { event: "Tawjihi Celebration Day", points: 0 },
  { event: "Feed & Benefit Initiative", points: 120 },
]

const stats = [
  { label: "Total Points", value: "1,250", icon: Star },
  { label: "Events Attended", value: "8", icon: Calendar },
  { label: "Tasks Completed", value: "15", icon: CheckSquare },
  { label: "Certificates", value: "5", icon: Award },
]

const statusColor: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  Missed: "bg-red-100 text-red-600",
  Done: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
}

const sidebarLinks = [
  { href: "/member", label: "Dashboard" },
  { href: "/member/my-events", label: "My Events" },
  { href: "/member/my-tasks", label: "My Tasks" },
  { href: "/member/certificates", label: "Certificates" },
  { href: "/member/points", label: "Points & Rewards" },
  { href: "/member/job-recommendations", label: "Job Recommendations" },
  { href: "/member/profile", label: "Profile" },
  { href: "/member/settings", label: "Settings" },
]

export default function MemberProfilePage() {
  return (
    <div className="flex min-h-screen bg-background">

      {/* ── Sidebar ── */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-border bg-card p-6 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-foreground mb-4">Member Panel</h2>
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </aside>

      {/* ── Main Content ── */}
      <main className="ml-64 flex-1 p-8">

        {/* Profile Header */}
        <div className="rounded-xl border border-border bg-card p-6 mb-6">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Ahmed Al-Hassan</h1>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Mail className="h-4 w-4" /> ahmed@example.com
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span className="rounded-full bg-primary/20 text-primary text-xs font-medium px-3 py-1">
                  Member
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Joined Jan 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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

        {/* Participation History */}
        <div className="rounded-xl border border-border bg-card p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Participation History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="pb-3 text-left font-medium">Event</th>
                  <th className="pb-3 text-left font-medium">Date</th>
                  <th className="pb-3 text-left font-medium">Role</th>
                  <th className="pb-3 text-left font-medium">Points</th>
                  <th className="pb-3 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {participationHistory.map((p, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 text-foreground">{p.event}</td>
                    <td className="py-3 text-muted-foreground">{p.date}</td>
                    <td className="py-3 text-muted-foreground">{p.role}</td>
                    <td className="py-3 text-primary font-semibold">+{p.points}</td>
                    <td className="py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[p.status]}`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Assigned Tasks */}
        <div className="rounded-xl border border-border bg-card p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Assigned Tasks</h2>
          <div className="space-y-3">
            {assignedTasks.map((task, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border/50 p-4">
                <div>
                  <p className="font-medium text-foreground">{task.name}</p>
                  <p className="text-sm text-muted-foreground">{task.event} · Due: {task.due}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[task.status]}`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Points Breakdown */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Earned Points Breakdown</h2>
          <div className="space-y-2">
            {pointsBreakdown.map((p, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border/50 p-3">
                <span className="text-foreground">{p.event}</span>
                <span className="font-semibold text-primary">+{p.points}</span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}
