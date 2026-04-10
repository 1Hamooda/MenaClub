import Link from "next/link";
import { Calendar, Award, Star, TrendingUp, ArrowRight } from "lucide-react";

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

const statusStyles: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

const stats = [
  { icon: Calendar, label: "Events Attended", value: "12", change: "+3 this month" },
  { icon: Award, label: "Total Points", value: "825", change: "+125 this month" },
  { icon: Star, label: "Badges Earned", value: "5", change: null },
  { icon: TrendingUp, label: "Rank", value: "#42", change: "Up 8 spots" },
];

export default function MemberDashboard() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Welcome back, Ahmad</h1>
        <p className="text-gray-500">Here is an overview of your MENA Club journey.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="h-4 w-4 text-primary" />
              </div>
            </div>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            {s.change && <p className="text-xs text-green-600 mt-1">{s.change}</p>}
          </div>
        ))}
      </div>

      {/* Participation + Tasks */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Participation History</h2>
            <Link href="/member/events" className="text-sm text-primary hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentEvents.map((e) => (
              <div key={e.title} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                <div>
                  <p className="font-medium text-sm">{e.title}</p>
                  <p className="text-xs text-gray-500">{e.date} · {e.role}</p>
                </div>
                <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-1 rounded-full">
                  +{e.points} pts
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="font-semibold mb-4">Assigned Tasks</h2>
          <div className="space-y-3">
            {tasks.map((t) => (
              <div key={t.title} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                <div>
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500">Due: {t.due}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${statusStyles[t.status]}`}>
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h2 className="font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/member/events" className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
            Browse Events
          </Link>
          <Link href="/member/jobs" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
            AI Job Match
          </Link>
          <Link href="/member/notifications" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
            Notifications
          </Link>
        </div>
      </div>

    </div>
  );
}