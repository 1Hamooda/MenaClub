import { Key, RefreshCw, Copy, CheckCircle } from "lucide-react";

const codes = [
  { event: "Youth Leadership Summit", code: "MENA-2026-XY7K", created: "Mar 24", checkins: 42, total: 50 },
  { event: "Tech Hackathon", code: "MENA-2026-H4CK", created: "Apr 9", checkins: 0, total: 30 },
];

const checkins = [
  { name: "Ahmad Khalil", time: "9:02 AM", status: "approved" },
  { name: "Layla Mohammed", time: "9:05 AM", status: "approved" },
  { name: "Omar Hassan", time: "9:12 AM", status: "approved" },
  { name: "Fatima Al-Sayed", time: "9:15 AM", status: "pending" },
];

const statusStyles: Record<string, string> = {
  approved: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
};

export default function AdminAttendance() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Attendance Management</h1>
        <p className="text-gray-500">Generate codes and monitor check-ins.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Generate Code */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" /> Generate Code
          </h2>
          <div className="space-y-4">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select event</option>
              <option value="summit">Youth Leadership Summit</option>
              <option value="hack">Tech Hackathon</option>
              <option value="clean">Community Clean-up</option>
            </select>
            <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-xl text-sm font-medium hover:bg-primary transition">
              <RefreshCw className="h-4 w-4" /> Generate New Code
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {codes.map((c) => (
              <div key={c.code} className="p-4 rounded-xl bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">{c.event}</p>
                  <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
                    {c.checkins}/{c.total}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-white border border-gray-200 px-3 py-2 rounded-lg font-mono text-sm tracking-wider">
                    {c.code}
                  </code>
                  <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-500 transition">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">Created: {c.created}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Check-ins */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" /> Live Check-ins
          </h2>
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-3 py-2 font-medium text-gray-600">Volunteer</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">Time</th>
                <th className="text-left px-3 py-2 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {checkins.map((c, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-3 py-3 font-medium">{c.name}</td>
                  <td className="px-3 py-3 text-gray-500">{c.time}</td>
                  <td className="px-3 py-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${statusStyles[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}