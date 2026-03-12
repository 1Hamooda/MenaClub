import { Users, Calendar, TrendingUp, Award, Activity } from "lucide-react";

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

const stats = [
  { icon: Users, label: "Total Members", value: "2,547", change: "+182 this month" },
  { icon: Calendar, label: "Active Events", value: "12", change: "+3 new" },
  { icon: TrendingUp, label: "Participation Rate", value: "78%", change: "+5% vs last month" },
  { icon: Award, label: "Certificates Issued", value: "834", change: null },
];

const eventMetrics = [
  { label: "Events This Month", value: 6 },
  { label: "Avg Attendance", value: 45 },
  { label: "Points Distributed", value: "12.4K" },
  { label: "Pending Applications", value: 28 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">Platform overview and analytics.</p>
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

      {/* Charts + Activity */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="font-semibold mb-4">Attendance Overview</h2>
          <div className="space-y-3">
            {chartData.map((d) => (
              <div key={d.month} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-8">{d.month}</span>
                <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${(d.attendance / 350) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-medium w-8 text-right">{d.attendance}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{a.action}</p>
                  <p className="text-xs text-gray-500">{a.user}</p>
                </div>
                <span className="text-xs text-gray-400 shrink-0">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Event Metrics */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h2 className="font-semibold mb-4">Event Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {eventMetrics.map((m) => (
            <div key={m.label} className="text-center p-4 rounded-xl bg-gray-50">
              <p className="text-2xl font-bold">{m.value}</p>
              <p className="text-xs text-gray-500 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}