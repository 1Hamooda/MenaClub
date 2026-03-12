"use client"

import { User, Mail, Clock, Award, CheckSquare, Calendar, BarChart, Download } from "lucide-react"

const stats = [
  { label: "Events Attended", value: "12", icon: Calendar },
  { label: "Tasks Completed", value: "28", icon: CheckSquare },
  { label: "Certificates", value: "7", icon: Award },
  { label: "Attendance Rate", value: "92%", icon: BarChart },
]

const events = [
  { name: "Bisawa3dina Environmental Initiative", date: "Feb 2023", role: "Coordinator", status: "Attended" },
  { name: "Iftar for International Students", date: "Ramadan 2024", role: "Host", status: "Attended" },
  { name: "Afaq Forum — Youth Clubs Meetup", date: "2025", role: "Usher", status: "Upcoming" },
  { name: "Tawjihi Celebration Day", date: "Summer 2024", role: "Volunteer", status: "Missed" },
]

const tasks = [
  { name: "Set up registration desk", event: "Afaq Forum", status: "Pending" },
  { name: "Guide attendees to halls", event: "Afaq Forum", status: "Pending" },
  { name: "Collect feedback forms", event: "MENA Reads", status: "Done" },
]

const certificates = [
  { event: "Bisawa3dina Environmental Initiative", date: "Feb 2023" },
  { event: "Iftar for International Students", date: "Ramadan 2024" },
  { event: "MENA Reads — Reading Club", date: "Ongoing" },
  { event: "Feed & Benefit Initiative", date: "2024" },
]

const statusColor: Record<string, string> = {
  Upcoming: "bg-blue-100 text-blue-700",
  Attended: "bg-green-100 text-green-700",
  Missed: "bg-red-100 text-red-600",
  Done: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
}

export default function VolunteerProfilePage() {
  return (
    <div className="flex flex-col gap-6">

      {/* Profile Header */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
            <User className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Sara Mohammed</h1>
            <p className="text-muted-foreground flex items-center gap-2 mt-1">
              <Mail className="h-4 w-4" /> sara@example.com
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="rounded-full bg-primary/20 text-primary text-xs font-medium px-3 py-1">
                Volunteer
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" /> Joined Mar 2025
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

      {/* My Events */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">My Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((e, i) => (
            <div key={i} className="rounded-lg border border-border/50 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-foreground">{e.name}</p>
                  <p className="text-sm text-muted-foreground">{e.date} · {e.role}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[e.status]}`}>
                  {e.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assigned Tasks */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Assigned Tasks</h2>
        <div className="space-y-3">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-border/50 p-4">
              <div>
                <p className="font-medium text-foreground">{task.name}</p>
                <p className="text-sm text-muted-foreground">{task.event}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[task.status]}`}>
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((c, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-border/50 p-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{c.event}</p>
                  <p className="text-sm text-muted-foreground">{c.date}</p>
                </div>
              </div>
              <button className="flex items-center gap-1 border border-border text-muted-foreground hover:border-primary hover:text-primary px-3 py-1.5 rounded-lg text-xs transition-colors">
                <Download className="h-3 w-3" /> PDF
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
