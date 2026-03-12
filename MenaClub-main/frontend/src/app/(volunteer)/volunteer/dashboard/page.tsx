import Link from "next/link";
import { Calendar, CheckCircle, Clock, Award } from "lucide-react";

const upcomingEvents = [
  { title: "Youth Leadership Summit", date: "Mar 25", role: "Registration Desk" },
  { title: "Tech Hackathon", date: "Apr 10", role: "Volunteer Lead" },
];

const tasks = [
  { title: "Set up registration tables", event: "Leadership Summit", due: "Mar 25, 9 AM", done: false },
  { title: "Prepare attendee badges", event: "Leadership Summit", due: "Mar 24", done: true },
  { title: "Coordinate catering delivery", event: "Tech Hackathon", due: "Apr 10, 8 AM", done: false },
];

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
  );
}