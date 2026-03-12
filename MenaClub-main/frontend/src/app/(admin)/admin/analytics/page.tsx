import { Download } from "lucide-react";

const metrics = [
  { label: "Total Attendance", value: "1,847", data: [40, 55, 45, 60, 75, 65, 80, 90, 70, 85, 95, 88] },
  { label: "Active Members", value: "2,547", data: [200, 220, 250, 280, 310, 350, 380, 420, 450, 480, 520, 547] },
  { label: "Events Held", value: "48", data: [3, 4, 5, 3, 6, 4, 5, 7, 4, 6, 5, 4] },
  { label: "Avg Points/Member", value: "324", data: [180, 200, 220, 240, 260, 280, 290, 300, 310, 315, 320, 324] },
];

const topMembers = [
  { name: "Ahmad Khalil", points: 825, events: 12 },
  { name: "Layla Mohammed", points: 780, events: 10 },
  { name: "Omar Hassan", points: 720, events: 11 },
  { name: "Fatima Al-Sayed", points: 695, events: 9 },
  { name: "Nour Khalil", points: 650, events: 8 },
];

export default function AdminReports() {
  return (
    <div className="space-y-6">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-gray-500">Filterable analytics and export options.</p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="12">Last 12 months</option>
            <option value="6">Last 6 months</option>
            <option value="3">Last 3 months</option>
          </select>
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">{m.label}</p>
            <p className="text-2xl font-bold mb-4">{m.value}</p>
            <div className="flex items-end gap-1 h-20">
              {m.data.map((v, i) => {
                const max = Math.max(...m.data);
                return (
                  <div
                    key={i}
                    className="flex-1 bg-blue-100 rounded-t hover:bg-blue-300 transition-colors"
                    style={{ height: `${(v / max) * 100}%` }}
                  />
                );
              })}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Apr</span><span>Aug</span><span>Mar</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h2 className="font-semibold mb-4">Top Members by Points</h2>
        <div className="space-y-3">
          {topMembers.map((m, i) => (
            <div key={m.name} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
              <span className="text-lg font-bold text-primary w-8">#{i + 1}</span>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                {m.name.split(" ").map((n: string) => n[0]).join("")}
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{m.name}</p>
                <p className="text-xs text-gray-500">{m.events} events</p>
              </div>
              <span className="font-bold text-primary">{m.points} pts</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}